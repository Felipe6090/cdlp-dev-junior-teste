import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";

type IType = {
  onClose: () => void;
};

export default function DeleteAlertModalComponent({ onClose }: IType) {
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
          onClick={() => onClose()}
        >
          OK
        </I.LoginButton>
      </S.ButtonsDiv>
    </S.MainDiv>
  );
}
