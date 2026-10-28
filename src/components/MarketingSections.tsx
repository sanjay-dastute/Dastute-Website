import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, AtSign, Box, Clapperboard, Mail, Megaphone, Palette, Search, Share2, Target } from "lucide-react";

const STAGES = [
  { label: "Awareness", w: 340, color: "#60a5fa" },
  { label: "Interest", w: 260, color: "#818cf8" },
  { label: "Conversion", w: 180, color: "#a78bfa" },
  { label: "Loyalty", w: 110, color: "#34d399" },
];
const CHANNELS = [
  { label: "SEO", Icon: Search, x: 70, y: 40 },
  { label: "PPC", Icon: Target, x: 450, y: 40 },
  { label: "Social", Icon: Share2, x: 30, y: 150 },
  { label: "Email", Icon: Mail, x: 490, y: 150 },
];

/** Hero funnel: channels feed visitor particles down through the stages. */
export function MarketingFunnel() {
  const cx = 260;
  return (
    <svg viewBox="0 0 520 440" className="mk-funnel w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="mk-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <filter id="mk-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <ellipse cx={cx} cy="220" rx="260" ry="220" fill="url(#mk-glow)" />

      {STAGES.map((st, i) => {
        const y = 90 + i * 78;
        const next = STAGES[i + 1]?.w ?? st.w * 0.6;
        return (
          <g key={st.label} className="mk-stage" style={{ "--n": i, "--c": st.color } as CSSProperties}>
            <path
              d={`M${cx - st.w / 2},${y} L${cx + st.w / 2},${y} L${cx + next / 2},${y + 62} L${cx - next / 2},${y + 62} Z`}
              fill={st.color}
              fillOpacity="0.12"
              stroke={st.color}
              strokeOpacity="0.5"
            />
            <ellipse cx={cx} cy={y} rx={st.w / 2} ry="12" fill="#0b1530" stroke={st.color} strokeWidth="1.5" />
            <ellipse cx={cx} cy={y} rx={st.w / 2} ry="12" fill={st.color} fillOpacity="0.15" className="mk-rim" />
            <text x={cx} y={y + 40} textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600" letterSpacing="2">
              {st.label.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Visitor particles falling through the funnel */}
      {Array.from({ length: 14 }, (_, k) => {
        const spread = ((k * 37) % 100) / 100 - 0.5;
        const sx = cx + spread * 300;
        const path = `M${sx},70 Q${cx + spread * 120},230 ${cx + spread * 30},400`;
        const color = ["#60a5fa", "#a78bfa", "#34d399", "#f472b6"][k % 4];
        return (
          <circle key={k} r="3.2" fill={color} className="mk-dot">
            <animateMotion dur={`${3.2 + (k % 5) * 0.35}s`} begin={`${k * 0.27}s`} repeatCount="indefinite" path={path} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur={`${3.2 + (k % 5) * 0.35}s`} begin={`${k * 0.27}s`} repeatCount="indefinite" />
          </circle>
        );
      })}

      {/* Conversion burst at the bottom */}
      <circle cx={cx} cy="410" r="10" fill="#34d399" filter="url(#mk-blur)" />
      <circle cx={cx} cy="410" r="6" fill="#34d399" />
      <circle cx={cx} cy="410" r="6" fill="none" stroke="#34d399" strokeWidth="2">
        <animate attributeName="r" values="6;30" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
      </circle>

      {CHANNELS.map(({ label, Icon, x, y }, i) => (
        <g key={label} className="mk-channel" style={{ "--n": i } as CSSProperties}>
          <path d={`M${x},${y} Q${(x + cx) / 2},${y - 10} ${cx},90`} fill="none" stroke="rgba(148,163,184,0.25)" strokeDasharray="3 6" className="mk-feed" />
          <rect x={x - 26} y={y - 26} width="52" height="52" rx="16" fill="#0b1530" stroke="rgba(167,139,250,0.5)" />
          <Icon x={x - 11} y={y - 15} width={22} height={22} color="#c4b5fd" strokeWidth={1.8} />
          <text x={x} y={y + 18} textAnchor="middle" fill="#cbd5e1" fontSize="8.5" fontWeight="600" letterSpacing="1">
            {label}
          </text>
        </g>
      ))}
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

const ROW_ICONS = [Megaphone, AtSign, Palette, Box, Clapperboard];
const ROW_HUES = ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4", "#f59e0b"];

/** Big-type editorial list; rows expand, and a preview card follows the pointer. */
export function DisciplineRows({ services }: { services: Service[] }) {
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const move = (e: PointerEvent<HTMLElement>) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${e.clientX + 28}px, ${e.clientY - 230}px, 0)`;
  };

  const shown = hover ?? open;
  const PreviewIcon = ROW_ICONS[shown];

  return (
    <div className="mk-rows" onPointerMove={move} onPointerLeave={() => setHover(null)}>
      {services.map((s, i) => {
        const Icon = ROW_ICONS[i];
        const isOpen = i === open;
        return (
          <article
            key={s.code}
            data-reveal
            style={{ "--hue": ROW_HUES[i], "--i": i } as CSSProperties}
            className={`mk-row ${isOpen ? "is-open" : ""}`}
            onPointerEnter={() => setHover(i)}
          >
            <h2>
              <button
                type="button"
                className="mk-row-head"
                aria-expanded={isOpen}
                aria-controls={`mk-body-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="mk-row-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="mk-row-title">{s.title}</span>
                <span className="mk-row-icon">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span aria-hidden="true" className="mk-row-plus" />
              </button>
            </h2>
            <div id={`mk-body-${i}`} className="mk-row-body">
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-10 pt-2 md:grid-cols-[1.1fr_1fr] md:pl-24">
                  <div>
                    <p className="text-xl font-semibold leading-snug text-slate-900">{s.summary}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{s.detail}</p>
                    <Link to={s.ctaHref} className="mk-cta mt-7">
                      Explore {s.title}
                      <span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
                    </Link>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Deliverables</p>
                    <ul className="mt-4 space-y-3">
                      {s.deliverables.map((d, k) => (
                        <li key={d} className="mk-deliv" style={{ "--d": `${0.1 + k * 0.08}s` } as CSSProperties}>
                          <span className="mk-deliv-dot" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {/* Cursor-following preview of closed rows (desktop pointer only, decorative) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`mk-preview ${hover !== null && hover !== open ? "is-on" : ""}`}
        style={{ "--hue": ROW_HUES[shown] } as CSSProperties}
      >
        <span className="mk-preview-orb">
          {PreviewIcon && <PreviewIcon className="h-9 w-9" />}
        </span>
        <p className="mt-4 text-sm font-semibold text-white">{services[shown]?.summary}</p>
        <p className="mt-3 text-xs text-slate-300">Click to open</p>
      </div>
    </div>
  );
}
