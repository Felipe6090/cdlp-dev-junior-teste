import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";
import * as I from "../../../../Components/Foundations/Inputs";

import router from "next/router";

import { useContext, useState } from "react";

import { AuthContext } from "../../../../contexts/AuthContext";
import { PostsListContext } from "../../../../contexts/PostsListContext";

import { defaultApi } from "../../../../services/api";

export default function FormComponent() {
  const { authData } = useContext(AuthContext);

  const { postsListData, setPostsListData } = useContext(PostsListContext);

  const [inputsFilds, setInputsFilds] = useState({
    title: "",
    content: "",
  });

  async function handleCreatePost() {
    if (!authData || inputsFilds.title === "" || inputsFilds.content === "")
      return;

    const response = await defaultApi.post("/createPost", {
      userId: authData.id,
      ...inputsFilds,
      username: authData.username,
    });

    function orderByDate(a: any, b: any) {
      return b.created_datetime - a.created_datetime;
    }

    const result = response.data;

    const resArray = [result, ...postsListData];

    resArray.sort(orderByDate);

    setPostsListData(resArray);

    return router.replace("/");
  }

  return (
    <S.MainDiv>
      <T.DefaultRegularBlackFont>Whats on your mind?</T.DefaultRegularBlackFont>

      <S.InputDiv>
        <T.InputTitle>Title</T.InputTitle>

        <I.TitleInput
          placeholder="Hello Word"
          value={inputsFilds.title}
          onChange={(e) =>
            setInputsFilds({ ...inputsFilds, title: e.target.value })
          }
        />
      </S.InputDiv>

      <S.InputDiv>
        <T.InputTitle>Content</T.InputTitle>

        <I.ContentInput
          placeholder="Hello Word"
          value={inputsFilds.content}
          onChange={(e) =>
            setInputsFilds({ ...inputsFilds, content: e.target.value })
          }
        />
      </S.InputDiv>

      <I.CreateButton
        authorized={authData ? true : false}
        size="medium"
        onClick={() => handleCreatePost()}
      >
        Create
      </I.CreateButton>
    </S.MainDiv>
  );
}
