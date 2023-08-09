import { configureStore } from "@reduxjs/toolkit";
import { userApi } from '../store/services/user';
import userReducer from '../store/slices/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});