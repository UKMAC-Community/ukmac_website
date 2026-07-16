import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex border-t border-l border-stone-200">
          {pillars.map((pillar) => {
            const pillarCopy = copy.pillars.items[pillar.id];
            const isHovered = hoveredId === pillar.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ flexGrow: isHovered ? 2.4 : isDimmed ? 0.7 : 1, flexBasis: 0 }}
                className="group relative isolate flex h-[280px] min-w-0 flex-col overflow-hidden p-6 sm:p-8 border-r border-b border-stone-200 transition-[flex-grow] duration-500 ease-in-out"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 -z-10 object-cover opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-stone-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {getIcon(
                  pillar.iconName,
                  "w-6 h-6 text-brand-green-700 stroke-[1.5] mb-4 transition-colors duration-500 group-hover:text-white",
                )}

                <h3 className="font-display font-bold text-2xl text-stone-900 mb-3 tracking-tight transition-colors duration-500 group-hover:text-white line-clamp-2">
                  {pillarCopy.title}
                </h3>

                <p
                  className={`font-sans text-sm text-stone-600 leading-relaxed transition-all duration-300 group-hover:text-stone-100 ${
                    isDimmed ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
                  }`}
                >
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
