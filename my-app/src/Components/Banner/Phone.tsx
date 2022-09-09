import React, { FC } from 'react';
import 'assets/css/constants.scss';
import clN from './banner.module.scss';

const Phone: FC = () => {
	return (
		<div className={clN.phone}>
			<a href="tel:0936675573" className={clN.phone__number}>
				093-667-55-73
			</a>
		</div>
	);
};

export default Phone;
