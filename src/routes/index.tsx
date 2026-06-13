import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceListJsonLd, buildReviewJsonLd, buildWebSiteJsonLd, buildHowToJsonLd } from "@/lib/seo";

const SERVICE_SUMMARY =
  "Dastute Technologies delivers managed IT services, advanced cybersecurity, scalable cloud solutions, and bespoke software development to ambitious UK businesses.";

const SERVICE_ITEMS = [
  {
    name: "Cyber Security",
    description:
      "Enterprise-grade threat monitoring, incident response, vulnerability assessments, and compliance management.",
  },
  {
    name: "Cloud Services",
    description:
      "Seamless migration, management, and optimisation on AWS, Azure, and Google Cloud.",
  },
  {
    name: "Managed IT Services",
    description:
      "Proactive infrastructure monitoring, helpdesk support, patch management, and vCIO advisory.",
  },
  {
    name: "Web Development",
    description:
      "Responsive web applications and corporate websites built for performance and accessibility.",
  },
  {
    name: "Mobile App Development",
    description:
      "Native Android, iOS and hybrid mobile apps designed for engagement and reliability.",
  },
  {
    name: "Blockchain & NFT",
    description:
      "Custom blockchain development, smart contracts, DeFi platforms, and tokenised experiences.",
  },
  {
    name: "ERP Solutions",
    description:
      "End-to-end ERP implementation, integration and optimisation for finance, HR and operations.",
  },
  {
    name: "IT Consulting & Advisory",
    description:
      "Strategic technology roadmaps, audits, and virtual CIO services aligned to business outcomes.",
  },
  {
    name: "Digital Marketing",
    description:
      "SEO, PPC, content, and analytics-driven campaigns for measurable business growth.",
  },
  {
    name: "IT Staffing",
    description:
      "Pre-vetted IT professionals for contract and permanent placements across the UK, India and Singapore.",
  },
];

const PARTNER_LOGOS = [
  "Zhagaram Consulting Insights Pvt Ltd",
  "Skillwave Technologies",
  "ParkQwik",
  "Mindverse Labs",
  "Creatoos",
  "Pencodit Technologies",
];

const WHY_POINTS = [
  {
    title: "Cost-Effective",
    description:
      "Flat-rate predictable pricing with no surprises. Save up to 40% compared to in-house teams.",
  },
  {
    title: "3-Minute Response",
    description:
      "Industry-leading response time with instant triage and rapid assignment.",
  },
  {
    title: "Certified Specialists",
    description:
      "Teams certified across Microsoft, AWS, Google Cloud, Cisco, and continuous training.",
  },
  {
    title: "Global Presence",
    description:
      "Local expertise from India, Singapore, and the UK with global delivery capabilities.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Services that scale with your business—from startup to enterprise.",
  },
  {
    title: "Dedicated vCIO",
    description:
      "Every client receives a virtual CIO aligned with your strategy and outcomes.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Dastute completely transformed our IT infrastructure. Downtime dropped to virtually zero and our team is more productive than ever.",
    author: "Rajesh Mehta",
    role: "CEO, Apex Logistics India",
  },
  {
    quote:
      "The cybersecurity overhaul saved us from a major data breach. Their incident response team is incredibly fast and professional.",
    author: "Dr. Priya Anand",
    role: "CTO, HealthBridge Medical Centre",
    featured: true,
  },
  {
    quote:
      "Moving to the cloud with Dastute was seamless. Our infrastructure costs dropped by 35% in the first year.",
    author: "Kevin Tan",
    role: "COO, FinEdge Solutions Singapore",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We audit your infrastructure, identify risks, and understand your business goals.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We design a customised IT strategy with a clear budget, timeline, and delivery plan.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Certified engineers deploy solutions with minimal disruption, on schedule and documented.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    description:
      "24/7 monitoring, reviews, security updates, and continuous optimisation.",
  },
];

const INDUSTRIES = [
  {
    title: "Manufacturing",
    description:
      "OT/IT convergence, ERP integration, and industrial IoT solutions.",
  },
  {
    title: "Transportation & Logistics",
    description:
      "Fleet management, real-time tracking, and supply chain visibility.",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-ready infrastructure, EHR integration, and telemedicine platforms.",
  },
  {
    title: "Banks & Insurance",
    description: "Secure banking platforms, compliance, and fraud detection.",
  },
  {
    title: "Consulting Providers",
    description:
      "Practice management tools, secure client portals, and collaboration systems.",
  },
  {
    title: "Non-Profit Organisations",
    description:
      "Affordable managed IT, donor management and compliant data handling.",
  },
  {
    title: "Social & Consumer Platforms",
    description: "Scalable backend architecture, messaging, and user security.",
  },
  {
    title: "Fintech",
    description:
      "Payment gateways, open banking APIs, and PCI-DSS aligned platforms.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Managed IT Services & IT Support Company London | Dastute" },
      { name: "description", content: SERVICE_SUMMARY },
      {
        property: "og:title",
        content: "Managed IT Services & IT Support Company London | Dastute",
      },
      { property: "og:description", content: SERVICE_SUMMARY },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dastute.co.uk/" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-home.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Managed IT Services & IT Support Company London | Dastute",
      },
      { name: "twitter:description", content: SERVICE_SUMMARY },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-home.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildWebSiteJsonLd()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildHowToJsonLd({
            name: "How Dastute Delivers Managed IT Services",
            description: "Our simple, transparent, and effective 4-step process for onboarding and managing your enterprise IT infrastructure.",
            step: PROCESS_STEPS.map((step) => ({
              name: step.title,
              text: step.description,
            })),
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceListJsonLd(
            "/",
            SERVICE_ITEMS.map((item) => ({
              name: item.name,
              description: item.description,
            })),
          ),
        ),
      },
      ...TESTIMONIALS.map((testimonial) => ({
        type: "application/ld+json",
        children: JSON.stringify(
          buildReviewJsonLd({
            authorName: testimonial.author,
            reviewBody: testimonial.quote,
            itemReviewedName: "Dastute Technologies",
          }),
        ),
      })),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Dastute Technologies Limited",
          url: "https://dastute.co.uk",
          logo: "https://dastute.co.uk/images/logo.png",
          telephone: "+44-7423021644",
          email: "contact@dastute.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "128 City Road",
            addressLocality: "London",
            postalCode: "EC1V 2NX",
            addressRegion: "England",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.5245,
            longitude: -0.0873,
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+447423021644",
              contactType: "customer service",
              areaServed: "GB",
              availableLanguage: "English",
            },
            {
              "@type": "ContactPoint",
              telephone: "+919940941959",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: "English",
            },
            {
              "@type": "ContactPoint",
              telephone: "+6587722877",
              contactType: "customer service",
              areaServed: "SG",
              availableLanguage: "English",
            },
          ],
          sameAs: [
            "https://www.linkedin.com/company/dastute-switcher-technologies",
            "https://twitter.com/DastuteTech",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="section-hero-dark border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="flex h-full flex-col justify-between space-y-8">
              <div className="inline-flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-blue-300/80">
                <span className="rounded-full border border-blue-400/20 bg-white/5 backdrop-blur px-3 py-1">
                  Strategy
                </span>
                <span className="h-1 w-1 rounded-full bg-blue-400/70" />
                <span className="rounded-full border border-blue-400/20 bg-white/5 backdrop-blur px-3 py-1">
                  Security
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
                <span className="rounded-full border border-emerald-400/20 bg-white/5 backdrop-blur px-3 py-1">
                  Delivery
                </span>
              </div>
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  <span className="sr-only">Managed IT Services London & UK IT Support Company. </span>
                  Managed IT services for SMEs and ambitious businesses.
                  <br />
                  <span className="text-gradient-primary">
                    Secure, scalable, and ready to grow.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  We provide expert managed IT services, advanced cybersecurity,
                  scalable cloud solutions, and bespoke software development to
                  keep modern companies moving. Every engagement is structured
                  around measurable outcomes, not just ticket volume.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="btn-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  to="/products"
                  className="btn-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                >
                  Explore Our Products
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  24/7 Support
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  UK · India · Singapore
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  Secure by Design
                </span>
              </div>
            </div>
            <div className="relative mx-auto flex h-full w-full max-w-xl items-stretch">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="glass-card-dark w-full rounded-[2rem] p-6 md:p-8">
                <div className="flow-rail rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-blue-400">
                        Executive Delivery View
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-white">
                        A connected operating model for IT, security and software
                      </h2>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400">
                      Live
                    </span>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Cloud Operations", "Migration, governance and cost-conscious performance.", "flow-chip", "accent-border-blue"],
                      ["Security & Compliance", "Monitoring, response planning and control maturity.", "flow-chip flow-chip-delay", "accent-border-emerald"],
                      ["Product Engineering", "Modern software, integrations and scalable delivery.", "flow-chip flow-chip-delay-2", "accent-border-violet"],
                    ].map(([label, copy, chipClass, accentClass]) => (
                      <article
                        key={label}
                        className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${chipClass} ${accentClass}`}
                      >
                        <p className="text-[10px] uppercase tracking-[0.3em] text-blue-300">
                          {label}
                        </p>
                        <p className="mt-2 text-sm text-slate-300">{copy}</p>
                      </article>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-500/10 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">
                      Premium experience, executive-ready presentation
                    </p>
                    <p className="mt-1">
                      The visual layer is designed to feel calm, intentional and
                      performance-led, matching the tone of the broader site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gradient py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-slate-500">
            Most Valuable Clients & Technology Partners
          </p>
          <div className="mt-8 relative overflow-hidden w-full group">
            {/* Gradient masks for fading edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[--background] to-transparent z-10 pointer-events-none hidden sm:block"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[--background] to-transparent z-10 pointer-events-none hidden sm:block"></div>
            
            <div className="flex gap-4 w-max animate-marquee">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, idx) => (
                <div
                  key={`${logo}-${idx}`}
                  role="img"
                  aria-label={`${logo} client logo`}
                  className="glass-card-strong rounded-2xl px-8 py-4 text-center text-sm text-slate-600 whitespace-nowrap flex items-center justify-center transition-all hover:text-primary hover:border-primary/30 min-w-[220px]"
                >
                  <span aria-hidden="true">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              What We Deliver
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise IT, security and software designed for growth
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              From proactive support and cloud governance to secure software
              delivery, we help leadership teams modernise faster without
              compromising resilience, clarity or control.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Cost-Effectiveness",
                description:
                  "Predictable flat-rate pricing with zero hidden fees. Save up to 40% compared to in-house IT teams.",
              },
              {
                title: "Innovative Technology",
                description:
                  "AI, blockchain, and cloud-native architectures that give your business a competitive edge.",
              },
              {
                title: "Industry Expertise",
                description:
                  "Deep domain knowledge across healthcare, finance, manufacturing, logistics and fintech.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`glass-card-strong rounded-3xl p-8 ${["accent-top-blue", "accent-top-violet", "accent-top-emerald"][i]}`}
              >
                <div className={`icon-badge mb-4 ${["icon-badge-blue", "icon-badge-violet", "icon-badge-emerald"][i]}`}>
                  {["💰", "⚡", "🏢"][i]}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {SERVICE_ITEMS.slice(0, 6).map((service) => (
              <article
                key={service.name}
                className="glass-card-strong rounded-3xl p-8 accent-border-blue"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-blue-600">
                  {service.name}
                </div>
                <p className="text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/technology"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              View Full Services
            </Link>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:shadow-md"
            >
              Read FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Explore the practice
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A connected view of the business, clearly organised
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Use this hub to move between our services, technology practice,
              products, process and insights pages with a clear path from
              strategy to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark py-16 sm:py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              About Dastute
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
              A calm, capable partner for technology that has to work.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Dastute was created to bring the personal service of a trusted
              local technology partner together with the scale, discipline, and
              specialist depth of a global delivery team.
            </p>
            <p className="mt-6 max-w-2xl text-slate-300">
              We help ambitious businesses simplify operations, harden security,
              modernise digital experiences, and move with confidence through
              rapid change. Every engagement is designed to feel practical,
              transparent, and outcome-led from day one.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "People",
                  description:
                    "Senior specialists and advisors who take ownership of the outcome, not just the task.",
                },
                {
                  title: "Purpose",
                  description:
                    "Security, stability, and measurable business value guide every recommendation we make.",
                },
                {
                  title: "Process",
                  description:
                    "Clear delivery frameworks, transparent communication, and dependable execution at every stage.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card-dark rounded-3xl p-6"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Learn More About Us
              </Link>
              <Link
                to="/team"
                className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          <aside className="glass-card-dark rounded-[32px] p-6 sm:p-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                Why teams choose us
              </p>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                {[
                  "Fast response times with senior-level support when it matters most.",
                  "Practical, business-first advice instead of generic technology hype.",
                  "A flexible delivery model for web, cloud, security, and operations.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                      ✓
                    </span>
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                {
                  label: "Global footprint",
                  value: "UK · India · Singapore",
                },
                {
                  label: "Delivery strength",
                  value: "Security, software, cloud, and advisory",
                },
              ].map((card) => (
                <article
                  key={card.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] text-blue-400">
                    {card.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-blue-400/20 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                Our approach
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                One partner for strategy, delivery, and support.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                From planning and implementation to continuous optimisation, we
                keep your technology reliable, secure, and ready to scale.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="why-us" className="section-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Why Dastute
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Smart Choice for Modern IT Management
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              We don't just fix problems—we prevent them. Our proactive,
              people-first approach ensures your business stays online, secure,
              and efficient 24/7.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="glass-card-strong rounded-3xl p-8"
              >
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-4 text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
              Our Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Simple, Transparent & Effective
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              From first contact to continuous management, we make IT effortless
              for your business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="glass-card-dark rounded-3xl p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Industries
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Specialists in Your Sector
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Our teams bring deep domain knowledge and understand the
              compliance, security, and operational challenges unique to your
              industry.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="glass-card-strong rounded-3xl p-6 hover:border-blue-200 transition-colors"
              >
                <h3 className="font-semibold">{industry.title}</h3>
                <p className="mt-3 text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Client Reviews
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Real feedback from businesses that have transformed their IT
              operations with Dastute Technologies.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.author}
                className={`rounded-3xl ${item.featured ? "glass-card-strong border-blue-200 bg-blue-50/50" : "glass-card-strong"} p-8`}
              >
                <p className="text-2xl leading-none text-gradient-primary font-bold mb-2">"</p>
                <p className="text-slate-600">{item.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                    <i className="fas fa-user" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

