import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import Image from "next/image";
import iconpic from "assets/wool-ball-5758621-4833540 (1) 1.png";
import boyImg from "assets/dee2c71a6ee84d8f96386c557d4edb32.png"
import footicon from "assets/Group 54.png"
import gamepic from "assets/Game Controller.png"
import bookpic from "assets/Literature.png"
import digitalbord from "assets/Digital Signature.png"
import FeatureCard from "components/molecules/FeatureCard";

function Features() {

	const titleFontSizes = { xs: 30, sm: 36, md: 42, lg: 48 };

	return (
		<Stack alignItems={'center'} justifyContent={'center'}>
			<Stack alignItems={'center'} justifyContent={'center'} width={"100%"} maxWidth={'lg'} paddingTop={10} paddingBottom={10} spacing={4}>
				<Stack direction={'row'} alignItems={'center'} justifyContent={'flex-start'}>
					<Typography textAlign="center" sx={{ color: "#00376f", fontSize: titleFontSizes, fontFamily: "Lalezar", paddingLeft: 1 }}>
						{'ویژگی‌ دوره‌ها'}
					</Typography>
					<Image style={{ animation: 'bellRing 3s infinite', userSelect: 'none', pointerEvents: 'none' }} alt="" src={iconpic} />
				</Stack>
				<Container maxWidth='lg'>
					<Stack
						width={'100%'}
						alignItems={'center'}
						justifyContent={"space-between"}
						direction={{ xs: "column", md: "row" }}
						spacing={{ xs: 4, md: 0 }}>
						<FeatureCard
							iconImage={footicon}
							description={'می‌تونی دوره‌ها رو گام به گام پیش بری و با سرعت خودت یاد بگیری'}
							backgroundColor={'#3498DB82'} />
						<FeatureCard
							iconImage={gamepic}
							description={'عوامل بازی‌وارسازی (Gamification) یادگیری‌ات را به ماجراجویی تبدیل می‌کنند'}
							backgroundColor={'#3498DB82'} />
					</Stack>
				</Container>
			</Stack>
			<Stack sx={{ marginTop: { xs: 12, sm: 16, md: 8 }, marginBottom: -1 }} position={'relative'}
				height={{ xs: 80, sm: 100, md: 120 }} width={"100%"} alignItems={'center'} justifyContent={"flex-end"}>
				<Box height={"100%"} width={"100%"} position={'absolute'}
					sx={{
						zIndex: 100,
						background: '#3498DB',
						clipPath: {
							xs: null,
							md: 'polygon(50% 0%, 80% 100%, 20% 100%)'
						},
					}} />
				<Stack alignItems={'center'} justifyContent={'center'} zIndex={200} width={{ xs: "80%", sm: 380, md: 420, lg: 460 }}>
					<Image style={{ userSelect: 'none', pointerEvents: 'none' }} src={boyImg} alt="" />
				</Stack>
			</Stack>
			<Stack alignItems={'center'} justifyContent={'center'} paddingTop={10} paddingBottom={20} width={'100%'} sx={{ background: '#3498DB' }}>
				<Container maxWidth='lg'>
					<Stack
						alignItems={'center'}
						justifyContent={'space-between'}
						direction={{ xs: "column", md: "row" }}
						width={'100%'}
						spacing={{ xs: 4, md: 0 }}>
						<FeatureCard
							iconImage={bookpic}
							description={'می‌تونید از درس‌نامه‌ها، فیلم‌ها و شبیه‌ساز‌های آماده استفاده کنید'}
							backgroundColor={'#FFD358E5'} />
						<FeatureCard
							iconImage={digitalbord}
							description={'اتاق گفتگو و تابلوی هوشمند برای ارتباط گروهی یادگیرندگان وجود داره'}
							backgroundColor={'#FFD358E5'} />
					</Stack>
				</Container>
			</Stack>
		</Stack >
	)
}

export default Features;