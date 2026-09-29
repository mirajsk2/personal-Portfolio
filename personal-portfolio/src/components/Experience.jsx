// ============================================================
// Experience.jsx
// The resume contains no employment history, so instead of a
// fabricated job list this is a single neutral, honest line.
// (Not part of the navbar.)
// ============================================================
import { experienceNote } from "../data/resumeData";

export default function Experience() {
  return (
    <section className="experience" data-reveal aria-label="Experience">
      <div className="sec-head">
        <h2 className="sec-title">Experience</h2>
        <span className="eyebrow">How I&rsquo;m leveling up</span>
      </div>
      <p className="exp-note">{experienceNote}</p>
    </section>
  );
}
