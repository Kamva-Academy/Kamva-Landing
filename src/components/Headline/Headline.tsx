import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import pic from "../../assets/young man surrounded by gadgets writing notes.png"
import bg from "../../assets/Rectangle 5.png"
import Image from "next/image"
import style from "./Headline.style.module.css"


const styles = {
    backgroundImage: 'url("../../assets/young man surrounded by gadgets writing notes.png")',
}


export default function Headline(){
    return(
   <div  className={style.bg}>
    <div className={style.sec}>
        <Box>
        <Box sx={{marginRight:"5rem"}}>
            <Box sx={{display:"flex" , flexDirection:"row" , justifyContent:"flex-start"}}>
                <Typography sx={{color:"rgba(255, 255, 255, 1)" , fontWeight:"700" , fontSize:"64px" , fontFamily: "IRANYekan"}}>بهترین راه یادگیری هر </Typography>
                <Typography sx={{color:"rgba(0, 55, 111, 1)" , fontWeight:"700" , fontSize:"64px" , fontFamily: "IRANYekan"}}>موضوع</Typography>
            </Box>
            <Typography sx={{color:"rgba(255, 255, 255, 1)" , fontWeight:"800" , fontSize:"24px" , fontFamily: "IRANYekan"}}>
            با کاموا به‌صورت تعاملیِ، مسئله‌محور و سرگرم‌کننده یاد بگیر و یاد بده
            </Typography>
        </Box>
        <Link href={""}>
        <Button sx={{width:"10rem" , height:"4rem" , border:"1px  solid #3498DB" , background:"rgba(255, 211, 88, 1) !important" , borderRadius:"20px"}}>
            <Typography sx={{color:"#000000" , fontWeight:"500" , fontSize:"24px" , fontFamily: "IRANYekan"}}>بزن بریم</Typography>
        </Button>
        </Link>
    </Box>
    <Image style={{position:"absolute" , bottom:"-90px" , left:"0"}} alt="" src={pic}></Image>
    </div>

    </div>
    
    )
}