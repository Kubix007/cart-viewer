import { MenuItem } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as Styles from "./NewProduct.styles";
import * as Types from "./NewProduct.types";

const quantity = ["1", "2", "3", "4", "5"];

const NewProduct = ({ productNumber }: Types.IProps) => {
  const [value, setValue] = useState("");
  const { data } = useSelector((state: RootState) => state.products);
  const newCartState = useSelector((state: RootState) => state.newCart);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <Styles.Container id={`product${productNumber}`}>
      <Styles.SelectInput
        label="Product name:"
        type="text"
        sx={{ sm: { m: 1, width: "35ch" } }}
        onChange={handleChange}
        value={value}
        variant="filled"
        inputProps={{ min: 0 }}
        placeholder="Enter name"
        select
        fullWidth
      >
        {data.products.map((product) => (
          <MenuItem key={product.id} value={product.id}>
            {product.title}
          </MenuItem>
        ))}
      </Styles.SelectInput>
      <Styles.SelectInput
        label="Quantity:"
        type="text"
        sx={{ sm: { m: 1, width: "35ch" } }}
        onChange={handleChange}
        value={value}
        variant="filled"
        inputProps={{ min: 0 }}
        placeholder="Enter value"
        select
        fullWidth
      >
        {quantity.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Styles.SelectInput>
      {/* <ProductImage
        source={
          data.products.find(
            (item) => item.id === newCartState.products[productNumber].id
          )?.images[0]!
        }
      /> */}
    </Styles.Container>
  );
};

export default NewProduct;
