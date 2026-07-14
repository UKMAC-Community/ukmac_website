import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ukmacStats } from "@/lib/data";
import { Building2, Landmark, Users2, MapPin } from "lucide-react";

export default function StatsOverview() {
  const icons = [Building2, Landmark, Users2, MapPin];

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
    <section className="relative z-20 bg-white border-y border-stone-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-stone-200"
        >
          {ukmacStats.map((stat, idx) => {
            const IconComponent = icons[idx] || Building2;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`py-8 sm:py-12 lg:px-8 ${idx === 0 ? "lg:pl-0" : ""} ${
                  idx === ukmacStats.length - 1 ? "lg:pr-0" : ""
                }`}
              >
                <IconComponent className="w-5 h-5 text-stone-400 stroke-[1.5] mb-5" />

                <div className="font-display font-semibold text-4xl sm:text-5xl text-stone-900 tracking-tight leading-none tabular-nums">
                  {stat.value}
                </div>

                <div className="mt-3 h-px w-8 bg-brand-green-600" />

                <div className="mt-3 font-sans font-semibold text-[11px] text-stone-900 tracking-[0.12em] uppercase">
                  {stat.label}
                </div>
                <p className="mt-1.5 font-sans text-[13px] text-stone-500 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}