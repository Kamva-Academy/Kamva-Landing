import Headline from "components/organisms/Headline/Headline";
import Benefits from "components/organisms/benefits/Benefits";
import Comments from "components/organisms/comment/Comment";
import Courses from "components/organisms/courses/Courses";
import Pereview from "components/organisms/pereview/Pereview";
import Footer from "components/organisms/Footer";
import AppBar from "components/organisms/AppBar";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <AppBar />
      <Headline />
      <Pereview />
      <Courses />
      <Benefits />
      <Comments />
      <Footer />
    </Fragment>
  )
}

export default Home;
