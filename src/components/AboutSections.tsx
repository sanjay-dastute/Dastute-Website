import { useEffect, useState, type CSSProperties } from "react";
import { MapPin, Phone } from "lucide-react";

const HUBS = [
  { label: "UK", city: "London", x: 120, y: 120, color: "#60a5fa" },
  { label: "India", city: "Coimbatore", x: 440, y: 170, color: "#a78bfa" },
  { label: "Singapore", city: "Ubi", x: 300, y: 380, color: "#34d399" },
];
const CORE = { x: 280, y: 220 };

/** Hero: the three regional hubs linked to a central core, with data travelling between them. */
export function AboutNetwork() {
  const links = HUBS.map((h) => `M${h.x},${h.y} L${CORE.x},${CORE.y}`);
  const ring = `M${HUBS[0].x},${HUBS[0].y} L${HUBS[1].x},${HUBS[1].y} L${HUBS[2].x},${HUBS[2].y} Z`;
  return (
    <svg viewBox="0 0 560 460" className="ab-net w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="ab-glow" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ab-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
      <ellipse cx={CORE.x} cy={CORE.y} rx="270" ry="220" fill="url(#ab-glow)" />
      {[70, 120, 170].map((r, k) => (
        <circle key={r} cx={CORE.x} cy={CORE.y} r={r} className="ab-orbit" style={{ "--k": k } as CSSProperties} />
      ))}

      <path d={ring} className="ab-ring" />
      {links.map((d, i) => (
        <path key={i} d={d} className="ab-link" />
      ))}

      {/* Packets travelling around the triangle and into the core */}
      {[0, 1, 2].map((k) => (
        <circle key={`r${k}`} r="3.5" fill="#e0e7ff" className="ab-packet">
          <animateMotion dur="6s" begin={`${k * 2}s`} repeatCount="indefinite" path={ring} />
        </circle>
      ))}
      {links.map((d, i) => (
        <circle key={`l${i}`} r="3" fill={HUBS[i].color} className="ab-packet">
          <animateMotion dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}

      <g className="ab-core">
        <circle cx={CORE.x} cy={CORE.y} r="52" fill="none" stroke="#93c5fd" strokeOpacity="0.5" className="ab-core-pulse" />
        <circle cx={CORE.x} cy={CORE.y} r="46" fill="url(#ab-core)" />
        <text x={CORE.x} y={CORE.y + 5} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" letterSpacing="2">
          DASTUTE
        </text>
      </g>

      {HUBS.map((h, i) => (
        <g key={h.label} className="ab-hub" style={{ "--n": i } as CSSProperties}>
          <circle cx={h.x} cy={h.y} r="16" fill="none" stroke={h.color} strokeWidth="2" className="ab-ping" />
          <circle cx={h.x} cy={h.y} r="16" fill="#0b1530" stroke={h.color} strokeWidth="2.5" />
          <circle cx={h.x} cy={h.y} r="6" fill={h.color} />
          <text x={h.x} y={h.y + 40} textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="700">
            {h.label}
          </text>
          <text x={h.x} y={h.y + 57} textAnchor="middle" fill="#94a3b8" fontSize="11" letterSpacing="1">
            {h.city.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Story told as chapters on a line that draws itself as the section scrolls into view. */
export function StoryTimeline({ chapters }: { chapters: { label: string; text: string }[] }) {
  return (
    <ol className="ab-story">
      {chapters.map((c, i) => (
        <li key={c.label} data-reveal="left" className="ab-chapter" style={{ "--i": i } as CSSProperties}>
          <span className="ab-chapter-dot" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-600">{c.label}</p>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">{c.text}</p>
        </li>
      ))}
    </ol>
  );
}

interface Office {
  region: string;
  offices: string[];
  phone: string;
  tz: string;
  hue: string;
}

/** Office cards with each office's live local time (rendered after mount to avoid SSR mismatch). */
export function OfficeCards({ offices }: { offices: Office[] }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {offices.map((loc, i) => {
        const time = now
          ? now.toLocaleTimeString("en-GB", { timeZone: loc.tz, hour: "2-digit", minute: "2-digit", second: "2-digit" })
          : "--:--:--";
        const hour = now ? Number(now.toLocaleString("en-GB", { timeZone: loc.tz, hour: "2-digit", hour12: false })) : 12;
        const open = hour >= 9 && hour < 18;
        return (
          <article key={loc.region} data-reveal="rise" className="ab-office" style={{ "--hue": loc.hue, "--i": i } as CSSProperties}>
            <div className="flex items-center justify-between gap-3">
              <span className="ab-pin">
                <MapPin aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className={`ab-status ${open ? "is-open" : ""}`}>{open ? "Office hours" : "After hours"}</span>
            </div>
            <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{loc.region}</h3>
            <p className="ab-clock" aria-label={`Local time in ${loc.region}`}>{time}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {loc.offices.map((o) => (
                <li key={o} className="flex items-center gap-2 font-medium text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: loc.hue }} />
                  {o}
                </li>
              ))}
            </ul>
            <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="ab-phone">
              <Phone aria-hidden="true" className="h-4 w-4" />
              {loc.phone}
            </a>
          </article>
        );
      })}
    </div>
  );
}
