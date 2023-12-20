import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companiesData } from "../../constans/constans";

const initialState = {
  elements: companiesData
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
      console.log('deleteElement: ', state.elements);
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
  }
});