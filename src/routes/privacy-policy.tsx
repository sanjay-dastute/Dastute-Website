import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dastute Technologies" },
      {
        name: "description",
        content:
          "Privacy Policy for Dastute Technologies Limited. How we collect, use and protect your data under UK GDPR and the Data Protection Act 2018.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Dastute Technologies",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Legal
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-8">
          Privacy Policy
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
              <h2 className="text-2xl font-bold tracking-tight">
                Introduction
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                Dastute Technologies Limited ("we", "our", "us") is a company
                registered in England and Wales (Company No. 17019407) with its
                registered office at 128 City Road, London, EC1V 2NX, United
                Kingdom.
              </p>
              <p>
                We are committed to protecting and respecting your privacy. This
                policy explains how we collect, use, store and share personal
                data when you visit our website, engage our services, or
                otherwise interact with us.
              </p>
              <p>
                We act as a data controller for the personal data described in
                this policy. For questions about our data practices, please
                contact us at{" "}
                <a
                  href="mailto:privacy@dastute.co.uk"
                  className="text-primary hover:underline"
                >
                  privacy@dastute.co.uk
                </a>
                .
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">02</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Data We Collect
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>We may collect the following categories of personal data:</p>
              <ul className="space-y-2">
                {[
                  "Identity Data: full name, job title, company name.",
                  "Contact Data: email address, telephone number, postal address.",
                  "Technical Data: IP address, browser type and version, time zone, operating system, device type.",
                  "Usage Data: pages visited, time spent on pages, navigation paths, referring URLs.",
                  "Communication Data: correspondence records when you contact us via email or forms.",
                  "Project Data: information you provide in briefs, audit requests or project estimators.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Section 3 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">03</span>
              <h2 className="text-2xl font-bold tracking-tight">
                How We Use Your Data
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>We process personal data for the following purposes:</p>
              <ul className="space-y-2">
                {[
                  "To respond to your enquiries, audit requests and project briefs.",
                  "To deliver and manage our consulting services.",
                  "To send you relevant updates, insights and marketing communications (with your consent).",
                  "To improve our website, services and user experience.",
                  "To comply with legal and regulatory obligations.",
                  "To protect our legitimate business interests and enforce our terms.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Section 4 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">04</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Legal Basis for Processing
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                Under UK GDPR and the Data Protection Act 2018, we rely on the
                following lawful bases:
              </p>
              <ul className="space-y-2">
                {[
                  "Consent: where you have given clear consent for us to process your data for specific purposes (e.g. newsletter subscriptions).",
                  "Contractual necessity: where processing is necessary to perform a contract with you or take pre-contractual steps at your request.",
                  "Legitimate interests: where processing is necessary for our legitimate business interests, provided these do not override your rights.",
                  "Legal obligation: where processing is necessary to comply with applicable law.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
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
              <h2 className="text-2xl font-bold tracking-tight">
                Data Sharing & Transfers
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>We do not sell your personal data. We may share data with:</p>
              <ul className="space-y-2">
                {[
                  "Service providers who assist in delivering our services (e.g. hosting, analytics, email).",
                  "Professional advisers (legal, accounting, insurance) as necessary.",
                  "Law enforcement or regulatory authorities when required by law.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Where data is transferred outside the UK, we ensure appropriate
                safeguards are in place, including Standard Contractual Clauses
                approved by the ICO.
              </p>
            </div>
          </article>

          {/* Section 6 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">06</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Data Retention
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                We retain personal data only for as long as necessary to fulfil
                the purposes for which it was collected. Typical retention
                periods include:
              </p>
              <ul className="space-y-2">
                {[
                  "Contact form submissions: 24 months from last interaction.",
                  "Client engagement records: 6 years (in line with UK statutory requirements).",
                  "Newsletter subscriptions: until you unsubscribe.",
                  "Website analytics data: 26 months (anonymised).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
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
              <h2 className="text-2xl font-bold tracking-tight">Your Rights</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="space-y-2">
                {[
                  "Access: request a copy of the personal data we hold about you.",
                  "Rectification: request correction of inaccurate or incomplete data.",
                  "Erasure: request deletion of your data where there is no compelling reason to continue processing.",
                  "Restriction: request that we restrict processing in certain circumstances.",
                  "Portability: request your data in a structured, machine-readable format.",
                  "Object: object to processing based on legitimate interests or direct marketing.",
                  "Withdraw consent: where processing is based on consent, you may withdraw it at any time.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@dastute.co.uk"
                  className="text-primary hover:underline"
                >
                  privacy@dastute.co.uk
                </a>
                . You also have the right to lodge a complaint with the
                Information Commissioner's Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>
          </article>

          {/* Section 8 */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">08</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Changes to This Policy
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>
          </article>

          {/* Contact */}
          <div className="border-t border-border pt-16">
            <div className="p-8 bg-muted">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Data Protection Contact
              </p>
              <p className="text-sm mb-1">Dastute Technologies Limited</p>
              <p className="text-sm mb-1">128 City Road, London, EC1V 2NX</p>
              <a
                href="mailto:privacy@dastute.co.uk"
                className="text-sm text-primary hover:underline"
              >
                privacy@dastute.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
