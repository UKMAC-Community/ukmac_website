import { motion } from "motion/react";
import { pillars } from "@/lib/data";
import {
  BriefcaseBusiness,
  Cpu,
  Landmark,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface PillarsSectionProps {
  id?: string;
}

export default function PillarsSection({ id = "pillars" }: PillarsSectionProps) {
  const { copy } = useLanguage();

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className={className} />;
      case "BriefcaseBusiness":
        return <BriefcaseBusiness className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  return (
    <section
      id={id}
      className="relative z-20 scroll-mt-24 bg-white py-24 text-stone-900 sm:scroll-mt-28 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            {copy.pillars.eyebrow}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            {copy.pillars.title}
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            {copy.pillars.description}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-stone-200">
          {pillars.map((pillar) => {
            const pillarCopy = copy.pillars.items[pillar.id];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col p-6 sm:p-8 border-r border-b border-stone-200"
              >
                {getIcon(pillar.iconName, "w-6 h-6 text-brand-green-700 stroke-[1.5] mb-8")}

                <h3 className="font-display font-bold text-2xl text-stone-900 mb-3 tracking-tight">
                  {pillarCopy.title}
                </h3>

                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  {pillarCopy.shortDescription}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 border-t border-stone-200 pt-6 font-display text-base font-semibold text-brand-green-700 sm:text-lg">
          {copy.pillars.conclusion}
        </p>

      </div>
    </section>
  );
}
