import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import * as Types from "./ProductCard.types";

export const CardContainer = styled(Card)`
  &.MuiCard-root {
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 300px;
    background-color: white;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const ProductImage = styled(CardMedia)<Types.ICardMediaProps>`
  &.MuiCardMedia-img {
    width: 240px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardAddtoCartButton = styled(Button)`
  &.MuiButton-root {
    margin-top: 10px;
    background-color: #fb8500;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const ProductCategory = styled(Typography)`
  &.MuiTypography-root {
    color: grey;
    font-size: 0.8rem;
  }
`;

export const ProductPrice = styled(Typography)`
  &.MuiTypography-root {
    color: green;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const RaitingContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const TopContainer = styled(Box)``;

export const ProductDetails = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BottomContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: flex-end;
`;

export const IconStar = styled(StarIcon)`
  color: gold;
`;

export const ProductRaiting = styled(Typography)`
  &.MuiTypography-root {
    color: black;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ProductName = styled(Typography)`
  &.MuiTypography-root {
    color: black;
    font-weight: bold;
    font-size: 1rem;
    height: 22.88px;
  }
`;

export const ProductContent = styled(Box)`
  height: 100%;
  padding: 10px 10px 0px 10px;
`;
