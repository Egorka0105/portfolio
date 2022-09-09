import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import jira from 'assets/img/jira.svg';
import webstorm from 'assets/img/webstorm.svg';
import windows from 'assets/img/windows.svg';
import figma from 'assets/img/figma.svg';
import confluence from 'assets/img/confluence.svg';
import 'swiper/css';

const Slider: FC = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={4}
				loop
				navigation
				scrollbar={{ draggable: true }}
				onSwiper={swiper => swiper}
			>
				<SwiperSlide className="slide-wrapper">
					<img className="toolsItem" alt="jira" src={jira} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper">
					<img className="toolsItem" alt="webstorm" src={webstorm} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper">
					<img className="toolsItem" alt="windows" src={windows} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper">
					<img className="toolsItem" alt="figma" src={figma} />
				</SwiperSlide>
				<SwiperSlide className="slide-wrapper">
					<img className="toolsItem" alt="confluence" src={confluence} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
