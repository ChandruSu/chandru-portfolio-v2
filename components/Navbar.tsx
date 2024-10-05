import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="flex w-full items-center justify-between gap-4 p-3 max-md:gap-0 md:px-40">
      <Link href="/">
        <div className="site-title max-sm:text-md h-6 w-32 px-1 font-light tracking-widest text-dark transition-all duration-100 dark:text-light sm:text-2xl">
          <span className="view-a">chandru</span>
          <span className="view-b text-nowrap">suresh&#128187;</span>
        </div>
      </Link>
      <div className="flex items-center justify-end gap-2">
        <Link href="/work" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">work</p>
        </Link>
        <Link href="/posts" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">posts</p>
        </Link>
        <Link href="/cv.pdf" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">cv</p>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
