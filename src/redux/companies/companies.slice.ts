import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companiesData } from "../../constans/constans";

const initialState = {
  elements: companiesData,
  confirmCompaniesModalState: false,
  confirmEmployeesModalState: false,
  companiesDetailsState: false,
  employeesDetailsState: false,
  companiesCurrId: 0,
  employeesCurrId: 0,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<any>) {
      state.elements.push(action.payload);
    },
    editCompany(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? item : { ...action.payload }
      );
    },
    deleteCompany(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    toogleCompanyConfirmModal(state) {
      state.confirmCompaniesModalState = !state.confirmCompaniesModalState;
    },
    toogleCompanyDetailsModal(state) {
      state.companiesDetailsState = !state.companiesDetailsState;
    },
    saveCompanyCurrId(state, action: PayloadAction<any>) {
      state.companiesCurrId = action.payload;
    },
    toogleCompanyCheckBox(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item
      );
    },
    addEmployee(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const currEmployeesArr = [...item.employees, action.payload];
          return { ...item, employees: currEmployeesArr };
        } else {
          return item;
        }
      });
    },
    editEmployee(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const editEmployees = item.employees.map(i =>
            i.id === action.payload.id ? { ...action.payload } : i
          );
          return { ...item, employees: editEmployees };
        } else {
          return item;
        }
      });
    },
    deleteEmployee(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    toogleEmployeeConfirmModal(state) {
      state.confirmEmployeesModalState = !state.confirmEmployeesModalState;
    },
    toogleEmployeeDetailsModal(state) {
      state.employeesDetailsState = !state.employeesDetailsState;
    },
    saveEmployeeCurrId(state, action: PayloadAction<any>) {
      state.employeesCurrId = action.payload;
    },
    toogleEmployeeCheckBox(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const updatedEmployees = item.employees.map(i =>
            i.id === action.payload ? { ...i, checked: !i.checked } : i
          );
          return { ...item, employees: updatedEmployees };
        } else {
          return item;
        }
      });
    }
  }
});

