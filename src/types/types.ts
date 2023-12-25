export interface ICompaniesData {
  id: number;
  companyName: string;
  employeesCount: number | string;
  companyAddress: string;
  checked: boolean;
  employees: IEmployeesData[];
}

export interface IEmployeesData {
  id: number;
  surname: string;
  name: string;
  position: string;
  checked: boolean;
}
export interface IInitialState {
  elements: ICompaniesData[],
  confirmCompaniesModalState: boolean;
  confirmEmployeesModalState: boolean;
  companiesDetailsState: boolean;
  employeesDetailsState: boolean;
  companiesCurrId: number;
  employeesCurrId: number;
  companiesSelectAllState: boolean;
  employeesSelectAllState: boolean;
  elementLoadingCounter: number;
}
