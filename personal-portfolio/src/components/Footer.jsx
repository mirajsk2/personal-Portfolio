// ============================================================
// Footer.jsx
// Template-style footer: brand + a big "let's build" line on
// the left, contact block on the right, and a thin baseline
// with copyright + location.
// ============================================================
import { contact } from "../data/resumeData";
import { Icon } from "./icons";

export default function Footer() {
  const socials = contact.filter((c) =>
    ["github", "linkedin", "mail"].includes(c.icon)
  );
  const rows = contact.filter((c) => ["location", "phone", "mail"].includes(c.icon));

  return (
    <footer className="footer">
      <div className="foot-top">
        <div className="foot-left">
          <span className="brand">
            <span className="brand-mark">M</span> Miraj
          </span>
          <h2 className="foot-title">
            Today, let&apos;s build
            <br />
            something <em>great</em>.
          </h2>
        </div>

        <div className="foot-contact">
          {rows.map((c, i) => (
            <div className="foot-row" key={i}>
              <Icon name={c.icon} />
              {c.href ? (
                <a href={c.href}>{c.label}</a>
              ) : (
                <span>{c.label}</span>
              )}
            </div>
          ))}
          <div className="socials">
            {socials.map((c, i) => (
              <a
                className="social"
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
              >
                <Icon name={c.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© 2026 SK MD Miraj, Frontend Developer</span>
        <span>Bangalore, India</span>
      </div>
    </footer>
  );
}
