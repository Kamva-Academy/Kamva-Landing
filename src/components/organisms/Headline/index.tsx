import { Box, Container, Stack, Typography } from "@mui/material"
import pic from "assets/young man surrounded by gadgets writing notes.png"
import Image from "next/image"
import HeadlineActionButton from "components/atoms/HeadlineActionButton";

function Headline() {

	const titleFontSize = { xs: "22px", sm: "36px", md: "50px", lg: "64px", };
	const subtitleFontSize = { xs: "14px", sm: "20px", md: "24px", lg: "24px", };

	return (
		<Container maxWidth={'xl'} sx={{ userSelect: 'none' }}>
			<Box sx={{
				borderRadius: { xs: '2rem 2rem 2rem 14rem', md: '3rem 3rem 3rem 19rem' },
				background: 'linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: { xs: '38rem', md: '43rem' },
				position: 'relative',
			}}>
				<Stack width={'100%'} height={{ xs: "120%", md: "100%" }}
					sx={{ padding: 4, paddingRight: { sx: 0, md: 12 } }}
					alignItems={{ xs: "center", md: "start" }} justifyContent="space-evenly">
					<Stack spacing={2}>
						<Stack direction={'row'} sx={{ whiteSpace: 'nowrap' }} justifyContent={{ xs: 'center', md: 'start' }}>
							<Typography sx={{ color: "white", fontWeight: "700", fontSize: titleFontSize }}>
								{'بهترین راه یادگیری هر'}
							</Typography>
							<Typography sx={{ color: "#00376f", fontWeight: "700", fontSize: titleFontSize, marginRight: '0.25em' }}>
								{'موضوع'}
							</Typography>
						</Stack>
						<Typography sx={{ color: "white", textAlign: { xs: "center", md: "right" }, fontWeight: "800", fontSize: subtitleFontSize }}>
							{'با کاموا به‌صورت تعاملی، مسئله‌محور و سرگرم‌کننده، یاد بگیر و یاد بده'}
						</Typography>
					</Stack>
					<HeadlineActionButton title="بزن بریم" />
					<Stack
						alignItems={"center"}
						sx={{
							marginBottom: { xs: -8, sm: -12 },
							display: { xs: 'inherit', md: 'none' },
							width: { xs: "85vw", sm: '60vw' },
							left: 0,
						}}>
						<Image alt="" src={pic} />
					</Stack>
				</Stack>
				<Stack
					alignItems={'end'}
					sx={{
						display: { xs: 'none', md: 'flex' },
						position: "absolute",
						width: "45vw",
						left: 0,
						bottom: -90
					}}>
					<Image style={{ pointerEvents: 'none' }} alt="" src={pic} />
				</Stack>
			</Box>
		</Container >
	)
}

export default Headline;