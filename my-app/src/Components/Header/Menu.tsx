import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'core/interfaces';
import clN from './menu.module.scss';
import Logo from './Logo/Logo';
import Links from './Links/Links';
import NavBar from './NavBar/NavBar';
import CvLink from './CVLink';

const Menu = () => {
	const isMobileMenuOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<div className={cn(clN.menu, { [clN.open]: isMobileMenuOpen === true })}>
			<Logo />
			<NavBar />
			<Links />
			<CvLink />
		</div>
	);
};

export default Menu;
