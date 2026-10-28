import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Magnetic, SplitWords } from "@/components/motion";
import { HexExplorer, TechHoneycomb } from "@/components/TechSections";
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
function TechnologyPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
              / Technology Practice
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1] text-balance max-w-4xl text-white">
              <SplitWords text="Managed IT Services, security" />
              <br />
              <SplitWords className="text-gradient-primary" text="and software - simplified." delay={0.3} />
            </h1>
            <p className="mt-8 max-w-xl text-slate-300 text-lg">
              Ten core disciplines covering the entire technology lifecycle, from
              local office helpdesk to audited on-chain smart contracts.
            </p>
            <div className="mt-10 font-mono text-[10px] uppercase tracking-widest text-slate-400 flex flex-wrap gap-x-3 gap-y-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">10 Disciplines</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AWS · GCP · Azure</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SIEM / SOC</span>
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-xl">
            <TechHoneycomb />
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-gradient border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <HexExplorer services={SERVICES} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="future-section px-6 py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Launch together</p>
            <h3 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              Need digital <span className="text-gradient-primary">marketing too?</span>
            </h3>
            <p className="mt-4 text-slate-300 max-w-md">
              Our marketing practice handles brand strategy, visual identity,
              paid search, SEO and advertising to align your launch.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            <Magnetic>
              <Link
                to="/marketing"
                className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Marketing Practice <span aria-hidden>↗</span>
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
