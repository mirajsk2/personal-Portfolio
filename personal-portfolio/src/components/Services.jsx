// ============================================================
// Services.jsx
// "All Kinds of Frontend Solutions" — three-card grid.
// INTERACTIVE: NO card is highlighted on load. Hovering a card
// previews the solid-blue treatment; clicking pins it. Checklists
// double as the full skill list (ATS-friendly).
// ============================================================
import { useState } from "react";
import { services, contact } from "../data/resumeData";
import { TechIcon } from "./icons";

export default function Services() {
  const [active, setActive] = useState(-1); // -1 = none pinned
  const gh = contact.find((c) => c.icon === "github");

  return (
    <section className="services" id="what-i-do" data-reveal>
      <div className="sec-head">
        <h2 className="sec-title">
          What I
          <br />
          Do
        </h2>
        {gh && (
          <a className="btn pill" href={gh.href} target="_blank" rel="noopener noreferrer">
            Knows All <span className="arr">↗</span>
          </a>
        )}
      </div>

      <div className="svc-grid">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`svc-card${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(i);
            }}
          >
            <div className="svc-icon">
              <TechIcon name={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <p className="svc-blurb">{s.blurb}</p>
            <ul className="svc-list">
              {s.items.map((it) => (
                <li key={it}>
                  <span className="check">✓</span>
                  {it}
                </li>
              ))}
            </ul>
            {gh && (
              <a
                className="svc-arrow"
                href={gh.href}
                aria-label="View my work"
                onClick={(e) => e.stopPropagation()}
              >
                ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
