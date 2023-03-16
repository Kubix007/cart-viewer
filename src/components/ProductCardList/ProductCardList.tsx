import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ProductCard from "../ProductCard/ProductCard";
import * as SharedTypes from "../../shared/types";

const ProductCardList = () => {
  const { data }: SharedTypes.IProductState = useSelector(
    (state: RootState) => state.products
  );
  return (
    <Stack>
      <Grid container spacing={10} justifyContent="center">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductCardList;
