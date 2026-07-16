"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PublicPost } from "@/lib/news";
import { formatTranslation } from "@/lib/translations";
import {
  formatPostDate,
  getCategoryLabel,
  getContentPreview,
  getTypeSlug,
} from "./news-utils";

type CategoryStyle = {
  icon: LucideIcon;
  badge: string;
  accent: string;
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  announcement: {
    icon: Megaphone,
    badge: "bg-brand-green-50 text-brand-green-800",
    accent: "bg-brand-green-500",
  },
  hiring: {
    icon: BriefcaseBusiness,
    badge: "bg-brand-amber-50 text-brand-amber-700",
    accent: "bg-brand-amber-500",
  },
  event: {
    icon: CalendarDays,
    badge: "bg-sky-50 text-sky-800",
    accent: "bg-sky-500",
  },
  news: {
    icon: Newspaper,
    badge: "bg-stone-100 text-stone-700",
    accent: "bg-stone-500",
  },
};

export default function PostCard({ post }: { post: PublicPost }) {
  const { copy, locale } = useLanguage();
  const category = CATEGORY_STYLES[getTypeSlug(post)] ?? CATEGORY_STYLES.news;
  const CategoryIcon = category.icon;
  const categoryLabel = getCategoryLabel(post, copy.news.categories);
  const preview = getContentPreview(post.content, copy.news.emptyPreview);

  return (
    <article className="group relative flex min-h-full flex-col overflow-hidden border border-stone-200 bg-white transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-green-300 hover:shadow-[0_20px_55px_-30px_rgba(2,44,34,0.35)]">
      <div className={`absolute inset-x-0 top-0 z-10 h-1 ${category.accent}`} />

      <Link
        href={`/news/${encodeURIComponent(post.slug)}`}
        className="relative block aspect-[16/9] overflow-hidden bg-brand-green-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-400"
        aria-label={post.title}
      >
        {post.cover_image ? (
          <div
            role="img"
            aria-label={formatTranslation(copy.news.coverAlt, { title: post.title })}
            className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${JSON.stringify(post.cover_image)})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(110,231,183,0.3),transparent_34%),linear-gradient(135deg,#022c22,#065f46)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <span
          className={`absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${category.badge}`}
        >
          <CategoryIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {categoryLabel}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={post.created_at}
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500"
        >
          {formatPostDate(post.created_at, locale, copy.news.recentUpdate)}
        </time>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-stone-900 transition-colors group-hover:text-brand-green-800">
          <Link
            href={`/news/${encodeURIComponent(post.slug)}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-550">
          {preview}
        </p>
        <Link
          href={`/news/${encodeURIComponent(post.slug)}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
        >
          {copy.news.readMore}
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
