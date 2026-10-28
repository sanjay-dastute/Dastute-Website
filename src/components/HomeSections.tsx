import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Blocks, Cloud, Cpu, Globe, Landmark, ServerCog, ShieldCheck, Smartphone, TrendingDown } from "lucide-react";
import { CountUp } from "@/components/motion";

const track = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const INDUSTRIES = ["Healthcare", "Finance", "Manufacturing", "Logistics", "Fintech"];

/** Three value pillars, each with its own live visual. */
export function HomePillars() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <article data-reveal="rise" onPointerMove={track} className="hb-tile" style={{ "--hue": "#3b82f6", "--i": 0 } as CSSProperties}>
        <span className="hb-orb"><TrendingDown aria-hidden="true" className="h-6 w-6" /></span>
        <p className="hb-big">
          <CountUp to={40} suffix="%" />
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blue-300">Up to, vs in-house IT</p>
        <h3 className="mt-5 text-xl font-semibold text-white">Cost-Effectiveness</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Predictable flat-rate pricing with zero hidden fees. Save up to 40% compared to in-house IT teams.
        </p>
        <svg viewBox="0 0 200 60" className="hb-spark" aria-hidden="true">
          <path d="M0,12 L30,20 L55,14 L80,30 L110,26 L140,40 L170,38 L200,50" pathLength={1} />
        </svg>
      </article>

      <article data-reveal="rise" onPointerMove={track} className="hb-tile" style={{ "--hue": "#8b5cf6", "--i": 1 } as CSSProperties}>
        <span className="hb-orb"><Cpu aria-hidden="true" className="h-6 w-6" /></span>
        <div className="hb-orbit" aria-hidden="true">
          <span className="hb-orbit-core">AI</span>
          {["Cloud", "Chain", "Data"].map((t, k) => (
            <span key={t} className="hb-orbit-chip" style={{ "--k": k } as CSSProperties}>
              <span>{t}</span>
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Innovative Technology</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          AI, blockchain, and cloud-native architectures that give your business a competitive edge.
        </p>
      </article>

      <article data-reveal="rise" onPointerMove={track} className="hb-tile" style={{ "--hue": "#10b981", "--i": 2 } as CSSProperties}>
        <span className="hb-orb"><Landmark aria-hidden="true" className="h-6 w-6" /></span>
        <div className="hb-ticker" aria-hidden="true">
          <div>
            {[...INDUSTRIES, ...INDUSTRIES].map((t, k) => (
              <span key={k}>{t}</span>
            ))}
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Industry Expertise</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Deep domain knowledge across healthcare, finance, manufacturing, logistics and fintech.
        </p>
      </article>
    </div>
  );
}

/* Small looping visuals, one per service */
const VISUALS: ReactNode[] = [
  // Security radar
  <svg key="sec" viewBox="0 0 120 120" className="hb-vis"><circle cx="60" cy="60" r="50" className="hb-ring" /><circle cx="60" cy="60" r="32" className="hb-ring" /><circle cx="60" cy="60" r="14" className="hb-ring" /><path d="M60,60 L60,10 A50,50 0 0,1 103,35 Z" className="hb-sweep" /><circle cx="84" cy="40" r="3.5" className="hb-blip" /></svg>,
  // Cloud sync
  <svg key="cld" viewBox="0 0 120 120" className="hb-vis"><path d="M34,74 a18,18 0 0,1 4,-35 a24,24 0 0,1 45,4 a16,16 0 0,1 3,31 Z" className="hb-line" /><g className="hb-up"><path d="M60,104 V82 M52,90 L60,82 L68,90" className="hb-line" /></g></svg>,
  // Managed IT heartbeat
  <svg key="mit" viewBox="0 0 120 120" className="hb-vis"><path d="M4,64 H36 L44,40 L54,88 L64,30 L72,64 H116" className="hb-pulse" pathLength={1} /></svg>,
  // Web code window
  <svg key="web" viewBox="0 0 120 120" className="hb-vis"><rect x="12" y="22" width="96" height="76" rx="10" className="hb-ring" /><path d="M12,38 H108" className="hb-ring" />{[0, 1, 2, 3].map((k) => <rect key={k} x="24" y={50 + k * 11} height="5" rx="2.5" width={[52, 70, 38, 60][k]} className="hb-code" style={{ "--k": k } as CSSProperties} />)}</svg>,
  // Mobile notifications
  <svg key="mob" viewBox="0 0 120 120" className="hb-vis"><rect x="38" y="10" width="44" height="100" rx="10" className="hb-ring" /><rect x="44" y="26" width="32" height="12" rx="4" className="hb-note" /><rect x="44" y="44" width="32" height="12" rx="4" className="hb-note" style={{ "--k": 1 } as CSSProperties} /><rect x="44" y="62" width="32" height="12" rx="4" className="hb-note" style={{ "--k": 2 } as CSSProperties} /></svg>,
  // Blockchain linked blocks
  <svg key="bc" viewBox="0 0 120 120" className="hb-vis">{[0, 1, 2].map((k) => <rect key={k} x={8 + k * 38} y="46" width="28" height="28" rx="6" className="hb-block" style={{ "--k": k } as CSSProperties} />)}<path d="M36,60 H46 M74,60 H84" className="hb-link" /></svg>,
];
const SERVICE_META = [
  { Icon: ShieldCheck, hue: "#10b981", href: "/services/cyber-security" },
  { Icon: Cloud, hue: "#06b6d4", href: "/services/cloud" },
  { Icon: ServerCog, hue: "#3b82f6", href: "/services/managed-it" },
  { Icon: Globe, hue: "#f43f5e", href: "/services/web-development" },
  { Icon: Smartphone, hue: "#6366f1", href: "/services/mobile" },
  { Icon: Blocks, hue: "#f59e0b", href: "/services/blockchain" },
];

/** Service bento: wide first and last tiles around four compact ones, each with a looping visual. */
export function ServiceBento({ services }: { services: { name: string; description: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, 6).map((s, i) => {
        const { Icon, hue, href } = SERVICE_META[i];
        const wide = i === 0 || i === 5;
        const span = i === 5 ? "lg:col-span-3" : "lg:col-span-2";
        return (
          <Link
            key={s.name}
            // @ts-ignore - valid service route
            to={href}
            data-reveal="zoom"
            onPointerMove={track}
            className={`hb-tile hb-service ${wide ? `${span} hb-wide` : ""}`}
            style={{ "--hue": hue, "--i": i % 3 } as CSSProperties}
          >
            <div className="relative flex items-start justify-between gap-4">
              <span className="hb-orb"><Icon aria-hidden="true" className="h-6 w-6" /></span>
              <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="hb-vis-wrap" aria-hidden="true">{VISUALS[i]}</div>
            <h3 className="relative text-2xl font-bold tracking-tight text-white">{s.name}</h3>
            <p className="relative mt-2 max-w-md text-sm leading-7 text-slate-300">{s.description}</p>
            <span className="hb-go">
              Explore <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
