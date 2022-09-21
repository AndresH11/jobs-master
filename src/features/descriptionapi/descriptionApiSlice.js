import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const descriptionApiSlice = createSlice({
  name: 'descriptionApi',
  initialState,
  reducers: {
    apiDescription: (state, action) => {
      return action.payload;
    }
  },
});

export const { apiDescription } = descriptionApiSlice.actions;

export default descriptionApiSlice.reducer;