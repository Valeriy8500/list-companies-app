import { ICompaniesData } from "../types/types";

export function generateId(companies: ICompaniesData[]): number {
  let newId = 0;

  if (companies.length) {
    newId = companies[companies.length - 1].id + 1;
  } else {
    newId = 1;
  }
  return newId;
}