import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templates";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    templates: templateReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
