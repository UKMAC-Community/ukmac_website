import { Sprout, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: "hero", label: "Introduction" },
  { id: "about", label: "About & Mandate" },
  { id: "pillars", label: "Operational Pillars" },
  { id: "focus", label: "Strategic Focus" },
  { id: "network", label: "Cooperative Network" },
  { id: "timeline", label: "Historical Milestones" }
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 text-zinc-400 font-sans border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-16">

          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => onNavClick("hero")}
              aria-label="UKMAC — go to homepage"
              className={`flex items-center gap-2.5 text-left group cursor-pointer ${FOCUS_RING}`}
            >
              <div className="w-10 h-10 bg-brand-green-600 flex items-center justify-center text-white group-hover:bg-brand-green-500 transition-colors flex-shrink-0">
                <Sprout className="w-5.5 h-5.5 stroke-[1.5]" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display font-bold text-white tracking-wide text-lg block leading-none">
                  UKMAC
                </span>
                <span className="font-sans text-[9px] text-zinc-500 font-semibold tracking-tight uppercase group-hover:text-zinc-400 transition-colors">
                  Kampuchea Modern Agricultural Community
                </span>
              </div>
            </button>

            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              UKMAC is an apex, semi-autonomous agricultural Union established under the Law on Agricultural Cooperatives of the Kingdom of Cambodia, empowering agricultural cooperatives with smart technologies and direct global market entry.
            </p>

            {/* Legal regulatory text */}
            <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
              Official union registration established in accordance with Royal Decrees & provisions governing the Ministry of Agriculture, Forestry, and Fisheries (MAFF), Kingdom of Cambodia.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase">
              Quick Navigation
            </h4>
            <nav className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className={`text-left w-fit hover:text-brand-green-400 transition-colors cursor-pointer rounded-sm ${FOCUS_RING}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase">
              Secretariat Headquarters
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green-400 stroke-[1.5] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed font-light">
                  Preah Norodom Boulevard, Sangkat Tonle Bassac, Khan Chamkarmon, Phnom Penh, Kingdom of Cambodia.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-green-400 stroke-[1.5] flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+85523999555"
                  className={`font-mono font-medium tabular-nums hover:text-brand-green-400 transition-colors rounded-sm ${FOCUS_RING}`}
                >
                  +855 23 999 555
                </a>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="w-4.5 h-4.5 text-brand-green-400 stroke-[1.5] flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:secretariat@ukmac.org.kh"
                  className={`font-sans hover:text-brand-green-400 transition-colors break-all rounded-sm ${FOCUS_RING}`}
                >
                  secretariat@ukmac.org.kh
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {currentYear} UKMAC (Union of Kampuchea Modern Agricultural Community). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className={`hover:text-zinc-300 transition-colors rounded-sm ${FOCUS_RING}`}>Privacy Policy</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#" className={`hover:text-zinc-300 transition-colors rounded-sm ${FOCUS_RING}`}>Constitutional Statutes</a>
            <span aria-hidden="true">&bull;</span>
            <a
              href="https://www.maff.gov.kh/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-brand-green-400 transition-colors flex items-center gap-1 rounded-sm ${FOCUS_RING}`}
            >
              <span>MAFF Cambodia</span>
              <ExternalLink className="w-3 h-3 stroke-[1.5]" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}