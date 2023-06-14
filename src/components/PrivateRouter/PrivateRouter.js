import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/', isLogged }) => {
	return isLogged ? Component : <Navigate to={redirectTo} />;
};
