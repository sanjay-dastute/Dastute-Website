import { useState, type CSSProperties, type PointerEvent } from "react";
import { roleSlug } from "@/lib/openRoles";
import { ArrowUpRight, Award, Gift, GraduationCap, HeartPulse, MapPin, PiggyBank, Sun, CalendarHeart } from "lucide-react";

const MILESTONES = [
  { label: "Join", x: 70, y: 330, color: "#60a5fa" },
  { label: "Learn", x: 200, y: 230, color: "#818cf8" },
  { label: "Certify", x: 330, y: 270, color: "#a78bfa" },
  { label: "Lead", x: 460, y: 120, color: "#34d399" },
];
const PATH = "M30,370 C70,330 110,250 200,230 S300,300 330,270 S400,150 460,120 S520,70 540,60";

/** Hero: a growth path climbing through career milestones, travellers moving along it. */
export function CareerPath() {
  return (
    <svg viewBox="0 0 560 420" className="cr-path w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="cr-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="60%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <radialGradient id="cr-glow" cx="55%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="290" cy="220" rx="280" ry="200" fill="url(#cr-glow)" />

      {/* Rising skyline of growth bars */}
      {Array.from({ length: 9 }, (_, i) => {
        const h = 40 + i * 26;
        return (
          <rect key={i} x={40 + i * 58} y={400 - h} width="34" height={h} rx="6" className="cr-bar" style={{ "--n": i } as CSSProperties} />
        );
      })}

      <path d={PATH} fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="10" strokeLinecap="round" />
      <path d={PATH} fill="none" stroke="url(#cr-line)" strokeWidth="3.5" strokeLinecap="round" className="cr-draw" pathLength={1} />

      {[0, 1.4, 2.8].map((b, k) => (
        <circle key={k} r={k ? 4 : 6} fill={k ? "#c4b5fd" : "#fff"} className="cr-traveller">
          <animateMotion dur="4.2s" begin={`${b}s`} repeatCount="indefinite" path={PATH} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur="4.2s" begin={`${b}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {MILESTONES.map((m, i) => (
        <g key={m.label} className="cr-stop" style={{ "--n": i, "--c": m.color } as CSSProperties}>
          <circle cx={m.x} cy={m.y} r="11" fill="none" stroke={m.color} strokeWidth="2" className="cr-ping" />
          <circle cx={m.x} cy={m.y} r="11" fill="#0b1530" stroke={m.color} strokeWidth="2.5" />
          <circle cx={m.x} cy={m.y} r="4.5" fill={m.color} />
          <rect x={m.x - 38} y={m.y - 52} width="76" height="28" rx="14" fill="#0b1530" stroke={m.color} strokeOpacity="0.6" />
          <text x={m.x} y={m.y - 33.5} textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700" letterSpacing="1">
            {m.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Summit flag */}
      <g className="cr-flag">
        <line x1="540" y1="60" x2="540" y2="14" stroke="#e2e8f0" strokeWidth="2" />
        <path d="M540,14 L572,24 L540,34 Z" fill="#34d399" />
      </g>
    </svg>
  );
}

const VALUE_HUES = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"];

/** Culture values: tall cards with a cursor spotlight and a giant outlined number. */
export function ValueCards({ values }: { values: { title: string; desc: string }[] }) {
  const track = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((v, i) => (
        <article
          key={v.title}
          data-reveal="rise"
          onPointerMove={track}
          className="cr-value"
          style={{ "--hue": VALUE_HUES[i], "--i": i } as CSSProperties}
        >
          <span aria-hidden="true" className="cr-value-num">{String(i + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="cr-value-bar" />
          <h3 className="relative mt-auto text-2xl font-bold tracking-tight text-slate-900">{v.title}</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{v.desc}</p>
        </article>
      ))}
    </div>
  );
}

const PERK_ICONS = [Sun, CalendarHeart, HeartPulse, PiggyBank, GraduationCap, Gift];
const PERK_HUES = ["#f59e0b", "#ec4899", "#10b981", "#3b82f6", "#8b5cf6", "#f43f5e"];

/** Perks as a bento grid; the first tile is wide and the last spans the row. */
export function PerkBento({ perks }: { perks: { title: string; desc: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {perks.map((p, i) => {
        const Icon = PERK_ICONS[i] ?? Award;
        const span = i === perks.length - 1 ? "md:col-span-3" : i === 0 ? "md:col-span-2" : "";
        return (
          <article
            key={p.title}
            data-reveal="zoom"
            className={`cr-perk ${span}`}
            style={{ "--hue": PERK_HUES[i], "--i": i } as CSSProperties}
          >
            <span className="cr-perk-icon">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h3 className="relative mt-6 text-xl font-bold text-white">{p.title}</h3>
            <p className="relative mt-2 max-w-md text-sm leading-relaxed text-slate-300">{p.desc}</p>
          </article>
        );
      })}
    </div>
  );
}

interface Role {
  id: string;
  practice: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

/** Job board: practice filter chips and rows that slide open on hover. Filtered rows stay in the HTML. */
export function RoleBoard({ roles }: { roles: Role[] }) {
  const practices = ["All", ...Array.from(new Set(roles.map((r) => r.practice)))];
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter roles by practice">
        {practices.map((p) => {
          const count = p === "All" ? roles.length : roles.filter((r) => r.practice === p).length;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={filter === p}
              onClick={() => setFilter(p)}
              className={`cr-chip ${filter === p ? "is-on" : ""}`}
            >
              {p} <span>{count}</span>
            </button>
          );
        })}
      </div>
      <ul className="cr-roles">
        {roles.map((role, i) => {
          const hidden = filter !== "All" && role.practice !== filter;
          return (
            <li key={role.id} className={`cr-role ${hidden ? "is-hidden" : ""}`} style={{ "--i": i } as CSSProperties}>
              <a
                href={`/careers-apply?role=${roleSlug(role.title)}#apply`}
                tabIndex={hidden ? -1 : 0}
                className="cr-role-link"
              >
                <span className="cr-role-meta">
                  <span className="cr-role-practice">{role.practice}</span>
                  <span>{role.type}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <h3 className="cr-role-title">{role.title}</h3>
                  <span className="cr-role-desc">{role.description}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {role.location}
                  </span>
                </span>
                <span className="cr-role-apply">
                  Apply
                  <span className="cr-role-arrow">
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
