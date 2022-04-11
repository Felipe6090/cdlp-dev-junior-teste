import styled from "styled-components";
import { devices } from "../../../../Devices";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 25px;

  background-color: #fff;

  border: 1px solid #000;

  width: 50vw;

  ${devices.tablet} {
    width: 80vw;

    align-items: center;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;

  margin-left: auto;
  gap: 25px;

  ${devices.tablet} {
    margin-left: 0;
  }

  ${devices.mobileL} {
    flex-direction: column;
  }
`;
