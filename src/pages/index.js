import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment} from "react";
import {  getFeaturedPosts } from "../../store/dummy-data";



export default function Home() {
  const posts =  getFeaturedPosts(); 
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}
