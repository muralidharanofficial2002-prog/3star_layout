import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ART_BOARDS } from "../data/content";
import { Reveal, SectionHead, PaperStack } from "./ui-bits";

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

        {/* selector chips */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex snap-x gap-3 overflow-x-auto pb-2 no-scrollbar lg:grid lg:grid-cols-7 lg:overflow-visible">
            {ART_BOARDS.map((a) => {
              const isSel = a.gsm === sel.gsm;
              return (
                <button
                  key={a.gsm}
                  data-testid={`artboard-chip-${a.gsm}-gsm`}
                  onClick={() => setSel(a)}
                  className={`group relative min-w-[130px] snap-start overflow-hidden rounded-2xl border-2 bg-white p-4 text-left transition-all duration-300 ${
                    isSel ? "shadow-lift" : "border-transparent shadow-card hover:shadow-lift"
                  }`}
                  style={isSel ? { borderColor: a.tone } : {}}
                >
                  <span
                    className="inline-block rounded-md px-2 py-0.5 font-mono text-xs font-semibold text-white"
                    style={{ background: a.tone }}
                  >
                    {a.gsm} GSM
                  </span>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/50">Art Board</p>
                  <div className="mt-3">
                    <PaperStack tone={a.tone} />
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
                  <p className="mt-4 text-sm leading-relaxed text-white/70" data-testid="artboard-description">
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
            <div className="relative flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-3xl border border-royal/10 bg-white p-8 shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.gsm}
                  initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-72">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-x-0 h-8 rounded-[4px] border border-royal/15 bg-white shadow-md"
                        style={{ bottom: i * 9, transform: `skewX(-16deg)`, zIndex: 9 - i }}
                      />
                    ))}
                    <div className="absolute inset-x-0 bottom-0 h-3 rounded-b-[4px]" style={{ background: sel.tone, transform: "skewX(-16deg)", zIndex: 10 }} />
                    <div className="h-56" />
                  </div>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-ink/40">
                    {sel.gsm} GSM · Art Board · Stock {String(idx + 1).padStart(2, "0")}/07
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
