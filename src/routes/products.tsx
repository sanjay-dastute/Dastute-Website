import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/products")({
  head: () => ({
    ...buildStandardPageHead({
      title:
        "Enterprise Software Products | ERP · HRMS · CRM · WMS · AI | Dastute Technologies",
      description:
        "Dastute's enterprise software suite: ERP, HRMS, CRM, WMS, AI Agents, and Hospitality modules. AES-256-GCM encryption, zero-trust architecture, FIPS 140-3 compliance.",
      path: "/products",
      keywords:
        "enterprise ERP software UK, HRMS software London, CRM platform UK, WMS software, AI agents enterprise, hospitality management software UK",
    }),
    scripts: [
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
    ],
  }),
  component: ProductsPage,
});

const MODULES = [
  {
    name: "ERP Module",
    text: "Secure financials, procurement, inventory, and supply-chain workflows for regulated operations.",
  },
  {
    name: "HRMS Module",
    text: "Global workforce management with privacy controls, payroll integrity, and auditable access workflows.",
  },
  {
    name: "CRM Module",
    text: "Customer lifecycle management with PII protection, consent controls, and retention automation.",
  },
  {
    name: "WMS Module",
    text: "Warehouse execution with immutable movement trails, multi-location inventory, and fulfillment orchestration.",
  },
  {
    name: "AI Agents Module",
    text: "Private AI orchestration for enterprise workflows with controlled data boundaries and prompt governance.",
  },
  {
    name: "Hospitality Module",
    text: "PMS, POS, guest profile management, and secure revenue operations for hospitality organizations.",
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Products
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl">
          Enterprise software products.
          <br />
          Security-first by design.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Our product suite is engineered around uncompromising security:
          field-level encryption, immutable auditability, and zero-trust access
          across every module.
        </p>
      </section>

      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Security Foundation
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed">
            <p>AES-256-GCM data protection and encrypted communications.</p>
            <p>Zero-trust access with least-privilege policy enforcement.</p>
            <p>Auditability and compliance-ready operational controls.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Core Modules
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {MODULES.map((module) => (
            <article
              key={module.name}
              className="border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-bold tracking-tight mb-2">
                {module.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {module.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Industry Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Secure production operations, supplier integrity, and traceable
                execution records.
              </p>
            </article>
            <article className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Privacy-sensitive workflows, controlled access to clinical data,
                and compliance-oriented auditability.
              </p>
            </article>
            <article className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong transaction governance, operational resilience, and
                policy-driven security controls.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
