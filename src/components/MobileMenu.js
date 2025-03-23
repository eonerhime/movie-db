"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex items-center min-[601px]:hidden">
      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <nav
        className={`absolute top-10 left-0 w-11/12 text-primary-50 z-10 font-semibold  transparent-bg-primary-500 text-primary-50 p-6 space-y-4 shadow-md transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden bg-opacity-25`}
      >
        <ul className="flex flex-col gap-5 items-start ml-2 dark:bg-gray-600 bg-amber-100 dark:text-gray-50 w-52 h-72 p-4 bg-opacity-25">
          {[
            { name: "Home", path: "/" },
            { name: "Favourites", path: "/favourites" },
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
      </nav>
    </div>
  );
}
