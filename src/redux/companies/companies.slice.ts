import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companiesData } from "../../constans/constans";

const initialState = {
  elements: companiesData,
  confirmModalState: false,
  currId: 0
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<any>) {
      state.elements.push(action.payload);
    },
    editElement(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    deleteElement(state, action: PayloadAction<any>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    toogleConfirmModalState(state, action: PayloadAction<any>) {
      // state.elements = state.elements.filter(item => item.id !== action.payload);
      console.log('toogleConfirmModalState');
      state.confirmModalState = !state.confirmModalState;
    },
    saveCurrId(state, action: PayloadAction<any>) {
      // state.elements = state.elements.filter(item => item.id !== action.payload);
      state.currId = action.payload;
    },
  }
});