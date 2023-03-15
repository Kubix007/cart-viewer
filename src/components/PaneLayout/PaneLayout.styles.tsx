import { Box, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import * as Types from "./PaneLayout.types";
import styled from "styled-components";

export const BoxContainer = styled(Box)`
  padding: 30px;
  margin: 10px;
  min-height: 355px;
  @media screen and (max-width: 330px) {
    min-height: 255px;
  }
`;

export const StackContainer = styled(Stack)`
  align-items: center;
  height: 100%;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
`;

export const AddButton = styled(AddCircleIcon)<Types.IProps>`
  color: green;
  ${({ disabled }) =>
    disabled &&
    `
  color: grey;
  `}
`;

export const RemoveButton = styled(RemoveCircleIcon)<Types.IProps>`
  color: red;
  ${({ disabled }) =>
    disabled &&
    `
  color: grey;
  `}
`;
