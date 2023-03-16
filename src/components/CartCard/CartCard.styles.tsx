import { Button, Card, CardActions, Typography } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  &.MuiCard-root {
    max-width: 345px;
    background-color: white;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const CardViewButton = styled(Button)`
  &.MuiButton-root {
    background-color: #fb8500;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const CardDeleteButton = styled(Button)`
  &.MuiButton-root {
    background-color: #d62828;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const CardTitle = styled(Typography)`
  &.MuiTypography-root {
    color: black;
  }
`;

export const CardDescription = styled(Typography)`
  &.MuiTypography-root {
    color: black;
  }
`;

export const CardActionContainer = styled(CardActions)`
  &.MuiCardActions-root {
    justify-content: center;
  }
`;
