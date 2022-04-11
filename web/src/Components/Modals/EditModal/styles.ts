import styled from "styled-components";

import { ModalUnstyled } from "@mui/base";
import { devices } from "../../Devices";

export const ModalMainDiv = styled(ModalUnstyled)`
  outline: none;

  position: fixed;

  z-index: 2;

  top: 50%;
  left: 30%;

  margin-top: -100px;
  margin-left: -250px;

  ${devices.tablet} {
    top: 25%;
    left: 0;

    margin-top: 0;
    margin-left: 0;
  }
`;
