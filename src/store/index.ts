import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templates";
import userReducer from "./user";
import companiesReducer from "./companies";

export const store = configureStore({
  reducer: {
    templates: templateReducer,
    user: userReducer,
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
