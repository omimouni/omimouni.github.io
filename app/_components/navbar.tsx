import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-3 bg-white fixed top-0 left-0 w-full">
      <div className="wrapper">
        <ul className="flex text-sm text-gray-900 items-center justify-center gap-4">
          <li><Link href="/">About</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/blogs">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
}
