import { configureStore } from "@reduxjs/toolkit";
import profileDataReducer from "./profileDataSlice/profileData";

export const store = configureStore({
  reducer: { profileData: profileDataReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
