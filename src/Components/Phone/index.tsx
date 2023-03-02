import { FC } from 'react';
import clN from './index.module.scss';

export const Phone: FC = () => {
	return (
		<div className={clN.phone}>
			<a href="tel:0936675573" className={clN.phone__number}>
				093-667-55-73
			</a>
		</div>
	);
};
