import { fetchTours } from 'api/tours';
import { fetchAllToursError, fetchAllToursSuccess, fetchAllToursToggleLoading } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Version without library

// export const fetchAllTours =
// 	({ query }) =>
// 	async (dispatch) => {
// 		try {
// 			dispatch(fetchAllToursToggleLoading(true));

// 			const { data: items } = await fetchTours(query);
// 			console.log(items);
// 			dispatch(
// 				fetchAllToursSuccess({
// 					total_items: items.length,
// 					items,
// 				})
// 			);
// 		} catch (error) {
// 			const msg = error?.response ? error.response.statusText : error.message;
// 			dispatch(fetchAllToursError(msg));
// 		} finally {
// 			dispatch(fetchAllToursToggleLoading(false));
// 		}
// 	};

// Version with Redux Toolkit

export const fetchAllTours = createAsyncThunk('tours/fetchAll', async ({ query }, thunkApi) => {
	try {
		const { data: items } = await fetchTours(query);

		return {
			total_items: items.length,
			items,
		};
	} catch (error) {
		const msg = error?.response ? error.response.statusText : error.message;
		return thunkApi.rejectWithValue(msg);
	}
});
