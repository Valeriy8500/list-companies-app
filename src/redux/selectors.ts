import { RootState } from "./store";

export const selectorCompanies = (state: RootState): any => (
  state.companies.elements
);

export const selectorcConfirmCompaniesModalState = (state: RootState): any => (
  state.companies.confirmCompaniesModalState
);

export const selectorCompaniesDetailsState = (state: RootState): any => (
  state.companies.companiesDetailsState
);

export const selectorCompaniesCurrId = (state: RootState): any => (
  state.companies.companiesCurrId
);

export const selectorCompaniesSelectAllState = (state: RootState): any => (
  state.companies.companiesSelectAllState
);

export const selectorConfirmEmployeesModalState = (state: RootState): any => (
  state.companies.confirmEmployeesModalState
);

export const selectorEmployeesDetailsState = (state: RootState): any => (
  state.companies.employeesDetailsState
);

export const selectorEmployeesCurrId = (state: RootState): any => (
  state.companies.employeesCurrId
);

export const selectorEmployeesSelectAllState = (state: RootState): any => (
  state.companies.employeesSelectAllState
);



