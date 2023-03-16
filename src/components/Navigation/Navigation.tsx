import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import * as Styles from "./Navigation.styles";

const pages = [
  {
    displayName: "All products",
    path: "/",
  },
  {
    displayName: "My carts",
    path: "/carts",
  },
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Styles.Navigation position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Styles.MobileContainer>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Styles.IconMenu />
            </IconButton>
            <Styles.NavigationMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.displayName} onClick={handleCloseNavMenu}>
                  <Styles.Nav to={page.path}>
                    <Typography textAlign="center">
                      {page.displayName.toUpperCase()}
                    </Typography>
                  </Styles.Nav>
                </MenuItem>
              ))}
            </Styles.NavigationMenu>
          </Styles.MobileContainer>
          <Styles.DesktopButtonContainer>
            {pages.map((page) => (
              <Styles.Nav to={page.path} key={page.displayName}>
                <Styles.NavigationButtons onClick={handleCloseNavMenu}>
                  {page.displayName}
                </Styles.NavigationButtons>
              </Styles.Nav>
            ))}
          </Styles.DesktopButtonContainer>
        </Toolbar>
      </Container>
    </Styles.Navigation>
  );
};

export default Navigation;
