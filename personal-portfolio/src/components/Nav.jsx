// ============================================================
// Nav.jsx
// Sticky top bar: brand left · pill nav center · CTA right.
//  · active-section state (IntersectionObserver scroll-spy)
//  · mobile menu with accessible toggle (aria-expanded/controls)
//  · smooth scrolling via CSS (html { scroll-behavior: smooth })
// Hidden when printing.
// ============================================================
import { useEffect, useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll-spy: highlight the section currently in the viewport.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Activate a section when it crosses the upper-middle band.
      { rootMargin: "-30% 0px -60% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <span className="brand">
          <span className="brand-mark">M</span> Miraj
        </span>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18">
            {open ? (
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            )}
          </svg>
        </button>

        <div id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a className="btn pill nav-cta" href="mailto:mirajmd89586@gmail.com">
          Let&apos;s Talk <span className="arr">↗</span>
        </a>
      </div>
    </nav>
  );
}
