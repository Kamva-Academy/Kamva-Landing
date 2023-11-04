import Headline from "components/organisms/Headline";
import Features from "components/organisms/Features";
import Comments from "components/organisms/Comment";
import Courses from "components/organisms/Courses";
import Descriptions from "components/organisms/Descriptions";
import Footer from "components/organisms/Footer";
import AppBar from "components/organisms/AppBar";
import { Fragment } from "react";
import Subjects from "components/organisms/Subjects";
import { Box, Container, Stack } from "@mui/material";
import Banner from "components/molecules/Banner";

function Home() {
  return (
    <Fragment>
      <AppBar />
      <Box marginTop={{ xs: 9, sm: 10, md: 11 }}>
        <Headline />
      </Box>
      <Container sx={{ marginTop: { xs: 10, sm: 20, md: 18 } }} maxWidth='lg'>
        <Banner />
      </Container>
      <Box marginTop={{ xs: 12, sm: 16, md: 18 }} id="subjects">
        <Subjects />
      </Box>
      {/* <Box>
        <Descriptions />
      </Box> */}
      <Box>
        <Features />
      </Box>
      {/* <Box>
        <Courses />
      </Box> */}
      {/* <Box>
        <Comments />
      </Box> */}
      <Box>
        <Footer />
      </Box>
    </Fragment >
  )
}

export default Home;
