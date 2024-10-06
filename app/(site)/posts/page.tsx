import posts from "./(posts)/posts.json";
import _ from "lodash";
import Link from "next/link";

export default function Page({ searchParams }: { searchParams?: { [key: string]: string } }) {
  const tag = searchParams?.["tag"];
  const byYear = _.groupBy(
    posts.filter((p) => !tag || p.tags.includes(tag)),
    (p) => new Date(p.date).getFullYear(),
  );
  const years = _.keys(byYear).sort().toReversed();
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[50rem] grow flex-col gap-8 pb-16 font-light">
        {tag ? (
          <div className="flex">
            <Link href="/posts">
              <div className="rounded-full bg-slate-400 bg-opacity-10 px-2 py-1 text-sm font-light">
                search-tag: {tag}
              </div>
            </Link>
          </div>
        ) : (
          <h2 className="text-center text-4xl font-semibold text-dark dark:text-light">
            All Posts
          </h2>
        )}
        {years.map((year) => (
          <div key={`section-${year}`} className="flex flex-col gap-3">
            <h2 className="text-lg text-[#008AFF]">{year}</h2>
            <ul className="flex flex-col gap-6">
              {byYear[year].map((post) => (
                <li key={post.slug} className="grid gap-2 md:grid-cols-[2fr_3fr]">
                  <Link href={`/posts/${post.slug}`} className="text-lg">
                    {post.title}
                  </Link>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-light text-zinc-400 md:text-justify">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link key={`${post.slug}-${tag}`} href={`/posts?tag=${tag}`}>
                          <div className="rounded-full bg-slate-400 bg-opacity-10 px-2 py-1 text-xs font-light">
                            {tag}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="mt-4 opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}
