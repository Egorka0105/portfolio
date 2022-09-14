import React from 'react';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import clN from './banner.module.scss';
import BannerCanvas from './BannerCanvas';

const Banner = () => {
	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.banner}>
				<div className={clN.banner__textWrapper}>
					<div className={clN.title}>
						Hi, I’m <br /> <strong>Ihor</strong> Dudkevych
					</div>
					<h2 className={clN.subTitle}>
						Front-end / React &nbsp;
						<strong>developer</strong>
					</h2>
				</div>
				<BannerCanvas />
			</div>
		</>
	);
};

export default React.memo(Banner);
