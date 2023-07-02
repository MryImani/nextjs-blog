import Link from "next/link";
import Image from "next/image";
export default function PostDetail(props) {
  const { post } = props;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${post.slug}.jpg`;
  const linkPath = `/posts/${post.slug}`;
  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-10 py-6 pr-3 pl-6  bg-white rounded-2xl">
      <div className="lg:col-span-4">
        <Image
          className=" object-fill h-full rounded-2xl "
          src={imagePath}
          alt={post.title}
          width={900}
          height={500}
        />
      </div>

      <div className="lg:col-span-6 py-3 px-3">
        <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
        <time className=" italic text-gray-500 font-semibold">
          {formattedDate}
        </time>
        <p className="mt-4 text-gray-400">{post.body}</p>
      </div>
    </div>
  );
}
