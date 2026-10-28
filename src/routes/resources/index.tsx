import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

const GUIDE_GROUPS = [
  {
    title: "Cyber Security",
    guides: [
      { to: "/resources/cyber-essentials-guide", title: "Cyber Essentials Certification Guide", desc: "What the UK's government-backed scheme requires and how to pass first time." },
      { to: "/resources/iso-27001-checklist", title: "ISO 27001 Certification Checklist", desc: "ISMS implementation, Annex A controls and the Stage 1 and 2 audits." },
      { to: "/resources/penetration-testing-explained", title: "Penetration Testing Explained", desc: "Types of pen test, what testers do and how to act on the findings." },
      { to: "/resources/zero-trust-architecture", title: "Zero Trust Architecture", desc: "Why perimeter security fails and how to adopt Zero Trust in phases." },
      { to: "/resources/soc-explained", title: "What Is a SOC?", desc: "How a Security Operations Centre detects and stops attacks around the clock." },
      { to: "/resources/ransomware-recovery", title: "Ransomware Recovery", desc: "The first 24 hours, immutable backups and your UK GDPR obligations." },
    ],
  },
  {
    title: "IT Strategy & Operations",
    guides: [
      { to: "/resources/in-house-it-vs-managed-services", title: "In-house IT vs Managed Services", desc: "Compare cost, coverage and expertise for UK businesses." },
      { to: "/resources/what-is-vcio", title: "What Is a vCIO?", desc: "How a virtual CIO gives you IT leadership without a full-time hire." },
      { to: "/resources/it-staffing-vs-in-house", title: "IT Staff Augmentation vs In-house Hiring", desc: "Scale your engineering team faster and with less risk." },
      { to: "/resources/bcdr-guide", title: "Business Continuity & Disaster Recovery", desc: "RTO, RPO and a six-step plan to keep your business running." },
    ],
  },
  {
    title: "Cloud, ERP & Emerging Technology",
    guides: [
      { to: "/resources/cloud-migration-cost-guide", title: "Cloud Migration Cost Guide", desc: "What drives cloud migration costs on AWS and Azure." },
      { to: "/resources/erp-vs-sap", title: "ERP vs SAP", desc: "The difference between ERP as a category and SAP as a product." },
      { to: "/resources/ai-agents-enterprise-guide", title: "AI Agents in Business", desc: "How AI agents automate multi-step work across your systems." },
      { to: "/resources/generative-ai-enterprise", title: "Generative AI in the Enterprise", desc: "Practical use cases and how to adopt AI safely." },
      { to: "/resources/blockchain-supply-chain", title: "Blockchain in Supply Chains", desc: "Traceability, counterfeit prevention and automated settlement." },
    ],
  },
] as const;

export const Route = createFileRoute("/resources/")({
  head: () => ({
    ...buildStandardPageHead({
      title: "IT Guides & Resources for UK Businesses | Dastute",
      description:
        "Free expert guides on cyber security, Cyber Essentials, ISO 27001, managed IT, cloud migration, ERP and AI, written by Dastute Technologies.",
      path: "/resources",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildCollectionPageJsonLd({
            path: "/resources",
            name: "IT Guides & Resources",
            description:
              "Expert guides on cyber security, compliance, managed IT, cloud, ERP and AI for UK businesses.",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ),
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SiteLayout>
      <section className="bg-slate-900 text-white pt-32 pb-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / RESOURCES
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            IT Guides &amp; Resources
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical, plain-English guides to help UK businesses make better decisions about security, compliance, IT operations and new technology.
          </p>
        </div>
      </section>

      {GUIDE_GROUPS.map((group, i) => (
        <section key={group.title} className={i % 2 === 0 ? "bg-white py-16" : "section-gradient py-16"}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8">{group.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.guides.map((guide) => (
                <Link
                  key={guide.to}
                  to={guide.to}
                  className="group block bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">Looking up a term?</h2>
          <p className="text-slate-600 mb-8">Our A–Z IT glossary explains the technology terms used across these guides.</p>
          <Link
            to="/resources/glossary"
            className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Open the IT Glossary
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
