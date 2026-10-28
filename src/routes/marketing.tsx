import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Magnetic, SplitWords } from "@/components/motion";
import { ProductFaq } from "@/components/ProductSections";
import { DisciplineRows, MarketingFunnel } from "@/components/MarketingSections";
import {
  buildBreadcrumbJsonLd,
  buildServiceListJsonLd,
  buildStandardPageHead,
  buildFaqJsonLd,
} from "@/lib/seo";

const marketingPageHead = buildStandardPageHead({
  title: "Brand & Digital Marketing Services - Dastute Technologies",
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
    answer: "Digital marketing services include Search Engine Optimisation (SEO), Pay-Per-Click (PPC) advertising, social media management, email automation, content creation, and conversion rate optimisation (CRO). Together, these six core disciplines work systematically to increase your brand's online visibility, capture high-intent search traffic, and convert website visitors into qualified leads.",
  },
  {
    question: "How long does SEO take?",
    answer: "SEO takes between 3 to 6 months to show significant results, though competitive industries may require 9 to 12 months. This timeframe is necessary because search engines need time to crawl, evaluate, and index technical website improvements, newly published authoritative content, and newly acquired inbound backlinks.",
  },
  {
    question: "Why is brand strategy important?",
    answer: "Brand strategy is important because it defines your company's core positioning, target audience, and messaging framework before you spend money on advertising. A documented strategy ensures absolute consistency across every marketing channel, which builds consumer trust, differentiates you from competitors, and ultimately lowers your customer acquisition costs.",
  },
  {
    question: "How do you measure marketing ROI?",
    answer: "You measure marketing ROI by tracking direct business KPIs such as Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), lead conversion rates, and customer lifetime value (LTV). We deploy custom analytics dashboards that map these precise financial metrics back to specific campaigns, ad groups, and organic search queries.",
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
        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
              / Creative Practice
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1] text-balance max-w-4xl text-white">
              <SplitWords text="Digital marketing agency UK" />
              <br />
              <SplitWords className="text-gradient-primary" text="and SEO services London." delay={0.3} />
            </h1>
            <p className="mt-8 max-w-xl text-slate-300 text-lg">
              Five creative and marketing disciplines designed to help you stand
              out, drive search traffic, and capture leads globally.
            </p>
            <div className="mt-10 font-mono text-[10px] uppercase tracking-widest text-slate-400 flex flex-wrap gap-x-3 gap-y-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">5 Disciplines</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SEO · PPC · Paid Search</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">3D Product Visualisation</span>
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-lg">
            <MarketingFunnel />
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-gradient border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ What we create</p>
              <p className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Five disciplines, one growth engine</p>
            </div>
            <p className="max-w-xs text-sm text-slate-500">Select a discipline to see what's included.</p>
          </div>
          <DisciplineRows services={SERVICES} />
        </div>
      </section>

      <section id="faq" className="px-6 py-20 sm:py-24 max-w-7xl mx-auto">
        <ProductFaq
          items={FAQ_ITEMS}
          title="People Also Ask"
          intro="Straight answers on SEO timelines, brand strategy and measuring marketing ROI."
        />
      </section>

      {/* Footer CTA */}
      <section className="future-section px-6 py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Build the platform behind it</p>
            <h3 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              Need technical <span className="text-gradient-primary">infrastructure too?</span>
            </h3>
            <p className="mt-4 text-slate-300 max-w-md">
              Our technology practice handles cloud architecture, cybersecurity,
              managed IT and custom software engineering.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            <Magnetic>
              <Link
                to="/technology"
                className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Technology Practice <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/contact"
                className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Start a Brief <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
