export interface ICompaniesData {
  id: number;
  companyName: string;
  employeesCount: number;
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
