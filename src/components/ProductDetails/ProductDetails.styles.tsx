import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";

export const PorductContainer = styled(Box)`
  display: flex;
  margin: 10px 16px 0px 16px;
`;
export const ProductImage = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export const ProductDetails = styled(Box)`
  width: 100%;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
`;
export const TopRow = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const ProductName = styled(Typography)`
  &.MuiTypography-root {
    display: flex;
    align-items: center;
  }
`;

export const OldPrice = styled.sup`
  color: black;
  font-size: 0.8em;
  text-decoration: line-through;
`;

export const ProductPrice = styled(Typography)`
  &.MuiTypography-root {
    display: flex;
    color: red;
    align-items: center;
  }
`;

export const MiddleRow = styled(Box)``;

export const ProductCategory = styled(Typography)`
  &.MuiTypography-root {
    color: gray;
    font-size: 0.8em;
  }
`;

export const BottomRow = styled(Box)``;

export const ProductQuantity = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
    font-size: 0.8em;
  }
`;

export const ProductDivider = styled(Divider)`
  &.MuiDivider-root {
    margin-top: 5px;
  }
`;
