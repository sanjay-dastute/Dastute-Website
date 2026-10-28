import { BarChart3, Bot, Handshake, Hotel, PackageOpen, Users } from "lucide-react";

const NODES = [
  { label: "ERP", color: "#60a5fa", Icon: BarChart3 },
  { label: "HRMS", color: "#34d399", Icon: Users },
  { label: "CRM", color: "#a78bfa", Icon: Handshake },
  { label: "WMS", color: "#22d3ee", Icon: PackageOpen },
  { label: "AI Agents", color: "#fbbf24", Icon: Bot },
  { label: "Hospitality", color: "#fb7185", Icon: Hotel },
];

const C = 280;
const R = 200;
const TILE = 64;

/**
 * Animated SVG of the platform core with six connected modules: an atom-style
 * core, rotating HUD rings and a slowly turning module ring whose tiles
 * counter-rotate to stay upright. Pure SVG/CSS, so it renders server-side.
 */
export function PlatformOrbit() {
  const points = NODES.map((node, i) => {
    const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return { ...node, x: C + R * Math.cos(a), y: C + R * Math.sin(a), a };
  });
  const ticks = Array.from({ length: 72 }, (_, i) => (i / 72) * Math.PI * 2);

  return (
    <svg viewBox="0 0 560 560" className="platform-orbit h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="po-core" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="40%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
        <radialGradient id="po-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="po-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id="po-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <filter id="po-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <pattern id="po-hex" width="10" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(0.9)">
          <path d="M5 0 L10 2.89 L10 8.66 L5 11.55 L0 8.66 L0 2.89 Z" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
        </pattern>
        {points.map((p, i) => (
          <linearGradient key={p.label} id={`po-tile-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.color} />
            <stop offset="100%" stopColor={p.color} stopOpacity="0.15" />
          </linearGradient>
        ))}
      </defs>

      <circle cx={C} cy={C} r="270" fill="url(#po-glow)" />

      {/* Radar sweep */}
      <g className="po-sweep">
        <path d={`M${C},${C} L${C + 250},${C} A250,250 0 0,0 ${C + 250 * Math.cos(-0.7)},${C + 250 * Math.sin(-0.7)} Z`} fill="url(#po-sweep)" />
      </g>

      {/* HUD tick ring */}
      <g className="po-spin">
        {ticks.map((t, i) => {
          const long = i % 6 === 0;
          const r1 = 252;
          const r2 = long ? 240 : 246;
          return (
            <line
              key={i}
              x1={C + r1 * Math.cos(t)}
              y1={C + r1 * Math.sin(t)}
              x2={C + r2 * Math.cos(t)}
              y2={C + r2 * Math.sin(t)}
              stroke={long ? "rgba(147,197,253,0.6)" : "rgba(148,163,184,0.25)"}
              strokeWidth={long ? 1.5 : 1}
            />
          );
        })}
      </g>
      <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(148,163,184,0.15)" strokeDasharray="2 6" />

      {/* Module ring: lines, packets and tiles rotate together */}
      <g className="po-ring">
        {points.map((p, i) => {
          const sx = C + 78 * Math.cos(p.a);
          const sy = C + 78 * Math.sin(p.a);
          const ex = C + (R - TILE / 2 - 6) * Math.cos(p.a);
          const ey = C + (R - TILE / 2 - 6) * Math.sin(p.a);
          const bend = p.a + 0.5;
          const cx = C + ((78 + R) / 2) * Math.cos(bend);
          const cy = C + ((78 + R) / 2) * Math.sin(bend);
          const d = `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`;
          return (
            <g key={p.label}>
              <path d={d} fill="none" stroke={p.color} strokeOpacity="0.2" strokeWidth="2" />
              <path id={`po-path-${i}`} d={d} fill="none" stroke={p.color} strokeWidth="1.5" strokeDasharray="3 9" className="po-flow" />
              {[0, 1].map((k) => (
                <g key={k}>
                  <circle r="6" fill={p.color} opacity="0.5" filter="url(#po-blur)">
                    <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} begin={`${k * 1.1 + i * 0.25}s`} repeatCount="indefinite" keyPoints={k ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear">
                      <mpath href={`#po-path-${i}`} />
                    </animateMotion>
                  </circle>
                  <circle r="2.6" fill="#fff">
                    <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} begin={`${k * 1.1 + i * 0.25}s`} repeatCount="indefinite" keyPoints={k ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear">
                      <mpath href={`#po-path-${i}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))}
            </g>
          );
        })}

        {points.map((p, i) => (
          <g key={p.label} className="po-tile-wrap" style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
            <g className="po-tile" style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
              <rect x={p.x - TILE / 2 - 6} y={p.y - TILE / 2 - 6} width={TILE + 12} height={TILE + 12} rx="24" fill={p.color} opacity="0.18" filter="url(#po-blur)" className="po-tile-glow" />
              <rect x={p.x - TILE / 2} y={p.y - TILE / 2} width={TILE} height={TILE} rx="18" fill="#0b1530" />
              <rect x={p.x - TILE / 2} y={p.y - TILE / 2} width={TILE} height={TILE} rx="18" fill={p.color} fillOpacity="0.1" stroke={`url(#po-tile-${i})`} strokeWidth="1.5" />
              <p.Icon x={p.x - 13} y={p.y - 13} width={26} height={26} color={p.color} strokeWidth={1.8} />
              <rect x={p.x - 40} y={p.y + TILE / 2 + 8} width="80" height="20" rx="10" fill="rgba(11,21,48,0.85)" stroke="rgba(148,163,184,0.25)" />
              <text x={p.x} y={p.y + TILE / 2 + 22} textAnchor="middle" fill="#e2e8f0" fontSize="10.5" fontWeight="600" letterSpacing="0.5">
                {p.label}
              </text>
            </g>
          </g>
        ))}
      </g>

      {/* Core */}
      <circle cx={C} cy={C} r="76" fill="none" stroke="url(#po-arc)" strokeWidth="3" strokeDasharray="60 40 20 120" strokeLinecap="round" className="po-spin-fast" />
      <circle cx={C} cy={C} r="68" fill="none" stroke="#34d399" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="10 30" className="po-spin-rev" />
      <circle cx={C} cy={C} r="60" fill="none" stroke="#60a5fa" strokeOpacity="0.5">
        <animate attributeName="r" values="58;100" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={C} cy={C} r="58" fill="url(#po-core)" />
      <circle cx={C} cy={C} r="58" fill="url(#po-hex)" />
      <circle cx={C - 18} cy={C - 22} r="18" fill="#fff" opacity="0.18" filter="url(#po-blur)" />
      <text x={C} y={C - 2} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" letterSpacing="1.5">
        DASTUTE
      </text>
      <text x={C} y={C + 15} textAnchor="middle" fill="#dbeafe" fontSize="8.5" letterSpacing="3.5">
        PLATFORM
      </text>
    </svg>
  );
}
