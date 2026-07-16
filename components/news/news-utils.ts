import type { PublicPost } from "@/lib/news";
import { normalizeContentDocument, plainTextFromDocument } from "@/lib/post-content";

export const NEWS_FILTERS = [
  "all",
  "announcement",
  "news",
  "hiring",
  "event",
] as const;

export type NewsFilter = (typeof NEWS_FILTERS)[number];

export type NewsCategoryLabels = {
  announcement: string;
  news: string;
  hiring: string;
  event: string;
  update: string;
};

export function getTypeSlug(post: PublicPost) {
  return post.type?.slug?.trim().toLowerCase() || "news";
}

export function getCategoryLabel(
  post: PublicPost,
  labels: NewsCategoryLabels,
) {
  const slug = getTypeSlug(post);

  if (
    slug === "announcement" ||
    slug === "news" ||
    slug === "hiring" ||
    slug === "event"
  ) {
    return labels[slug];
  }

  return post.type?.name ?? labels.update;
}

export function sortPostsNewestFirst(posts: PublicPost[]) {
  return [...posts].sort((first, second) => {
    const dateDifference = getTimestamp(second.created_at) - getTimestamp(first.created_at);

    if (dateDifference !== 0) return dateDifference;
    return second.id.localeCompare(first.id);
  });
}

export function selectImportantAnnouncement(posts: PublicPost[]) {
  const orderedPosts = sortPostsNewestFirst(posts);

  return (
    orderedPosts.find(
      (post) => post.featured && getTypeSlug(post) === "announcement",
    ) ??
    orderedPosts.find((post) => post.featured) ??
    orderedPosts.find((post) => getTypeSlug(post) === "announcement") ??
    null
  );
}

export function getContentPreview(
  content: string | null | undefined,
  emptyPreview: string,
  maxLength = 150,
  contentJson?: unknown,
) {
  const document = normalizeContentDocument(contentJson, content);
  const normalized = plainTextFromDocument(document).replace(/\s+/g, " ").trim();
  if (!normalized) return emptyPreview;
  if (normalized.length <= maxLength) return normalized;

  const shortened = normalized.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const cutoff = lastSpace > maxLength * 0.6 ? lastSpace : maxLength;
  return `${shortened.slice(0, cutoff).trim()}…`;
}

export function formatPostDate(
  value: string,
  locale: string,
  recentUpdate: string,
  month: "short" | "long" = "short",
) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return recentUpdate;

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month,
    year: "numeric",
  }).format(date);
}

function getTimestamp(value: string) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}
