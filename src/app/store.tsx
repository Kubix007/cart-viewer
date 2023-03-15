import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
