

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import SliderCard from '../comment-slide';
import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

SwiperCore.use([Autoplay]);

export default () => {

  return (
    <Swiper
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