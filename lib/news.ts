import "server-only";

import type { ContentDocument } from "@/lib/post-content";

export type PostType = {
  id: number;
  name: string;
  slug: string;
};

export type PostImage = {
  id: string;
  image_url: string;
  image_role: "cover" | "gallery";
  caption?: string | null;
  sort_order?: number | null;
};

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  content?: string | null;
  content_json?: ContentDocument | null;
  type?: PostType | null;
  cover_image?: string | null;
  featured?: boolean;
  images?: PostImage[];
  created_at: string;
  updated_at: string;
};

const PUBLIC_API_TIMEOUT_MS = 10_000;

function getApiBaseUrl() {
  const baseUrl = process.env.API_BASE_URL?.trim().replace(/\/$/, "");

  if (!baseUrl) {
    throw new Error("Missing required environment variable: API_BASE_URL");
  }

  return baseUrl;
}

export type GetPublicPostsOptions = {
  limit?: number;
  typeSlug?: string;
};

export async function getPublicPosts({
  limit = 20,
  typeSlug,
}: GetPublicPostsOptions = {}): Promise<PublicPost[]> {
  const params = new URLSearchParams({
    limit: String(Math.min(Math.max(limit, 1), 100)),
  });
  if (typeSlug) params.set("type_slug", typeSlug);

  const response = await fetch(
    `${getApiBaseUrl()}/public/posts?${params.toString()}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(PUBLIC_API_TIMEOUT_MS),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Could not load posts.");
  }

  const payload: unknown = await response.json();
  return normalizeArray<PublicPost>(payload);
}

export async function fetchPublishedPostBySlug(
  slug: string,
): Promise<PublicPost | null> {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/public/posts/slug/${encodeURIComponent(slug)}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(PUBLIC_API_TIMEOUT_MS),
        cache: "no-store",
      },
    );

    if (!response.ok) return null;
    const payload: unknown = await response.json();
    return normalizeObject<PublicPost>(payload);
  } catch {
    return null;
  }
}

function normalizeArray<T>(value: unknown, depth = 0): T[] {
  if (Array.isArray(value)) return value as T[];

  if (isRecord(value) && depth < 2) {
    for (const key of ["data", "items", "results", "posts"]) {
      if (Array.isArray(value[key])) return value[key] as T[];
      if (isRecord(value[key])) {
        const nested = normalizeArray<T>(value[key], depth + 1);
        if (nested.length) return nested;
      }
    }
  }

  return [];
}

function normalizeObject<T>(value: unknown): T | null {
  if (!isRecord(value)) return null;

  for (const key of ["data", "item", "result", "post"]) {
    if (isRecord(value[key])) return value[key] as T;
  }

  return value as T;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
