import React, { FC } from 'react';
import { ISkill } from 'core/interfaces';
import content from 'core/content.json';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import ItemSkill from './ItemSkill';
import Slider from './Slider';
import clN from './skills.module.scss';

const Skills: FC = () => {
	const { skills } = content;

	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.skills}>
				<div className={clN.skills__skillsContent}>
					<h2 className={clN.title}>Skills</h2>
					<ul>
						{skills.allSkillsMap.map((skillItem: ISkill) => {
							return <ItemSkill key={skillItem.key} name={skillItem.name} levelPercent={skillItem.levelPercent} />;
						})}
					</ul>
				</div>
				<Slider />
			</div>
		</>
	);
};

export default Skills;
