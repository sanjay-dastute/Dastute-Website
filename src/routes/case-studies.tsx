import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Case Studies | IT Consulting & Software Development Success Stories",
      description: "Read how Dastute has helped UK enterprises across Healthcare, Fintech, and Manufacturing scale securely with advanced cloud, AI, and cybersecurity solutions.",
      path: "/case-studies",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const cases = [
    {
      industry: "Enterprise Cloud",
      title: "Consolidating Infrastructure to Achieve $750k/Month Savings",
      challenge: "A globally distributed enterprise had accumulated massive technical debt and uncontrolled cloud sprawl across AWS, Azure, and GCP following multiple acquisitions, resulting in unpredictable billing spikes and a lack of unified security governance.",
      solution: "Dastute performed a comprehensive cloud audit and executed a massive consolidation strategy. We migrated disparate workloads into a unified, rightsized AWS environment, implementing automated FinOps policies and reserving instances for predictable workloads.",
      results: [
        "Achieved a verified $750,000 per month reduction in cloud operating expenses.",
        "Consolidated 400+ unmanaged cloud accounts into a secure, single-pane-of-glass AWS Organization.",
        "Implemented strict FinOps guardrails to prevent future cloud sprawl."
      ]
    },
    {
      industry: "Healthcare",
      title: "Cloud Migration & Data Sovereignty for a Private NHS Contractor",
      challenge: "A leading private healthcare provider needed to migrate 15 years of legacy on-premise patient data to the cloud, while maintaining absolute compliance with NHS Data Security and Protection Toolkit (DSPT) standards.",
      solution: "Dastute engineered a secure, HIPAA/DSPT-compliant Azure environment utilizing advanced encryption-at-rest and strict Role-Based Access Control (RBAC). We executed a zero-downtime 'lift and reshape' migration over a single weekend.",
      results: [
        "100% compliance with NHS data sovereignty requirements.",
        "40% reduction in monthly infrastructure operating costs via Azure Hybrid Benefit.",
        "Zero downtime experienced by medical staff during the migration window."
      ]
    },
    {
      industry: "Fintech",
      title: "Zero Trust Architecture for an FCA-Regulated Payment Gateway",
      challenge: "A rapidly scaling payment processor required a comprehensive cybersecurity overhaul to achieve SOC 2 Type II compliance and satisfy stringent FCA regulatory audits before launching their new B2B product.",
      solution: "We implemented a complete Zero Trust Architecture (ZTA) across their AWS environment. This included mandatory multi-factor authentication (MFA) via hardware keys, network micro-segmentation, and an automated Endpoint Detection and Response (EDR) rollout to 150+ employee laptops.",
      results: [
        "Achieved SOC 2 Type II certification with zero non-conformities.",
        "Passed FCA technical audit on the first attempt.",
        "Reduced Mean Time to Detect (MTTD) threats from hours to seconds."
      ]
    },
    {
      industry: "Manufacturing",
      title: "Automating Global Supply Chains with Hyperledger Fabric",
      challenge: "A multinational automotive parts manufacturer suffered from massive supply chain disputes, with reconciling invoices and tracking lost shipments across 5 different international distributors taking an average of 14 days.",
      solution: "Dastute developed a private, permissioned blockchain network using Hyperledger Fabric. We integrated IoT sensors into shipping containers that automatically wrote location and temperature data to the immutable ledger, triggering smart contracts for instant payment settlements.",
      results: [
        "Reduced invoice reconciliation time from 14 days to real-time.",
        "Eliminated 98% of fraudulent or disputed shipping claims.",
        "Provided total, auditable track-and-trace visibility to the end consumer."
      ]
    },
    {
      industry: "Retail & E-commerce",
      title: "Scaling Engineering Capacity with IT Staff Augmentation",
      challenge: "A major UK e-commerce brand needed to completely rebuild their legacy monolithic frontend into a modern React application before the Q4 holiday rush, but could not source enough senior talent locally.",
      solution: "Dastute instantly augmented their internal engineering team with 4 Senior React Developers and 1 Cloud QA Engineer. The augmented team integrated seamlessly into the client's Agile sprints within 48 hours.",
      results: [
        "Successfully launched the new platform 3 weeks ahead of the Black Friday deadline.",
        "Increased mobile conversion rates by 22% due to improved page load speeds.",
        "Client seamlessly scaled down the augmented team post-launch without redundancy costs."
      ]
    }
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Proven Results
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            Client Case Studies
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Discover how we have partnered with ambitious UK enterprises to overcome complex technical challenges, secure their infrastructure, and accelerate their growth.
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-16">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-full mb-6">
                  {c.industry}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  {c.title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">The Challenge</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">Our Solution</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-10 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Outcomes:</h3>
                  <ul className="space-y-3">
                    {c.results.map((r, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i>
                        <span className="text-slate-700 font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to write your own success story?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Our engineering teams are ready to tackle your most complex technology challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
