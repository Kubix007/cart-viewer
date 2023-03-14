import { AppBar, Box, Button, Menu } from "@mui/material";
import styled from "styled-components";

export const DesktopButtonContainer = styled(Box)`
  flex-grow: 1;
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const MobileContainer = styled(Box)`
  flex-grow: 1;
  display: flex;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const NavigationButtons = styled(Button)`
  &.MuiButton-root {
    margin: 4px 0 4px 0;
    color: white;
    display: block;
  }
`;

export const NavigationMenu = styled(Menu)`
  &.MuiMenu-root {
    display: none;
    @media screen and (max-width: 900px) {
      display: block;
    }
  }
`;

export const Navigation = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: #219ebc;
  }
`;
