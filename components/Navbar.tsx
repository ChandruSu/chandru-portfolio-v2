import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export function Navbar() {
  return (
    <header className="flex w-full items-center justify-between gap-4 p-5 md:px-40">
      <div className="site-title max-sm:text-md h-6 w-32 cursor-pointer px-1 font-light tracking-widest text-zinc-900 transition-all duration-100 dark:text-slate-50 sm:text-2xl">
        <span className="view-a">chandru</span>
        <span className="view-b text-nowrap">suresh&#128187;</span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Link href="/" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">home</p>
        </Link>
        <Link href="/projects" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">projects</p>
        </Link>
        <Link href="/posts" className="nav-link-line p-2 font-light">
          <p className="text-md transition-all duration-100 max-sm:text-xs">posts</p>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
