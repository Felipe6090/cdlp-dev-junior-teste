import * as S from "./styles";
import * as T from "../Foundations/Typograph";
import * as I from "../Foundations/Inputs";

export default function Header() {
  return (
    <S.MainDiv>
      <T.DefaultBoldWhiteFont>CodeLeap Network</T.DefaultBoldWhiteFont>

      <I.LoginButton size="medium">sing in</I.LoginButton>
    </S.MainDiv>
  );
}
