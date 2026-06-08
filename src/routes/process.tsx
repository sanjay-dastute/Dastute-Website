import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildStandardPageHead,
  buildWebPageJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Our Delivery Process | Dastute Technologies",
      description:
        "Dastute's four-phase delivery methodology: Discovery & Planning, Architecture & Design, Development & Iteration, Deployment & Support. Predictable outcomes. Zero disruption.",
      path: "/process",
      keywords:
        "IT delivery process UK, software development methodology London, agile IT delivery UK, Dastute delivery process",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildWebPageJsonLd({
            path: "/process",
            name: "A Delivery Process Engineered for Predictable Outcomes",
            description:
              "Structured four-phase delivery: Discovery & Planning, Architecture & Design, Development & Iteration, and Deployment & Support.",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ),
      },
    ],
  }),
  component: ProcessPage,
});

const PHASES = [
  {
    id: "01",
    title: "Discovery & Planning (Weeks 1-2)",
    body: "We begin by understanding your business objectives, constraints, compliance requirements, and success criteria before any design work starts.",
    deliverables: [
      "Requirements and scope definition",
      "Recommended technology stack",
      "Timeline, milestones, and dependencies",
      "Resource allocation and risk register",
      "Initial investment estimate",
    ],
    yourRole: "Provide business context and stakeholder access",
    ourRole:
      "Lead structured discovery, document requirements, and produce recommendations",
  },
  {
    id: "02",
    title: "Architecture & Design (Weeks 1-2)",
    body: "With requirements confirmed, our architects design for security, scalability, and maintainability from the outset.",
    deliverables: [
      "System architecture and technical specifications",
      "Database schema and data model planning",
      "API design (OpenAPI / GraphQL)",
      "Security architecture and compliance mapping",
      "Infrastructure and CI/CD blueprint",
    ],
    yourRole: "Review and approve architecture decisions",
    ourRole:
      "Design secure and scalable systems with implementation-ready specifications",
  },
  {
    id: "03",
    title: "Development & Iteration (Bi-Weekly Sprints)",
    body: "Delivery is sprint-based with working software demos every two weeks and continuous stakeholder feedback.",
    deliverables: [
      "Working tested increments",
      "Automated unit/integration/e2e coverage",
      "CI/CD with security scanning",
      "Code reviews on every pull request",
      "Sprint documentation and decision logs",
    ],
    yourRole: "Review sprint outcomes and prioritize feedback",
    ourRole: "Deliver, test, secure, and iterate transparently",
  },
  {
    id: "04",
    title: "Deployment & Ongoing Support (Go-Live + 30 Days)",
    body: "Go-live is a milestone, not the finish line. We execute release safely and support post-launch stabilization.",
    deliverables: [
      "Zero-downtime release strategy",
      "Monitoring, alerting, and runbooks",
      "Performance and load validation",
      "30-day hypercare support",
      "Documentation and knowledge transfer",
    ],
    yourRole: "Sign off release readiness and business checkpoints",
    ourRole: "Deploy safely and ensure stable operations after launch",
  },
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Process
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl">
          A delivery process engineered
          <br />
          for predictable outcomes.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Every Dastute engagement follows a transparent four-phase methodology
          to reduce ambiguity, lower delivery risk, and produce measurable
          business results.
        </p>
      </section>

      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto divide-y divide-border">
          {PHASES.map((phase) => (
            <article
              key={phase.id}
              className="p-6 md:p-12 grid md:grid-cols-3 gap-8"
            >
              <div>
                <span className="font-mono text-xs text-primary">
                  {phase.id}
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  {phase.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  What We Deliver
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  {phase.deliverables.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Your Role
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.yourRole}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Our Role
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.ourRole}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Quality and Security Across Every Phase
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
          <p>Code reviews on every pull request by senior engineers.</p>
          <p>Automated testing and CI checks on every integration.</p>
          <p>Security scanning integrated into delivery pipelines.</p>
          <p>Performance monitoring and release-readiness validation.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
