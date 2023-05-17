import { ReactComponent as LogoIcon } from 'assets/image/logo.svg';
import { useTheme } from 'hooks/useThemeContext';

import './Header.css';
import { Outlet } from 'react-router-dom';

const Header = () => {
	const { theme, onToggle } = useTheme();

	return (
		<>
			<header>
				<LogoIcon id='logo' />
				<button onClick={onToggle}>Theme:{theme}</button>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
