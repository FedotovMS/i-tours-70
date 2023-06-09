import { useEffect, useMemo, useState } from 'react';
import { addTour, deleteTourById, fetchTours } from 'api/tours';
import ToursItem from 'components/tours-item/ToursItem';

import './Tours.scss';
import ToursForm from 'components/tours-form/ToursForm';
import debounce from 'lodash.debounce';
import { useToggle } from 'hooks/useToggle';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectDescriptionTour,
	selectIsError,
	selectIsLoading,
	selectTours,
	selectWithoutDescriptionTour,
	selectorTours,
} from 'store/tours/selectors';
import { addNewTour, removeTourById } from 'store/tours/slice';
import { fetchAllTours } from 'store/tours/operations';
import {
	useAddNewTourMutation,
	useFetchAllToursQuery,
	useRemoveTourByIdMutation,
} from 'store/tours/api';

const Tours = () => {
	const { visible, open, close } = useToggle();
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');

	const { isLoading, isError, data } = useFetchAllToursQuery(query);

	const [addTour] = useAddNewTourMutation();
	const [removeTour] = useRemoveTourByIdMutation();

	// const { items, total_items } = useSelector(selectorTours);

	// const [tours, setTours] = useState({
	// 	total_items: 0,
	// 	items: [],
	// });

	// const cachedToursArr = useMemo(
	// 	() => tours.items.filter((el) => el.name.toLowerCase().includes(query.toLowerCase())),
	// 	[query, tours.items]
	// );

	// const handleFetchTours = async () => {
	// 	setLoading(true);
	// 	const response = await fetchTours();
	// 	setTours(response);
	// 	setLoading(false);
	// };

	// componentDidMount && componentDidUpdate

	// useEffect(() => {
	// 	dispatch(fetchAllTours({ query }));
	// }, [dispatch, query]);

	const handleAddTours = async (tour) => {
		// try {
		// 	await addTour(tour);
		// 	handleFetchTours();
		// } catch (err) {
		// 	setError(true);
		// }
		// dispatch(addNewTour({ id: Math.ceil(Math.random() * 100000), ...tour }));
		addTour(tour);
	};

	const handleDeleteTours = async (tourId) => {
		// try {
		// 	await deleteTourById(tourId);
		// 	handleFetchTours();
		// } catch (err) {
		// 	setError(true);
		// }
		// dispatch(removeTourById(tourId));
		removeTour(tourId);
	};

	return (
		<>
			<ToursForm visible={visible} onClose={close} onAddFunc={handleAddTours} />

			<section className='tours-page'>
				<div className='tours-page__controlls'>
					<h1>Tours page</h1>
					<input
						type='text'
						placeholder='search by name...'
						// value={query}
						onChange={debounce((e) => setQuery(e.target.value), 1000)}
					/>

					<button onClick={open}>Open Modal</button>
				</div>

				{isLoading ? (
					<div>...loading</div>
				) : (
					<>
						{isError ? (
							<p>wrong</p>
						) : (
							<>
								<h6>Total tours:{data?.total_items}</h6>
								<ul>
									{data?.items.map((tour) => (
										<ToursItem key={tour.id} {...tour} onDelete={handleDeleteTours} />
									))}
								</ul>
							</>
						)}
					</>
				)}
			</section>
		</>
	);
};

export default Tours;
