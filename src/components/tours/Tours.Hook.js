import { fetchTours } from 'api/tours';
import ToursForm from 'components/tours-form/ToursForm';
import ToursItem from 'components/tours-item/ToursItem';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const ToursHook = (props) => {
	const [query, setQuery] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);
	const [tours, setTours] = useState({
		total_items: 0,
		items: [],
	});

	const handleFetchTours = async (query) => {
		const response = await fetchTours(query);
		setTours(response);
	};

	// componentDidMount && componentDidUpdate
	useEffect(() => {
		handleFetchTours(query);

		return () => {
			console.log('componentWillUnmount');
		};
	}, [query]);

	return (
		<>
			{/* <ToursForm
                visible={visibleModal}
                onClose={this.handleToggleModal}
                onAddFunc={this.handleAddTours}
            /> */}
			<p>{isLoading}</p>

			<section className='tours-page'>
				<div className='tours-page__controlls'>
					<h1>Tours page</h1>
					<input
						type='text'
						placeholder='search by name...'
						onChange={debounce((event) => setQuery(event.target.value), 1000)}
					/>
					{/* <button onClick={this.handleToggleModal}>Open Modal</button> */}
				</div>

				<>
					<h6>Total tours:{tours.total_items}</h6>
					<ul>
						{tours.items.map((tour) => (
							<ToursItem
								key={tour.id}
								{...props}
								{...tour}
								// onDelete={this.handleDeleteTours}
							/>
						))}
					</ul>
				</>
			</section>
		</>
	);
};

export default ToursHook;
