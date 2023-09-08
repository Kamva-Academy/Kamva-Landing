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

function Comments() {
  const [left , setLeft] = useState(0);

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start", overflow: "visible" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", width: "100%", height: "90rem", overflow: "visible", background: "#3498DB33", position: "relative", paddingBottom: "25rem" }}>
        <Image src={bigcommentpic} alt=''></Image>
        <Box>
          <Box sx={{overflowX:"hidden" , position:"relative" , width:"700px" , height:"50px"}}>
            <Box sx={{width:"2000px" , height:"50px" , position:"absolute", right:`${left}px` , display:"flex" , flexDirection:"row"}}>
              <Box sx={{width:"500px" , height:"50px"}}>1</Box>
              <Box sx={{width:"500px"  , height:"50px"}}>2</Box>
              <Box sx={{width:"500px"  , height:"50px"}}>3</Box>
              <Box sx={{width:"500px"  , height:"50px"}}>4</Box>
            </Box>
          </Box>
          <Button onClick={()=>{  setLeft(prevState => prevState + 500)}}>gooo</Button>
        </Box>
        <Image style={{ bottom: "0", right: "-20px", position: "absolute" }} src={picman} alt=''></Image>
      </Box>
    </Box>
  );
}

export default Comments;