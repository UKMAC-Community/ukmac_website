"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { formatTranslation } from "@/lib/translations";

const NAV_LINKS = [
  { id: "home", href: "/" },
  { id: "about", href: "/about" },
  { id: "news", href: "/news" },
  { id: "projects", href: "/#projects" },
  { id: "gallery", href: "/#gallery" },
  { id: "documents", href: "/about#documents" },
  { id: "contact", href: "/#contact" },
] as const;

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { copy } = useLanguage();

  return (
    <footer className="relative z-20 border-t border-stone-200 bg-stone-50 font-sans text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16">

          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              aria-label={copy.footer.homeLabel}
              className={`flex items-center gap-2.5 text-left group cursor-pointer ${FOCUS_RING}`}
            >
              <span className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/logo/UKMAC_Logo.webp"
                  alt={copy.brand.logoAlt}
                  fill
                  sizes="40px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <div>
                <span className="font-display font-bold text-stone-900 tracking-wide text-lg block leading-none">
                  UKMAC
                </span>
                <span className="font-sans text-[9px] text-stone-500 font-semibold tracking-tight uppercase group-hover:text-stone-700 transition-colors">
                  {copy.brand.name}
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              {copy.footer.description}
            </p>

            {/* Legal regulatory text */}
            <p className="font-sans text-[11px] text-stone-500 leading-relaxed">
              {copy.footer.legal}
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-stone-900 tracking-wider uppercase">
              {copy.footer.quickNavigation}
            </h4>
            <nav
              className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm"
              aria-label={copy.footer.navigationLabel}
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-left w-fit hover:text-brand-green-700 transition-colors cursor-pointer rounded-sm ${FOCUS_RING}`}
                >
                  {copy.footer.navItems[item.id]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-stone-900 tracking-wider uppercase">
              {copy.footer.headquarters}
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green-600 stroke-[1.5] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed font-light">
                  {copy.footer.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-green-600 stroke-[1.5] flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+85523999555"
                  className={`font-mono font-medium tabular-nums hover:text-brand-green-700 transition-colors rounded-sm ${FOCUS_RING}`}
                >
                  +855 23 999 555
                </a>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="w-4.5 h-4.5 text-brand-green-600 stroke-[1.5] flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:secretariat@ukmac.org.kh"
                  className={`font-sans hover:text-brand-green-700 transition-colors break-all rounded-sm ${FOCUS_RING}`}
                >
                  secretariat@ukmac.org.kh
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            {formatTranslation(copy.footer.copyright, { year: currentYear })}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className={`hover:text-stone-800 transition-colors rounded-sm ${FOCUS_RING}`}>{copy.footer.privacy}</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#" className={`hover:text-stone-800 transition-colors rounded-sm ${FOCUS_RING}`}>{copy.footer.statutes}</a>
            <span aria-hidden="true">&bull;</span>
            <a
              href="https://www.maff.gov.kh/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-brand-green-700 transition-colors flex items-center gap-1 rounded-sm ${FOCUS_RING}`}
            >
              <span>{copy.footer.maff}</span>
              <ExternalLink className="w-3 h-3 stroke-[1.5]" aria-hidden="true" />
              <span className="sr-only">{copy.footer.opensNewTab}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
