import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/cyber-essentials-guide")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Cyber Essentials Certification Guide UK | Dastute",
      description: "A complete guide to achieving NCSC Cyber Essentials and Cyber Essentials Plus certification in the UK, including costs, preparation steps, and requirements.",
      path: "/resources/cyber-essentials-guide",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "Cyber Essentials Certification Guide UK | Dastute",
            description: "A complete guide to achieving NCSC Cyber Essentials and Cyber Essentials Plus certification in the UK, including costs, preparation steps, and requirements.",
            datePublished: "2026-02-20T04:21:49.090Z",
            authorName: "Sanjay Dastute",
            path: "/resources/cyber-essentials-guide",
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
            { name: "Cyber Essentials Guide", path: "/resources/cyber-essentials-guide" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/cyber-essentials-guide", [
            {
              question: "What is the difference between Cyber Essentials and Cyber Essentials Plus?",
              answer: "Cyber Essentials is a self-assessment questionnaire that verifies your business has basic security controls in place. Cyber Essentials Plus includes the exact same requirements, but a qualified external assessor conducts an independent technical audit to verify that those controls are actually functioning correctly.",
            },
            {
              question: "How much does Cyber Essentials certification cost in the UK?",
              answer: "The baseline cost for the Cyber Essentials self-assessment ranges from £320 to £600 depending on the size of your organization. Cyber Essentials Plus typically costs between £1,500 and £3,000, as it requires an external assessor to perform hands-on technical verification of your systems.",
            },
            {
              question: "Is Cyber Essentials mandatory for UK businesses?",
              answer: "Cyber Essentials is mandatory if your business bids for central UK Government contracts that involve handling sensitive and personal information. It is also increasingly required by private sector supply chains, insurance providers, and regulatory bodies as a baseline standard for vendor risk management.",
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
            The Complete UK Guide to Cyber Essentials
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Everything you need to know about the NCSC-backed scheme, including the 5 technical controls, the difference between standard and Plus, and how to pass on your first attempt.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              In an era where ransomware attacks target small businesses just as frequently as massive enterprises, proving that your organization takes cybersecurity seriously is no longer optional. Cyber Essentials is the UK Government-backed, industry-supported scheme designed to protect businesses against the most common cyber attacks.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is Cyber Essentials?</h2>
            <p>
              Operated by the National Cyber Security Centre (NCSC) and delivered by IASME, Cyber Essentials is a certification scheme that helps organizations guard against the most common cyber threats. The scheme focuses on five core technical controls:
            </p>
            <ol className="space-y-4 mb-8">
              <li><strong>Firewalls:</strong> Securing your internet connection to prevent unauthorized access.</li>
              <li><strong>Secure Configuration:</strong> Ensuring devices and software are set up securely (e.g., removing default passwords).</li>
              <li><strong>User Access Control:</strong> Restricting access to data and services only to those who need it.</li>
              <li><strong>Malware Protection:</strong> Protecting against viruses, ransomware, and other malicious software.</li>
              <li><strong>Patch Management:</strong> Keeping software and operating systems up to date with the latest security fixes.</li>
            </ol>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Cyber Essentials vs. Cyber Essentials Plus</h2>
            <p>
              There are two levels of certification available. Understanding the difference is critical before beginning the application process.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Cyber Essentials (Basic)</h3>
                <p className="text-sm text-slate-600 mb-4">
                  This is a self-assessment certification. You log into a portal, answer a questionnaire about your IT infrastructure, and a board member signs a declaration confirming the answers are true. An assessor then reviews the questionnaire.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><i className="fas fa-check text-emerald-500 mr-2"></i> Self-assessed</li>
                  <li><i className="fas fa-check text-emerald-500 mr-2"></i> Lower cost (£320 - £600)</li>
                  <li><i className="fas fa-check text-emerald-500 mr-2"></i> Great baseline for SMEs</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-3 mt-0">Cyber Essentials Plus</h3>
                <p className="text-sm text-blue-800 mb-4">
                  The Plus certification includes the same technical requirements as the basic level, but requires an independent technical audit. A qualified assessor will actively test your systems to verify that the controls are functioning correctly.
                </p>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li><i className="fas fa-shield-alt text-blue-600 mr-2"></i> Independently verified</li>
                  <li><i className="fas fa-shield-alt text-blue-600 mr-2"></i> Higher cost (£1,500 - £3,000)</li>
                  <li><i className="fas fa-shield-alt text-blue-600 mr-2"></i> Required for many Govt contracts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Get Certified?</h2>
            <p>
              Beyond the obvious benefit of protecting your business from devastating data breaches, Cyber Essentials provides significant commercial advantages:
            </p>
            <ul>
              <li><strong>Win Government Contracts:</strong> It is mandatory for bidding on central UK Government contracts handling sensitive information.</li>
              <li><strong>Supply Chain Requirements:</strong> Large enterprises (like NHS Trusts and financial institutions) increasingly demand CE certification from all their vendors.</li>
              <li><strong>Reduced Insurance Premiums:</strong> Many cyber liability insurance providers offer reduced premiums or require CE certification to qualify for coverage.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">How Dastute Helps You Pass</h2>
            <p>
              Failing the assessment means losing your application fee. Partnering with a Managed IT Service Provider like Dastute ensures you pass on your first attempt. 
            </p>
            <p>
              We conduct a pre-assessment gap analysis of your network, deploy the necessary technical controls (such as Mobile Device Management and EDR), and guide you through the entire questionnaire process.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Certification FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between Cyber Essentials and Cyber Essentials Plus?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Cyber Essentials is a self-assessment questionnaire that verifies your business has basic security controls in place. Cyber Essentials Plus includes the exact same requirements, but a qualified external assessor conducts an independent technical audit to verify that those controls are actually functioning correctly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How much does Cyber Essentials certification cost in the UK?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The baseline cost for the Cyber Essentials self-assessment ranges from £320 to £600 depending on the size of your organization. Cyber Essentials Plus typically costs between £1,500 and £3,000, as it requires an external assessor to perform hands-on technical verification of your systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is Cyber Essentials mandatory for UK businesses?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Cyber Essentials is mandatory if your business bids for central UK Government contracts that involve handling sensitive and personal information. It is also increasingly required by private sector supply chains, insurance providers, and regulatory bodies as a baseline standard for vendor risk management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Get Certified Without the Headache
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Our engineers will perform a gap analysis, secure your network, and ensure you pass your assessment on the first try.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Start Certification Process
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
