import { companiesSlice } from "./companies.slice";

export const companiesSliceReducer = companiesSlice.reducer;

export const { addElement, editElement, deleteElement } = companiesSlice.actions;