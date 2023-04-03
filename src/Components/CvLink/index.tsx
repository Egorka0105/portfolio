import { FC } from 'react';
import CV from 'assets/Ihor_Dudkevych_React.pdf';
import clN from './index.module.scss';

export const CvLink: FC = () => {
	return (
		<div className={clN.downloadCV}>
			<a href={CV} download>
				Download CV
			</a>
		</div>
	);
};
