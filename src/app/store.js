import { configureStore } from '@reduxjs/toolkit';
import infoApiSlice from '../features/infoapi/infoApiSlice';
import searchSlice from '../features/search/searchSlice';
import descriptionApiSlice from '../features/descriptionapi/descriptionApiSlice';
import vistaSlice from '../features/vista/vistaSlice';

export const store = configureStore({
    reducer: {
        infoApi: infoApiSlice,
        search: searchSlice,
        descriptionApi: descriptionApiSlice,
        vista: vistaSlice,
    },
});