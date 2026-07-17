"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AboutSection from "@/components/AboutSection";
import CoverageMapSection from "@/components/CoverageMapSection";
import DocumentsSection from "@/components/DocumentsSection";
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
        className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-brand-green-950 px-4 pb-12 pt-32 text-white sm:min-h-[30rem] sm:px-6 sm:pb-16 sm:pt-36 lg:min-h-[36rem] lg:px-8 lg:pb-20 lg:pt-40"
      >
        <Image
          src="/images/about_cover1.webp"
          alt={copy.home.about.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 [background:linear-gradient(100deg,rgba(2,44,34,0.96)_0%,rgba(2,44,34,0.88)_30%,rgba(2,44,34,0.5)_58%,rgba(2,44,34,0.1)_82%,rgba(2,44,34,0)_100%)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-7xl"
        >
          <div className="max-w-2xl">
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
          </div>
        </motion.div>
      </section>

      <StatsOverview
        id="about-overview"
        eyebrow={aboutPageCopy.statsEyebrow}
        title={aboutPageCopy.statsTitle}
      />
      <AboutSection id="background" />
      <PillarsSection id="objectives" />
      <FocusAreas id="members" />
      <InteractiveMap
        id="structure"
        leadershipId="leadership"
      />
      <TimelineSection id="vision-mission" />
      <DocumentsSection id="documents" />
      <CoverageMapSection id="coverage" />
    </main>
  );
}
