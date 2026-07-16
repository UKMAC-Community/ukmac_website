"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";

const DOCUMENT_IMAGES: Array<string | null> = [
  "/images/documents/governance-certificate.jpg",
  null,
  null,
];

interface DocumentsSectionProps {
  id?: string;
}

export default function DocumentsSection({ id = "documents" }: DocumentsSectionProps) {
  const { copy } = useLanguage();
  const documentCopy = copy.documents;

  const publishedItems = documentCopy.items
    .map((item, index) => ({ item, image: DOCUMENT_IMAGES[index] }))
    .filter((entry): entry is { item: (typeof documentCopy.items)[number]; image: string } =>
      Boolean(entry.image),
    );

  return (
    <section
      id={id}
      aria-labelledby="documents-title"
      className="relative z-20 scroll-mt-24 border-y border-stone-200 bg-[#f4f5f1] py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {documentCopy.eyebrow}
            </span>
            <h2
              id="documents-title"
              className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
            >
              {documentCopy.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base lg:col-span-5">
            {documentCopy.description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-start gap-10">
          {publishedItems.map(({ item, image }, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="w-44 sm:w-48"
            >
              <h3 className="font-display text-base font-bold text-stone-900">
                {item.title}
              </h3>

              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-3 block aspect-[895/1280] border border-stone-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
              >
                <span className="sr-only">{copy.footer.opensNewTab}</span>
                <Image
                  src={image}
                  alt={item.title}
                  fill
                  sizes="12rem"
                  className="object-cover"
                />
              </a>

              <p className="mt-3 text-xs leading-relaxed text-stone-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
