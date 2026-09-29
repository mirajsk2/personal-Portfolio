// ============================================================
// Skills.jsx
// Dedicated professional Skills section: one card per skill
// group (Frontend / Backend / Database / Version Control /
// Tools / Computer Science / Soft Skills), chips inside.
// All entries are resume-supported — nothing invented.
// ============================================================
import { skillGroups } from "../data/resumeData";

export default function Skills() {
  return (
    <section className="skills" id="skills" data-reveal aria-label="Skills">
      <div className="sec-head">
        <h2 className="sec-title">Skills</h2>
        <span className="eyebrow">What I work with</span>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-chips">
              {group.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
