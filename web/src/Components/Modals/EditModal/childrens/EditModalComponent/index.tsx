import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";

import { useContext, useState } from "react";

import { PostsListContext } from "../../../../../contexts/PostsListContext";

import { defaultApi } from "../../../../../services/api";

import { IPosts } from "../../../../../types/PostsTypes";

type IType = {
  onClose: () => void;
  currentPost: IPosts;
};

export default function EditModalComponent({ onClose, currentPost }: IType) {
  const [inputsFilds, setInputsFilds] = useState({
    title: currentPost.title,
    content: currentPost.content,
  });

  const { postsListData } = useContext(PostsListContext);

  async function editHandler() {
    const index = postsListData.indexOf(currentPost);

    postsListData[index] = {
      ...postsListData[index],
      title: inputsFilds.title,
      content: inputsFilds.content,
    };

    const reqBody = {
      postID: currentPost.id,
      ...inputsFilds,
    };

    await defaultApi.patch("/updatePost", reqBody);

    return onClose();
  }

  return (
    <S.MainDiv>
      <T.DefaultRegularBlackFont>Edit Item</T.DefaultRegularBlackFont>

      <S.InputDiv>
        <T.InputTitle>Title</T.InputTitle>

        <I.TitleInput
          placeholder="Hello Word"
          defaultValue={currentPost.title}
          onChange={(e) =>
            setInputsFilds({ ...inputsFilds, title: e.target.value })
          }
        />
      </S.InputDiv>

      <S.InputDiv>
        <T.InputTitle>Content</T.InputTitle>

        <I.ContentInput
          placeholder="Content Here"
          defaultValue={currentPost.content}
          onChange={(e) =>
            setInputsFilds({ ...inputsFilds, content: e.target.value })
          }
        />
      </S.InputDiv>

      <I.BlackButton size="medium" onClick={() => editHandler()}>
        SAVE
      </I.BlackButton>
    </S.MainDiv>
  );
}
