"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";

const PROJECT_IMAGES = [
  "/images/unspast/img2.webp",
  "/images/ukmac_cooperative_collaboration_1784000237090.jpg",
  "/images/ukmac_smart_innovation_1784000222966.jpg",
] as const;

export default function ProjectsActivities() {
  const { copy } = useLanguage();
  const projectCopy = copy.home.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative z-20 scroll-mt-24 bg-white py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-stone-200 pb-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {projectCopy.eyebrow}
            </span>
            <h2
              id="projects-title"
              className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
            >
              {projectCopy.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base lg:col-span-5">
            {projectCopy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 lg:grid-cols-3">
          {projectCopy.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-green-950">
                <Image
                  src={PROJECT_IMAGES[index]}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-green-950/45 via-transparent to-transparent"
                />
                <span className="absolute bottom-4 left-5 font-mono text-[10px] font-semibold tracking-[0.16em] text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold leading-snug text-stone-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/about#objectives"
            className="group inline-flex items-center gap-2 border-b border-brand-green-700 pb-1.5 text-sm font-bold text-brand-green-800 transition-colors hover:border-brand-green-400 hover:text-brand-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500"
          >
            {projectCopy.learnMore}
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
