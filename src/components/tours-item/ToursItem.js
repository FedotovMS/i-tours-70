import PropTypes from 'prop-types';

import './ToursItem.css';
import clsx from 'clsx';
import { LIGHT, DARK } from 'constants';
import { useTheme } from 'hooks/useThemeContext';
import { Link } from 'react-router-dom';

const ToursItem = ({ id, name, price, continent, description, onDelete }) => {
	const { theme } = useTheme();

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
			{description && <p>Description:{description}</p>}
			<button onClick={() => onDelete(id)}>Delete</button>
			<Link to={`/tours/${id}`}>Go to details</Link>
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
