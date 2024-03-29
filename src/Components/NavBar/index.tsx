import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'core/interfaces';
import content from 'core/content.json';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './index.module.scss';

export const NavBar: FC = () => {
	const dispatch = useAppDispatch();
	const { navBarList } = content.menu.navBar;

	return (
		<nav className={clN.navBar}>
			{navBarList.map(navLinkItem => {
				return (
					<NavLink
						key={navLinkItem.key}
						onClick={() => dispatch(changeMobileIsOpen())}
						className={clN.navBar__item}
						to={navLinkItem.path}
					>
						{navLinkItem.name}
					</NavLink>
				);
			})}
		</nav>
	);
};
