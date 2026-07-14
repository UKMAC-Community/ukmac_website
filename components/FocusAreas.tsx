import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { focusAreas } from "@/lib/data";
import { Sparkles, Award, BookOpen, Network, Check } from "lucide-react";

export default function FocusAreas() {
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Award":
        return <Award className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Network":
        return <Network className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="focus" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            Operational Strategies & Impact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            Comprehensive Support Across the Value Chain
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Through targeted field interventions, UKMAC fosters continuous development, ensuring local farming operations scale into sustainable commercial enterprises.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-stone-200"
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.id}
              variants={cardVariants}
              className="border-r border-b border-stone-200 p-6 sm:p-8 flex flex-col group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  {getIcon(area.iconName, "w-5 h-5 text-brand-green-700 stroke-[1.5]")}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
                    {area.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  {area.description}
                </p>

                {/* Sub features bullet points */}
                <div className="space-y-3 pt-5 border-t border-stone-200">
                  <h4 className="font-sans font-semibold text-xs text-stone-900 tracking-wider uppercase">
                    Key Deliverables
                  </h4>
                  <div className="space-y-2.5">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 mt-1 text-brand-green-700 flex-shrink-0" />
                        <span className="font-sans text-xs sm:text-sm text-stone-600 leading-normal">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}