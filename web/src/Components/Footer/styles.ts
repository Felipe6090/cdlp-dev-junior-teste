import styled from "styled-components";

import { devices } from "../Devices";

export const MainDiv = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  background-color: #000;
  padding: 20px 70px;

  margin-top: 50px;

  ${devices.footerCustomBreakPoint} { 
    flex-direction: column;
    gap: 30px;
  }
`;
