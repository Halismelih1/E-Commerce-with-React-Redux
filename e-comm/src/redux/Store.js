import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import categorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: ProductSlice,
    carts: CartSlice,
  },
});

export default store;
