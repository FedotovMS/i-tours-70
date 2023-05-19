import { useLocation } from 'react-router-dom';

const TourDetails = () => {
	const { state } = useLocation();

	return <p>Description:{state.description || 'not found'}</p>;
};

export default TourDetails;
