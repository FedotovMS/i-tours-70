import { createSelector } from '@reduxjs/toolkit';

// Атомарні селектори

const selectTours = (state) => state.tours;
export const selectIsLoading = (state) => state.tours.isLoading;
export const selectIsError = (state) => state.tours.isError;

// кладові селектори
export const selectDescriptionTour = (state) => {
	const items = state.tours.items.filter((el) => el.description);
	return {
		total_items: items.length,
		items,
	};
};

export const selectWithoutDescriptionTour = (state) => {
	const items = state.tours.items.filter((el) => !el.description);
	return {
		total_items: items.length,
		items,
	};
};

// Мемоізований(закешований) селектор

export const selectorTours = createSelector([selectTours], (tours) => tours);
