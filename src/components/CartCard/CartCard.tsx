import { CardContent, CardMedia, Grid } from "@mui/material";
import * as Styles from "./CartCard.styles";
import * as Types from "./CartCard.types";
import CartImage from "../../img/shopping-venture.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CartCardDialog from "../CartCardDialog";

const CartCard = ({ carts }: Types.IProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid item>
        <Styles.CardContainer>
          <CardMedia
            component="img"
            alt="cartImage"
            height="250"
            image={CartImage}
          />
          <CardContent>
            <Styles.CardTitle gutterBottom variant="h5">
              Cart #{carts.id}
            </Styles.CardTitle>
            <Styles.CardDescription variant="body2">
              Total price: {carts.total}zł
            </Styles.CardDescription>
            <Styles.CardDescription variant="body2">
              Number of products: {carts.totalProducts}
            </Styles.CardDescription>
          </CardContent>
          <Styles.CardActionContainer>
            <Styles.CardViewButton size="medium" variant="contained">
              View cart
            </Styles.CardViewButton>
            <Styles.CardDeleteButton
              variant="contained"
              endIcon={<DeleteIcon />}
              onClick={handleClickOpen}
            >
              Delete
            </Styles.CardDeleteButton>
          </Styles.CardActionContainer>
        </Styles.CardContainer>
      </Grid>
      <CartCardDialog open={open} setOpen={setOpen} cartId={carts.id} />
    </>
  );
};

export default CartCard;
