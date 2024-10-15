"use client";

import { LandingAnimation } from "@/components/LandingMagic";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`flex h-full min-h-screen w-full flex-col items-center justify-center`}>
      <div className="flex flex-col items-center gap-3 px-4 pb-20 max-sm:pb-10">
        <LandingAnimation />
        <h1 className="whitespace-nowrap text-[2.75rem] font-extralight tracking-wider max-sm:text-3xl">
          hey, I&apos;m Chandru
        </h1>
        <p className="text-center text-md text-grey">
          Ex-SWE @ YC Startup, Computer science student @ KCL, London based Game developer and
          Software engineer
        </p>
        <div className="flex justify-center gap-5 pt-4 max-sm:w-full max-sm:flex-col">
          <Link href="/about" className="link-line p-2 font-extralight tracking-wider">
            <p className="text-xl transition-all duration-100 max-sm:text-xl">About</p>
          </Link>
          <Link href="/posts" className="link-line p-2 font-extralight tracking-wider">
            <p className="text-xl transition-all duration-100 max-sm:text-xl">Posts</p>
          </Link>
          <Link href="/cv.pdf" className="link-line p-2 font-extralight tracking-wider">
            <p className="text-xl transition-all duration-100 max-sm:text-xl">CV</p>
          </Link>
          <Link
            href="https://github.com/ChandruSu"
            className="link-line p-2 font-extralight tracking-wider"
          >
            <p className="text-2xl transition-all duration-100 max-sm:text-xl">GitHub</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
