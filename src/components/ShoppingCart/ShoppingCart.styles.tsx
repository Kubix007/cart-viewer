import { Box, Divider, Typography, Button, IconButton } from "@mui/material";
import { ReactComponent as EmptyIcon } from "../../img/emoji-sad.svg";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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
    font-weight: bold;
  }
`;

export const ProductsList = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
`;

export const ProductName = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const Product = styled(Box)`
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;

export const ButtonsContainer = styled(Box)``;

export const ProductCategory = styled(Typography)`
  &.MuiTypography-root {
    color: gray;
  }
`;

export const ProductPrice = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const ProductInfo = styled(Box)`
  width: 100%;
  margin-left: 10px;
`;

export const ProductAmountContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantity = styled(Typography)`
  &.MuiTypography-root {
    font-size: small;
  }
`;

export const DividerLine = styled(Divider)`
  &.MuiDivider-root {
    width: 100%;
    background-color: black;
    height: 1px;
  }
`;

export const ProductImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const ButtonSaveCart = styled(Button)`
  &.MuiButton-root {
    color: white;
    background-color: #fb8500;
    margin: 0px 1px 0px 1px;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const ButtonClearCart = styled(Button)`
  &.MuiButton-root {
    color: white;
    background-color: #fb8500;
    margin: 0px 1px 0px 1px;
    :hover {
      background-color: #ffb703;
    }
  }
`;

export const EmptyCartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const EmptyCartIcon = styled(EmptyIcon)`
  height: 80px;
  width: 80px;
`;

export const EmptyCartInfo = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const TotalPriceContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
`;

export const TotalPriceValue = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const TotalPrice = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
  }
`;

export const TotalProducts = styled(Typography)`
  &.MuiTypography-root {
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;
    padding-left: 9px;
    padding-top: 5px;
  }
`;

export const RemoveContainer = styled(Box)`
  align-self: center;
`;

export const RemoveIcon = styled(RemoveCircleIcon)`
  color: #fb8500;
  :hover {
    color: #ffb703;
  }
`;

export const RemoveButton = styled(IconButton)`
  &.MuiButtonBase-root {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`;
