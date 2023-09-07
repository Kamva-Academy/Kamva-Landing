import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../assets/logo 1.png"
import Link from "next/link";

export default function Header(){
    return(
        <header style={{display:"flex", alignItems:"center" , justifyContent:"center"}}>
            <Stack display={"flex"} direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{width:"80%"}}>
                <Box display={"flex"} sx={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                  <Box sx={{width:{xs:"100px",md:"400px"},display:"flex" , flexDirection:"row" , alignItems :"center" , justifyContent:{sm:"flex-start" , md:"space-around"}}}>
                  <Image  alt="" src={logo}></Image>
                  <Typography sx={{color:"#3498DB",fontSize: { xs: "24px", md: "36px" }, fontWeight:"400" , fontFamily:"Lalezar"}}>کاموا</Typography>
                  </Box>
                    <Grid container marginX={"6rem"}  sx={{display:{xs:"none" , md:"flex"}}}>
                      <Grid md={4}>
                    <Link href={""}>
                        <Typography sx={{color:"#000000", fontSize:{ xs: "18px", md: "24px" } , fontWeight:"400" , fontFamily: "IRANYekan"}}>
                        دوره‌ها
                        </Typography>
                         </Link>
                    </Grid>
                    <Grid md={4}>
                    <Link href={""}>
                        <Typography sx={{color:"#000000", fontSize:{ xs: "18px", md: "24px" } , fontWeight:"400" , fontFamily: "IRANYekan"}}>
                        مقاله‌ها
                        </Typography>
                         </Link>
                    </Grid>
                    <Grid md={4}>
                        <Link href={""}>
                        <Typography sx={{color:"#000000", fontSize:{ xs: "18px", md: "24px" } , fontWeight:"400" , fontFamily: "IRANYekan"}}>
                        درباره‌ما
                        </Typography>
                         </Link>

                    </Grid>
                    </Grid>
                </Box>
    <Box sx={{ marginTop: { xs: "1rem", md: 0 } }}>
    <Link href={""}>
      <Button
        sx={{
          width: { xs: "100%", md: "10rem" },
          height: "4rem",
          border: "1px solid #3498DB",
          background: "rgba(255, 211, 88, 1) !important",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "IRANYekan",
          }}
        >
          ورود
        </Typography>
      </Button>
    </Link>
  </Box>
            </Stack>
        </header>


    )
}