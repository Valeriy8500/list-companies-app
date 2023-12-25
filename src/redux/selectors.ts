import { ICompaniesData } from "../types/types";
import { RootState } from "./store";

export const selectorCompanies = (state: RootState): ICompaniesData[] => (
  state.companies.elements
);

export const selectorcConfirmCompaniesModalState = (state: RootState): boolean => (
  state.companies.confirmCompaniesModalState
);

export const selectorCompaniesDetailsState = (state: RootState): boolean => (
  state.companies.companiesDetailsState
);

export const selectorCompaniesCurrId = (state: RootState): number => (
  state.companies.companiesCurrId
);

export const selectorCompaniesSelectAllState = (state: RootState): boolean => (
  state.companies.companiesSelectAllState
);

export const selectorConfirmEmployeesModalState = (state: RootState): boolean => (
  state.companies.confirmEmployeesModalState
);

export const selectorEmployeesDetailsState = (state: RootState): boolean => (
  state.companies.employeesDetailsState
);

export const selectorEmployeesCurrId = (state: RootState): number => (
  state.companies.employeesCurrId
);

export const selectorEmployeesSelectAllState = (state: RootState): boolean => (
  state.companies.employeesSelectAllState
);



