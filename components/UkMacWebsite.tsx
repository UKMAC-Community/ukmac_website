"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StatsOverview from "./StatsOverview";
import AboutSection from "./AboutSection";
import PillarsSection from "./PillarsSection";
import FocusAreas from "./FocusAreas";
import InteractiveMap from "./InteractiveMap";
import TimelineSection from "./TimelineSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import News from "./news/news";
import type { PublicPost } from "@/lib/news";

interface UkMacWebsiteProps {
  posts: PublicPost[];
  postsError?: boolean;
}

export default function UkMacWebsite({ posts, postsError }: UkMacWebsiteProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const lastClickTimeRef = useRef<number>(0);

  useEffect(() => {
    const sections = ["hero", "news", "about", "pillars", "focus", "network", "timeline", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      // Ignore observer events if we recently clicked a link (within 1200ms)
      if (Date.now() - lastClickTimeRef.current < 1200) {
        return;
      }

      const intersecting = entries.filter((entry) => entry.isIntersecting);
      if (intersecting.length > 0) {
        setActiveSection(intersecting[0].target.id);
      }
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    lastClickTimeRef.current = Date.now();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-stone-900 selection:bg-brand-green-500/20 selection:text-brand-green-900 font-sans overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Scrolling Content Panels */}
      <div className="relative z-10">
        <HeroSection />

        <StatsOverview />

        <News posts={posts} error={postsError} />

        <AboutSection />

        <PillarsSection />

        <FocusAreas />

        <InteractiveMap />

        <TimelineSection />

        <ContactSection />

        <Footer onNavClick={handleNavClick} />
      </div>
    </div>
  );
}
