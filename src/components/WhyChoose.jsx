import { motion } from "framer-motion";
import { BadgeCheck, Layers, Handshake, Truck, Headset } from "lucide-react";
import { WHY_POINTS } from "../data/content";
import { SectionHead } from "./ui-bits";

const MAP = { BadgeCheck, Layers, Handshake, Truck, Headset };

export default function WhyChoose() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28 noise">
      {/* faint crop marks */}
      <div className="pointer-events-none absolute inset-4 hidden border border-white/5 lg:block" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          dark
          center
          eyebrow="Why Choose 3STAR"
          title={
            <>
              Built on Quality. <span className="text-gold">Trusted for Delivery.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/10">
          {WHY_POINTS.map((p, i) => {
            const Icon = MAP[p.icon];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative px-6 text-center lg:first:pl-0"
                data-testid={`why-point-${i + 1}`}
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05]">
                  <Icon size={24} strokeWidth={1.5} className="text-gold" />
                </span>
                <h3 className="mt-4 font-display text-[15px] font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">{p.desc}</p>
                <span className="mt-4 block font-mono text-[10px] tracking-[0.3em] text-white/25">0{i + 1}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
