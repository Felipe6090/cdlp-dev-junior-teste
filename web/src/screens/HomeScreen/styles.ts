import styled from "styled-components";
import { devices } from "../../Components/Devices";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;

  padding: 0 70px;

  ${devices.tablet} {
    padding: 0;
  }
`;
