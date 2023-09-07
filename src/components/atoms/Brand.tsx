import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "assets/logo 1.png"

const Brand = () => {
  return (
    <Stack direction='row' sx={{ padding: { md: 1 } }} alignContent={'center'} alignItems={'center'} justifyItems={'center'}>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Image alt="LOGO" src={logo} width={60} />
      </Box>
      <Typography sx={{ color: "#3498DB", fontSize: 48, fontWeight: 400, fontFamily: "Lalezar" }}>کاموا</Typography>
    </Stack>
  )
}

export default Brand;