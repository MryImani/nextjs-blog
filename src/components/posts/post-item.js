import Link from "next/link";
import Image from "next/image";
export default function PostItem(props) {
  const { post } = props;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${post.slug}.jpg`;
  const linkPath = `/posts/${post.slug}`;
  return (
    <li className="text-center rounded-lg shadow-xl py-6 px-3 flex flex-col justify-between">
      <Link href={linkPath}>

          <div>
            <Image className=" object-fill w-full h-64" src={imagePath} alt={post.title} width={300} height={200} />
          </div>
          <div className="mt-8">
            <h3 className="text-base font-extrabold mb-2">{post.title}</h3>
            <time className=" italic text-gray-500 font-semibold">{formattedDate}</time>
            <p className="mt-4 text-gray-400">{post.description.substring(1,100) + '...'}</p>
          </div>

      </Link>
    </li>
  );
}
