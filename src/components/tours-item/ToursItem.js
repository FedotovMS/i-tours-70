import PropTypes from 'prop-types';

import './ToursItem.css';
import clsx from 'clsx';
import { LIGHT, DARK } from 'constants';
import { useTheme } from 'hooks/useThemeContext';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTheme } from 'store/theme/slice';

const ToursItem = ({ id, name, price, description, continent, onDelete }) => {
	// const { theme } = useTheme();
	const theme = useSelector(getTheme);

	const { tourId } = useParams();

	return (
		<li
			className={clsx('tours-item', {
				'dark-theme': theme === LIGHT,
				'light-theme': theme === DARK,
			})}>
			<p>ID:{id}</p>
			<p>Name:{name}</p>
			<p>Price:{price}</p>
			<p>Continent:{continent}</p>
			{/* {description && <p>Description:{description}</p>} */}
			<button onClick={() => onDelete(id)}>Delete</button>
			<Link to={`/tours/${id}`} state={{ description }}>
				More
			</Link>

			{+tourId === id && <Outlet />}
		</li>
	);
};

export default ToursItem;

ToursItem.propTypes = {
	name: PropTypes.string.isRequired,
	// price: PropTypes.string.isRequired,
	continent: PropTypes.string.isRequired,
	description: PropTypes.string,
};
