"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Images, Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { formatTranslation } from "@/lib/translations";
import type { PublicPost } from "@/lib/news";

export default function NewsDetail({ post }: { post: PublicPost }) {
  const { copy, language, locale, toggleLanguage } = useLanguage();
  const typeName = getTypeName(post, copy.news.categories);
  const galleryImages =
    post.images?.filter((image) => image.image_role === "gallery") ?? [];

  return (
    <main className="min-h-screen bg-earth-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/#news"
            className="flex min-w-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
          >
            <span className="relative h-11 w-11 flex-shrink-0">
              <Image
                src="/logo/UKMAC_Logo.webp"
                alt={copy.brand.logoAlt}
                fill
                sizes="44px"
                className="object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base font-extrabold tracking-wide">
                UKMAC
              </span>
              <span className="hidden truncate text-[8px] font-semibold uppercase tracking-tight text-stone-500 sm:block">
                {copy.brand.name}
              </span>
            </span>
          </Link>

          <div className="flex flex-shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === "en"
                  ? copy.language.switchToKhmer
                  : copy.language.switchToEnglish
              }
              className="inline-flex items-center gap-1.5 border border-stone-200 px-3 py-2 text-xs font-bold text-stone-700 transition-colors hover:border-brand-green-500 hover:text-brand-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              {language === "en"
                ? copy.language.khmerShort
                : copy.language.englishShort}
            </button>
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-700 hover:text-brand-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{copy.newsDetail.allUpdates}</span>
            </Link>
          </div>
        </div>
      </header>

      <article>
        <div className="bg-brand-green-950 text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex min-h-[24rem] flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <span className="w-fit bg-brand-green-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-green-200">
                {typeName}
              </span>
              <h1 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-2 text-xs text-brand-green-100/75">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.created_at}>
                  {formatDate(post.created_at, locale, copy.news.recentUpdate)}
                </time>
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden bg-brand-green-900 lg:min-h-full">
              {post.cover_image ? (
                <div
                  role="img"
                  aria-label={formatTranslation(copy.news.coverAlt, { title: post.title })}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${JSON.stringify(post.cover_image)})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.4),transparent_45%),linear-gradient(135deg,#022c22,#065f46)]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950/45 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="whitespace-pre-wrap text-base leading-8 text-stone-700 sm:text-lg">
            {post.content}
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

          <div className="mt-16 border-t border-stone-200 pt-8">
            <Link
              href="/#news"
              className="inline-flex items-center gap-2 border border-brand-green-600 px-5 py-3 text-sm font-bold text-brand-green-700 transition-colors hover:bg-brand-green-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {copy.newsDetail.back}
            </Link>
          </div>
        </div>
      </article>
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
