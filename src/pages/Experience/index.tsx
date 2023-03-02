import { FC } from 'react';
import { AnimationModal, Road, Projects, Jobs } from 'Components';
import clN from './index.module.scss';

export const Experience: FC = () => {
	return (
		<>
			<AnimationModal />

			<div className={clN.experience}>
				<Jobs />
				<Projects />
				<Road />
			</div>
		</>
	);
};
