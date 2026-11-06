import { useCallback, useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import ArtBoard from "./components/ArtBoard";
import MoreProducts from "./components/MoreProducts";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import { scrollToId, waLink } from "./data/content";

function App() {
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  const handleEnquire = useCallback((label) => {
    setEnquiry({ [label.includes("GSM") ? "gsm" : "service"]: label });
    setTimeout(() => scrollToId("quote"), 80);
  }, []);

  const handleQuote = useCallback(() => scrollToId("quote"), []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navbar onQuote={handleQuote} />
        <main>
          <Hero onQuote={handleQuote} />
          <Marquee />
          <Services onEnquire={handleEnquire} />
          <ArtBoard onEnquire={handleEnquire} />
          <MoreProducts onEnquire={handleEnquire} />
          <WhyChoose />
          <Process />
          <QuoteForm enquiry={enquiry} />
        </main>
        <Footer />

        {/* floating WhatsApp */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
          data-testid="floating-whatsapp-button"
          href={waLink("Hello 3STAR! I have a printing requirement.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-[0_16px_36px_-12px_rgba(31,168,85,0.7)] transition-transform hover:scale-110"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </ErrorBoundary>
  );
}

export default App;
