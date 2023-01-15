import { FC } from 'react';
import waitingImg from 'assets/images/waitingImg.png';
import clN from './index.module.scss';

export const AnimationModal: FC = () => {
	return (
		<div className={clN.animation_modal}>
			<div className={clN.wrapper}>
				<div className={clN.animation_modal__img}>
					<img src={waitingImg} alt="waiting" />
				</div>
			</div>
		</div>
	);
};
