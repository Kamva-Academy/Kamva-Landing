import { Button, Typography } from "@mui/material";
import Link from "next/link";

const AppBarCreateAccountButton = () => {
  return (
    <Button
      component={Link}
      href={'https://platform.kamva.academy/create-account/'}
      sx={{
        width: { xs: "4rem", md: '6rem' },
        border: "1px solid #3498DB",
        background: "#3bacf7 !important",
        borderRadius: 3,
      }}>
      <Typography
        sx={{
          color: "white",
          fontSize: { md: 18 },
        }}>
        {'ثبت‌نام'}
      </Typography>
    </Button>
  )
}

export default AppBarCreateAccountButton;