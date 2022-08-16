import React from 'react';
import content from 'core/content.json';
import clN from './banner.module.scss';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import { bannerTitleCreate } from '../../core/functions';

const Banner = () => {
	const { title } = content.banner;
	const bannerTitle = bannerTitleCreate(title);

	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.banner}>
				<div className={clN.banner__title}>{bannerTitle}</div>
				<p className={clN.banner__subTitle}>Front-end / React developer</p>
				<button type="button" className={clN.banner__btnContact}>
					Contact me
				</button>
			</div>
		</>
	);
};

export default React.memo(Banner);
