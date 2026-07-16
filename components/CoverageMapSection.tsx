"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { provinces } from "@/lib/data";
import cambodiaMap from "@/lib/cambodia-provinces.json";

interface CoverageMapSectionProps {
  id?: string;
}

const activeMapNames = new Set<string>(provinces.map((province) => province.mapName));

const activeProvinces = provinces
  .map((province) => {
    const shape = cambodiaMap.provinces.find((p) => p.name === province.mapName);
    return shape ? { ...province, centroid: shape.centroid as [number, number] } : null;
  })
  .filter((province): province is NonNullable<typeof province> => province !== null);

export default function CoverageMapSection({ id = "coverage" }: CoverageMapSectionProps) {
  const { copy } = useLanguage();
  const mapCopy = copy.coverage;
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id={id}
      className="relative z-20 scroll-mt-24 border-t border-stone-200 bg-white py-24 text-stone-900 sm:scroll-mt-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl space-y-4 sm:mb-16">
          <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
            {mapCopy.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {mapCopy.title}
          </h2>
          <p className="font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
            {mapCopy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Map */}
          <div className="lg:col-span-8">
            <svg
              viewBox={cambodiaMap.viewBox}
              className="h-auto w-full"
              role="img"
              aria-label={mapCopy.title}
            >
              {cambodiaMap.provinces.map((province) => (
                <path
                  key={province.name}
                  d={province.path}
                  className={`transition-colors duration-300 ${
                    activeMapNames.has(province.name)
                      ? "fill-brand-green-100"
                      : "fill-stone-100"
                  }`}
                  stroke="#ffffff"
                  strokeWidth={2}
                />
              ))}

              {activeProvinces.map((province) => {
                const [cx, cy] = province.centroid;
                const isHovered = activeId === province.id;

                return (
                  <g
                    key={province.id}
                    onMouseEnter={() => setActiveId(province.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(province.id)}
                    onBlur={() => setActiveId(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={copy.contact.provinceOptions[province.id]}
                    className="cursor-pointer outline-none"
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHovered ? 22 : 14}
                      className="fill-brand-green-600/15 transition-all duration-300"
                    />
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={7}
                      className="fill-brand-green-700 transition-all duration-300"
                      stroke="#ffffff"
                      strokeWidth={2}
                      animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                      style={{ transformOrigin: `${cx}px ${cy}px` }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Province list */}
          <div className="lg:col-span-4">
            <span className="mb-4 block font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-green-700">
              {mapCopy.provincesLabel}
            </span>
            <ul className="divide-y divide-stone-200 border-y border-stone-200">
              {activeProvinces.map((province) => {
                const isHovered = activeId === province.id;
                return (
                  <li key={province.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(province.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(province.id)}
                      onBlur={() => setActiveId(null)}
                      className={`flex w-full items-center gap-3 py-3.5 text-left font-sans text-sm font-semibold transition-colors ${
                        isHovered ? "text-brand-green-700" : "text-stone-700 hover:text-brand-green-700"
                      }`}
                    >
                      <MapPin
                        aria-hidden="true"
                        className={`h-4 w-4 flex-shrink-0 stroke-[1.5] transition-colors ${
                          isHovered ? "text-brand-green-700" : "text-stone-400"
                        }`}
                      />
                      {copy.contact.provinceOptions[province.id]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
