import { TOURS } from 'constants';
import * as Types from './constatnt';

const initialState = {
	total_items: 0,
	items: [],
};

export const toursReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.TOURS_FETCH_ALL_TOURS:
			const items = TOURS.filter((el) =>
				el.name.toLowerCase().includes(action.payload.toLowerCase())
			);
			return {
				...state,
				total_items: items.length,
				items,
			};
		case Types.TOURS_ADD_NEW_TOUR:
			return {
				...state,
				total_items: state.total_items++,
				items: [...state.items, action.payload],
			};
		case Types.TOURS_REMOVE_BY_ID:
			return {
				...state,
				total_items: state.total_items - 1,
				items: state.items.filter((el) => el.id !== action.payload),
			};
		default:
			return state;
	}
};
