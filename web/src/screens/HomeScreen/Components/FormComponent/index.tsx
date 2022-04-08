import * as S from "./styles";
import * as T from "../../../../Components/Foundations/Typograph";
import * as I from "../../../../Components/Foundations/Inputs";

export default function FormComponent() {
  return (
    <S.MainDiv>
      <T.DefaultRegularBlackFont>Whats on your mind?</T.DefaultRegularBlackFont>

      <S.InputDiv>
        <T.InputTitle>Title</T.InputTitle>

        <I.TitleInput placeholder="Hello Word" />
      </S.InputDiv>

      <S.InputDiv>
        <T.InputTitle>Content</T.InputTitle>

        <I.ContentInput placeholder="Hello Word" />
      </S.InputDiv>

      <I.CreateButton size="medium">Create</I.CreateButton>
    </S.MainDiv>
  );
}
