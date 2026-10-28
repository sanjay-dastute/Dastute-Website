import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Cloud,
  Compass,
  Database,
  Globe,
  Hand,
  Network,
  Puzzle,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const TECH_ICONS = [Server, Compass, ShieldCheck, Cloud, Globe, Smartphone, Blocks, Database, Network, Puzzle];
export const TECH_HUES = ["#3b82f6", "#8b5cf6", "#10b981", "#06b6d4", "#f43f5e", "#6366f1", "#f59e0b", "#14b8a6", "#0ea5e9", "#a855f7"];

// Honeycomb layout for 10 hexagons: rows of 3, 4, 3
const HEX_POS: [number, number][] = [
  [1, 0], [2, 0], [3, 0],
  [0.5, 1], [1.5, 1], [2.5, 1], [3.5, 1],
  [1, 2], [2, 2], [3, 2],
];

function hexPath(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ") + " Z";
}

/** Hero honeycomb: one hexagon per discipline, lighting up in sequence. */
export function TechHoneycomb() {
  const R = 52;
  const W = R * Math.sqrt(3);
  return (
    <svg viewBox="0 0 560 400" className="tech-honeycomb h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="th-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="280" cy="200" rx="280" ry="200" fill="url(#th-glow)" />
      {HEX_POS.map(([col, row], i) => {
        const cx = 60 + col * W + 10;
        const cy = 70 + row * R * 1.55;
        const Icon = TECH_ICONS[i];
        const hue = TECH_HUES[i];
        return (
          <g key={i} className="th-cell" style={{ "--hue": hue, "--n": i } as CSSProperties}>
            <path d={hexPath(cx, cy, R - 4)} className="th-hex" />
            <path d={hexPath(cx, cy, R - 4)} className="th-hex-lit" />
            <Icon x={cx - 16} y={cy - 16} width={32} height={32} color={hue} strokeWidth={1.8} />
          </g>
        );
      })}
    </svg>
  );
}

interface Service {
  code: string;
  title: string;
  ctaHref: string;
  summary: string;
  detail: string;
  deliverables: string[];
}

const SHORT = ["Managed IT", "Consulting", "Cyber Security", "Cloud", "Web & App", "Mobile", "Blockchain", "ERP", "Network", "Custom Software"];

/**
 * Interactive honeycomb: selecting a hexagon shows that discipline in the
 * panel. Every panel is rendered (stacked in one grid cell) so all copy is in
 * the HTML for search engines.
 */
export function HexExplorer({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const stageRef = useRef<HTMLDivElement>(null);
  const R = 60;
  const total = services.length;

  const select = (i: number, fromHex = false) => {
    setActive(i);
    setVisited((v) => new Set(v).add(i));
    // On stacked (mobile) layouts the panel sits below the honeycomb
    if (fromHex && window.innerWidth < 1024) {
      stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const W = R * Math.sqrt(3);

  const onKey = (e: KeyboardEvent<SVGGElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(i, true);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select((i + 1) % total);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select((i - 1 + total) % total);
    }
  };

  return (
    <div data-no-reveal className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
      <div data-reveal="left">
        <p className="hx-hint" aria-live="polite">
          <span className="hx-hint-icon">
            <Hand aria-hidden="true" className="h-4 w-4" />
          </span>
          {visited.size < 2
            ? `Tap a hexagon to explore all ${total} disciplines`
            : visited.size < total
              ? `${visited.size} of ${total} explored - keep going`
              : `All ${total} disciplines explored`}
        </p>
        <svg viewBox="40 8 452 330" className="hex-explorer w-full overflow-visible" role="tablist" aria-label="Technology disciplines">
          {HEX_POS.map(([col, row], i) => {
            const cx = 52 + col * W + 6;
            const cy = 78 + row * R * 1.55;
            const Icon = TECH_ICONS[i];
            const on = i === active;
            return (
              <g
                key={i}
                role="tab"
                tabIndex={on ? 0 : -1}
                aria-selected={on}
                aria-controls={`discipline-${i}`}
                aria-label={services[i].title}
                className={`hx-cell ${on ? "is-active" : ""} ${visited.has(i) ? "is-visited" : ""}`}
                style={{ "--hue": TECH_HUES[i], "--n": i } as CSSProperties}
                onClick={() => select(i, true)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <path d={hexPath(cx, cy, R - 5)} className="hx-hex" />
                <Icon x={cx - 15} y={cy - 24} width={30} height={30} color={on ? "#fff" : TECH_HUES[i]} strokeWidth={1.8} />
                <text x={cx} y={cy + 22} textAnchor="middle" className="hx-label">
                  {SHORT[i]}
                </text>
                {/* Pulsing dot on unseen hexagons, tick on seen ones */}
                <circle cx={cx + 26} cy={cy - 30} r="5" className="hx-new" />
                <circle cx={cx + 26} cy={cy - 30} r="5" className="hx-new-ring" />
                <g className="hx-seen">
                  <circle cx={cx + 26} cy={cy - 30} r="7" />
                  <path d={`M${cx + 23},${cy - 30} l2.2,2.2 l4,-4.4`} />
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      <div ref={stageRef} data-reveal="right" className="ms-stage grid scroll-mt-24">
        {services.map((s, i) => {
          const Icon = TECH_ICONS[i];
          const on = i === active;
          return (
            <article
              key={s.code}
              id={`discipline-${i}`}
              role="tabpanel"
              aria-hidden={!on}
              style={{ "--hue": TECH_HUES[i] } as CSSProperties}
              className={`ms-panel ${on ? "is-active" : ""}`}
            >
              <span aria-hidden="true" className="ms-watermark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative flex items-center gap-4">
                <span className="tech-orb">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <p className="ms-kicker">Discipline {String(i + 1).padStart(2, "0")} / 10</p>
              </div>
              <h2 className="relative mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">{s.title}</h2>
              <p className="relative mt-4 text-lg leading-relaxed text-slate-200">{s.summary}</p>
              <p className="relative mt-3 leading-relaxed text-slate-400">{s.detail}</p>
              <ul className="relative mt-7 grid gap-3 sm:grid-cols-2">
                {s.deliverables.map((d, k) => (
                  <li key={d} className="ms-benefit" style={{ transitionDelay: on ? `${0.2 + k * 0.08}s` : "0s" }}>
                    <span className="ms-check">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link
                // @ts-ignore - Valid dynamic route
                to={s.ctaHref}
                tabIndex={on ? 0 : -1}
                className="tech-link relative mt-9 text-white"
              >
                Explore {s.title}
                <span className="tech-link-arrow">
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
              <div className="hx-pager relative">
                <button type="button" tabIndex={on ? 0 : -1} onClick={() => select((i - 1 + total) % total)} aria-label="Previous discipline">
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                </button>
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, "0")} / {total}
                </span>
                <span className="hx-dots" aria-hidden="true">
                  {services.map((_, k) => (
                    <span key={k} className={k === i ? "is-on" : visited.has(k) ? "is-seen" : ""} />
                  ))}
                </span>
                <button type="button" tabIndex={on ? 0 : -1} onClick={() => select((i + 1) % total)} className="hx-next">
                  Next: {SHORT[(i + 1) % total]}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
