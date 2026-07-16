import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ukmacStats } from "@/lib/data";
import { CircleDollarSign, Target, Users2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const statIcons = {
  communities: Users2,
  cycleRevenue: CircleDollarSign,
  revenueTarget: Target,
} as const;

interface StatsOverviewProps {
  id?: string;
  eyebrow?: string;
  title?: string;
}

export default function StatsOverview({ id, eyebrow, title }: StatsOverviewProps) {
  const { copy } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.05,
        ease: "easeOut",
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id ?? "stats"}-title` : undefined}
      className="relative z-20 scroll-mt-24 border-y border-stone-200 bg-white px-4 sm:scroll-mt-28 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {eyebrow && title && (
          <header className="border-b border-stone-200 py-12 sm:py-16">
            <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {eyebrow}
            </span>
            <h2
              id={`${id ?? "stats"}-title`}
              className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl"
            >
              {title}
            </h2>
          </header>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-x sm:divide-y-0 divide-stone-200"
        >
          {ukmacStats.map((stat, idx) => {
            const IconComponent = statIcons[stat.id];
            const statCopy = copy.stats.items[stat.id];
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className={`py-8 sm:px-8 sm:py-12 ${idx === 0 ? "sm:pl-0" : ""} ${
                  idx === ukmacStats.length - 1 ? "sm:pr-0" : ""
                }`}
              >
                <IconComponent className="w-5 h-5 text-stone-400 stroke-[1.5] mb-5" />

                <div className="font-display font-semibold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-none tabular-nums">
                  {stat.value}
                </div>

                <div className="mt-3 h-px w-8 bg-brand-green-600" />

                <div className="mt-3 font-sans font-semibold text-[11px] text-stone-900 tracking-[0.12em] uppercase">
                  {statCopy.label}
                </div>
                <p className="mt-1.5 font-sans text-[13px] text-stone-500 leading-relaxed">
                  {statCopy.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="border-t border-stone-200 py-7 sm:py-8"
        >
          <div className="flex items-start gap-4 sm:items-center sm:gap-5">
            <span
              aria-hidden="true"
              className="mt-1 block h-10 w-1 shrink-0 rounded-full bg-brand-green-600 sm:mt-0"
            />
            <p className="max-w-5xl font-display text-base font-medium leading-relaxed text-stone-700 sm:text-lg">
              {copy.stats.conclusion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
