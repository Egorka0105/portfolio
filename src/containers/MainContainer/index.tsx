import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from 'pages';

import cn from 'classnames';
import { useAppSelector } from 'core/interfaces';

import { MobileBtn } from 'Components';
import clN from './index.module.scss';

export const MainContainer: FC = () => {
	const isMobileOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<>
			<div className={clN.container}>
				<Header />
				<main className={cn(clN.main, { [clN.blur]: isMobileOpen === true })}>
					<Outlet />
				</main>
			</div>
			<MobileBtn />
		</>
	);
};
