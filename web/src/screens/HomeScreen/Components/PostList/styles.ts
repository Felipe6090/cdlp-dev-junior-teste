import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;
`;

export const PostDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0 30px 0;
  gap: 20px;

  border: 1px solid #999;
`;

export const PostHead = styled.div`
  background-color: #000;

  display: flex;
  justify-content: space-between;

  padding: 15px 25px;
`;

export const IconsDiv = styled.div`
  display: flex;
  gap: 25px;
`;

export const PostInfosRow = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 25px;
`;
