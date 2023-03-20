import * as Styles from "./ShoppingCartButton.styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "../../components/ShoppingCart";
import { useState } from "react";

const ShoppingCartButton = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <Styles.ShoppingCartButton
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "fixed", right: 30, bottom: 10 }}
      icon={<ShoppingBasketIcon />}
      onClick={handleClick}
      open={open}
      direction="up"
      data-testid="shoppingCartButton"
    >
      {open && <ShoppingCart />}
    </Styles.ShoppingCartButton>
  );
};

export default ShoppingCartButton;
