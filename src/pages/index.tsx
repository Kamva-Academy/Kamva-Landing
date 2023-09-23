import Headline from "components/organisms/Headline";
import Benefits from "components/organisms/Benefits";
import Comments from "components/organisms/Comment";
import Courses from "components/organisms/Courses";
import Descriptions from "components/organisms/Descriptions";
import Footer from "components/organisms/Footer";
import AppBar from "components/organisms/AppBar";
import { Fragment } from "react";
import Subjects from "components/organisms/Subjects";
import { Box } from "@mui/material";


function Home() {
  return (
    <Fragment>
      <AppBar />
      <Box sx={{ marginTop: { xs: 6, md: 10 } }}>
        <Headline />
      </Box>
      <Box sx={{ marginTop: 24 }} id="subjects">
        <Subjects />
      </Box>
      <Box>
        <Descriptions />
      </Box>
      <Box>
        <Benefits />
      </Box>
      <Box>
        <Courses />
      </Box>
      <Box>
        <Comments />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Fragment>
  )
}

export default Home;
