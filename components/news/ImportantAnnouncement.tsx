"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PublicPost } from "@/lib/news";
import { formatTranslation } from "@/lib/translations";
import {
  formatPostDate,
  getCategoryLabel,
  getContentPreview,
  selectImportantAnnouncement,
} from "./news-utils";

type ImportantAnnouncementProps = {
  posts?: PublicPost[];
  post?: PublicPost | null;
};

export default function ImportantAnnouncement({
  posts = [],
  post,
}: ImportantAnnouncementProps) {
  const { copy, locale } = useLanguage();
  const selectedPost = post === undefined ? selectImportantAnnouncement(posts) : post;

  if (!selectedPost) return null;

  const categoryLabel = getCategoryLabel(selectedPost, copy.news.categories);
  const preview = getContentPreview(
    selectedPost.content,
    copy.news.emptyPreview,
    240,
    selectedPost.content_json,
  );

  return (
    <section
      id="important-announcement"
      className="relative z-20 scroll-mt-20 overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-6 border-b border-stone-200 pb-5">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-brand-green-700">
              {copy.news.importantEyebrow}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              {copy.news.importantTitle}
            </h2>
          </div>
          <Megaphone
            className="hidden h-7 w-7 text-brand-green-600 sm:block"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <article className="group grid overflow-hidden border border-stone-200 bg-stone-50 text-stone-900 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex items-center justify-center overflow-hidden bg-stone-100 p-4 lg:order-2 lg:p-6">
            {selectedPost.cover_image ? (
              // eslint-disable-next-line @next/next/no-img-element -- intrinsic size + max-height lets the card fit the poster without cropping or ballooning
              <img
                src={selectedPost.cover_image}
                alt={formatTranslation(copy.news.coverAlt, {
                  title: selectedPost.title,
                })}
                className="max-h-56 w-auto max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:max-h-64 lg:max-h-72"
              />
            ) : (
              <div className="min-h-64 w-full bg-[radial-gradient(circle_at_72%_24%,rgba(16,185,129,0.12),transparent_45%),linear-gradient(135deg,#f0fdf4,#f5f5f4)]" />
            )}
          </div>

          <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-stone-200" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-700">
                <span className="inline-flex items-center gap-1.5">
                  <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
                  {categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-stone-500">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={selectedPost.created_at}>
                    {formatPostDate(
                      selectedPost.created_at,
                      locale,
                      copy.news.recentUpdate,
                    )}
                  </time>
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl">
                {selectedPost.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                {preview}
              </p>
              <Link
                href={`/news/${encodeURIComponent(selectedPost.slug)}`}
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-brand-green-600 pb-1.5 text-sm font-bold text-stone-900 transition-colors hover:border-brand-green-800 hover:text-brand-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400"
              >
                {copy.news.readMore}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export { selectImportantAnnouncement } from "./news-utils";
