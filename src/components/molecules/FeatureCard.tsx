import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type FeatureCardPropsType = {
	iconImage: any;
	backgroundColor: string;
	description: string;
}

const FeatureCard = ({ iconImage, backgroundColor, description }: FeatureCardPropsType) => {

	const descriptionFontSizes = { xs: 24, sm: 28, md: 30 };

	return (
		<Stack
			width={{ xs: '90%', sm: '75%', md: "40%", lg: "30%" }}
			minHeight={360} alignItems="center" justifyContent="space-evenly"
			sx={{ padding: 2, background: backgroundColor, boxShadow: "6px 6	px 4px 0px #00000040", borderRadius: 12 }}>
			<Image style={{ userSelect: 'none', pointerEvents: 'none' }} src={iconImage} alt="" />
			<Typography sx={{ color: "#000000", textAlign: "center", fontSize: descriptionFontSizes, padding: "1rem", fontWeight: "400", fontFamily: "IRANYekan" }}>
				{description}
			</Typography>
		</Stack >
	)
}
export default FeatureCard;