import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companiesData } from "../../constans/constans";

const initialState = {
  elements: companiesData,
  confirmModalState: false,
  companiesDetailsState: false,
  currId: 0
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<any>) {
      console.log('addElement: ', action.payload);
      state.elements.push(action.payload);
    },
    editElement(state, action: PayloadAction<any>) {
      console.log('editElement: ', action.payload);
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? item : { ...action.payload }
      );
    },
    deleteElement(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    toogleConfirmModalState(state) {
      state.confirmModalState = !state.confirmModalState;
    },
    toogleCompaniesDetailsState(state) {
      state.companiesDetailsState = !state.companiesDetailsState;
    },
    saveCurrId(state, action: PayloadAction<any>) {
      state.currId = action.payload;
    },
  }
});