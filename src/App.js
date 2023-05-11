import { useState } from 'react';
import Header from './components/header';
import Tours from './components/tours';

import { DARK, LIGHT } from 'constants';

import './App.scss';
import clsx from 'clsx';
import ToursHook from 'components/tours/Tours.Hook';

const App = () => {
	const [theme, setTheme] = useState(DARK);

	const handleToggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
	};

	return (
		<div
			className={clsx('app-container', {
				'dark-theme': theme === DARK,
				'light-theme': theme === LIGHT,
			})}>
			<Header theme={theme} onToggle={handleToggleTheme}></Header>
			{/* <Tours theme={theme}></Tours> */}

			<ToursHook theme={theme} />
		</div>
	);
};

export default App;
