import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const vistaSlice = createSlice({
  name: 'vista',
  initialState,
  reducers: {
    vista: (state, action) => {
      return action.payload;
    },
  },
});

export const { vista } = vistaSlice.actions;

export default vistaSlice.reducer;