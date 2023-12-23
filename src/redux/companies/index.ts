import { companiesSlice } from "./companies.slice";

export const companiesSliceReducer = companiesSlice.reducer;

export const {
  addCompany,
  editCompany,
  deleteCompany,
  toogleCompanyConfirmModal,
  toogleCompanyDetailsModal,
  saveCompanyCurrId,
  toogleCompanyCheckBox,
  selectAllCompanies,
  addEmployee,
  editEmployee,
  deleteEmployee,
  toogleEmployeeConfirmModal,
  toogleEmployeeDetailsModal,
  saveEmployeeCurrId,
  toogleEmployeeCheckBox,
  selectAllEmployees
} = companiesSlice.actions;