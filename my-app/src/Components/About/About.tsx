import React from 'react';
import myPhoto from 'assets/img/myPhoto.jpg';
import content from 'core/content.json';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import './about.scss';

const About = () => {
	const { textAboutMe } = content.about;

	return (
		<>
			<ModalWindowNavAnimation />
			<div className="about">
				<div className="about__text-block">
					<p className="text defaultText">{textAboutMe}</p>
				</div>
				<div className="about__img-block">
					<img className="portrait" src={myPhoto} alt="i am" width={400} />
				</div>
			</div>
		</>
	);
};

export default About;
