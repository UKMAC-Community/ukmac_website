"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AboutSection from "@/components/AboutSection";
import FocusAreas from "@/components/FocusAreas";
import InteractiveMap from "@/components/InteractiveMap";
import PillarsSection from "@/components/PillarsSection";
import StatsOverview from "@/components/StatsOverview";
import TimelineSection from "@/components/TimelineSection";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPageClient() {
  const { copy } = useLanguage();
  const aboutPageCopy = copy.aboutPage;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      <section
        id="about-top"
        aria-labelledby="about-page-title"
        className="relative isolate overflow-hidden bg-brand-green-950 px-4 pb-20 pt-32 text-white sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(74,222,128,0.16),transparent_28%),linear-gradient(115deg,rgba(2,44,34,0.98)_0%,rgba(2,44,34,0.91)_50%,rgba(2,44,34,0.62)_100%)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-green-300">
              {aboutPageCopy.eyebrow}
            </span>
            <h1
              id="about-page-title"
              className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              {aboutPageCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-stone-200 sm:text-lg">
              {aboutPageCopy.description}
            </p>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="relative min-h-64 overflow-hidden border border-white/15 bg-white/5 lg:col-span-5 lg:min-h-80"
          >
            <Image
              src="/images/ukmac_cooperative_collaboration_1784000237090.jpg"
              alt={copy.home.about.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-green-950/45 via-transparent to-transparent"
            />
          </motion.figure>
        </div>
      </section>

      <StatsOverview
        id="about-overview"
        eyebrow={aboutPageCopy.statsEyebrow}
        title={aboutPageCopy.statsTitle}
      />
      <AboutSection id="background" />
      <TimelineSection id="vision-mission" />
      <PillarsSection id="objectives" />
      <FocusAreas id="members" />
      <InteractiveMap
        id="structure"
        leadershipId="leadership"
      />
    </main>
  );
}
