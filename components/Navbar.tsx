"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const MAIN_LINKS = [
  { id: "home", href: "/" },
  { id: "news", href: "/news" },
  { id: "projects", href: "/#projects" },
  { id: "gallery", href: "/#gallery" },
  { id: "contact", href: "/#contact" },
] as const;

const ABOUT_LINKS = [
  { id: "background", href: "/about#background" },
  { id: "visionMission", href: "/about#vision-mission" },
  { id: "objectives", href: "/about#objectives" },
  { id: "leadership", href: "/about#leadership" },
  { id: "members", href: "/about#members" },
  { id: "structure", href: "/about#structure" },
  { id: "documents", href: "/about#documents" },
] as const;

type MainNavId = (typeof MAIN_LINKS)[number]["id"];
type ActiveNavId = MainNavId | "about";

const HOME_SECTIONS: ReadonlyArray<{
  sectionId: string;
  navId: ActiveNavId;
}> = [
  { sectionId: "hero", navId: "home" },
  { sectionId: "about-preview", navId: "about" },
  { sectionId: "important-announcement", navId: "news" },
  { sectionId: "news", navId: "news" },
  { sectionId: "projects", navId: "projects" },
  { sectionId: "gallery", navId: "gallery" },
  { sectionId: "contact", navId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [activeHomeItem, setActiveHomeItem] = useState<ActiveNavId>("home");
  const navigationLockUntilRef = useRef(0);
  const { language, toggleLanguage, copy } = useLanguage();

  const isHome = pathname === "/";
  const isSolid =
    !isHome || isScrolled || isOpen || isDesktopAboutOpen;
  const languageToggleLabel =
    language === "en"
      ? copy.language.switchToKhmer
      : copy.language.switchToEnglish;
  const nextLanguage =
    language === "en" ? copy.language.khmer : copy.language.english;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const updateFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const matchingSection = HOME_SECTIONS.find(
        (section) => section.sectionId === hash,
      );

      if (matchingSection) setActiveHomeItem(matchingSection.navId);
      if (!hash && window.scrollY < 80) setActiveHomeItem("home");
    };

    const initialUpdate = window.setTimeout(updateFromHash, 0);
    const observedSections = HOME_SECTIONS.flatMap((section) => {
      const element = document.getElementById(section.sectionId);
      return element ? [{ ...section, element }] : [];
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < navigationLockUntilRef.current) return;

        const closestVisibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - 96) -
              Math.abs(second.boundingClientRect.top - 96),
          )[0];

        if (!closestVisibleEntry) return;

        const matchingSection = HOME_SECTIONS.find(
          (section) => section.sectionId === closestVisibleEntry.target.id,
        );
        if (matchingSection) setActiveHomeItem(matchingSection.navId);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );

    observedSections.forEach(({ element }) => observer.observe(element));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.clearTimeout(initialUpdate);
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [isHome]);

  const closeMenus = () => {
    setIsOpen(false);
    setIsDesktopAboutOpen(false);
    setIsMobileAboutOpen(false);
  };

  const handleMainLinkClick = (id: MainNavId) => {
    closeMenus();
    navigationLockUntilRef.current = Date.now() + 1_400;
    setActiveHomeItem(id);
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleMainLinkClick("home");

    if (!isHome) return;

    event.preventDefault();
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutLinkClick = () => {
    closeMenus();
    navigationLockUntilRef.current = Date.now() + 1_400;
    setActiveHomeItem("about");
  };

  const isLinkActive = (id: MainNavId) => {
    if (isHome) return activeHomeItem === id;
    if (id === "home" || id === "contact") return false;
    return pathname === `/${id}` || pathname.startsWith(`/${id}/`);
  };

  const isAboutActive =
    pathname.startsWith("/about") || (isHome && activeHomeItem === "about");

  const desktopLinkClass = (active: boolean) =>
    `relative whitespace-nowrap rounded-lg px-2.5 py-2 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
      isSolid
        ? active
          ? "text-brand-green-700"
          : "text-stone-600 hover:text-stone-950"
        : active
          ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          : "text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)]"
    }`;

  const activeIndicator = (active: boolean) =>
    active ? (
      <motion.span
        layoutId="activeNavigationIndicator"
        className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full ${
          isSolid ? "bg-brand-green-500" : "bg-white"
        }`}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        aria-hidden="true"
      />
    ) : null;

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b py-2 transition-colors duration-300 ${
        isSolid
          ? "border-stone-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-white/10 bg-white/10 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label={copy.footer.homeLabel}
            className="group flex max-w-[240px] items-center space-x-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 sm:max-w-none"
          >
            <span className="relative h-11 w-11 flex-shrink-0 sm:h-12 sm:w-12">
              <Image
                src="/logo/UKMAC_Logo.webp"
                alt={copy.brand.logoAlt}
                fill
                sizes="48px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </span>
            <span className="overflow-hidden">
              <span
                className={`flex items-center gap-1.5 whitespace-nowrap font-display text-sm font-extrabold tracking-wide transition-colors duration-300 sm:text-lg ${
                  isSolid
                    ? "text-stone-900"
                    : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]"
                }`}
              >
                UKMAC
              </span>
              <span
                className={`block overflow-hidden text-ellipsis whitespace-nowrap font-sans text-[7px] font-medium uppercase transition-colors min-[375px]:text-[8px] sm:text-[9.5px] ${
                  language === "en"
                    ? "tracking-normal [word-spacing:0.14em]"
                    : "tracking-tight"
                } ${
                  isSolid
                    ? "text-stone-500 group-hover:text-stone-800"
                    : "text-white/80 group-hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.24)]"
                }`}
              >
                {copy.brand.name}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 min-[1360px]:flex"
            aria-label={copy.nav.ariaLabel}
          >
            <Link
              href={MAIN_LINKS[0].href}
              onClick={handleHomeClick}
              aria-current={isLinkActive("home") ? "page" : undefined}
              className={desktopLinkClass(isLinkActive("home"))}
            >
              {copy.nav.items.home}
              {activeIndicator(isLinkActive("home"))}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDesktopAboutOpen(true)}
              onMouseLeave={() => setIsDesktopAboutOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsDesktopAboutOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsDesktopAboutOpen(false);
                  event.currentTarget.querySelector("a")?.focus();
                }
              }}
            >
              <div className="flex items-center">
                <Link
                  href="/about"
                  onClick={handleAboutLinkClick}
                  onFocus={() => setIsDesktopAboutOpen(true)}
                  aria-current={isAboutActive ? "page" : undefined}
                  className={`${desktopLinkClass(isAboutActive)} pr-1`}
                >
                  {copy.nav.items.about}
                  {activeIndicator(isAboutActive)}
                </Link>
                <button
                  type="button"
                  onClick={() => setIsDesktopAboutOpen((current) => !current)}
                  aria-label={copy.nav.items.about}
                  aria-haspopup="true"
                  aria-expanded={isDesktopAboutOpen}
                  aria-controls="desktop-about-menu"
                  className={`-ml-1 rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
                    isSolid
                      ? "text-stone-500 hover:text-brand-green-700"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isDesktopAboutOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <AnimatePresence>
                {isDesktopAboutOpen && (
                  <motion.div
                    id="desktop-about-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-[calc(100%+0.75rem)] w-72 -translate-x-1/2 border border-stone-200 bg-white p-2 shadow-xl shadow-stone-950/10"
                  >
                    <span className="absolute -top-3 left-0 h-3 w-full" aria-hidden="true" />
                    {ABOUT_LINKS.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeMenus}
                        className="block border-l-2 border-transparent px-4 py-2.5 text-sm font-semibold text-stone-600 transition-colors hover:border-brand-green-500 hover:bg-brand-green-50 hover:text-brand-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-500"
                      >
                        {copy.nav.aboutMenu[item.id]}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href={MAIN_LINKS[1].href}
              onClick={() => handleMainLinkClick("news")}
              aria-current={isLinkActive("news") ? "page" : undefined}
              className={desktopLinkClass(isLinkActive("news"))}
            >
              {copy.nav.items.news}
              {activeIndicator(isLinkActive("news"))}
            </Link>

            {MAIN_LINKS.slice(2).map((item) => {
              const active = isLinkActive(item.id);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleMainLinkClick(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={desktopLinkClass(active)}
                >
                  {copy.nav.items[item.id]}
                  {activeIndicator(active)}
                </Link>
              );
            })}

            <LanguageToggle
              isSolid={isSolid}
              label={languageToggleLabel}
              nextLanguage={nextLanguage}
              onClick={toggleLanguage}
            />
          </nav>

          <div className="flex items-center gap-1.5 min-[1360px]:hidden">
            <LanguageToggle
              isSolid={isSolid}
              label={languageToggleLabel}
              nextLanguage={nextLanguage}
              onClick={toggleLanguage}
              mobile
            />
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
                isSolid
                  ? "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-white/15"
              }`}
              aria-label={copy.nav.toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-stone-200 bg-white shadow-md min-[1360px]:hidden"
          >
            <nav
              className="mx-auto max-h-[calc(100vh-4rem)] max-w-[1440px] space-y-1 overflow-y-auto px-4 pb-6 pt-3 sm:px-6 lg:px-8"
              aria-label={copy.nav.ariaLabel}
            >
              <MobileLink
                href="/"
                active={isLinkActive("home")}
                onClick={handleHomeClick}
              >
                {copy.nav.items.home}
              </MobileLink>

              <div>
                <div
                  className={`flex w-full items-center border-l-4 font-sans text-base font-semibold transition-colors ${
                    isAboutActive
                      ? "border-brand-green-600 bg-brand-green-50 text-brand-green-700"
                      : "border-transparent text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  }`}
                >
                  <Link
                    href="/about"
                    onClick={handleAboutLinkClick}
                    aria-current={isAboutActive ? "page" : undefined}
                    className="flex-1 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-500"
                  >
                    {copy.nav.items.about}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileAboutOpen((current) => !current)}
                    aria-label={copy.nav.items.about}
                    aria-haspopup="true"
                    aria-expanded={isMobileAboutOpen}
                    aria-controls="mobile-about-menu"
                    className="self-stretch px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-500"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isMobileAboutOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isMobileAboutOpen && (
                    <motion.div
                      id="mobile-about-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden border-l border-stone-200 pl-5"
                    >
                      {ABOUT_LINKS.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={closeMenus}
                          className="block px-4 py-2.5 text-sm font-medium text-stone-500 transition-colors hover:bg-brand-green-50 hover:text-brand-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-500"
                        >
                          {copy.nav.aboutMenu[item.id]}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileLink
                href="/news"
                active={isLinkActive("news")}
                onClick={() => handleMainLinkClick("news")}
              >
                {copy.nav.items.news}
              </MobileLink>

              {MAIN_LINKS.slice(2).map((item) => (
                <MobileLink
                  key={item.id}
                  href={item.href}
                  active={isLinkActive(item.id)}
                  onClick={() => handleMainLinkClick(item.id)}
                >
                  {copy.nav.items[item.id]}
                </MobileLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LanguageToggle({
  isSolid,
  label,
  nextLanguage,
  onClick,
  mobile = false,
}: {
  isSolid: boolean;
  label: string;
  nextLanguage: string;
  onClick: () => void;
  mobile?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`${mobile ? "h-9" : "ml-1 h-8"} flex items-center gap-1.5 rounded-full border px-2.5 font-sans text-[11px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
        isSolid
          ? "border-stone-200 bg-stone-50 text-stone-700 hover:border-brand-green-300 hover:text-brand-green-700"
          : "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
      }`}
    >
      <Languages className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{nextLanguage}</span>
    </button>
  );
}

function MobileLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`block w-full border-l-4 px-4 py-3 text-left font-sans text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green-500 ${
        active
          ? "border-brand-green-600 bg-brand-green-50 text-brand-green-700"
          : "border-transparent text-stone-600 hover:bg-stone-50 hover:text-stone-900"
      }`}
    >
      {children}
    </Link>
  );
}
