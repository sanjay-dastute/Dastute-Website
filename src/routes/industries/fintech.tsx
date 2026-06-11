import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/industries/fintech")({
  head: () => ({
    meta: [
      { title: "IT Services for Fintech UK | Financial Software Solutions | Dastute" },
      {
        name: "description",
        content:
          "High-availability IT services for Fintech in the UK. We deliver secure, FCA/PCI-DSS compliant infrastructure and API-first financial software development.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "IT Services for Fintech UK | Financial Software Solutions | Dastute",
      },
      {
        property: "og:description",
        content:
          "High-availability IT services for Fintech in the UK. We deliver secure, FCA/PCI-DSS compliant infrastructure and API-first financial software development.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/industries/fintech",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-fintech.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Services for Fintech UK | Financial Software Solutions | Dastute",
      },
      {
        name: "twitter:description",
        content:
          "High-availability IT services for Fintech in the UK. We deliver secure, FCA/PCI-DSS compliant infrastructure and API-first financial software development.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-fintech.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/industries/fintech" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Fintech IT Solutions & Software Development",
            description: "High-availability IT services for Fintech in the UK. We deliver secure, FCA/PCI-DSS compliant infrastructure and API-first financial software development.",
            path: "/industries/fintech",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Fintech", path: "/industries/fintech" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/industries/fintech", [
            {
              question: "Do you build FCA compliant infrastructure?",
              answer: "Yes, we design and manage cloud infrastructure that strictly adheres to Financial Conduct Authority (FCA) operational resilience guidelines. This includes deploying multi-region disaster recovery, immutable audit logs, and highly restrictive access controls to satisfy regulatory audits and ensure continuous financial operations.",
            },
            {
              question: "Are your fintech software solutions PCI-DSS compliant?",
              answer: "Absolutely. Our custom fintech software development lifecycle strictly follows PCI-DSS requirements. We integrate secure payment gateways using tokenization, ensure data is fully encrypted both at rest and in transit, and regularly conduct vulnerability scans and penetration testing prior to deployment.",
            },
            {
              question: "How do you ensure zero downtime for financial applications?",
              answer: "We ensure zero downtime by utilizing active-active high-availability cloud architectures across AWS or Azure. We deploy load balancers, auto-scaling clusters, and implement rigorous CI/CD pipelines to ensure financial applications handle massive transaction volumes and software updates without ever taking the system offline.",
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
            / Fintech IT Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            High-Performance IT Services for UK Fintech
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
            Secure, highly available infrastructure and API-first software engineering. We help financial technology companies scale rapidly while maintaining strict FCA and PCI-DSS compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Consult an Architect
            </Link>
            <a
              href="#capabilities"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border text-center md:text-left">
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">99.999%</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Uptime Target</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">PCI-DSS</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Compliant Ops</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">SOC 2</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Readiness</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">FCA</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Resilience Aligned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Engineering for Financial Scale
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Downtime is not an option when processing transactions. We build cloud-native infrastructure and develop bespoke financial software designed for extreme resilience, ultra-low latency, and ironclad security.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Transaction Systems",
                desc: "We engineer event-driven microservices that process thousands of transactions per second with guaranteed exactly-once delivery semantics.",
                color: "accent-top-blue",
              },
              {
                title: "Regulatory Compliance IT",
                desc: "Continuous compliance monitoring for FCA, PSD2, and PCI-DSS. We automate compliance checks so your engineering teams can move fast without breaking rules.",
                color: "accent-top-emerald",
              },
              {
                title: "High-Availability Infrastructure",
                desc: "Multi-region cloud architecture (AWS/Azure) designed for seamless failover, ensuring your trading platforms or payment gateways stay online 24/7.",
                color: "accent-top-violet",
              },
              {
                title: "API-First Open Banking",
                desc: "We build secure, robust REST and GraphQL APIs that seamlessly integrate with Open Banking standards, third-party payment processors, and legacy banking cores.",
                color: "accent-top-rose",
              },
              {
                title: "SOC 2 & ISO 27001 Readiness",
                desc: "End-to-end security hardening. We implement the technical controls, access management, and logging required to pass stringent SOC 2 Type II audits.",
                color: "accent-top-amber",
              },
              {
                title: "Blockchain & DeFi Integration",
                desc: "Expertise in smart contracts, cryptography, and Web3 infrastructure, enabling you to launch secure decentralized finance (DeFi) or tokenized asset platforms.",
                color: "accent-top-cyan",
              }
            ].map((feature, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${feature.color} flex flex-col`}
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Secure Development
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Security built into the codebase, not bolted on afterwards.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In fintech, a single vulnerability can result in catastrophic financial loss. Our DevSecOps methodology ensures that security analysis happens at every stage of the software development lifecycle.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-code text-blue-500 mt-1"></i> <div><strong>Automated Code Scanning:</strong> SAST and DAST integrations run continuously to catch vulnerabilities before they reach production.</div></li>
                <li className="flex gap-3"><i className="fas fa-lock text-blue-500 mt-1"></i> <div><strong>Cryptography & Key Management:</strong> Hardware Security Modules (HSM) and strict KMS policies to protect sensitive PII and financial data.</div></li>
                <li className="flex gap-3"><i className="fas fa-bug text-blue-500 mt-1"></i> <div><strong>Continuous Penetration Testing:</strong> Regular Red Team exercises to stress-test your application's defenses against real-world attack vectors.</div></li>
              </ul>
            </div>
            <div className="glass-card-strong rounded-3xl p-8 accent-top-emerald relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-emerald-500/10">
                <i className="fas fa-chart-line text-9xl"></i>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 relative z-10">
                Supporting the Fintech Ecosystem
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                From pre-seed disruptors building their MVP to established scale-ups requiring global infrastructure, we adapt our engineering output to your growth stage.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-emerald-600">Scale-Ups</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Enterprise Architecture</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">Startups</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Rapid MVP Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Fintech Engineering FAQs</h2>
            <p className="text-muted-foreground">Common questions from technical founders and CTOs.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you build FCA compliant infrastructure?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we design and manage cloud infrastructure that strictly adheres to Financial Conduct Authority (FCA) operational resilience guidelines. This includes deploying multi-region disaster recovery, immutable audit logs, and highly restrictive access controls to satisfy regulatory audits and ensure continuous financial operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Are your fintech software solutions PCI-DSS compliant?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Absolutely. Our custom fintech software development lifecycle strictly follows PCI-DSS requirements. We integrate secure payment gateways using tokenization, ensure data is fully encrypted both at rest and in transit, and regularly conduct vulnerability scans and penetration testing prior to deployment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How do you ensure zero downtime for financial applications?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We ensure zero downtime by utilizing active-active high-availability cloud architectures across AWS or Azure. We deploy load balancers, auto-scaling clusters, and implement rigorous CI/CD pipelines to ensure financial applications handle massive transaction volumes and software updates without ever taking the system offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Build Resilient Financial Technology
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Don't let legacy infrastructure or security vulnerabilities hold back your product. Partner with experts in fintech engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Speak to an Engineer
            </Link>
            <Link
              to="/technology"
              className="btn-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              View Tech Stack
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
