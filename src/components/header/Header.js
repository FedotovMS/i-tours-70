import { ReactComponent as LogoIcon } from 'assets/image/logo.svg';
import { useTheme } from 'hooks/useThemeContext';

import './Header.css';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from 'store/theme/slice';
import { DARK } from 'constants';
import { LIGHT } from 'constants';

const Header = () => {
	// const { theme, onToggle } = useTheme();
	const theme = useSelector(getTheme);
	const dispatch = useDispatch();

	const toggleTheme = () => {
		const value = theme === DARK ? LIGHT : DARK;
		dispatch(setTheme(value));
	};

	return (
		<>
			<header>
				<LogoIcon id='logo' />
				<button onClick={toggleTheme}>Theme:{theme}</button>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
