import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Quote, ShieldCheck, ShoppingBasket, Wheat } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const achievementIcons = [Wheat, ShoppingBasket, ShieldCheck] as const;

export default function TimelineSection() {
  const { copy } = useLanguage();
  const timelineCopy = copy.timeline;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="relative z-20 overflow-hidden bg-brand-green-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/5"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div className="space-y-4 lg:col-span-5">
            <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-300">
              {timelineCopy.eyebrow}
            </span>
            <h2
              id="timeline-title"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {timelineCopy.title}
            </h2>
          </div>

          <div className="space-y-7 lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-12">
            <div className="flex gap-4">
              <Quote aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-green-300" />
              <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                {timelineCopy.principle}
              </p>
            </div>
            <p className="border-l border-brand-green-400/50 pl-5 font-sans text-base leading-relaxed text-stone-300 sm:text-lg">
              {timelineCopy.vision}
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 sm:py-20"
        >
          <motion.h3
            variants={itemVariants}
            className="max-w-2xl font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {timelineCopy.achievementsTitle}
          </motion.h3>

          <div className="mt-9 grid border-l border-t border-white/10 md:grid-cols-3 sm:mt-12">
            {timelineCopy.achievements.map((achievement, index) => {
              const Icon = achievementIcons[index] ?? ShieldCheck;

              return (
                <motion.article
                  key={achievement.title}
                  variants={itemVariants}
                  className="group flex min-h-72 flex-col border-b border-r border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:bg-white/[0.055] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/15 text-brand-green-300 transition-colors group-hover:border-brand-green-300/50">
                      <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
                    </span>
                    <span aria-hidden="true" className="font-mono text-[10px] font-semibold tracking-widest text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-auto pt-12">
                    <h4 className="font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                      {achievement.title}
                    </h4>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-stone-300">
                      {achievement.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid overflow-hidden border border-white/10 lg:grid-cols-12"
        >
          <div className="flex items-center gap-5 bg-brand-green-700 p-6 sm:p-8 lg:col-span-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
            <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
              {timelineCopy.startingToday}
            </p>
          </div>

          <blockquote className="relative flex items-center bg-white p-7 sm:p-9 lg:col-span-7 lg:px-12">
            <Quote aria-hidden="true" className="absolute right-6 top-6 h-9 w-9 text-brand-green-900/10" />
            <p className="relative max-w-3xl font-display text-xl font-semibold leading-relaxed tracking-tight text-brand-green-950 sm:text-2xl">
              {timelineCopy.motto}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
