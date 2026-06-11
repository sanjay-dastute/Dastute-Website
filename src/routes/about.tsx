import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, ORGANIZATION_SCHEMA, buildLocalBusinessJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Dastute Technologies | Trusted Technology Partner",
      },
      {
        name: "description",
        content:
          "Dastute Technologies is a global IT services company serving businesses across India, Singapore, and the UK. We deliver practical IT, software, and cybersecurity services.",
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
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl text-white">
            Trusted Technology Partner for Business Growth.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            We help organizations simplify operations, improve resilience, and scale with confidence through practical IT and software services.
          </p>
        </div>
      </section>

      {/* Who We Are & Mission */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Innovation Built On Reliability
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Dastute Technologies Limited is a global IT services company serving businesses across India, Singapore, and the UK. Our teams combine engineering depth with business understanding to deliver technology that works in real-world conditions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card-strong p-8 rounded-3xl border border-slate-200 accent-top-blue">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enable organizations to operate smarter with secure, scalable, and cost-effective digital solutions.
                </p>
              </div>
              <div className="glass-card-strong p-8 rounded-3xl border border-slate-200 accent-top-emerald">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Be the trusted long-term technology partner for businesses navigating continuous change.
                </p>
              </div>
              <div className="glass-card-strong p-8 rounded-3xl border border-slate-200 accent-top-indigo">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Listen first, design with purpose, and execute with accountability from discovery through support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600 block mb-4">
            / Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
            Our Story in Detail
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
            <p>
              Dastute Technologies Limited started as a small group of engineers supporting local businesses that needed reliable IT without enterprise price tags. As clients grew, so did their requirements: higher uptime expectations, stronger security controls, and global operations. Rather than staying as a small "IT shop," Dastute invested in building repeatable processes, documented playbooks, and a training pipeline to support customers at scale.
            </p>
            <p>
              Today, the company supports organisations across India, Singapore, and the UK, but still operates with the responsiveness and ownership mindset of a local partner. Every new hire is trained not only on tools and platforms, but also on communication, documentation standards, and client empathy.
            </p>
          </div>
        </div>
      </section>

      {/* Value Delivery */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-600 block mb-4">
              / Value Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              How We Deliver Value
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-strong p-8 rounded-3xl border border-slate-200">
              <i className="fas fa-bullseye text-3xl text-rose-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business-First Thinking</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Technology decisions are evaluated against business impact: revenue, risk, cost, and time-to-market.
              </p>
            </div>
            <div className="glass-card-strong p-8 rounded-3xl border border-slate-200">
              <i className="fas fa-shield-check text-3xl text-emerald-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security Embedded Everywhere</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From managed IT to web development and cloud, each engagement includes a security perspective, not just functionality.
              </p>
            </div>
            <div className="glass-card-strong p-8 rounded-3xl border border-slate-200">
              <i className="fas fa-chart-line text-3xl text-blue-500 mb-6"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Measurable Outcomes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Uptime, response times, ticket volumes, deployment frequency, and incident metrics are tracked and shared with clients so value is visible, not assumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery & UK Operations */}
      <section className="bg-slate-900 text-slate-300 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4">
                / Global Delivery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Global Presence, Local Accountability
              </h2>
              <div className="space-y-6 leading-relaxed">
                <p>
                  Dastute operates with distributed teams but local accountability. For each client, a primary account manager and vCIO are assigned and remain consistent throughout the engagement. This avoids the common problem of constantly changing contacts and ensures continuity of context.
                </p>
                <p>
                  Regional presence in India, Singapore, and the UK enables coverage across time zones and access to a broad talent pool while still providing local contact points where required.
                </p>
              </div>
            </div>

            <div className="glass-card-dark p-8 rounded-3xl border-t-2 border-t-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Our UK Market Commitment</h3>
              <div className="space-y-4 text-sm leading-relaxed text-slate-400">
                <p>
                  Dastute Technologies Limited is incorporated in England and Wales under Company Number 17019407 and operates from the United Kingdom providing technology consulting, managed IT services, cybersecurity, and digital transformation to British enterprises, mid-market organisations, and public sector bodies.
                </p>
                <p>
                  Our UK practice operates in full compliance with UK GDPR and the Data Protection Act 2018. We hold verified enterprise certifications including <a href="https://iasme.co.uk/cyber-essentials/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">IASME Cyber Essentials Plus (Cert ID: #CEPLUS-DT)</a> and <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ISO/IEC 27001:2022 (Cert ID: #ISO27001-DT)</a>, and align strictly with the National Cyber Security Centre (NCSC) Cyber Assessment Framework (CAF). We are committed to supporting the UK Government's ambition to make Britain a global leader in cybersecurity and digital infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Standards */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-600 block mb-4">
              / Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Tech Stack & Security Standards
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              These capabilities allow Dastute to design and deliver end-to-end solutions - from core infrastructure and security controls to user-facing applications and integrations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">Core Technology Capabilities</h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-slate-900 mb-2">Cloud & Infrastructure</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, Helm, CI/CD tooling.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-900 mb-2">Applications & Data</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Node.js, Python, .NET, modern web frameworks (React, Next.js, Vue.js), mobile stacks (Swift, Kotlin, React Native, Flutter), and relational/non-relational databases.</p>
                </li>
                <li>
                  <h4 className="font-bold text-slate-900 mb-2">Networking & Operations</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Enterprise networking (Cisco, Meraki), monitoring and observability, backup and disaster recovery platforms.</p>
                </li>
              </ul>
            </div>

            <div className="glass-card-strong p-8 rounded-3xl border border-slate-200 bg-white">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-3">Company-Wide Security Approach</h3>
              <ul className="space-y-5 text-sm text-slate-600">
                <li className="flex gap-3">
                  <i className="fas fa-check text-emerald-500 mt-1"></i>
                  <div>
                    <span className="font-bold text-slate-900">Security by Design:</span> Security requirements and threat modelling are built into architecture and design discussions for every project, not bolted on later.
                  </div>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check text-emerald-500 mt-1"></i>
                  <div>
                    <span className="font-bold text-slate-900">Secure SDLC:</span> Coding standards, peer reviews, SAST/DAST tooling, and dependency scanning are integrated into CI/CD pipelines.
                  </div>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check text-emerald-500 mt-1"></i>
                  <div>
                    <span className="font-bold text-slate-900">Encryption Everywhere:</span> Strong encryption for data in transit (TLS) and at rest across databases, object storage, backups, and logs.
                  </div>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check text-emerald-500 mt-1"></i>
                  <div>
                    <span className="font-bold text-slate-900">Governance & Compliance:</span> Delivery practices aligned with ISO 27001, SOC 2, PCI-DSS, HIPAA, and GDPR expectations.
                  </div>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check text-emerald-500 mt-1"></i>
                  <div>
                    <span className="font-bold text-slate-900">Monitoring & Response:</span> Centralised logging, SIEM integration, and documented incident response procedures.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Map/List */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              We Are Global
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                region: "India (HQ)",
                offices: ["Coimbatore", "Chennai", "Bangalore"],
                phone: "+91 9940941959",
              },
              {
                region: "Singapore",
                offices: ["Ubi, Singapore"],
                phone: "+65 8772 2877",
              },
              {
                region: "United Kingdom",
                offices: ["London"],
                phone: "+44 7423 021644",
              },
            ].map((loc) => (
              <div
                key={loc.region}
                className="bg-background p-8 hover:bg-slate-50 transition-colors duration-300 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary block mb-6">
                  {loc.region}
                </span>
                <ul className="space-y-2 text-sm mb-6">
                  {loc.offices.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="font-mono text-[10px] text-primary mt-1">
                        →
                      </span>
                      <span className="text-slate-600 font-medium">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
                {loc.phone && (
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="text-sm text-slate-500 font-mono hover:text-primary transition-colors"
                  >
                    {loc.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
