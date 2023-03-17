import { createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";

const initialState: SharedTypes.INewCartData = {
  products: [],
  totalProducts: 0,
};
export const newCartSlice = createSlice({
  name: "newCart",
  initialState,
  reducers: {
    reset: (state) => initialState,
    addNewProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.totalProducts = state.totalProducts + 1;
    },
    removeProduct: (state, action) => {
      let newCart = [...state.products];
      newCart.splice(action.payload, 1);
      state.products = newCart;
      state.totalProducts = state.totalProducts - 1;
    },
  },
});

export const { reset, addNewProduct, removeProduct } = newCartSlice.actions;
export default newCartSlice.reducer;
