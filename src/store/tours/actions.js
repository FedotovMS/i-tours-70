import * as Types from './constatnt';

export const fetchAllTours = (query) => ({
	type: Types.TOURS_FETCH_ALL_TOURS,
	payload: query,
});

export const addNewTour = (tour) => ({
	type: Types.TOURS_ADD_NEW_TOUR,
	payload: tour,
});

export const removeTourById = (id) => ({
	type: Types.TOURS_REMOVE_BY_ID,
	payload: id,
});
