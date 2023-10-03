import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "assets/logo 1-min.png"

const Brand = () => {
  return (
    <Stack direction='row' alignContent={'center'} alignItems={'center'} justifyItems={'center'} sx={{ userSelect: 'none' }}>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Image alt="LOGO" src={logo} width={60} />
      </Box>
      <Typography sx={{ color: "#3498DB", fontSize: { xs: 36, md: 48 }, fontWeight: 500, fontFamily: "Lalezar" }}>کاموا</Typography>
    </Stack>
  )
}

export default Brand;