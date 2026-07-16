"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronDown, Newspaper } from "lucide-react";
import type { PublicPost } from "@/lib/news";
import { useLanguage } from "@/components/LanguageProvider";
import PostCard from "./PostCard";
import {
  getTypeSlug,
  sortPostsNewestFirst,
  type NewsFilter,
} from "./news-utils";

type NewsProps = {
  posts: PublicPost[];
  error?: boolean;
  mode?: "preview" | "listing";
  limit?: number;
  excludePostId?: string;
};

const CATEGORIES: ReadonlyArray<Exclude<NewsFilter, "all">> = [
  "hiring",
  "announcement",
  "news",
  "event",
];

const ROW_BATCH_SIZE = 7;

export default function News({
  posts,
  error = false,
  mode = "preview",
  limit = 3,
  excludePostId,
}: NewsProps) {
  const { copy } = useLanguage();
  const isListing = mode === "listing";
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});

  const availablePosts = useMemo(
    () => sortPostsNewestFirst(posts.filter((post) => post.id !== excludePostId)),
    [posts, excludePostId],
  );

  const previewPosts = useMemo(
    () => availablePosts.slice(0, Math.max(limit, 0)),
    [availablePosts, limit],
  );

  const groupedPosts = useMemo(() => {
    if (!isListing) return [];
    return CATEGORIES.map((category) => ({
      category,
      posts: availablePosts.filter((post) => getTypeSlug(post) === category),
    })).filter((group) => group.posts.length > 0);
  }, [availablePosts, isListing]);

  const handleLoadMore = (category: string) => {
    setVisibleCounts((current) => ({
      ...current,
      [category]: (current[category] ?? ROW_BATCH_SIZE) + ROW_BATCH_SIZE,
    }));
  };

  const eyebrow = isListing ? copy.news.listingEyebrow : copy.news.eyebrow;
  const title = isListing ? copy.news.listingTitle : copy.news.title;
  const description = isListing
    ? copy.news.listingDescription
    : copy.news.description;
  const Heading = isListing ? "h1" : "h2";
  const EmptyHeading = isListing ? "h2" : "h3";
  const isEmpty = isListing ? groupedPosts.length === 0 : previewPosts.length === 0;

  return (
    <section
      id={isListing ? undefined : "news"}
      className={`relative z-20 bg-earth-50 ${
        isListing ? "min-h-screen pb-24 pt-28 sm:pt-32" : "scroll-mt-20 py-20 sm:py-28"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isListing && (
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition-colors hover:text-brand-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {copy.news.backToHome}
          </Link>
        )}

        <div className="grid gap-7 border-b border-stone-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand-green-700">
              {eyebrow}
            </span>
            <Heading
              className={`${
                isListing ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl lg:text-5xl"
              } mt-3 font-display font-bold tracking-tight text-stone-900`}
            >
              {title}
            </Heading>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-550 sm:text-base">
              {description}
            </p>
          </div>

          {!isListing && (
            <Link
              href="/news"
              className="group inline-flex w-fit items-center gap-2 border-b border-brand-green-700 pb-1.5 text-sm font-bold text-brand-green-800 transition-colors hover:border-brand-green-400 hover:text-brand-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
            >
              {copy.news.viewAll}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>

        {isEmpty ? (
          <div className="mt-10 border border-dashed border-stone-250 bg-white px-6 py-14 text-center">
            <Newspaper
              className="mx-auto h-8 w-8 text-stone-400"
              aria-hidden="true"
            />
            <EmptyHeading className="mt-4 font-display text-lg font-semibold text-stone-800">
              {error ? copy.news.unavailableTitle : copy.news.emptyTitle}
            </EmptyHeading>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-500">
              {error
                ? copy.news.unavailableDescription
                : copy.news.emptyDescription}
            </p>
          </div>
        ) : isListing ? (
          <div className="mt-10 space-y-12">
            {groupedPosts.map((group) => {
              const visibleCount = visibleCounts[group.category] ?? ROW_BATCH_SIZE;
              const visibleGroupPosts = group.posts.slice(0, visibleCount);

              return (
                <div key={group.category}>
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="font-display text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
                      {copy.news.categories[group.category]}
                    </h2>
                    <span className="font-mono text-xs font-semibold text-stone-400">
                      {group.posts.length}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-5 overflow-x-auto pb-3">
                    {visibleGroupPosts.map((post) => (
                      <div key={post.id} className="w-72 flex-shrink-0 sm:w-80">
                        <PostCard post={post} />
                      </div>
                    ))}
                  </div>

                  {visibleCount < group.posts.length && (
                    <button
                      type="button"
                      onClick={() => handleLoadMore(group.category)}
                      className="mt-4 inline-flex items-center gap-2 border border-stone-250 bg-white px-4 py-2 text-xs font-semibold text-stone-600 transition-colors hover:border-brand-green-500 hover:text-brand-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
                    >
                      {copy.news.loadMore}
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {previewPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
