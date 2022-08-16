import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './logo.module.scss';

const Logo = () => {
	const dispatch = useAppDispatch();

	return (
		<NavLink onClick={() => dispatch(changeMobileIsOpen())} to="">
			<div className={clN.logoBlock}>
				<h2 className={clN.letter}>I.D</h2>
				<p className={clN.job}>Web Developer</p>
			</div>
		</NavLink>
	);
};

export default Logo;
