import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import style from "../pereview.style.module.css";
import pic1 from "assets/computer board.png";
import pic2 from "assets/dna.png";
import pic3 from "assets/medical flask with blue liquid.png";
import pic4 from "assets/Student studying math.png";
import studentpic from "assets/graduated student showing her diploma.png";
import teacherpic from "assets/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png 1.png"

const PreviewSideCard = () => {
    return (  
        <div className={style.bg_1}>
<Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , width:"100%"}}>
        <Stack width={{md:"80%" , xs:"100%"}} flexDirection={{xs:"column" , md:"row"}} justifyContent={"space-between"} alignItems={"center"}>
            <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"800" , fontSize:{ xs: "18px", md: "22px" }  , fontFamily: "IRANYekan" , textAlign:{xs:"center" , md:"right"} , width:"18rem" , marginLeft:{md:"10rem" , xs :"0"} , marginTop:{md:"0",  xs:"120px"}}}>برای هر موضوعی...</Typography>
            <Grid container sx={{marginTop:{xs:"70px" , sm:"70px" , md:"0px"}}}>
            <Grid xs={6} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
                <Box sx={{background:"rgba(153, 211, 251, 1)" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                    <Image alt="" src={pic1} />
                </Box>
                <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>علوم کامپیوتر</Typography>
            </Grid>
            <Grid xs={6} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}> 
            <Box sx={{background:"#0EA51D" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                    <Image alt="" src={pic2} />
  
                </Box>
                <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>زیست</Typography>
            </Grid>
            <Grid xs={6} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
            <Box sx={{background:"#712FDDD4" ,  display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                    <Image alt="" src={pic3} />
                </Box>
                <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>شیمی</Typography>
            </Grid>
            <Grid xs={6} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
            <Box sx={{background:"#FFD358" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                    <Image alt="" src={pic4} />
         
                </Box>
                <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" }, fontFamily: "IRANYekan" , textAlign:"center" , marginTop:"2.3rem"}}>ریاضیات</Typography>
            </Grid>
            </Grid>
        </Stack>
    </Box>
</div>
    );
}
 
export default PreviewSideCard;
