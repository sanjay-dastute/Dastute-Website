import type { CSSProperties, PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  Blocks,
  Cloud,
  Code2,
  Database,
  Lightbulb,
  Rocket,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

const FEED = [
  { tag: "Cybersecurity", title: "Zero Trust, explained with a real scenario", hue: "#10b981" },
  { tag: "Cloud Strategy", title: "What cloud migration really costs in the UK", hue: "#06b6d4" },
  { tag: "AI & ML", title: "AI agents for the enterprise", hue: "#8b5cf6" },
  { tag: "Managed IT", title: "In-house IT vs managed services", hue: "#3b82f6" },
];

/** Hero: a stack of article cards that cycles, with a live "typing" line on the front card. */
export function ArticleStack() {
  return (
    <div className="bl-stack" aria-hidden="true">
      {FEED.map((a, i) => (
        <div key={a.title} className="bl-card" style={{ "--n": i, "--hue": a.hue } as CSSProperties}>
          <div className="flex items-center justify-between">
            <span className="bl-card-tag">{a.tag}</span>
            <span className="font-mono text-[10px] text-slate-500">{`0${i + 1}`} / 04</span>
          </div>
          <p className="mt-5 text-xl font-bold leading-snug text-white">{a.title}</p>
          <div className="mt-5 space-y-2">
            {[92, 80, 64].map((w, k) => (
              <span key={k} className="bl-line" style={{ width: `${w}%`, "--k": k } as CSSProperties} />
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="bl-avatar" />
            <span className="h-2 w-20 rounded-full bg-white/15" />
            <span className="ml-auto font-mono text-[10px] text-slate-500">5 MIN READ</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const TOPICS = [
  { label: "Cybersecurity", Icon: ShieldCheck, to: "/services/cyber-security", hue: "#10b981" },
  { label: "Cloud Strategy", Icon: Cloud, to: "/services/cloud", hue: "#06b6d4" },
  { label: "AI & ML", Icon: Bot, to: "/resources/ai-agents-enterprise-guide", hue: "#8b5cf6" },
  { label: "ERP Solutions", Icon: Database, to: "/services/erp", hue: "#14b8a6" },
  { label: "Managed IT", Icon: ServerCog, to: "/services/managed-it", hue: "#3b82f6" },
  { label: "Digital Transformation", Icon: Rocket, to: "/technology", hue: "#f43f5e" },
  { label: "Blockchain", Icon: Blocks, to: "/services/blockchain", hue: "#f59e0b" },
  { label: "Web Development", Icon: Code2, to: "/services/web-development", hue: "#6366f1" },
  { label: "IT Consulting", Icon: Lightbulb, to: "/services/consulting", hue: "#a855f7" },
];

/** Topics as two counter-scrolling marquee rows that pause on hover; each topic links to its practice. */
export function TopicMarquee() {
  const rows = [TOPICS, [...TOPICS].reverse()];
  return (
    <div className="bl-marquee">
      {rows.map((row, r) => (
        <div key={r} className={`bl-marquee-row ${r ? "is-reverse" : ""}`}>
          <div className="bl-marquee-track">
            {[...row, ...row].map(({ label, Icon, to, hue }, k) => (
              <Link
                key={`${label}-${k}`}
                // @ts-ignore - valid static route
                to={to}
                tabIndex={k >= row.length ? -1 : 0}
                aria-hidden={k >= row.length ? true : undefined}
                className="bl-topic"
                style={{ "--hue": hue } as CSSProperties}
              >
                <span className="bl-topic-icon"><Icon aria-hidden="true" className="h-4 w-4" /></span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const GUIDES = [
  { to: "/resources/zero-trust-architecture", tag: "Cybersecurity", title: "What Is Zero Trust Architecture? A Real Scenario", hue: "#10b981" },
  { to: "/resources/cloud-migration-cost-guide", tag: "Cloud", title: "Cloud Migration Cost Guide UK: AWS vs Azure Pricing", hue: "#06b6d4" },
  { to: "/resources/ai-agents-enterprise-guide", tag: "AI", title: "What are AI Agents in Business?", hue: "#8b5cf6" },
  { to: "/resources/in-house-it-vs-managed-services", tag: "Managed IT", title: "In-house IT vs Managed Services UK", hue: "#3b82f6" },
  { to: "/resources/ransomware-recovery", tag: "Security", title: "Ransomware Recovery Strategy", hue: "#f43f5e" },
  { to: "/resources/iso-27001-checklist", tag: "Compliance", title: "ISO 27001 Certification Checklist UK", hue: "#f59e0b" },
];

/** Featured in-house guides: a large lead card plus a list, with a cursor spotlight. */
export function FeaturedGuides() {
  const track = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const [lead, ...rest] = GUIDES;
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <Link
        // @ts-ignore - valid static route
        to={lead.to}
        data-reveal="left"
        onPointerMove={track}
        className="bl-lead"
        style={{ "--hue": lead.hue } as CSSProperties}
      >
        <span className="bl-lead-badge">Featured guide</span>
        <span className="bl-lead-art" aria-hidden="true">
          {Array.from({ length: 5 }, (_, k) => (
            <span key={k} style={{ "--k": k } as CSSProperties} />
          ))}
        </span>
        <span className="mt-auto block font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">{lead.tag}</span>
        <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{lead.title}</h3>
        <span className="bl-read">
          Read the guide <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </Link>

      <ul className="bl-list">
        {rest.map((g, i) => (
          <li key={g.to} data-reveal="right" style={{ "--i": i, "--hue": g.hue } as CSSProperties}>
            <Link
              // @ts-ignore - valid static route
              to={g.to}
              className="bl-item"
            >
              <span className="bl-item-num">{String(i + 2).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: g.hue }}>{g.tag}</span>
                <span className="bl-item-title">{g.title}</span>
              </span>
              <span className="bl-item-arrow"><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
