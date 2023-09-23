import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import pic1 from "assets/computer board.png";
import pic2 from "assets/dna.png";
import pic3 from "assets/medical flask with blue liquid.png";
import pic4 from "assets/Student studying math.png";
import SubjectCard from "components/molecules/SubjectCard";

const Subjects = () => {
  return (
    <Box sx={{
      background: 'hsla(44, 100%, 67%, 0.39)',
      paddingTop: 18,
      clipPath: {
        xs: 'polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)',
        md: 'polygon(50% 22%, 100% 0, 100% 100%, 0 100%, 0% 50%, 0 0)'
      },
    }}>
      <Container maxWidth='xl'>
        <Grid
          container
          alignItems={'center'}
          justifyContent={"space-evenly"}
          width={'100%'}
          height={{ xs: 650, md: 450 }}>
          <Grid item xs={12} md={3}>
            <Typography
              textAlign={"center"}
              fontSize={{ xs: 28, md: 30 }}
              fontWeight={500}>
              {'برای هر موضوعی...'}
            </Typography>
          </Grid>
          <Grid container item xs={12} md={7} justifyContent={'space-between'}>
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
      </Container>
    </Box>
  );
}

export default Subjects;
