import { useRouter } from "next/router";
import { getPostBySlug } from "../../../store/dummy-data";
import PostDetail from "@/components/posts/post-detail";

export default function SinglePost() {
  const router = useRouter();
  const slug = router.query.slug;
  const post = getPostBySlug(slug);
  return (
    <section className="px-4 lg:px-36 lg:py-8 lg:mt-12">
      <PostDetail post={post} />
    </section>
  );
}
