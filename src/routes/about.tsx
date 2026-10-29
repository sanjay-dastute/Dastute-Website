import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, ORGANIZATION_SCHEMA, buildLocalBusinessJsonLd } from "@/lib/seo";
import type { CSSProperties } from "react";
import { Compass, Crosshair, Eye, LineChart, ShieldCheck, Target } from "lucide-react";
import { AboutNetwork, OfficeCards, StoryTimeline } from "@/components/AboutSections";
import { CountUp, SplitWords } from "@/components/motion";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Dastute Technologies | Trusted Technology Partner",
      },
      {
        name: "description",
        content:
          "Dastute Technologies is a global IT services company serving businesses in the UK, India and Singapore with practical IT, software and cybersecurity services.",
      },
      {
        property: "og:title",
        content:
          "About Dastute Technologies | Trusted Technology Partner",
      },
      {
        property: "og:description",
        content:
          "We help organizations simplify operations, improve resilience, and scale with confidence through practical IT and software services.",
      },
      { property: "og:url", content: "https://dastute.co.uk/about" },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildLocalBusinessJsonLd({
            path: "/about",
            name: "Dastute Technologies Limited",
            description: "Global IT services company serving businesses across India, Singapore, and the UK.",
            telephone: "+44 7423 021644",
            email: "contact@dastute.co.uk",
            city: "London",
            countryCode: "GB"
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
              / About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">
              <SplitWords text="Trusted Technology Partner" />{" "}
              <SplitWords className="text-gradient-primary" text="for Business Growth." delay={0.3} />
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-300 leading-relaxed">
              We help organizations simplify operations, improve resilience, and scale with confidence through practical IT and software services.
            </p>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { v: <CountUp to={3} />, k: "Regions" },
                { v: <CountUp to={5} />, k: "Offices" },
                { v: <>24/7</>, k: "Coverage" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl font-bold text-white">{s.v}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-lg">
            <AboutNetwork />
          </div>
        </div>
      </section>

      {/* Who We Are & Mission */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Innovation Built On <span className="text-gradient-primary">Reliability</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dastute Technologies Limited is a global IT services company serving businesses across India, Singapore, and the UK. Our teams combine engineering depth with business understanding to deliver technology that works in real-world conditions.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { t: "Our Mission", d: "Enable organizations to operate smarter with secure, scalable, and cost-effective digital solutions.", I: Target, hue: "#3b82f6" },
                { t: "Our Vision", d: "Be the trusted long-term technology partner for businesses navigating continuous change.", I: Eye, hue: "#10b981" },
                { t: "Our Approach", d: "Listen first, design with purpose, and execute with accountability from discovery through support.", I: Compass, hue: "#6366f1" },
              ].map(({ t, d, I, hue }, i) => (
                <article key={t} data-reveal="right" className="ab-pillar" style={{ "--hue": hue, "--i": i } as CSSProperties}>
                  <span aria-hidden="true" className="ab-pillar-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ab-pillar-icon"><I aria-hidden="true" className="h-6 w-6" /></span>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-slate-900">{t}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600 block mb-4">
              / Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-14">
              Our Story in Detail
            </h2>
          </div>
          <StoryTimeline
            chapters={[
              {
                label: "Where we started",
                text: 'Dastute Technologies Limited started as a small group of engineers supporting local businesses that needed reliable IT without enterprise price tags. As clients grew, so did their requirements: higher uptime expectations, stronger security controls, and global operations. Rather than staying as a small "IT shop," Dastute invested in building repeatable processes, documented playbooks, and a training pipeline to support customers at scale.',
              },
              {
                label: "Where we are today",
                text: "Today, the company supports organisations across India, Singapore, and the UK, but still operates with the responsiveness and ownership mindset of a local partner. Every new hire is trained not only on tools and platforms, but also on communication, documentation standards, and client empathy.",
              },
            ]}
          />
        </div>
      </section>

      {/* Value Delivery */}
      <section className="hb-section py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-400 block mb-4">
              / Value Delivery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              How We Deliver <span className="text-gradient-primary">Value</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Business-First Thinking", d: "Technology decisions are evaluated against business impact: revenue, risk, cost, and time-to-market.", I: Crosshair, hue: "#f43f5e" },
              { t: "Security Embedded Everywhere", d: "From managed IT to web development and cloud, each engagement includes a security perspective, not just functionality.", I: ShieldCheck, hue: "#10b981" },
              { t: "Measurable Outcomes", d: "Uptime, response times, ticket volumes, deployment frequency, and incident metrics are tracked and shared with clients so value is visible, not assumed.", I: LineChart, hue: "#3b82f6" },
            ].map(({ t, d, I, hue }, i) => (
              <article key={t} data-reveal="zoom" className="hb-tile" style={{ "--hue": hue, "--i": i } as CSSProperties}>
                <span className="hb-orb"><I aria-hidden="true" className="h-6 w-6" /></span>
                <h3 className="mt-8 text-xl font-bold text-white">{t}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery & UK Operations */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Global Delivery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Global Presence, <span className="text-gradient-primary">Local Accountability</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Dastute operates with distributed teams but local accountability. For each client, a primary account manager and vCIO are assigned and remain consistent throughout the engagement. This avoids the common problem of constantly changing contacts and ensures continuity of context.
                </p>
                <p>
                  Regional presence in India, Singapore, and the UK enables coverage across time zones and access to a broad talent pool while still providing local contact points where required.
                </p>
              </div>
            </div>

            <div data-reveal="right" className="ab-uk">
              <h3 className="text-2xl font-bold text-white mb-4">Our UK Market Commitment</h3>
              <div className="space-y-4 text-sm leading-relaxed text-slate-400">
                <p>
                  Dastute Technologies Limited is incorporated in England and Wales under Company Number 17019407 and operates from the United Kingdom providing technology consulting, managed IT services, cybersecurity, and digital transformation to British enterprises, mid-market organisations, and public sector bodies.
                </p>
                <p>
                  Our UK practice operates in full compliance with UK GDPR and the Data Protection Act 2018. We align strictly with the National Cyber Security Centre (NCSC) Cyber Assessment Framework (CAF). We are committed to supporting the UK Government's ambition to make Britain a global leader in cybersecurity and digital infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Standards */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-600 block mb-4">
              / Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Tech Stack & Security Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              These capabilities allow Dastute to design and deliver end-to-end solutions - from core infrastructure and security controls to user-facing applications and integrations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Core Technology Capabilities</h3>
              <ul className="space-y-8">
                {[
                  { h: "Cloud & Infrastructure", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Helm", "CI/CD tooling"], hue: "#06b6d4" },
                  { h: "Applications & Data", items: ["Node.js", "Python", ".NET", "React", "Next.js", "Vue.js", "Swift", "Kotlin", "React Native", "Flutter", "Relational & non-relational databases"], hue: "#8b5cf6" },
                  { h: "Networking & Operations", items: ["Cisco", "Meraki", "Monitoring & observability", "Backup & disaster recovery"], hue: "#f59e0b" },
                ].map((g) => (
                  <li key={g.h} data-reveal style={{ "--hue": g.hue } as CSSProperties}>
                    <h4 className="font-bold text-slate-900 mb-3">{g.h}</h4>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((t, k) => (
                        <span key={t} className="ab-chip" style={{ "--d": `${k * 0.04}s` } as CSSProperties}>{t}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="right" className="ab-secure">
              <h3 className="text-xl font-bold text-white mb-6">Company-Wide Security Approach</h3>
              <ul className="space-y-5 text-sm text-slate-300">
                <li className="flex gap-3">
                  <Icon name="fa-check" className="text-emerald-500 mt-1" />
                  <div>
                    <span className="font-bold text-white">Security by Design:</span> Security requirements and threat modelling are built into architecture and design discussions for every project, not bolted on later.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="fa-check" className="text-emerald-500 mt-1" />
                  <div>
                    <span className="font-bold text-white">Secure SDLC:</span> Coding standards, peer reviews, SAST/DAST tooling, and dependency scanning are integrated into CI/CD pipelines.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="fa-check" className="text-emerald-500 mt-1" />
                  <div>
                    <span className="font-bold text-white">Encryption Everywhere:</span> Strong encryption for data in transit (TLS) and at rest across databases, object storage, backups, and logs.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="fa-check" className="text-emerald-500 mt-1" />
                  <div>
                    <span className="font-bold text-white">Governance & Compliance:</span> Delivery practices aligned with ISO 27001, SOC 2, PCI-DSS, HIPAA, and GDPR expectations.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon name="fa-check" className="text-emerald-500 mt-1" />
                  <div>
                    <span className="font-bold text-white">Monitoring & Response:</span> Centralised logging, SIEM integration, and documented incident response procedures.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-gradient px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Around the clock
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">We Are Global</h2>
          </div>
          <OfficeCards
            offices={[
              { region: "India (HQ)", offices: ["Coimbatore", "Chennai", "Bangalore"], phone: "+91 9940941959", tz: "Asia/Kolkata", hue: "#8b5cf6" },
              { region: "Singapore", offices: ["Ubi, Singapore"], phone: "+65 8772 2877", tz: "Asia/Singapore", hue: "#10b981" },
              { region: "United Kingdom", offices: ["London"], phone: "+44 7423 021644", tz: "Europe/London", hue: "#3b82f6" },
            ]}
          />
        </div>
      </section>
    </SiteLayout>
  );
}
