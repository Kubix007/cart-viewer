import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as Styles from "./ProductCard.styles";
import * as Types from "./ProductCard.types";

const ProductCard = ({ product }: Types.IProps) => {
  return (
    <Grid item>
      <Styles.CardContainer>
        <Styles.ProductImage
          component="img"
          alt="cartImage"
          image={product.images[0]}
        />
        <Styles.ProductContent>
          <Styles.TopContainer>
            <Styles.ProductCategory>{product.category}</Styles.ProductCategory>
            <Styles.ProductName variant="body2">
              {product.title}
            </Styles.ProductName>
          </Styles.TopContainer>
          <Styles.BottomContainer>
            <Styles.ProductDetails>
              <Styles.ProductPrice>{product.price}$</Styles.ProductPrice>
              <Styles.RaitingContainer>
                <Styles.IconStar />
                <Styles.ProductRaiting>{product.rating}</Styles.ProductRaiting>
              </Styles.RaitingContainer>
            </Styles.ProductDetails>
            <Styles.CardAddtoCartButton
              variant="contained"
              endIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Styles.CardAddtoCartButton>
          </Styles.BottomContainer>
        </Styles.ProductContent>
      </Styles.CardContainer>
    </Grid>
  );
};

export default ProductCard;
