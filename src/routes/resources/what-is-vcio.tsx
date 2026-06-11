import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/what-is-vcio")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is a vCIO? Virtual Chief Information Officer Guide",
      description: "Learn what a vCIO (Virtual Chief Information Officer) does, how they differ from an IT Manager, and why scaling businesses need strategic technology leadership.",
      path: "/resources/what-is-vcio",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What is a vCIO? Virtual Chief Information Officer Guide",
            description: "Learn what a vCIO (Virtual Chief Information Officer) does, how they differ from an IT Manager, and why scaling businesses need strategic technology leadership.",
            datePublished: "2026-05-27T06:32:43.636Z",
            authorName: "Sanjay Dastute",
            path: "/resources/what-is-vcio",
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
            { name: "What is a vCIO?", path: "/resources/what-is-vcio" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/what-is-vcio", [
            {
              question: "What does a vCIO do?",
              answer: "A vCIO (Virtual Chief Information Officer) is a highly experienced technology consultant who provides board-level strategic IT guidance. Unlike a standard IT manager who fixes daily technical problems, a vCIO aligns your technology infrastructure with your long-term business goals, oversees IT budgeting, manages cybersecurity risk, and drives digital transformation initiatives.",
            },
            {
              question: "What is the difference between an IT Manager and a vCIO?",
              answer: "The difference is focus. An IT Manager is tactical; they ensure servers are running, laptops are provisioned, and daily helpdesk tickets are resolved. A vCIO is strategic; they analyze business processes, identify technological competitive advantages, negotiate with enterprise software vendors, and present 3-to-5 year technology roadmaps to the board of directors.",
            },
            {
              question: "How much does a vCIO cost compared to a full-time CIO?",
              answer: "A full-time Chief Information Officer in the UK commands a salary between £120,000 and £250,000 per year, plus benefits. A vCIO provides the exact same strategic expertise on a fractional or retainer basis, typically costing a fraction of a full-time salary. This allows small and mid-sized enterprises to access top-tier leadership without the massive overhead.",
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
            / Strategic Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            What is a vCIO? The Strategic Guide
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Discover how a Virtual Chief Information Officer bridges the gap between daily IT support and long-term business strategy, helping ambitious companies scale securely without the overhead of a £150k+ executive hire.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              Many small and medium-sized enterprises (SMEs) eventually reach a critical inflection point. They have outgrown their basic IT support, but they cannot justify the £120,000 to £250,000 salary required to hire a full-time Chief Information Officer (CIO). The solution is a vCIO.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Defining the vCIO Role</h2>
            <p>
              A <strong>Virtual Chief Information Officer (vCIO)</strong> is an outsourced, highly experienced executive who acts as your company's strategic IT advisor. Unlike a standard IT support engineer who fixes broken laptops, a vCIO sits at the boardroom table. They ensure that every technology investment directly supports your company's revenue goals, operational efficiency, and risk management strategy.
            </p>
            <p>
              Typically provided as a premium service by top-tier Managed Service Providers (MSPs), a vCIO works on a fractional basis—giving you access to enterprise-grade leadership for a predictable monthly fee.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Difference: vCIO vs. IT Manager</h2>
            <p>
              Understanding the distinction between tactical support and strategic leadership is vital.
            </p>

            <div className="overflow-x-auto my-10">
              <table className="min-w-full border-collapse border border-slate-200 bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-slate-900">Area of Focus</th>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-slate-900 w-1/3 text-slate-600">IT Manager (Tactical)</th>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-blue-900 w-1/3">vCIO (Strategic)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Primary Goal</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Keep systems running and users happy.</td>
                    <td className="border border-slate-200 px-6 py-4 text-blue-800 font-medium">Use technology to drive business growth.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Time Horizon</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Today / This Week (Fixing immediate issues)</td>
                    <td className="border border-slate-200 px-6 py-4 text-blue-800 font-medium">1 to 5 Years (Roadmapping the future)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Budgeting</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Asking for budget when things break.</td>
                    <td className="border border-slate-200 px-6 py-4 text-blue-800 font-medium">Proactive annual budgeting and ROI analysis.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Cybersecurity</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Installs antivirus and firewalls.</td>
                    <td className="border border-slate-200 px-6 py-4 text-blue-800 font-medium">Manages corporate risk, compliance, and policies.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Core Responsibilities of a vCIO</h2>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">1. IT Roadmapping & Strategy</h3>
            <p>
              A vCIO will audit your current infrastructure and create a multi-year roadmap. If your goal is to acquire a competitor in two years, the vCIO ensures your cloud architecture is scalable enough to instantly absorb 50 new users without catastrophic downtime.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">2. Vendor Management & Negotiation</h3>
            <p>
              Are you overpaying for Microsoft 365 licensing, Salesforce, or your internet leased lines? A vCIO speaks the language of technology vendors. They evaluate contracts, negotiate enterprise pricing, and consolidate overlapping software to immediately reduce operational costs.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">3. Risk Management & Compliance</h3>
            <p>
              Cybersecurity is no longer just an IT problem; it is a board-level risk. A vCIO ensures your organization complies with GDPR, passes Cyber Essentials Plus, and maintains the stringent cybersecurity controls required by your cyber liability insurance policies.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">4. Disaster Recovery Planning</h3>
            <p>
              If your primary office burns down or your servers are hit by ransomware, how long will it take to get the business operational again? A vCIO calculates your Recovery Time Objective (RTO) and Recovery Point Objective (RPO), ensuring an immutable disaster recovery plan is documented and tested regularly.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Does Your Business Need a vCIO?</h2>
            <p>You likely need a vCIO if:</p>
            <ul>
              <li>Technology feels like a constant frustrating expense rather than a competitive advantage.</li>
              <li>You are planning significant growth, mergers, or acquisitions.</li>
              <li>You operate in a highly regulated industry (finance, healthcare, legal) and worry about compliance.</li>
              <li>The board of directors lacks a clear understanding of the company's cybersecurity risk.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">vCIO FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What does a vCIO do?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A vCIO (Virtual Chief Information Officer) is a highly experienced technology consultant who provides board-level strategic IT guidance. Unlike a standard IT manager who fixes daily technical problems, a vCIO aligns your technology infrastructure with your long-term business goals, oversees IT budgeting, manages cybersecurity risk, and drives digital transformation initiatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between an IT Manager and a vCIO?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The difference is focus. An IT Manager is tactical; they ensure servers are running, laptops are provisioned, and daily helpdesk tickets are resolved. A vCIO is strategic; they analyze business processes, identify technological competitive advantages, negotiate with enterprise software vendors, and present 3-to-5 year technology roadmaps to the board of directors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How much does a vCIO cost compared to a full-time CIO?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A full-time Chief Information Officer in the UK commands a salary between £120,000 and £250,000 per year, plus benefits. A vCIO provides the exact same strategic expertise on a fractional or retainer basis, typically costing a fraction of a full-time salary. This allows small and mid-sized enterprises to access top-tier leadership without the massive overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Upgrade Your Technology Leadership
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's Managed IT Services include access to elite vCIO consultants. Align your tech with your ambitions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Speak to a vCIO
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
