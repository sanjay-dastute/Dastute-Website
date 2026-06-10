import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services UK | SEO, PPC & Analytics | Dastute" },
      {
        name: "description",
        content:
          "Data-driven digital marketing from Dastute. SEO, PPC, social media, content marketing, email automation, and full-funnel analytics. Measurable ROI across every channel.",
      },
      {
        name: "keywords",
        content:
          "digital marketing UK, SEO agency UK, PPC management, content marketing services, social media marketing UK, marketing analytics, CRO, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1a56db" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      {
        property: "og:title",
        content:
          "Data-Driven Digital Marketing That Fills Your Pipeline | Dastute",
      },
      {
        property: "og:description",
        content:
          "We combine strategy, creative, and data analytics to deliver measurable ROI. SEO, Paid Media, Social, and Automation.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/marketing",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-marketing.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Digital Marketing Services | Dastute Technologies",
      },
      {
        name: "twitter:description",
        content:
          "Data-driven digital marketing from Dastute. SEO, PPC, social media, content marketing, email automation, and full-funnel analytics.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-marketing.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/marketing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Digital Marketing Services",
            description:
              "Result-driven digital marketing - SEO, PPC, social media management, content marketing, email automation, and full-funnel analytics.",
            path: "/services/marketing",
            serviceType: [
              "SEO",
              "PPC",
              "Content Marketing",
              "Social Media Marketing",
              "Email Marketing",
              "Marketing Analytics",
              "Conversion Rate Optimisation"
            ],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "Digital Marketing", path: "/services/marketing" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <Link to="/marketing" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <i className="fas fa-arrow-left"></i> Back to Marketing Services
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Digital Marketing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl text-white">
            Data-Driven Digital Marketing That Fills Your Pipeline.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            From organic search and paid media to social campaigns and marketing automation — Dastute's digital marketing practice combines strategy, creative, and data analytics to deliver measurable ROI across every channel. We don't run campaigns; we engineer growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get a Free Marketing Audit
            </Link>
            <a
              href="#process"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              View Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { value: "+187%", label: "Avg. Organic Traffic Growth", sub: "for clients in 12 months" },
            { value: "4.8×", label: "Google Ads ROAS", sub: "average return on ad spend" },
            { value: "10+", label: "Channels Managed", sub: "search, social, email, display" },
            { value: "Weekly", label: "Reporting Cadence", sub: "full-funnel attribution reports" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border-r border-border last:border-r-0 flex flex-col justify-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Marketing That Connects Technology With Commercial Growth
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              In 2026, digital marketing is no longer optional — it is the primary growth engine for B2B and B2C businesses operating in competitive markets. Dastute's marketing division combines the analytical rigour of a technology company with the creative output of a specialist agency. We build end-to-end marketing ecosystems that attract, nurture, and convert your ideal customers — with full-funnel transparency and weekly reporting at every step.
            </p>
            <p>
              Our team operates across all major digital channels: organic search (SEO), paid search and display (PPC/Google Ads), social media management and advertising, content marketing, email marketing automation, influencer partnerships, and conversion rate optimisation. We integrate every channel into a unified data layer — giving you one source of truth for attribution, ROI, and growth decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Our Complete Digital Marketing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Every channel managed by certified specialists with end-to-end accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-search",
                color: "blue",
                title: "Search Engine Optimisation",
                desc: "Full-spectrum SEO: technical audits, crawl fixing, keyword research, on-page copy, internal linking, structured data, and white-hat link acquisition. We target commercially valuable keywords aligned to the latest Google core updates and UK search intent patterns. Includes Core Web Vitals and E-E-A-T compliance."
              },
              {
                icon: "fa-mouse-pointer",
                color: "emerald",
                title: "PPC & Paid Media Management",
                desc: "Google Search, Display, Shopping, and Performance Max campaigns. LinkedIn sponsored ads for B2B lead generation. Meta and TikTok ads for consumer brands. Budgets managed from £2,000 to £200,000+ per month with transparent cost-per-lead and ROAS reporting."
              },
              {
                icon: "fa-hashtag",
                color: "indigo",
                title: "Social Media Management",
                desc: "Organic social strategy, content calendar creation, community management, influencer outreach, and paid social campaigns. Employee advocacy programmes and executive thought leadership content for B2B brands across LinkedIn, X, Facebook, Instagram, and TikTok."
              },
              {
                icon: "fa-pen-nib",
                color: "rose",
                title: "Content Marketing",
                desc: "SEO-optimised blog articles, long-form guides, pillar pages, white papers, case studies, press releases, and video scripts. Content written by industry specialists — not generalist writers — ensuring technical accuracy and authority in complex sectors."
              },
              {
                icon: "fa-envelope-open-text",
                color: "amber",
                title: "Email Marketing & Automation",
                desc: "Full lifecycle marketing: welcome sequences, lead nurture drips, cart abandonment, post-purchase flows, and newsletters. Platform expertise in HubSpot, Mailchimp, Klaviyo, ActiveCampaign, and Salesforce Marketing Cloud. Average open rates 28%+."
              },
              {
                icon: "fa-chart-pie",
                color: "violet",
                title: "Marketing Analytics & Attribution",
                desc: "GA4 setup and audit, custom Looker Studio dashboard build, multi-touch attribution modelling, and CRM pipeline reporting. We connect marketing spend directly to pipeline and revenue — not just impressions and clicks."
              },
              {
                icon: "fa-funnel-dollar",
                color: "cyan",
                title: "Conversion Rate Optimisation (CRO)",
                desc: "Landing page A/B testing, heatmap analysis, user session recording, form optimisation, and checkout funnel improvements. We systematically increase the percentage of visitors who convert, maximising ROI from your existing traffic."
              },
              {
                icon: "fa-fingerprint",
                color: "pink",
                title: "Brand Strategy & Digital Identity",
                desc: "Brand positioning frameworks, messaging hierarchy, tone of voice guidelines, and visual identity for digital channels. Valuable for technology companies entering the UK market, post-merger rebranding, or businesses scaling to enterprise."
              }
            ].map((service, i) => (
              <div key={i} className={`glass-card-strong rounded-3xl p-8 accent-top-${service.color} h-full flex flex-col`}>
                <div className={`w-12 h-12 rounded-2xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center mb-6`}>
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sector-specific marketing strategies built around compliance requirements, buyer behaviour, and competitive landscapes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Financial Services & Fintech</h3>
                <p className="text-sm text-slate-600 leading-relaxed">FCA-compliant financial promotions, lead generation for IFAs and challenger banks.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Healthcare & Pharma</h3>
                <p className="text-sm text-slate-600 leading-relaxed">MHRA/ABPI compliant healthcare marketing, HCP digital engagement.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">B2B Technology & SaaS</h3>
                <p className="text-sm text-slate-600 leading-relaxed">ABM campaigns, intent-data targeting, long sales-cycle nurture.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Legal & Professional</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Thought leadership, SEO for high-value practice area keywords.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">E-commerce & Retail</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Full-funnel performance marketing, seasonal campaigns, retention programmes.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Manufacturing & Industrial</h3>
                <p className="text-sm text-slate-600 leading-relaxed">LinkedIn B2B campaigns, trade publication SEO, distributor portal marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600 block mb-4">
              / Tangible Outputs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              What We Deliver
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tangible outputs that build long-term marketing equity — not just monthly reports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Marketing Strategy Document", desc: "Full-channel strategy: target audience personas, channel priorities, messaging matrix, and 12-month content calendar." },
              { title: "SEO Audit & Roadmap", desc: "Technical SEO audit with prioritised action list, keyword gap analysis, competitor backlink report, and 6-month ranking projection." },
              { title: "Monthly Performance Report", desc: "Full-funnel attribution report: impressions → clicks → leads → pipeline → revenue. Includes spend vs. return by channel." },
              { title: "Campaign Creative Assets", desc: "Ad copy variants, landing page designs, email templates, and social media visuals — all brand-aligned and A/B tested." },
              { title: "Live Analytics Dashboard", desc: "Custom GA4 and Looker Studio dashboard giving your team 24/7 visibility of all metrics — refreshed daily, no waiting for the monthly report." },
              { title: "Quarterly Strategy Review", desc: "Every quarter, we reassess channel mix, budget allocation, keyword opportunities, and competitive positioning to recalibrate strategy." }
            ].map((item, i) => (
              <div key={i} className="glass-card-strong p-8 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Stack */}
      <section className="bg-slate-900 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Tools & Technology Stack
            </h2>
            <p className="text-base text-slate-400">
              Industry-leading platforms operated by certified specialists.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Google Ads", "Meta Business Suite", "LinkedIn Campaign Manager", "Ahrefs", "SEMrush", "Screaming Frog",
              "Google Search Console", "GA4", "Looker Studio", "HubSpot", "Mailchimp", "Klaviyo", "ActiveCampaign",
              "Hotjar", "Optimizely", "VWO", "Microsoft Clarity", "UserTesting", "Surfer SEO", "Clearscope",
              "Sprout Social", "Buffer", "Hootsuite", "LinkedIn Sales Navigator", "Google Tag Manager", "Microsoft Ads",
              "Salesforce Marketing Cloud", "Triple Whale", "Jasper AI", "MarketMuse", "Grammarly", "Figma", "Canva Pro"
            ].map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-full border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section id="process" className="bg-white">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Our Marketing Engagement Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              From discovery to full-funnel optimisation — transparent, structured, and results-driven.
            </p>
            <div className="mt-4 inline-flex px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
              Onboarding to first campaign live: 2–3 weeks
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery & Audit", desc: "We audit your current digital presence: existing keyword rankings, traffic sources, ad account performance, social following, and competitor positioning. This establishes the baseline." },
              { num: "02", title: "Strategy & Planning", desc: "We develop a 12-month digital marketing strategy with channel prioritisation, budget allocation, messaging framework, and measurable OKRs agreed with your team." },
              { num: "03", title: "Campaign Build & Launch", desc: "We set up tracking, build creative assets, configure automation workflows, and launch campaigns — with a structured go-live checklist." },
              { num: "04", title: "Optimise & Report", desc: "Weekly performance monitoring with automated dashboards. Monthly strategic review calls. Quarterly strategy recalibration based on results and market changes." }
            ].map((step, i) => (
              <div key={i} className="relative p-6 pt-10 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-300 transition-colors">
                <span className="absolute -top-4 left-6 text-5xl font-black text-slate-200">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}



