"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Images } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PublicPost } from "@/lib/news";
import { sortPostsNewestFirst } from "@/components/news/news-utils";

type GalleryPreviewProps = {
  posts: PublicPost[];
};

type GalleryItem = {
  src: string;
  alt: string;
  href?: string;
};

const FALLBACK_IMAGES = [
  "/images/unspast/img1.webp",
  "/images/unspast/img2.webp",
  "/images/unspast/img3.webp",
  "/images/ukmac_cooperative_collaboration_1784000237090.jpg",
  "/images/ukmac_smart_innovation_1784000222966.jpg",
] as const;

const TILE_CLASSES = [
  "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
] as const;

export default function GalleryPreview({ posts }: GalleryPreviewProps) {
  const { copy } = useLanguage();
  const galleryCopy = copy.home.gallery;
  const items = buildGalleryItems(posts, galleryCopy.imageFallbackAlt);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="relative z-20 scroll-mt-24 border-y border-stone-200 bg-[#f4f5f1] py-20 text-stone-900 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-stone-300 pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {galleryCopy.eyebrow}
            </span>
            <h2
              id="gallery-title"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
            >
              {galleryCopy.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base lg:col-span-5">
            {galleryCopy.description}
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[14rem] gap-2 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, index) => {
            const tile = (
              <>
                <div
                  role="img"
                  aria-label={item.alt}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ backgroundImage: `url(${JSON.stringify(item.src)})` }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-green-950/60 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/75">
                  <Images aria-hidden="true" className="h-3.5 w-3.5" />
                  {String(index + 1).padStart(2, "0")}
                </span>
              </>
            );

            return (
              <motion.figure
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className={`group relative overflow-hidden bg-stone-200 ${TILE_CLASSES[index]}`}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    aria-label={item.alt}
                    className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-300"
                  >
                    {tile}
                  </Link>
                ) : (
                  tile
                )}
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function buildGalleryItems(posts: PublicPost[], fallbackAlt: string) {
  const items: GalleryItem[] = [];
  const seenSources = new Set<string>();

  for (const post of sortPostsNewestFirst(posts)) {
    const href = `/news/${encodeURIComponent(post.slug)}`;
    const postImages = [
      ...(post.cover_image ? [{ src: post.cover_image, alt: post.title }] : []),
      ...(post.images ?? []).map((image) => ({
        src: image.image_url,
        alt: image.caption?.trim() || post.title,
      })),
    ];

    for (const image of postImages) {
      if (!image.src || seenSources.has(image.src)) continue;
      seenSources.add(image.src);
      items.push({ ...image, href });
      if (items.length === TILE_CLASSES.length) return items;
    }
  }

  for (const [index, src] of FALLBACK_IMAGES.entries()) {
    if (items.length === TILE_CLASSES.length) break;
    if (seenSources.has(src)) continue;
    seenSources.add(src);
    items.push({ src, alt: `${fallbackAlt} ${index + 1}` });
  }

  return items;
}
