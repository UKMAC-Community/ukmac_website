import "server-only";

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
  content: string;
  type_id: number;
  type?: PostType | null;
  cover_image?: string | null;
  published: boolean;
  featured: boolean;
  images?: PostImage[];
  created_at: string;
  updated_at: string;
};

function getApiBaseUrl() {
  const baseUrl = process.env.API_BASE_URL?.trim().replace(/\/$/, "");

  if (!baseUrl) {
    throw new Error("Missing required environment variable: API_BASE_URL");
  }

  return baseUrl;
}

export async function getPublicPosts(limit = 20): Promise<PublicPost[]> {
  const response = await fetch(
    `${getApiBaseUrl()}/posts?limit=${Math.min(Math.max(limit, 1), 100)}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
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
      `${getApiBaseUrl()}/posts/slug/${encodeURIComponent(slug)}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) return null;
    return (await response.json()) as PublicPost;
  } catch {
    return null;
  }
}

function normalizeArray<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];

  if (isRecord(value)) {
    for (const key of ["data", "items", "results", "posts"]) {
      if (Array.isArray(value[key])) return value[key] as T[];
    }
  }

  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
