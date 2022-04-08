import Image from "next/image";

import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";

export default function PostList() {
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
            />

            <Image
              src="/editIcon.png"
              layout="fixed"
              height={22.5}
              width={17.5}
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

      <S.PostDiv>
        <S.PostHead>
          <T.DefaultBoldWhiteFont>AXD</T.DefaultBoldWhiteFont>

          <S.IconsDiv>
            <Image
              src="/deleteIcon.png"
              layout="fixed"
              height={22.5}
              width={17.5}
            />

            <Image
              src="/editIcon.png"
              layout="fixed"
              height={22.5}
              width={17.5}
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
    </S.MainDiv>
  );
}
