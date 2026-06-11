import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/penetration-testing-explained")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is Penetration Testing? A Guide for UK Businesses | Dastute",
      description: "Penetration testing explained simply. Learn the difference between vulnerability scanning and pen testing, and understand black box vs white box methodologies.",
      path: "/resources/penetration-testing-explained",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What is Penetration Testing? A Guide for UK Businesses | Dastute",
            description: "Penetration testing explained simply. Learn the difference between vulnerability scanning and pen testing, and understand black box vs white box methodologies.",
            datePublished: "2026-05-13T13:05:27.272Z",
            authorName: "Sanjay Dastute",
            path: "/resources/penetration-testing-explained",
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
            { name: "Penetration Testing Explained", path: "/resources/penetration-testing-explained" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/penetration-testing-explained", [
            {
              question: "What is penetration testing?",
              answer: "Penetration testing (or pen testing) is a simulated cyber attack performed by authorized, ethical hackers. Their goal is to identify and exploit security vulnerabilities in your company's network, web applications, or cloud infrastructure before malicious hackers can find them, allowing you to patch the weaknesses proactively.",
            },
            {
              question: "What is the difference between vulnerability scanning and penetration testing?",
              answer: "A vulnerability scan is an automated software tool that checks your network for known weaknesses (like missing security patches) and generates a report. A penetration test involves a human cybersecurity expert who takes that report, actively attempts to exploit those vulnerabilities, and discovers complex logic flaws that automated scanners miss entirely.",
            },
            {
              question: "How often should a business perform a penetration test?",
              answer: "Industry best practice, as well as compliance frameworks like ISO 27001 and PCI-DSS, require businesses to perform a penetration test at least once a year. You should also conduct a new penetration test immediately after any major changes to your IT infrastructure, such as migrating to a new cloud provider or releasing a major software update.",
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
            / Cybersecurity Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            Penetration Testing Explained
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Everything you need to know about ethical hacking. Understand the methodologies, the difference between scanning and testing, and why your business needs it.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              You lock your office doors at night to stop burglars. But how do you know the locks actually work unless you hire a professional to try and break in? In the digital world, that professional is a Penetration Tester.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What is Penetration Testing?</h2>
            <p>
              Penetration testing (often called "pen testing" or ethical hacking) is a simulated cyber attack on your computer systems, authorized by you. Certified cybersecurity experts use the exact same tools, techniques, and methodologies as malicious hackers (threat actors). 
            </p>
            <p>
              The goal is to find security vulnerabilities—such as unpatched software, misconfigured firewalls, or weak employee passwords—and safely exploit them to prove the risk is real. They then provide a detailed report on how to fix the issues before a real criminal can find them.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 my-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-rose-900 mb-2 mt-0">Vulnerability Scan vs. Penetration Test</h3>
              <p className="text-rose-800 mb-3">Many businesses buy cheap "penetration tests" that are actually just automated vulnerability scans. Know the difference:</p>
              <ul className="text-sm text-rose-800 space-y-2 mb-0">
                <li><strong>Vulnerability Scan:</strong> An automated software tool that checks your IP addresses against a list of known missing patches. It is fast, cheap, and frequently produces "false positives". It only tells you a door <em>might</em> be unlocked.</li>
                <li><strong>Penetration Test:</strong> A manual, human-led exercise. The engineer takes the automated scan, filters out the junk, and actively writes custom exploit code to see how far into the network they can go. It proves the door is unlocked, walks through it, and tells you what data could be stolen.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Pen Testing Methodologies</h2>
            <p>
              Before a test begins, you must agree on the "Rules of Engagement" with the testing firm. This defines how much information the ethical hackers are given upfront.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">1. Black Box Testing</h3>
            <p>
              The testers are given <strong>zero</strong> inside information about your network—only your company name and website. This is the most realistic simulation of an external cyber attack. The testers must independently map your infrastructure, find your employee emails, and attempt to break in from the outside.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">2. White Box Testing</h3>
            <p>
              The testers are given <strong>full</strong> access to your environment, including network diagrams, source code, and high-level administrator credentials. This is the most thorough type of test, designed to find deep, complex logic flaws that a black box tester might miss due to time constraints.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">3. Grey Box Testing</h3>
            <p>
              A hybrid approach. The testers are given the access level of a standard employee (e.g., standard login credentials to your web app). The goal is to see what damage an insider threat, or a hacker who has already stolen a basic employee password, could do.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why is it Mandatory for Many Businesses?</h2>
            <p>
              Beyond the obvious benefit of not suffering a catastrophic ransomware attack, penetration testing is commercially necessary:
            </p>
            <ul>
              <li><strong>Compliance Frameworks:</strong> ISO 27001, PCI-DSS, and SOC 2 Type II all explicitly require regular penetration testing.</li>
              <li><strong>B2B Enterprise Sales:</strong> If you sell SaaS software to large corporations (like banks or healthcare providers), their procurement teams will demand a recent "Letter of Attestation" from an independent penetration testing firm before signing the contract.</li>
              <li><strong>Cyber Insurance:</strong> Insurers often require proof of testing before underwriting large cyber liability policies.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">How Often Should You Test?</h2>
            <p>
              At a bare minimum, an organization should undergo a full penetration test <strong>annually</strong>. However, you should also commission a targeted test immediately after:
            </p>
            <ul>
              <li>Adding new network infrastructure or migrating to a new cloud provider (AWS/Azure).</li>
              <li>Releasing a major update to your proprietary web or mobile application.</li>
              <li>Setting up a new office location.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pen Testing FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is penetration testing?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Penetration testing (or pen testing) is a simulated cyber attack performed by authorized, ethical hackers. Their goal is to identify and exploit security vulnerabilities in your company's network, web applications, or cloud infrastructure before malicious hackers can find them, allowing you to patch the weaknesses proactively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between vulnerability scanning and penetration testing?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A vulnerability scan is an automated software tool that checks your network for known weaknesses (like missing security patches) and generates a report. A penetration test involves a human cybersecurity expert who takes that report, actively attempts to exploit those vulnerabilities, and discovers complex logic flaws that automated scanners miss entirely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How often should a business perform a penetration test?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Industry best practice, as well as compliance frameworks like ISO 27001 and PCI-DSS, require businesses to perform a penetration test at least once a year. You should also conduct a new penetration test immediately after any major changes to your IT infrastructure, such as migrating to a new cloud provider or releasing a major software update.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Secure Your Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's certified ethical hackers provide CREST-aligned penetration testing for networks, web applications, and cloud environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Request a Penetration Test
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
