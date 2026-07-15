"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PublicPost } from "@/lib/news";
import { useLanguage } from "@/components/LanguageProvider";
import { formatTranslation } from "@/lib/translations";

type NewsProps = {
  posts: PublicPost[];
  error?: boolean;
};

type CategoryStyle = {
  icon: LucideIcon;
  badge: string;
  accent: string;
};

const FILTERS = ["all", "announcement", "news", "hiring", "event"] as const;

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  announcement: {
    icon: Megaphone,
    badge: "bg-brand-green-50 text-brand-green-700",
    accent: "bg-brand-green-500",
  },
  hiring: {
    icon: BriefcaseBusiness,
    badge: "bg-brand-amber-50 text-brand-amber-700",
    accent: "bg-brand-amber-500",
  },
  event: {
    icon: CalendarDays,
    badge: "bg-sky-50 text-sky-700",
    accent: "bg-sky-500",
  },
  news: {
    icon: Newspaper,
    badge: "bg-stone-100 text-stone-700",
    accent: "bg-stone-600",
  },
};

export default function News({ posts, error }: NewsProps) {
  const { copy } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePosts = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? posts
        : posts.filter((post) => getTypeSlug(post) === activeFilter);

    return filtered.slice(0, 6);
  }, [activeFilter, posts]);

  return (
    <section id="news" className="relative z-20 scroll-mt-20 bg-earth-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-stone-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-green-600">
              {copy.news.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
              {copy.news.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-550 sm:text-base">
              {copy.news.description}
            </p>
          </div>

          <div
            className="flex max-w-full gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label={copy.news.filterLabel}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`whitespace-nowrap border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 ${
                  activeFilter === filter
                    ? "border-brand-green-600 bg-brand-green-600 text-white"
                    : "border-stone-250 bg-white text-stone-600 hover:border-brand-green-500 hover:text-brand-green-700"
                }`}
              >
                {copy.news.filters[filter]}
              </button>
            ))}
          </div>
        </div>

        {visiblePosts.length > 0 ? (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
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
            <Newspaper className="mx-auto h-8 w-8 text-stone-400" aria-hidden="true" />
            <h3 className="mt-4 font-display text-lg font-semibold text-stone-800">
              {error ? copy.news.unavailableTitle : copy.news.emptyTitle}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-500">
              {error ? copy.news.unavailableDescription : copy.news.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function PostCard({ post }: { post: PublicPost }) {
  const { copy, locale } = useLanguage();
  const category = getCategoryStyle(post);
  const CategoryIcon = category.icon;
  const categoryLabel = getCategoryLabel(post, copy.news.categories);
  const preview = getContentPreview(post.content, copy.news.emptyPreview);

  return (
    <article className="group relative flex min-h-full flex-col overflow-hidden border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-green-200 hover:shadow-xl hover:shadow-brand-green-950/5">
      <div className={`absolute inset-x-0 top-0 z-10 h-1 ${category.accent}`} />

      <div className="relative aspect-[16/9] overflow-hidden bg-brand-green-950">
        {post.cover_image ? (
          <div
            role="img"
            aria-label={formatTranslation(copy.news.coverAlt, { title: post.title })}
            className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${JSON.stringify(post.cover_image)})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.35),transparent_45%),linear-gradient(135deg,#022c22,#065f46)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <span
          className={`absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${category.badge}`}
        >
          <CategoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.created_at}
          className="font-mono text-[10px] font-semibold uppercase tracking-wider text-stone-500"
        >
          {formatDate(post.created_at, locale, copy.news.recentUpdate)}
        </time>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-brand-green-700">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-550">
          {preview}
        </p>
        <Link
          href={`/news/${encodeURIComponent(post.slug)}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
        >
          {copy.news.readMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function getTypeSlug(post: PublicPost) {
  return post.type?.slug?.toLowerCase() ?? "news";
}

function getCategoryStyle(post: PublicPost) {
  const slug = getTypeSlug(post);
  return CATEGORY_STYLES[slug] ?? CATEGORY_STYLES.news;
}

function getCategoryLabel(
  post: PublicPost,
  labels: {
    announcement: string;
    news: string;
    hiring: string;
    event: string;
    update: string;
  },
) {
  const slug = getTypeSlug(post);

  if (slug === "announcement" || slug === "news" || slug === "hiring" || slug === "event") {
    return labels[slug];
  }

  return post.type?.name ?? labels.update;
}

function getContentPreview(content: string, emptyPreview: string, maxLength = 150) {
  const normalized = content.replace(/\s+/g, " ").trim();
  if (!normalized) return emptyPreview;
  if (normalized.length <= maxLength) return normalized;

  const shortened = normalized.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const cutoff = lastSpace > maxLength * 0.6 ? lastSpace : maxLength;
  return `${shortened.slice(0, cutoff).trim()}…`;
}

function formatDate(value: string, locale: string, recentUpdate: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return recentUpdate;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
