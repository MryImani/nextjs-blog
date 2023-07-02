import dummyData from "../../../store/dummy-data"
import AllPost from "@/components/posts/all-posts";
export default function AllPosts(){
    const data = dummyData;
    return <AllPost posts={data} />;
}