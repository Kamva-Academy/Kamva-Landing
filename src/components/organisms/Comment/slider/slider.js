

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import SliderCard from '../comment-slide';
export default () => {

  return (
    <Swiper
      navigation={true} modules={[Navigation]} 
      style={{ width: "80%", overflowY: "visible" }}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={
        {
          2000: {
            slidesPerView: 4
          },
          1500: {
            slidesPerView: 3
          },
          1000:
          {
            slidesPerView: 2
          }

        }
      }>
      <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SliderCard />
      </SwiperSlide>

    </Swiper>
  );
};