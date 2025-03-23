"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationClient() {
  const pathname = usePathname();

  return (
    <ul className="hidden min-[601px]:flex gap-5 items-center font-semibold">
      {[
        { name: "Home", path: "/" },
        { name: "Favourites", path: "/favourite" },
        { name: "About", path: "/about" },
      ].map(({ name, path }) => (
        <li key={path}>
          <Link
            href={path}
            className="hover-text-accent-700 group transition-all duration-300 ease-in-out"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
