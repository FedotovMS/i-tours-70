import { configureStore } from '@reduxjs/toolkit';
import { toursSlice } from './tours/slice';
import { themeSlice } from './theme/slice';
import { toursApi } from './tours/api';

export const store = configureStore({
	reducer: {
		[themeSlice.name]: themeSlice.reducer,
		[toursApi.reducerPath]: toursApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toursApi.middleware),
});
