import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { useFormSubmit } from "@/lib/useFormSubmit";

export const Route = createFileRoute("/project-estimator")({
  head: () => ({
    meta: [
      { title: "Project Estimator — Dastute Technologies" },
      {
        name: "description",
        content:
          "Scope your next project with Dastute Technologies. Answer a few questions about your needs, timeline and budget, and we'll prepare a tailored proposal.",
      },
      {
        property: "og:title",
        content: "Project Estimator — Dastute Technologies",
      },
      {
        property: "og:description",
        content:
          "Scope your next technology or creative engagement in under 5 minutes.",
      },
      { property: "og:url", content: "/project-estimator" },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/project-estimator" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Project Estimator", path: "/project-estimator" },
          ]),
        ),
      },
    ],
  }),
  component: ProjectEstimatorPage,
});

const STEPS = [
  { id: 1, label: "Practice" },
  { id: 2, label: "Scope" },
  { id: 3, label: "Timeline" },
  { id: 4, label: "Details" },
];

const SERVICE_OPTIONS: Record<string, string[]> = {
  technology: [
    "Web Development",
    "Mobile App",
    "Custom Software",
    "Blockchain / dApp",
    "DeFi Protocol",
    "MVP Build",
    "SaaS Platform",
    "Cybersecurity Audit",
    "Cloud Migration",
  ],
  creative: [
    "Brand Strategy",
    "Brand Identity",
    "UI / UX Design",
    "Packaging Design",
    "Media Planning",
    "TV / Radio / Print Campaign",
    "Digital Marketing & SEO",
    "3D Visualization",
    "Product Film",
  ],
  both: [
    "Full-Stack Product Build",
    "Brand + Website Launch",
    "Rebrand + Platform Migration",
    "End-to-End Go-to-Market",
  ],
};

const BUDGETS = [
  "Under £10k",
  "£10k – £25k",
  "£25k – £50k",
  "£50k – £100k",
  "£100k+",
  "Not sure yet",
];
const TIMELINES = [
  "ASAP — Under 4 weeks",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible / Ongoing",
];

function ProjectEstimatorPage() {
  const { status, handleSubmit, errorMessage } = useFormSubmit();
  const [step, setStep] = useState(1);
  const [practice, setPractice] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  };

  const canProceed = () => {
    if (step === 1) return practice !== null;
    if (step === 2) return selectedServices.length > 0;
    if (step === 3) return budget !== null && timeline !== null;
    return true;
  };

  const goNext = () => {
    if (canProceed() && step < 4) setStep(step + 1);
  };
  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
          / Project Estimator
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          Scope your next
          <br />
          engagement.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Answer a few questions about your project and we'll prepare a tailored
          proposal within two business days. No commitment required.
        </p>
      
        </div>
</section>

      {/* Progress Bar */}
      <section className="section-gradient border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:divide-x divide-border">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={`p-6 md:p-8 text-center transition-colors duration-300 ${
                step === s.id
                  ? "bg-foreground text-background"
                  : step > s.id
                    ? "bg-muted"
                    : ""
              }`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-widest block mb-2 ${
                  step === s.id ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                Step {s.id}
              </span>
              <span className="font-bold text-sm md:text-base">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Step Content */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {/* Step 1: Practice Area */}
        {step === 1 && (
          <div className="animate-reveal">
            <div className="flex items-end gap-6 mb-16">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                What do you need help with?
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                {
                  key: "technology",
                  title: "Technology",
                  desc: "Software engineering, blockchain, cloud and cybersecurity.",
                },
                {
                  key: "creative",
                  title: "Creative & Brand",
                  desc: "Brand strategy, identity design, UI/UX and marketing.",
                },
                {
                  key: "both",
                  title: "Both",
                  desc: "Integrated engagements spanning engineering and brand.",
                },
              ].map((p) => (
                <button
                  key={p.key}
                  onClick={() => {
                    setPractice(p.key);
                    setSelectedServices([]);
                  }}
                  className={`flex flex-col items-start bg-background p-8 md:p-10 text-left group transition-colors duration-300 ${
                    practice === p.key
                      ? "bg-foreground text-background"
                      : "hover:bg-foreground hover:text-background"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest block mb-8 ${
                      practice === p.key
                        ? "text-background/60"
                        : "text-primary group-hover:text-background/60"
                    }`}
                  >
                    {p.key === "technology"
                      ? "01"
                      : p.key === "creative"
                        ? "02"
                        : "01 + 02"}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      practice === p.key
                        ? "text-background/70"
                        : "text-muted-foreground group-hover:text-background/70"
                    }`}
                  >
                    {p.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service Selection */}
        {step === 2 && practice && (
          <div className="animate-reveal">
            <div className="flex items-end gap-6 mb-16">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Select the services you need
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {SERVICE_OPTIONS[practice].map((s) => (
                <button
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`p-6 text-left border transition-colors duration-200 ${
                    selectedServices.includes(s)
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{s}</span>
                    <div
                      className={`size-5 rounded-full border flex items-center justify-center text-[10px] transition-colors ${
                        selectedServices.includes(s)
                          ? "border-primary bg-primary text-white"
                          : "border-border"
                      }`}
                    >
                      {selectedServices.includes(s) && "✓"}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {selectedServices.length > 0 && (
              <p className="mt-6 text-sm text-muted-foreground font-mono">
                {selectedServices.length} service
                {selectedServices.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>
        )}

        {/* Step 3: Budget & Timeline */}
        {step === 3 && (
          <div className="animate-reveal">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-end gap-6 mb-12">
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Estimated Budget
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="space-y-3">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`w-full p-5 text-left border transition-colors duration-200 flex justify-between items-center ${
                        budget === b
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{b}</span>
                      <div
                        className={`size-4 rounded-full border transition-colors ${
                          budget === b
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-end gap-6 mb-12">
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Timeline
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="space-y-3">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`w-full p-5 text-left border transition-colors duration-200 flex justify-between items-center ${
                        timeline === t
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{t}</span>
                      <div
                        className={`size-4 rounded-full border transition-colors ${
                          timeline === t
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="animate-reveal">
            <div className="grid md:grid-cols-[1fr_2fr] gap-16">
              {/* Summary sidebar */}
              <div className="space-y-8">
                <div className="flex items-end gap-6 mb-4">
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Your Selection
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Practice
                  </p>
                  <p className="font-bold">
                    {practice === "technology"
                      ? "Technology"
                      : practice === "creative"
                        ? "Creative & Brand"
                        : "Both"}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Services
                  </p>
                  <ul className="space-y-1 text-sm">
                    {selectedServices.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="font-mono text-[10px] text-primary mt-1">
                          →
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Budget
                  </p>
                  <p className="text-sm">{budget}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Timeline
                  </p>
                  <p className="text-sm">{timeline}</p>
                </div>
              </div>

              {/* Contact form */}
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="flex items-end gap-6 mb-4">
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Your Details
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="est-name"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="est-name"
                      name="est-name"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="est-company"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Company *
                    </label>
                    <input
                      id="est-company"
                      name="est-company"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="est-email"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="est-email"
                      name="est-email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="est-phone"
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="est-phone"
                      name="est-phone"
                      type="tel"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="est-role"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Your Role
                  </label>
                  <input
                    id="est-role"
                    name="est-role"
                    placeholder="e.g. CTO, Head of Marketing, Founder"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="est-brief"
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="est-brief"
                    name="est-brief"
                    rows={5}
                    placeholder="Tell us about the problem you're solving, your target audience, and any constraints we should know about..."
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Get My Proposal →'}
                </button>
                {status === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-sm mt-4">
                    Thank you. We'll prepare your proposal and respond within two business days.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm mt-4">
                    {errorMessage || "Something went wrong. Please try again or email us directly at info@dastute.co.uk."}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          {step > 1 ? (
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          {step < 4 && (
            <button
              onClick={goNext}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                canProceed()
                  ? "bg-foreground text-background hover:bg-primary"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Continue →
            </button>
          )}
        </div>
      </section>

      {/* Estimator Process Details */}
      <section className="bg-slate-50 py-24 px-6 dark:bg-slate-900/50 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              How the Estimation Process Works
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Requirements Review & Discovery</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Once you submit your project brief through our estimator tool, our senior solutions architects will review your requirements. We carefully analyze your selected technology stacks, desired capabilities, and timeline constraints. If we identify any immediate technical risks or missing dependencies in your brief, we will highlight these in our initial response. This ensures that the proposal we provide is built on realistic assumptions and proven engineering practices, not just guesswork.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">2. Tailored Proposal & Budget Mapping</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Within two business days, you will receive a comprehensive proposal outline. This document will break down your requested budget tier into specific engineering sprints and deliverables. Whether you are migrating a monolithic application to a microservices architecture, launching a high-security Web3 protocol, or designing a brand identity from scratch, we provide clear resource allocation. We transparently map out exactly where your budget is being deployed across front-end development, backend infrastructure, security auditing, and project management.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">3. Strategy Call & Scope Refinement</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The initial estimate is designed to serve as a baseline for discussion. Following the proposal delivery, we schedule a 30-minute strategy call with our technical leads. During this consultation, we refine the project scope, discuss potential cost-saving architectural decisions, and finalize the Statement of Work (SOW). Our goal is to align our global delivery capabilities with your exact business objectives, ensuring a high-ROI engagement with absolutely zero hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Project Estimation Guide - SEO Text Expansion */}
      <section className="bg-white py-24 px-6 dark:bg-slate-950 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              The Definitive Guide to IT Project Estimation
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Why Accurate Project Estimation Matters in Technology</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              In the landscape of modern software engineering, cloud architecture, and cybersecurity, the ability to accurately forecast project costs and timelines is a critical determinant of commercial success. Historically, the IT industry has been plagued by "black box" pricing models, where initial quotes are artificially lowered to secure a contract, only for scope creep and hidden dependencies to trigger massive budget overruns. At Dastute Technologies, we believe that project estimation should be a rigorous, transparent, and collaborative discipline.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              When an enterprise commits to a digital transformation initiative—whether that entails migrating legacy monolithic architectures to cloud-native microservices, building bespoke Enterprise Resource Planning (ERP) integrations, or deploying complex Web3 decentralized applications (dApps)—the financial and operational stakes are incredibly high. An accurate estimate provides stakeholders with the fiscal clarity required to secure board approval, allocate internal resources effectively, and measure ultimate Return on Investment (ROI). Without a highly detailed initial scoping phase, development sprints become chaotic, technical debt accumulates rapidly, and Go-To-Market (GTM) strategies are compromised.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Core Variables Influencing IT Infrastructure and Software Costs</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Generating a reliable estimate requires a multidimensional analysis of several key variables. The primary driver of cost is, invariably, complexity. A standard corporate marketing website built on a robust headless Content Management System (CMS) possesses a drastically different risk profile and resource requirement than a custom, real-time financial trading platform requiring sub-millisecond latency and bank-grade encryption.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              <strong>1. Technical Stack and Architecture:</strong> The choice of underlying technologies fundamentally dictates the pace of development. Building cross-platform mobile applications using frameworks like React Native or Flutter generally requires a different financial footprint than developing fully native iOS (Swift) and Android (Kotlin) counterparts. Similarly, choosing to deploy on serverless architectures (like AWS Lambda) may increase initial setup complexity but drastically reduce long-term operational expenditure (OpEx) compared to managing dedicated virtual machines.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              <strong>2. Integration and Legacy Systems:</strong> One of the most frequently underestimated aspects of enterprise IT is the complexity of integrating new software with existing, often archaic, legacy systems. Extracting, transforming, and securely transmitting data from on-premise mainframes to modern cloud data warehouses requires specialized middleware engineering, extensive API development, and rigorous data validation protocols. These integrations require substantial senior engineering oversight.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>3. Security and Compliance Frameworks:</strong> In today's threat landscape, security cannot be retrofitted. Applications handling Sensitive Personal Information (SPI), Protected Health Information (PHI), or financial transactions must adhere to stringent regulatory frameworks such as GDPR, HIPAA, or PCI-DSS. Achieving and maintaining compliance necessitates specialized architectural patterns, mandatory third-party penetration testing, and robust identity and access management (IAM) implementations, all of which must be factored into the initial project estimate.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Commitment to Transparent Agile Delivery</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We leverage an Agile delivery methodology that mitigates the inherent risks of large-scale technology deployments. By breaking massive, multi-year initiatives down into manageable, highly focused two-week sprints, we provide our clients with continuous visibility into the development process. This iterative approach allows us to rapidly prototype core features, gather user feedback early in the lifecycle, and pivot technical strategies without derailing the entire budget. The project estimator tool provided above is the first critical step in this transparent journey. By providing us with a high-level overview of your objectives, budget constraints, and timeline, you enable our senior architects to construct a highly optimized, realistic roadmap for your digital success.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
