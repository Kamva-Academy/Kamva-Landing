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
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
      <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
      <SliderCard />
      </SwiperSlide>

    </Swiper>
    
 
 
  );
};