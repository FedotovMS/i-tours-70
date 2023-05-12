import Header from './components/header';

import { DARK, LIGHT } from 'constants';

import './App.scss';
import clsx from 'clsx';
import Tours from 'components/tours/Tours';
import ThemeContextComponent, { useTheme } from 'hooks/useThemeContext';

const App = () => {
	const { theme } = useTheme();
	return (
		<ThemeContextComponent>
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header />
				<Tours theme={theme}></Tours>
			</div>
		</ThemeContextComponent>
	);
};

export default App;
