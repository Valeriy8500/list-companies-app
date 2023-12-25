import { ICompaniesData, IEmployeesData } from "../types/types";

let id = 0;

export function generateId(arr: ICompaniesData[] | IEmployeesData[]): number {
  if (arr.length) {
    if (id === 0) {
      id = 51;
      return 51;
    } else {
      id++
      return id++;
    }
  } else {
    return 1;
  }
}