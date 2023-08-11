

import Headline from "@/components/Headline/Headline";
import Pereview from "@/components/pereview/Pereview";
import Header from "@/layout/Header";
import { Fragment } from "react";


export default function Home() {
  return (
   <Fragment>
    <Header />
    <Headline />
    <Pereview />
   </Fragment>
  )
}
