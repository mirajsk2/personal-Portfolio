// ============================================================
// Projects.jsx
// "Explore My Top Creations" — alternating rows: category
// eyebrow + name + description + tech chips on one side, a
// mock "browser" panel on the other (real screenshots, when
// provided via `p.screenshot`, replace the mock).
// Buttons are shown ONLY when a real URL exists:
//   · "GitHub"        — per-project repo or verified account
//   · "View Project"  — only with a real live URL
//   · "IN PROGRESS"   — subtle status badge
// No fake URLs are ever rendered.
// ============================================================
import { projects, contact } from "../data/resumeData";

function Mock({ p }) {
  const variant = p.mock === "dark" ? "dark" : "light";
  return (
    <div className={`proj-visual-inner ${p.screenshot ? "has-shot" : ""}`}>
      {p.screenshot ? (
        <img
          className="proj-shot"
          src={p.screenshot}
          alt={`${p.name} — ${p.label} project screenshot`}
        />
      ) : (
        <div className={`mock grain ${variant}`} aria-hidden="true">
          {/* Browser chrome bar */}
          <div className="mock-bar">
            <span />
            <span />
            <span />
            <em>{p.label}</em>
          </div>
          <div className="mock-word">{p.name}</div>
          <div className="mock-tech">{p.tech.slice(0, 3).join(" · ")}</div>
        </div>
      )}
    </div>
  );
}

function ProjectRow({ p }) {
  const gh = contact.find((c) => c.icon === "github");
  return (
    <article className="proj-row">
      <div className="proj-info">
        <span className="proj-label">{p.label}</span>
        <h3 className="proj-name">
          {p.name}
          {p.inProgress && <em className="proj-status">In Progress</em>}
        </h3>
        <p className="proj-desc">{p.description}</p>
        <div className="proj-chips">
          {p.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-btns">
          {p.live && (
            <a
              className="btn pill"
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span className="arr">↗</span>
            </a>
          )}
          {p.github && (
            <a
              className="btn pill"
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="arr">↗</span>
            </a>
          )}
          {gh && !p.github && !p.live && !p.inProgress && (
            <a
              className="btn pill"
              href={gh.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`My GitHub profile`}
            >
              GitHub <span className="arr">↗</span>
            </a>
          )}
        </div>
      </div>
      <div className="proj-visual">
        <Mock p={p} />
      </div>
    </article>
  );
}

export default function Projects() {
  const gh = contact.find((c) => c.icon === "github");
  return (
    <section className="projects" id="projects" data-reveal>
      <div className="sec-head">
        <h2 className="sec-title">
          Explore My Top
          <br />
          Creations
        </h2>
        {gh && (
          <a className="btn pill" href={gh.href} target="_blank" rel="noopener noreferrer">
            Explore All <span className="arr">↗</span>
          </a>
        )}
      </div>

      <div className="proj-list">
        {projects.map((p) => (
          <ProjectRow p={p} key={p.name} />
        ))}
      </div>
    </section>
  );
}
