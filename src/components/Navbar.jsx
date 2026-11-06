import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronDown, Menu, X, ArrowUpRight, Star } from "lucide-react";
import logo from "../assets/logo-3star-transparent.png";
import {
  NAV_LINKS,
  ART_BOARDS,
  MATERIALS,
  SERVICES,
  MORE_PRODUCTS,
  PHONE,
  EMAIL,
  PHONE_TEL,
  scrollToId,
} from "../data/content";

const PRODUCT_ITEMS = [
  ...ART_BOARDS.slice(0, 4).map((a) => ({ label: `${a.gsm} GSM Art Board`, id: "products" })),
  { label: "All Art Boards (90–350 GSM)", id: "products" },
  { label: "Clear, White PVC & Paper Stickers", id: "more" },
  { label: "Special Boards & Sheets", id: "more" },
];

const SERVICE_ITEMS = [
  ...SERVICES.map((s) => ({ label: s.title, id: "services" })),
  { label: "Elevation & Fabrication Work", id: "more" },
  { label: "B&W A4 / A3 Xerox", id: "more" },
];

export default function Navbar({ onQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = NAV_LINKS.map((l) => l.id);
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    setOpenMenu(null);
    setTimeout(() => scrollToId(id), mobileOpen ? 250 : 0);
  };

  const dropdowns = { products: PRODUCT_ITEMS, services: SERVICE_ITEMS };

  const enterMenu = (key) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const leaveMenu = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* top contact strip */}
      <div
        data-testid="top-contact-strip"
        className={`bg-navy text-white transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 text-xs">
          <div className="flex items-center gap-5">
            <a data-testid="strip-phone-link" href={PHONE_TEL} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} /> {PHONE}
            </a>
            <a
              data-testid="strip-email-link"
              href={`mailto:${EMAIL}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail size={12} /> {EMAIL}
            </a>
          </div>
          <span className="hidden md:block font-mono tracking-[0.18em] uppercase text-[10px] text-white/70">
            Best Price & Best Quality
          </span>
        </div>
      </div>

      {/* main header */}
      <header
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-royal/10 shadow-[0_8px_30px_-18px_rgba(7,27,84,0.35)]"
            : "bg-white/95 backdrop-blur border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <button data-testid="nav-logo-button" onClick={() => go("home")} className="flex items-center shrink-0" aria-label="3STAR home">
            <img src={logo} alt="3STAR – All Type of Printing Solutions logo" className="h-12 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const hasDrop = !!link.dropdown;
              return (
                <div key={link.label} className="relative" onMouseEnter={() => hasDrop && enterMenu(link.dropdown)} onMouseLeave={leaveMenu}>
                  <button
                    data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => go(link.id)}
                    className={`group relative flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                      active === link.id ? "text-royal" : "text-ink/80 hover:text-royal"
                    }`}
                  >
                    {link.label}
                    {hasDrop && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${openMenu === link.dropdown ? "rotate-180" : ""}`} />
                    )}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal to-brandred transition-transform duration-300 origin-left ${
                        active === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {hasDrop && openMenu === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2"
                      >
                        <div className="overflow-hidden rounded-2xl border border-royal/10 bg-white shadow-lift">
                          <div className="h-1 bg-gradient-to-r from-royal via-gold to-brandred" />
                          <div className="max-h-[320px] overflow-y-auto py-2 no-scrollbar">
                            {dropdowns[link.dropdown].map((item) => (
                              <button
                                key={item.label}
                                data-testid={`dropdown-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                onClick={() => go(item.id)}
                                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium text-ink/80 transition-colors hover:bg-paper hover:text-royal"
                              >
                                {item.label}
                                <ArrowUpRight size={14} className="text-royal/40" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              data-testid="nav-get-quote-button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onQuote}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brandred px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(239,7,18,0.6)] hover:bg-[#d60610] transition-colors"
            >
              Get a Quote <ArrowUpRight size={16} />
            </motion.button>
            <button
              data-testid="nav-mobile-menu-button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-royal/15 text-navy"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-white shadow-lift lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-royal/10 px-5 py-4">
                <img src={logo} alt="3STAR logo" className="h-10 w-auto" />
                <button
                  data-testid="nav-mobile-close-button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-royal/15 text-navy"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="h-1 bg-gradient-to-r from-royal via-gold to-brandred" />
              <nav className="flex flex-col px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="border-b border-royal/5">
                    {link.dropdown ? (
                      <>
                        <button
                          data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setMobileDrop(mobileDrop === link.dropdown ? null : link.dropdown)}
                          className="flex w-full items-center justify-between py-3.5 text-left font-display text-lg font-bold text-navy"
                        >
                          {link.label}
                          <ChevronDown size={18} className={`transition-transform ${mobileDrop === link.dropdown ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileDrop === link.dropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3">
                                {dropdowns[link.dropdown].map((item) => (
                                  <button
                                    key={item.label}
                                    onClick={() => go(item.id)}
                                    className="block w-full py-2 text-left text-sm font-medium text-ink/70 hover:text-royal"
                                  >
                                    {item.label}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => go(link.id)}
                        className="flex w-full items-center gap-2 py-3.5 text-left font-display text-lg font-bold text-navy"
                      >
                        <Star size={13} className="text-brandred" /> {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </nav>
              <div className="px-5 pb-8">
                <button
                  data-testid="mobile-get-quote-button"
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(onQuote, 250);
                  }}
                  className="w-full rounded-full bg-brandred py-3.5 font-bold text-white"
                >
                  Get a Quote
                </button>
                <a data-testid="mobile-strip-phone" href={PHONE_TEL} className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy">
                  <Phone size={15} className="text-royal" /> {PHONE}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
