import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from 'pages';

import cn from 'classnames';
import { useAppSelector } from '../../core/interfaces';

import clN from './index.module.scss';
import { MobileBtn } from '../../Components';

export const MainContainer: FC = () => {
	const isMobileOpen: boolean = useAppSelector(state => state.portfolio.mobileIsOpen);

	return (
		<>
			<div className={clN.container}>
				<Header />
				<main className={cn(clN.main, { [clN.blur]: isMobileOpen })}>
					<Outlet />
				</main>
			</div>
			<MobileBtn />
		</>
	);
};
