import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { useFormSubmit } from "@/lib/useFormSubmit";

export const Route = createFileRoute("/request-audit")({
  head: () => ({
    meta: [
      { title: "Request an Audit — Dastute Technologies" },
      {
        name: "description",
        content:
          "Request a smart contract audit or brand audit from Dastute Technologies. Expert-led assessments with actionable deliverables.",
      },
      {
        property: "og:title",
        content: "Request an Audit — Dastute Technologies",
      },
      {
        property: "og:description",
        content:
          "Smart contract audits and brand audits from senior practitioners.",
      },
      { property: "og:url", content: "/request-audit" },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/request-audit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Request Audit", path: "/request-audit" },
          ]),
        ),
      },
    ],
  }),
  component: RequestAuditPage,
});

type AuditType = "smart-contract" | "brand" | null;

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}

function RequestAuditPage() {
  const { status, handleSubmit, errorMessage } = useFormSubmit();
  const [auditType, setAuditType] = useState<AuditType>(null);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
          / Request an Audit
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          Rigour applied.
          <br />
          Vulnerabilities exposed.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Whether it's a Solidity codebase or your market positioning, our
          senior practitioners deliver audit-grade analysis with actionable
          recommendations.
        </p>
      
        </div>
</section>

      {/* Audit Type Selection */}
      <section className="section-gradient border-y border-border">
        <div className="grid md:grid-cols-2 md:divide-x divide-border">
          <button
            onClick={() => setAuditType("smart-contract")}
            className={`p-12 text-left group transition-colors duration-500 block border-b md:border-b-0 border-border ${
              auditType === "smart-contract"
                ? "bg-foreground text-background"
                : "hover:bg-foreground hover:text-background"
            }`}
          >
            <div className="flex justify-between items-start mb-16">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${auditType === "smart-contract" ? "text-background/60" : "text-primary group-hover:text-background/60"}`}
              >
                Technical
              </span>
              <div
                className={`size-10 rounded-full border border-current grid place-items-center transition-opacity ${auditType === "smart-contract" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                {auditType === "smart-contract" ? "✓" : "↗"}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Smart Contract Audit
            </h2>
            <p
              className={`max-w-sm mb-6 ${auditType === "smart-contract" ? "text-background/70" : "text-muted-foreground group-hover:text-background/70"}`}
            >
              Line-by-line review, formal verification, gas analysis and a
              prioritised vulnerability report for your on-chain protocol.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Solidity", "EVM", "DeFi", "Security"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>

          <button
            onClick={() => setAuditType("brand")}
            className={`p-12 text-left group transition-colors duration-500 block ${
              auditType === "brand"
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            <div className="flex justify-between items-start mb-16">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest ${auditType === "brand" ? "text-white/60" : "text-primary group-hover:text-white/60"}`}
              >
                Strategic
              </span>
              <div
                className={`size-10 rounded-full border border-current grid place-items-center transition-opacity ${auditType === "brand" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              >
                {auditType === "brand" ? "✓" : "↗"}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Brand Audit
            </h2>
            <p
              className={`max-w-sm mb-6 ${auditType === "brand" ? "text-white/70" : "text-muted-foreground group-hover:text-white/70"}`}
            >
              Competitive positioning analysis, identity assessment, messaging
              framework review and a strategic recommendations deck.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Identity", "Positioning", "Messaging", "Design"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </button>
        </div>
      </section>

      {/* Audit Form */}
      {auditType && (
        <section className="px-6 py-24 max-w-7xl mx-auto animate-reveal">
          <div className="flex items-end gap-6 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {auditType === "smart-contract"
                ? "Smart Contract Audit Request"
                : "Brand Audit Request"}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form
            className="grid md:grid-cols-[1fr_2fr] gap-16"
            onSubmit={handleSubmit}
          >
            {/* Sidebar Info */}
            <div className="space-y-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  What You'll Receive
                </p>
                <ul className="space-y-3 text-sm">
                  {(auditType === "smart-contract"
                    ? [
                        "Full codebase review",
                        "Vulnerability severity matrix",
                        "Gas optimisation report",
                        "Remediation roadmap",
                        "Final audit certificate",
                      ]
                    : [
                        "Competitive landscape mapping",
                        "Brand perception analysis",
                        "Messaging framework review",
                        "Visual identity assessment",
                        "Strategic recommendations deck",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-primary mt-1.5">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  Timeline
                </p>
                <p className="text-sm text-muted-foreground">
                  {auditType === "smart-contract"
                    ? "Typical engagement: 2–4 weeks depending on codebase complexity. Preliminary findings within 5 business days."
                    : "Typical engagement: 3–6 weeks including stakeholder interviews. Initial audit deck within 10 business days."}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  Investment
                </p>
                <p className="text-sm text-muted-foreground">
                  {auditType === "smart-contract"
                    ? "From £8,000 for protocols under 1,000 LoC. Custom scoping for larger codebases."
                    : "From £12,000 for single-product companies. Multi-brand architectures quoted separately."}
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="audit-name" required />
                <Field label="Company" name="audit-company" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Email" name="audit-email" type="email" required />
                <Field label="Phone" name="audit-phone" type="tel" />
              </div>

              {auditType === "smart-contract" ? (
                <>
                  <div>
                    <label
                      htmlFor="audit-chain"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Target Chain(s) *
                    </label>
                    <input
                      id="audit-chain"
                      name="audit-chain"
                      required
                      placeholder="e.g. Ethereum, Arbitrum, Base"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="audit-loc"
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                      >
                        Approx. Lines of Code
                      </label>
                      <input
                        id="audit-loc"
                        name="audit-loc"
                        placeholder="e.g. 2,500"
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="audit-repo"
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                      >
                        Repository URL
                      </label>
                      <input
                        id="audit-repo"
                        name="audit-repo"
                        placeholder="github.com/..."
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label
                      htmlFor="audit-url"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Company Website *
                    </label>
                    <input
                      id="audit-url"
                      name="audit-url"
                      required
                      placeholder="https://yourcompany.com"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="audit-industry"
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                      >
                        Industry / Sector
                      </label>
                      <input
                        id="audit-industry"
                        name="audit-industry"
                        placeholder="e.g. Fintech, SaaS, DeFi"
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="audit-competitors"
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                      >
                        Key Competitors
                      </label>
                      <input
                        id="audit-competitors"
                        name="audit-competitors"
                        placeholder="e.g. Acme, Globex"
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label
                  htmlFor="audit-brief"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Additional Context
                </label>
                <textarea
                  id="audit-brief"
                  name="audit-brief"
                  rows={5}
                  placeholder={
                    auditType === "smart-contract"
                      ? "Describe the protocol, key invariants, and any known concerns..."
                      : "Describe your current brand challenges, target audience, and goals..."
                  }
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Audit Request →'}
              </button>
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-sm mt-4">
                  Thanks — our team will review your request and respond within one business day.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm mt-4">
                  {errorMessage || "Something went wrong. Please try again or email us directly at info@dastute.co.uk."}
                </div>
              )}
            </div>
          </form>
        </section>
      )}

      {/* Process overview */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-border">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            Our Detailed Audit Methodology
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            {
              n: "01",
              t: "Scoping & Discovery",
              d: "We begin every audit with a comprehensive review of your submission. Within 48 hours, our senior architects will define the exact scope of work, timeline constraints, and deliverable format. For technical audits, this includes repository access setup and initial static analysis. For brand audits, we identify key stakeholders for interviews.",
            },
            {
              n: "02",
              t: "Deep Analysis",
              d: "Our senior practitioners execute the core assessment. For smart contracts, this involves manual line-by-line review, formal verification, fuzz testing, and architectural assessment to uncover hidden vulnerabilities. For brand audits, we conduct extensive competitive mapping, market perception analysis, and visual identity stress-testing.",
            },
            {
              n: "03",
              t: "Reporting & Presentation",
              d: "We compile our findings into a highly structured, prioritized document. Technical audits receive a severity matrix (Critical to Low) with supporting exploit evidence and precise remediation steps. Brand audits receive a strategic recommendations deck highlighting messaging gaps and market positioning opportunities.",
            },
            {
              n: "04",
              t: "Remediation & Certification",
              d: "Post-audit, we offer an optional follow-up engagement to directly address the highlighted findings. Our engineering or creative teams can implement the necessary fixes, re-test the environment, and ultimately issue a final audit certificate or brand playbook to verify the newly secured standard.",
            },
          ].map((p) => (
            <div key={p.n}>
              <span className="font-mono text-xs text-primary">{p.n}</span>
              <h4 className="font-bold text-lg mt-4 mb-3">{p.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border">
          <h3 className="font-bold text-xl mb-4">Why Request an Audit from Dastute?</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            In an era of rapid technological advancement and fierce market competition, operating on assumptions is a liability. Dastute Technologies provides enterprise-grade audits designed to eliminate blind spots. Whether you are preparing for a critical mainnet launch, seeking compliance with stringent data regulations (like ISO 27001), or planning a global rebranding campaign, our independent assessments provide the clarity required for executive decision-making. We do not just run automated tools; our audits are led by seasoned industry veterans who understand the nuanced context of your specific business environment.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
