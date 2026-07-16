export type ContentMedia = {
  media_id: string;
  alt: string;
  caption?: string;
};

export type ParagraphBlock = {
  id: string;
  type: "paragraph";
  data: { text: string };
};

export type HeadingBlock = {
  id: string;
  type: "heading";
  data: {
    text: string;
    level: 2 | 3 | 4;
  };
};

export type ImageBlock = {
  id: string;
  type: "image";
  data: ContentMedia & {
    alignment: "center" | "wide";
    width?: number;
    crop?: boolean;
    crop_ratio?: number;
    crop_x?: number;
    crop_y?: number;
  };
};

export type GalleryBlock = {
  id: string;
  type: "gallery";
  data: {
    layout: "grid";
    columns: 2 | 3 | 4;
    images: ContentMedia[];
  };
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | GalleryBlock;

export type ContentDocument = {
  version: 1;
  blocks: ContentBlock[];
};

const MAX_BLOCKS = 100;
const MAX_TEXT_LENGTH = 20_000;
const MAX_ALT_LENGTH = 500;
const MAX_CAPTION_LENGTH = 1_000;

export function documentFromLegacy(content?: string | null): ContentDocument {
  const text = content?.trim() ?? "";

  return {
    version: 1,
    blocks: text
      ? [
          {
            id: "legacy-content",
            type: "paragraph",
            data: { text },
          },
        ]
      : [],
  };
}

export function normalizeContentDocument(
  value: unknown,
  fallbackContent?: string | null,
): ContentDocument {
  return parseContentDocument(value) ?? documentFromLegacy(fallbackContent);
}

const FILENAME_PATTERN = /\.(jpe?g|png|gif|webp|svg)$/i;

function isFilenameLike(text: string): boolean {
  return FILENAME_PATTERN.test(text);
}

export function referencedMediaIds(document: ContentDocument): string[] {
  const ids: string[] = [];

  for (const block of document.blocks) {
    if (block.type === "image") {
      ids.push(block.data.media_id);
    } else if (block.type === "gallery") {
      ids.push(...block.data.images.map((image) => image.media_id));
    }
  }

  return [...new Set(ids)];
}

export function plainTextFromDocument(document: ContentDocument): string {
  const parts: string[] = [];

  for (const block of document.blocks) {
    if (block.type === "paragraph" || block.type === "heading") {
      if (block.data.text.trim()) parts.push(block.data.text.trim());
      continue;
    }

    if (block.type === "image") {
      const label = block.data.caption?.trim() || block.data.alt.trim();
      if (label && !isFilenameLike(label)) parts.push(label);
      continue;
    }

    for (const image of block.data.images) {
      const label = image.caption?.trim() || image.alt.trim();
      if (label && !isFilenameLike(label)) parts.push(label);
    }
  }

  return parts.join("\n\n").trim();
}

export function parseContentDocument(value: unknown): ContentDocument | null {
  const candidate = parseJsonValue(value);

  if (
    !isRecord(candidate) ||
    (candidate.version !== undefined && candidate.version !== 1) ||
    !Array.isArray(candidate.blocks) ||
    candidate.blocks.length > MAX_BLOCKS
  ) {
    return null;
  }

  const blocks: ContentBlock[] = [];
  const blockIds = new Set<string>();

  for (const candidateBlock of candidate.blocks) {
    const block = parseBlock(candidateBlock);

    if (!block || blockIds.has(block.id)) return null;

    blockIds.add(block.id);
    blocks.push(block);
  }

  return { version: 1, blocks };
}

function parseBlock(value: unknown): ContentBlock | null {
  if (!isRecord(value) || !isBlockId(value.id) || !isRecord(value.data)) {
    return null;
  }

  if (value.type === "paragraph") {
    const text = parseText(value.data.text, MAX_TEXT_LENGTH);
    return text === null || !text.trim()
      ? null
      : { id: value.id, type: "paragraph", data: { text } };
  }

  if (value.type === "heading") {
    const text = parseText(value.data.text, 500);
    const level = value.data.level;

    if (
      text === null ||
      !text.trim() ||
      (level !== 2 && level !== 3 && level !== 4)
    ) {
      return null;
    }

    return { id: value.id, type: "heading", data: { text, level } };
  }

  if (value.type === "image") {
    const media = parseMedia(value.data);
    const alignment = value.data.alignment ?? "wide";
    const crop = value.data.crop ?? false;
    const cropRatio = value.data.crop_ratio ?? 4 / 3;
    const cropX = value.data.crop_x ?? 50;
    const cropY = value.data.crop_y ?? 50;
    const width = value.data.width;

    if (
      !media ||
      (alignment !== "center" && alignment !== "wide") ||
      typeof crop !== "boolean" ||
      !isNumberInRange(cropRatio, 0.1, 10) ||
      !isNumberInRange(cropX, 0, 100) ||
      !isNumberInRange(cropY, 0, 100) ||
      (width !== undefined && !isNumberInRange(width, 25, 100))
    ) {
      return null;
    }

    return {
      id: value.id,
      type: "image",
      data: {
        ...media,
        alignment,
        ...(width === undefined ? {} : { width: Math.round(width) }),
        ...(crop
          ? {
              crop: true,
              crop_ratio: Math.round(cropRatio * 1_000) / 1_000,
              crop_x: Math.round(cropX),
              crop_y: Math.round(cropY),
            }
          : {}),
      },
    };
  }

  if (value.type === "gallery") {
    const columns = value.data.columns;
    const layout = value.data.layout ?? "grid";
    const imagesValue = value.data.images;

    if (
      layout !== "grid" ||
      (columns !== 2 && columns !== 3 && columns !== 4) ||
      !Array.isArray(imagesValue) ||
      imagesValue.length < 2 ||
      imagesValue.length > 24
    ) {
      return null;
    }

    const images = imagesValue.map(parseMedia);
    if (images.some((image) => image === null)) return null;

    return {
      id: value.id,
      type: "gallery",
      data: {
        layout: "grid",
        columns,
        images: images as ContentMedia[],
      },
    };
  }

  return null;
}

function parseMedia(value: unknown): ContentMedia | null {
  if (!isRecord(value) || !isMediaId(value.media_id)) return null;

  const alt = parseText(value.alt ?? "", MAX_ALT_LENGTH);
  const caption = parseOptionalText(value.caption, MAX_CAPTION_LENGTH);

  if (alt === null || caption === null) return null;

  return {
    media_id: value.media_id,
    alt,
    ...(caption === undefined ? {} : { caption }),
  };
}

function parseJsonValue(value: unknown): unknown {
  if (typeof value !== "string") return value;

  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
}

function isMediaId(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= 200;
}

function isBlockId(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= 100;
}

function isNumberInRange(
  value: unknown,
  minimum: number,
  maximum: number,
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= minimum &&
    value <= maximum
  );
}

function parseText(value: unknown, maxLength: number): string | null {
  return typeof value === "string" && value.length <= maxLength ? value : null;
}

function parseOptionalText(
  value: unknown,
  maxLength: number,
): string | undefined | null {
  if (value === undefined || value === null || value === "") return undefined;
  return parseText(value, maxLength);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
