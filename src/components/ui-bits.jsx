import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, dark = false }) => (
  <div
    className={`inline-flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] ${
      dark ? "text-white/60" : "text-royal"
    }`}
  >
    <span className={`h-px w-8 ${dark ? "bg-white/40" : "bg-royal/50"}`} />
    {children}
  </div>
);

export const SectionHead = ({ eyebrow, title, sub, dark = false, center = false }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className={`mt-4 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-ink/60"}`}>{sub}</p>
      </Reveal>
    )}
  </div>
);

export const RollSwatch = ({ roll, tone }) => (
  <div className="relative h-24 w-full overflow-hidden rounded-xl" style={{ background: roll }}>
    <div className="absolute inset-y-3 right-3 w-24 rounded-lg shadow-inner" style={{ background: roll, boxShadow: "inset 0 0 0 1px rgba(7,27,84,0.08)" }}>
      <div className="absolute inset-y-0 right-0 w-5 rounded-r-lg" style={{ background: tone, opacity: 0.85 }} />
      <div className="absolute top-1/2 right-1.5 h-9 w-9 -translate-y-1/2 rounded-full border-2 border-white/70 bg-white/20" />
    </div>
    <div className="absolute inset-y-3 left-3 w-10 rounded-md opacity-70" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))", boxShadow: "inset 0 0 0 1px rgba(7,27,84,0.08)" }} />
  </div>
);

export const PaperStack = ({ tone }) => (
  <div className="relative h-16 w-28 mx-auto">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="absolute inset-x-0 h-5 rounded-[3px] border border-royal/15 bg-white shadow-sm"
        style={{ bottom: i * 7, transform: `skewX(-14deg)`, zIndex: 5 - i }}
      />
    ))}
    <div className="absolute inset-x-0 bottom-0 h-2.5 rounded-b-[3px]" style={{ background: tone, transform: "skewX(-14deg)", zIndex: 6 }} />
  </div>
);
