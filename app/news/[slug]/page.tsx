import { notFound } from "next/navigation";
import NewsDetail from "@/components/news/NewsDetail";
import { fetchPublishedPostBySlug } from "@/lib/news";

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPublishedPostBySlug(slug);

  if (!post) notFound();

  return <NewsDetail post={post} />;
}
