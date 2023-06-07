import { createSlice } from '@reduxjs/toolkit';
import { TOURS } from 'constants';
import { fetchAllTours } from './operations';

const initialState = {
	total_items: 0,
	items: [],
	isLoading: false,
	isError: null,
};

export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		// Verion without async action

		// fetchAllToursToggleLoading: (state, action) => {
		// 	state.isLoading = action.payload;
		// },
		// fetchAllToursSuccess: (state, action) => {
		// 	state.isError = null;
		// 	state.total_items = action.payload.total_items;
		// 	state.items = action.payload.items;
		// },
		// fetchAllToursError: (state, action) => {
		// 	state.isError = action.payload;

		// 	state.total_items = initialState.total_items;
		// 	state.items = initialState.items;
		// },

		addNewTour: (state, action) => {
			state.total_items += 1;
			state.items.push(action.payload);
		},
		removeTourById: (state, action) => {
			const index = TOURS.findIndex((el) => el.id === action.payload);
			state.total_items -= 1;
			state.items.splice(index, 1);
		},
	},

	// Handlers for async action

	extraReducers: {
		[fetchAllTours.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchAllTours.fulfilled]: (state, action) => {
			state.isError = null;
			state.isLoading = false;

			state.total_items = action.payload.total_items;
			state.items = action.payload.items;
		},
		[fetchAllTours.rejected]: (state, action) => {
			state.isError = action.payload;
			state.isLoading = false;

			state.total_items = initialState.total_items;
			state.items = initialState.items;
		},
	},
});

export const {
	fetchAllToursToggleLoading,
	// fetchAllToursProcess,
	fetchAllToursSuccess,
	fetchAllToursError,
	addNewTour,
	removeTourById,
} = toursSlice.actions;
