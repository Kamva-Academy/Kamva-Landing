import Headline from "components/Headline/Headline";
import Benefits from "components/benefits/Benefits";
import Comments from "components/comment/Comment";
import Courses from "components/courses/Courses";
import Pereview from "components/pereview/Pereview";
import Footer from "layout/Footer";
import AppBar from "components/organisms/AppBar";
import { Fragment } from "react";

export default function Home() {
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
