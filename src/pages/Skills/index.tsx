import { FC } from 'react';
import { ISkill } from 'core/interfaces';
import content from 'core/content.json';
import { AnimationModal, SkillItem, SkillsBackground } from 'Components';
import clN from './index.module.scss';

export const Skills: FC = () => {
	const { skills } = content;

	return (
		<>
			<AnimationModal />
			<div className={clN.skills}>
				<div className={clN.skills__wrapper}>
					<h2 className={clN.title}>Skills</h2>
					<ul className={clN.list}>
						{skills.allSkillsMap.map((skillItem: ISkill, index: number) => {
							return (
								<SkillItem
									key={`${skillItem.name}+${index}`}
									name={skillItem.name}
									levelPercent={skillItem.levelPercent}
								/>
							);
						})}
					</ul>
				</div>

				<SkillsBackground />
			</div>
		</>
	);
};
