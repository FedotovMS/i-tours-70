import { useParams } from 'react-router-dom';

const TourDetails = () => {
	const { tourId } = useParams();

	return (
		<div>
			<h1>TourDetails for id: {tourId}</h1>
		</div>
	);
};

export default TourDetails;
