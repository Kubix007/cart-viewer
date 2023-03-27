import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)`
  &.MuiDialog-root {
    width: 100%;
  }
  & .MuiPaper-root {
    width: -webkit-fill-available;
  }
`;

export const Title = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    text-align: center;
  }
`;

export const Content = styled(DialogContent)`
  &.MuiDialogContent-root {
    padding: 0px 0px 0px 0px;
  }
`;
