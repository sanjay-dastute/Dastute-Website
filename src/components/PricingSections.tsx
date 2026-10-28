import { useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Check, Factory, Monitor, Users, UsersRound, X } from "lucide-react";
import { Magnetic } from "@/components/motion";

/** Illustrative chart (no figures): volatile in-house cost vs a flat managed fee. */
export function CostChart() {
  return (
    <div className="cost-chart relative mx-auto w-full max-w-xl" aria-hidden="true">
      <svg viewBox="0 0 520 360" className="w-full overflow-visible">
        <defs>
          <linearGradient id="cc-flat" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="cc-flat-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cc-spiky-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="520" height="360" rx="28" fill="rgba(11,21,48,0.7)" stroke="rgba(148,163,184,0.2)" />
        {[80, 140, 200, 260].map((y) => (
          <line key={y} x1="40" x2="490" y1={y} y2={y} stroke="rgba(148,163,184,0.1)" />
        ))}
        <text x="40" y="44" fill="#94a3b8" fontSize="11" letterSpacing="2">MONTHLY IT COST</text>

        <path className="cc-area cc-area-spiky" d="M40,250 L95,220 L130,235 L170,160 L210,205 L250,120 L290,190 L330,95 L370,170 L410,70 L450,140 L490,60 L490,310 L40,310 Z" fill="url(#cc-spiky-fill)" />
        <path className="cc-line cc-line-spiky" d="M40,250 L95,220 L130,235 L170,160 L210,205 L250,120 L290,190 L330,95 L370,170 L410,70 L450,140 L490,60" fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinejoin="round" pathLength="1" />

        <path className="cc-area cc-area-flat" d="M40,230 C160,226 300,224 490,222 L490,310 L40,310 Z" fill="url(#cc-flat-fill)" />
        <path className="cc-line cc-line-flat" d="M40,230 C160,226 300,224 490,222" fill="none" stroke="url(#cc-flat)" strokeWidth="4" strokeLinecap="round" pathLength="1" />
        <circle r="7" fill="#34d399" className="cc-dot">
          <animateMotion dur="5s" repeatCount="indefinite" path="M40,230 C160,226 300,224 490,222" />
        </circle>

        <g className="cc-legend">
          <rect x="300" y="280" width="12" height="4" rx="2" fill="#f43f5e" />
          <text x="318" y="285" fill="#fda4af" fontSize="11">In-house IT</text>
          <rect x="400" y="280" width="12" height="4" rx="2" fill="#34d399" />
          <text x="418" y="285" fill="#6ee7b7" fontSize="11">Dastute flat fee</text>
        </g>
      </svg>
      <span className="cost-chip" style={{ top: "6%", right: "-4%", "--d": "0.2s" } as CSSProperties}>
        <Check className="h-3.5 w-3.5 text-emerald-400" /> No hidden fees
      </span>
      <span className="cost-chip" style={{ bottom: "-5%", left: "-6%", "--d": "1.1s" } as CSSProperties}>
        <Check className="h-3.5 w-3.5 text-emerald-400" /> Predictable monthly
      </span>
      <span className="cost-chip" style={{ bottom: "-5%", right: "12%", "--d": "2s" } as CSSProperties}>
        <Check className="h-3.5 w-3.5 text-emerald-400" /> Flexible terms
      </span>
    </div>
  );
}

const MODELS = [
  {
    title: "Per-User Pricing",
    desc: "Ideal for modern offices. Covers an employee and all their devices (laptop, mobile, tablet). Predictable scaling as you hire.",
    target: "Custom per user",
    persona: "Modern office",
    Icon: Users,
    PersonaIcon: Building2,
    hue: "#3b82f6",
  },
  {
    title: "Per-Device Pricing",
    desc: "Best for shift-work, retail, or manufacturing where multiple employees share a single terminal or workstation.",
    target: "Custom per device",
    persona: "Shift-work & shared devices",
    Icon: Monitor,
    PersonaIcon: Factory,
    hue: "#10b981",
  },
  {
    title: "Co-Managed Retainer",
    desc: "For companies with an existing internal IT team that need escalated support, specialized cybersecurity, or holiday cover.",
    target: "Custom monthly",
    persona: "We have an IT team",
    Icon: UsersRound,
    PersonaIcon: UsersRound,
    hue: "#8b5cf6",
  },
];

export function PricingModels() {
  const [pick, setPick] = useState(0);
  return (
    <div>
      <div data-reveal className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <span className="text-sm font-semibold text-slate-500">Which describes you?</span>
        <div role="radiogroup" aria-label="Your business type" className="persona-switch">
          {MODELS.map((m, i) => (
            <button
              key={m.persona}
              type="button"
              role="radio"
              aria-checked={pick === i}
              onClick={() => setPick(i)}
              style={{ "--hue": m.hue } as CSSProperties}
              className={pick === i ? "is-on" : ""}
            >
              <m.PersonaIcon aria-hidden="true" className="h-4 w-4" />
              {m.persona}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {MODELS.map((m, i) => (
          <article
            key={m.title}
            data-reveal
            style={{ "--hue": m.hue, "--i": i } as CSSProperties}
            className={`tier ${pick === i ? "is-picked" : ""}`}
            onClick={() => setPick(i)}
          >
            <span aria-hidden="true" className="tier-glow" />
            <span className="tier-badge">Best fit for you</span>
            <span className="tier-icon">
              <m.Icon aria-hidden="true" className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">{m.title}</h3>
            <p className="tier-price">{m.target}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{m.desc}</p>
            <Link to="/project-estimator" className="tier-cta">
              Get my estimate <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

const IN_HOUSE = [
  ["High Base Costs:", "Salaries, NI, benefits, and recruitment fees for 1st-line, 2nd-line, and management."],
  ["Tooling Expenses:", "You must purchase your own RMM, ticketing systems, and enterprise security tools."],
  ["Coverage Gaps:", "Sickness, holidays, and out-of-hours coverage require overstaffing."],
  ["Skills Silos:", "Hard to hire a single person who is an expert in networking, cloud, and cybersecurity."],
];
const MANAGED = [
  ["Fractional Cost:", "Typically 40-60% cheaper than maintaining an equivalent internal headcount."],
  ["Enterprise Tooling Included:", "EDR, monitoring agents, and backup platforms are baked into our per-user fee."],
  ["24/7/365 Coverage:", "True round-the-clock monitoring and helpdesk without paying night-shift premiums."],
  ["Deep Expertise:", "Access to a diverse pool of certified network engineers, security analysts, and cloud architects."],
];

export function VersusBlock() {
  return (
    <div className="versus relative mt-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <div data-reveal="left" className="versus-col versus-house">
          <h3 className="text-2xl font-bold text-slate-900">In-House IT Team</h3>
          <p className="mt-2 text-sm text-slate-500">Hiring an internal team carries substantial hidden costs beyond salary.</p>
          <ul className="mt-8 space-y-5">
            {IN_HOUSE.map(([k, v], i) => (
              <li key={k} className="versus-item" style={{ "--d": `${0.2 + i * 0.12}s` } as CSSProperties}>
                <span className="versus-mark versus-mark-bad"><X aria-hidden="true" className="h-3.5 w-3.5" /></span>
                <div className="text-sm text-slate-600"><strong className="text-slate-900">{k}</strong> {v}</div>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal="right" className="versus-col versus-managed">
          <h3 className="text-2xl font-bold text-white">Dastute Managed IT</h3>
          <p className="mt-2 text-sm text-slate-300">A predictable flat fee granting you access to an entire department of specialists.</p>
          <ul className="mt-8 space-y-5">
            {MANAGED.map(([k, v], i) => (
              <li key={k} className="versus-item" style={{ "--d": `${0.35 + i * 0.12}s` } as CSSProperties}>
                <span className="versus-mark versus-mark-good"><Check aria-hidden="true" className="h-3.5 w-3.5" /></span>
                <div className="text-sm text-slate-300"><strong className="text-white">{k}</strong> {v}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span aria-hidden="true" className="versus-medal">VS</span>

      <div data-reveal className="cost-bars">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Typical cost of equivalent cover</p>
        <div className="cost-bar">
          <span className="cost-bar-label">In-house team</span>
          <span className="cost-bar-track"><span className="cost-bar-fill cost-bar-house" /></span>
        </div>
        <div className="cost-bar">
          <span className="cost-bar-label">Dastute Managed IT</span>
          <span className="cost-bar-track"><span className="cost-bar-fill cost-bar-managed" /></span>
          <span className="cost-bar-note">40-60% lower</span>
        </div>
      </div>
    </div>
  );
}

export function PricingCta() {
  return (
    <section className="future-section px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl text-center">
        <span aria-hidden="true" className="cta-rings"><span /><span /><span /></span>
        <h2 className="relative text-4xl font-black tracking-tight text-white md:text-6xl">
          Get an Exact <span className="text-gradient-primary">Quote Today</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Use our project estimator or contact us to build a custom pricing plan for your IT support needs.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Magnetic>
            <Link to="/project-estimator" className="btn-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest">
              Open Project Estimator <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="btn-glass inline-flex items-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest">
              Contact Sales
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
