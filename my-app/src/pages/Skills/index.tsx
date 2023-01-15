import { FC } from 'react';
import { ISkill } from 'core/interfaces';
import content from 'core/content.json';
import { AnimationModal, SkillItem, SwiperSlider } from 'Components';
import clN from './index.module.scss';

export const Skills: FC = () => {
	const { skills } = content;

	return (
		<>
			<AnimationModal />

			<div className={clN.skills}>
				<div className={clN.skills__wrapper}>
					<h2 className={clN.title}>Skills</h2>
					<ul>
						{skills.allSkillsMap.map((skillItem: ISkill) => {
							return <SkillItem key={skillItem.key} name={skillItem.name} levelPercent={skillItem.levelPercent} />;
						})}
					</ul>
				</div>

				<SwiperSlider />
			</div>
		</>
	);
};
