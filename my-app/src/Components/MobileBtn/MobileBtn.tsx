import React from 'react';
import { useAppDispatch, useAppSelector } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import cn from 'classnames';
import './mobileBtn.scss';

const MobileBtn = () => {
	const isMobileMenuOpen = useAppSelector(state => state.portfolio.mobileIsOpen);
	const dispatch = useAppDispatch();
	const classNameLine: string[] = ['mobileBtn__stick-1', 'mobileBtn__stick-2', 'mobileBtn__stick-3'];
	return (
		<button type="button" onClick={() => dispatch(changeMobileIsOpen())} className="mobileBtn">
			{classNameLine.map(line => {
				return (
					<span
						key={line}
						className={cn(
							'mobileBtn__stick',
							line,
							{ open: isMobileMenuOpen === true },
							{ close: isMobileMenuOpen === false }
						)}
					/>
				);
			})}
		</button>
	);
};

export default MobileBtn;
