import { formatBlogPostDate } from "@/lib/utils";
import posts from "./(posts)/posts.json";
import Link from "next/link";

export default async function Page({ searchParams }: { searchParams?: Promise<{ [key: string]: string }> }) {
  const tag = (await searchParams)?.["tag"];
  
  const selectedPosts = posts
    .sort((a, b) => a.date > b.date ? -1 : 1)
    .filter(p => !tag || p.tags.includes(tag))

  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-200 grow flex-col gap-8 pb-16 font-light">
        {tag ? (
          <div className="flex text-2xl">
            <Link href="/posts">
            <h2 className="text-center text-4xl font-semibold text-dark dark:text-light">
              Posts for <span className="italic">#{tag}</span>
            </h2>
            </Link>
          </div>
        ) : (
          <h2 className="text-4xl font-semibold text-dark dark:text-light">
            Posts
          </h2>
        )}
        <div className="flex flex-col gap-2">
          {selectedPosts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="flex gap-8 items-center justify-between text-lg hover:opacity-60 visited:opacity-60">
              <p>{post.title}</p>
              <blockquote className="font-mono text-grey tracking-tight">
                {formatBlogPostDate(post.date)}
              </blockquote>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
