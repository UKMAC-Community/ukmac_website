"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, Images } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import PostContent from "@/components/news/PostContent";
import { formatTranslation } from "@/lib/translations";
import type { PublicPost } from "@/lib/news";
import {
  documentFromLegacy,
  parseContentDocument,
  referencedMediaIds,
} from "@/lib/post-content";

export default function NewsDetail({ post }: { post: PublicPost }) {
  const { copy, locale } = useLanguage();
  const typeName = getTypeName(post, copy.news.categories);
  const structuredDocument = parseContentDocument(post.content_json);
  const contentDocument =
    structuredDocument ?? documentFromLegacy(post.content);
  const galleryImages = structuredDocument
    ? []
    : (post.images?.filter((image) => image.image_role === "gallery") ?? []);

  // Mirrors the admin post view: skip the standalone cover figure when that
  // same image is already placed inline within the article body.
  const coverImage = post.images?.find((image) => image.image_role === "cover");
  const referencedIds = new Set(referencedMediaIds(contentDocument));
  const coverIsPlacedInArticle = coverImage
    ? referencedIds.has(coverImage.id)
    : false;
  const showCoverFigure = Boolean(post.cover_image) && !coverIsPlacedInArticle;

  return (
    <main className="min-h-screen bg-white pt-16 text-stone-900">
      <div className="mx-auto w-full max-w-4xl px-4 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {copy.newsDetail.back}
        </Link>

        <article className="mx-auto mt-8 w-full max-w-3xl sm:mt-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-600">
              {typeName}
            </span>
            {post.featured && (
              <span className="rounded-full bg-brand-green-50 px-2.5 py-1 text-brand-green-700">
                {copy.news.featuredLabel}
              </span>
            )}
          </div>

          <h1 className="mt-5 break-words font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-stone-900">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-2 text-xs text-stone-500">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.created_at}>
              {formatDate(post.created_at, locale, copy.news.recentUpdate)}
            </time>
          </div>

          {showCoverFigure && (
            <figure className="mt-9">
              {/* eslint-disable-next-line @next/next/no-img-element -- URLs come from the public media API; intrinsic size matches the admin post view */}
              <img
                src={post.cover_image ?? undefined}
                alt={formatTranslation(copy.news.coverAlt, { title: post.title })}
                className="h-auto w-full rounded-2xl bg-stone-100"
              />
            </figure>
          )}

          <div className="mt-9">
            <PostContent
              document={contentDocument}
              images={post.images ?? []}
              emptyText={copy.newsDetail.emptyContent}
              unavailableImageText={copy.newsDetail.imageUnavailable}
            />
          </div>

          {galleryImages.length > 0 && (
            <section
              className="mt-16 border-t border-stone-200 pt-10"
              aria-labelledby="gallery-heading"
            >
              <div className="mb-6 flex items-center gap-2">
                <Images className="h-5 w-5 text-brand-green-600" aria-hidden="true" />
                <h2
                  id="gallery-heading"
                  className="font-display text-xl font-bold text-stone-900"
                >
                  {copy.newsDetail.gallery}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryImages.map((image) => (
                  <figure key={image.id}>
                    <div
                      role="img"
                      aria-label={
                        image.caption ||
                        formatTranslation(copy.newsDetail.galleryAlt, {
                          title: post.title,
                        })
                      }
                      className="aspect-[4/3] bg-stone-200 bg-cover bg-center"
                      style={{ backgroundImage: `url(${JSON.stringify(image.image_url)})` }}
                    />
                    {image.caption && (
                      <figcaption className="mt-2 text-xs leading-relaxed text-stone-500">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}

function getTypeName(
  post: PublicPost,
  labels: {
    announcement: string;
    news: string;
    hiring: string;
    event: string;
    update: string;
  },
) {
  const slug = post.type?.slug?.toLowerCase();

  if (slug === "announcement" || slug === "news" || slug === "hiring" || slug === "event") {
    return labels[slug];
  }

  return post.type?.name ?? labels.update;
}

function formatDate(value: string, locale: string, recentUpdate: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return recentUpdate;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
