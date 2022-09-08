import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { toolsIcons } from 'core/constsObjects';
import 'swiper/css';

const Slider: FC = () => {
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
				{toolsIcons.map((el: any) => {
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
