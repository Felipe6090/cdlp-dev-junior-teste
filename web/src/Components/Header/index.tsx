import { useState } from "react";

import LoginModal from "../Modals/LoginModal";

import * as S from "./styles";
import * as T from "../Foundations/Typograph";
import * as I from "../Foundations/Inputs";

export default function Header() {
  const [loginModalHandler, setLoginModalHandler] = useState(false);

  return (
    <S.MainDiv>
      <T.DefaultBoldWhiteFont>CodeLeap Network</T.DefaultBoldWhiteFont>

      <I.LoginButton
        size="medium"
        onClick={() => setLoginModalHandler(!loginModalHandler)}
      >
        sing in
      </I.LoginButton>

      <LoginModal
        isOpen={loginModalHandler}
        onClose={() => {
          setLoginModalHandler(!loginModalHandler);
        }}
      />
    </S.MainDiv>
  );
}
