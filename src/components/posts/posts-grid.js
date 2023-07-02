import PostItem from "./post-item";
export default  function PostsGrid(props){
    const { posts } = props;
    return(
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map( post => (
            <PostItem key={post.slug} post={post}/>
        ))}
      </ul>
    )
}