import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { companiesData } from "../../constans/constans";

const initialState = {};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<any>) {
      console.log('addElement');
    },
    editElement(state, action: PayloadAction<any>) {
      console.log('editElement');
    },
    deleteElement(state, action: PayloadAction<any>) {
      console.log('deleteElement');
    },
  }
});