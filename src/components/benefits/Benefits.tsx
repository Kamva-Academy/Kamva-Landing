import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import iconpic from "../../assets/wool-ball-5758621-4833540 (1) 1.png";
import footicon from "../../assets/Group 54.png"
import gamepic from "../../assets/Game Controller.png"
import bookpic from "../../assets/Literature.png"
import digitalbord from "../../assets/Digital Signature.png"
import style from "./benefits.style.module.css"

export default function Benefits(){
    return(
       <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , marginTop:"4rem"}}>
         <div style={{width:"85%" , border:" 1px solid #00000073" }}></div>
        <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , width : "100%" , justifyContent:"flex-start"}}>
           <Box sx={{display:"flex" , alignItems:"center", flexDirection:"row" , justifyContent:"flex-start"}}>
            <Typography  sx={{color:"rgb(0, 55, 111)", fontSize:"64px" , fontWeight:"400" , fontFamily:"Lalezar"}}>ویژگی‌ دوره‌ها</Typography>
            <Image alt="" src={iconpic}></Image>
           </Box>
          <Box sx={{width:"85%" , position:"relative" , height:{md:"17rem" , xs:"fit-content"}}}>
          <Stack flexDirection={{md:"row" , xs:"column"}} justifyContent={"space-between"} width={"100%"} sx={{position:{md:"absolute" , xs:"relative"} , top:"0"}}>
            <Grid >
                <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"space-evenly" , background:"#3498DB82" , boxShadow:"12px 12px 4px 0px #00000040" , width:"27rem" , height:"23rem" , borderRadius:"48px"}}>
                <Image src={footicon} alt="" ></Image>
                <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan"}}>می‌تونی دوره‌ها رو گام به گام پیش بری و با سرعت خودت یاد بگیری!</Typography>
                </Box>
            </Grid>
            <Grid >
                <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"space-evenly" , background:"#3498DB82" , boxShadow:"12px 12px 4px 0px #00000040" , width:"27rem" , height:"23rem" , borderRadius:"48px"}}>
                <Image src={gamepic} alt="" ></Image>
                <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan"}}> با وجود عوامل بازی‌وارسازی (Gamification) مسیر یادگیری‌ات را به ماجراجویی تبدیل کن!</Typography>
                </Box>
            </Grid>
            </Stack>
          </Box>
        
            <div className={style.bg_cards}>
            <Stack flexDirection={{md:"row" , xs:"column"}} justifyContent={"space-between"} width={"85%"}>
            <Grid>
                <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"space-evenly" , background:"#FFD358E5" , boxShadow:"12px 12px 4px 0px #00000040" , width:"27rem" , height:"23rem" , borderRadius:"48px"}}>
                <Image src={bookpic} alt="" ></Image>
                <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan"}}>می‌تونید از درس‌نامه‌ها، فیلم‌ها و شبیه‌ساز‌های از پیش آماده استفاده کنید</Typography>
                </Box>
            </Grid>
            <Grid >
                <Box  sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"space-evenly" , background:"#FFD358E5" , boxShadow:"12px 12px 4px 0px #00000040" , width:"27rem" , height:"23rem" , borderRadius:"48px"}}>
                <Image src={digitalbord} alt="" ></Image>
                <Typography sx={{color:"#000000", textAlign:"center", fontSize:"36px" , fontWeight:"400" , fontFamily: "IRANYekan"}}>اتاق گفتگو و تابلوی هوشمند برای ارتباط گروهی بچه‌ها به صورت آنلاین وجود داره</Typography>
                </Box>
            </Grid>
            </Stack>
            </div>
        </Box>
       </Box>
    )
}