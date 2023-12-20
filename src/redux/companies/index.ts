import { companiesSlice } from "./companies.slice";

export const companiesSliceReducer = companiesSlice.reducer;

export const {
  addElement,
  editElement,
  deleteElement,
  toogleConfirmModalState,
  toogleCompaniesDetailsState,
  saveCurrId
} = companiesSlice.actions;