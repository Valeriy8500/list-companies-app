import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  companiesData,
  firstUploadedData,
  secondUploadedData,
  thirdUploadedData
} from "../../constans/constans";

const initialState = {
  elements: companiesData,
  confirmCompaniesModalState: false,
  confirmEmployeesModalState: false,
  companiesDetailsState: false,
  employeesDetailsState: false,
  companiesCurrId: 0,
  employeesCurrId: 0,
  companiesSelectAllState: false,
  employeesSelectAllState: false,
  elementLoadingCounter: 0
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany(state, action: PayloadAction<any>) {
      state.elements.push(action.payload);
    },
    addCompanies(state) {
      if (state.elementLoadingCounter === 0) {
        state.elements.push(...firstUploadedData);
        state.elementLoadingCounter = state.elementLoadingCounter + 1;
      } else if (state.elementLoadingCounter === 1) {
        state.elements.push(...secondUploadedData);
        state.elementLoadingCounter = state.elementLoadingCounter + 1;
      } else if (state.elementLoadingCounter === 2) {
        state.elements.push(...thirdUploadedData);
        state.elementLoadingCounter = state.elementLoadingCounter + 1;
      }
    },
    editCompany(state, action: PayloadAction<any>) {
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? item : { ...action.payload }
      );
    },
    deleteCompany(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);

      if (state.elements.length === 0) {
        state.companiesSelectAllState = !state.companiesSelectAllState;
      }
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

      const currCheckEl = state.elements.filter(item => item.checked);

      if (currCheckEl.length === 1 && currCheckEl[0].id !== action.payload) {
        console.log('if');
        state.companiesCurrId = currCheckEl[0].id;
      } else {
        state.companiesCurrId = action.payload;
      }
    },
    selectAllCompanies(state) {
      state.companiesSelectAllState = !state.companiesSelectAllState;

      state.elements = state.elements.map((item) => {
        return { ...item, checked: state.companiesSelectAllState };
      });
    },
    deleteSelectCompanies(state) {
      state.elements = state.elements.filter(item => !item.checked);

      if (state.companiesSelectAllState) {
        state.companiesSelectAllState = !state.companiesSelectAllState;
      }
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
      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const newEmployeesArr = item.employees.filter(i =>
            i.id !== action.payload
          );
          return { ...item, employees: newEmployeesArr };
        } else {
          return item;
        }
      });

      if (state.employeesSelectAllState) {
        state.employeesSelectAllState = !state.employeesSelectAllState;
      }
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
    },
    selectAllEmployees(state) {
      state.employeesSelectAllState = !state.employeesSelectAllState;

      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const updatedEmployees = item.employees.map(i => {
            return { ...i, checked: state.employeesSelectAllState };
          });
          return { ...item, employees: updatedEmployees };
        } else {
          return item;
        }
      });
    },
    deleteSelectEmployees(state) {
      state.elements = state.elements.map(item => {
        if (item.id === state.companiesCurrId) {
          const updatedEmployees = item.employees.filter(i => !i.checked);

          return { ...item, employees: updatedEmployees };
        } else {
          return item;
        }
      });

      if (state.employeesSelectAllState) {
        state.employeesSelectAllState = !state.employeesSelectAllState;
      }
    },
  }
});

