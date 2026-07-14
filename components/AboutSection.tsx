import { motion } from "motion/react";
import { Landmark, CheckCircle2, HelpCircle } from "lucide-react";

export default function AboutSection() {
  const legalPoints = [
    {
      title: "Law on Agricultural Cooperatives",
      desc: "Formally registered as an Apex Union under the landmark Royal Decree of the Kingdom of Cambodia, ensuring secure legal standing and operations."
    },
    {
      title: "Semi-Autonomous Apex Union",
      desc: "Operating with corporate administrative autonomy while collaborating closely with government ministries and international development partners."
    },
    {
      title: "Cooperative Networks Protection",
      desc: "Creating structural policies that shield smallholders and local agricultural communities from market price fluctuations and unfair trade."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">

          {/* Left Column: Mission Editorial */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
                Constitutional Identity
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
                An Apex, Semi-Autonomous Agricultural Union
              </h2>
            </div>

            <p className="font-sans text-lg sm:text-xl text-stone-800 leading-relaxed font-light">
              The Union of Kampuchea Modern Agricultural Community (UKMAC) is established in accordance with the <span className="font-semibold text-stone-900">Law on Agricultural Cooperatives of the Kingdom of Cambodia</span>.
            </p>

            <blockquote className="border-l-2 border-stone-300 pl-6 py-1 font-sans text-stone-700 text-base sm:text-lg leading-relaxed italic">
              &ldquo;UKMAC is dedicated to promoting modern, sustainable, and commercially competitive agriculture. Through its network of member agricultural communities, cooperatives, and agricultural enterprises, UKMAC supports innovations, capacity building, knowledge sharing, and value chain development across the agricultural sector.&rdquo;
            </blockquote>

            <p className="font-sans text-stone-600 leading-relaxed text-sm sm:text-base font-light">
              As Cambodia&apos;s premier agricultural union, we serve as the vital bridge linking grassroots farming cooperatives directly with advanced technology, global trading networks, and modern governance standards. By operating at scale, we allow Cambodian farmers to collectively thrive in competitive international arenas.
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
                  Constitutional Foundation
                </h3>
              </div>

              <div className="mt-4 divide-y divide-stone-200">
                {legalPoints.map((point) => (
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
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cooperative Support Disclaimer */}
              <div className="mt-2 pt-5 border-t border-stone-200 flex items-start gap-2.5 text-xs text-stone-500">
                <HelpCircle className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                <span>Established under Article 42 of the Agricultural Cooperatives Act.</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}