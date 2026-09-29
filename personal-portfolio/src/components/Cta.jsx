// ============================================================
// Cta.jsx
// "Anything in Mind? Let's Talk" — centered call-to-action:
// squiggles on both sides, big two-line heading, email button,
// quick contact links (Email · Phone · LinkedIn · GitHub),
// and the starburst badge. This is the #contact target.
// ============================================================
import { contact, ctaSub } from "../data/resumeData";
import { Icon } from "./icons";
import { Starburst, Squiggle } from "./decor";

// Quick-link labels (resume/career-page style, no invented URLs).
const quickLinks = [
  { icon: "mail", label: "Email" },
  { icon: "phone", label: "Phone" },
  { icon: "linkedin", label: "LinkedIn" },
  { icon: "github", label: "GitHub" },
];

export default function Cta() {
  const mail = contact.find((c) => c.icon === "mail");
  const quick = quickLinks.map((q) => ({ ...q, href: contact.find((c) => c.icon === q.icon)?.href }));

  return (
    <section className="cta" id="contact" data-reveal>
      <Squiggle className="cta-squiggle left" aria-hidden="true" />

      <div className="cta-inner">
        <h2 className="display cta-title">
          Anything in Mind?
          <br />
          <span className="blue">Let&apos;s Talk</span>
        </h2>
        <p className="cta-sub">{ctaSub}</p>
        {mail && (
          <a className="btn solid" href={mail.href}>
            {mail.label} <span className="arr">↗</span>
          </a>
        )}
        <div className="cta-links">
          {quick.map((q) => (
            <a
              key={q.icon}
              className="cta-link"
              href={q.href}
              target={q.href && q.href.startsWith("http") ? "_blank" : undefined}
              rel={q.href && q.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon name={q.icon} />
              {q.label}
            </a>
          ))}
        </div>
        <Starburst text="I'M READY TO TALK" className="cta-star" />
      </div>

      <Squiggle className="cta-squiggle right" aria-hidden="true" />
    </section>
  );
}
