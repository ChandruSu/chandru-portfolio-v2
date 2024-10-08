"use client";

import { LandingAnimation } from "@/components/LandingMagic";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`flex h-full min-h-screen w-full flex-col items-center justify-center`}>
      <div className="flex flex-col items-center gap-3 pb-56 pt-20">
        <LandingAnimation />
        <h1 className="whitespace-nowrap px-20 text-[2.75rem] font-extralight tracking-wider max-sm:text-3xl">
          hey, I`&apos;m Chandru
        </h1>
        <div className="flex justify-center gap-5">
          <Link href="/work" className="link-line p-2 font-thin tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xl">Work</p>
          </Link>
          <Link href="/posts" className="link-line p-2 font-thin tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xl">Posts</p>
          </Link>
          <Link href="/cv.pdf" className="link-line p-2 font-thin tracking-wider">
            <p className="text-3xl transition-all duration-100 max-sm:text-xl">CV</p>
          </Link>
          <Link
            href="https://github.com/ChandruSu"
            className="link-line p-2 font-thin tracking-wider"
          >
            <p className="text-3xl transition-all duration-100 max-sm:text-xl">GitHub</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
