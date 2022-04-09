import styled from "styled-components";

type StyledProps = {
  size?: string;
  margin?: string;
  marginLeft?: string;
};

export const LoginButton = styled.button`
  width: ${(props: StyledProps) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};

  height: ${(props: StyledProps) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};

  background-color: #fff;

  border: 1px solid #000;
  outline: none;

  color: #000;

  font-size: ${(props: StyledProps) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "16px"};
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  cursor: pointer;

  margin: ${(props: StyledProps) => props.margin || 0};

  position: relative;

  overflow: hidden;

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const CreateButton = styled.button`
  width: ${(props: StyledProps) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};

  height: ${(props: StyledProps) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};

  background-color: #000;

  border: none;
  outline: none;

  color: #fff;

  font-size: ${(props: StyledProps) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "15px"};

  font-family: "Roboto", sans-serif;
  font-weight: bold;

  cursor: pointer;

  margin: ${(props: StyledProps) => props.margin || 0};

  position: relative;

  overflow: hidden;

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }

  margin-left: auto;
`;

export const TitleInput = styled.input`
  border: 1px solid #777;

  height: 40px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;

  color: #ccc;

  padding: 0 15px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    color: #ccc;
  }
`;

export const ContentInput = styled.textarea`
  border: 1px solid #777;

  font-family: "Roboto", sans-serif;
  font-size: 14px;

  color: #ccc;

  height: 75px;

  resize: none;

  padding: 10px 15px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    color: #ccc;
  }
`;
