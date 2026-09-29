// ============================================================
// Stats.jsx
// The big-number strip (template's "1.9k+ / 1,320+ / 07" row).
// ============================================================
import { stats } from "../data/resumeData";

export default function Stats() {
  return (
    <section className="stats" data-reveal aria-label="Key numbers">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
