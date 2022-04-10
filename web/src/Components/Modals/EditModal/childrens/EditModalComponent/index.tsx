import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";
import { useContext, useState } from "react";
import { PostsListContext } from "../../../../../contexts/PostsListContext";

type IType = {
  onClose: () => void;
  currentPost: IPosts;
};

type IPosts = {
  id: string;
  username: string;
  userId?: string;
  created_datetime: Date;
  title: string;
  content: string;
};

export default function EditModalComponent({ onClose, currentPost }: IType) {
  const [inputsFilds, setInputsFilds] = useState({
    title: "",
    content: "",
  });

  const { postsListData } = useContext(PostsListContext);

  async function editHandler() {
    const index = postsListData.indexOf(currentPost);

    postsListData[index] = {
      id: postsListData[index].id,
      username: postsListData[index].username,
      created_datetime: postsListData[index].created_datetime,
      title: inputsFilds.title,
      content: inputsFilds.content,
    };

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

      <I.CreateButton size="medium" onClick={() => editHandler()}>
        SAVE
      </I.CreateButton>
    </S.MainDiv>
  );
}
