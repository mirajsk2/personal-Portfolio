// ============================================================
// Hero.jsx
// Top of the page:
//  · huge two-tone display name (ink + blue)
//  · role line: Frontend Developer + stack accents
//  · availability chip (no employment implied)
//  · "View Projects" + "Download Resume" pill buttons
//  · portrait photo with a hand-drawn squiggle accent
// ============================================================
import { profile, heroBio, availability } from "../data/resumeData";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <h1 className="display">
          <span className="l1">{profile.nameFirst}</span>
          <span className="l2">{profile.nameAccent}</span>
        </h1>
        <p className="hero-role">
          {profile.title} <em>{profile.tagline}</em>
        </p>
        <p className="hero-bio">{heroBio}</p>
        <p className="hero-avail" aria-label={availability}>
          <span className="dot" aria-hidden="true" />
          {availability}
        </p>
        <div className="hero-actions">
          <a className="btn ink" href="#projects">
            View Projects <span className="arr">↗</span>
          </a>
          <a className="btn pill" href="Resume 01.pdf" download>
            Download Resume <span className="arr">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-media">
        <img
          className="hero-photo"
          src={profile.avatarSrc}
          alt={`Portrait of ${profile.name}`}
        />
      </div>
    </header>
  );
}
