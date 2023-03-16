import { CardContent, CardMedia, Grid } from "@mui/material";
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
        <CardContent>
          <Styles.CardTitle>{product.title}</Styles.CardTitle>
          <Styles.CardDescription variant="body2">
            Brand: {product.brand}
          </Styles.CardDescription>
          <Styles.CardDescription variant="body2">
            Rating: {product.rating}
          </Styles.CardDescription>
        </CardContent>
        <Styles.CardActionContainer>
          <Styles.CardAddtoCartButton
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
          >
            Add to cart
          </Styles.CardAddtoCartButton>
        </Styles.CardActionContainer>
      </Styles.CardContainer>
    </Grid>
  );
};

export default ProductCard;
