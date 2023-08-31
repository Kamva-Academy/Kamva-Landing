import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import iconpic from "../../assets/View All.png"
import lighpic from "../../assets/lightbulb.png"
import picbg from "../../assets/Rectangle 31.png"
import { BackHand } from "@mui/icons-material";
import { useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import cardPic from "../../assets/Rectangle 52.png";
import clockpic from "../../assets/Alarm Clock.svg"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function Courses(){
    const [cardInfo , setCardInfo] = useState([
        {"id": 1,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" },
        {"id": 2,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" },
        {"id": 3,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" },
        {"id": 4,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" },
        {"id": 5,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" },
        {"id": 6,"src" : cardPic , "title" :"UI Design" , "text" :"education you can believe in" , "rate" : "4,9" , "time" : "5h 45min" }
    ])
    let changeThem = function (x: number): string {
        if(x%3 === 2){
            return "rgb(255, 232, 171)"
        }
        else {
            return "rgb(168, 211, 240)"
        }
      };
    return(
        <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:"flex-start" , marginTop:"4rem"}}>
             <Box sx={{width:{md:"85%" , xs:"100%"} , border:" 1px solid #00000073" }}></Box>
            <Box sx={{display:"flex" , alignItems:"center", flexDirection:"row" , justifyContent:{md:"flex-start" , sm:"center"},marginTop:"2rem" ,width:"85%"}}>
                <Box sx={{display:"flex" , alignItems:"center", flexDirection:"row" , justifyContent:{md:"flex-start" , xs : "center"} }}>
                    <Box sx={{display:{xs:"none" , md:"flex"} }}>
                        <Link href={""}>
                            <Button sx={{width:{sm:"10rem" , md:"15rem"} , height:"4rem" , border:"3px solid hsla(204, 70%, 53%, 1)" , background:"#FFE08B !important" , color:"" , borderRadius:"20px" , boxShadow:"7px 5px 4px 0px #00000040"}}>
                            <Typography sx={{color:"#3498DB" , fontWeight:"400" , fontSize:{sm:"14px" , md:"22px"} , fontFamily: "IRANYekan"}}>مشاهده همه
                                </Typography>
                                <Image alt="" src={iconpic}></Image></Button>
                                </Link>
                    </Box>
                    <Box sx={{width:"17rem" , marginRight:"2rem" , height:"7rem" , border:"5px solid hsla(204, 70%, 53%, 1)" , background:"rgb(229, 215, 151)" , color:"" , borderRadius:"40px" , display:{xs:"flex" , md:"none"} , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
                            <Typography  sx={{color:"#000000" , fontWeight:"700" , fontSize:"32px", fontFamily: "IRANYekan" , textAlign:"center"}}>دوره‌های فعلی</Typography>
                            </Box>
                    <Box sx={{display:{xs:"none" , md:"flex"} , alignItems:"center", flexDirection:"row" , justifyContent:"center" , background:"rgb(127, 181, 199)" , borderRadius:"40px" , width:"45rem", height:"14rem" , marginRight:"4rem"}}>
                        <Box sx={{width:"23rem" , height:"7rem" , border:"5px solid hsla(204, 70%, 53%, 1)" , background:"rgb(229, 215, 151)" , color:"" , borderRadius:"40px" , display:"flex" , flexDirection:"column" , justifyContent:"center"}}>
                            <Typography  sx={{color:"#000000" , fontWeight:"700" , fontSize:"50px" , fontFamily: "IRANYekan" , textAlign:"center"}}>دوره‌های فعلی</Typography>
                            </Box>
                        <Image alt="" src={lighpic}></Image>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display:"flex" , alignItems:"center", flexDirection:"column" , justifyContent:{md:"flex-start" , sm:"center"},marginTop:"2rem" ,width:"90%"}}>
                <Grid container sx={{justifyContent:{md:"flex-start" , sm:"center"}}}>
                    {
                        cardInfo.map(element => {
                            let state:string = changeThem(element.id)
                            return (
                                <Grid key={element.id} md={4}>
                                    <Box sx={{background: state , width :"24rem" , height:"38rem" , borderRadius : "40px" , display:"flex" , margin:"1rem" , flexDirection:"column" , justifyContent:"space-between" , alignItems:"center", paddingTop:"1rem"}}>
                                        <Image alt="" src={element.src}></Image>
                                        <Typography sx={{color:"#000000",paddingInline:"1.8rem", fontSize:"36px" , fontWeight:"400" , fontFamily: "Nanum Gothic" , alignSelf:"flex-start"}}>{element.title}</Typography>
                                        <Typography sx={{color:"#000000",paddingInline:"1.8rem",fontSize:"20px" , fontWeight:"400" , fontFamily: "Nanum Gothic" , alignSelf:"flex-start"}}>{element.text}</Typography>
                                        <Box sx={{display:"flex" , flexDirection:"row" , alignItems:"center" , alignSelf:"flex-start" , paddingInline:"1.8rem" }}>
                                        <StarIcon sx={{color:"gold" , width:"3rem" , height:"3rem"}} />
                                            <Typography sx={{color:"#00000075", fontSize:"20px" , fontWeight:"400" , fontFamily: "IRANYekan"}}>{element.rate}</Typography>
                                             
                                            </Box>
                                        <Box sx={{display:"flex" , paddingInline:"1.8rem" , flexDirection:"row" , alignItems:"center" , justifyContent:"flex-end" , width:"100%" , paddingBottom:"1.4rem" }}>
                                            <Box sx={{background:"#00376F9E !important" , width:"3rem" , height:"3rem" ,borderRadius:"50%" , display:"flex" , alignItems:"center"  , justifyContent:"center"}}>
                                                <Link href={""}>
                                            <Button sx={{ }}>
                                                <KeyboardBackspaceIcon sx={{color:"white"}} />
                                                </Button></Link></Box>
                                    </Box>
                                    </Box>

                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Box sx={{display:{xs:"flex" , md:"none"} }}>
                        <Link href={""}>
                            <Button sx={{width:{sm:"10rem" , md:"15rem"} , height:"4rem" , border:"3px solid hsla(204, 70%, 53%, 1)" , background:"#FFE08B !important" , color:"" , borderRadius:"20px" , boxShadow:"7px 5px 4px 0px #00000040"}}>
                            <Typography sx={{color:"#3498DB" , fontWeight:"400" , fontSize:{sm:"14px" , md:"22px"} , fontFamily: "IRANYekan"}}>مشاهده همه
                                </Typography>
                                <Image alt="" src={iconpic}></Image></Button>
                                </Link>
                    </Box>
            </Box>
        </Box>
    )
}