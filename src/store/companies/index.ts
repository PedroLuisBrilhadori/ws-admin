import { Company } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: Company[] = [];

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompanies(state, action) {
      return action.payload;
    },

    addCompany(state, action) {
      return state.concat(action.payload);
    },
  },
});

export const { setCompanies, addCompany } = slice.actions;

export const selectCompanies = (state: RootState) => {
  return state.companies;
};

export default slice.reducer;
