import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const ShoppingCartContainer = styled(Box)`
  height: 400px;
  background-color: white;
  width: 250px;
  display: flex;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartTitle = styled(Typography)`
  &.MuiTypography-root {
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }
`;

export const ProductsList = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const Product = styled(Box)`
  margin: 10px;
`;
