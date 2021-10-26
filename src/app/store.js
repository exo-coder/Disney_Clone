import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../event/user/userSlice"
import movieReducer from "../event/movie/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
