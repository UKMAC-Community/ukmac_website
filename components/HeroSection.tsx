"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimationControls,
} from "motion/react";
import { useLanguage } from "@/components/LanguageProvider";
import { formatTranslation } from "@/lib/translations";

const HERO_IMAGES = [
  "/images/unspast/img1.webp",
  "/images/unspast/img2.webp",
  "/images/unspast/img3.webp",
  "/images/unspast/img4.webp",
  "/images/unspast/img5.webp",
];

const SLIDE_DURATION = 5000; // ms each image stays before transitioning

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorInitializedRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const indicatorPosition = useAnimationControls();
  const indicatorShape = useAnimationControls();
  const { copy } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const textY = useTransform(smoothScrollProgress, [0, 1], [0, -45]);
  const textX = useTransform(smoothScrollProgress, [0, 1], [0, 6]);
  const opacityFade = useTransform(smoothScrollProgress, [0, 0.9], [1, 0.25]);
  const bgY = useTransform(smoothScrollProgress, [0, 1], [0, 55]);
  const bgScale = useTransform(smoothScrollProgress, [0, 1], [1.03, 1.06]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [index, timerResetKey]);

  const selectSlide = (imageIndex: number) => {
    setIndex(imageIndex);
    setTimerResetKey((current) => current + 1);
  };

  useEffect(() => {
    if (!indicatorInitializedRef.current) {
      indicatorPosition.set({ x: 0 });
      indicatorShape.set({ width: 16 });
      indicatorInitializedRef.current = true;
      return;
    }

    let cancelled = false;

    const moveIndicator = async () => {
      await indicatorShape.start({
        width: 7,
        transition: { duration: 0.12, ease: "easeOut" },
      });

      if (cancelled) return;

      await indicatorPosition.start({
        x: index * 30,
        transition: {
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      if (cancelled) return;

      await indicatorShape.start({
        width: 16,
        transition: { duration: 0.16, ease: "easeOut" },
      });
    };

    void moveIndicator();

    return () => {
      cancelled = true;
      indicatorPosition.stop();
      indicatorShape.stop();
    };
  }, [index, indicatorPosition, indicatorShape]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[88svh] sm:min-h-[95vh] lg:min-h-screen w-full flex items-center justify-start bg-stone-950 z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute -top-[10%] left-0 w-full h-[130%] select-none pointer-events-none"
        >
          {HERO_IMAGES.map((image, imageIndex) => {
            const isActive = imageIndex === index;

            return (
              <div
                key={image}
                aria-hidden={!isActive}
                className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? "z-[1] opacity-100" : "z-0 opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={isActive ? copy.hero.imageAlt : ""}
                  fill
                  sizes="100vw"
                  preload={imageIndex === 0}
                  loading={imageIndex === 0 ? undefined : "eager"}
                  className="h-full w-full object-cover object-[62%_center] sm:object-center"
                />
              </div>
            );
          })}

          {/* Overlays stay fixed above the sliding images */}
          <div className="absolute inset-0 bg-[#9ae27f]/20 mix-blend-soft-light z-10" />
          <div className="absolute inset-0 z-10 [background:linear-gradient(30deg,rgba(3,35,24,0.84)_0%,rgba(3,35,24,0.68)_55%,rgba(3,35,24,0.34)_100%)] sm:[background:linear-gradient(30deg,rgba(3,35,24,0.82)_0%,rgba(3,35,24,0.62)_30%,rgba(3,35,24,0.28)_50%,rgba(3,35,24,0)_74%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_78%,rgba(4,120,87,0.16)_100%)] z-10" />
        </motion.div>
      </div>

      {/* Content Foreground Layer */}
      <motion.div
        style={{ x: textX, y: textY, opacity: opacityFade }}
        className="relative z-10 w-full max-w-[22rem] px-4 py-6 text-left select-text min-[375px]:max-w-[24rem] sm:max-w-2xl sm:px-8 sm:py-8 lg:max-w-3xl lg:px-16"
      >
        {/* <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.02, ease: "easeOut" }}
          className="mb-3 inline-flex max-w-full items-center rounded-full border border-white/20 bg-stone-950/25 px-3 py-1.5 font-sans text-[0.58rem] font-medium leading-relaxed tracking-[0.08em] text-white/80 shadow-sm backdrop-blur-sm min-[375px]:text-[0.62rem] sm:mb-4 sm:text-[0.68rem]"
        >
          {copy.hero.presentationNote}
        </motion.p> */}

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-3 font-sans text-[0.65rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#b8f0a8] drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] min-[375px]:text-[0.7rem] sm:mb-4 sm:text-xs"
        >
          {copy.hero.tagline}
        </motion.p>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display font-extrabold text-[1.65rem] min-[375px]:text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.18] sm:leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
        >
          {copy.hero.titleBefore}{" "}
          <span className="text-[#8bdc72]">{copy.hero.titleAccent}</span>
          {copy.hero.titleSeparator}
          <br className="hidden sm:inline" /> {copy.hero.titleAfter}
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-3 max-w-[20rem] font-sans text-[0.72rem] font-medium leading-relaxed text-stone-100 drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] min-[375px]:text-xs sm:mt-4 sm:max-w-xl sm:text-sm"
        >
          {copy.hero.description}
        </motion.p>
      </motion.div>

      {/* Hero image indicators */}
      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-9"
        role="group"
        aria-label={copy.hero.indicatorsLabel}
      >
        <motion.span
          initial={{ x: 0 }}
          animate={indicatorPosition}
          className="pointer-events-none absolute left-[4px] top-[9px] flex h-[7px] w-4 items-center justify-center"
          aria-hidden="true"
        >
          <motion.span
            initial={{ width: 16 }}
            animate={indicatorShape}
            className="h-[7px] rounded-full bg-[#8bdc72] shadow-[0_1px_6px_rgba(0,0,0,0.5)]"
          />
        </motion.span>

        {HERO_IMAGES.map((image, imageIndex) => {
          const isActive = imageIndex === index;

          return (
            <button
              key={image}
              type="button"
              onClick={() => selectSlide(imageIndex)}
              aria-label={formatTranslation(copy.hero.showImage, {
                number: imageIndex + 1,
              })}
              aria-pressed={isActive}
              className="group relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-950"
            >
              <span
                className={`block h-[7px] w-[7px] rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.45)] transition-all duration-200 ${
                  isActive ? "opacity-0" : "opacity-65 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
