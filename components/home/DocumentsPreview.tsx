"use client";

import { BookOpenText, Clock3, FileText, ScrollText } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";

const DOCUMENT_ICONS = [ScrollText, FileText, BookOpenText] as const;

export default function DocumentsPreview() {
  const { copy } = useLanguage();
  const documentCopy = copy.home.documents;

  return (
    <section
      id="documents"
      aria-labelledby="documents-title"
      className="relative z-20 scroll-mt-24 border-b border-stone-200 bg-[#f4f5f1] py-20 sm:scroll-mt-28 sm:py-28"
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

        <div className="mt-10 border-x border-t border-stone-300 bg-white">
          {documentCopy.items.map((item, index) => {
            const Icon = DOCUMENT_ICONS[index] ?? FileText;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="grid gap-5 border-b border-stone-300 p-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-stone-200 text-brand-green-700">
                  <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 border border-stone-200 bg-stone-50 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                  <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
                  {documentCopy.status}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
