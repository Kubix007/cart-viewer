import { Paper, Stack } from "@mui/material";
import styled from "styled-components";

export const Center = styled(Stack)`
  height: 100vh;
  justify-content: center;
`;

export const Window = styled(Paper)`
  &.MuiPaper-root {
    background-color: #023047;
  }
`;
