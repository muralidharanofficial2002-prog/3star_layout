import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PHONE, EMAIL, PHONE_TEL, waLink } from "../data/content";
import { Reveal, SectionHead } from "./ui-bits";

export default function Contact() {
  const actions = [
    { icon: Phone, label: "Call Now", value: PHONE, href: PHONE_TEL, testid: "contact-call-button", tone: "bg-navy text-gold" },
    { icon: MessageCircle, label: "WhatsApp Chat", value: PHONE, href: waLink("Hello 3STAR! I have a printing requirement."), testid: "contact-whatsapp-button", tone: "bg-[#1FA855] text-white" },
    { icon: Mail, label: "Email Us", value: EMAIL, href: `mailto:${EMAIL}`, testid: "contact-email-button", tone: "bg-royal text-white" },
  ];

  return (
    <section id="contact" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          center
          eyebrow="Contact Us"
          title={
            <>
              Let's Get Your Next Print <span className="text-cmyk">Moving.</span>
            </>
          }
          sub="3STAR – All Type of Printing Solutions · Digital | Flex | Offset Printing"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.07}>
              <a
                data-testid={a.testid}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-royal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.tone}`}>
                  <a.icon size={20} />
                </span>
                <span className="mt-4 font-display text-base font-bold text-navy">{a.label}</span>
                <span className="mt-1 break-all text-sm text-ink/60">{a.value}</span>
                <span className="mt-auto flex items-center gap-1 pt-4 text-[13px] font-bold text-royal">
                  Open <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.21}>
            <div
              data-testid="contact-directions-placeholder"
              className="flex h-full flex-col rounded-3xl border-2 border-dashed border-royal/20 bg-white/60 p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-ink/40">
                <MapPin size={20} />
              </span>
              <span className="mt-4 font-display text-base font-bold text-navy/60">Get Directions</span>
              <span className="mt-1 text-sm text-ink/40">
                Will be enabled once the verified business address is added.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
