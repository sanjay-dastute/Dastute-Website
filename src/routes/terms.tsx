import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Dastute Technologies" },
      { name: "description", content: "Terms of Service for Dastute Technologies Limited. Governing terms for use of our website and engagement of our consulting services." },
      { property: "og:title", content: "Terms of Service — Dastute Technologies" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ Legal</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-8">
          Terms of Service
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-16">
          Last updated: 1 January 2026
        </p>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          {/* Section 1 */}
          <article>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">01</span>
              <h2 className="text-2xl font-bold tracking-tight">Agreement to Terms</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you") and Dastute Technologies Limited ("Company", "we", "us"), a company registered in England and Wales under Company Number 17019407 with its registered office at 128 City Road, London, EC1V 2NX.</p>
              <p>By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website or services.</p>
            </div>
          </article>

          {/* Section 2 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">02</span>
              <h2 className="text-2xl font-bold tracking-tight">Services</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>Dastute Technologies provides technology consulting, software engineering, blockchain development, cybersecurity, cloud services, brand strategy, identity design, and marketing services ("Services").</p>
              <p>Specific services, deliverables, timelines and fees will be agreed in a separate Statement of Work ("SOW") or engagement letter, which forms part of these Terms. In the event of conflict between these Terms and an SOW, the SOW shall prevail.</p>
            </div>
          </article>

          {/* Section 3 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">03</span>
              <h2 className="text-2xl font-bold tracking-tight">Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>All content on this website — including text, graphics, logos, design elements, code, and documentation — is the property of Dastute Technologies Limited or its licensors, and is protected by copyright, trademark and other intellectual property laws.</p>
              <p>Upon full payment for Services, intellectual property rights in bespoke deliverables created exclusively for the Client shall transfer to the Client, unless otherwise specified in the applicable SOW.</p>
              <p>Pre-existing intellectual property, methodologies, frameworks and tools developed by Dastute Technologies remain our property. We grant the Client a non-exclusive, perpetual licence to use such materials as incorporated into deliverables.</p>
            </div>
          </article>

          {/* Section 4 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">04</span>
              <h2 className="text-2xl font-bold tracking-tight">Payment Terms</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>Fees for Services are set out in the applicable SOW. Unless otherwise agreed:</p>
              <ul className="space-y-2">
                {[
                  "Invoices are payable within 30 days of issue.",
                  "All fees are quoted in GBP and are exclusive of VAT unless stated otherwise.",
                  "Late payments incur interest at 8% above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.",
                  "We reserve the right to suspend Services if invoices remain unpaid beyond 14 days past due.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Section 5 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">05</span>
              <h2 className="text-2xl font-bold tracking-tight">Confidentiality</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of an engagement. This obligation survives termination of the engagement for a period of two (2) years.</p>
              <p>Confidentiality obligations do not apply to information that is publicly available, independently developed, or disclosed under legal compulsion.</p>
            </div>
          </article>

          {/* Section 6 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">06</span>
              <h2 className="text-2xl font-bold tracking-tight">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>To the maximum extent permitted by law:</p>
              <ul className="space-y-2">
                {[
                  "Our total liability arising from or in connection with Services shall not exceed the fees paid by the Client in the 12 months preceding the claim.",
                  "We shall not be liable for indirect, incidental, consequential, special or punitive damages, including loss of profits, data, revenue or business opportunity.",
                  "Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Section 7 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">07</span>
              <h2 className="text-2xl font-bold tracking-tight">Termination</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>Either party may terminate an engagement by providing 30 days' written notice, unless otherwise specified in the applicable SOW.</p>
              <p>Upon termination, the Client shall pay for all Services rendered up to the effective date of termination. All deliverables completed and paid for shall be transferred to the Client.</p>
              <p>Sections relating to Intellectual Property, Confidentiality, Limitation of Liability and Governing Law survive termination.</p>
            </div>
          </article>

          {/* Section 8 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">08</span>
              <h2 className="text-2xl font-bold tracking-tight">Website Use</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>The content on this website is provided for general information purposes only. While we strive to keep information accurate and up-to-date, we make no warranties or representations of any kind about the completeness, accuracy or reliability of the content.</p>
              <p>You agree not to use this website for any unlawful purpose, to attempt to gain unauthorised access to any part of the website, or to interfere with the website's operation.</p>
            </div>
          </article>

          {/* Section 9 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">09</span>
              <h2 className="text-2xl font-bold tracking-tight">Governing Law & Disputes</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              <p>Before commencing legal proceedings, both parties agree to attempt to resolve disputes through good-faith negotiation for a period of not less than 30 days.</p>
            </div>
          </article>

          {/* Section 10 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">10</span>
              <h2 className="text-2xl font-bold tracking-tight">Changes to These Terms</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>We reserve the right to update these Terms at any time. Changes will be effective upon posting to this page with an updated revision date. Continued use of our website or services after changes constitutes acceptance of the revised Terms.</p>
            </div>
          </article>

          {/* Contact */}
          <div className="border-t border-border pt-16">
            <div className="p-8 bg-muted">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Legal Enquiries</p>
              <p className="text-sm mb-1">Dastute Technologies Limited</p>
              <p className="text-sm mb-1">128 City Road, London, EC1V 2NX</p>
              <a href="mailto:hello@dastute.co.uk" className="text-sm text-primary hover:underline">hello@dastute.co.uk</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
