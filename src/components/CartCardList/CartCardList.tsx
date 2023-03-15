import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CartCard from "../CartCard/CartCard";
import * as SharedTypes from "../../shared/types";

const CartCardList = () => {
  const { data }: SharedTypes.ICartState = useSelector(
    (state: RootState) => state.carts
  );
  return (
    <Stack>
      <Grid container spacing={10} justifyContent="center">
        {data.carts.map((carts) => (
          <CartCard key={carts.id} carts={carts} />
        ))}
      </Grid>
    </Stack>
  );
};

export default CartCardList;
