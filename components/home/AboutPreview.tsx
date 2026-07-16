"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPreview() {
  const { copy } = useLanguage();
  const aboutCopy = copy.home.about;

  return (
    <section
      id="about-preview"
      aria-labelledby="about-preview-title"
      className="relative z-20 scroll-mt-24 overflow-hidden border-y border-stone-200 bg-[#f3f5f0] py-20 sm:scroll-mt-28 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-stretch px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative min-h-[20rem] overflow-hidden bg-brand-green-950 sm:min-h-[28rem] lg:col-span-7 lg:min-h-[34rem]"
        >
          <Image
            src="/images/ukmac_cooperative_collaboration_1784000237090.jpg"
            alt={aboutCopy.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-green-950/60 via-transparent to-transparent"
          />
          <figcaption className="absolute bottom-0 left-0 border-t border-r border-white/20 bg-brand-green-950/75 px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:px-6">
            UKMAC
          </figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="flex flex-col justify-center border-x border-b border-stone-200 bg-white p-7 sm:p-10 lg:col-span-5 lg:border-b lg:border-l-0 lg:border-t lg:p-12 xl:p-16"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
            {aboutCopy.eyebrow}
          </span>
          <h2
            id="about-preview-title"
            className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem]"
          >
            {aboutCopy.title}
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
            {aboutCopy.description}
          </p>

          <div className="mt-9 border-t border-stone-200 pt-7">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-sans text-sm font-bold text-brand-green-800 transition-colors hover:text-brand-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 focus-visible:ring-offset-4"
            >
              <span>{aboutCopy.learnMore}</span>
              <span className="flex h-9 w-9 items-center justify-center border border-brand-green-800 transition-colors group-hover:border-brand-green-600 group-hover:bg-brand-green-600 group-hover:text-white">
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
