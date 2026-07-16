"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Newspaper } from "lucide-react";
import type { PublicPost } from "@/lib/news";
import { useLanguage } from "@/components/LanguageProvider";
import PostCard from "./PostCard";
import {
  getTypeSlug,
  NEWS_FILTERS,
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

export default function News({
  posts,
  error = false,
  mode = "preview",
  limit = 3,
  excludePostId,
}: NewsProps) {
  const { copy } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<NewsFilter>("all");
  const isListing = mode === "listing";

  const visiblePosts = useMemo(() => {
    const availablePosts = sortPostsNewestFirst(
      posts.filter((post) => post.id !== excludePostId),
    );
    const filteredPosts =
      isListing && activeFilter !== "all"
        ? availablePosts.filter((post) => getTypeSlug(post) === activeFilter)
        : availablePosts;

    return isListing ? filteredPosts : filteredPosts.slice(0, Math.max(limit, 0));
  }, [activeFilter, excludePostId, isListing, limit, posts]);

  const eyebrow = isListing ? copy.news.listingEyebrow : copy.news.eyebrow;
  const title = isListing ? copy.news.listingTitle : copy.news.title;
  const description = isListing
    ? copy.news.listingDescription
    : copy.news.description;
  const Heading = isListing ? "h1" : "h2";
  const EmptyHeading = isListing ? "h2" : "h3";

  return (
    <section
      id={isListing ? undefined : "news"}
      className={`relative z-20 bg-earth-50 ${
        isListing ? "min-h-screen pb-24 pt-28 sm:pt-32" : "scroll-mt-20 py-20 sm:py-28"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          {isListing ? (
            <div
              className="flex max-w-full gap-2 overflow-x-auto pb-1"
              role="group"
              aria-label={copy.news.filterLabel}
            >
              {NEWS_FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`whitespace-nowrap border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 ${
                    activeFilter === filter
                      ? "border-brand-green-700 bg-brand-green-700 text-white"
                      : "border-stone-250 bg-white text-stone-600 hover:border-brand-green-500 hover:text-brand-green-800"
                  }`}
                >
                  {copy.news.filters[filter]}
                </button>
              ))}
            </div>
          ) : (
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

        {visiblePosts.length > 0 ? (
          <motion.div
            key={isListing ? activeFilter : "preview"}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </motion.div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
