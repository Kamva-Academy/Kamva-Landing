import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Button, Typography } from '@mui/material';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from "swiper"
import Image from 'next/image';
import bigcommentpic from "assets/bubble with text.png"
import commentPic from "assets/Apple Music Lyrics.png"
import picman from "assets/Businessman in work conversation leaning on the wall with one arm.png"
import { useRef, useState } from 'react';
import SliderCard from './comment-slide';
import Slider from './slider/slider';
import Slidder from './slider/slider';

function Comments() {
  const [left , setLeft] = useState(0);

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start", overflow: "visible" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", width: "100%", height: "90rem", overflow: "visible", background: "#3498DB33", position: "relative", paddingBottom: "25rem" }}>
        <Image src={bigcommentpic} alt=''></Image>
        <Slidder />
        <Image style={{ bottom: "0", right: "-20px", position: "absolute" }} src={picman} alt=''></Image>
      </Box>
    </Box>
  );
}

export default Comments;