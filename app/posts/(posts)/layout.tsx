import { ArrowIcon, GitHubIcon } from "@/components/Icons";
import posts from "./posts.json";
import Link from "next/link";
import { PostDetailsBar } from "@/components/PostDetailsBar";
import { PostTimeline } from "@/components/PostTimeline";
import { CommentsSection } from "@/components/CommentsSection";

export default function PostLayout({ children }: { children: React.ReactNode; params: any }) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full max-w-[70rem] max-md:grid-rows-[auto_auto_auto] max-md:gap-6 md:grid-cols-[1fr_3fr_1fr] md:gap-4">
        {/* Return and tags */}
        <div className="flex flex-col gap-5">
          <Link href="/posts">
            <div className="flex items-center gap-1.5 text-sm">
              <ArrowIcon size={16} className="brightness-0 dark:brightness-100" />
              <p>Back to posts</p>
            </div>
          </Link>

          <PostDetailsBar posts={posts} />
        </div>

        {/* MDX contents of post */}
        <div className="flex flex-col gap-5">
          {children}
          <CommentsSection />
        </div>

        {/* Links to other posts */}
        <div>
          <PostTimeline posts={posts} />
        </div>
      </div>
    </div>
  );
}
