import {
  ArrowUpRight, Sparkles, Copy, Sticker, IdCard, Grid3x3, Contact, BookOpen, Disc,
  Mail, GraduationCap, NotebookText, ScanLine, Building2, Wrench, Square, Eye,
} from "lucide-react";
import { MORE_PRODUCTS } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

const MAP = {
  Copy, Sticker, IdCard, Grid3x3, Sparkles, Contact, BookOpen, Disc, Mail, GraduationCap,
  NotebookText, ScanLine, Building2, Wrench, Square, Eye,
};

export default function MoreProducts({ onEnquire }) {
  return (
    <section id="more" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Additional Products & Services"
          title={
            <>
              More Than <span className="text-cmyk">Just Printing.</span>
            </>
          }
          sub="From papers and special boards to elevation and fabrication — everything a print job can need."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MORE_PRODUCTS.map((p, i) => {
            const Icon = MAP[p.icon] || Sparkles;
            return (
              <Reveal key={p.title} delay={(i % 4) * 0.05}>
                <button
                  data-testid={`more-product-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`}
                  onClick={() => onEnquire(p.title)}
                  className="group flex h-full w-full items-start gap-3.5 rounded-2xl border border-royal/10 bg-paper/60 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:bg-white hover:shadow-card"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-royal">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[14px] font-bold leading-snug text-navy">{p.title}</span>
                    <span className="mt-1.5 flex items-center gap-1 text-[12px] font-bold text-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Enquire <ArrowUpRight size={12} />
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
