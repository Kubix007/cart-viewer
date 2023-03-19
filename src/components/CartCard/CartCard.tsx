import { CardContent, CardMedia, Grid } from "@mui/material";
import * as Styles from "./CartCard.styles";
import * as Types from "./CartCard.types";
import CartImage from "../../img/shopping-venture.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CartCardDialog from "../CartCardDialog";
import CartDetailsDialog from "../CartDetailsDialog";

const CartCard = ({ carts }: Types.IProps) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const handleDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleDetailsDialog = () => {
    setOpenDetailsDialog(true);
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
            <Styles.CardViewButton
              size="medium"
              variant="contained"
              onClick={handleDetailsDialog}
            >
              View cart
            </Styles.CardViewButton>
            <Styles.CardDeleteButton
              variant="contained"
              endIcon={<DeleteIcon />}
              onClick={handleDeleteDialog}
            >
              Delete
            </Styles.CardDeleteButton>
          </Styles.CardActionContainer>
        </Styles.CardContainer>
      </Grid>
      <CartCardDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        cartId={carts.id}
      />
      <CartDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        cart={carts}
      />
    </>
  );
};

export default CartCard;
