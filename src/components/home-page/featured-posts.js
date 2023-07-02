import PostsGrid from "../posts/posts-grid";

export default  function FeaturedPosts(props){
    return (
      <section className="px-4 lg:px-36 lg:py-8 md:relative md:bottom-8">
        <h2 className="text-4xl font-medium text-slate-900 mb-12">Featured Posts</h2>
        <PostsGrid posts={props.posts} />
      </section>
    );
}