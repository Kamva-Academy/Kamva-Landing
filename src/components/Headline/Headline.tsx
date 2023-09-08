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
    <div style={{width:"85%" , border:" 1px solid #00000073"}}></div>
    <div className={style.sec} style={{background:"#3C8CE7, #00EAFF !important"}}>
        <Box sx={{ height:"24rem" , width:{md:"100%" ,xs:"65%"} ,display:"flex" , flexDirection:"column" , alignItems:{lg:"flex-start" , xs:"center"} , justifyContent:{lg:"space-between" , sm:"center"}}}>
        <Box sx={{marginRight:{lg:"5rem" , sx:"0"}}}>
            <Box sx={{display:"flex" , flexDirection:"row" , justifyContent:{md:"flex-start" , xs:"center"}}}>
                <Typography sx={{color:"rgba(255, 255, 255, 1)" , fontWeight:"700" , fontSize:{lg:"64px" , xs:"14px" , sm:"16px"} , fontFamily: "IRANYekan"}}>بهترین راه یادگیری هر 
                <span style={{color:"rgba(0, 55, 111, 1)"    , fontWeight:"700"  , marginRight:"5px" , fontFamily: "IRANYekan"}}>موضوع  </span>
                </Typography>
            </Box>
            <Typography sx={{color:"rgba(255, 255, 255, 1)" , textAlign:{xs:"center" , md:"right"} , fontWeight:"800" , fontSize:{lg:"24px" , xs:"14px" , sm:"16px"} , fontFamily: "IRANYekan" , marginTop:"1.9rem"}}>
            با کاموا به‌صورت تعاملیِ، مسئله‌محور و سرگرم‌کننده یاد بگیر و یاد بده
            </Typography>
        </Box>
        <Box sx={{alignSelf:{md:"flex-start" , xs:"center"}, marginTop:{lg:"0" , xs:"2rem"} , marginRight:{lg:"5rem" , sx:"0"}}}>
        <Link href={""}>
        <Button sx={{width:{md:"18rem" , xs:"11rem"} , height:{md:"6rem", xs:"3rem"} , border:"1px  solid #3498DB" , background:"rgba(255, 211, 88, 1) !important" , borderRadius:"20px" , boxShadow:"7px 5px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            <Typography sx={{color:"#000000" , fontWeight:"500" , fontSize:{lg:"44px" , xs:"14px" , sm:"16px"} , fontFamily: "IRANYekan" }}>بزن بریم</Typography>
        </Button>
        </Link>
        </Box>
    </Box>
    <Image  style={{position:"absolute" , bottom:"-90px"  , left:"0" }} alt="" src={pic}></Image>
    </div>

    </div>
    
    )
}