// // pages/index.tsx
// import React from 'react';
// import SliderComponent from '../comment-slide';

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2, // Customize the number of slides to show
//   slidesToScroll: 1,
//   // Add other settings as needed
// };

// const IndexPage: React.FC = () => {
//   return (
//     <div>
//       <SliderComponent settings={settings}>
//         <div>
        
//         </div>
//         <div>
          
//         </div>
//         <div>
       
//         </div>
//         {/* Add more slides as needed */}
//       </SliderComponent>
//     </div>
//   );
// };

// export default IndexPage;


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
      pagination
      style={{width:"80%" , overflowY:"visible"}}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={
        {
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