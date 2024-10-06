"use client";

import { LandingAnimation } from "@/components/LandingMagic";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`flex h-full min-h-screen w-full flex-col items-center justify-center`}>
      <div className="flex flex-col items-center gap-3 pb-40 pt-20">
        <LandingAnimation />
        <h1 className="text-[5rem] font-thin tracking-wider">Chandru</h1>
        <div className="flex justify-center gap-5">
          <Link href="/work" className="nav-link-line p-2 font-extralight tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xs">Work</p>
          </Link>
          <Link href="/posts" className="nav-link-line p-2 font-extralight tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xs">Posts</p>
          </Link>
          <Link href="/cv.pdf" className="nav-link-line p-2 font-extralight tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xs">CV</p>
          </Link>
          <Link href="/cv.pdf" className="nav-link-line p-2 font-extralight tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xs">GitHub</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
