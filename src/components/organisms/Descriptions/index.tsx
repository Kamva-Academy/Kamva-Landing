import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import studentpic from "assets/graduated student showing her diploma.png";
import teacherpic from "assets/3d-cute-cartoon-male-teacher-character-on-transparent-background-generative-ai-png 1.png"

function Descriptions() {
  return (
    <div style={{ background: "#3498DB33", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Stack flexDirection={"column"} marginTop={"10rem"} width={"80%"} marginBottom={"10rem"}>
        <Grid container marginBottom={"15rem"}>
          <Grid item md={6} xs={12} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ background: "#3C8CE791", width: { xl: "46rem", lg: "38rem", sm: "80%", xs: "95%" }, borderRadius: "40px", height: "33rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", paddingTop: "1rem" }}>
              <Typography sx={{ color: "#FFD358", fontSize: { lg: "64px", md: "44px", sm: "30px", xs: "22px" }, fontWeight: "400", fontFamily: "Lalezar" }}>برای دانش‌آموزان</Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 1)", fontSize: { lg: "36px", md: "20px", xs: "14px" }, width: { xl: "40rem", xs: "80%" }, fontWeight: "400", fontFamily: "Lalezar", textAlign: "center" }}>فقط فیلم ضبط‌شده نبین!  از یادگیریت بیشتر لذت ببر.</Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 1)", fontWeight: "400", fontSize: { lg: "24px", xs: "14px" }, textAlign: "center", fontFamily: "IRANYekan", width: { xl: "40rem", xs: "90%" } }}>نیازی نیست که برای یادگیری درس، تنها فیلم‌های آموزشی ببینی. در دوره‌های کاموا با وجود درس‌نامه‌های تعاملی، بازیچه‌ها و شبیه‌سازهای آموزشی و ... از یادگیری لذت بیشتری ببر.</Typography>
              <Box sx={{ alignSelf: { lg: "flex-end", xs: "center" }, marginBottom: "3rem", marginLeft: { lg: "3rem", xs: "0" } }}>
                <Link href={""}>
                  <Button sx={{ width: { md: "12rem", xs: "8rem" }, height: "4rem", border: " 4px solid rgba(0, 55, 111, 0.62)", background: "#FFE08B !important", borderRadius: "2.5rem", boxShadow: "6px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <Typography sx={{ color: "#000000", fontWeight: "400", fontSize: { lg: "18px", xs: "12px" }, fontFamily: "IRANYekan" }}>
                      مشاهده دوره‌ها
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: { md: "flex-end", xs: "center" }, justifyContent: "center", width: "100%", marginTop: { md: "0", xs: "3rem" } }}>
            <Image alt="" src={studentpic}></Image>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: { md: "flex-start", xs: "center" }, justifyContent: "center", margin: { md: "0", xs: "3rem" } }}>
            <Image alt="" src={teacherpic}></Image>
          </Grid>
          <Grid item md={6} xs={12} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: { md: "flex-end", xs: "center" }, justifyContent: "center" }} >
            <Box sx={{ background: "#3C8CE791", width: { xl: "46rem", lg: "38rem", xs: "95%", sm: "80%" }, borderRadius: "40px", height: "33rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", paddingTop: "1rem" }}>
              <Typography sx={{ color: "#FFD358", fontSize: { lg: "64px", md: "44px", sm: "30px", xs: "22px" }, fontWeight: "400", fontFamily: "Lalezar" }}>برای معلمان</Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 1)", fontSize: { lg: "36px", md: "20px", xs: "14px" }, width: { xl: "40rem", xs: "80%" }, fontWeight: "400", fontFamily: "Lalezar", textAlign: "center" }}>هم محتوای خودتان را ماندگار و هم دانش‌آموزانتان را با محتوا بیشتر درگیر کنید.</Typography>
              <Typography sx={{ color: "rgba(0, 0, 0, 1)", fontWeight: "400", fontSize: { lg: "24px", xs: "14px" }, textAlign: "center", fontFamily: "IRANYekan", width: { xl: "40rem", xs: "90%" } }}>با یک بار قراردادن محتوای خود روی کاموا، آن را در اختیار تمامی دانش‌آموزانتان قرار دهید و با افزودن امکانات کامل‌کننده‌تر به محتوای خود مانند عکس، فیلم، بازی، انواع سوالات مختلف و غیره، دانش‌آموزانتان را بیشتر درگیر کنید.</Typography>
              <Box sx={{ alignSelf: { lg: "flex-end", xs: "center" }, marginBottom: "3rem", marginLeft: { lg: "3rem", xs: "0" } }}>
                <Link href={""}>
                  <Button sx={{ width: { md: "12rem", xs: "8rem" }, height: "4rem", border: " 4px solid rgba(0, 55, 111, 0.62)", background: "#FFE08B !important", borderRadius: "2.5rem", boxShadow: "6px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <Typography sx={{ color: "#000000", fontWeight: "400", fontSize: { lg: "18px", xs: "12px" }, fontFamily: "IRANYekan" }}>
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
  )
}

export default Descriptions;