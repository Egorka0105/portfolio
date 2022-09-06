import React, { FC } from 'react';
import clN from './skills.module.scss';
import { ISkill } from '../../core/interfaces';

const ItemSkill: FC<ISkill> = ({ name, levelPercent }) => {
	return (
		<li className={clN.skillItem}>
			{name}
			<span style={{ maxWidth: `${levelPercent}%` }} className={clN.skillItem__levelLine} />
		</li>
	);
};

export default ItemSkill;
