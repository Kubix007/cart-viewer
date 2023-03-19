import ProductDetails from "../ProductDetails";
import * as Types from "./CartDetails.types";
import { Stack } from "@mui/system";
import AccordionPriceChart from "../AccordionPriceChart";
import { Box } from "@mui/material";

const CartDetails = ({ cart }: Types.IProps) => {
  return (
    <Stack>
      {cart.products.map((product) => (
        <Box key={product.id}>
          <ProductDetails product={product} />
          <AccordionPriceChart products={product} />
        </Box>
      ))}
    </Stack>
  );
};

export default CartDetails;
