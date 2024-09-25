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
      <div className="flex flex-col gap-3 pr-4 max-md:flex-row">
        {post?.githubURL && (
          <Link href={post.githubURL}>
            <div className="flex items-center justify-between gap-2 rounded-md border border-slate-900 bg-slate-50 px-4 py-1.5 transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-50">
              <p className="font-semibold text-zinc-900">GitHub</p>
              <GitHubIcon className="shrink-0 brightness-0" />
            </div>
          </Link>
        )}
        {post?.link && (
          <Link href={post.link}>
            <div className="flex items-center justify-between gap-2 rounded-md border border-slate-900 bg-slate-50 px-4 py-1.5 transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-50">
              <p className="font-semibold text-zinc-900">URL</p>
              <LinkIcon className="shrink-0 brightness-0" />
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Link key={`tag-${tag}`} href={`/posts?tag=${tag}`}>
            <div className="rounded-full bg-slate-400 bg-opacity-10 px-2 py-1 text-xs font-light">
              {tag}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
