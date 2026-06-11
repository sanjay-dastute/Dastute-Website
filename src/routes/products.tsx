import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildStandardPageHead,
  buildSoftwareAppJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";

const MODULES = [
  {
    name: "Dastute ERP",
    eyebrow:
      "ERP Software for Finance, Procurement, Inventory, and Supply Chain Control",
    text: "Dastute ERP is designed for organizations that need tighter control over finance, procurement, inventory, and supply-chain execution. It reduces friction caused by manual approvals, disconnected purchasing records, inconsistent stock visibility, and delayed reporting.",
    benefits: [
      "Centralized financial and procurement workflows",
      "Better inventory accuracy and supply-chain visibility",
      "Improved traceability for regulated operations",
    ],
  },
  {
    name: "Dastute HRMS",
    eyebrow:
      "HRMS Software for Secure Workforce Management and Payroll Integrity",
    text: "Dastute HRMS enables organizations to manage workforce operations with stronger privacy, cleaner approval flows, and better payroll governance. It is built to solve fragmented employee records, access-control weaknesses, manual compliance handling, and inconsistent audit trails.",
    benefits: [
      "Centralized employee data with role-based access controls",
      "Payroll integrity and accountable approval workflows",
      "Better audit readiness for HR and compliance teams",
    ],
  },
  {
    name: "Dastute CRM",
    eyebrow:
      "CRM Software for Customer Lifecycle Management, Consent Control, and Data Protection",
    text: "Dastute CRM helps organizations build stronger customer relationships without compromising privacy, retention governance, or operational efficiency. It addresses inconsistent lead tracking, poor handoffs, weak consent management, and scattered customer records.",
    benefits: [
      "Unified customer records across sales and service functions",
      "Consent-aware workflows and stronger privacy management",
      "Better lifecycle visibility from lead to account growth",
    ],
  },
  {
    name: "Dastute WMS",
    eyebrow:
      "WMS Software for Warehouse Execution, Inventory Accuracy, and Fulfilment Orchestration",
    text: "Dastute WMS delivers precise warehouse control, reliable inventory movement, and scalable fulfilment operations. It improves stock accuracy, traceability, and visibility across multiple storage or fulfilment locations.",
    benefits: [
      "Multi-location inventory visibility and control",
      "Traceable stock movements with auditable records",
      "Better fulfilment coordination and warehouse execution",
    ],
  },
  {
    name: "Dastute AI Agents",
    eyebrow:
      "Private AI Agents for Enterprise Workflow Automation and Controlled Intelligence",
    text: "Dastute AI Agents bring private, controlled AI orchestration into enterprise workflows without exposing sensitive operational data to unmanaged environments. It supports safer automation for repetitive and information-heavy tasks.",
    benefits: [
      "Controlled AI usage within enterprise-defined boundaries",
      "Better governance for prompts, outputs, and access",
      "Safer adoption of AI for regulated workflows",
    ],
  },
  {
    name: "Dastute Hospitality",
    eyebrow:
      "Hospitality Software for PMS, POS, Guest Profiles, and Revenue Operations",
    text: "Dastute Hospitality is designed for hotels, hospitality groups, and service-led businesses that need unified control over guest operations, transactions, and service workflows. It improves service consistency and transaction oversight.",
    benefits: [
      "Connected PMS and POS operations",
      "Better guest profile visibility and service coordination",
      "Secure revenue workflows and transaction oversight",
    ],
  },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    ...buildStandardPageHead({
      title:
        "Secure, Scalable Enterprise Software Platform | Dastute",
      description:
        "Discover a secure, enterprise-grade platform with ERP, HRMS, CRM, WMS, AI Agents, and Hospitality modules built to outperform legacy systems, solve operational pain points, and adapt for future-ready growth.",
      path: "/products",
      }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/products#faq", FAQ_ITEMS)
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildCollectionPageJsonLd({
            path: "/products",
            name: "Enterprise Software Products — Dastute Technologies",
            description:
              "Security-first enterprise software modules including ERP, HRMS, CRM, WMS, AI Agents, and Hospitality.",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ),
      },
      ...MODULES.map((mod) => ({
        type: "application/ld+json",
        children: JSON.stringify(
          buildSoftwareAppJsonLd({
            name: mod.name,
            description: mod.text,
            applicationCategory: "BusinessApplication",
            path: `/products#${mod.name.toLowerCase().replace(/\s+/g, "-")}`,
          }),
        ),
      })),
    ],
  }),
  component: ProductsPage,
});



const INDUSTRY_SOLUTIONS = [
  {
    title: "Manufacturing",
    description:
      "Manufacturing organizations need systems that support supplier integrity, production visibility, and traceable execution across procurement, inventory, warehousing, and production-linked workflows.",
  },
  {
    title: "Healthcare",
    description:
      "Healthcare organizations require software that protects sensitive information while enabling efficient workflows, accountable access, and governance-ready data handling.",
  },
  {
    title: "Financial Services",
    description:
      "Financial services businesses need technology that balances speed, control, resilience, and policy enforcement across transaction-sensitive operations.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What makes the Dastute Enterprise Platform different from traditional business systems?",
    answer: "The Dastute Enterprise Platform is different because it unifies ERP, HRMS, CRM, WMS, and AI Agents into a single, natively secure ecosystem. Unlike traditional systems that rely on fragile third-party integrations, our unified architecture actively eliminates data silos, enforces consistent governance policies, and reduces total licensing costs.",
  },
  {
    question: "Is Dastute Enterprise Platform suitable for regulated industries?",
    answer: "Yes, the Dastute Enterprise Platform is highly suitable for regulated industries like healthcare and finance. It is engineered with security-first principles, providing immutable audit trails, granular privacy controls, and policy-driven role-based access. This ensures compliance with stringent regulations like GDPR, HIPAA, and PCI-DSS while maintaining efficient operational workflows.",
  },
  {
    question: "Can businesses start with one module and expand later?",
    answer: "Yes, businesses can start with a single module, such as the CRM or HRMS, and seamlessly expand later. Our modular architecture allows organizations to solve immediate operational bottlenecks today, while providing a frictionless path to activate additional enterprise workflows as their technical requirements and business models evolve.",
  },
  {
    question: "How does the Dastute platform address customer pain points?",
    answer: "The Dastute Enterprise Platform addresses customer pain points by eliminating disconnected systems, breaking down data silos, and replacing manual compliance checks with automated governance. By providing a single source of truth across all departments, it directly resolves issues related to poor interoperability, weak operational visibility, and rigid vendor lock-in.",
  },
  {
    question: "Is Dastute AI Agents safe for enterprise use?",
    answer: "Yes, Dastute AI Agents is completely safe for enterprise use because it operates within a private, controlled environment. Unlike public generative AI tools, our module enforces strict prompt governance, utilizes bounded data access, and ensures sensitive intellectual property never leaves your organization's managed infrastructure.",
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Products
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl text-white">
            Dastute Enterprise Platform Built for <span className="text-gradient-primary">Security, Scale, and Future Adaptability</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Modern organizations need more than disconnected tools, rigid
            workflows, and expensive legacy platforms. The Dastute Enterprise Platform
            brings ERP, HRMS, CRM, WMS, AI Agents, and Hospitality operations into
            one secure ecosystem designed to solve today's operational pain points
            while preparing teams for tomorrow's business models.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Request a Demo
            </Link>
            <a
              href="#modules"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Explore Modules
            </a>
          </div>
        </div>
      </section>

      <section className="section-gradient">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-8">
            One Platform. Multiple Mission-Critical Business Systems.
          </h2>
          <p className="max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Most enterprises struggle with fragmented software environments,
            duplicate data, reporting delays, poor system integration, rising
            licensing costs, and inflexible vendor roadmaps. The Dastute Enterprise Platform
            addresses those issues with tightly connected modules that support
            finance, workforce management, customer operations, warehousing,
            AI-led workflows, and hospitality execution from a single
            architecture.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Why Businesses Choose the Dastute Enterprise Platform Over Traditional Enterprise
          Systems
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Unified architecture that eliminates data silos across departments.",
            "Security-first design with strong data boundaries, access controls, and auditable workflows.",
            "Modular deployment that lets organizations start with one function and expand over time.",
            "Future-adaptable foundation built for workflow automation, AI integration, and policy-driven governance.",
            "Lower complexity compared with managing multiple disconnected enterprise vendors.",
            "Faster decision-making through centralized data visibility and cross-functional reporting.",
          ].map((item, i) => {
            const accents = ["accent-top-blue", "accent-top-violet", "accent-top-emerald", "accent-top-cyan", "accent-top-amber", "accent-top-rose"];
            return (
              <article
                key={item}
                className={`glass-card-strong rounded-3xl p-6 ${accents[i]}`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="modules" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-10 flex items-end gap-4 sm:gap-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Core Modules
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module, i) => {
            const accents = ["accent-top-blue", "accent-top-emerald", "accent-top-violet", "accent-top-cyan", "accent-top-amber", "accent-top-rose"];
            const badges = ["icon-badge-blue", "icon-badge-emerald", "icon-badge-violet", "icon-badge-cyan", "icon-badge-amber", "icon-badge-rose"];
            const icons = ["📊", "👥", "🤝", "📦", "🤖", "🏨"];
            return (
              <article
                key={module.name}
                className={`glass-card-strong rounded-3xl p-6 ${accents[i]}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`icon-badge ${badges[i]}`}>{icons[i]}</div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-primary">
                    {module.name}
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  {module.eyebrow}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {module.text}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {module.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 text-emerald-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-dark px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
            Industry Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {INDUSTRY_SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="glass-card-dark rounded-3xl p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Built to Compete with Top Enterprise Software Players
        </h2>
        <p className="max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Many top-tier enterprise platforms offer strong functionality, but
          customers often face high total cost of ownership, slow implementation
          cycles, vendor lock-in, excessive customization dependency, poor
          module interoperability, and complex user experiences. The Dastute Enterprise Platform
          is built to challenge those limitations with a more connected,
          security-focused, and adaptable product strategy.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2 text-sm text-slate-700">
          {[
            "Built as a practical alternative to legacy and top-market enterprise vendors.",
            "Focused on customer pain points, not just feature parity.",
            "Designed for adaptability, faster evolution, and long-term platform relevance.",
            "Combines operational depth with stronger data security and governance.",
          ].map((item) => (
            <li
              key={item}
              className="glass-card-strong rounded-2xl p-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Designed for What Your Business Becomes Next
          </h2>
          <p className="max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Enterprise software should not only solve current issues; it should
            also support future expansion, AI adoption, compliance changes, new
            business models, and deeper automation. The Dastute Enterprise Platform is built with
            that long-term view in mind, helping organizations evolve without
            being trapped by static systems.
          </p>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid gap-4">
          {FAQ_ITEMS.map((faq) => (
            <details
              key={faq.question}
              className="glass-card-strong rounded-3xl p-6 group"
            >
              <summary className="cursor-pointer text-lg font-semibold text-slate-900 flex items-center justify-between">
                {faq.question}
                <span className="text-blue-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
