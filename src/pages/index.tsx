import Headline from "components/organisms/Headline";
import Benefits from "components/organisms/Benefits";
import Comments from "components/organisms/Comment";
import Courses from "components/organisms/Courses";
import Pereview from "components/organisms/Pereview";
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
