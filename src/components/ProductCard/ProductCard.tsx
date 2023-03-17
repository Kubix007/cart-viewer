import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as Styles from "./ProductCard.styles";
import * as Types from "./ProductCard.types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addNewProduct } from "../../features/newCart/newCartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { totalProducts, products } = useSelector(
    (state: RootState) => state.newCart
  );

  const handleClick = () => {
    if (products.filter((item) => item.productId === product.id).length > 0) {
      toast.error("You can buy one product of a particular type!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(
        addNewProduct({
          id: totalProducts,
          productId: product.id,
          quantity: 1,
        })
      );
      toast.success("The product was added to your shopping cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
              onClick={handleClick}
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
