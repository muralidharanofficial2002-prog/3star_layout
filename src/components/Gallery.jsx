import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, Camera } from "lucide-react";
import { GALLERY, GALLERY_CATS } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const items = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  return (
    <section id="gallery" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          center
          eyebrow="Premium Printing Gallery"
          title={
            <>
              Work Off Our Presses, <span className="text-cmyk">Wall to Wall.</span>
            </>
          }
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-3 flex max-w-xl items-center justify-center gap-1.5 text-center text-xs text-ink/40">
            <Camera size={13} /> Demonstration photographs — replace with your own project photos anytime.
          </p>
        </Reveal>

        {/* filters */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {GALLERY_CATS.map((c) => (
              <button
                key={c}
                data-testid={`gallery-filter-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-[13px] font-bold transition-all ${
                  cat === c
                    ? "bg-navy text-white shadow-card"
                    : "bg-white text-ink/60 hover:text-navy hover:shadow-card"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* masonry */}
        <motion.div layout className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:balance]">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                layout
                key={g.img}
                data-testid={`gallery-item-${i}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                onClick={() => setLightbox(g)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-card"
              >
                <img src={g.img} alt={`${g.cat} — printing demonstration`} loading="lazy" className={`w-full object-cover ${g.h} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-navy">
                    {g.cat}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-navy">
                    <Expand size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
            data-testid="gallery-lightbox"
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-4xl"
            >
              <img src={lightbox.img} alt={`${lightbox.cat} — printing demonstration`} className="max-h-[80vh] w-full rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                {lightbox.cat} · Demonstration photograph
              </figcaption>
              <button
                data-testid="gallery-lightbox-close-button"
                onClick={() => setLightbox(null)}
                className="absolute -top-3 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-lift sm:-right-3"
                aria-label="Close image"
              >
                <X size={18} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
