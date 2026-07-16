import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { pillars } from "@/lib/data";
import type { Pillar } from "@/lib/data";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle,
  Cpu,
  Landmark,
  TrendingUp,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface PillarsSectionProps {
  id?: string;
}

export default function PillarsSection({ id = "pillars" }: PillarsSectionProps) {
  const { copy } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

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
                className="flex flex-col p-6 sm:p-8 group border-r border-b border-stone-200"
              >
              <div className="flex items-center justify-between mb-8">
                {getIcon(pillar.iconName, "w-6 h-6 text-brand-green-700 stroke-[1.5]")}

                {/* Metric */}
                <div className="text-right">
                  <div className="font-display font-semibold text-xl text-stone-900 tabular-nums">{pillar.metric}</div>
                  <div className="font-sans text-[10px] text-stone-500 font-medium uppercase tracking-wider">{pillarCopy.metricLabel}</div>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-stone-900 mb-3 tracking-tight">
                {pillarCopy.title}
              </h3>

              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8 flex-1">
                {pillarCopy.shortDescription}
              </p>

              <div className="pt-6 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setSelectedPillar(pillar)}
                  aria-haspopup="dialog"
                  aria-controls={`pillar-dialog-${pillar.id}`}
                  className="font-sans text-xs font-semibold text-stone-700 group-hover:text-brand-green-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copy.pillars.viewDetails}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="absolute inset-0 bg-stone-900/60"
            />

            {/* Modal Container */}
            <motion.div
              id={`pillar-dialog-${selectedPillar.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`pillar-dialog-title-${selectedPillar.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white border border-stone-200 overflow-hidden shadow-xl z-10 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-y-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                aria-label={copy.pillars.closeDetails}
                className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Left Image / Visuals */}
              <div className="md:w-1/2 relative min-h-[220px] md:min-h-full bg-zinc-950 flex flex-col justify-end">
                <Image
                  src={selectedPillar.image}
                  alt={copy.pillars.items[selectedPillar.id].title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
                />
                {/* Visual Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent z-10" />

                {/* Stats Overlay on Image */}
                <div className="relative z-10 p-6 sm:p-8 space-y-2 border-t-2 border-brand-green-500">
                  {getIcon(selectedPillar.iconName, "w-5 h-5 text-white mb-1")}
                  <div className="font-display font-semibold text-3xl text-white tabular-nums">
                    {selectedPillar.metric}
                  </div>
                  <p className="font-sans text-xs text-zinc-300 font-medium tracking-wide leading-relaxed">
                    {copy.pillars.items[selectedPillar.id].metricLabel}
                  </p>
                </div>
              </div>

              {/* Modal Right Editorial */}
              <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-8 overflow-y-auto bg-white">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-brand-green-700 font-semibold tracking-widest uppercase block">
                    {copy.pillars.operationalDirective}
                  </span>
                  <h3
                    id={`pillar-dialog-title-${selectedPillar.id}`}
                    className="font-display font-bold text-2xl sm:text-3xl text-stone-900 tracking-tight leading-tight"
                  >
                    {copy.pillars.items[selectedPillar.id].title}
                  </h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {copy.pillars.items[selectedPillar.id].longDescription}
                  </p>
                </div>

                {/* Sub-initiatives List */}
                <div className="space-y-4">
                  <h4 className="font-sans font-semibold text-sm text-stone-900 tracking-wide">
                    {copy.pillars.milestonesTitle}
                  </h4>
                  <div className="divide-y divide-stone-200">
                    {copy.pillars.items[selectedPillar.id].highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5 py-2.5 first:pt-0">
                        <CheckCircle className="w-4 h-4 text-brand-green-700 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-xs text-stone-600 leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedPillar(null)}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-brand-green-800 text-white font-sans font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {copy.pillars.acknowledge}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
