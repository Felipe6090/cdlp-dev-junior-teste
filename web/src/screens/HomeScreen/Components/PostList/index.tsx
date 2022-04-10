import Image from "next/image";

import { useContext, useState } from "react";

import DeleteAlertModal from "../../../../Components/Modals/DeleteAlertModal";
import EditModal from "../../../../Components/Modals/EditModal";

import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";

import { PostsListContext } from "../../../../contexts/PostsListContext";
import { AuthContext } from "../../../../contexts/AuthContext";

export default function PostList() {
  const { postsListData } = useContext(PostsListContext);

  const { authData } = useContext(AuthContext);

  const [deleteModalHandler, setDeleteModalHandler] = useState(false);

  const [editModalHandler, setEditModalHandler] = useState(false);

  function helper(a: any, b: any) {
    return b.created_datetime - a.created_datetime;
  }

  return (
    <S.MainDiv>
      {postsListData.sort(helper).map((post) => {
        return (
          <S.PostDiv key={post.id}>
            <S.PostHead>
              <T.DefaultBoldWhiteFont>{post.title}</T.DefaultBoldWhiteFont>

              {post.userId === authData?.id ||
                (post.username === authData?.username && (
                  <S.IconsDiv>
                    <Image
                      src="/deleteIcon.png"
                      layout="fixed"
                      height={22.5}
                      width={17.5}
                      onClick={() => setDeleteModalHandler(!deleteModalHandler)}
                      style={{ cursor: "pointer" }}
                    />

                    <Image
                      src="/editIcon.png"
                      layout="fixed"
                      height={30}
                      width={30}
                      onClick={() => setEditModalHandler(!editModalHandler)}
                      style={{ cursor: "pointer" }}
                    />
                  </S.IconsDiv>
                ))}
            </S.PostHead>

            <S.PostInfosRow>
              <T.DefaultNameTypography>
                @{post.username}
              </T.DefaultNameTypography>

              <T.TimeStamp>
                {post.created_datetime + " minutes ago"}
              </T.TimeStamp>
            </S.PostInfosRow>

            <T.PostTextTypograph>{post.content}</T.PostTextTypograph>
          </S.PostDiv>
        );
      })}

      <EditModal
        isOpen={editModalHandler}
        onClose={() => {
          setEditModalHandler(!editModalHandler);
        }}
      />

      <DeleteAlertModal
        isOpen={deleteModalHandler}
        onClose={() => {
          setDeleteModalHandler(!deleteModalHandler);
        }}
      />
    </S.MainDiv>
  );
}
