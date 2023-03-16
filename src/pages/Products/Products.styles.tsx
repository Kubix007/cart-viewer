import { Stack } from "@mui/material";
import { SpeedDial } from "@mui/material";

import styled from "styled-components";

export const Container = styled(Stack)`
  padding: 20px;
`;

export const ShoppingCartButton = styled(SpeedDial)`
  .MuiButtonBase-root {
    background-color: #fb8500;
  }
`;
