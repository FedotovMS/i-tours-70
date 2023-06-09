import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'constants/api';

export const toursApi = createApi({
	reducerPath: 'tours',
	tagTypes: 'TOURS',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		fetchAllTours: builder.query({
			query: (query) => (query ? `/tours?name_like=${query}` : '/tours'),
			transformResponse: (items) => ({
				total_items: items.length,
				items,
			}),
			providesTags: ['TOURS'],
		}),
		addNewTour: builder.mutation({
			query: (tour) => ({
				url: '/tours',
				method: 'POST',
				body: tour,
			}),
			invalidatesTags: ['TOURS'],
		}),
		removeTourById: builder.mutation({
			query: (tourId) => ({
				url: `/tours/${tourId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['TOURS'],
		}),
	}),
});

export const { useFetchAllToursQuery, useAddNewTourMutation, useRemoveTourByIdMutation } = toursApi;
