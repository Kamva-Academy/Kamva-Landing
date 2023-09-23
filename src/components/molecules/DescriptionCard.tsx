import { Box, Button, Stack, Typography } from "@mui/material";

type DescriptionCardPropsType = {
  title: string;
  subTitle: string;
  description: string;
  buttonHref: string;
  buttonTitle: string;
}

const DescriptionCard = ({ title, subTitle, description, buttonHref, buttonTitle }: DescriptionCardPropsType) => {

  const subTitleFontSizes = { xs: 24, sm: 28, md: 32, lg: 36 };
  const titleFontSizes = { xs: 30, sm: 36, md: 40, lg: 46 };
  const descriptionFontSizes = { xs: 16, sm: 18, md: 20 };
  const buttonFontSizes = { xs: 16, md: 18 };

  return (
    <Stack alignItems={"stretch"} justifyContent="space-evenly" spacing={4}
      sx={{
        background: "#3C8CE791",
        minHeight: 450,
        width: { xs: '90%', sm: "75%", lg: "75%", xl: "75%", },
        borderRadius: "30px",
        padding: 2,
      }}>
      <Typography color={"#FFD358"} textAlign={{ xs: 'center', md: 'right' }} fontSize={subTitleFontSizes} fontFamily={"Lalezar"}>
        {subTitle}
      </Typography>
      <Typography color={"black"} textAlign="center" fontSize={titleFontSizes} fontFamily={"Lalezar"} sx={{ paddingX: 2 }}>
        {title}
      </Typography>
      <Typography color={"black"} textAlign="center" fontSize={descriptionFontSizes}>
        {description}
      </Typography>
      <Box marginTop={12} sx={{ alignSelf: { xs: "center", lg: "flex-end" } }}>
        <Button
          href={buttonHref}
          sx={{
            paddingX: 2,
            height: "4rem",
            border: "2px solid rgba(0, 55, 111, 0.62)",
            background: "#FFE08B !important",
            borderRadius: 6,
            boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.25)"
          }}>
          <Typography noWrap color={"black"} fontSize={buttonFontSizes}>
            {buttonTitle}
          </Typography>
        </Button>
      </Box>
    </Stack>
  )
}

export default DescriptionCard;