import { useState } from "react";
import PostsGrid from "../posts/posts-grid";

export default  function FeaturedPosts(props){
    const { posts } = props;
    const slicedItem = posts.slice(0, 4);
    const [showAllItem, setShowAllItem] = useState(false);
    
    function showAll(){
     setShowAllItem((prevState) => !prevState);
    }
    return (
      <section className="px-4 lg:px-36 lg:py-8 md:relative md:bottom-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-medium text-slate-900 mb-12">
            Featured Posts
          </h2>
          <button
            className=" bg-black text-slate-400 font-semibold rounded-xl cursor-pointer px-4 py-2"
            onClick={showAll}
          >
            {showAllItem ? "View Less" : "View All"}
          </button>
        </div>
        {showAllItem ? (
          <PostsGrid posts={posts} />
        ) : (
          <PostsGrid posts={slicedItem} />
        )}
      </section>
    );
}