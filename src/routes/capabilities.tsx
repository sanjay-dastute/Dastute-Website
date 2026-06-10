import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Dastute Technologies" },
      {
        name: "description",
        content:
          "Explore Dastute Technologies' specialist capabilities across Managed IT, Cloud, Cyber Security, Software Engineering, Blockchain, Brand and Marketing.",
      },
      { property: "og:title", content: "Capabilities — Dastute Technologies" },
      {
        property: "og:description",
        content:
          "Global IT consultancy capabilities with senior-led delivery in UK, India and Singapore.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capabilities" },
          ]),
        ),
      },
    ],
  }),
  component: CapabilitiesPage,
});

const STACK = [
  {
    code: "T.01",
    title: "Managed IT Services",
    body: "24/7 endpoint, server and cloud administration, patch management, proactive monitoring and ticket resolution.",
  },
  {
    code: "T.02",
    title: "IT Consulting",
    body: "vCIO, technology roadmaps, vendor audits, compliance consulting and IT governance frameworks.",
  },
  {
    code: "T.03",
    title: "Cyber Security",
    body: "SIEM/SOC, vulnerability scanning, threat assessments, Cyber Essentials and ISO 27001 readiness.",
  },
  {
    code: "T.04",
    title: "Cloud Systems",
    body: "Architecting, deploying and monitoring AWS, Azure and GCP clouds with integrated FinOps cost controls.",
  },
  {
    code: "T.05",
    title: "Software & Mobile",
    body: "Full-stack web apps in React/Next.js/Node, native iOS & Android apps, and custom API integrations.",
  },
  {
    code: "T.06",
    title: "Blockchain & DeFi",
    body: "Solidity/Rust smart contracts, dApps, Web3 integration, tokenomics models and audit readiness.",
  },
  {
    code: "M.01",
    title: "Digital Marketing",
    body: "Campaign management, SEO organic rank acquisition, PPC Google/Meta ads, and automated email funnels.",
  },
  {
    code: "M.02",
    title: "Brand & Film",
    body: "Brand positioning strategy, visual identity design guides, 3D product rendering and showcase films.",
  },
];

function CapabilitiesPage() {
  return (
    <SiteLayout>
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
          / Capabilities
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl text-white">
          Specialist disciplines.
          <br />
          Integrated delivery.
        </h1>
        <p className="mt-8 max-w-xl text-slate-300 text-lg">
          High-performance technology capabilities and result-driven marketing
          tools designed to operate in unified alignment.
        </p>
      
        </div>
</section>

      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:divide-x divide-border">
          {STACK.map((s) => (
            <div key={s.code} className="p-10 md:p-12 border-b border-border">
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-xs text-primary">{s.code}</span>
                <div className="h-px flex-1 bg-border ml-4" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                {s.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
