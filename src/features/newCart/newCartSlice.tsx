import { createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";

const initialState: SharedTypes.INewCartData = {
  products: [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 1,
      quantity: 1,
    },
  ],
  totalProducts: 1,
};
export const newCartSlice = createSlice({
  name: "newCart",
  initialState,
  reducers: {
    reset: (state) => initialState,
    increaseQuantity: (state) => {
      state.totalProducts = state.totalProducts + 1;
    },
    decreaseQuantity: (state) => {
      state.totalProducts = state.totalProducts - 1;
    },
  },
});

export const { reset, increaseQuantity, decreaseQuantity } =
  newCartSlice.actions;
export default newCartSlice.reducer;
