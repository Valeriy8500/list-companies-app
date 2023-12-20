import { RootState } from "./store";

export const selectorCompanies = (state: RootState): any => (
  state.companies.elements
);