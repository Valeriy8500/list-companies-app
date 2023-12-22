import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { companiesSlice } from "./companies/companies.slice";
import { companiesSliceReducer } from "./companies";

export const rootReducer = combineReducers({
  [companiesSlice.name]: companiesSliceReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
