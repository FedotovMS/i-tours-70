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

const Support = lazy(() => import('components/support/Support.js'));

const App = () => {
	const { theme } = useTheme();
	const navigate = useNavigate();

	const routes = [
		{ path: '/tours', text: 'go to tours page' },
		{ path: '/contact-us', text: 'go to contact-us' },
		{ path: '/support', text: 'go to support' },
	];

	return (
		<ThemeContextComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header />
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
					<Route path='/tours' element={<Tours theme={theme} />}>
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
					<Route
						path='*'
						element={
							<div>
								<p>not found</p>
								<button onClick={() => navigate(-1)}>Back</button>
							</div>
						}
					/>
					{/* <Route path='*' element={<Navigate to='/tours' />} /> */}
					{/* <Route
						path='*'
						element={
							<>
								<h1>404 not found </h1>
								<button onClick={() => navigate(-1)}>Back</button>
							</>
						}
					/> */}
				</Routes>
			</div>
		</ThemeContextComponent>
	);
};

export default App;

// gkjvjgbkgb
// support {replace}
// /tours
