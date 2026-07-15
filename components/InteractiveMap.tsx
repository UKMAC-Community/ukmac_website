import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { provinces } from "@/lib/data";
import { formatTranslation } from "@/lib/translations";
import { useLanguage } from "@/components/LanguageProvider";
import { MapPin, Sprout, Building2, Users, ArrowRight, HeartPulse, CheckSquare } from "lucide-react";

export default function InteractiveMap() {
  const { copy, locale } = useLanguage();
  const networkCopy = copy.network;
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>("battambang");
  const selectedProvince = provinces.find((p) => p.id === selectedProvinceId) || provinces[0];
  const selectedProvinceCopy = networkCopy.provinces[selectedProvince.id];

  return (
    <section id="network" className="py-24 sm:py-32 bg-white text-stone-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            {networkCopy.eyebrow}
          </span>
          <h2 id="network-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            {networkCopy.title}
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            {networkCopy.description}
          </p>
        </div>

        {/* Map Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Panel: Stylized Map Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-stone-200 p-6 sm:p-8 min-h-[400px] sm:min-h-[500px] relative">
            <div className="absolute top-4 left-6 flex items-center gap-2 text-[10px] font-mono tracking-wider text-stone-500 font-semibold uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green-700" />
              <span>{networkCopy.mapLabel}</span>
            </div>

            {/* Stylized schematic background drawing of Cambodia */}
            <div className="absolute inset-8 pointer-events-none opacity-30 border border-stone-100 flex items-center justify-center overflow-hidden">
              <svg aria-hidden="true" viewBox="0 0 800 600" className="w-full h-full fill-none stroke-brand-green-700/25 stroke-[1.5]">
                <path d="M 120 400 L 200 200 L 400 150 L 500 120 L 680 180 L 700 350 L 600 520 L 420 540 L 300 520 L 220 550 L 120 400 Z" />
                <path d="M 320 300 Q 400 280 430 350 Q 380 390 320 300 Z" className="fill-brand-green-700/5 stroke-brand-green-700/30" />
                <path d="M 520 120 Q 560 300 540 400 T 500 540" className="stroke-blue-500/20" strokeDasharray="4 4" />
                <path d="M 120 450 Q 180 460 220 550" className="stroke-stone-300" />
              </svg>
            </div>

            {/* The Map Interactive Canvas */}
            <div
              aria-label={networkCopy.mapLabel}
              className="relative w-full h-[320px] sm:h-[420px] mt-8"
              role="group"
            >

              {/* Tonle Sap Lake geographical label */}
              <div className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none opacity-50">
                <div className="font-display font-semibold text-[10px] text-stone-500 uppercase tracking-widest">{networkCopy.tonleSap}</div>
                <div className="font-sans text-[8px] text-stone-500 font-medium">{networkCopy.lakeReserve}</div>
              </div>

              {/* Map Nodes Layer */}
              {provinces.map((prov) => {
                const isActive = prov.id === selectedProvinceId;
                const provinceCopy = networkCopy.provinces[prov.id];
                return (
                  <button
                    key={prov.id}
                    onClick={() => setSelectedProvinceId(prov.id)}
                    aria-label={provinceCopy.name}
                    aria-pressed={isActive}
                    style={{ left: `${prov.coordinates.x}%`, top: `${prov.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none z-20 cursor-pointer group"
                  >
                    {/* Node Pin */}
                    <div className={`relative z-10 w-8 h-8 flex items-center justify-center border transition-colors duration-200 ${
                      isActive
                        ? "bg-brand-green-700 border-brand-green-700 text-white"
                        : "bg-white border-stone-300 text-stone-500 group-hover:border-stone-500 group-hover:text-stone-800"
                    }`}>
                      <MapPin aria-hidden="true" className="w-4 h-4" />
                    </div>

                    {/* Label tooltip */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-9 whitespace-nowrap bg-stone-900 text-white text-[10px] font-sans font-semibold px-2 py-1 pointer-events-none transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}>
                      {provinceCopy.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick selector bar at bottom of map */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-stone-200 z-10">
              {provinces.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProvinceId(p.id)}
                  aria-pressed={p.id === selectedProvinceId}
                  className={`font-sans text-xs font-semibold transition-colors cursor-pointer pb-1 border-b-2 ${
                    p.id === selectedProvinceId
                      ? "text-brand-green-700 border-brand-green-700"
                      : "text-stone-500 border-transparent hover:text-stone-800"
                  }`}
                >
                  {networkCopy.provinces[p.id].name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel: Province Detailed Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProvince.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="border border-stone-200 p-6 sm:p-8 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Crop Header */}
                  <div className="flex items-center gap-2 text-brand-amber-700 font-mono text-[10px] font-semibold tracking-widest uppercase mb-3">
                    <Sprout aria-hidden="true" className="w-3.5 h-3.5" />
                    <span>
                      {formatTranslation(networkCopy.focusCrop, {
                        crop: selectedProvinceCopy.cropType,
                      })}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                    {selectedProvinceCopy.name}
                  </h3>

                  <p className="font-sans text-sm text-stone-600 leading-relaxed mt-4 mb-6">
                    {selectedProvinceCopy.description}
                  </p>

                  {/* Province Stats Grid */}
                  <div className="grid grid-cols-2 divide-x divide-stone-200 border-y border-stone-200 py-4 mb-6">
                    <div className="pr-4">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1">
                        <Building2 aria-hidden="true" className="w-4 h-4 text-brand-green-700" />
                        <span className="font-sans text-[10px] font-semibold tracking-wider uppercase">{networkCopy.cooperatives}</span>
                      </div>
                      <div className="font-display font-semibold text-lg text-stone-900">
                        {formatTranslation(networkCopy.registered, {
                          count: selectedProvince.coopCount.toLocaleString(locale),
                        })}
                      </div>
                    </div>
                    <div className="pl-4">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1">
                        <Users aria-hidden="true" className="w-4 h-4 text-brand-green-700" />
                        <span className="font-sans text-[10px] font-semibold tracking-wider uppercase">{networkCopy.families}</span>
                      </div>
                      <div className="font-display font-semibold text-lg text-stone-900">
                        {formatTranslation(networkCopy.members, {
                          count: selectedProvince.farmersCount.toLocaleString(locale),
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Featured Cooperative */}
                  <div className="py-4 mb-6 flex items-start gap-3.5 border-b border-stone-200">
                    <HeartPulse aria-hidden="true" className="w-4 h-4 text-brand-green-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[9px] text-stone-500 font-semibold uppercase tracking-wider">{networkCopy.featuredCommunity}</div>
                      <h4 className="font-sans font-semibold text-sm text-stone-900 mt-0.5">
                        {selectedProvinceCopy.featuredCoop}
                      </h4>
                    </div>
                  </div>

                  {/* Initiatives bullets */}
                  <div className="space-y-3">
                    <h4 className="font-sans font-semibold text-xs text-stone-900 tracking-wider uppercase">
                      {networkCopy.modernizations}
                    </h4>
                    <div className="space-y-2.5">
                      {selectedProvinceCopy.initiatives.map((initiative, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckSquare aria-hidden="true" className="w-4 h-4 text-brand-green-700 mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-xs text-stone-600 leading-normal">
                            {initiative}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 mt-8 flex justify-end">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-xs font-sans font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors cursor-pointer group"
                  >
                    <span>{networkCopy.connect}</span>
                    <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
