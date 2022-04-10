import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";
import * as I from "../../../../Components/Foundations/Inputs";

import router from "next/router";

import { useContext, useState } from "react";

import { AuthContext } from "../../../../contexts/AuthContext";
import { PostsListContext } from "../../../../contexts/PostsListContext";

import { api } from "../../../../services/api";

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

    const response = await api.post("/createPost", {
      userId: authData.id,
      ...inputsFilds,
      username: authData.username,
    });

    const result = response.data;

    console.log(result);

    setPostsListData([result, ...postsListData]);

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
