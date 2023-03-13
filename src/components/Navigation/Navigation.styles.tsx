import { Box, Button, Menu } from "@mui/material";
import styled from "styled-components";

export const MobileButtonContainer = styled(Box)`
  flex-grow: 1;
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const DesktopContainer = styled(Box)`
  flex-grow: 1;
  display: flex;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const MobileDropdownButton = styled(Button)`
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
