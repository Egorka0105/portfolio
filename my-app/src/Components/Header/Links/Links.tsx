import React, { FC } from 'react';
import jsonLinks from 'core/content.json';
import telegram from 'assets/img/telegram.svg';
import linkedin from 'assets/img/linkedin.svg';
import gitHub from 'assets/img/gitHub.svg';
import clN from './links.module.scss';

const Links: FC = () => {
	return (
		<div className={clN.links}>
			<a href={`${jsonLinks.links.telegram}`} target="_blank" rel="noreferrer">
				<img className={clN.links__item} src={telegram} width={30} height={30} alt="telegram" />
			</a>
			<a href={`${jsonLinks.links.linkedin}`} target="_blank" rel="noreferrer">
				<img className={clN.links__item} src={linkedin} width={30} height={30} alt="linkedin" />
			</a>
			<a href={`${jsonLinks.links.gitHub}`} target="_blank" rel="noreferrer">
				<img className={clN.links__item} src={gitHub} width={30} height={30} alt="gitHub" />
			</a>
		</div>
	);
};

export default Links;
