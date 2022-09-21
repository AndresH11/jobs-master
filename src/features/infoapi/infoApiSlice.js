import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const infoApiSlice = createSlice({
  name: 'infoApi',
  initialState,
  reducers: {
    apiResult: (state, action) => {
      return action.payload;
    },
  },
});

export const { apiResult } = infoApiSlice.actions;

export default infoApiSlice.reducer;