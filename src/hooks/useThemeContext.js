import { LIGHT } from 'constants';
import { DARK } from 'constants';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(DARK);

export const useTheme = () => useContext(ThemeContext);

const ThemeContextComponent = (props) => {
	const [theme, setTheme] = useState(DARK);

	const onToggle = () => {
		setTheme((prevTheme) => (prevTheme === DARK ? LIGHT : DARK));
	};

	return (
		<ThemeContext.Provider value={{ theme, onToggle, foo: [1, 2, 3] }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextComponent;
