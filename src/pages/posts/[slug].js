import { useRouter } from "next/router";
import dummyData from "../../../store/dummy-data";
import PostDetail from "@/components/posts/post-detail";

export default function SinglePost() {
  const data = dummyData;
  const router = useRouter();
  const slug = router.query.slug;
  const post = data.find(post => post.slug === slug);
  console.log(post);
  return (
    <section className="px-4 lg:px-36 lg:py-8 lg:mt-12">
      <PostDetail post={post} />
    </section>
  );
}
