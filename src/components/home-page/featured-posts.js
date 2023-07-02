
import PostsGrid from "../posts/posts-grid";
import Link from "next/link";

export default  function FeaturedPosts(props){
    const { posts } = props;
    const slicedItem = posts.slice(0, 4);

    return (
      <section className="px-4 lg:px-36 lg:py-8  bg-white">
        <div className="flex justify-between items-center mb-8 mx-2">
          <h2 className="text-4xl font-medium text-slate-900 ">
            Featured Posts
          </h2>
          <button
            className=" bg-black text-slate-400 font-semibold rounded-xl cursor-pointer px-4 py-2"
          >
            <Link href="/posts">View All</Link>
          </button>
        </div>
        <PostsGrid posts={slicedItem} />
      </section>
    );
}