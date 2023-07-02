import PostsGrid from "./posts-grid";
export default  function AllPost(props){
    return (
      <section
        className={`px-4 lg:px-36 pb-8 mt-8 `}
      >
        <h1 className="text-center text-5xl font-bold text-gray-900 my-12">
          All Posts
        </h1>
        <PostsGrid posts={props.posts} />
      </section>
    );
}