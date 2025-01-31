  import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CardSlice";
import wishlistReducer from "../features/CardSlice"
import authReduser from "../features/Authentication"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    Auth:authReduser,
  },
});

