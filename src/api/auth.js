import axios from 'axios';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = (credentials) => axios.post('/users/signup', credentials);

export const signIn = (credentials) => {
	return axios.post('/users/login', credentials).then((response) => {
		setAuthHeader(response.data.token);
		return response;
	});
};
