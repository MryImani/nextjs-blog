
import AllPost from "@/components/posts/all-posts";
import { getAllPosts } from "../../../store/dummy-data";
export default function AllPosts(){
    const posts = getAllPosts();
    return <AllPost posts={posts} />;
}