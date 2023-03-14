import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import * as SharedTypes from "../../shared/types";
import cartService from "./cartsService";

const initialState: SharedTypes.ICartState = {
  data: {
    carts: [
      {
        id: 1,
        products: [
          {
            id: 1,
            title: "",
            price: 0,
            quantity: 0,
            total: 0,
            discountPercentage: 0,
            discountedPrice: 0,
          },
        ],
        total: 0,
        discountedTotal: 0,
        userId: 0,
        totalProducts: 0,
        totalQuantity: 0,
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

//Get carts
export const getAllCarts = createAsyncThunk(
  "/carts/getAll",
  async (_, thunkAPI) => {
    try {
      return await cartService.getAllCarts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Create carts
export const createCart = createAsyncThunk(
  "/carts/create",
  async (productsData: SharedTypes.IProductData, thunkAPI) => {
    try {
      return await cartService.createCart(productsData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete cart
export const deleteCart = createAsyncThunk(
  "/carts/delete",
  async (cartId: string, thunkAPI) => {
    try {
      return await cartService.deleteCart(cartId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCarts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getAllCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(createCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data.carts = [...state.data.carts, action.payload.carts];
      })
      .addCase(createCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = cartsSlice.actions;
export default cartsSlice.reducer;
