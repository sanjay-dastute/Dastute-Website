import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FaqSection } from "@/components/FaqSection";
import { FAQS } from "@/lib/faqs";
import { buildBreadcrumbJsonLd, buildServiceListJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { Icon } from "@/components/Icon";
import type { CSSProperties } from "react";
import { HomePillars, ServiceBento } from "@/components/HomeSections";
import { HeroGlobe } from "@/components/motion/HeroGlobe";
import { CountUp, Magnetic, Parallax, PinnedHorizontal, SplitWords, TiltCard } from "@/components/motion";

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
      "Services that scale with your business - from startup to enterprise.",
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
        children: JSON.stringify(buildFaqJsonLd("/", FAQS["home"])),
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Dastute Technologies Limited",
          url: "https://dastute.co.uk",
          logo: "https://dastute.co.uk/logo.png",
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
      <section className="hero-cinematic border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex h-full flex-col justify-center space-y-8">
              <div data-reveal className="inline-flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-blue-300/80">
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
                  <SplitWords text="Managed IT services for SMEs and ambitious businesses." />
                  <br />
                  <SplitWords
                    className="text-gradient-primary"
                    text="Secure, scalable, and ready to grow."
                    delay={0.45}
                  />
                </h1>
                <p data-reveal style={{ "--i": 4 } as CSSProperties} className="max-w-2xl text-lg leading-8 text-slate-300">
                  We provide expert managed IT services, advanced cybersecurity,
                  scalable cloud solutions, and bespoke software development to
                  keep modern companies moving. Every engagement is structured
                  around measurable outcomes, not just ticket volume.
                </p>
              </div>
              <div data-reveal style={{ "--i": 6 } as CSSProperties} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
                  >
                    Book a Strategy Call
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/products"
                    className="btn-glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
                  >
                    Explore Our Products
                  </Link>
                </Magnetic>
              </div>
              <div data-reveal style={{ "--i": 8 } as CSSProperties} className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">
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
            <div data-reveal="zoom" className="relative mx-auto w-full max-w-xl">
              <HeroGlobe />
              <Parallax offset={30} className="absolute left-0 top-[14%] sm:-left-4">
                <div className="glass-card-dark rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-blue-300">Cloud Operations</p>
                  <p className="mt-1 text-xs text-slate-300">Migration & governance</p>
                </div>
              </Parallax>
              <Parallax offset={-40} className="absolute right-0 top-[40%] sm:-right-6">
                <div className="glass-card-dark rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Security & Compliance
                  </p>
                  <p className="mt-1 text-xs text-slate-300">Monitoring & response</p>
                </div>
              </Parallax>
              <Parallax offset={-25} className="absolute right-[4%] top-[2%]">
                <div className="glass-card-dark rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-sky-300">Managed IT Support</p>
                  <p className="mt-1 text-xs text-slate-300">24/7 proactive helpdesk</p>
                </div>
              </Parallax>
              <Parallax offset={35} className="absolute bottom-[14%] right-[2%] hidden sm:block">
                <div className="glass-card-dark rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">Network & Connectivity</p>
                  <p className="mt-1 text-xs text-slate-300">SD-WAN & secure links</p>
                </div>
              </Parallax>
              <Parallax offset={50} className="absolute bottom-[4%] left-[4%]">
                <div className="glass-card-dark rounded-2xl px-4 py-3 shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Product Engineering</p>
                  <p className="mt-1 text-xs text-slate-300">Secure, scalable delivery</p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gradient py-12 sm:py-16">
        <div data-reveal className="max-w-7xl mx-auto px-4 sm:px-6">
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

      <section id="services" className="hb-section py-20 sm:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div data-reveal className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
              What We Deliver
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Enterprise IT, security and software{" "}
              <span className="text-gradient-primary">designed for growth</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-300">
              From proactive support and cloud governance to secure software
              delivery, we help leadership teams modernise faster without
              compromising resilience, clarity or control.
            </p>
          </div>
          <div className="mt-14">
            <HomePillars />
          </div>
          <div className="mt-5">
            <ServiceBento services={SERVICE_ITEMS} />
          </div>
          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Link
                to="/technology"
                className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              >
                View Full Services
              </Link>
            </Magnetic>
            <a
              href="#faq"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Read FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div data-reveal="zoom" className="space-y-4 text-center">
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
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              { value: 3, suffix: "", label: "Global offices" },
              { value: 11, suffix: "", label: "Service lines" },
              { value: 24, suffix: "/7", label: "Support coverage" },
            ].map((stat, i) => (
              <div key={stat.label} data-reveal style={{ "--i": i } as CSSProperties} className="glass-card-strong rounded-3xl p-6">
                <p className="text-gradient-primary text-4xl font-black sm:text-5xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 sm:py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-reveal="left">
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
              ].map((item, i) => (
                <div
                  key={item.title}
                  data-reveal
                  style={{ "--i": i + 2 } as CSSProperties}
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
              <Magnetic>
                <Link
                  to="/about"
                  className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Learn More About Us
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/team"
                  className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Meet the Team
                </Link>
              </Magnetic>
            </div>
          </div>

          <Parallax offset={40}>
            <aside data-reveal="right" className="glass-card-dark glow-ring rounded-[32px] p-6 sm:p-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                  Why teams choose us
                </p>
                <ul className="mt-5 space-y-4 text-sm text-slate-300">
                  {[
                    "Fast response times with senior-level support when it matters most.",
                    "Practical, business-first advice instead of generic technology hype.",
                    "A flexible delivery model for web, cloud, security, and operations.",
                  ].map((item, i) => (
                    <li key={item} data-reveal="left" style={{ "--i": i + 2 } as CSSProperties} className="flex gap-3">
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
          </Parallax>
        </div>
      </section>

      <section id="why-us" className="section-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div data-reveal className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Why Dastute
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Smart Choice for Modern IT Management
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              We don't just fix problems - we prevent them. Our proactive,
              people-first approach ensures your business stays online, secure,
              and efficient 24/7.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_POINTS.map((point, i) => (
              <div key={point.title} data-reveal style={{ "--i": i % 3 } as CSSProperties}>
                <TiltCard className="glass-card-strong h-full rounded-3xl p-8">
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                  <p className="mt-4 text-slate-600">{point.description}</p>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-dark">
        <PinnedHorizontal
          header={
            <div data-reveal className="mx-auto max-w-7xl space-y-4 px-4 pt-16 text-center sm:px-6 lg:pt-0">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
                Our Process
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Simple, Transparent & Effective
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-400">
                From first contact to continuous management, we make IT effortless
                for your business.
              </p>
            </div>
          }
        >
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              data-reveal
              style={{ "--i": i } as CSSProperties}
              className="glass-card-dark glow-ring relative mx-4 rounded-3xl p-8 sm:mx-6 lg:mx-0 lg:min-h-[340px] lg:w-[440px] lg:shrink-0 lg:p-10 lg:first:ml-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:last:mr-[max(2rem,calc((100vw-80rem)/2+2rem))]"
            >
              <span aria-hidden="true" className="pointer-events-none absolute right-6 top-2 text-8xl font-black text-white/5 lg:text-9xl">
                {step.number}
              </span>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.description}</p>
            </div>
          ))}
        </PinnedHorizontal>
        <div className="pb-16 sm:pb-20" />
      </section>

      <section id="industries" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div data-reveal className="space-y-4 text-center">
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
            {INDUSTRIES.map((industry, i) => (
              <div
                key={industry.title}
                data-reveal="zoom"
                style={{ "--i": i % 4 } as CSSProperties}
                className="glass-card-strong rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
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
          <div data-reveal className="space-y-4 text-center">
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
            {TESTIMONIALS.map((item, i) => (
              <div key={item.author} data-reveal style={{ "--i": i } as CSSProperties}>
                <TiltCard
                  className={`h-full rounded-3xl ${item.featured ? "glass-card-strong glow-ring border-blue-200 bg-blue-50/50" : "glass-card-strong"} p-8`}
                >
                  <p className="text-2xl leading-none text-gradient-primary font-bold mb-2">"</p>
                  <p className="text-slate-600">{item.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                      <Icon name="fa-user" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={FAQS["home"]} />

    </SiteLayout>
  );
}
