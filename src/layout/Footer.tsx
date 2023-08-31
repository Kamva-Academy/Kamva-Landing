import { Box, Typography } from "@mui/material";
import Image from "next/image";
import picFooter from "../assets/Group 59.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import kamvaTextPic from "../assets/کاموا (1).png"
import ccPic from "../assets/Creative Commons.png"
import kamvapic from "../assets/Yarn.png"

const Footer = () => {
    return ( 
        <Box sx={{background: "#3498DB" , width:"100%" , height:"60rem"  , position:"relative" , overflow:"hidden" , display:"flex", flexDirection:"column" , justifyContent:"flex-end" , alignItems:"center" , paddingBottom:"6.5rem"}}>
            <Box sx={{position:"absolute" , top:"-85px" , right:"12%"}}>
                <Image src={picFooter} alt="" />
            </Box>
            <Box sx={{display:"flex" , flexDirection:"row" , justifyContent:"flex-start" , alignItems:"center" , width:"80%" , color:"#ffff"}}>
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
                <InstagramIcon />
            </Box>
            <Box sx={{borderBottom:"dashed 5px #FFFF", width:"80%" , height:"3rem"}}></Box>
            <Box sx={{marginTop: "2rem"}}>
                <Image alt="" src={kamvaTextPic}  />
            </Box>
            <Box sx={{display:"flex" , flexDirection:"row" , justifyContent:"center" , alignItems:"center" , color :"#ffff"}}>
                <Image alt="" src={ccPic} />
                <Typography sx={{fontWeight:"500" , fontSize:"24px" , fontFamily: "IRANYekan"}}> ۱۴۰۲ | ساخته شده در ایران</Typography>
                <Image alt="" src={kamvapic} />
            </Box>
        </Box>
        
     );
}
 
export default Footer;