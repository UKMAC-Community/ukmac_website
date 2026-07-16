"use client";

import { useState } from "react";
import type { ContentDocument, ContentMedia } from "@/lib/post-content";

type RenderImage = {
  id: string;
  image_url: string;
  caption?: string | null;
};

type PostContentProps = {
  document: ContentDocument;
  images: RenderImage[];
  emptyText: string;
  unavailableImageText: string;
};

export default function PostContent({
  document,
  images,
  emptyText,
  unavailableImageText,
}: PostContentProps) {
  const imageById = new Map(images.map((image) => [image.id, image]));

  if (!document.blocks.length) {
    return (
      <p className="mx-auto max-w-3xl text-base leading-8 text-stone-500 sm:text-lg">
        {emptyText}
      </p>
    );
  }

  return (
    <div className="text-stone-700">
      {document.blocks.map((block) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={block.id}
              className="mx-auto mb-6 max-w-3xl whitespace-pre-wrap text-base leading-8 sm:text-lg sm:leading-9"
            >
              {block.data.text}
            </p>
          );
        }

        if (block.type === "heading") {
          const headingClassName =
            block.data.level === 2
              ? "mt-14 text-3xl sm:text-4xl"
              : block.data.level === 3
                ? "mt-12 text-2xl sm:text-3xl"
                : "mt-10 text-xl sm:text-2xl";

          if (block.data.level === 2) {
            return (
              <h2
                key={block.id}
                className={`mx-auto mb-5 max-w-3xl font-display font-bold leading-tight tracking-tight text-stone-900 ${headingClassName}`}
              >
                {block.data.text}
              </h2>
            );
          }

          if (block.data.level === 3) {
            return (
              <h3
                key={block.id}
                className={`mx-auto mb-4 max-w-3xl font-display font-bold leading-tight tracking-tight text-stone-900 ${headingClassName}`}
              >
                {block.data.text}
              </h3>
            );
          }

          return (
            <h4
              key={block.id}
              className={`mx-auto mb-4 max-w-3xl font-display font-bold leading-tight tracking-tight text-stone-900 ${headingClassName}`}
            >
              {block.data.text}
            </h4>
          );
        }

        if (block.type === "image") {
          const image = imageById.get(block.data.media_id);

          return (
            <figure
              key={block.id}
              className="mx-auto my-10"
              style={{
                width: `${block.data.width ?? 100}%`,
                maxWidth: "100%",
              }}
            >
              <ArticleImage
                media={block.data}
                imageUrl={image?.image_url}
                fallbackCaption={image?.caption}
                unavailableText={unavailableImageText}
                crop={Boolean(block.data.crop)}
                cropRatio={block.data.crop_ratio}
                cropX={block.data.crop_x}
                cropY={block.data.crop_y}
              />
            </figure>
          );
        }

        const gridClass =
          block.data.columns === 4
            ? "sm:grid-cols-2 xl:grid-cols-4"
            : block.data.columns === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2";

        return (
          <div
            key={block.id}
            className={`my-10 grid grid-cols-1 gap-4 ${gridClass}`}
          >
            {block.data.images.map((media, imageIndex) => {
              const image = imageById.get(media.media_id);

              return (
                <figure key={`${media.media_id}-${imageIndex}`}>
                  <ArticleImage
                    media={media}
                    imageUrl={image?.image_url}
                    fallbackCaption={image?.caption}
                    unavailableText={unavailableImageText}
                  />
                </figure>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function ArticleImage({
  media,
  imageUrl,
  fallbackCaption,
  unavailableText,
  crop = false,
  cropRatio = 4 / 3,
  cropX = 50,
  cropY = 50,
}: {
  media: ContentMedia;
  imageUrl?: string;
  fallbackCaption?: string | null;
  unavailableText: string;
  crop?: boolean;
  cropRatio?: number;
  cropX?: number;
  cropY?: number;
}) {
  const safeImageUrl = getSafeImageUrl(imageUrl);
  const caption = media.caption?.trim() || fallbackCaption?.trim();
  const [failedToLoad, setFailedToLoad] = useState(false);

  if (!safeImageUrl || failedToLoad) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-100 px-5 text-center text-sm text-stone-500">
        {unavailableText}
      </div>
    );
  }

  return (
    <>
      {/* URLs come from the public media API and can use multiple storage hosts. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={safeImageUrl}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailedToLoad(true)}
        className={`block w-full rounded-2xl bg-stone-100 ${
          crop ? "object-cover" : "h-auto"
        }`}
        style={
          crop
            ? {
                aspectRatio: cropRatio,
                objectFit: "cover",
                objectPosition: `${cropX}% ${cropY}%`,
              }
            : undefined
        }
      />
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs leading-relaxed text-stone-500">
          {caption}
        </figcaption>
      )}
    </>
  );
}

function getSafeImageUrl(value?: string) {
  if (!value) return undefined;
  if (value.startsWith("/")) return value;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? value : undefined;
  } catch {
    return undefined;
  }
}
