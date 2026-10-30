import { useState, type CSSProperties } from "react";
import { setRegion, useLocalise, useRegion } from "@/lib/region";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, Plus, X } from "lucide-react";
import {
  AD_BUDGET,
  AD_HOW_IT_WORKS,
  AD_REFERENCE,
  FROM_PRICE,
  FUNNEL,
  IDEAL_FOR,
  INDUSTRIES,
  LAUNCH_PLAN,
  NEXT_STEPS,
  OBJECTIVES,
  PLAN_NOTE,
  PLAN_ROWS,
  PLANS,
  PROMISES,
  PROOF,
  SCOPE,
  SCOPE_CLARITY,
  SERVICES_16,
  TERMS,
} from "@/lib/marketingProgramme";

function Eyebrow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.3em] ${dark ? "text-blue-300" : "text-blue-600"}`}>
      {children}
    </p>
  );
}

/** Industries served plus results from live client accounts. */
export function ProofGrid() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <Eyebrow>/ Who we grow</Eyebrow>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Creative craft with <span className="text-gradient-primary">measurable marketing.</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          We plan, design and run the marketing that brings customers in, from your Instagram feed and reels to
          the Meta and Google ad campaigns that fill your enquiry pipeline. Every campaign is tracked, reported and
          improved every month.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="mp-industry">
              <p className="font-bold text-slate-900">{ind.name}</p>
              <p className="mt-1 text-sm text-slate-500">{ind.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Eyebrow>/ Proof from live client accounts</Eyebrow>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
          {PROOF.map((p, i) => (
            <div key={p.label} className="mp-stat" style={{ "--hue": p.hue, "--i": i } as CSSProperties}>
              <p className="mp-stat-value">{p.value}</p>
              <p className="mt-2 font-semibold text-slate-900">{p.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Four objectives, the funnel and who the programme suits. */
export function ObjectivesFunnel() {
  const t = useLocalise();
  return (
    <div>
      <Eyebrow>/ Objectives</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        What our partnership is built to achieve
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OBJECTIVES.map((o, i) => (
          <div key={o.title} className="mp-objective">
            <span className="mp-objective-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900">{o.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(o.text)}</p>
          </div>
        ))}
      </div>
      <ol className="mp-funnel" aria-label="Marketing funnel">
        {FUNNEL.map((f, i) => (
          <li key={f.stage} style={{ "--i": i } as CSSProperties}>
            <span className="block font-bold text-white">{f.stage}</span>
            <span className="block text-xs text-white/80">{f.tools}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-slate-500">
        We plan content and campaigns for every stage of this funnel, so your marketing builds the brand and brings
        in enquiries at the same time.
      </p>
      <div className="mp-ideal">
        <div>
          <p className="text-xl font-bold text-white">Ideal for</p>
          <p className="mt-1 text-sm text-slate-300">{IDEAL_FOR}</p>
        </div>
        <span className="mp-pill">Projects from {t(FROM_PRICE)}</span>
      </div>
    </div>
  );
}

/** The 16 services as coded tiles. */
export function ServiceCodes() {
  return (
    <div>
      <Eyebrow dark>/ Our services</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-white">
        16 digital marketing services <span className="text-gradient-primary">under one roof</span>
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES_16.map((s, i) => (
          <div key={s.code} className="mp-svc" style={{ "--i": i } as CSSProperties}>
            <span className="mp-code">{s.code}</span>
            <div className="min-w-0">
              <h3 className="font-semibold text-white">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Scope of work in three tabs. All panels stay in the HTML. */
export function ScopeTabs() {
  const t = useLocalise();
  const [tab, setTab] = useState(0);
  return (
    <div>
      <Eyebrow>/ Scope of work · what we support</Eyebrow>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Scope of work">
        {SCOPE.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            id={`mp-scope-tab-${i}`}
            aria-selected={tab === i}
            aria-controls={`mp-scope-${i}`}
            className={`mp-tab ${tab === i ? "is-on" : ""}`}
            onClick={() => setTab(i)}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div className="mt-8 grid">
        {SCOPE.map((s, i) => (
          <div
            key={s.title}
            id={`mp-scope-${i}`}
            role="tabpanel"
            aria-labelledby={`mp-scope-tab-${i}`}
            aria-hidden={tab !== i}
            className={`mp-panel ${tab === i ? "is-on" : ""}`}
          >
            <h3 className="sr-only">{s.title}</h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {s.groups.map((g) => (
                <div key={g.code} className="mp-scope-card">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="mp-code is-light">{g.code}</span>
                    <h4 className="font-bold text-slate-900">{g.name}</h4>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {g.items.map((it) => {
                      const item = t(it);
                      return (
                      <li key={item} className="flex gap-3 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                        {item}
                      </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 30-day launch plan, working promises and go-live banner. */
export function LaunchPlan() {
  const t = useLocalise();
  return (
    <div>
      <Eyebrow>/ How we work</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        From kick-off to results: <span className="text-gradient-primary">a clear 30-day launch plan</span>
      </h2>
      <ol className="mp-plan">
        {LAUNCH_PLAN.map((p, i) => (
          <li key={p.when} className="mp-plan-step" style={{ "--i": i } as CSSProperties}>
            <span className="mp-plan-when">{p.when}</span>
            <h3 className="mt-2 font-bold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROMISES.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-900">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{t(p.text)}</p>
          </div>
        ))}
      </div>
      <div className="mp-ideal">
        <div>
          <p className="text-xl font-bold text-white">Go live within 2 weeks of kick-off</p>
          <p className="mt-1 text-sm text-slate-300">
            Once access and brand assets are shared, your first content and campaigns launch in Week 2–3.
          </p>
        </div>
        <span className="mp-pill">Monthly report every cycle</span>
      </div>
    </div>
  );
}

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-teal-500" aria-label="Included" />;
  if (v === false) return <Minus className="mx-auto h-4 w-4 text-slate-300" aria-label="Not included" />;
  return <>{v}</>;
}

/** ₹ / £ switch for visitors whose detected region is wrong. */
export function CurrencyToggle() {
  const r = useRegion();
  return (
    <div className="mp-cur" role="group" aria-label="Currency">
      <button type="button" aria-pressed={r === "intl"} onClick={() => setRegion("intl")}>£ GBP</button>
      <button type="button" aria-pressed={r === "in"} onClick={() => setRegion("in")}>₹ INR</button>
    </div>
  );
}

/** Plan cards and full comparison table. */
export function PlansTable({ heading = "Choose the plan that fits your stage" }: { heading?: string }) {
  const t = useLocalise();
  return (
    <div id="plans" className="scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Eyebrow>/ Investment · project basis</Eyebrow>
        <CurrencyToggle />
      </div>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">{heading}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={`mp-plancard ${p.popular ? "is-pop" : ""}`}>
            {p.popular && <span className="mp-badge">Most popular</span>}
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">{p.name}</p>
            <p className="mt-2 text-4xl font-black tracking-tight">{t(p.price)}</p>
            <p className="mt-1 text-sm opacity-70">{p.unit}</p>
          </div>
        ))}
      </div>
      <div className="mp-table-wrap">
        <table className="mp-table">
          <caption className="sr-only">What each digital marketing plan includes</caption>
          <thead>
            <tr>
              <th scope="col">What's included</th>
              <th scope="col">Starter</th>
              <th scope="col" className="is-pop">Growth</th>
              <th scope="col">Premium</th>
            </tr>
          </thead>
          <tbody>
            {PLAN_ROWS.map(([feature, a, b, c]) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                <td><Cell v={a} /></td>
                <td className="is-pop"><Cell v={b} /></td>
                <td><Cell v={c} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-500">{PLAN_NOTE}</p>
    </div>
  );
}

/** Service fee vs ad spend, how billing works and recommended budgets. */
export function AdBudget() {
  const t = useLocalise();
  return (
    <div>
      <Eyebrow>/ Paid promotion · ad budget</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        Your ad budget is paid <span className="text-gradient-primary">directly by you</span>, to the platform
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
            <div className="mp-fee">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-100">Our service fee</p>
              <p className="mt-2 text-3xl font-black">From {t(FROM_PRICE)}</p>
              <p className="mt-2 text-sm text-blue-50/90">
                Strategy, content, design, video, ad management, SEO and reporting. Paid to us.
              </p>
            </div>
            <span className="mx-auto self-center text-slate-400" aria-hidden="true"><Plus className="h-6 w-6" /></span>
            <div className="mp-fee is-dark">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Paid promotion (ad spend)</p>
              <p className="mt-2 text-3xl font-black">Set by you</p>
              <p className="mt-2 text-sm text-slate-300">
                Paid directly to Meta / Google from your card or account. 100% goes into ads.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">How it works</h3>
            <ul className="mt-4 space-y-3">
              {AD_HOW_IT_WORKS.map(t).map((x) => (
                <li key={x} className="flex gap-3 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-bold text-slate-900">Recommended starting ad budget</h3>
          <p className="text-sm text-slate-500">Indicative, per month, based on our past campaign costs</p>
          <table className="mp-table mt-4 is-compact">
            <caption className="sr-only">Recommended monthly ad budget by goal</caption>
            <thead>
              <tr>
                <th scope="col">Goal</th>
                <th scope="col">Ad budget / month</th>
              </tr>
            </thead>
            <tbody>
              {AD_BUDGET.map((r) => (
                <tr key={r.goal}>
                  <th scope="row">
                    {r.goal} <span className="font-normal text-slate-500">{r.detail}</span>
                  </th>
                  <td>{t(r.budget)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mp-ref">
            <strong>For reference:</strong> {t(AD_REFERENCE)}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Included, not included, and what we need from the client. */
export function ScopeClarity() {
  const cols = [
    { title: "Included in the fee", items: SCOPE_CLARITY.included, icon: Check, tone: "is-in" },
    { title: "Not included (billed separately)", items: SCOPE_CLARITY.excluded, icon: X, tone: "is-out" },
    { title: "Support we need from you", items: SCOPE_CLARITY.fromYou, icon: ArrowRight, tone: "is-you" },
  ];
  return (
    <div>
      <Eyebrow>/ Scope clarity</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
        What's included, what's not, and what we need from you
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        {cols.map(({ title, items, icon: ColIcon, tone }) => (
          <div key={title} className={`mp-clarity ${tone}`}>
            <h3 className="font-bold text-slate-900">{title}</h3>
            <ul className="mt-4 space-y-3">
              {items.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-slate-700">
                  <ColIcon className="mp-clarity-icon" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Terms and conditions. */
export function TermsGrid() {
  return (
    <div>
      <Eyebrow>/ Terms & conditions</Eyebrow>
      <h2 className="mt-3 mb-10 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Simple, fair terms</h2>
      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {TERMS.map((t) => (
          <div key={t.title} className="border-t border-slate-200 pt-4">
            <dt className="font-bold text-slate-900">{t.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-600">{t.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Next steps with contact routes. */
export function NextSteps() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <Eyebrow dark>/ Next steps</Eyebrow>
        <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-white">
          Let's get your <span className="text-gradient-primary">growth started.</span>
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            Start a Brief <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a href="mailto:contact@dastute.co.uk" className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            contact@dastute.co.uk
          </a>
        </div>
      </div>
      <ol className="grid gap-3">
        {NEXT_STEPS.map((s, i) => (
          <li key={s} className="mp-next">
            <span className="mp-next-num">{i + 1}</span>
            <span className="font-semibold text-white">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
