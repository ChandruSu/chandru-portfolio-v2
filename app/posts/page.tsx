import { PostTimeline } from "@/components/PostTimeline";
import posts from "./(posts)/posts.json"

export default function Page() {
  return (
    <div className="flex justify-center h-full">
      <div className="max-w-[60rem] grow">
        <PostTimeline posts={posts} />
      </div>
    </div>
  );
}
