import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { MATERIALS, MATERIAL_TABS } from "../data/content";
import { Reveal, SectionHead, RollSwatch } from "./ui-bits";

export default function FlexMaterials({ onEnquire }) {
  const [tab, setTab] = useState("All");
  const [sel, setSel] = useState(MATERIALS[1]);
  const list = MATERIALS.filter((m) => tab === "All" || m.cat === tab);

  return (
    <section id="materials" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28 noise">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          dark
          eyebrow="Flex Printing Materials"
          title={
            <>
              Materials That Make Every <span className="text-gold">Print Stand Out.</span>
            </>
          }
          sub="Rolls of flexible printing media for every application — pick a material to see its profile."
        />

        {/* tabs */}
        <Reveal delay={0.12}>
          <div className="mt-9 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {MATERIAL_TABS.map((t) => (
              <button
                key={t}
                data-testid={`material-tab-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setTab(t)}
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  tab === t ? "text-navy" : "text-white/70 hover:text-white"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="material-tab-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* material cards */}
          <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((m) => {
                const isSel = m.name === sel.name;
                return (
                  <motion.button
                    layout
                    key={m.name}
                    data-testid={`material-card-${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSel(m)}
                    className={`group rounded-2xl border-2 bg-white/[0.06] p-4 text-left backdrop-blur transition-all ${
                      isSel ? "border-gold bg-white/10" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <RollSwatch roll={m.roll} tone={m.tone} />
                    <p className="mt-3 font-display text-sm font-bold">{m.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">{m.cat}</p>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* detail panel */}
          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.name}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 shrink-0">
                      <RollSwatch roll={sel.roll} tone={sel.tone} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">{sel.cat}</p>
                      <h3 className="mt-1 font-display text-2xl font-bold" data-testid="material-detail-name">
                        {sel.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/75" data-testid="material-detail-desc">
                    {sel.desc}
                  </p>
                  <ul className="mt-4 space-y-2 text-[13px] text-white/70">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Available in standard roll widths
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Suitable for banners, signage & branding jobs
                    </li>
                  </ul>
                  <button
                    data-testid="material-enquire-button"
                    onClick={() => onEnquire(sel.name)}
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy transition-transform hover:scale-[1.02]"
                  >
                    Enquire for This Material
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
