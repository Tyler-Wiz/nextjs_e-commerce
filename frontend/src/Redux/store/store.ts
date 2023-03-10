import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "../reducer/cartSlice";
import { productApi } from "../reducer/productsApi";
import authReducer from "../reducer/AuthSlice";
import wishListeReducer from "../reducer/wishListSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
      [productApi.reducerPath]: productApi.reducer,
      wishList: wishListeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
