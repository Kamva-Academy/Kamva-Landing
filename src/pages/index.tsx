import Headline from "components/organisms/Headline";
import Benefits from "components/organisms/Benefits";
import Comments from "components/organisms/Comment";
import Courses from "components/organisms/Courses";
import Pereview from "components/organisms/Pereview";
import Footer from "components/organisms/Footer";
import AppBar from "components/organisms/AppBar";
import { Fragment } from "react";
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <Fragment>
      <AppBar />
      <Headline />
      <Fade bottom>
      <Pereview />
      </Fade>
      <Fade left>
      <Benefits />
      </Fade>
      <Fade right>
      <Courses />
      </Fade>
      {/* <Comments /> */}
      <Footer />
    </Fragment>
  )
}

export default Home;
