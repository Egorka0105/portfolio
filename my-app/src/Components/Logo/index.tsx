import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './index.module.scss';

export const Logo: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<NavLink onClick={() => dispatch(changeMobileIsOpen())} to="">
			<div className={clN.logo}>
				<h2 className={clN.title}>I.D</h2>
				<p className={clN.description}>Web Developer</p>
			</div>
		</NavLink>
	);
};
