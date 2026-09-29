// ============================================================
// Marquee.jsx
// Big scrolling tech strip (like the template's client
// marquee). Content is duplicated for a seamless loop;
// animation is disabled when printing.
// ============================================================
import { marquee } from "../data/resumeData";

export default function Marquee() {
  const items = [...marquee, ...marquee]; // two identical halves

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
