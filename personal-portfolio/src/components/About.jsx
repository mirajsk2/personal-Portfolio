// ============================================================
// About.jsx
// "Hi, I'm SK MD MIRAJ 👋" block: summary with underlined
// accent words, structured facts (location · education ·
// university · semester), social circles, and on the right,
// a hand-drawn squiggle + the "I'M READY TO TALK" starburst.
// No invented internship or employment history.
// ============================================================
import { profile, aboutText, aboutFacts, contact } from "../data/resumeData";
import { Icon } from "./icons";
import { Starburst, Squiggle } from "./decor";

// Words to render with the underlined-italic accent treatment.
const EMPHASIZE = ["Frontend Developer", "responsive", "modular", "user-friendly"];

// Split the text on emphasized phrases, wrapping each in <em>.
function richText(text) {
  const tokens = [];
  let last = 0;
  for (const phrase of EMPHASIZE) {
    let idx = text.indexOf(phrase, last);
    while (idx !== -1) {
      if (idx > last) tokens.push(<span key={`p-${last}`}>{text.slice(last, idx)}</span>);
      tokens.push(
        <em key={`s-${idx}`} className="hl">
          {phrase}
        </em>
      );
      last = idx + phrase.length;
      idx = text.indexOf(phrase, last);
    }
  }
  if (last < text.length) tokens.push(<span key="end">{text.slice(last)}</span>);
  return tokens;
}

export default function About() {
  const socials = contact.filter((c) =>
    ["github", "linkedin", "mail", "phone"].includes(c.icon)
  );
  const loc = contact.find((c) => c.icon === "location");

  return (
    <section className="about" id="about" data-reveal>
      <div className="about-main">
        <p className="eyebrow">
          Hi, I&apos;m <span aria-hidden="true">👋</span>
        </p>
        <h2 className="about-name">{profile.name}</h2>
        <p className="about-text">{richText(aboutText)}</p>

        <div className="about-facts">
          {aboutFacts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fact-label">{f.label}</span>
              <span className="fact-value">{f.value}</span>
            </div>
          ))}
        </div>

        <div className="about-foot">
          <div className="socials">
            {socials.map((c, i) => (
              <a
                className="social"
                key={i}
                href={c.href || "#"}
                aria-label={c.label}
                target={c.href && c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href && c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon name={c.icon} />
              </a>
            ))}
          </div>
          {loc && <span className="loc">{loc.label}</span>}
        </div>
      </div>

      <div className="about-side" aria-hidden="true">
        <Squiggle className="about-squiggle" />
        <Starburst text="I'M READY TO TALK" />
      </div>
    </section>
  );
}
