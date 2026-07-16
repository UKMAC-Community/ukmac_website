"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LoadingNewsPost() {
  const { copy } = useLanguage();

  return (
    <main className="min-h-screen animate-pulse bg-earth-50 pt-16">
      <span className="sr-only" role="status">
        {copy.newsDetail.loading}
      </span>
      <div className="h-[32rem] bg-brand-green-950" />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-16 sm:px-6">
        <div className="h-4 w-full bg-stone-200" />
        <div className="h-4 w-full bg-stone-200" />
        <div className="h-4 w-4/5 bg-stone-200" />
      </div>
    </main>
  );
}
