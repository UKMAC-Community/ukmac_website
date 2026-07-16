import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, Quote, ShieldCheck, ShoppingBasket, Wheat } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const achievementIcons = [Wheat, ShoppingBasket, ShieldCheck, ArrowRight] as const;

interface TimelineSectionProps {
  id?: string;
}

export default function TimelineSection({ id = "timeline" }: TimelineSectionProps) {
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
      id={id}
      aria-labelledby="timeline-title"
      className="relative z-20 scroll-mt-24 border-y border-stone-200 bg-white py-24 text-stone-900 sm:scroll-mt-28 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-stone-200 pb-14 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div className="space-y-4 lg:col-span-5">
            <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {timelineCopy.eyebrow}
            </span>
            <h2
              id="timeline-title"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
            >
              {timelineCopy.title}
            </h2>
          </div>

          <div className="space-y-7 lg:col-span-7 lg:border-l lg:border-stone-200 lg:pl-12">
            <div className="flex gap-4">
              <Quote aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-green-700" />
              <p className="font-display text-xl font-medium leading-relaxed text-stone-900 sm:text-2xl">
                {timelineCopy.principle}
              </p>
            </div>
            <p className="border-l border-brand-green-500/50 pl-5 font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
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
            className="max-w-2xl font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
          >
            {timelineCopy.achievementsTitle}
          </motion.h3>

          <div className="mt-9 grid border-l border-t border-stone-200 sm:grid-cols-2 sm:mt-12 lg:grid-cols-4">
            {timelineCopy.achievements.map((achievement, index) => {
              const Icon = achievementIcons[index] ?? ShieldCheck;

              return (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col border-b border-r border-stone-200 bg-[#fafaf8] p-6 transition-colors duration-300 hover:bg-stone-50 sm:p-8"
                >
                  <Icon aria-hidden="true" className="mb-8 h-6 w-6 stroke-[1.5] text-brand-green-700" />

                  <h4 className="mb-3 font-display text-xl font-bold leading-snug tracking-tight text-stone-900 sm:text-2xl">
                    {achievement.title}
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-stone-600">
                    {achievement.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
