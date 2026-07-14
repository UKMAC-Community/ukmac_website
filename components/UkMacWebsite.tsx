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

export default function UkMacWebsite() {
  const [activeSection, setActiveSection] = useState("hero");
  const lastClickTimeRef = useRef<number>(0);

  useEffect(() => {
    const sections = ["hero", "about", "pillars", "focus", "network", "timeline", "contact"];
    
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
        <HeroSection 
          onExploreClick={() => handleNavClick("about")} 
          onMapClick={() => handleNavClick("network")} 
        />

        <StatsOverview />

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


