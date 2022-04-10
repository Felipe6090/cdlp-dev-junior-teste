import * as S from "./styles";
import * as T from "../../../../Foundations/Typograph";
import * as I from "../../../../Foundations/Inputs";

import { useState, useContext } from "react";

import { defaultApi } from "../../../../../services/api";

import router from "next/router";

import { setCookie } from "nookies";

import { AuthContext } from "../../../../../contexts/AuthContext";

type IType = {
  onClose: () => void;
};

export default function LoginModalComponent({ onClose }: IType) {
  const { setAuthData } = useContext(AuthContext);

  const [loginFilds, setLoginFilds] = useState({
    username: "",
    password: "",
  });

  async function loginHandler() {
    if (loginFilds.username === "" || loginFilds.password === "") {
      return;
    }

    const result = await defaultApi.post("/login", loginFilds);

    const data = result.data;

    if (data.status === "Error") {
      throw new Error("Login Failed");
    }

    setCookie(undefined, "auth_token", data.refreshToken.id, {
      maxAge: 60 * 60 * 1,
    });

    onClose();

    setAuthData(data.userData);

    return router.replace("/");
  }

  return (
    <S.MainDiv>
      <T.DefaultBoldBlackFont>
        Welcome to CodeLeap network!
      </T.DefaultBoldBlackFont>

      <S.InputDiv>
        <T.InputTitle>Please enter your username</T.InputTitle>

        <I.TitleInput
          placeholder="Jhon Doe"
          value={loginFilds.username}
          onChange={(e) => {
            setLoginFilds({
              ...loginFilds,
              username: e.target.value,
            });
          }}
        />
      </S.InputDiv>

      <S.InputDiv>
        <T.InputTitle>your password</T.InputTitle>

        <I.TitleInput
          placeholder="Password"
          value={loginFilds.password}
          onChange={(e) => {
            setLoginFilds({
              ...loginFilds,
              password: e.target.value,
            });
          }}
        />
      </S.InputDiv>

      <I.BlackButton size="medium" onClick={() => loginHandler()}>
        ENTER
      </I.BlackButton>
    </S.MainDiv>
  );
}
