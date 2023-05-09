import { createSlice } from "@reduxjs/toolkit";
import { StudentsStateStructure } from "./types";

const initialStudentsState: StudentsStateStructure = {
  students: []
}

const studentsSlice = createSlice({
  name: "students",
  initialState: initialStudentsState,
  reducers: {}
})

export const {} = studentsSlice.actions;
export const studentsReducer = studentsSlice.reducer;
