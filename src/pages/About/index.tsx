import { FC } from 'react';
import myPhoto from 'assets/images/portfolio_photo.png';
import content from 'core/content.json';
import iconGreen from 'assets/images/icongreen.png';
import { nanoid } from '@reduxjs/toolkit';
import { AnimationModal } from 'Components';
import clN from './index.module.scss';

export const About: FC = () => {
	const { textAboutMe, hobby } = content.about;

	return (
		<>
			<AnimationModal />

			<div className={clN.about}>
				<div className={clN.about__textWrapper}>
					<div>
						<h2>Some info</h2>
						<p className={clN.text}>{textAboutMe}</p>
					</div>
					<div className="hobby">
						<h2>Hobby</h2>
						<ul>
							{hobby.map(hobbyItem => {
								return (
									<li key={nanoid()}>
										<span>
											<img width={20} alt="icon" src={iconGreen} />
										</span>
										{hobbyItem}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className={clN.about__imgWrapper}>
					<img className={clN.portrait} src={myPhoto} alt="i am" width={400} />
				</div>
			</div>
		</>
	);
};
