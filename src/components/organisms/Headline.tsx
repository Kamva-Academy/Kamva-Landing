import { Box, Button, Container, Stack, Typography } from "@mui/material"
import pic from "assets/young man surrounded by gadgets writing notes.png"
import Image from "next/image"
import HeadlineActionButton from "components/atoms/HeadlineActionButton";
import DaneshaneBanner from "assets/banner-landing-saraamad.png";
import SquareDaneshaneBanner from "assets/saraamad-banner-square.jpg";

function Headline() {

	const titleFontSize = { xs: "26px", sm: "40px", md: "56px", lg: "68px", };
	const subtitleFontSize = { xs: "14px", sm: "18px", md: "22px", lg: "26px", };

	const bannerLink = 'https://platform.kamva.academy/login/?utm_source=landing-banner&utm_medium=organic&utm_campaign=saraamad';

	return (
		<Container maxWidth={'xl'}>
			<Stack
				alignItems={"center"}
				sx={{
					marginBottom: { xs: 4 },
					display: { xs: 'inherit', md: 'none' },
					width: '100%',
					left: 0,
				}}>
				<Button sx={{ padding: 0 }} disableRipple onClick={() => window.location.href = bannerLink}>
					<Image alt="" src={SquareDaneshaneBanner} width={0} height={0} style={{ userSelect: 'none', pointerEvents: 'none', width: '100%', height: 'auto' }} />
				</Button>
			</Stack>
			<Stack
				alignItems={'center'}
				sx={{
					display: { xs: 'none', md: 'flex' },
					width: '100%',
					marginTop: -2,
					marginBottom: 4,
				}}>
				<Button sx={{ width: '87%', padding: 0 }} disableRipple onClick={() => window.location.href = bannerLink}>
					<Image style={{ userSelect: 'none', pointerEvents: 'none', width: '100%', height: 'auto' }} alt="" src={DaneshaneBanner} width={0} height={0} />
				</Button>
			</Stack>
			<Stack alignItems={'center'} justifyContent={'center'}>
				<Box sx={{
					borderRadius: { xs: '2rem 2rem 2rem 10rem', md: '3rem 3rem 3rem 19rem' },
					background: 'linear-gradient(135deg, #3C8CE7, #00EAFF)',
					backgroundRepeat: 'no-repeat',
					width: { xs: '100%', md: '85%' },
					height: { xs: '35rem', md: '40rem' },
					position: 'relative',
				}}>
					<Stack height={{ xs: "120%", md: "100%" }}
						sx={{ padding: 4, paddingRight: { sx: 0, md: 12 } }}
						alignItems={{ xs: "center", md: "start" }} justifyContent="space-evenly">
						<Stack spacing={2}>
							<Stack direction={'row'} sx={{ whiteSpace: 'nowrap' }} justifyContent={{ xs: 'center', md: 'start' }}>
								<Typography sx={{ color: "white", fontWeight: 700, fontSize: titleFontSize }}>
									{'گام بعدی رو'}
								</Typography>
								<Typography sx={{ color: "#0051a3", fontWeight: 700, fontSize: titleFontSize, marginX: '0.25em' }}>
									{'محکم'}
								</Typography>
								<Typography sx={{ color: "white", fontWeight: 700, fontSize: titleFontSize }}>
									{'بردار...'}
								</Typography>
							</Stack>
							<Typography sx={{ color: "white", textAlign: { xs: "center", md: "right" }, fontWeight: 800, fontSize: subtitleFontSize }}>
								{'با کاموا به‌صورت تعاملی، مسئله‌محور و سرگرم‌کننده، یاد بگیر و یاد بده'}
							</Typography>
						</Stack>
						<HeadlineActionButton title="بزن بریم" />
						<Stack
							alignItems={"center"}
							sx={{
								marginBottom: { xs: 0, sm: -12 },
								display: { xs: 'inherit', md: 'none' },
								width: { xs: "80vw", sm: '60vw' },
								left: 0,
							}}>
							<Image alt="" src={pic} width={0} height={0} style={{ userSelect: 'none', pointerEvents: 'none', width: '100%', height: 'auto' }} />
						</Stack>
					</Stack>
					<Stack
						alignItems={'end'}
						sx={{
							display: { xs: 'none', md: 'flex' },
							position: "absolute",
							width: { xs: "35vw", md: 400, lg: 500 },
							left: { md: -30 },
							bottom: -90
						}}>
						<Image style={{ userSelect: 'none', pointerEvents: 'none', width: '100%', height: 'auto' }} alt="" src={pic} width={0} height={0} />
					</Stack>
				</Box>
			</Stack>
		</Container >
	)
}

export default Headline;