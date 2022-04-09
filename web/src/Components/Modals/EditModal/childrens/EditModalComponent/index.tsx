import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";

type IType = {
  onClose: () => void;
};

export default function EditModalComponent({ onClose }: IType) {
  return (
    <S.MainDiv>
      <T.DefaultRegularBlackFont>Edit Item</T.DefaultRegularBlackFont>

      <S.InputDiv>
        <T.InputTitle>Title</T.InputTitle>

        <I.TitleInput placeholder="Hello Word" />
      </S.InputDiv>

      <S.InputDiv>
        <T.InputTitle>Content</T.InputTitle>

        <I.ContentInput placeholder="Content Here" />
      </S.InputDiv>

      <I.CreateButton size="medium" onClick={() => onClose()}>
        SAVE
      </I.CreateButton>
    </S.MainDiv>
  );
}
