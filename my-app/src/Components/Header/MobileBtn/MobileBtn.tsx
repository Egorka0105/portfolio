import React from 'react';
import { useAppDispatch } from 'core/interfaces';
import { changeMobileIsOpen } from 'store/portfolioSlice';
import clN from './mobileBtn.module.scss';

const MobileBtn = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={clN.mobileMenu}>
			<button type="button" onClick={() => dispatch(changeMobileIsOpen())} className={clN.mobileBtn}>
				<span className={clN.mobileBtn__line} />
			</button>
		</div>
	);
};

export default MobileBtn;
