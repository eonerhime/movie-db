import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex justify-between items-center   p-3 max-w-6xl max-auto">
      <ul className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-in"}>Sign in</Link>
        </SignedOut>
        <MobileMenu />
        <Navigation />
      </ul>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-sm hidden font-semibold sm:inline">Clone</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
