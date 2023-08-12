import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import iconpic from "../../assets/wool-ball-5758621-4833540 (1) 1.png";
import bgpic from "../../assets/Group 58.png";

export default function Benefits(){
    return(
       <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , marginTop:"4rem"}}>
         <div style={{width:"85%" , border:" 1px solid #00000073" }}></div>
        <Box sx={{position:"relative"}}>
           <Box sx={{display:"flex" , alignItems:"center", flexDirection:"row" , justifyContent:"flex-start"}}>
            <Typography  sx={{color:"rgb(0, 55, 111)", fontSize:"64px" , fontWeight:"400" , fontFamily:"Lalezar"}}>ویژگی‌ دوره‌ها</Typography>
            <Image alt="" src={iconpic}></Image>
           </Box>
            <Grid>
            <Grid>
                <Image></Image>
                <Typography></Typography>
            </Grid>
            <Grid>
            <Image></Image>
                <Typography></Typography>
            </Grid>
            </Grid>
            <Grid>
            <Grid>
            <Image></Image>
                <Typography></Typography>
            </Grid>
            <Grid>
            <Image></Image>
                <Typography></Typography>
            </Grid>
            </Grid>
            {/* <Image style={{position:"absolute" , width:"100%"}} src={bgpic} alt=""></Image> */}
        </Box>
       </Box>
    )
}