import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { Magnetic, SplitWords } from "@/components/motion";
import { ProductFaq } from "@/components/ProductSections";
import { CostChart, PricingCta, PricingModels, VersusBlock } from "@/components/PricingSections";
import { AdBudget, PlansTable, ScopeClarity, TermsGrid } from "@/components/MarketingProgramme";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Managed IT Services Pricing UK & Cost Guide | Dastute" },
      {
        name: "description",
        content:
          "Discover how much managed IT support costs in the UK. Transparent pricing models (per-user, per-device) with no hidden fees from Dastute Technologies.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Managed IT Services Pricing UK & Cost Guide | Dastute",
      },
      {
        property: "og:description",
        content:
          "Discover how much managed IT support costs in the UK. Transparent pricing models (per-user, per-device) with no hidden fees from Dastute Technologies.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/pricing",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-pricing.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Managed IT Services Pricing UK & Cost Guide | Dastute",
      },
      {
        name: "twitter:description",
        content:
          "Discover how much managed IT support costs in the UK. Transparent pricing models (per-user, per-device) with no hidden fees from Dastute Technologies.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-pricing.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/pricing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Managed IT Pricing",
            description: "Transparent and predictable managed IT services pricing in the UK. Discover flexible plans tailored for small to enterprise businesses.",
            path: "/pricing",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/pricing", [
            {
              question: "How much does managed IT support cost in the UK?",
              answer: "We offer the best pricing in the market compared to other IT companies. Because every business is unique, we calculate our pricing entirely according to your specific project requirements, timeline, and complexity, ensuring you never pay for services you don't need.",
            },
            {
              question: "Is per-user or per-device pricing better?",
              answer: "Per-user pricing is generally better for modern businesses where employees use multiple devices (laptop, phone, tablet). Per-device pricing may suit environments like manufacturing floors or retail where multiple shifts share a single workstation.",
            },
            {
              question: "Do you lock clients into long-term contracts?",
              answer: "We believe in earning your business every month. While we offer 1-year and 3-year agreements for predictable discounts, we also offer flexible terms with clear out-clauses if our service levels drop.",
            }
          ])
        ),
      }
    ],
  }),
  component: Page,
});

const PRICING_FAQ = [
  {
    question: "How much does managed IT support cost in the UK?",
    answer:
      "We offer the best pricing in the market compared to other companies. We calculate our pricing exactly according to your project requirements, scope, and timeline rather than using rigid fixed numbers. This ensures you receive enterprise-grade service, led by professionals with over 15 years of proven industry experience, at an unbeatable value.",
  },
  {
    question: "Is per-user or per-device pricing better?",
    answer:
      "Per-user pricing is generally better for modern businesses where employees use multiple devices (laptop, phone, tablet). Per-device pricing may suit environments like manufacturing floors or retail where multiple shifts share a single workstation.",
  },
  {
    question: "Do you lock clients into long-term contracts?",
    answer:
      "We believe in earning your business every month. While we offer 1-year and 3-year agreements for predictable discounts, we also offer flexible terms with clear out-clauses if our service levels drop.",
  },
  {
    question: "Are onboarding fees extra?",
    answer:
      "There is typically a one-time onboarding fee equal to one month of service. This covers the comprehensive environment audit, deployment of security agents, documentation creation, and initial alignment to our standards.",
  },
];

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-center md:text-left">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
              / Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.02] text-balance max-w-5xl text-white">
              <SplitWords text="Managed IT Services Pricing UK:" />{" "}
              <SplitWords className="text-gradient-primary" text="Predictable & Transparent" delay={0.3} />
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
              Find out exactly how much managed IT support costs. No hidden fees, no surprise bills. Just straightforward models tailored to how your business operates.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
              <Magnetic>
                <Link
                  to="/project-estimator"
                  className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Get Custom Estimate
                </Link>
              </Magnetic>
              <a
                href="#pricing-models"
                className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                View Pricing Models
              </a>
            </div>
          </div>
          <div className="px-4 sm:px-8">
            <CostChart />
          </div>
        </div>
      </section>

      {/* Pricing models */}
      <section id="pricing-models" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Pricing Models
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Our Pricing Models
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't believe in one-size-fits-all, but we do believe in simplicity and delivering the best value. Our team is led by experts with a minimum of 15 years of industry-proven track record, ensuring top-tier service. Depending on your workforce structure, we align our pricing to either your user count or your device count - custom calculated for your project requirements and timeline.
            </p>
          </div>
          <PricingModels />
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Value Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Managed Services vs. In-House IT
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Why building an internal team from scratch is often a hidden expense trap.
            </p>
          </div>
          <VersusBlock />
        </div>
      </section>

      {/* Digital marketing plans (£ / ₹ by visitor region) */}
      <section className="section-gradient border-y border-border px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <PlansTable heading="Digital marketing plans" />
          <Link to="/marketing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            See the full marketing programme <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
        <AdBudget />
      </section>

      <section className="section-gradient border-y border-border px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <ScopeClarity />
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
        <TermsGrid />
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 sm:py-24 max-w-7xl mx-auto">
        <ProductFaq
          items={PRICING_FAQ}
          title="Pricing FAQs"
          intro="Common questions about our IT support costs. Need a number for your business? We'll build one with you."
        />
      </section>

      <PricingCta />
    </SiteLayout>
  );
}
