import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Printer, Layers, Flag, Sticker, IdCard, BookOpen, Image, Presentation, Mail, Package,
  ArrowUpRight, X, Check, ShieldAlert,
} from "lucide-react";
import { SERVICES, scrollToId } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

const ICONS = {
  Printer, Layers, Flag, Sticker, IdCard, BookOpen, Image, Presentation, Mail, Package,
};

export default function Services({ onEnquire }) {
  const [open, setOpen] = useState(null);
  const active = SERVICES.find((s) => s.id === open);

  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Printing Services"
            title={
              <>
                Everything You Need. <span className="text-cmyk">Perfectly Printed.</span>
              </>
            }
            sub="Complete Printing Solutions Under One Roof"
          />
          <Reveal delay={0.2}>
            <button
              data-testid="services-quote-cta"
              onClick={onEnquire}
              className="hidden md:inline-flex items-center gap-2 rounded-full border-2 border-royal px-6 py-3 text-sm font-bold text-royal transition-colors hover:bg-royal hover:text-white"
            >
              Get a Quote <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.id} delay={(i % 5) * 0.06}>
                <motion.button
                  data-testid={`service-card-${s.id}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  onClick={() => setOpen(s.id)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-transparent bg-white text-left shadow-card ring-1 ring-royal/5 transition-shadow hover:border-royal/30 hover:shadow-lift"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-royal shadow-card">
                      <Icon size={17} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[15px] font-bold leading-snug text-navy">{s.title}</h3>
                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-[13px] font-bold text-royal">
                      Learn More
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* service detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setOpen(null)}
            data-testid="service-modal-backdrop"
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl bg-white shadow-lift sm:rounded-3xl"
              data-testid="service-detail-modal"
            >
              <div className="relative h-48 sm:h-56">
                <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <button
                  data-testid="service-modal-close-button"
                  onClick={() => setOpen(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-card"
                  aria-label="Close service details"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">3STAR Service</p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{active.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-[15px] leading-relaxed text-ink/70">{active.desc}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 rounded-xl bg-paper px-3.5 py-3 text-[13px] font-semibold text-navy">
                      <Check size={15} className="mt-0.5 shrink-0 text-royal" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    data-testid="service-modal-enquire-button"
                    onClick={() => {
                      setOpen(null);
                      onEnquire(active.title);
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-brandred px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d60610]"
                  >
                    Enquire for {active.title} <ArrowUpRight size={15} />
                  </button>
                  <button
                    data-testid="service-modal-dismiss-button"
                    onClick={() => setOpen(null)}
                    className="rounded-full border border-royal/20 px-6 py-3 text-sm font-bold text-navy hover:bg-paper"
                  >
                    Keep Browsing
                  </button>
                </div>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-ink/40">
                  <ShieldAlert size={13} /> Details are general service descriptions — share your requirement for exact specifications.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
