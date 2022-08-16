import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './navBar.module.scss';

const NavBar = () => {
	const dispatch = useAppDispatch();

	return (
		<nav className={clN.navBar}>
			<NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to="about">
				About
			</NavLink>
			<NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to="skills">
				Skills
			</NavLink>
			<NavLink onClick={() => dispatch(changeMobileIsOpen())} className={clN.navBar__item} to="contact">
				Contact
			</NavLink>
		</nav>
	);
};

export default NavBar;
