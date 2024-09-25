"use client";

import { Post } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon, LinkIcon } from "./Icons";

export function PostDetailsBar({ posts }: { posts: Post[] }) {
  const matches = /^\/posts\/(.+)$/.exec(usePathname());
  const slug = matches?.[1];
  const post = posts.find((p) => p.slug === slug);
  const tags = post?.tags ?? [];

  return (
    <>
      <div className="flex flex-col max-md:flex-row gap-3 pr-4">
        {post?.githubURL &&
          <Link href={post.githubURL}>
            <div className="flex transition-transform duration-200 hover:-translate-y-0.5 items-center justify-between gap-2 rounded-md border border-slate-900 bg-slate-50 px-4 py-1.5 dark:border-slate-50">
              <p className="text-zinc-900 font-semibold">GitHub</p>
              <GitHubIcon className="brightness-0 shrink-0" />
            </div>
          </Link>
        }
        {post?.link &&
          <Link href={post.link}>
            <div className="flex transition-transform duration-200 hover:-translate-y-0.5 items-center justify-between gap-2 rounded-md border border-slate-900 bg-slate-50 px-4 py-1.5 dark:border-slate-50">
              <p className="text-zinc-900 font-semibold">URL</p>
              <LinkIcon className="brightness-0 shrink-0" />
            </div>
          </Link>
        }
      </div>
      <div className="flex flex-wrap gap-1 max-md:overflow-x-scroll">
        {tags.map((tag) => (
          <Link key={`tag-${tag}`} href={`/posts?tag=${tag}`} >
            <div
              className="rounded-full bg-slate-400 bg-opacity-10 px-2 py-1 text-xs font-light"
            >
              {tag}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
