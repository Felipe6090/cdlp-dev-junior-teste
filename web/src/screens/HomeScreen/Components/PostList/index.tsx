import Image from "next/image";

import { useContext, useState } from "react";

import DeleteAlertModal from "../../../../Components/Modals/DeleteAlertModal";
import EditModal from "../../../../Components/Modals/EditModal";

import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";

import { PostsListContext } from "../../../../contexts/PostsListContext";
import { AuthContext } from "../../../../contexts/AuthContext";
import { IPosts } from "../../../../types/PostsTypes";

import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function PostList() {
  const { postsListData } = useContext(PostsListContext);

  const { authData } = useContext(AuthContext);

  const [deleteModalHandler, setDeleteModalHandler] = useState(false);

  const [editModalHandler, setEditModalHandler] = useState(false);

  const [currentPostData, setCurrentPostData] = useState({} as IPosts);

  function orderByDate(a: any, b: any) {
    return a.created_datetime - b.created_datetime;
  }

  function dateMaskHandler(date: Date) {
    return dayjs().to(dayjs(date));
  }

  const orderedPostsArray = postsListData.sort(orderByDate);

  return (
    <S.MainDiv>
      {orderedPostsArray.map((post) => {
        const dateFormated = dateMaskHandler(post.created_datetime);

        return (
          <S.PostDiv key={post.id}>
            <S.PostHead>
              <T.DefaultBoldWhiteFont>{post.title}</T.DefaultBoldWhiteFont>

              {post.userId === authData?.id &&
                post.username === authData?.username && (
                  <S.IconsDiv>
                    <Image
                      src="/deleteIcon.png"
                      layout="fixed"
                      height={22.5}
                      width={17.5}
                      onClick={() => {
                        setCurrentPostData(post);
                        setDeleteModalHandler(!deleteModalHandler);
                      }}
                      style={{ cursor: "pointer" }}
                    />

                    <Image
                      src="/editIcon.png"
                      layout="fixed"
                      height={30}
                      width={30}
                      onClick={() => {
                        setCurrentPostData(post);
                        setEditModalHandler(!editModalHandler);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </S.IconsDiv>
                )}
            </S.PostHead>

            <S.PostInfosRow>
              <T.DefaultNameTypography>
                {"@" + post.username}
              </T.DefaultNameTypography>

              <T.TimeStamp>{dateFormated}</T.TimeStamp>
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
        currentPost={currentPostData}
      />

      <DeleteAlertModal
        isOpen={deleteModalHandler}
        onClose={() => {
          setDeleteModalHandler(!deleteModalHandler);
        }}
        currentPost={currentPostData}
      />
    </S.MainDiv>
  );
}
