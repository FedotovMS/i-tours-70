import ToursItem from '../tours-item';
import './Tours.css';

const Tours = (props) => {
	const toursArray = [
		{
			id: 1,
			name: 'Portugalia vibe 123',
			price: 3000,
			continent: 'Europe',
			// description: 'Best tour for discover Portugal',
		},
		{
			id: 2,
			name: 'The breath of Italy',
			price: 5000,
			continent: 'Europe',
			description: 'Best tour for discover Italia',
		},
		{
			id: 3,
			name: 'Spanish bullfight',
			price: 1000,
			continent: 'Europe',
			// description: 'A new experience from watching a bullfight',
		},
		{
			id: 4,
			name: 'Germany race',
			price: 15000,
			continent: 'Europe',
			description: 'A quick walk on the German autobahns',
		},
		{
			id: 5,
			name: 'Indian traditions',
			price: 10000,
			continent: 'Asia',
			description: 'Best tour for discover Asia',
		},
	];
	const _getStyle = (nameOfTheme) => {
		if (nameOfTheme === 'dark') {
			return {
				background: '#000',
				color: '#fff',
			};
		}
		return {
			background: '#fff',
			color: '#000',
		};
	};

	return (
		<section className='tours-page' style={_getStyle(props.theme)}>
			<h1>Tours page</h1>
			<ul>
				{toursArray.map((tour) => {
					return <ToursItem key={tour.id} {...tour} theme={props.theme} />;
				})}
			</ul>
			{props.children}
		</section>
	);
};

export default Tours;
