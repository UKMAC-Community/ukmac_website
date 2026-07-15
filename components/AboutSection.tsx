import { motion } from "motion/react";
import { Landmark, CheckCircle2, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSection() {
  const { copy } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">

          {/* Left Column: Mission Editorial */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
                {copy.about.eyebrow}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
                {copy.about.title}
              </h2>
            </div>

            <p className="font-sans text-lg sm:text-xl text-stone-800 leading-relaxed font-light">
              {copy.about.introBefore}{" "}
              <span className="font-semibold text-stone-900">{copy.about.lawName}</span>
            </p>

            <blockquote className="border-l-2 border-stone-300 pl-6 py-1 font-sans text-stone-700 text-base sm:text-lg leading-relaxed italic">
              {copy.about.quote}
            </blockquote>

            <p className="font-sans text-stone-600 leading-relaxed text-sm sm:text-base font-light">
              {copy.about.description}
            </p>
          </div>

          {/* Right Column: Legal Framework Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="border-t-2 border-brand-green-700 pt-6 pb-2 flex items-center gap-2.5">
                <Landmark className="w-5 h-5 text-brand-green-700" />
                <h3 className="font-display font-semibold text-lg text-stone-900">
                  {copy.about.foundationTitle}
                </h3>
              </div>

              <div className="mt-4 divide-y divide-stone-200">
                {copy.about.legalPoints.map((point) => (
                  <div key={point.title} className="group py-4 first:pt-0">
                    <div className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-green-700 flex-shrink-0" />
                      <h4 className="font-sans font-semibold text-sm text-stone-900 tracking-wide">
                        {point.title}
                      </h4>
                    </div>

                    {/* Description reveals on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                      <div className="overflow-hidden">
                        <p className="pt-2 pl-[26px] font-sans text-[13px] text-stone-500 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cooperative Support Disclaimer */}
              <div className="mt-2 pt-5 border-t border-stone-200 flex items-start gap-2.5 text-xs text-stone-500">
                <HelpCircle className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                <span>{copy.about.disclaimer}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
