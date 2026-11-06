const ITEMS = [
  "Digital Printing",
  "Flex Banners",
  "Offset Press",
  "Art Board 90–350 GSM",
  "Stickers & Vinyl",
  "Visiting Cards",
  "2027 Calendars & Diaries",
  "LED Sign Boards",
  "Best Price & Best Quality",
];

const Row = ({ ariaHidden = false }) => (
  <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="whitespace-nowrap px-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-white/90">
          {item}
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 text-gold">
          <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor" />
        </svg>
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div data-testid="brand-marquee" className="relative overflow-hidden border-y border-white/10 bg-navy py-3.5">
      <div className="marquee-track flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
