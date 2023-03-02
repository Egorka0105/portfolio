import { FC } from 'react';
import { ISkill } from 'core/interfaces';
import clN from './index.module.scss';

export const SkillItem: FC<ISkill> = ({ name, levelPercent }) => {
	return (
		<li className={clN.skillItem}>
			{name}
			<span style={{ maxWidth: `${levelPercent}%` }} className={clN.skillItem__levelLine} />
		</li>
	);
};
