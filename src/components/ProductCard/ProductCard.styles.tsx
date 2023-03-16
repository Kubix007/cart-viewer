import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import * as Types from "./ProductCard.types";

export const CardContainer = styled(Card)`
  &.MuiCard-root {
    width: 200px;
    height: 400px;
    background-color: black;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const ProductImage = styled(CardMedia)<Types.ICardMediaProps>`
  &.MuiCardMedia-img {
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardAddtoCartButton = styled(Button)`
  &.MuiButton-root {
    background-color: #fb8500;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const CardTitle = styled(Typography)`
  &.MuiTypography-root {
    color: white;
    font-weight: bold;
  }
`;

export const CardDescription = styled(Typography)`
  &.MuiTypography-root {
    color: white;
  }
`;

export const CardActionContainer = styled(CardActions)`
  &.MuiCardActions-root {
    justify-content: center;
  }
`;
