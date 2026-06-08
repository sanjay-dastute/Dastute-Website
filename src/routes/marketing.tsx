import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildServiceListJsonLd,
  buildStandardPageHead,
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
    ],
  }),
  component: MarketingPage,
});

const SERVICES = [
  {
    code: "M.01",
    title: "Digital Marketing",
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
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Creative Practice
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl">
          Positioning, campaigns
          <br />
          and full-funnel growth.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          Five creative and marketing disciplines designed to help you stand
          out, drive search traffic, and capture leads globally.
        </p>
        <div className="mt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
          <span>5 Disciplines</span>
          <span>SEO · PPC · Paid Search</span>
          <span>3D Product Visualisation</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.code}
                className="border border-border p-6 md:p-8 bg-background"
              >
                <span className="font-mono text-xs text-primary block mb-4">
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
                        <span className="font-mono text-[10px] text-primary mt-1.5">
                          →
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Need technical infrastructure too?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              Our technology practice handles cloud architecture, cybersecurity,
              managed IT and custom software engineering.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Technology Practice <span aria-hidden>↗</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start a Brief <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
