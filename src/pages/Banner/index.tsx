import { FC } from 'react';
import { AnimationModal, BannerCanvas } from 'Components';
import clN from './index.module.scss';

export const Banner: FC = () => {
	return (
		<>
			<AnimationModal />

			<div className={clN.banner_text}>
				<div className={clN.banner_text__wrapper}>
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
