import { useContext, useState } from "react";

import LoginModal from "../Modals/LoginModal";

import * as S from "./styles";
import * as T from "../Foundations/Typograph";
import * as I from "../Foundations/Inputs";

import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { authData } = useContext(AuthContext);

  const [loginModalHandler, setLoginModalHandler] = useState(false);

  return (
    <S.MainDiv>
      <T.DefaultBoldWhiteFont>CodeLeap Network</T.DefaultBoldWhiteFont>

      {!authData ? (
        <I.LoginButton
          size="medium"
          onClick={() => setLoginModalHandler(!loginModalHandler)}
        >
          sing in
        </I.LoginButton>
      ) : (
        <T.DefaultNameTypography>{authData.username}</T.DefaultNameTypography>
      )}

      <LoginModal
        isOpen={loginModalHandler}
        onClose={() => {
          setLoginModalHandler(!loginModalHandler);
        }}
      />
    </S.MainDiv>
  );
}
