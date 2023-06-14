import Header from './components/header';

import { DARK, LIGHT } from 'constants';

import './App.scss';
import clsx from 'clsx';
import Tours from 'components/tours/Tours';
import ThemeContextComponent, { useTheme } from 'hooks/useThemeContext';
import {
	Link,
	NavLink,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import ContactUs from 'components/contact-us/ContactUs';
// import Support from 'components/support/Support';
import TourDetails from 'components/tour-details/TourDetails';
import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { fetchTours } from 'api/tours';
import { useSelector } from 'react-redux';
import { getTheme } from 'store/theme/slice';
import Auth from 'components/auth/Auth';
import { PrivateRoute } from 'components/PrivateRouter/PrivateRouter';

const Support = lazy(() => import('components/support/Support.js'));

const App = () => {
	// const { theme } = useTheme();
	const theme = useSelector(getTheme);
	const [isLogged, setIsLogged] = useState(false);

	const location = useLocation();

	const routes = [
		{ path: '/tours', text: 'go to tours page' },
		{ path: '/contact-us', text: 'go to contact-us' },
		{ path: '/support', text: 'go to support' },
	];

	useEffect(() => {
		const token = localStorage.getItem('token');
		setIsLogged(!!token);
	}, [location.pathname]);

	return (
		<ThemeContextComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header />

				<Routes>
					<Route
						path='/auth/*'
						element={<PrivateRoute isLogged={!isLogged} component={<Auth />} />}
					/>

					<Route
						path='/*'
						element={
							<PrivateRoute
								isLogged={isLogged}
								redirectTo='/auth/sign-in'
								component={
									<>
										<nav>
											{routes.map((el) => (
												<NavLink
													to={el.path}
													className='nav-item'
													key={el.path}
													replace={el.path === '/support' ? true : false}>
													{el.text}
												</NavLink>
											))}
										</nav>

										<Routes>
											<Route path='/tours' element={<Tours />}>
												<Route path=':tourId' element={<TourDetails />} />
											</Route>

											<Route path={routes[1].path} element={<ContactUs />} />
											<Route
												path={routes[2].path}
												element={
													<Suspense fallback={<div>loading Support...</div>}>
														<Support />
													</Suspense>
												}
											/>
											<Route path='*' element={<Navigate to='/tours' />} />
										</Routes>
									</>
								}
							/>
						}
					/>
				</Routes>
			</div>
		</ThemeContextComponent>
	);
};

export default App;

// gkjvjgbkgb
// support {replace}
// /tours
