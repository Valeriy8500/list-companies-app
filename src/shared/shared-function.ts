import { ICompaniesData, IEmployeesData } from "../types/types";

export function generateId(arr: ICompaniesData[] | IEmployeesData[]): number {
  let newId = 0;

  if (arr.length) {
    newId = arr[arr.length - 1].id + 1;
  } else {
    newId = 1;
  }
  return newId;
}