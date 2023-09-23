import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import iconpic from "assets/wool-ball-5758621-4833540 (1) 1.png";
import boyImg from "assets/dee2c71a6ee84d8f96386c557d4edb32.png"
import footicon from "assets/Group 54.png"
import gamepic from "assets/Game Controller.png"
import bookpic from "assets/Literature.png"
import digitalbord from "assets/Digital Signature.png"
import style from "./benefits.style.module.css"

function Benefits() {
	return (
		<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start", marginTop: "4rem" }}>
			{/* <div style={{ width: "85%", border: " 1px solid #00000073" }}></div> */}
			<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", justifyContent: "flex-start" }}>
				<Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginBottom: "3rem" }}>
					<Typography sx={{ color: "rgb(0, 55, 111)", fontSize: { lg: "64px", md: "44px", sm: "32px", xs: "20px" }, fontWeight: "400", fontFamily: "Lalezar" }}>ویژگی‌ دوره‌ها</Typography>
					<Image className={style.animated_path} alt="" src={iconpic}></Image>
				</Box>
				<Box sx={{ width: "85%", position: "relative", height: { lg: "17rem", xs: "fit-content" } }}>
					<Stack flexDirection={{ lg: "row", xs: "column" }} justifyContent={"space-between"} width={"100%"} sx={{}}>
						<Grid sx={{ display: "flex", justifyContent: "center" }}>
							<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", background: "#3498DB82", boxShadow: "12px 12px 4px 0px #00000040", width: { md: "27rem", xs: "100%" }, height: "23rem", borderRadius: "48px", marginBottom: { lg: "0", xs: "3rem" } }}>
								<Image src={footicon} alt="" ></Image>
								<Typography sx={{ color: "#000000", textAlign: "center", fontSize: { md: "36px", xs: "20px" }, padding: "1rem", fontWeight: "400", fontFamily: "IRANYekan" }}>می‌تونی دوره‌ها رو گام به گام پیش بری و با سرعت خودت یاد بگیری!</Typography>
							</Box>
						</Grid>
						<Grid sx={{ display: "flex", justifyContent: "center" }}>
							<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", background: "#3498DB82", boxShadow: "12px 12px 4px 0px #00000040", width: { md: "27rem", xs: "100%" }, height: "23rem", borderRadius: "48px", marginBottom: { md: "0", xs: "3rem" } }}>
								<Image src={gamepic} alt="" ></Image>
								<Typography sx={{ color: "#000000", textAlign: "center", fontSize: { md: "36px", xs: "20px" }, padding: "1rem", fontWeight: "400", fontFamily: "IRANYekan" }}> با وجود عوامل بازی‌وارسازی (Gamification) مسیر یادگیری‌ات را به ماجراجویی تبدیل کن!</Typography>
							</Box>
						</Grid>
					</Stack>
				</Box>
				<Box sx={{ position: "relative", width: "100%" }}>
					<Box sx={{ position: "absolute", width: "100%", top: "2%", zIndex: "300", display: "flex", justifyContent: "center" }}>
						<Box sx={{ width: { lg: "20%", md: "30%", sm: "50%", xs: "90%" } }}>
							<Image style={{ width: "100%" }} src={boyImg} alt=""></Image>
						</Box>
					</Box>
					<div className={style.bg_cards}>

						<Stack flexDirection={{ lg: "row", xs: "column" }} justifyContent={"space-between"} width={"85%"}>
							<Grid sx={{ display: "flex", justifyContent: "center" }}>
								<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", background: "#FFD358E5", boxShadow: "12px 12px 4px 0px #00000040", width: { md: "27rem", xs: "100%" }, height: "23rem", borderRadius: "48px", marginBottom: { lg: "0", xs: "3rem" } }}>
									<Image src={bookpic} alt="" ></Image>
									<Typography sx={{ color: "#000000", textAlign: "center", fontSize: { md: "36px", xs: "20px" }, padding: "1rem", fontWeight: "400", fontFamily: "IRANYekan" }}>می‌تونید از درس‌نامه‌ها، فیلم‌ها و شبیه‌ساز‌های از پیش آماده استفاده کنید</Typography>
								</Box>
							</Grid>
							<Grid sx={{ display: "flex", justifyContent: "center" }}>
								<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", background: "#FFD358E5", boxShadow: "12px 12px 4px 0px #00000040", width: { md: "27rem", xs: "100%" }, height: "23rem", borderRadius: "48px", marginBottom: { lg: "0", xs: "3rem" } }}>
									<Image src={digitalbord} alt="" ></Image>
									<Typography sx={{ color: "#000000", textAlign: "center", fontSize: { md: "36px", xs: "20px" }, padding: "1rem", fontWeight: "400", fontFamily: "IRANYekan" }}>اتاق گفتگو و تابلوی هوشمند برای ارتباط گروهی بچه‌ها به صورت آنلاین وجود داره</Typography>
								</Box>

							</Grid>
						</Stack>
					</div>
				</Box>
			</Box>
		</Box>
	)
}

export default Benefits;