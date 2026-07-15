import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight, Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, copy } = useLanguage();
  const languageToggleLabel =
    language === "en"
      ? copy.language.switchToKhmer
      : copy.language.switchToEnglish;
  const nextLanguage =
    language === "en" ? copy.language.khmer : copy.language.english;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: copy.nav.items.hero, id: "hero" },
    { label: copy.nav.items.news, id: "news" },
    { label: copy.nav.items.about, id: "about" },
    { label: copy.nav.items.pillars, id: "pillars" },
    { label: copy.nav.items.focus, id: "focus" },
    { label: copy.nav.items.network, id: "network" },
    { label: copy.nav.items.timeline, id: "timeline" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md py-2" 
            : "bg-white/10 py-2"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavClick("hero")}
              className="flex items-center space-x-2.5 text-left focus:outline-none group cursor-pointer max-w-[240px] sm:max-w-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/logo/UKMAC_Logo.webp"
                  alt={copy.brand.logoAlt}
                  fill
                  sizes="48px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden">
                <div className={`font-display font-extrabold tracking-wide text-sm sm:text-lg flex items-center gap-1.5 whitespace-nowrap transition-colors duration-300 ${
                  isScrolled ? "text-stone-900" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]"
                }`}>
                  UKMAC
                  
                </div>
                <div className={`font-sans text-[7px] min-[375px]:text-[8px] sm:text-[9.5px] font-medium uppercase transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
                  language === "en"
                    ? "tracking-normal [word-spacing:0.14em]"
                    : "tracking-tight"
                } ${
                  isScrolled
                    ? "text-stone-500 group-hover:text-stone-800"
                    : "text-white/80 group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.24)]"
                }`}>
                  {copy.brand.name}
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav
              className="hidden xl:flex items-center xl:space-x-2"
              aria-label={copy.nav.ariaLabel}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative px-2.5 xl:px-3.5 py-2 rounded-lg font-sans text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                    isScrolled
                      ? activeSection === item.id
                        ? "text-brand-green-600"
                        : "text-stone-600 hover:text-stone-900"
                      : activeSection === item.id
                        ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]"
                        : "text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.24)]"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                        isScrolled ? "bg-brand-green-500" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={languageToggleLabel}
                title={languageToggleLabel}
                className={`ml-1 flex h-8 items-center gap-1.5 rounded-full border px-2.5 font-sans text-[11px] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
                  isScrolled
                    ? "border-stone-200 bg-stone-50 text-stone-700 hover:border-brand-green-300 hover:text-brand-green-700"
                    : "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{nextLanguage}</span>
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-1.5 xl:hidden">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={languageToggleLabel}
                title={languageToggleLabel}
                className={`flex h-9 items-center gap-1.5 rounded-full border px-2.5 font-sans text-[11px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
                  isScrolled
                    ? "border-stone-200 bg-stone-50 text-stone-700 hover:text-brand-green-700"
                    : "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{nextLanguage}</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer focus:outline-none ${
                  isScrolled
                    ? "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                    : "text-white hover:bg-white/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.24)]"
                }`}
                aria-label={copy.nav.toggleMenu}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden overflow-hidden bg-white border-b border-stone-200 shadow-md"
            >
              <nav
                className="px-4 pt-2 pb-6 space-y-1.5"
                aria-label={copy.nav.ariaLabel}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavClick(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-sans font-semibold text-base transition-colors ${
                      activeSection === item.id
                        ? "bg-brand-green-50 text-brand-green-600 border-l-4 border-brand-green-600"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => {
                      onNavClick("contact");
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-1.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-sans font-bold py-3.5 rounded-xl shadow-lg transition-colors"
                  >
                    <span>{copy.nav.joinNetwork}</span>
                    <ArrowUpRight className="w-4.5 h-4.5" aria-hidden="true" />
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
