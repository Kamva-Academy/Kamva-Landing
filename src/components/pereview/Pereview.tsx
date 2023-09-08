import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import style from "./pereview.style.module.css";
import pic1 from "../../assets/computer board.png";
import pic2 from "../../assets/dna (1).png";
import pic3 from "../../assets/medical flask with blue liquid.png";
import pic4 from "../../assets/Student studying math.png";
import studentpic from "../../assets/graduated student showing her diploma.png";
import teacherpic from "../../assets/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png 1.png"


export default function Pereview(){
    return(
        <div className={style.bg}>
            <div className={style.bg_1}>
                <Box sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , width:"100%"}}>
                    <Stack width={{md:"80%" , xs:"100%"}} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"800" , fontSize:{ xs: "18px", md: "22px" }  , fontFamily: "IRANYekan" , textAlign:{xs:"center" , md:"right"} , width:"18rem" , marginLeft:{md:"10rem" , xs :"0"}}}>برای هر موضوعی...</Typography>
                        <Grid container sx={{marginTop:{xs:"0px" , sm:"0"}}}>
                        <Grid xs={12} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
                            <Box sx={{background:"rgba(153, 211, 251, 1)" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                                <Image alt="" src={pic1} />
                            </Box>
                            <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>علوم کامپیوتر</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}> 
                        <Box sx={{background:"#0EA51D" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                                <Image alt="" src={pic2} />
              
                            </Box>
                            <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>زیست</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
                        <Box sx={{background:"#712FDDD4" ,  display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                                <Image alt="" src={pic3} />
                            </Box>
                            <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" } , fontFamily: "IRANYekan", textAlign:"center" , marginTop:"2.3rem"}}>شیمی</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} sx={{ display:"flex" ,flexDirection:"column", alignItems:"center" , justifyContent:"center" , marginBottom:{xs:"2rem" , md:"0"}}}>
                        <Box sx={{background:"#FFD358" , display:"flex" , alignItems:"center" , justifyContent:"center", width:"7rem" , height:"7rem" , boxShadow:"7px 4px 4px 0px #00000040" , borderRadius:"20px"}}>
                                <Image alt="" src={pic4} />
                     
                            </Box>
                            <Typography  sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{ xs: "18px", md: "24px" }, fontFamily: "IRANYekan" , textAlign:"center" , marginTop:"2.3rem"}}>ریاضیات</Typography>
                        </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </div>
            <div style={{background:"#3498DB33" , width:"100%" , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}}>
                <Stack flexDirection={"column"} marginTop={"10rem"} width={"80%"} marginBottom={"10rem"}>
                    <Grid container marginBottom={"15rem"}>
                    <Grid md={6} xs={12}  sx={{width:"100%", display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}}>
                        <Box sx={{ background:"#3C8CE791" , width:{lg:"46rem" , xs:"80%"}, borderRadius:"40px" , height:"33rem" , display:"flex" , alignItems:"center" , justifyContent:"space-between" , flexDirection:"column"}}>
                            <Typography  sx={{color:"#FFD358", fontSize:{md:"64px" , xs:"30px"} , fontWeight:"400" , fontFamily:"Lalezar"}}>برای دانش‌آموزان</Typography>
                            <Typography sx={{color:"rgba(0, 0, 0, 1)", fontSize:{lg:"36px" , xs:"20px"} ,width:{lg:"40rem" , xs:"80%"}, fontWeight:"400" , fontFamily:"Lalezar" , textAlign:"center"}}>فقط فیلم ضبط‌شده نبین!  از یادگیریت بیشتر لذت ببر.</Typography>
                            <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{lg:"24px", xs:"14px"} , textAlign:"center" , fontFamily: "IRANYekan" , width:{lg:"40rem" , xs:"90%"}}}>نیازی نیست که برای یادگیری درس، تنها فیلم‌های آموزشی ببینی. در دوره‌های کاموا با وجود درس‌نامه‌های تعاملی، بازیچه‌ها و شبیه‌سازهای آموزشی و ... از یادگیری لذت بیشتری ببر.</Typography>
                            <Box sx={{alignSelf:"flex-end" ,  marginBottom:"3rem" , marginLeft:"3rem"}}>
                                <Link href={""}>
                                <Button sx={{width:"12rem" , height:"4rem" , border:" 4px solid rgba(0, 55, 111, 0.62)" , background:"#FFE08B !important" , borderRadius:"2.5rem" ,  boxShadow:"6px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                                <Typography sx={{color:"#000000" , fontWeight:"400" , fontSize:"1.1rem" , fontFamily: "IRANYekan"}}>
                                مشاهده دوره‌ها
                                    </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid  md={3} xs={12}    sx={{marginRight:{lg:"15rem",  xs:"0"} , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}}>
                        <Image alt="" src={studentpic}></Image>
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid  md={3} xs={12}  sx={{marginLeft:{lg:"15rem",  xs:"0"}, display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}}>
                        <Image alt="" src={teacherpic}></Image>
                    </Grid>
                    <Grid  md={6} xs={12} sx={{width:"100%" ,display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center"}} >
                        <Box  sx={{ background:"#3C8CE791" , width: {lg:"46rem" , xs:"80%"}  , borderRadius:"40px" , height:"33rem" ,display:"flex" , alignItems:"center" , justifyContent:"space-between" , flexDirection:"column"}}>
                            <Typography  sx={{color:"#FFD358", fontSize:{md:"64px" , xs:"30px"} , fontWeight:"400"  , fontFamily:"Lalezar"}}>برای معلمان</Typography>
                            <Typography  sx={{color:"rgba(0, 0, 0, 1)", fontSize:{lg:"36px" , xs:"20px"} ,width:{lg:"40rem" , xs:"80%"}, fontWeight:"400" , fontFamily:"Lalezar" , textAlign:"center"}}>هم محتوای خودتان را ماندگار و هم دانش‌آموزانتان را با محتوا بیشتر درگیر کنید.</Typography>
                            <Typography sx={{color:"rgba(0, 0, 0, 1)" , fontWeight:"400" , fontSize:{lg:"24px", xs:"14px"} , textAlign:"center" , fontFamily: "IRANYekan" , width:{lg:"40rem" , xs:"90%"}}}>با یک بار قراردادن محتوای خود روی کاموا، آن را در اختیار تمامی دانش‌آموزانتان قرار دهید و با افزودن امکانات کامل‌کننده‌تر به محتوای خود مانند عکس، فیلم، بازی، انواع سوالات مختلف و غیره، دانش‌آموزانتان را بیشتر درگیر کنید.</Typography>
                            <Box sx={{alignSelf:{lg:"flex-end", xs:"center"}, marginBottom:"3rem", marginLeft:{lg:"3rem", xs:"0"}}}>
                                <Link href={""}>
                                <Button sx={{width:"12rem" , height:"4rem" , border:" 4px solid rgba(0, 55, 111, 0.62)" , background:"#FFE08B !important" , borderRadius:"2.5rem" ,  boxShadow:"6px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
                                    <Typography  sx={{color:"#000000" , fontWeight:"400" , fontSize:"1.1rem" , fontFamily: "IRANYekan"}}>
                                    اولین دوره‌ات را بساز
                                    </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    </Grid>

                </Stack>
            </div>
        </div>
    )
}