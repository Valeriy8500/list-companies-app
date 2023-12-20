import { RootState } from "./store";

export const selectorCompanies = (state: RootState): any => (
  state.companies.elements
);

export const selectorConfirmModalState = (state: RootState): any => (
  state.companies.confirmModalState
);

export const selectorCompaniesDetailsState = (state: RootState): any => (
  state.companies.companiesDetailsState
);

export const selectorCurrId = (state: RootState): any => (
  state.companies.currId
);