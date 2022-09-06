import React, { FC } from 'react';
import clN from './experience.module.scss';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import Jobs from './Jobs/Jobs';
import Projects from './Projects/Projects';

const Experience: FC = () => {
	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.experience}>
				<Jobs />
				<Projects />
			</div>
		</>
	);
};

export default Experience;
