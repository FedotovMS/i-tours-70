import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';

const Auth = () => {
	return (
		<div>
			Auth Module
			<Routes>
				<Route path='sign-in' element={<SignIn />} />
				<Route path='sign-up' element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default Auth;
