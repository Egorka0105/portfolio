import React, { FC } from 'react';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import Jobs from './Jobs';
import Projects from './Projects';
import Road from './Road';
import './experience.scss';

const Experience: FC = () => {
	return (
		<>
			<ModalWindowNavAnimation />
			<div className="experience">
				<Jobs />
				<Projects />
				<Road />
			</div>
		</>
	);
};

export default Experience;
