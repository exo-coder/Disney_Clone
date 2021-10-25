import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../event/user/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
