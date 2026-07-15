import UkMacWebsite from "@/components/UkMacWebsite";
import { getPublicPosts } from "@/lib/news";
import type { PublicPost } from "@/lib/news";

export default async function Home() {
  let posts: PublicPost[] = [];
  let postsError = false;

  try {
    posts = await getPublicPosts();
  } catch {
    postsError = true;
  }

  return <UkMacWebsite posts={posts} postsError={postsError} />;
}
