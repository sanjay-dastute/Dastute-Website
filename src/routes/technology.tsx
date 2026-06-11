import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildServiceListJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

const technologyPageHead = buildStandardPageHead({
  title: "IT Services & Managed Technology Solutions UK | Dastute",
  description:
    "Managed IT Services, Cyber Security, Cloud, Web & App Development, Blockchain, ERP, Network Connectivity and IT Consulting from Dastute Technologies.",
  ogDescription:
    "Core technology consulting and engineering capabilities serving UK, India and Singapore.",
  path: "/technology",
});

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: technologyPageHead.meta,
    links: technologyPageHead.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceListJsonLd("/technology", [
            {
              name: "Managed IT Services",
              description:
                "End-to-end management of business IT infrastructure and support.",
            },
            {
              name: "Cyber Security",
              description:
                "Security auditing, SOC/SIEM operations and response planning.",
            },
            {
              name: "Cloud Services",
              description:
                "Cloud migration, optimization, and managed operations.",
            },
            {
              name: "Web & App Development",
              description:
                "Custom engineering for web, app, and enterprise systems.",
            },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
          ]),
        ),
      },
    ],
  }),
  component: TechnologyPage,
});



const SERVICES = [
  {
    code: "T.01",
    title: "Managed IT Services",
    ctaLabel: "Explore Service",
    ctaHref: "/services/managed-it",
    summary:
      "End-to-end management of your IT estate under a predictable monthly fee.",
    detail:
      "Proactive monitoring, patch management, asset lifecycle tracking and 24/7 UK-based helpdesk. We manage servers, endpoints, cloud, networks and users to keep your business running smoothly.",
    deliverables: [
      "24/7 UK-based helpdesk",
      "Proactive monitoring & response",
      "Patch & asset management",
      "SLA & KPI reporting",
    ],
  },
  {
    code: "T.02",
    title: "IT Consulting & Advisory",
    ctaLabel: "Explore Service",
    ctaHref: "/services/consulting",
    summary: "Strategic technology planning to align investments with growth.",
    detail:
      "Digital transformation roadmap, vendor assessment & selection, cybersecurity advisory and virtual CIO (vCIO) support. We provide independent strategy focused on business outcomes.",
    deliverables: [
      "vCIO strategic reviews",
      "Technology roadmap & planning",
      "Vendor assessment & selection",
      "IT governance & compliance guidance",
    ],
  },
  {
    code: "T.03",
    title: "Cyber Security",
    ctaLabel: "Explore Service",
    ctaHref: "/services/cyber-security",
    summary:
      "Identify vulnerabilities and safeguard your business against modern threats.",
    detail:
      "Security information & event management (SIEM), SOC, penetration testing, phishing simulations, incident response planning and Cyber Essentials / ISO 27001 readiness audits.",
    deliverables: [
      "Penetration & vulnerability testing",
      "Managed SOC & SIEM",
      "Phishing & awareness training",
      "ISO 27001 readiness & audits",
    ],
  },
  {
    code: "T.04",
    title: "Cloud Infrastructure",
    ctaLabel: "Explore Service",
    ctaHref: "/services/cloud",
    summary: "Scalable, secure and performant cloud architecture design.",
    detail:
      "AWS, Google Cloud and Azure architectures. Cloud migrations, serverless implementations, containerization (Docker/Kubernetes), infrastructure as code (Terraform) and cost-optimization.",
    deliverables: [
      "Cloud migration & strategy",
      "Architecture & containerisation",
      "FinOps & cost optimisation",
      "Infrastructure as Code (IaC)",
    ],
  },
  {
    code: "T.05",
    title: "Web & App Development",
    ctaLabel: "Explore Service",
    ctaHref: "/services/web-development",
    summary:
      "Impactful online products engineered for performance, security and speed.",
    detail:
      "Full-stack web apps, e-commerce portals, responsive user experiences and progressive web apps (PWA). Developed using React, Next.js, Node.js and .NET.",
    deliverables: [
      "UX/UI & high-fidelity prototypes",
      "Front-end & back-end engineering",
      "E-commerce & portal builds",
      "SEO-ready code architecture",
    ],
  },
  {
    code: "T.06",
    title: "Mobile Development",
    ctaLabel: "Explore Service",
    ctaHref: "/services/mobile",
    summary:
      "Custom mobile applications for native iOS, Android and hybrid platforms.",
    detail:
      "From concept to app store release. Building clean, offline-first mobile apps leveraging React Native, Swift and Kotlin, featuring secure biometrics and notifications.",
    deliverables: [
      "Native iOS & Android builds",
      "Hybrid React Native apps",
      "App Store & Play Store publishing",
      "Secure API integrations",
    ],
  },
  {
    code: "T.07",
    title: "Blockchain & Web3",
    ctaLabel: "Explore Service",
    ctaHref: "/services/blockchain",
    summary: "Smart contract development and on-chain protocol architecture.",
    detail:
      "Solidity and Rust development. Implementing DeFi protocols, tokenisation models, NFT smart contracts and private-chain ledger systems with institutional-grade test coverage.",
    deliverables: [
      "Smart contract architecture",
      "DeFi protocol engineering",
      "Audit preparation & scoping",
      "dApp front-end development",
    ],
  },
  {
    code: "T.08",
    title: "ERP Solutions",
    ctaLabel: "Explore Service",
    ctaHref: "/services/erp",
    summary:
      "Streamlining core business operations with enterprise ERP systems.",
    detail:
      "SAP, Microsoft Dynamics and Oracle ERP assessment, customization, implementation and data migration. Streamlining finance, HR, manufacturing and supply chain operations.",
    deliverables: [
      "ERP platform evaluation",
      "Custom workflows & plugins",
      "Legacy data migration",
      "Employee training & support",
    ],
  },
  {
    code: "T.09",
    title: "Network Connectivity",
    ctaLabel: "Explore Service",
    ctaHref: "/services/network",
    summary: "Reliable, high-bandwidth corporate connectivity and networking.",
    detail:
      "Enterprise SD-WAN, MPLS networking, LAN/WAN architectures, corporate wireless networks and 24/7 proactive network monitoring and SLA reporting.",
    deliverables: [
      "Network design & implementation",
      "SD-WAN deployment",
      "Wireless site surveys",
      "24/7 network monitoring",
    ],
  },
  {
    code: "T.10",
    title: "Custom Software Development",
    ctaLabel: "Explore Service",
    ctaHref: "/services/custom-software",
    summary:
      "Tailor-made software solutions designed for your specific operating model.",
    detail:
      "From custom CRMs and Customer Portals to Transportation Management Systems. We build secure, modular software that bridges gaps in your existing application stack.",
    deliverables: [
      "Bespoke application design",
      "API & data integrations",
      "User testing & documentation",
      "Full source code handover",
    ],
  },
];
{/* Industries */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-4 sm:gap-6 mb-12 sm:mb-16">
          <h2 className="text-[8px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Industry Focus
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            "Manufacturing",
            "Transportation & Logistics",
            "Healthcare",
            "Banks & Insurance",
            "Consulting Providers",
            "Non Profit",
            "Fintech",
            "Dating Apps",
          ].map((industry) => (
            <div
              key={industry}
              className="bg-background p-3 sm:p-6 hover:bg-foreground hover:text-background transition-colors duration-300 group"
            >
              <span className="text-[12px] sm:text-sm font-bold">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>

      
function TechnologyPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Technology Practice
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl text-white">
            Managed IT Services, security
            <br />
            <span className="text-gradient-primary">and software — simplified.</span>
          </h1>
          <p className="mt-8 max-w-xl text-slate-300 text-lg">
            Ten core disciplines covering the entire technology lifecycle, from
            local office helpdesk to audited on-chain smart contracts.
          </p>
          <div className="mt-10 font-mono text-[10px] uppercase tracking-widest text-slate-400 flex flex-wrap gap-x-6 gap-y-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">10 Disciplines</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AWS · GCP · Azure</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SIEM / SOC</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gradient border-y border-border">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s, i) => {
              const accents = [
                "accent-top-blue",
                "accent-top-violet",
                "accent-top-emerald",
                "accent-top-cyan",
                "accent-top-rose",
              ];
              const badgeColors = [
                "bg-blue-500",
                "bg-violet-500",
                "bg-emerald-500",
                "bg-cyan-500",
                "bg-rose-500",
              ];
              const accentClass = accents[i % 5];
              const badgeClass = badgeColors[i % 5];

              return (
                <article
                  key={s.code}
                  className={`glass-card-strong rounded-3xl p-6 md:p-8 ${accentClass}`}
                >
                  <span
                    className={`inline-flex items-center justify-center font-mono text-xs ${badgeClass} text-white rounded-lg px-3 py-1 mb-4`}
                  >
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
                          <span className="font-mono text-[10px] text-emerald-500 mt-1.5">
                            →
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex justify-end">
                      <Link
                        // @ts-ignore - Valid dynamic route
                        to={s.ctaHref}
                        className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]"
                      >
                        Explore {s.title} <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Need digital marketing too?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              Our marketing practice handles brand strategy, visual identity,
              paid search, SEO and advertising to align your launch.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link
              to="/marketing"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Marketing Practice <span aria-hidden>↗</span>
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
