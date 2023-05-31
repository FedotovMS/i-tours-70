import { useEffect, useMemo, useState } from 'react';
import { addTour, deleteTourById, fetchTours } from 'api/tours';
import ToursItem from 'components/tours-item/ToursItem';

import './Tours.scss';
import ToursForm from 'components/tours-form/ToursForm';
import debounce from 'lodash.debounce';
import { useToggle } from 'hooks/useToggle';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTours } from 'store/tours/selectors';
import { addNewTour, fetchAllTours, removeTourById } from 'store/tours/actions';

const Tours = () => {
	const { visible, open, close } = useToggle();
	const dispatch = useDispatch();

	const { items, total_items } = useSelector(getTours);

	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
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

	useEffect(() => {
		// handleFetchTours();
		dispatch(fetchAllTours(query));
	}, [dispatch, query]);

	const handleAddTours = async (tour) => {
		// try {
		// 	await addTour(tour);
		// 	handleFetchTours();
		// } catch (err) {
		// 	setError(true);
		// }
		dispatch(addNewTour({ id: Math.ceil(Math.random() * 100000), ...tour }));
	};

	const handleDeleteTours = async (tourId) => {
		// try {
		// 	await deleteTourById(tourId);
		// 	handleFetchTours();
		// } catch (err) {
		// 	setError(true);
		// }
		dispatch(removeTourById(tourId));
	};

	return (
		<>
			<ToursForm visible={visible} onClose={close} onAddFunc={handleAddTours} />
			<p>{isLoading}</p>

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
							<div>Something went wrong</div>
						) : (
							<>
								<h6>Total tours:{total_items}</h6>
								<ul>
									{items.map((tour) => (
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
