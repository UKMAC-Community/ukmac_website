import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { focusAreas } from "@/lib/data";
import {
  BadgeCheck,
  Check,
  HandCoins,
  Handshake,
  PackageCheck,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface FocusAreasProps {
  id?: string;
}

export default function FocusAreas({ id = "focus" }: FocusAreasProps) {
  const { copy } = useLanguage();
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "HandCoins":
        return <HandCoins className={className} />;
      case "Handshake":
        return <Handshake className={className} />;
      case "ShoppingBasket":
        return <ShoppingBasket className={className} />;
      case "BadgeCheck":
        return <BadgeCheck className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "PackageCheck":
        return <PackageCheck className={className} />;
      default:
        return <ShoppingBasket className={className} />;
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
    <section
      id={id}
      className="relative z-20 scroll-mt-24 bg-white py-24 sm:scroll-mt-28 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="max-w-2xl space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-green-700 font-semibold tracking-widest uppercase block">
            {copy.focus.eyebrow}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-tight">
            {copy.focus.title}
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            {copy.focus.description}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-l border-stone-200"
        >
          {focusAreas.map((area) => {
            const areaCopy = copy.focus.items[area.id];

            return (
              <motion.div
                key={area.id}
                variants={cardVariants}
                className="border-r border-b border-stone-200 p-6 sm:p-8 flex flex-col group"
              >
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  {getIcon(area.iconName, "w-5 h-5 text-brand-green-700 stroke-[1.5]")}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-900 tracking-tight">
                    {areaCopy.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  {areaCopy.description}
                </p>

                {/* Sub features bullet points */}
                <div className="space-y-3 pt-5 border-t border-stone-200">
                  <h4 className="font-sans font-semibold text-xs text-stone-900 tracking-wider uppercase">
                    {copy.focus.deliverables}
                  </h4>
                  <div className="space-y-2.5">
                    {areaCopy.features.map((feature, idx) => (
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
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
