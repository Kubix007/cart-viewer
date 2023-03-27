import { Typography } from "@mui/material";
import styled from "styled-components";

export const TotalPriceInfo = styled(Typography)`
  &.MuiTypography-root {
    margin: 10px 0px 0px 16px;
    font-weight: bold;
  }
`;

export const DiscountedPrice = styled.span`
  color: red;
`;

export const OldPrice = styled.sup`
  color: black;
  font-size: 0.8em;
  text-decoration: line-through;
`;
