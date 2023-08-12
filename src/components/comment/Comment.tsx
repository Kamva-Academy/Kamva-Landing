import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Typography } from '@mui/material';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import{ Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from "swiper"
import Image from 'next/image';
import bigcommentpic from "../../assets/bubble with text.png"
import commentPic from "../../assets/Apple Music Lyrics.png"
import personPic from "../../assets/Ellipse 5.png"
import picman from "../../assets/Businessman in work conversation leaning on the wall with one arm.png"
import { useRef } from 'react';
import { BackHand } from '@mui/icons-material';


export default function Comments(){
    const swiperRef = useRef<SwiperCore>();
    const ref  = useRef()
    const onInit = (Swiper: SwiperCore): void => {
      swiperRef.current = Swiper;
    };
    const handleMouseEnter = () => {
      
    };
    const handleMouseLeave = () => {
      if (swiperRef.current) swiperRef.current.autoplay.stop();
    };
  
    return (
        <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , marginTop:"16rem", overflow:"visible"}}>
            <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"space-evenly" , width:"100%", height:"90rem", overflow:"visible" , background: "#3498DB33" , position:"relative", paddingBottom:"25rem"}}>
                <Image src={bigcommentpic} alt=''></Image>
            <Swiper onInit={onInit}
        modules={[Navigation, Pagination , Autoplay ]}
          spaceBetween={10}
          slidesPerView={3}
        //   pagination={{ clickable: true }}
          navigation
        //   autoplay={{
        //     disableOnInteraction: true, // Optional, but recommended
        //     delay: 100,
        //     reverseDirection: true,
        //     pauseOnMouseEnter: true,
        //   }}
          onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
          style={{overflowY:"visible" , width:"90%"}}
        >
          <SwiperSlide onMouseEnter={()=>{
            
          }} onMouseOut={()=>{
            handleMouseLeave()
          }} style={{position:"relative" , overflow:"visible"}}>
            <Box sx={{width:"22rem" , background:"#FFFFFF" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
               <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
                <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
                    <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
                    <Image alt='' src={commentPic}></Image>
                </Box>
                <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide onMouseEnter={()=>{
            handleMouseEnter()
          }} onMouseOut={()=>{
            handleMouseLeave()
          }} style={{position:"relative" , overflow:"visible"}}>      
          <Box sx={{width:"22rem" , background:"#FFFFFF" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
          <SwiperSlide onMouseEnter={()=>{
            handleMouseEnter()
          }} onMouseOut={()=>{
            handleMouseLeave()
          }} style={{position:"relative" , overflow:"visible"}}>     
            <Box sx={{width:"22rem" , background:"#FFFFFF" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256"  , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
      <SwiperSlide onMouseEnter={()=>{
            handleMouseEnter()
          }} onMouseOut={()=>{
            handleMouseLeave()
          }} style={{position:"relative" , overflow:"visible"}}>     
           <Box sx={{width:"22rem" , background:"#FFFFFF" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256" , background:"#FFFFFF" , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
      <SwiperSlide onMouseEnter={()=>{
            handleMouseEnter()
          }} onMouseOut={()=>{
            handleMouseLeave()
          }} style={{position:"relative" , overflow:"visible"}}>     
           <Box sx={{width:"22rem" , background:"#FFFFFF" , height:"34rem" , border:"5px solid #00376F" , borderRadius:"20px" , display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center" , overflow:"visible"}}>
         
         <Image style={{border:"5px solid #002256"  , width:"13rem" , height:"13rem" , borderRadius:"50%" ,position:"absolute" ,top:"-7rem"  , zIndex:"5" , background:"snow"}} alt='' src={""}></Image> 
          <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"62.18px"}}>ساینا خرمی</Typography>
              <Typography sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دانش آموز</Typography>
              <Image alt='' src={commentPic}></Image>
          </Box>
          <Typography  sx={{color:"#000000", textAlign:"center", fontSize:"24px" , fontWeight:"400" , fontFamily: "IRANYekan" , lineHeight:"41.45px"}}>دوره خوبی بود که من رو از هم سن و سال هام کلی جلو انداخت.</Typography>
      </Box></SwiperSlide>
        </Swiper>
        <Image style={{bottom:"0" , right:"-20px", position:"absolute"}} src={picman} alt=''></Image>
            </Box>
        </Box>
    
      );
}