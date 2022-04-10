import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";

type IType = {
  onClose: () => void;
};

export default function LoginModalComponent({ onClose }: IType) {
  return (
    <S.MainDiv>
      <T.DefaultBoldBlackFont>
        Welcome to CodeLeap network!
      </T.DefaultBoldBlackFont>

      <T.InputTitle>Please enter your username</T.InputTitle>

      <I.TitleInput placeholder="Jhon Doe" />

      <T.InputTitle>your password</T.InputTitle>

      <I.TitleInput placeholder="Password" />

      <I.CreateButton size="medium" onClick={() => onClose()}>
        ENTER
      </I.CreateButton>
    </S.MainDiv>
  );
}
