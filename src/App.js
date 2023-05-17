import Header from './components/header';

import { DARK, LIGHT } from 'constants';

import './App.scss';
import clsx from 'clsx';
import Tours from 'components/tours/Tours';
import ThemeContextComponent, { useTheme } from 'hooks/useThemeContext';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ContactUs from 'components/contact-us/ContactUs';
import Support from 'components/support/Support';
import TourDetails from 'components/tour-details/TourDetails';

const App = () => {
	const { theme } = useTheme();

	const routes = [
		{ path: '/tours', text: 'go to tours page' },
		{ path: '/support', text: 'go to support' },
		{ path: '/contact-us', text: 'go to contact-us' },
	];

	return (
		<ThemeContextComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<nav>
					{routes.map((el) => (
						<NavLink to={el.path} className='nav-item' key={el.path}>
							{el.text}
						</NavLink>
					))}
				</nav>

				<Routes>
					<Route path='/tours' element={<Header />}>
						<Route index element={<Tours theme={theme} />} />
						<Route path=':tourId' element={<TourDetails />} />
					</Route>

					<Route path={routes[1].path} element={<ContactUs />} />
					<Route path={routes[2].path} element={<Support />} />
					<Route path='*' element={<h1>404 not found</h1>} />
				</Routes>
			</div>
		</ThemeContextComponent>
	);
};

export default App;
