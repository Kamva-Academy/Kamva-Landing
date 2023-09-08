import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const AppBarLoginButton = () => {
  return (
    <Box>
      <Button
        component={Link}
        href={'https://kamva.academy/login'}
        sx={{
          width: { xs: "5rem", md: '10rem' },
          border: "1px solid #3498DB",
          background: "rgba(255, 211, 88, 1) !important",
          borderRadius: 4,
        }}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { md: "24px" },
            fontFamily: "IRANYekan",
          }}>
          {'ورود'}
        </Typography>
      </Button>
    </Box>
  )
}

export default AppBarLoginButton;