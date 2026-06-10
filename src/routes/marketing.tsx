import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildServiceListJsonLd,
  buildStandardPageHead,
  buildFaqJsonLd,
} from "@/lib/seo";

const marketingPageHead = buildStandardPageHead({
  title: "Brand & Digital Marketing Services — Dastute Technologies",
  description:
    "Result-driven digital marketing (SEO, PPC, Social Media, Email), Brand Strategy, Brand Identity systems and Product Film visualization from Dastute Technologies.",
  ogDescription:
    "Comprehensive brand strategy and full-funnel digital marketing services from our UK and India teams.",
  path: "/marketing",
});

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: marketingPageHead.meta,
    links: marketingPageHead.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceListJsonLd("/marketing", [
            {
              name: "Digital Marketing",
              description:
                "SEO, PPC, content, social media, and conversion optimization.",
            },
            {
              name: "Brand Strategy",
              description:
                "Positioning, audience definition, and messaging framework.",
            },
            {
              name: "Brand Identity Design",
              description:
                "Visual identity systems, typography, and brand assets.",
            },
            {
              name: "Media Planning & Advertising",
              description:
                "Campaign planning, retargeting, and channel-level optimization.",
            },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Marketing", path: "/marketing" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/marketing#faq", FAQ_ITEMS)),
      },
    ],
  }),
  component: MarketingPage,
});

const FAQ_ITEMS = [
  {
    question: "What is included in digital marketing services?",
    answer: "Digital marketing services typically include Search Engine Optimisation (SEO), Pay-Per-Click (PPC) advertising, social media management, email marketing, content strategy, and conversion rate optimisation (CRO). These services work together to build brand awareness and drive qualified leads.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "Significant SEO results usually take between 3 to 6 months to materialize. SEO is a long-term strategy that involves technical website improvements, ongoing high-quality content creation, and authoritative link building to establish trust with search engines.",
  },
  {
    question: "Why is brand strategy important?",
    answer: "Brand strategy defines your company's core positioning, messaging framework, and visual identity. A strong brand strategy ensures consistency across all touchpoints, which builds trust with consumers, differentiates you from competitors, and ultimately drives higher marketing ROI.",
  },
  {
    question: "How do you measure marketing ROI?",
    answer: "We measure marketing ROI by tracking clear KPIs aligned with business goals: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), lead conversion rates, and lifetime value (LTV). We provide transparent, data-driven dashboard reports for all campaigns.",
  }
];

const SERVICES = [
  {
    code: "M.01",
    title: "Digital Marketing",
    ctaLabel: "Read More",
    ctaHref: "/services/marketing",
    summary:
      "Result-driven campaign planning and full-funnel execution across digital channels.",
    detail:
      "Search Engine Optimisation (SEO), Pay-Per-Click (PPC) search ads, social media marketing, content creation, email automation campaigns and web conversion optimisation (CRO). Fully tracked with custom analytics dashboards.",
    deliverables: [
      "Comprehensive SEO audits & maps",
      "Google Ads / Meta Ads setup & management",
      "Email marketing & automation flows",
      "Monthly performance & ROI reports",
    ],
  },
  {
    code: "M.02",
    title: "Brand Strategy",
    ctaLabel: "Request a Brief",
    ctaHref: "/contact",
    summary: "Define your positioning, audience mapping and brand narrative.",
    detail:
      "Discovery workshops, competitor analysis, target persona profiling, brand architecture planning, positioning maps and corporate messaging guidelines to establish a clear market direction.",
    deliverables: [
      "Brand positioning guidelines",
      "Competitor & audience profiles",
      "Core messaging framework",
      "Brand architecture map",
    ],
  },
  {
    code: "M.03",
    title: "Brand Identity Design",
    ctaLabel: "See the Process",
    ctaHref: "/contact",
    summary:
      "Logo, typography and color systems that perform across all mediums.",
    detail:
      "Logo design, typographic systems, custom color palettes, brand graphics, corporate stationary, presentation decks and comprehensive brand style guides to enforce consistency.",
    deliverables: [
      "Logo files & brand assets",
      "Typography & color schemes",
      "Full brand guidelines document",
      "Stationary & deck templates",
    ],
  },
  {
    code: "M.04",
    title: "Media Planning & Advertising",
    ctaLabel: "Discuss Budget",
    ctaHref: "/contact",
    summary:
      "Optimise your ad budget across high-performing programmatic channels.",
    detail:
      "Campaign design, budget allocation, programmatic display advertising, retargeting setup, conversion tracking configuration, and ongoing performance optimization.",
    deliverables: [
      "Multi-channel media budget plan",
      "Display & video ad placements",
      "Retargeting & conversion setup",
      "Performance optimisation logs",
    ],
  },
  {
    code: "M.05",
    title: "Product Film & Visualisation",
    ctaLabel: "Start a Project",
    ctaHref: "/contact",
    summary:
      "Showcase your technology or physical products with high-end visuals.",
    detail:
      "3D product rendering, explainer animations, product overview videos, and digital showcase materials. Helping you explain complex technology or hardware visually.",
    deliverables: [
      "High-fidelity 3D renderings",
      "Explainer animation files",
      "Product showcase videos",
      "Digital launch asset packages",
    ],
  },
];

function MarketingPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Creative Practice
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl text-white">
            Positioning, campaigns
            <br />
            <span className="text-gradient-primary">and full-funnel growth.</span>
          </h1>
          <p className="mt-8 max-w-xl text-slate-300 text-lg">
            Five creative and marketing disciplines designed to help you stand
            out, drive search traffic, and capture leads globally.
          </p>
          <div className="mt-10 font-mono text-[10px] uppercase tracking-widest text-slate-400 flex flex-wrap gap-x-6 gap-y-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">5 Disciplines</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SEO · PPC · Paid Search</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">3D Product Visualisation</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gradient border-y border-border">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s, i) => {
              const accents = ["accent-top-blue", "accent-top-violet", "accent-top-emerald", "accent-top-cyan", "accent-top-rose"];
              const badgeColors = ["bg-blue-500", "bg-violet-500", "bg-emerald-500", "bg-cyan-500", "bg-rose-500"];
              return (
                <article
                  key={s.code}
                  className={`glass-card-strong rounded-3xl p-6 md:p-8 ${accents[i]}`}
                >
                  <span className={`inline-flex items-center justify-center font-mono text-xs ${badgeColors[i]} text-white rounded-lg px-3 py-1 mb-4`}>
                    {s.code}
                  </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {s.summary}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.detail}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">
                    Deliverables
                  </span>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="font-mono text-[10px] text-emerald-500 mt-1.5">
                          →
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {s.ctaHref && (
                    <div className="mt-6 flex justify-end">
                      <Link
                        to={s.ctaHref}
                        className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]"
                      >
                        Explore {s.title} <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  )}
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24 max-w-3xl mx-auto">
        <div className="flex items-end gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="text-[8px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            People Also Ask
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="space-y-8">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-dark">
        <div className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Need technical infrastructure too?
              </h3>
              <p className="mt-4 text-slate-300 max-w-md">
                Our technology practice handles cloud architecture, cybersecurity,
                managed IT and custom software engineering.
              </p>
            </div>
            <div className="flex md:justify-end gap-4">
              <Link
                to="/technology"
                className="btn-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Technology Practice <span aria-hidden>↗</span>
              </Link>
              <Link
                to="/contact"
                className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Start a Brief <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

