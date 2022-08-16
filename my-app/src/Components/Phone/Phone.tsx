import React, { FC } from 'react';
import { checkContactClick } from 'store/portfolioSlice';
import { useAppDispatch } from 'core/interfaces';
import 'assets/css/constants.scss';
import cn from 'classnames';
import clN from './phone.module.scss';

const Phone: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={clN.phone}>
			<a href="tel:0936675573" className={clN.phone__number}>
				093-667-55-73
			</a>
			<button
				className={cn('btn', clN.phone__btnClose)}
				type="button"
				onClick={() => dispatch(checkContactClick(false))}
			>
				I do not want to call
			</button>
		</div>
	);
};

export default Phone;
