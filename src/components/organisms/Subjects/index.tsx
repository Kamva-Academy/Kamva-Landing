import { Grid, Stack, Typography } from "@mui/material";
import pic1 from "assets/computer board.png";
import pic2 from "assets/dna.png";
import pic3 from "assets/medical flask with blue liquid.png";
import pic4 from "assets/Student studying math.png";
import SubjectCard from "components/atoms/SubjectCard";

const Subjects = () => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      sx={{
        background: 'hsla(44, 100%, 67%, 0.39)',
        height: { xs: 700, md: 500 },
        paddingTop: 10,
        clipPath: {
          xs: 'polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)',
          md: 'polygon(50% 22%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)'
        },
      }}>
      <Grid
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            textAlign={"center"}
            fontSize={{ xs: 20, md: 24 }}
            fontWeight={600}
            noWrap>
            {'برای هر موضوعی...'}
          </Typography>
        </Grid>
        <Grid container item xs={12} md={7} justifyContent={'space-between'} spacing={4}>
          <Grid item xs={6} md={3}>
            <SubjectCard picture={pic1} title="علوم کامپیوتر" backgroundColor="#99d3fb" />
          </Grid>
          <Grid item xs={6} md={3}>
            <SubjectCard picture={pic2} title="زیست" backgroundColor="#0EA51D" />
          </Grid>
          <Grid item xs={6} md={3}>
            <SubjectCard picture={pic3} title="شیمی" backgroundColor="#894FD8" />
          </Grid>
          <Grid item xs={6} md={3}>
            <SubjectCard picture={pic4} title="ریاضیات" backgroundColor="#FFD358" />
          </Grid>
        </Grid>
      </Grid>
    </Stack >
  );
}

export default Subjects;
