"use client";

import { Post } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon, LinkIcon } from "./Icons";
import { SlideLink } from "./SlideLink";

export function PostDetailsBar({ posts }: { posts: Post[] }) {
  const matches = /^\/posts\/(.+)$/.exec(usePathname());
  const slug = matches?.[1];
  const post = posts.find((p) => p.slug === slug);
  const tags = post?.tags ?? [];

  return (
    <>
      <div className="flex flex-col gap-3 pr-4 max-md:flex-row">
        {post?.githubURL && (
          <SlideLink
            label="GitHub"
            link={post.githubURL}
            icon={
              <GitHubIcon className="duration-50 shrink-0 brightness-0 transition-all delay-200 group-hover:brightness-100" />
            }
          />
        )}
        {post?.link && (
          <SlideLink
            label="URL"
            link={post.link}
            icon={
              <LinkIcon className="duration-50 shrink-0 brightness-0 transition-all delay-200 group-hover:brightness-100" />
            }
          />
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
