import React, { FC } from 'react';
import { changeFormClickSend } from 'store/portfolioSlice';
import { useAppDispatch } from 'core/interfaces';
import 'assets/css/constants.scss';

const PhoneComponent: FC = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<a href="tel:0936675573">093-667-55-73</a>
			<button className="btn" type="button" onClick={() => dispatch(changeFormClickSend(false))}>
				I do not want to call
			</button>
		</div>
	);
};

export default PhoneComponent;
