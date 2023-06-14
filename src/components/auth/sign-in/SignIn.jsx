import { signIn } from 'api/auth';
import css from './style.module.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		const { data } = await signIn({
			email: form.elements.email.value,
			password: form.elements.password.value,
		});

		localStorage.setItem('token', data.token);
		navigate('/');

		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
			<label className={css.label}>
				Email
				<input type='email' name='email' />
			</label>
			<label className={css.label}>
				Password
				<input type='password' name='password' />
			</label>
			<button type='submit'>Log In</button>
		</form>
	);
};

export default SignIn;
