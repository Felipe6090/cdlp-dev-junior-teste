import styled from "styled-components";

import { ModalUnstyled } from "@mui/base";

export const ModalMainDiv = styled(ModalUnstyled)`
  backdrop-filter: blur(2px);
  outline: none;

  position: fixed;

  z-index: 2;

  right: 55px;
  top: 70px;
`;
