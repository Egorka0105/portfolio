import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import jira from 'assets/img/jira.svg';
import webstorm from 'assets/img/webstorm.svg';
import windows from 'assets/img/windows.svg';
import figma from 'assets/img/figma.svg';
import confluence from 'assets/img/confluence.svg';
import 'assets/css/mixin.scss';
import 'swiper/css';
import clN from './skills.module.scss';

const Slider: FC = () => {
	return (
		<div className={clN.toolsSlider}>
			<h2 className={clN.title}>Tools</h2>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={4}
				loop
				navigation
				scrollbar={{ draggable: true }}
				onSwiper={swiper => swiper}
				breakpoints={{
					100: {
						slidesPerView: 2,
					},
					480: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				<SwiperSlide className="slide-wrapper slide">
					<img width={100} className="toolsItem" alt="jira" src={jira} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper slide">
					<img width={100} className="toolsItem" alt="webstorm" src={webstorm} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper slide">
					<img width={100} className="toolsItem" alt="windows" src={windows} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper slide">
					<img width={100} className="toolsItem" alt="figma" src={figma} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper slide">
					<img width={100} className="toolsItem" alt="confluence" src={confluence} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
