import { useCallback, useEffect, useMemo, useState } from 'react';
import { addTour, deleteTourById, fetchTours } from 'api/tours';
import ToursItem from 'components/tours-item/ToursItem';

import './Tours.scss';
import ToursForm from 'components/tours-form/ToursForm';
import debounce from 'lodash.debounce';
import { useToggle } from 'hooks/useToggle';
import { Outlet, useParams } from 'react-router-dom';

const Tours = () => {
	const { visible, open, close } = useToggle();
	const { tourId } = useParams();

	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
	const [tours, setTours] = useState({
		total_items: 0,
		items: [],
	});

	const cachedToursArr = useMemo(
		() => tours.items.filter((el) => el.name.toLowerCase().includes(query.toLowerCase())),
		[query, tours.items]
	);

	const handleFetchTours = async () => {
		setLoading(true);
		const response = await fetchTours();
		setTours(response);
		setLoading(false);
	};

	// componentDidMount && componentDidUpdate

	useEffect(() => {
		handleFetchTours();
	}, []);

	const handleAddTours = async (tour) => {
		try {
			await addTour(tour);
			handleFetchTours();
		} catch (err) {
			setError(true);
		}
	};

	const handleDeleteTours = async (tourId) => {
		try {
			await deleteTourById(tourId);
			handleFetchTours();
		} catch (err) {
			setError(true);
		}
	};

	return (
		<>
			<ToursForm visible={visible} onClose={close} onAddFunc={handleAddTours} />
			<p>{isLoading}</p>

			{false ? (
				<Outlet />
			) : (
				<section className='tours-page'>
					<div className='tours-page__controlls'>
						<h1>Tours page</h1>
						<input
							type='text'
							placeholder='search by name...'
							onChange={debounce((event) => setQuery(event.target.value), 1000)}
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
									<h6>Total tours:{tours.total_items}</h6>
									<ul>
										{cachedToursArr.map((tour) => (
											<ToursItem key={tour.id} {...tour} onDelete={handleDeleteTours} />
										))}
									</ul>
								</>
							)}
						</>
					)}
				</section>
			)}
		</>
	);
};

export default Tours;
