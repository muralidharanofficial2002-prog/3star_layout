import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ART_BOARDS } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

export default function ArtBoard({ onEnquire }) {
  const [sel, setSel] = useState(ART_BOARDS[3]);
  const idx = ART_BOARDS.findIndex((a) => a.gsm === sel.gsm);

  return (
    <section id="products" className="reg-mark relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Art Board Products"
          title={
            <>
              Find the Perfect Paper <span className="text-cmyk">for Every Print.</span>
            </>
          }
          sub="Select a GSM to preview the board category — art board stocks from 90 to 350 GSM."
        />

        {/* selector cards with GSM chart icons and details below for all 7 GSM boxes */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex snap-x gap-3.5 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-7 lg:overflow-visible">
            {ART_BOARDS.map((a) => {
              const isSel = a.gsm === sel.gsm;
              return (
                <button
                  key={a.gsm}
                  data-testid={`artboard-chip-${a.gsm}-gsm`}
                  onClick={() => setSel(a)}
                  className={`group relative flex min-w-[160px] snap-start flex-col overflow-hidden rounded-2xl border-2 bg-white p-3 text-left transition-all duration-300 lg:min-w-0 ${
                    isSel ? "-translate-y-1 shadow-lift" : "border-royal/10 shadow-card hover:-translate-y-0.5 hover:shadow-lift"
                  }`}
                  style={isSel ? { borderColor: a.tone } : {}}
                >
                  <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-navy/10 bg-[#F2EDE2] p-2.5">
                    <img
                      src={a.iconImg}
                      alt={`${a.gsm} GSM icons - ${a.details}`}
                      loading="lazy"
                      className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-1 pb-1 pt-3">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <p className="font-display text-sm font-extrabold text-[#0A4D96]">{a.gsm} GSM</p>
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ background: a.tone }}
                        />
                      </div>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">
                        Art Board
                      </p>
                      <p
                        data-testid={`artboard-details-${a.gsm}-gsm`}
                        className="mt-2 border-t border-royal/10 pt-2 text-[11.5px] font-semibold leading-snug text-ink/85"
                      >
                        {a.details}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* preview panel */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-7 text-white noise">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">Selected Stock</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.gsm}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 font-mono text-6xl font-semibold tracking-tight text-gold" data-testid="artboard-selected-gsm">
                    {sel.gsm}
                    <span className="ml-2 text-xl text-white/60">GSM</span>
                  </p>
                  <p className="mt-1 font-display text-lg font-bold">Art Board</p>
                  <p className="mt-3 inline-block rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-gold">
                    {sel.details}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70" data-testid="artboard-description">
                    {sel.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
              <button
                data-testid="artboard-enquire-button"
                onClick={() => onEnquire(`${sel.gsm} GSM Art Board`)}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold"
              >
                Enquire Now
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <span className="pointer-events-none absolute -bottom-6 -right-4 font-display text-[7rem] font-extrabold leading-none text-white/5">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-royal/10 bg-white p-4 shadow-card sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.gsm}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-1 flex-col justify-between"
                >
                  <div className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-[#0A4D96]/20 bg-[#F2EDE2] p-6 sm:flex-row sm:justify-around">
                    <img
                      src={sel.iconImg}
                      alt={`${sel.gsm} GSM Paper Thickness Icons`}
                      className="h-24 w-auto object-contain sm:h-28"
                    />
                    <div className="text-center sm:text-left">
                      <span
                        className="inline-flex items-center rounded-md px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white"
                        style={{ background: sel.tone }}
                      >
                        Paper Thickness Guide
                      </span>
                      <p className="mt-2 font-display text-2xl font-extrabold text-[#0A4D96]">
                        {sel.gsm} GSM
                      </p>
                      <p className="mt-1 max-w-xs text-sm font-semibold leading-snug text-ink/90">
                        {sel.details}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.22em] text-ink/50">
                    {sel.gsm} GSM · {sel.details} · Stock {String(idx + 1).padStart(2, "0")}/07
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
