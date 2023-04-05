import { FC } from 'react';
import './index.scss';

export const SkillsBackground: FC = () => {
	return (
		<div className="SkillsBackground">
			<div className="box">
				<span className="point" />
				<span className="ring-1" />
				<span className="ring-2" />
				<span className="ring-3" />
			</div>
		</div>
	);
};
