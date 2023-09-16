

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import SliderCard from '../comment-slide';
import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

export default () => {
  return (
      <Swiper
      style={{width:"80%" , overflowY:"visible"}}
      spaceBetween={50}
      navigation
      slidesPerView={1}
      breakpoints={
        {
          2000:{
            slidesPerView:4
          },
          1500:{
            slidesPerView:3
          },
          1000:
          {
            slidesPerView:2
          }
          
        }
      }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <SliderCard />
      </SwiperSlide>

    </Swiper>
    
 
 
  );
};