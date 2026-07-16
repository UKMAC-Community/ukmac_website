import UkMacWebsite from "@/components/UkMacWebsite";
import { getPublicPosts } from "@/lib/news";
import type { PublicPost } from "@/lib/news";

export default async function Home() {
  let posts: PublicPost[] = [];
  let postsError = false;
  let projectPosts: PublicPost[] = [];
  let projectPostsError = false;

  try {
    posts = await getPublicPosts();
  } catch {
    postsError = true;
  }

  try {
    projectPosts = await getPublicPosts({ typeSlug: "news" });
  } catch {
    projectPostsError = true;
  }

  return (
    <UkMacWebsite
      posts={posts}
      postsError={postsError}
      projectPosts={projectPosts}
      projectPostsError={projectPostsError}
    />
  );
}
