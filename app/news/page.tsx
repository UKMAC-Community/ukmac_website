import type { Metadata } from "next";
import News from "@/components/news/news";
import { getPublicPosts } from "@/lib/news";
import type { PublicPost } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Announcements | UKMAC",
  description:
    "Browse published UKMAC news, announcements, events, and career opportunities.",
};

export default async function NewsPage() {
  let posts: PublicPost[] = [];
  let postsError = false;

  try {
    posts = await getPublicPosts({ limit: 100 });
  } catch {
    postsError = true;
  }

  return (
    <main className="min-h-screen bg-earth-50">
      <News posts={posts} error={postsError} mode="listing" />
    </main>
  );
}
