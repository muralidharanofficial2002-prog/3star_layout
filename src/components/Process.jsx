import { motion } from "framer-motion";
import { MessageSquareText, SwatchBook, Printer, Truck } from "lucide-react";
import { PROCESS_STEPS } from "../data/content";
import { SectionHead } from "./ui-bits";

const MAP = { MessageSquareText, SwatchBook, Printer, Truck };

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          center
          eyebrow="Our Printing Process"
          title={
            <>
              From Your Idea <span className="text-cmyk">to the Perfect Print.</span>
            </>
          }
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12%] right-[12%] top-9 hidden h-0.5 origin-left bg-gradient-to-r from-royal via-gold to-brandred lg:block"
            aria-hidden
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = MAP[s.icon];
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-center"
                  data-testid={`process-step-${i + 1}`}
                >
                  <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-navy shadow-lift">
                    <Icon size={26} strokeWidth={1.6} className="text-gold" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brandred font-mono text-[11px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-ink/60">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
