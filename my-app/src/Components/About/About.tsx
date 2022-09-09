import React from 'react';
import myPhoto from 'assets/img/myPhoto.jpg';
import content from 'core/content.json';
import iconGreen from 'assets/img/icongreen.png';
import { nanoid } from '@reduxjs/toolkit';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import './about.scss';

const About = () => {
	const { textAboutMe, hobby } = content.about;

	return (
		<>
			<ModalWindowNavAnimation />
			<div className="about">
				<div className="about__text-block">
					<div>
						<h2>Some info</h2>
						<p className="text defaultText">{textAboutMe}</p>
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
				<div className="about__img-block">
					<img className="portrait" src={myPhoto} alt="i am" width={400} />
				</div>
			</div>
		</>
	);
};

export default About;
