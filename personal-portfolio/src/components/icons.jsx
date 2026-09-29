// ============================================================
// icons.jsx
// All iconography as inline SVGs (no icon-font dependencies,
// so the resume prints to PDF with zero missing glyphs).
// Two registries:
//   icons      — contact/hero icons (stroked, teal)
//   techIcons  — tech-stack logos for the dark section
// ============================================================

// Base stroked icon (contact rows).
function Svg({ children, className = "icon", ...rest }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

// Base tech-logo icon (flat, lighter weight, sized for dark cards).
function TechSvg({ children, ...rest }) {
  return (
    <svg
      className="tech-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

// ---------------- Contact / hero icons ----------------
export const icons = {
  location: () => (
    <Svg>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  ),
  phone: () => (
    <Svg>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Svg>
  ),
  mail: () => (
    <Svg>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Svg>
  ),
  linkedin: () => (
    <Svg>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" />
    </Svg>
  ),
  github: () => (
    // Official GitHub mark (filled, not stroked).
    <Svg fill="currentColor" stroke="none">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.795 8.205 11.385.6.105.819-.257.819-.57v-1.231c-3.345.726-4.033-1.576-4.033-1.576-.546-1.36-1.333-1.725-1.333-1.725-1.087-.731.08-.712.08-.712 1.19.082 1.815 1.235 1.815 1.235 1.06 1.828 2.78 1.307 3.464.998.108-.776.417-1.307.762-1.605-2.665-.305-5.467-1.324-5.467-5.931 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.525.117-3.176 0 0 1.002-.322 3.3 1.231.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.298-1.553 3.3-1.231 3.3-1.231.652 1.651.24 2.873.117 3.176.77.84 1.235 1.91 1.235 3.22 0 4.617-2.803 5.626-5.472 5.922.428.368.811.995.854 2.022v1.194c0 .32.216.68.826.571C20.564 21.791 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </Svg>
  ),
};

// Render a named contact icon by key.
export function Icon({ name, ...rest }) {
  const Comp = icons[name] || icons.location;
  return <Comp {...rest} />;
}

// ---------------- Tech-stack logos ----------------
// Stylized, monochrome versions that inherit `currentColor`
// so they sit cleanly on the dark section background.
export const techIcons = {
  react: () => (
    <TechSvg>
      {/* Atom: nucleus + three orbital rings */}
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.1" />
      <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(120 12 12)" />
    </TechSvg>
  ),
  javascript: () => (
    <TechSvg>
      {/* Rounded card with "JS" */}
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
      <text
        x="12"
        y="15.2"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter, sans-serif"
      >
        JS
      </text>
    </TechSvg>
  ),
  tailwind: () => (
    <TechSvg>
      {/* Two flowing swooshes (simplified Tailwind mark) */}
      <path d="M3 13.5c1.6-4.6 3.8-6.9 6.4-6.9 3.9 0 3.4 5.1 7.4 5.1 1.6 0 2.9-.8 4.2-2.4" />
      <path d="M10 20.4c-1.9.2-3.6-.8-4.6-2.4-.8-1.3-1-2.9-.6-4.3" />
    </TechSvg>
  ),
  bootstrap: () => (
    <TechSvg>
      {/* Rounded card with "B" */}
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
      <text
        x="12"
        y="15.6"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter, sans-serif"
      >
        B
      </text>
    </TechSvg>
  ),
  nodejs: () => (
    <TechSvg>
      {/* Hexagon (Node.js shape language) */}
      <path d="M12 2.6l8 4.6v9.6l-8 4.6-8-4.6V7.2z" />
      <path d="M9.2 14.8c.6.9 1.6 1.5 2.8 1.5 1.7 0 2.9-.8 2.9-2.1 0-2.8-5.8-1.4-5.8-4.2 0-1.2 1.1-2 2.8-2 1.1 0 2 .5 2.6 1.3" />
    </TechSvg>
  ),
  htmlcss: () => (
    <TechSvg>
      {/* Shield (HTML/CSS badge shape) */}
      <path d="M5.5 3.5h13v9.2L12 20.5 5.5 12.7z" />
      <path d="M9.2 8.2l-1.6 2.6 1.6 2.6M14.8 8.2l1.6 2.6-1.6 2.6M12.4 7.8l-1.4 5.6" />
    </TechSvg>
  ),
};

// Render a tech logo by key.
export function TechIcon({ name, ...rest }) {
  const Comp = techIcons[name] || techIcons.react;
  return <Comp {...rest} />;
}
