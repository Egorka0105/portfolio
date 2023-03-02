import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import cn from 'classnames';
import clN from './index.module.scss';

export const MobileBtn: FC = () => {
	const isMobileMenuOpen = useAppSelector(state => state.portfolio.mobileIsOpen);

	const dispatch = useAppDispatch();

	return (
		<button type="button" onClick={() => dispatch(changeMobileIsOpen())} className={clN.mobileBtn}>
			<span
				className={cn(
					clN.mobileBtn__stick,
					clN.mobileBtn__stick1,
					{ [clN.open]: isMobileMenuOpen === true },
					{ [clN.close]: isMobileMenuOpen === false }
				)}
			/>
			<span
				className={cn(
					clN.mobileBtn__stick,
					clN.mobileBtn__stick2,
					{ [clN.open]: isMobileMenuOpen === true },
					{ [clN.close]: isMobileMenuOpen === false }
				)}
			/>
			<span
				className={cn(
					clN.mobileBtn__stick,
					clN.mobileBtn__stick3,
					{ [clN.open]: isMobileMenuOpen === true },
					{ [clN.close]: isMobileMenuOpen === false }
				)}
			/>
		</button>
	);
};
