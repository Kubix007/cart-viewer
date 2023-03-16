import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./Products.styles";
import Spinner from "../../components/Spinner";
import ProductCardList from "../../components/ProductCardList";
import { useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "../../components/ShoppingCart";

const Products = () => {
  const { isLoading } = useSelector((state: RootState) => state.products);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Styles.Container>
        <ProductCardList />
      </Styles.Container>
      <Styles.ShoppingCartButton
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "fixed", right: 30, bottom: 10 }}
        icon={<ShoppingBasketIcon />}
        onClick={handleClick}
        open={open}
        direction="up"
      >
        {open && <ShoppingCart />}
      </Styles.ShoppingCartButton>
    </>
  );
};

export default Products;
