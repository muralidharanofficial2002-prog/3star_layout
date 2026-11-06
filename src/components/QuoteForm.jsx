import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Paperclip, MessageCircle, Info } from "lucide-react";
import { SERVICES, ART_BOARDS, MATERIALS, MORE_PRODUCTS, waLink, PHONE } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

const MATERIAL_OPTIONS = MATERIALS.map((m) => m.name);
const MORE_OPTIONS = MORE_PRODUCTS.map((p) => p.title);

const initial = {
  name: "", mobile: "", email: "", service: "", material: "",
  quantity: "", size: "", notes: "", artwork: "",
};

export default function QuoteForm({ enquiry }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const fileRef = useRef(null);
  const prefilled = useRef(false);

  useEffect(() => {
    if (enquiry && !prefilled.current) {
      prefilled.current = true;
      setForm((f) => ({
        ...f,
        service: enquiry.service || f.service,
        material: enquiry.material || enquiry.gsm || f.material,
      }));
    } else if (enquiry) {
      setForm((f) => ({
        ...f,
        service: enquiry.service || f.service,
        material: enquiry.material || enquiry.gsm || f.material,
      }));
    }
  }, [enquiry]);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: undefined });
    setSent(false);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    const digits = form.mobile.replace(/\D/g, "");
    if (!digits) errs.mobile = "Please enter your mobile number";
    else if (digits.length < 10) errs.mobile = "Enter a valid 10-digit mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (!form.service) errs.service = "Select a printing service";
    return errs;
  };

  const buildMessage = () => {
    const lines = [
      "*New Print Enquiry — 3STAR Website*",
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.mobile.trim()}`,
    ];
    if (form.email) lines.push(`Email: ${form.email.trim()}`);
    lines.push(`Printing Service: ${form.service}`);
    if (form.material) lines.push(`Material / GSM: ${form.material}`);
    if (form.quantity) lines.push(`Quantity: ${form.quantity}`);
    if (form.size) lines.push(`Size / Dimensions: ${form.size}`);
    if (form.notes) lines.push(`Requirements: ${form.notes}`);
    if (form.artwork) lines.push(`Artwork: ${form.artwork} (will share the file here on WhatsApp)`);
    return lines.join("\n");
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink/30 focus:border-royal focus:ring-4 focus:ring-royal/10";
  const border = (err) => (err ? "border-brandred" : "border-royal/15");
  const Err = ({ k }) =>
    errors[k] ? (
      <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-brandred" data-testid={`quote-error-${k}`}>
        <AlertCircle size={12} /> {errors[k]}
      </p>
    ) : null;

  const materialOptions = (
    <>
      <optgroup label="Art Board (GSM)">
        {ART_BOARDS.map((a) => (
          <option key={a.gsm} value={`${a.gsm} GSM Art Board`}>{a.gsm} GSM Art Board</option>
        ))}
      </optgroup>
      <optgroup label="Flex Materials">
        {MATERIAL_OPTIONS.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </optgroup>
    </>
  );

  return (
    <section id="quote" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHead
              eyebrow="Get a Quote"
              title={
                <>
                  Ready to Bring Your <span className="text-cmyk">Print Ideas to Life?</span>
                </>
              }
              sub="Fill in the details and send your enquiry straight to us on WhatsApp — we'll get back with pricing and timelines."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm text-ink/70">
                  <Paperclip size={16} className="mt-0.5 shrink-0 text-royal" />
                  <span>
                    <strong className="text-navy">Artwork upload:</strong> choose your file to attach its name to the
                    enquiry — the file itself is shared directly in the WhatsApp chat after sending.
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm text-ink/70">
                  <MessageCircle size={16} className="mt-0.5 shrink-0 text-royal" />
                  <span>
                    Your enquiry opens in WhatsApp to <strong className="text-navy">{PHONE}</strong> with everything
                    pre-filled. Nothing is stored on this website.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={submit}
              noValidate
              className="relative rounded-3xl border border-royal/10 bg-paper/60 p-6 shadow-card sm:p-8"
              data-testid="quote-form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">
                    Customer Name <span className="text-brandred">*</span>
                  </label>
                  <input data-testid="quote-input-name" className={`${field} ${border(errors.name)}`} placeholder="Your name" value={form.name} onChange={set("name")} />
                  <Err k="name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">
                    Mobile Number <span className="text-brandred">*</span>
                  </label>
                  <input data-testid="quote-input-mobile" inputMode="tel" className={`${field} ${border(errors.mobile)}`} placeholder="10-digit mobile number" value={form.mobile} onChange={set("mobile")} />
                  <Err k="mobile" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Email Address</label>
                  <input data-testid="quote-input-email" type="email" className={`${field} ${border(errors.email)}`} placeholder="you@example.com" value={form.email} onChange={set("email")} />
                  <Err k="email" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">
                    Printing Service <span className="text-brandred">*</span>
                  </label>
                  <select data-testid="quote-select-service" className={`${field} ${border(errors.service)}`} value={form.service} onChange={set("service")}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <optgroup label="More Products & Services">
                      {MORE_OPTIONS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </optgroup>
                  </select>
                  <Err k="service" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Material / GSM Selection</label>
                  <select data-testid="quote-select-material" className={field} value={form.material} onChange={set("material")}>
                    <option value="">Not sure yet</option>
                    {materialOptions}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Quantity</label>
                  <input data-testid="quote-input-quantity" className={field} placeholder="e.g. 500 pieces" value={form.quantity} onChange={set("quantity")} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Size / Dimensions</label>
                  <input data-testid="quote-input-size" className={field} placeholder="e.g. 6ft x 3ft banner, A4 flyer" value={form.size} onChange={set("size")} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Additional Requirements</label>
                  <textarea data-testid="quote-input-notes" rows={3} className={`${field} resize-none`} placeholder="Colours, finishing, deadline, delivery location…" value={form.notes} onChange={set("notes")} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13px] font-bold text-navy">Artwork Upload (optional)</label>
                  <input
                    ref={fileRef}
                    data-testid="quote-input-artwork"
                    type="file"
                    accept="image/*,.pdf,.ai,.psd,.cdr"
                    onChange={(e) => {
                      setForm({ ...form, artwork: e.target.files?.[0]?.name || "" });
                      setSent(false);
                    }}
                    className="w-full cursor-pointer rounded-xl border border-royal/15 bg-white px-4 py-2.5 text-sm text-ink/70 file:mr-3 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-royal"
                  />
                  {form.artwork && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-royal">
                      <Paperclip size={12} /> {form.artwork}
                    </p>
                  )}
                </div>
              </div>

              <button
                data-testid="quote-submit-button"
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brandred py-4 font-bold text-white shadow-[0_14px_30px_-12px_rgba(239,7,18,0.65)] transition-all hover:bg-[#d60610]"
              >
                Send Enquiry on WhatsApp
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-start gap-2.5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                    data-testid="quote-success-message"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <span>
                      WhatsApp is opening with your enquiry summary. If it didn't open, allow pop-ups and tap again —
                      please send your artwork file in the chat if you selected one.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-4 flex items-start gap-1.5 text-[11px] leading-relaxed text-ink/40">
                <Info size={12} className="mt-0.5 shrink-0" />
                Enquiries are sent via WhatsApp only — this website does not store your details.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
