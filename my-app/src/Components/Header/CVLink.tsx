import React from 'react';
// @ts-ignore
import CV from 'assets/Ihor_Dudkevych.pdf';
import clN from './header.module.scss';

const CvLink = () => {
	return (
		<div className={clN.downloadCV}>
			<a href={CV} download>
				Download CV
			</a>
		</div>
	);
};

export default CvLink;
