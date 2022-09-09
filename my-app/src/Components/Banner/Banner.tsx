import React, { useState } from 'react';
import content from 'core/content.json';
import cn from 'classnames';
import { bannerTitleCreate } from 'core/functions';
import Phone from './Phone';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import clN from './banner.module.scss';

const Banner = () => {
	const [btnIsOpen, setBtnIsOpen] = useState(false);
	const bannerTitle = bannerTitleCreate(content.banner.title);

	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.banner}>
				<div className={clN.banner__title}>{bannerTitle}</div>
				<p className={clN.banner__subTitle}>Front-end / React developer</p>
				<div className={clN.banner__contact}>
					<button type="button" className={cn('btn', clN.btn, { btnIsOpen })} onClick={() => setBtnIsOpen(!btnIsOpen)}>
						Contact me
					</button>
					{btnIsOpen && <Phone />}
				</div>
			</div>
		</>
	);
};

export default React.memo(Banner);
