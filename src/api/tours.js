import HTTPClient from './config';

const fetchTours = (query = false) => {
	const requestURL = query ? `/tours?name_like=${query}` : '/tourss';

	return HTTPClient.get(requestURL);
};

const addTour = (tour) => {
	return HTTPClient.post('/tours', tour);
};

const deleteTourById = (tourId) => {
	return HTTPClient.delete(`/tours/${tourId}`);
};

export { fetchTours, addTour, deleteTourById };
