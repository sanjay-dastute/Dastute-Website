import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/service-red-blue-team")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Red Team / Blue Team Security Testing | Dastute Technologies",
      description:
        "Adversarial simulation, defensive validation, and purple-team collaboration to improve cyber resilience across people, process, and technology.",
      path: "/service-red-blue-team",
      keywords:
        "red team services UK, blue team assessment UK, purple team exercise, adversary simulation, SOC validation",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Red Team / Blue Team Security Testing",
            description:
              "Offensive and defensive cybersecurity testing that validates detection, response, and recovery capabilities under realistic threat scenarios.",
            path: "/service-red-blue-team",
            serviceType: [
              "Red Team",
              "Blue Team",
              "Purple Team",
              "Security Validation",
            ],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/service-red-blue-team#faq", [
            {
              question:
                "What is the difference between red team and blue team?",
              answer:
                "Red team exercises simulate realistic attacks, while blue team exercises evaluate your ability to detect and respond. Together they provide a full resilience assessment.",
            },
            {
              question: "How often should we run red and blue team exercises?",
              answer:
                "At minimum annually, and after major infrastructure or security control changes. Regulated environments often run more frequently.",
            },
            {
              question: "Do you provide a remediation plan after testing?",
              answer:
                "Yes. Each engagement ends with an executive summary, technical findings, prioritized remediation actions, and a replay workshop for your security team.",
            },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Red Team / Blue Team", path: "/service-red-blue-team" },
          ]),
        ),
      },
    ],
  }),
  component: RedBlueTeamPage,
});

function RedBlueTeamPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Cyber Security
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl">
          Red Team and Blue Team
          <br />
          exercises for real-world resilience.
        </h1>
        <p className="mt-8 max-w-3xl text-muted-foreground text-lg leading-relaxed">
          We simulate modern attack paths, validate defensive controls, and help
          your SOC and engineering teams close gaps quickly. Designed for
          regulated and security-sensitive organizations.
        </p>
      </section>

      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              title: "Red Team",
              text: "Adversary emulation across identity, endpoint, cloud, and application layers.",
            },
            {
              title: "Blue Team",
              text: "Detection engineering, incident-response readiness, and playbook validation.",
            },
            {
              title: "Purple Team",
              text: "Collaborative attack-and-defend sessions with measurable control improvements.",
            },
          ].map((item) => (
            <article key={item.title} className="bg-background p-8 md:p-10">
              <h2 className="text-xl font-bold tracking-tight mb-3">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Engagement Outcomes
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed text-muted-foreground">
          <li>Threat-informed attack paths mapped to business impact</li>
          <li>Detection gaps tied to MITRE ATT&CK techniques</li>
          <li>Prioritized remediation roadmap with owner handoff</li>
          <li>Executive reporting suitable for audit and board review</li>
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/request-audit"
            className="inline-flex items-center border border-foreground px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Request Security Audit
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center border border-primary px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Talk to Security Team
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
