import { Button, Typography } from "@mui/material";
import Link from "next/link";

const AppBarButton = ({ title = "", href = "" }) => {
  return (
    <Button variant="text" component={Link} href={href}>
      <Typography sx={{ color: "#000000", fontSize: { xs: 18, md: 24 } }}>
        {title}
      </Typography>
    </Button>
  )
}

export default AppBarButton;