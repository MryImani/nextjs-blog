
import Link from "next/link";
import Logo from "./logo";
export default function Navigation(){
    return (
      <header
        className={` p-4 lg:px-36 lg:py-8 flex items-center justify-between fixed w-full z-10 `}
      >
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex">
            <li className="mr-4 text-slate-900 font-semibold">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="mr-4 text-slate-900 font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}