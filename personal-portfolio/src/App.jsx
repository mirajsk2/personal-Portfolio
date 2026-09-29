// ============================================================
// App.jsx
// Page composition:
//   Nav       — sticky brand · pill nav · mobile menu · CTA
//   Hero      — two-tone display name · portrait · CTAs
//   About     — "Hi, I'm" · summary · facts · socials · starburst
//   Stats     — big-number strip
//   Skills    — dedicated professional skill groups
//   Services  — "What I Do" · 3 focus cards
//   Marquee   — scrolling tech strip
//   Projects  — alternating rows with mock browser cards
//   Experience— single neutral line (no fabricated history)
//   Education — record cards
//   Cta       — "Anything in Mind?" · contact links · starburst
//   Footer    — contact block
// Content lives in src/data/resumeData.js; styles in index.css.
// ============================================================
import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  // Subtle one-time section reveal (screen only, motion-safe).
  // Print and prefers-reduced-motion users see everything instantly.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div className="page">
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Services />
          <Marquee />
          <Projects />
          <Experience />
          <Education />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  );
}
