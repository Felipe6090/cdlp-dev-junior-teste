import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";
import { defaultApi } from "../../../../../services/api";
import router from "next/router";
import { useContext } from "react";
import { PostsListContext } from "../../../../../contexts/PostsListContext";
import { IPosts } from "../../../../../types/PostsTypes";

type IType = {
  onClose: () => void;
  currentPost: IPosts;
};

export default function DeleteAlertModalComponent({
  onClose,
  currentPost,
}: IType) {
  const { postsListData, setPostsListData } = useContext(PostsListContext);

  async function deleteHandler() {
    await defaultApi.delete(`/deletePost/${currentPost.id}`);

    const resultArray = postsListData.filter(
      (post: IPosts) => post.id !== currentPost.id
    );

    setPostsListData(resultArray);

    onClose();

    return router.replace("/");
  }

  return (
    <S.MainDiv>
      <T.DefaultRegularBlackFont>
        Are you sure you want to delete this item?
      </T.DefaultRegularBlackFont>

      <S.ButtonsDiv>
        <I.LoginButton
          size="medium"
          margin="25px 0 0 0"
          onClick={() => onClose()}
        >
          Cancel
        </I.LoginButton>

        <I.LoginButton
          size="medium"
          margin="25px 0 0 0"
          onClick={() => deleteHandler()}
        >
          OK
        </I.LoginButton>
      </S.ButtonsDiv>
    </S.MainDiv>
  );
}
