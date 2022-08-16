import React, { FC, FormEvent, useState, memo } from 'react';
import { useAppDispatch } from 'core/interfaces';
import { checkContactClick } from 'store/portfolioSlice';
import clN from './form.module.scss';

const Form: FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useAppDispatch();

	const handlerSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(checkContactClick(true));
	};

	return (
		<form onSubmit={handlerSubmit} className={clN.form}>
			<input
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
				className={clN.name}
				type="text"
				placeholder="Name"
			/>
			<input
				value={email}
				onChange={e => {
					setEmail(e.target.value);
				}}
				className={clN.email}
				type="email"
				placeholder="Email"
			/>
			<textarea
				value={message}
				onChange={e => {
					setMessage(e.target.value);
				}}
				className={clN.message}
				placeholder="Message"
			/>
			<button className={clN.submit} type="submit">
				Send
			</button>
		</form>
	);
};
export default memo(Form);
