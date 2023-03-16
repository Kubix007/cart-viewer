import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./ShoppingCart.styles";
import * as SharedTypes from "../../shared/types";
import { Box, Divider, Typography } from "@mui/material";

const ShoppingCart = () => {
  const { products: myCartProducts, totalProducts: myCartTotalProducts } =
    useSelector((state: RootState) => state.newCart);
  const products = useSelector((state: RootState) => state.products);

  const getProductDetails = (product: SharedTypes.ISingleProduct) => {
    return products.data.products.find((item) => item.id === product.productId);
  };

  return (
    <Styles.ShoppingCartContainer
      sx={{ position: "fixed", right: 30, bottom: 70 }}
    >
      <Styles.CartTitle>My cart</Styles.CartTitle>
      <Divider />
      <Styles.ProductsList>
        {myCartProducts.map((item) => (
          <Styles.Product>
            <Styles.ProductName>
              {getProductDetails(item)?.title}
            </Styles.ProductName>
            <Typography>Quantity: {item.quantity}</Typography>
          </Styles.Product>
        ))}
      </Styles.ProductsList>
    </Styles.ShoppingCartContainer>
  );
};

export default ShoppingCart;
