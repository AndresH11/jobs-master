import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  location: '',
  place: '',
  fullTime: 0,
  page: 1,
  page2: 1,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      return action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;