import { useState } from 'react';

export const useToggle = () => {
	const [visible, setVisible] = useState(false);

	const open = () => {
		console.log('work open');
		setVisible(true);
	};
	const close = () => {
		console.log('work close');
		setVisible(false);
	};
	const toggle = () => {
		setVisible((prevValue) => !prevValue);
	};

	return { visible, open, close, toggle };
};
