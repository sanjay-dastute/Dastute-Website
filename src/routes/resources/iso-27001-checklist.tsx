import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/iso-27001-checklist")({
  head: () => ({
    ...buildStandardPageHead({
      title: "ISO 27001 Certification Checklist UK | Dastute Guide",
      description: "A complete step-by-step checklist for achieving ISO 27001 certification in the UK. Understand ISMS implementation, Annex A controls, and the Stage 1 and 2 audit process.",
      path: "/resources/iso-27001-checklist",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "ISO 27001 Certification Checklist UK | Dastute Guide",
            description: "A complete step-by-step checklist for achieving ISO 27001 certification in the UK. Understand ISMS implementation, Annex A controls, and the Stage 1 and 2 audit process.",
            datePublished: "2026-04-16T02:10:54.545Z",
            authorName: "Sanjay Dastute",
            path: "/resources/iso-27001-checklist",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPersonJsonLd({
            name: "Sanjay Dastute",
            jobTitle: "Chief Technology Officer",
            path: "/team",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "ISO 27001 Checklist", path: "/resources/iso-27001-checklist" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/iso-27001-checklist", [
            {
              question: "What is an ISO 27001 ISMS?",
              answer: "An Information Security Management System (ISMS) is the core framework required by ISO 27001. It is a systematic, documented approach to managing sensitive company information so that it remains secure. It includes people, processes, and IT systems by applying a rigorous risk management process.",
            },
            {
              question: "How long does it take to get ISO 27001 certified in the UK?",
              answer: "For a small to medium-sized UK business starting from scratch, achieving ISO 27001 certification typically takes between 6 to 12 months. This timeframe heavily depends on the current maturity of your cybersecurity controls, the complexity of your IT infrastructure, and the availability of internal resources to draft policy documentation.",
            },
            {
              question: "What is the difference between Stage 1 and Stage 2 ISO 27001 audits?",
              answer: "The Stage 1 audit is a documentation review; the auditor checks that your written ISMS policies meet the ISO standard requirements. The Stage 2 audit is an operational evaluation; the auditor visits your site and actively tests your systems to verify that you are actually following the policies you documented in Stage 1.",
            }
          ])
        ),
      }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Compliance Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            ISO 27001 Certification Checklist UK
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            The definitive step-by-step guide to building an Information Security Management System (ISMS), mastering Annex A controls, and passing your Stage 1 and 2 audits.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              ISO 27001 is the international gold standard for information security. For B2B companies in the UK—especially SaaS providers, fintechs, and managed service providers—holding this certification is often a mandatory prerequisite for closing enterprise deals.
            </p>
            <p>
              Unlike Cyber Essentials, which focuses purely on technical IT controls, ISO 27001 takes a holistic approach. It requires you to build a comprehensive <strong>Information Security Management System (ISMS)</strong> that governs your people, processes, and technology.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Phase 1: Preparation & Scoping</h2>
            <p>Before you write a single policy, you must define the boundaries of your certification.</p>
            <ul className="space-y-4 mb-8">
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Secure Management Commitment:</strong> ISO 27001 cannot be driven by the IT department alone. The board of directors must formally commit to funding and supporting the ISMS.</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Define the ISMS Scope:</strong> Are you certifying your entire global company, or just the London software development office? Defining a narrow scope initially makes the process much faster.</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Identify Interested Parties:</strong> Document all stakeholders who care about your security (e.g., customers, regulators like the ICO, suppliers, and employees).</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Phase 2: Risk Assessment & Treatment</h2>
            <p>Risk management is the absolute core of the ISO 27001 standard.</p>
            <ul className="space-y-4 mb-8">
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Create a Risk Methodology:</strong> Define exactly how you will identify, score, and evaluate risks (e.g., using a 5x5 impact/likelihood matrix).</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Conduct the Risk Assessment:</strong> Identify all information assets (laptops, servers, source code, employee data) and document the threats they face (theft, fire, ransomware, accidental deletion).</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Formulate a Risk Treatment Plan:</strong> Decide how you will handle unacceptable risks: Tolerate, Terminate, Transfer (e.g., insurance), or Treat (apply a security control).</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Produce the Statement of Applicability (SoA):</strong> The SoA is the most important document in your ISMS. It lists all 93 controls from Annex A (2022 revision) and states whether you have applied them and why.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Phase 3: Implementation & Annex A Controls</h2>
            <p>This is where you actually build the security infrastructure. You must draft mandatory policies and implement the technical controls defined in your SoA.</p>
            
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">Key Annex A Control Categories (2022 Update):</h3>
              <ul className="text-sm text-slate-700 space-y-2 mb-0">
                <li><strong>Organizational Controls (37):</strong> Information security policies, threat intelligence, asset management, and supplier relationships.</li>
                <li><strong>People Controls (8):</strong> Background screening, confidentiality agreements, and ongoing security awareness training.</li>
                <li><strong>Physical Controls (14):</strong> Secure offices, clear desk policies, and protection of hardware against environmental threats.</li>
                <li><strong>Technological Controls (34):</strong> Endpoint protection, encryption, secure coding practices, data masking, and network segmentation.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Phase 4: Training & Internal Auditing</h2>
            <p>You cannot pass ISO 27001 if your staff do not know your policies exist.</p>
            <ul className="space-y-4 mb-8">
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Conduct Staff Training:</strong> Ensure all employees undergo verifiable security awareness training.</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Run an Internal Audit:</strong> An independent party (either an external consultant or an internal employee not responsible for the ISMS) must audit your system to find non-conformities before the official auditor arrives.</li>
              <li><i className="fas fa-check-square text-blue-600 mr-2"></i> <strong>Hold a Management Review:</strong> The board of directors must review the ISMS performance and internal audit results, formally documenting their decisions.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Phase 5: The Certification Audits</h2>
            <p>You must hire a UKAS-accredited certification body (e.g., BSI, LRQA) to perform the official audits.</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Stage 1 Audit (Document Review)</h3>
                <p className="text-sm text-slate-600">
                  The auditor reviews your written policies, risk assessment, and SoA. They are simply checking if your ISMS design theoretically meets the standard. If they find gaps, you have time to fix them before Stage 2.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3 mt-0">Stage 2 Audit (Operational Test)</h3>
                <p className="text-sm text-blue-800">
                  The auditor visits your office and interviews staff. They test your systems to ensure you are actually following the policies you wrote. If you pass, you are awarded the ISO 27001 certification.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">ISO 27001 FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is an ISO 27001 ISMS?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                An Information Security Management System (ISMS) is the core framework required by ISO 27001. It is a systematic, documented approach to managing sensitive company information so that it remains secure. It includes people, processes, and IT systems by applying a rigorous risk management process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How long does it take to get ISO 27001 certified in the UK?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                For a small to medium-sized UK business starting from scratch, achieving ISO 27001 certification typically takes between 6 to 12 months. This timeframe heavily depends on the current maturity of your cybersecurity controls, the complexity of your IT infrastructure, and the availability of internal resources to draft policy documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between Stage 1 and Stage 2 ISO 27001 audits?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The Stage 1 audit is a documentation review; the auditor checks that your written ISMS policies meet the ISO standard requirements. The Stage 2 audit is an operational evaluation; the auditor visits your site and actively tests your systems to verify that you are actually following the policies you documented in Stage 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Accelerate Your ISO 27001 Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's compliance consultants handle the documentation, risk assessments, and technical controls so you can focus on running your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Consult an ISO Expert
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
