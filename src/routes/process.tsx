import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildStandardPageHead,
  buildWebPageJsonLd,
  buildHowToJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Our Delivery Process | Dastute Technologies",
      description:
        "Dastute's four-phase delivery methodology: Discovery & Planning, Architecture & Design, Development & Iteration, Deployment & Support. Predictable outcomes. Zero disruption.",
      path: "/process",
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
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildHowToJsonLd({
            name: "Dastute Technologies Delivery Process",
            description: "Our structured four-phase delivery methodology that ensures predictable outcomes from discovery to deployment.",
            step: [
              { name: "Discovery & Planning", text: "We understand your business goals, technical requirements, and market timeline. Initial scoping takes 1-2 weeks." },
              { name: "Architecture & Design", text: "We define the technical blueprint, selecting the optimal stack and designing a scalable system architecture." },
              { name: "Development & Iteration", text: "Agile sprints delivering functional increments. Continuous testing and stakeholder feedback loops are integrated." },
              { name: "Deployment & Support", text: "Rigorous final QA, secure deployment, and handover. We offer SLA-backed managed support post-launch." }
            ]
          })
        ),
      },
    ],
  }),
  component: ProcessPage,
});

const PHASES = [
  {
    id: "01",
    duration: "1-2 weeks",
    title: "Discovery & Planning",
    body: "We understand your business goals, technical requirements, and market timeline. Initial scoping takes 1-2 weeks.",
    deliverables: [
      "Detailed requirements document and scope definition",
      "Technology stack recommendations aligned with your goals",
      "Project timeline with major milestones",
      "Resource allocation and team structure",
      "Initial budget estimate with confidence range"
    ],
    yourRole: "Provide business context, stakeholder availability, and decision-making authority",
    ourRole: "Lead discovery sessions, document requirements, create technical recommendations"
  },
  {
    id: "02",
    duration: "1-2 weeks",
    title: "Architecture & Design",
    body: "System design, database schema, API contracts, and deployment strategy defined with a security-first approach.",
    deliverables: [
      "System architecture diagram and design specifications",
      "Database schema and data models",
      "API specifications with OpenAPI/GraphQL schema",
      "Security architecture and compliance roadmap",
      "Deployment and infrastructure design (Kubernetes, AWS, etc.)"
    ],
    yourRole: "Review and approve architectural decisions, provide feedback on design",
    ourRole: "Design scalable systems, ensure security best practices, create detailed specifications"
  },
  {
    id: "03",
    duration: "Bi-weekly sprints",
    title: "Development & Iteration",
    body: "Agile sprints with bi-weekly demos, continuous integration, automated testing, and regular feedback loops.",
    deliverables: [
      "Working software incrementally delivered every 2 weeks",
      "Automated test coverage (unit, integration, E2E)",
      "CI/CD pipeline with automated deployments",
      "Code reviews and quality assurance on every commit",
      "Sprint documentation and technical decision logs"
    ],
    yourRole: "Attend sprint demos, provide feedback, prioritize backlog with product team",
    ourRole: "Execute sprints, conduct code reviews, manage technical debt, mentor team"
  },
  {
    id: "04",
    duration: "30-day support",
    title: "Deployment & Support",
    body: "Production launch, monitoring setup, performance optimisation, and 24/7 support for the first 30 days.",
    deliverables: [
      "Production deployment and go-live coordination",
      "Monitoring, alerting, and observability setup (Datadog / New Relic)",
      "Performance optimisation and load testing results",
      "Incident response procedures and runbooks",
      "30-day post-launch support and optimisation"
    ],
    yourRole: "Coordinate internal teams for launch, provide production access, define SLAs",
    ourRole: "Manage deployment, monitor systems, optimise performance, handle incidents"
  }
];

function ProcessPage() {
  return (
    <SiteLayout>
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Process
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl text-white">
            A Delivery Process Designed for Predictable Outcomes.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Our structured methodology reduces risk, accelerates delivery, and ensures transparency at every stage. Here's exactly how we work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#phases"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Explore the Process
            </a>
            <a
              href="/contact"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Schedule Discovery
            </a>
          </div>
        </div>
      </section>

      {/* Phases Overview */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: "01", title: "Discovery & Planning", time: "1-2 weeks" },
            { num: "02", title: "Architecture & Design", time: "1-2 weeks" },
            { num: "03", title: "Development & Iteration", time: "Ongoing sprints" },
            { num: "04", title: "Deployment & Support", time: "Go-live + 30 days" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border-r border-border last:border-r-0 flex flex-col justify-center"
            >
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                <span className="text-blue-600 mr-2">{stat.num}</span>
                {stat.title}
              </div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                {stat.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Phases */}
      <section id="phases" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto divide-y divide-border">
          {PHASES.map((phase, idx) => (
            <article
              key={phase.id}
              className="py-16 md:py-24 grid md:grid-cols-3 gap-12"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                  Phase {phase.id} &mdash; Duration: {phase.duration}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  {phase.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {phase.body}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-900 mb-4 bg-slate-100 inline-block px-3 py-1 rounded-full">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <i className="fas fa-check-circle text-blue-500 mt-0.5"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="glass-card-strong rounded-2xl p-6 accent-top-emerald">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                    Client Responsibilities
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {phase.yourRole}
                  </p>
                </div>
                <div className="glass-card-strong rounded-2xl p-6 accent-top-blue">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                    Dastute Responsibilities
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {phase.ourRole}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Built-in Quality & Security Practices */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600 block mb-4">
              / Quality First
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Built-in Quality & Security Practices
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quality is not a phase - it is integrated into every step of our delivery process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card-strong rounded-3xl p-8 accent-top-blue">
              <i className="fas fa-code-branch text-2xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Code Reviews</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Every pull request reviewed by senior engineers before merge. No code ships without a second pair of expert eyes verifying correctness, security, and maintainability.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">PR-based workflow</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">Senior engineer sign-off</span>
              </div>
            </div>

            <div className="glass-card-strong rounded-3xl p-8 accent-top-emerald">
              <i className="fas fa-vial text-2xl text-emerald-500 mb-4"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Testing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Unit, integration, and E2E tests run on every commit via CI pipelines. Regressions are caught before they reach staging, protecting production stability.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">Unit & integration tests</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">E2E on every commit</span>
              </div>
            </div>

            <div className="glass-card-strong rounded-3xl p-8 accent-top-rose">
              <i className="fas fa-shield-alt text-2xl text-rose-500 mb-4"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security Scanning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Static analysis and dependency scanning embedded in the CI pipeline. Vulnerabilities are flagged automatically and resolved before deployment.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-semibold rounded-full border border-rose-100">Static code analysis</span>
                <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-semibold rounded-full border border-rose-100">Dependency CVE scanning</span>
              </div>
            </div>

            <div className="glass-card-strong rounded-3xl p-8 accent-top-amber">
              <i className="fas fa-chart-line text-2xl text-amber-500 mb-4"></i>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Monitoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Real-time monitoring and alerting from day one. We track response times, error rates, and resource utilisation - reacting before users notice any degradation.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-100">Real-time dashboards</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-100">Proactive alerting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Communication Cadence */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4">
              / Transparency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Transparent Communication Cadence
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Stay informed at every stage with structured touchpoints and full project visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-card-dark rounded-3xl p-8 border-t-2 border-t-blue-500 relative">
              <span className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Every Friday</span>
              <h3 className="text-lg font-bold text-white mb-3 mt-6">Weekly Sprint Demo</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Live demonstration of completed work with stakeholder Q&A. See exactly what was built, test it in real time, and give feedback that shapes the next sprint.
              </p>
              <ul className="text-xs font-mono text-slate-500 space-y-1">
                <li>&bull; Live demo</li>
                <li>&bull; Q&A session</li>
                <li>&bull; All stakeholders</li>
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8 border-t-2 border-t-emerald-500 relative">
              <span className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Daily (Optional)</span>
              <h3 className="text-lg font-bold text-white mb-3 mt-6">Daily Standups</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                15-minute sync for active coordination during intensive phases. Stay close to the team when it matters most - no overhead when momentum is flowing.
              </p>
              <ul className="text-xs font-mono text-slate-500 space-y-1">
                <li>&bull; 15 minutes</li>
                <li>&bull; Optional</li>
                <li>&bull; Active phases</li>
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8 border-t-2 border-t-rose-500 relative">
              <span className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Bi-weekly</span>
              <h3 className="text-lg font-bold text-white mb-3 mt-6">Sprint Planning</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Prioritisation session to align on upcoming sprint goals. You control what gets built next - we facilitate structured backlog grooming and capacity planning.
              </p>
              <ul className="text-xs font-mono text-slate-500 space-y-1">
                <li>&bull; Backlog grooming</li>
                <li>&bull; Goal alignment</li>
                <li>&bull; Capacity planning</li>
              </ul>
            </div>

            <div className="glass-card-dark rounded-3xl p-8 border-t-2 border-t-amber-500 relative">
              <span className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Monthly</span>
              <h3 className="text-lg font-bold text-white mb-3 mt-6">Monthly Review</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Strategic review of progress, metrics, and roadmap adjustments. Zoom out, assess business impact, and ensure the technology is delivering real value to your organisation.
              </p>
              <ul className="text-xs font-mono text-slate-500 space-y-1">
                <li>&bull; Progress metrics</li>
                <li>&bull; Roadmap review</li>
                <li>&bull; Strategic alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
