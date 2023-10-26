import 'swiper/css';
import { Box } from '@mui/material';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import bigcommentpic from "assets/bubble with text.png"
import picman from "assets/Businessman in work conversation leaning on the wall with one arm.png"
import Slidder from './swipers/CommentsSlider';

function Comments() {

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start", overflow: "visible" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", width: "100%", height: "90rem", overflow: "visible", background: "#3498DB33", position: "relative", paddingBottom: "25rem" }}>
        <Image src={bigcommentpic} alt=''></Image>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Slidder />
        </Box>
        <Image style={{ bottom: "0", right: "-20px", position: "absolute" }} src={picman} alt=''></Image>
      </Box>
    </Box>
  );
}

export default Comments;