import _ from "lodash";
import { Post } from "@/types";
import Link from "next/link";
import { Fragment } from "react";
import { getMonthName } from "@/lib/utils";

export function PostTimeline({ posts }: { posts: Post[] }) {
  const byYear = _.groupBy(posts, (v) => new Date(v.date).getFullYear());
  const years = _.keys(byYear).sort().toReversed();

  return (
    <div className="flex flex-col gap-5 pl-4">
      <h3 className="text-lg font-light text-zinc-500">All posts</h3>
      {years.map((year, index) => {
        const byMonth = _.groupBy(byYear[year], (v) => new Date(v.date).getMonth());
        const months = _.keys(byMonth).sort().toReversed();

        return (
          <Fragment key={year}>
            {index > 0 && <hr className="bg-zinc-500 dark:opacity-20" />}
            <div key={`timeline-yr-${year}`}>
              <p className="text-sm font-light text-[#008AFF]">{year}</p>

              <div className="flex flex-col gap-2">
                {months.map((month) => (
                  <Fragment key={`timeline-${year}-${month}`}>
                    <p className="text-xs font-light text-zinc-500">
                      {getMonthName(Number.parseInt(month))}
                    </p>

                    <ul className="flex list-none flex-col gap-2">
                      {byMonth[month].map((post) => (
                        <li
                          key={`post-link-${post.slug}`}
                          className="transition-opacity duration-200 hover:opacity-70"
                        >
                          <Link href={`/posts/${post.slug}`}>
                            <p className="text-xs font-light">{post.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                ))}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
