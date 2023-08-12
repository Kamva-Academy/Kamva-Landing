

import Headline from "@/components/Headline/Headline";
import Benefits from "@/components/benefits/Benefits";
import Courses from "@/components/courses/Courses";
import Pereview from "@/components/pereview/Pereview";
import Header from "@/layout/Header";
import { Fragment } from "react";


export default function Home() {
  return (
   <Fragment>
    <Header />
    <Headline />
    <Pereview />
    <Courses />
    <Benefits />
   </Fragment>
  )
}
