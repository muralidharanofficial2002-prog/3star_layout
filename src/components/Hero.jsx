import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { HERO_IMG, scrollToId } from "../data/content";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.85, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero({ onQuote }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="home" ref={ref} className="reg-mark relative overflow-hidden bg-white pt-[104px] lg:pt-[120px]">
      {/* CMYK registration dots */}
      <motion.div style={{ y: markY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-10 right-1/4 grid grid-cols-8 gap-2 opacity-[0.16]">
          {["#00B7EB", "#EF0712", "#FFD522", "#071B54"].map((c, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, j) => (
                <span key={j} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-24 left-6 hidden lg:block font-mono text-[10px] uppercase tracking-[0.25em] text-royal/40 [writing-mode:vertical-rl]">
          Digital · Flex · Offset — Registration OK
        </div>
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[45%_55%] lg:items-center lg:gap-8 lg:pb-24 lg:pt-10">
        {/* left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-royal/15 bg-paper px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-royal"
          >
            <Sparkles size={12} className="text-brandred" />
            All Type of Printing Solutions
          </motion.div>

          <h1 className="mt-6 font-display font-extrabold tracking-tight leading-[1.02] text-navy text-[2.6rem] sm:text-6xl lg:text-[4.1rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
                YOUR ONE-STOP
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block text-cmyk">
                PRINTING SERVICE
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-bold text-ink sm:text-xl"
          >
            Digital <span className="text-brandred">|</span> Flex <span className="text-brandred">|</span> Offset Printing
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.6 }}
            className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60"
          >
            High Quality Printing <span className="mx-1 font-mono text-royal">•</span> Competitive Price{" "}
            <span className="mx-1 font-mono text-royal">•</span> Quick Delivery
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <button
              data-testid="hero-order-now-button"
              onClick={() => scrollToId("services")}
              className="group inline-flex items-center gap-2 rounded-full bg-brandred px-7 py-3.5 font-bold text-white shadow-[0_14px_30px_-12px_rgba(239,7,18,0.65)] transition-all hover:shadow-[0_18px_36px_-12px_rgba(239,7,18,0.8)]"
            >
              Order Now
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-get-quote-button"
              onClick={onQuote}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 font-bold text-navy transition-all hover:bg-navy hover:text-white"
            >
              <FileText size={17} className="transition-transform duration-300 group-hover:-rotate-6" />
              Get a Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold/25 px-3.5 py-2 text-[13px] font-bold text-navy"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-brandred">3STAR</span>
            Best Price & Best Quality
          </motion.div>
        </div>

        {/* right visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div style={{ y: imgY }} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-royal/15 via-transparent to-brandred/15 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-royal/10 shadow-lift">
              <img
                src={HERO_IMG}
                alt="Commercial printing showroom with flex and offset printing machines and freshly printed materials"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/20" />
            </div>

            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-5 left-5 rounded-2xl border border-royal/10 bg-white/95 px-4 py-3 shadow-card backdrop-blur"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-royal">Art Board</p>
              <p className="font-display text-sm font-bold text-navy">90 – 350 GSM</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="absolute -top-4 right-5 rounded-2xl bg-navy px-4 py-3 text-white shadow-lift"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Flex Materials</p>
              <p className="font-display text-sm font-bold">Flex · Star · Backlit · Vinyl</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
