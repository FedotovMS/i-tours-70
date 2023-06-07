import { configureStore } from '@reduxjs/toolkit';
import { toursSlice } from './tours/slice';
import { themeSlice } from './theme/slice';

export const store = configureStore({
	reducer: {
		[toursSlice.name]: toursSlice.reducer,
		[themeSlice.name]: themeSlice.reducer,
	},
});
