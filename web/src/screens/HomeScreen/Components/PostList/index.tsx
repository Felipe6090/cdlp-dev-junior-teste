import Image from "next/image";

import { useState } from "react";

import DeleteAlertModal from "../../../../Components/Modals/DeleteAlertModal";
import EditModal from "../../../../Components/Modals/EditModal";

import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";

export default function PostList() {
  const [deleteModalHandler, setDeleteModalHandler] = useState(false);
  const [editModalHandler, setEditModalHandler] = useState(false);

  return (
    <S.MainDiv>
      <S.PostDiv>
        <S.PostHead>
          <T.DefaultBoldWhiteFont>AXD</T.DefaultBoldWhiteFont>

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
        </S.PostHead>

        <S.PostInfosRow>
          <T.DefaultNameTypography>@jj</T.DefaultNameTypography>

          <T.TimeStamp>25 minutes ago</T.TimeStamp>
        </S.PostInfosRow>

        <T.PostTextTypograph>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </T.PostTextTypograph>
      </S.PostDiv>

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
