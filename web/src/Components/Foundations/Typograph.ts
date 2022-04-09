import styled from "styled-components";

export const DefaultBoldWhiteFont = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  font-size: 22px;
  color: #fff;
`;

export const DefaultBoldBlackFont = styled(DefaultBoldWhiteFont)`
  color: #000;
`;

export const DefaultRegularBlackFont = styled.p`
  font-family: "Roboto", sans-serif;

  font-size: 22px;
  color: #000;
`;

export const PostTextTypograph = styled(DefaultRegularBlackFont)`
  font-size: 18px;

  padding: 0 25px;
`;

export const FormMainCaller = styled(DefaultBoldWhiteFont)`
  color: #000;
`;

export const FormButton = styled(DefaultBoldWhiteFont)`
  font-size: 16px;
  color: #fff;
`;

export const InputTitle = styled.p`
  font-family: "Roboto", sans-serif;

  font-size: 16px;
  color: #000;
`;

export const InputHolder = styled.p`
  font-family: "Roboto", sans-serif;

  font-size: 14px;
  color: #ccc;
`;

export const DefaultNameTypography = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  font-size: 18px;
  color: #777;
`;

export const TimeStamp = styled.span`
  font-family: "Roboto", sans-serif;

  font-size: 18px;
  color: #777;
`;
