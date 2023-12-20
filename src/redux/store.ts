import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies/companies.slice";

export const rootReducer = combineReducers({
  [companiesSlice.name]: companiesSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
