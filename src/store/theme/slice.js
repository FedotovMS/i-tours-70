import { createSlice } from '@reduxjs/toolkit';
import { DARK } from 'constants';

export const getTheme = (state) => state.theme;

export const themeSlice = createSlice({
	name: 'theme',
	initialState: DARK,
	reducers: {
		setTheme: (_, action) => action.payload,
	},
});

export const { setTheme } = themeSlice.actions;
