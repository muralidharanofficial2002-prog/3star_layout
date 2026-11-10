import { Phone, Mail, MessageCircle, Star } from "lucide-react";
const logo = "./logo-3star-transparent.png";
import { NAV_LINKS, SERVICES, ART_BOARDS, MATERIALS, PHONE, EMAIL, PHONE_TEL, waLink, scrollToId } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy pt-16 text-white noise">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <div className="inline-block rounded-2xl bg-white px-4 py-3">
              <img src={logo} alt="3STAR – All Type of Printing Solutions logo" className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              All Type of Printing Solutions — Digital, Flex and Offset printing with the best price and best quality.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a data-testid="footer-phone-button" href={PHONE_TEL} aria-label="Call 3STAR" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-gold hover:text-navy">
                <Phone size={16} />
              </a>
              <a data-testid="footer-whatsapp-button" href={waLink("Hello 3STAR!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 3STAR" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-gold hover:text-navy">
                <MessageCircle size={16} />
              </a>
              <a data-testid="footer-email-button" href={`mailto:${EMAIL}`} aria-label="Email 3STAR" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-gold hover:text-navy">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* services */}
          <nav aria-label="Footer printing services">
            <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              <Star size={11} className="text-brandred" /> Printing Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button data-testid={`footer-service-${s.id}`} onClick={() => scrollToId("services")} className="text-sm text-white/65 transition-colors hover:text-gold">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* popular products */}
          <nav aria-label="Footer popular products">
            <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              <Star size={11} className="text-brandred" /> Popular Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[...ART_BOARDS.slice(0, 7).map((a) => `${a.gsm} GSM Art Board`)].map((p) => (
                <li key={p}>
                  <button data-testid={`footer-product-${p.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} onClick={() => scrollToId("products")} className="text-sm text-white/65 transition-colors hover:text-gold">
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              <Star size={11} className="text-brandred" /> Contact Information
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li>
                <a data-testid="footer-contact-phone" href={PHONE_TEL} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Phone size={14} className="shrink-0 text-gold" /> {PHONE}
                </a>
              </li>
              <li>
                <a data-testid="footer-contact-whatsapp" href={waLink("Hello 3STAR!")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <MessageCircle size={14} className="shrink-0 text-gold" /> WhatsApp: {PHONE}
                </a>
              </li>
              <li>
                <a data-testid="footer-contact-email" href={`mailto:${EMAIL}`} className="flex items-start gap-2.5 break-all transition-colors hover:text-gold">
                  <Mail size={14} className="mt-0.5 shrink-0 text-gold" /> {EMAIL}
                </a>
              </li>
            </ul>
            <button
              data-testid="footer-quote-button"
              onClick={() => scrollToId("quote")}
              className="mt-6 rounded-full bg-brandred px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d60610]"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* watermark */}
        <div className="pointer-events-none select-none overflow-hidden" aria-hidden>
          <p className="whitespace-nowrap text-center font-display text-[18vw] font-extrabold leading-[0.8] text-white/[0.04] lg:text-[11rem]">
            3STAR PRINT
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-[13px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} 3STAR – All Type of Printing Solutions. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Best Price & Best Quality</p>
        </div>
      </div>
    </footer>
  );
}
