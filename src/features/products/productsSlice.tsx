import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";
import productsService from "./productsService";
import axios from "axios";

const initialState: SharedTypes.IProductState = {
  data: {
    products: [
      {
        id: 1,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: [],
      },
    ],
    total: 0,
    skip: 0,
    limit: 0,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Get all products
export const getAllProducts = createAsyncThunk(
  "/products/getAll",
  async (_, thunkAPI) => {
    try {
      return await productsService.getAllProducts();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;
