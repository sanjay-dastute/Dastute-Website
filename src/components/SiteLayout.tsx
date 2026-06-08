import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { buildFaqJsonLd } from "@/lib/seo";

const SERVICE_FAQ_MAP: Record<
  string,
  Array<{ question: string; answer: string }>
> = {
  "/service-managed-it": [
    {
      question: "What is included in your managed IT service?",
      answer:
        "Managed IT includes proactive monitoring, patching, helpdesk support, endpoint management, and strategic advisory with SLA-backed response times.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes. We provide 24/7 support options for business-critical systems, including escalation paths and incident response workflows.",
    },
    {
      question: "Can you work with our existing tools?",
      answer:
        "Yes. We integrate with your current stack where practical and recommend targeted improvements only where they add measurable value.",
    },
  ],
  "/service-consulting": [
    {
      question: "What outcomes does IT consulting deliver?",
      answer:
        "IT consulting aligns your technology roadmap with business goals, reduces delivery risk, and improves investment decisions across platforms and vendors.",
    },
    {
      question: "Do you provide vCIO support?",
      answer:
        "Yes. Our vCIO engagements provide senior technology leadership for planning, governance, and executive decision support.",
    },
    {
      question: "How long is a typical strategy engagement?",
      answer:
        "Most strategy engagements run 4 to 8 weeks, depending on business complexity, stakeholder availability, and depth of assessment.",
    },
  ],
  "/service-cyber-security": [
    {
      question: "Do you offer red, blue, and purple team services?",
      answer:
        "Yes. We run offensive and defensive exercises, then use collaborative purple-team sessions to close critical control gaps.",
    },
    {
      question: "Can you support ISO 27001 and Cyber Essentials?",
      answer:
        "Yes. We support readiness assessments, remediation planning, and evidence preparation for ISO 27001 and Cyber Essentials programs.",
    },
    {
      question: "What deliverables do we receive after testing?",
      answer:
        "You receive executive summaries, technical findings, risk-prioritized remediation plans, and stakeholder debrief sessions.",
    },
  ],
  "/service-cloud": [
    {
      question: "Which cloud providers do you support?",
      answer:
        "We support AWS, Azure, and Google Cloud, including hybrid and multi-cloud architecture and migration programs.",
    },
    {
      question: "How do you reduce migration risk?",
      answer:
        "We use phased rollout, parallel validation, rollback planning, and production readiness checklists to minimize risk and downtime.",
    },
    {
      question: "Do you optimize cloud costs?",
      answer:
        "Yes. We apply FinOps practices including rightsizing, reservation strategy, and waste elimination with monthly cost reporting.",
    },
  ],
  "/service-web-development": [
    {
      question: "What web technologies do you use?",
      answer:
        "We build with modern stacks including React, Next.js, TypeScript, Node.js, and API-first architectures.",
    },
    {
      question: "Can you build SEO-ready websites?",
      answer:
        "Yes. We implement technical SEO fundamentals including schema, performance optimization, semantic HTML, canonical tags, and crawl controls.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We provide stabilization, monitoring, and ongoing enhancement support after launch.",
    },
  ],
  "/service-mobile": [
    {
      question: "Should we choose native or cross-platform?",
      answer:
        "We recommend based on product goals, device feature needs, and timeline. Cross-platform often accelerates delivery, while native can maximize platform performance.",
    },
    {
      question: "Do you handle app store submissions?",
      answer:
        "Yes. We manage build signing, compliance checks, metadata preparation, and App Store and Google Play submission workflows.",
    },
    {
      question: "How long does a mobile MVP take?",
      answer:
        "Most MVP mobile apps are delivered in approximately 8 to 16 weeks depending on features and integrations.",
    },
  ],
  "/service-android": [
    {
      question: "Do you build native Android apps?",
      answer:
        "Yes. We deliver native Android applications with Kotlin and modern Android architecture patterns.",
    },
    {
      question: "Can you integrate Android apps with enterprise systems?",
      answer:
        "Yes. We integrate with APIs, identity providers, analytics, and enterprise back-office platforms.",
    },
    {
      question: "Do you support maintenance and updates?",
      answer:
        "Yes. We provide release management, compatibility updates, and feature enhancements.",
    },
  ],
  "/service-ios": [
    {
      question: "Do you build native iOS apps with Swift?",
      answer:
        "Yes. We build native iOS apps using Swift and modern Apple frameworks for high performance and reliability.",
    },
    {
      question: "Can you integrate Face ID and Apple ecosystem features?",
      answer:
        "Yes. We implement platform capabilities such as biometrics, notifications, and secure keychain workflows where relevant.",
    },
    {
      question: "Do you handle App Store review requirements?",
      answer:
        "Yes. We prepare required metadata and compliance artifacts to support smooth App Store submission.",
    },
  ],
  "/service-blockchain": [
    {
      question: "What blockchain services do you provide?",
      answer:
        "We provide smart contract development, architecture design, integration, and security-focused delivery support.",
    },
    {
      question: "Do you support enterprise blockchain use cases?",
      answer:
        "Yes. We design blockchain solutions for enterprise workflows where immutability and trust verification create measurable value.",
    },
    {
      question: "Can you assist with smart contract security?",
      answer:
        "Yes. We include secure coding practices, testing, and audit-aligned remediation guidance.",
    },
  ],
  "/service-erp": [
    {
      question: "Which ERP platforms do you support?",
      answer:
        "We support major ERP platforms and tailored ERP implementations based on business process and integration requirements.",
    },
    {
      question: "Can you migrate data from legacy systems?",
      answer:
        "Yes. We run structured data migration and validation plans to protect business continuity.",
    },
    {
      question: "Do you provide ERP customization and support?",
      answer:
        "Yes. We provide implementation, customization, integration, and post-go-live support.",
    },
  ],
  "/service-network": [
    {
      question: "Do you design and manage enterprise networks?",
      answer:
        "Yes. We design, deploy, and manage LAN/WAN, SD-WAN, wireless, and secure connectivity environments.",
    },
    {
      question: "Can you improve network reliability across sites?",
      answer:
        "Yes. We optimize topology, routing, failover, and monitoring to improve uptime and performance.",
    },
    {
      question: "Do you include network security controls?",
      answer:
        "Yes. Our network solutions include segmentation, access controls, and security policy enforcement.",
    },
  ],
  "/service-custom-software": [
    {
      question: "When should we choose custom software?",
      answer:
        "Custom software is best when off-the-shelf tools cannot support your workflow, compliance, or integration requirements.",
    },
    {
      question: "Can you modernize legacy systems?",
      answer:
        "Yes. We modernize legacy applications through phased migration strategies that reduce operational risk.",
    },
    {
      question: "How do you ensure maintainability?",
      answer:
        "We use clear architecture, testing, documentation, and handover standards to ensure long-term maintainability.",
    },
  ],
  "/service-staffing": [
    {
      question: "What roles can you provide?",
      answer:
        "We provide vetted engineers, architects, security specialists, and delivery talent for contract and permanent roles.",
    },
    {
      question: "How quickly can you provide candidates?",
      answer:
        "Initial shortlists are typically delivered quickly after role calibration and requirement confirmation.",
    },
    {
      question: "Do you support UK compliance requirements?",
      answer:
        "Yes. We support relevant UK hiring and contractor compliance workflows, including IR35-aligned processes where applicable.",
    },
  ],
  "/service-marketing": [
    {
      question: "What marketing channels do you cover?",
      answer:
        "We cover SEO, paid media, social media, content, email automation, and analytics-led growth programs.",
    },
    {
      question: "How do you measure performance?",
      answer:
        "We track channel KPIs, conversion metrics, and commercial outcomes with regular reporting.",
    },
    {
      question: "Do you support B2B and B2C campaigns?",
      answer:
        "Yes. We support B2B and B2C programs with strategy tailored to audience, cycle length, and acquisition model.",
    },
  ],
  "/service-red-blue-team": [
    {
      question: "What is the purpose of red and blue team testing?",
      answer:
        "It validates how effectively your organization can prevent, detect, respond to, and recover from realistic attack scenarios.",
    },
    {
      question: "Do you provide actionable remediation guidance?",
      answer:
        "Yes. We provide prioritized remediation actions with technical detail and executive context.",
    },
    {
      question: "Can we run recurring exercises?",
      answer:
        "Yes. Recurring exercises improve maturity over time and validate control improvements release by release.",
    },
  ],
};

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const serviceFaqItems = SERVICE_FAQ_MAP[pathname];

  return (
    <div className="site-ambient min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <div aria-hidden className="ambient-orb ambient-orb-a" />
      <div aria-hidden className="ambient-orb ambient-orb-b" />
      {serviceFaqItems ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildFaqJsonLd(`${pathname}#faq`, serviceFaqItems),
            ),
          }}
        />
      ) : null}
      <SiteNav />
      <main className="overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}
