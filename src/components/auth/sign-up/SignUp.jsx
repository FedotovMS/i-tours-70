import { signUp } from 'api/auth';
import css from '../sign-in/style.module.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		await signUp({
			email: form.elements.email.value,
			name: form.elements.name.value,
			password: form.elements.password.value,
		});

		navigate('/sign-in');
		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit} autoComplete='off'>
			<label className={css.label}>
				Email
				<input type='email' name='email' />
			</label>
			<label className={css.label}>
				Name
				<input type='text' name='name' />
			</label>
			<label className={css.label}>
				Password
				<input type='password' name='password' />
			</label>
			<button type='submit'>Sign up</button>
		</form>
	);
};

export default SignUp;
