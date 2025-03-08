import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;