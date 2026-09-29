// ============================================================
// Education.jsx
// "Academic Background" — three record cards (degree ·
// school · dates/score chip). The current record (B.E.) is
// marked `primary` in the data and rendered most prominent.
// ============================================================
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <section className="education" id="education" data-reveal>
      <div className="sec-head">
        <h2 className="sec-title">
          Academic
          <br />
          Background
        </h2>
      </div>

      <div className="edu-grid">
        {education.map((e, i) => (
          <article
            className={`edu-card${e.primary ? " primary grain" : ""}`}
            key={i}
          >
            <span className="edu-label">{e.primary ? "Current" : "Record"}</span>
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
            <span className="edu-meta">{e.meta}</span>
            {e.note && <span className="edu-note">{e.note}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
