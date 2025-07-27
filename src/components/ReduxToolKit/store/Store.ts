import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './../slices//CartSlice';
import authReducer from './../slices//AuthSlice';
import orderReducer from './../slices//OrderSlice';
import productReducer from './../slices/ProductSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
