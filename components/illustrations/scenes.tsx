/**
 * Flat illustrations recreated from the approved design. They are decorative
 * (aria-hidden) and intentionally stylised, so they never pass as photographs
 * of the school. Replace with genuine photography when it is supplied.
 */

const heading = { fontFamily: "var(--font-manrope), ui-sans-serif, sans-serif" } as const;

function Person({
  x,
  y,
  shirt,
  skin = "#c98d63",
  hair = "#2b1d16",
  scale = 1,
}: {
  x: number;
  y: number;
  shirt: string;
  skin?: string;
  hair?: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-18" y="20" width="36" height="58" rx="18" fill={shirt} />
      <circle cx="0" cy="0" r="17" fill={skin} />
      <path d="M-17 -1a17 17 0 0 1 34 0c-4-6-10-9-17-9s-13 3-17 9Z" fill={hair} />
    </g>
  );
}

function Student({ x, shirt, skin = "#b7794f" }: { x: number; shirt: string; skin?: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <circle cx="0" cy="168" r="13" fill={skin} />
      <path d="M-13 167a13 13 0 0 1 26 0c-3-5-8-7-13-7s-10 2-13 7Z" fill="#2b1d16" />
      <ellipse cx="0" cy="192" rx="17" ry="13" fill={shirt} />
      <rect x="-32" y="196" width="64" height="34" rx="5" fill="#1e4080" />
    </g>
  );
}

/** Classroom with a board (e.g. "Guten Tag!" or "Willkommen"), teacher and students. */
export function ClassroomScene({ word, className }: { word: string; className?: string }) {
  return (
    <svg viewBox="0 0 420 290" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="420" height="290" fill="#e8eef8" />
      <rect y="210" width="420" height="80" fill="#d6e0f0" />
      <rect x="26" y="30" width="66" height="78" rx="5" fill="#cddcf2" />
      <path d="M59 30v78M26 69h66" stroke="#b3c7e5" strokeWidth="3" />
      <rect x="150" y="20" width="236" height="118" rx="9" fill="#0e2148" stroke="#1e4080" strokeWidth="4" />
      <text x="172" y="72" fontSize={word.length > 10 ? 26 : 30} fontWeight="800" fill="#f4ce6a" style={heading}>
        {word}
      </text>
      <rect x="172" y="92" width="122" height="6" rx="3" fill="#3a5791" />
      <rect x="172" y="108" width="86" height="6" rx="3" fill="#3a5791" />
      <Person x={112} y={136} shirt="#c8102e" />
      <Student x={236} shirt="#e7a923" />
      <Student x={318} shirt="#2e8b6e" skin="#8d5a3b" />
      <rect x="374" y="200" width="22" height="26" rx="3" fill="#cf8a5a" />
      <path d="M385 200c-9-12-8-26 0-34 8 8 9 22 0 34Z" fill="#2e7d5b" />
    </svg>
  );
}

/** Classroom seen from the back — desks facing the board (About: location). */
export function DesksScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 220" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="420" height="220" fill="#e8eef8" />
      <rect y="186" width="420" height="34" fill="#d6e0f0" />
      <rect x="28" y="18" width="78" height="64" rx="5" fill="#cddcf2" />
      <path d="M67 18v64M28 50h78" stroke="#b3c7e5" strokeWidth="3" />
      <circle cx="160" cy="34" r="14" fill="#fff" stroke="#b3c7e5" strokeWidth="3" />
      <path d="M160 26v8l6 4" stroke="#0e2148" strokeWidth="2" strokeLinecap="round" fill="none" />
      <rect x="220" y="14" width="150" height="86" rx="8" fill="#0e2148" />
      <rect x="238" y="14" width="114" height="5" fill="#e7a923" />
      <rect x="240" y="40" width="90" height="6" rx="3" fill="#3a5791" />
      <rect x="240" y="56" width="66" height="6" rx="3" fill="#3a5791" />
      {[60, 170, 280].map((x) => (
        <g key={x}>
          <rect x={x + 34} y="128" width="16" height="22" rx="4" fill="#16315f" />
          <rect x={x} y="148" width="84" height="40" rx="6" fill="#1e4080" />
        </g>
      ))}
      <rect x="380" y="160" width="20" height="26" rx="3" fill="#cf8a5a" />
      <path d="M390 160c-8-11-7-24 0-31 7 7 8 20 0 31Z" fill="#2e7d5b" />
    </svg>
  );
}

/** Learner at a desk with a bookshelf (article header). */
export function StudyScene({ className }: { className?: string }) {
  const spines = ["#c8102e", "#e7a923", "#2e8b6e", "#cddcf2", "#c8102e", "#e7a923", "#cddcf2"];
  return (
    <svg viewBox="0 0 640 260" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="260" fill="#ede3d6" />
      <rect y="214" width="640" height="46" fill="#e0d3c1" />
      <rect x="60" y="0" width="236" height="76" rx="8" fill="#16315f" />
      {spines.map((color, i) => (
        <rect key={i} x={80 + i * 30} y="0" width="20" height="58" fill={color} />
      ))}
      <circle cx="476" cy="96" r="34" fill="#c98d63" />
      <path d="M442 94a34 34 0 0 1 68 0c-8-11-20-16-34-16s-26 5-34 16Z" fill="#2b1d16" />
      <rect x="436" y="136" width="80" height="96" rx="38" fill="#1e4080" />
      <path d="M396 214l80-22 80 22-80 14Z" fill="#fff" stroke="#cddcf2" strokeWidth="4" />
      <path d="M476 192v36" stroke="#cddcf2" strokeWidth="3" />
      <rect x="330" y="186" width="44" height="30" rx="7" fill="#c8102e" />
      <path d="M374 194h6a8 8 0 0 1 0 16h-6" stroke="#c8102e" strokeWidth="6" fill="none" />
    </svg>
  );
}

/** Two learners greeting each other with speech bubbles (Student Life). */
export function SpeechScene({ one, two, className }: { one: string; two: string; className?: string }) {
  return (
    <svg viewBox="0 0 420 240" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="420" height="240" fill="#e8eef8" />
      <rect y="204" width="420" height="36" fill="#d6e0f0" />
      <rect x="40" y="26" width="138" height="56" rx="20" fill="#fff" stroke="#c3d1e8" strokeWidth="4" />
      <path d="M86 80l-8 22 26-20Z" fill="#fff" stroke="#c3d1e8" strokeWidth="4" strokeLinejoin="round" />
      <text x="109" y="64" textAnchor="middle" fontSize="26" fontWeight="800" fill="#0e2148" style={heading}>
        {one}
      </text>
      <rect x="226" y="56" width="164" height="54" rx="20" fill="#0e2148" />
      <path d="M300 108l6 20 14-20Z" fill="#0e2148" />
      <text x="308" y="91" textAnchor="middle" fontSize="20" fontWeight="800" fill="#f4ce6a" style={heading}>
        {two}
      </text>
      <Person x={128} y={140} shirt="#c8102e" />
      <Person x={300} y={150} shirt="#1e4080" skin="#8d5a3b" />
    </svg>
  );
}

/** Simple city skyline (Germany articles). */
export function CityScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 260" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="260" fill="#f3e6ea" />
      <circle cx="520" cy="70" r="34" fill="#f4ce6a" />
      <g fill="#c9b3c0">
        <rect x="40" y="120" width="70" height="140" />
        <rect x="120" y="80" width="56" height="180" />
        <rect x="186" y="140" width="80" height="120" />
        <rect x="380" y="100" width="64" height="160" />
        <rect x="454" y="130" width="90" height="130" />
        <rect x="556" y="90" width="60" height="170" />
      </g>
      <g fill="#16315f">
        <rect x="276" y="60" width="90" height="200" rx="4" />
        <path d="M276 60l45-30 45 30Z" />
      </g>
      <g fill="#e7a923">
        {[0, 1, 2, 3].map((r) =>
          [0, 1].map((c) => <rect key={`${r}-${c}`} x={292 + c * 36} y={86 + r * 38} width="22" height="22" rx="3" />),
        )}
      </g>
      <rect y="236" width="640" height="24" fill="#e0c9d3" />
    </svg>
  );
}

/** Stylised street-map panel with a pin. Decorative only — not a real map. */
export function MapArt({ label, className, wide = false }: { label: string; className?: string; wide?: boolean }) {
  const w = wide ? 1000 : 480;
  const pinX = wide ? 520 : 289;
  return (
    <svg viewBox={`0 0 ${w} 340`} aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={wide ? "map-grid-wide" : "map-grid"} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="#cdd9ec" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={w} height="340" fill="#e4ecf7" />
      <rect width={w} height="340" fill={`url(#${wide ? "map-grid-wide" : "map-grid"})`} />
      <rect x="0" y="160" width={w} height="14" fill="#fff" />
      <rect x="0" y="262" width={w} height="8" fill="#fff" />
      <rect x={pinX - 7} y="0" width="14" height="340" fill="#fff" />
      <rect x={wide ? 220 : 120} y="0" width="8" height="340" fill="#fff" opacity=".8" />
      {wide ? <rect x="800" y="0" width="8" height="340" fill="#fff" opacity=".8" /> : null}
      <g transform={`translate(${pinX} 150)`}>
        <rect x="-62" y="-50" width="124" height="30" rx="7" fill="#c8102e" />
        <text x="0" y="-30" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" style={heading}>
          {label}
        </text>
        <path d="M0 -20v14" stroke="#c8102e" strokeWidth="3" />
        <circle cx="0" cy="-2" r="5" fill="#c8102e" stroke="#fff" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Faint skyline for the Germany Guide hero. */
export function SkylineDecor() {
  return (
    <svg
      viewBox="0 0 1200 120"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-60 sm:h-28"
      preserveAspectRatio="xMidYMax slice"
    >
      <g fill="#1e4080" opacity=".45">
        <rect x="20" y="40" width="90" height="80" />
        <rect x="130" y="70" width="60" height="50" />
        <rect x="560" y="50" width="120" height="70" />
        <rect x="700" y="20" width="70" height="100" />
        <rect x="790" y="60" width="110" height="60" />
        <rect x="920" y="30" width="80" height="90" />
        <rect x="1020" y="55" width="160" height="65" />
      </g>
      <g fill="#e7a923" opacity=".55">
        <rect x="40" y="58" width="10" height="10" />
        <rect x="64" y="58" width="10" height="10" />
        <rect x="596" y="70" width="10" height="10" />
        <rect x="618" y="70" width="10" height="10" />
        <rect x="726" y="44" width="10" height="10" />
        <rect x="946" y="52" width="10" height="10" />
        <rect x="970" y="52" width="10" height="10" />
      </g>
    </svg>
  );
}

/** Silhouetted audience along the bottom of the home hero. */
export function HeroAudience() {
  return (
    <svg
      viewBox="0 0 1200 140"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full sm:h-36"
      preserveAspectRatio="xMidYMax slice"
    >
      <g fill="#ffffff" opacity=".06">
        {[90, 290, 490, 690, 890, 1090].map((x) => (
          <g key={x}>
            <circle cx={x} cy="44" r="26" />
            <path d={`M${x - 62} 140c0-42 28-66 62-66s62 24 62 66Z`} />
          </g>
        ))}
      </g>
    </svg>
  );
}
