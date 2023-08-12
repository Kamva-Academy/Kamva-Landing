import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Typography } from '@mui/material';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import commentPic from "../../assets/Apple Music Lyrics.png"
import personPic from "../../assets/Ellipse 5.png"


export default function Comments(){
    return (
        <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , marginTop:"6rem", overflow:"visible"}}>
            <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , width:"85%", overflow:"visible"}}>
            <Swiper
        modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          style={{overflowY:"visible" , width:"90%"}}
        >
          <SwiperSlide style={{position:"relative" , overflow:"visible"}}>
            <Box sx={{width:"22rem" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
               <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
                <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
                    <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
                    <Image alt='' src={commentPic}></Image>
                </Box>
                <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>      <Box sx={{width:"22rem" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
          <SwiperSlide >       <Box sx={{width:"22rem" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
          <SwiperSlide >      <Box sx={{width:"22rem" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
          ...
        </Swiper>
            </Box>
        </Box>
    
      );
}