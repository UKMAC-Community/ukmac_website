import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this container
  const { scrollY } = useScroll();

  // Create transforms for parallax effect
  const textY = useTransform(scrollY, [0, 800], [0, -120]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);
  const bgY = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-[88svh] sm:min-h-[95vh] lg:min-h-screen w-full flex items-center justify-start bg-stone-950 z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: bgY }}
          className="absolute -top-[10%] left-0 w-full h-[130%] select-none pointer-events-none"
        >
          <Image
            src="/images/unspast/img1.jpg"
            alt="Sustainable Cambodian Agriculture"
            fill
            sizes="100vw"
            preload
            className="w-full h-full object-cover object-[62%_center] sm:object-center scale-105"
          />
          {/* A light logo-green wash brightens the photo without a dark-green cast. */}
          <div className="absolute inset-0 bg-[#9ae27f]/20 mix-blend-soft-light z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-950/55 via-brand-green-900/18 to-transparent sm:from-brand-green-950/35 sm:via-brand-green-900/10 z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_78%,rgba(4,120,87,0.16)_100%)] z-10" />
        </motion.div>
      </div>

      {/* Content Foreground Layer */}
      <motion.div 
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 w-full max-w-[21rem] px-4 text-left select-text py-6 min-[375px]:max-w-[23rem] sm:max-w-2xl sm:px-8 sm:py-8 lg:px-16"
      >

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display font-extrabold text-[1.65rem] min-[375px]:text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.18] sm:leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
        >
          Cultivating <span className="text-[#8bdc72]">Modern</span>,<br className="hidden sm:inline" /> 
          Sustainable Agriculture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-3 sm:mt-4 font-sans text-[0.72rem] min-[375px]:text-xs sm:text-sm text-stone-100 max-w-[19rem] sm:max-w-lg font-medium leading-relaxed drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]"
        >
          UKMAC leads Cambodia&apos;s farming network as a semi-autonomous apex Union, supporting smart innovation, capacity building, and competitive global value chains.
        </motion.p>
      </motion.div>

      {/* Floating Bottom Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 select-none pointer-events-none"
      >
        <span className="font-mono text-[9px] text-white/70 font-semibold tracking-widest uppercase">
          Scroll to explore
        </span>
        <ArrowDown className="w-4 h-4 text-[#8bdc72] animate-bounce" />
      </motion.div>
    </section>
  );
}
