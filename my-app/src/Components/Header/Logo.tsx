import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './header.module.scss';

const Logo = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<NavLink onClick={() => dispatch(changeMobileIsOpen())} to="">
				<div className={clN.logoBlock}>
					<h2 className={clN.letter}>I.D</h2>
					<p className={clN.job}>Web Developer</p>
				</div>
			</NavLink>
		</div>
	);
};

export default Logo;
