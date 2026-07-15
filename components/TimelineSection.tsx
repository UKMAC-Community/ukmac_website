import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { timelineMilestones } from "@/lib/data";
import { Landmark, CalendarRange, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function TimelineSection() {
  const { copy } = useLanguage();
  const icons = [Landmark, CalendarRange, Award, CheckCircle, CheckCircle];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section id="timeline" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="max-w-2xl space-y-4 mb-20">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            {copy.timeline.eyebrow}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            {copy.timeline.title}
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            {copy.timeline.description}
          </p>
        </div>

        {/* Timeline Path Container: single rail, icons + cards both on the left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical rail */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200" />

          <div className="space-y-10 sm:space-y-12">
            {timelineMilestones.map((milestone, index) => {
              const IconComponent = icons[index] || CheckCircle;
              const milestoneCopy = copy.timeline.items[milestone.id];

              return (
                <motion.div key={milestone.year} variants={itemVariants} className="relative flex gap-6 sm:gap-8">
                  {/* Node on the rail */}
                  <div className="relative z-10 w-8 h-8 flex-shrink-0 bg-white border-2 border-brand-green-700 flex items-center justify-center text-brand-green-700">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Content, directly connected to the node */}
                  <div className="flex-1 border border-stone-200 p-6 sm:p-8 -mt-1">
                    <div className="font-mono text-xs font-semibold tracking-widest uppercase text-brand-green-700 mb-3">
                      {milestone.year}
                    </div>

                    <h3 className="font-display font-bold text-xl text-stone-900 tracking-tight leading-none mb-3">
                      {milestoneCopy.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {milestoneCopy.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
