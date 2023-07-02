import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment, useEffect, useState } from "react";
import dummyData from "../../store/dummy-data";


export default function Home() {
  const data =  dummyData;
  
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={data} />
    </Fragment>
  );
}
