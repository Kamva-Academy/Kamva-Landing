import { Button, Typography } from "@mui/material";

type HeadlineActionButtonPropsType = {
  title: string,
}

const HeadlineActionButton = ({ title }: HeadlineActionButtonPropsType) => {

  const scrollIntoView = () => {
    document.getElementById("subjects")?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Button onClick={scrollIntoView} sx={{ width: { xs: 160, sm: 200, md: 240, lg: 280 }, height: { xs: 60, sm: 70, md: 80, lg: 90 }, border: "1px solid #3498DB", background: "rgba(255, 211, 88, 1) !important", borderRadius: 3, boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}>
      <Typography color={'black'} fontSize={{ xs: 16, sm: 20, md: 24, lg: 28 }}>
        {title}
      </Typography>
    </Button>
  )
}

export default HeadlineActionButton;