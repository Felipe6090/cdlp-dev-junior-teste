import * as S from "./styles";
import * as T from "../Foundations/Typograph";

export default function Footer() {
  return (
    <S.MainDiv>
      <T.GreyLink href="https://github.com/Felipe6090" target="_blank">
        Deveped by Felipe Vieira
      </T.GreyLink>

      <T.GreyLink
        href="https://github.com/Felipe6090/cdlp-dev-junior-teste"
        target="_blank"
      >
        0.1@04.10.2022
      </T.GreyLink>
    </S.MainDiv>
  );
}
