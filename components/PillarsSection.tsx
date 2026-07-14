import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { pillars } from "@/lib/data";
import type { Pillar } from "@/lib/data";
import { Cpu, Leaf, TrendingUp, X, CheckCircle, ArrowRight } from "lucide-react";

export default function PillarsSection() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Cpu":
        return <Cpu className={className} />;
      case "Leaf":
        return <Leaf className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  // Associate generated images with specific pillars
  const getPillarImage = (id: string) => {
    switch (id) {
      case "modern":
        return "/images/ukmac_smart_innovation_1784000222966.jpg";
      case "sustainable":
        return "/images/cambodia_agriculture_hero_1784000209131.jpg";
      case "competitive":
        return "/images/ukmac_cooperative_collaboration_1784000237090.jpg";
      default:
        return "/images/ukmac_smart_innovation_1784000222966.jpg";
    }
  };

  const getPillarHighlights = (id: string) => {
    switch (id) {
      case "modern":
        return [
          "IoT Soil NPK and automated soil sensors",
          "Multispectral crop imagery via customized flight logs",
          "Precision pesticide and fertilizer delivery systems",
          "Mobile cloud ledger software for local communities"
        ];
      case "sustainable":
        return [
          "Strict organic certification and compliance mapping",
          "Solar-powered micro-drip field installations",
          "Drought and flood resilient Jasmine rice strains",
          "Zero-waste agricultural recycling cooperatives"
        ];
      case "competitive":
        return [
          "Direct contract-farming dispute mitigation guidelines",
          "Unified cold-storage hubs near national borders",
          "Direct logistics integration to export container terminals",
          "Global GAP certification counseling services"
        ];
      default:
        return [];
    }
  };

  return (
    <section id="pillars" className="py-24 sm:py-32 bg-white text-stone-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            Our Strategic Directives
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            The Three Pillars of UKMAC
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Guiding Cambodia&apos;s agricultural communities toward smart modernity, climate resilience, and unfettered access to competitive global markets.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-stone-200 border-y border-stone-200">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col p-6 sm:p-8 group"
            >
              <div className="flex items-center justify-between mb-8">
                {getIcon(pillar.iconName, "w-6 h-6 text-brand-green-700 stroke-[1.5]")}

                {/* Metric */}
                <div className="text-right">
                  <div className="font-display font-semibold text-xl text-stone-900 tabular-nums">{pillar.metric}</div>
                  <div className="font-sans text-[10px] text-stone-500 font-medium uppercase tracking-wider">{pillar.metricLabel}</div>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-stone-900 mb-3 tracking-tight">
                {pillar.title}
              </h3>

              <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8 flex-1">
                {pillar.shortDesc}
              </p>

              <div className="pt-6 border-t border-stone-200">
                <button
                  onClick={() => setSelectedPillar(pillar)}
                  className="font-sans text-xs font-semibold text-stone-700 group-hover:text-brand-green-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  View details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white border border-stone-200 overflow-hidden shadow-xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Left Image / Visuals */}
              <div className="md:w-1/2 relative min-h-[220px] md:min-h-full bg-zinc-950 flex flex-col justify-end">
                <Image
                  src={getPillarImage(selectedPillar.id)}
                  alt={selectedPillar.title}
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
                    {selectedPillar.metricLabel}
                  </p>
                </div>
              </div>

              {/* Modal Right Editorial */}
              <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-8 overflow-y-auto bg-white">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-brand-green-700 font-semibold tracking-widest uppercase block">
                    Operational Directive
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-stone-900 tracking-tight leading-tight">
                    {selectedPillar.title}
                  </h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {selectedPillar.longDesc}
                  </p>
                </div>

                {/* Sub-initiatives List */}
                <div className="space-y-4">
                  <h4 className="font-sans font-semibold text-sm text-stone-900 tracking-wide">
                    Implementation Milestones & Standards
                  </h4>
                  <div className="divide-y divide-stone-200">
                    {getPillarHighlights(selectedPillar.id).map((item, index) => (
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
                    onClick={() => setSelectedPillar(null)}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-brand-green-800 text-white font-sans font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Acknowledge Directive
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