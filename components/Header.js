import Link from "next/link";
import {} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-40">
        <img src="/travel_logo.png" alt="logo" />
      </div>
      <div className="hidden lg:block">
        <ul className="menu flex text-white">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Trips</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="block lg:hidden">
        <AiOutlineMenu className="text-2xl text-emerald-500	" />
      </div>
    </div>
  );
}
