import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";

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

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto text-center md:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Managed IT Services Pricing UK: Predictable & Transparent
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
            Find out exactly how much managed IT support costs. No hidden fees, no surprise bills. Just straightforward models tailored to how your business operates.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/project-estimator"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get Custom Estimate
            </Link>
            <a
              href="#pricing-models"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              View Pricing Models
            </a>
          </div>
        </div>
      </section>

      {/* Intro & Overview Grid */}
      <section id="pricing-models" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Our Pricing Models
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't believe in one-size-fits-all, but we do believe in simplicity and delivering the best value. Our team is led by experts with a minimum of 15 years of industry-proven track record, ensuring top-tier service. Depending on your workforce structure, we align our pricing to either your user count or your device count—custom calculated for your project requirements and timeline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Per-User Pricing",
                desc: "Ideal for modern offices. Covers an employee and all their devices (laptop, mobile, tablet). Predictable scaling as you hire.",
                color: "accent-top-blue",
                target: "Custom per user"
              },
              {
                title: "Per-Device Pricing",
                desc: "Best for shift-work, retail, or manufacturing where multiple employees share a single terminal or workstation.",
                color: "accent-top-emerald",
                target: "Custom per device"
              },
              {
                title: "Co-Managed Retainer",
                desc: "For companies with an existing internal IT team that need escalated support, specialized cybersecurity, or holiday cover.",
                color: "accent-top-violet",
                target: "Custom monthly"
              }
            ].map((card, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${card.color} flex flex-col`}
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <div className="font-mono text-sm font-bold text-blue-600 mb-4">{card.target}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Detailed */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Value Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Managed Services vs. In-House IT
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Why building an internal team from scratch is often a hidden expense trap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* In-House */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">In-House IT Team</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Hiring an internal team carries substantial hidden costs beyond salary.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-times text-rose-500 mt-1"></i> <div><strong>High Base Costs:</strong> Salaries, NI, benefits, and recruitment fees for 1st-line, 2nd-line, and management.</div></li>
                <li className="flex gap-3"><i className="fas fa-times text-rose-500 mt-1"></i> <div><strong>Tooling Expenses:</strong> You must purchase your own RMM, ticketing systems, and enterprise security tools.</div></li>
                <li className="flex gap-3"><i className="fas fa-times text-rose-500 mt-1"></i> <div><strong>Coverage Gaps:</strong> Sickness, holidays, and out-of-hours coverage require overstaffing.</div></li>
                <li className="flex gap-3"><i className="fas fa-times text-rose-500 mt-1"></i> <div><strong>Skills Silos:</strong> Hard to hire a single person who is an expert in networking, cloud, and cybersecurity.</div></li>
              </ul>
            </div>

            {/* Managed IT */}
            <div className="p-8 rounded-3xl glass-card-strong accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dastute Managed IT</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A predictable flat fee granting you access to an entire department of specialists.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-check text-blue-500 mt-1"></i> <div><strong>Fractional Cost:</strong> Typically 40-60% cheaper than maintaining an equivalent internal headcount.</div></li>
                <li className="flex gap-3"><i className="fas fa-check text-blue-500 mt-1"></i> <div><strong>Enterprise Tooling Included:</strong> EDR, monitoring agents, and backup platforms are baked into our per-user fee.</div></li>
                <li className="flex gap-3"><i className="fas fa-check text-blue-500 mt-1"></i> <div><strong>24/7/365 Coverage:</strong> True round-the-clock monitoring and helpdesk without paying night-shift premiums.</div></li>
                <li className="flex gap-3"><i className="fas fa-check text-blue-500 mt-1"></i> <div><strong>Deep Expertise:</strong> Access to a diverse pool of certified network engineers, security analysts, and cloud architects.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pricing FAQs</h2>
            <p className="text-muted-foreground">Common questions about our IT support costs.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How much does managed IT support cost in the UK?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We offer the best pricing in the market compared to other companies. We calculate our pricing exactly according to your project requirements, scope, and timeline rather than using rigid fixed numbers. This ensures you receive enterprise-grade service, led by professionals with over 15 years of proven industry experience, at an unbeatable value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is per-user or per-device pricing better?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Per-user pricing is generally better for modern businesses where employees use multiple devices (laptop, phone, tablet). Per-device pricing may suit environments like manufacturing floors or retail where multiple shifts share a single workstation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you lock clients into long-term contracts?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We believe in earning your business every month. While we offer 1-year and 3-year agreements for predictable discounts, we also offer flexible terms with clear out-clauses if our service levels drop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Are onboarding fees extra?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                There is typically a one-time onboarding fee equal to one month of service. This covers the comprehensive environment audit, deployment of security agents, documentation creation, and initial alignment to our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Get an Exact Quote Today
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Use our project estimator or contact us to build a custom pricing plan for your IT support needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/project-estimator"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Open Project Estimator
            </Link>
            <Link
              to="/contact"
              className="btn-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
