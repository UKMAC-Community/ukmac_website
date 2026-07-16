"use client";

import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function NewsPostNotFound() {
  const { copy } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center bg-earth-50 px-4 text-center">
      <div>
        <Newspaper className="mx-auto h-10 w-10 text-brand-green-600" aria-hidden="true" />
        <h1 className="mt-5 font-display text-3xl font-bold text-stone-900">
          {copy.notFound.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-550">
          {copy.notFound.description}
        </p>
        <Link
          href="/news"
          className="mt-7 inline-flex items-center gap-2 bg-brand-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-green-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {copy.notFound.action}
        </Link>
      </div>
    </main>
  );
}
