import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import content from 'core/content.json';

const Slider = () => {
	const { icons } = content.skills;
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={4}
				navigation
				scrollbar={{ draggable: true }}
				onSwiper={swiper => swiper}
			>
				{icons.map(el => {
					return (
						<SwiperSlide className="slide-wrapper">
							<img className="toolsItem" alt={el.alt} src={el.path} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
