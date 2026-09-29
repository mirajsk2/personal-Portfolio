// ============================================================
// decor.jsx
// Hand-drawn style decorative SVGs used across the template:
//  · Starburst — spiky "seal" badge ("I'M READY TO TALK")
//  · Squiggle  — looping blue scribble line
// All deterministic (no randomness), so print output is stable.
// ============================================================

// Spiky seal with a subtle jitter for a hand-cut feel.
export function Starburst({ text, className = "" }) {
  const spikes = 22;
  const cx = 50;
  const cy = 50;
  const R = 49; // outer radius
  const r = 42; // inner radius
  const pts = [];
  for (let i = 0; i < spikes * 2; i++) {
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    const jitter = ((i * 37) % 7) - 3; // deterministic wobble
    const rad =
      i % 2 === 0
        ? R + jitter * 0.35
        : r - jitter * 0.2;
    pts.push(
      `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`
    );
  }

  return (
    <div className={`starburst ${className}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={pts.join(" ")} />
      </svg>
      <span className="starburst-text">
        {text.split(" ").map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </span>
    </div>
  );
}

// Looping scribble line (used as a decorative accent).
export function Squiggle({ className = "" }) {
  return (
    <svg
      className={`squiggle ${className}`}
      viewBox="0 0 220 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 34 C14 8 26 8 30 34 S44 60 50 34 C54 8 66 8 70 34 S84 60 90 34 C94 8 106 8 110 34 S124 60 130 34 C134 8 146 8 150 34 S164 60 170 34 C174 8 186 8 190 34 S204 60 210 34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
