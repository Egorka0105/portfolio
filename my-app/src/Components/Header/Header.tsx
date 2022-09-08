import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'core/interfaces';
import clN from './header.module.scss';
import Logo from './Logo';
import NavBar from './NavBar';
import Links from './Links';
import CvLink from './CVLink';

const Header = () => {
	const isMobileMenuOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<aside className={cn(clN.header, { [clN.open]: isMobileMenuOpen === true })}>
			<Logo />
			<NavBar />
			<Links />
			<CvLink />
		</aside>
	);
};

export default Header;
