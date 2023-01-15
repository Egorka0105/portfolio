import { FC } from 'react';
import cn from 'classnames';
import { useAppSelector } from 'core/interfaces';
import { CvLink, Logo, NavBar, SocialLinks } from 'Components';
import clN from './index.module.scss';

export const Header: FC = () => {
	const isMobileMenuOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<header className={cn(clN.header, { [clN.open]: isMobileMenuOpen === true })}>
			<Logo />
			<NavBar />
			<SocialLinks />
			<CvLink />
		</header>
	);
};
