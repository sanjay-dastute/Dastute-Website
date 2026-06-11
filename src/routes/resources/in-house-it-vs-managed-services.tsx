import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/in-house-it-vs-managed-services")({
  head: () => ({
    ...buildStandardPageHead({
      title: "In-house IT vs Managed Services UK | 2026 Comparison Guide",
      description: "Compare the true costs, security benefits, and scalability of in-house IT vs managed IT services to make the right choice for your UK business.",
      path: "/resources/in-house-it-vs-managed-services",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "In-house IT vs Managed Services UK | 2026 Comparison Guide",
            description: "Compare the true costs, security benefits, and scalability of in-house IT vs managed IT services to make the right choice for your UK business.",
            datePublished: "2026-04-02T08:43:38.181Z",
            authorName: "Sanjay Dastute",
            path: "/resources/in-house-it-vs-managed-services",
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
            { name: "In-House IT vs Managed Services", path: "/resources/in-house-it-vs-managed-services" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/in-house-it-vs-managed-services", [
            {
              question: "Is it cheaper to outsource IT or hire internally?",
              answer: "For small to medium businesses, outsourcing to a Managed Service Provider (MSP) is significantly cheaper than hiring internally. A single senior IT engineer in the UK costs upwards of £60,000 per year, whereas comprehensive managed IT services typically cost a fraction of that amount while providing access to an entire team of specialists.",
            },
            {
              question: "Can we use both in-house IT and a managed service provider?",
              answer: "Yes, utilizing both is called co-managed IT. In this model, your internal IT team handles day-to-day user support and strategic projects, while the external MSP provides 24/7 network monitoring, advanced cybersecurity (SOC), and high-level infrastructure support. This hybrid approach is highly effective for scaling enterprises.",
            },
            {
              question: "What are the hidden costs of in-house IT?",
              answer: "The hidden costs of in-house IT include recruitment fees, ongoing technical training, employee benefits, holiday/sick cover, and the expensive software licenses required for enterprise-grade monitoring and cybersecurity tools. These costs are completely eliminated when partnering with a fixed-fee Managed Service Provider.",
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
            / Buyer's Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            In-House IT vs Managed Services: Which is right for your business?
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            A comprehensive, unbiased comparison of the true costs, security implications, and scalability of building an internal IT department versus partnering with a Managed Service Provider (MSP).
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              As your business scales, relying on a single "IT guy" or ad-hoc support quickly becomes a massive operational risk. The decision to either hire a full in-house IT department or outsource to a Managed Service Provider (MSP) is one of the most critical technology choices a Managing Director or CEO will make.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">1. The True Cost Comparison</h2>
            <p>
              When evaluating IT costs, businesses often mistakenly compare the salary of one internal IT manager against the monthly retainer of an MSP. This is a false equivalence. A single employee cannot provide 24/7 monitoring, advanced cybersecurity, strategic CIO-level advice, and daily helpdesk support simultaneously.
            </p>
            
            <div className="overflow-x-auto my-10">
              <table className="min-w-full border-collapse border border-slate-200 bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-slate-900">Cost Factor</th>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-slate-900 w-1/3">In-House IT Team</th>
                    <th className="border border-slate-200 px-6 py-4 text-left text-sm font-bold text-slate-900 w-1/3">Managed Services (MSP)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Salaries & Benefits</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">High (Multiple £40k-£80k salaries, pensions, NI)</td>
                    <td className="border border-slate-200 px-6 py-4 text-emerald-600 font-medium">None (Included in monthly fee)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Tooling & Licenses</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Expensive (You buy EDR, RMM, backup tools)</td>
                    <td className="border border-slate-200 px-6 py-4 text-emerald-600 font-medium">Included (Enterprise tools provided)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Training & Certs</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Costly & ongoing requirement</td>
                    <td className="border border-slate-200 px-6 py-4 text-emerald-600 font-medium">MSP responsibility</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Holiday/Sick Cover</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">Vulnerable gaps in support</td>
                    <td className="border border-slate-200 px-6 py-4 text-emerald-600 font-medium">Guaranteed 24/7/365 coverage</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-6 py-4 font-semibold text-slate-800">Financial Model</td>
                    <td className="border border-slate-200 px-6 py-4 text-slate-600">CapEx (Unpredictable spikes)</td>
                    <td className="border border-slate-200 px-6 py-4 text-emerald-600 font-medium">OpEx (Predictable flat-fee)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2. The Skills Gap & Cybersecurity</h2>
            <p>
              Modern IT is incredibly complex. Managing a cloud migration in Microsoft Azure requires an entirely different skill set than configuring a Meraki firewall or hunting for ransomware threats on an endpoint. 
            </p>
            <p>
              <strong>In-House Vulnerability:</strong> It is nearly impossible for a small internal team to be experts in everything. They become "jacks of all trades, masters of none," which leaves dangerous gaps in your cybersecurity posture. Furthermore, when your primary IT manager leaves the company, they take all the undocumented institutional knowledge with them.
            </p>
            <p>
              <strong>The MSP Advantage:</strong> A premium MSP provides fractional access to a deep bench of specialists. You get a Cloud Architect, a Cybersecurity Analyst, a Network Engineer, and a virtual CIO (vCIO)—all for less than the cost of one mid-level internal hire.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2 mt-0">The Co-Managed Alternative</h3>
              <p className="text-blue-800 mb-0">
                If you already have internal IT staff, you don't need to fire them to benefit from an MSP. <strong>Co-managed IT</strong> allows your internal team to handle user support and physical hardware, while the MSP handles 24/7 server monitoring, advanced cybersecurity, and strategic consulting.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">3. Scalability & Agility</h2>
            <p>
              When a business relying on internal IT wins a massive new contract and needs to onboard 50 new employees, the IT department often becomes the bottleneck. Recruiting, interviewing, and training new IT staff takes months.
            </p>
            <p>
              With Managed Services, scalability is instantaneous. Need to deploy 50 new secure laptops tomorrow? An MSP has the procurement pipelines, the automated provisioning scripts (like Windows Autopilot), and the bench strength to execute rapidly. You simply adjust your monthly licensing up or down based on your exact headcount.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Conclusion: Making the Decision</h2>
            <ul className="space-y-4 mb-10">
              <li className="flex gap-3">
                <i className="fas fa-arrow-right text-blue-600 mt-1"></i>
                <span><strong>Choose In-House IT if:</strong> You are a massive enterprise (1000+ employees) with specific proprietary software that requires constant, dedicated, on-site developer-level support.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-arrow-right text-blue-600 mt-1"></i>
                <span><strong>Choose Managed Services if:</strong> You are an ambitious SME (20-500 employees) that needs enterprise-grade cybersecurity, 24/7 reliability, and predictable IT budgets without the headache of managing technical recruitment.</span>
              </li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is it cheaper to outsource IT or hire internally?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                For small to medium businesses, outsourcing to a Managed Service Provider (MSP) is significantly cheaper than hiring internally. A single senior IT engineer in the UK costs upwards of £60,000 per year, whereas comprehensive managed IT services typically cost a fraction of that amount while providing access to an entire team of specialists.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can we use both in-house IT and a managed service provider?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, utilizing both is called co-managed IT. In this model, your internal IT team handles day-to-day user support and strategic projects, while the external MSP provides 24/7 network monitoring, advanced cybersecurity (SOC), and high-level infrastructure support. This hybrid approach is highly effective for scaling enterprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What are the hidden costs of in-house IT?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                The hidden costs of in-house IT include recruitment fees, ongoing technical training, employee benefits, holiday/sick cover, and the expensive software licenses required for enterprise-grade monitoring and cybersecurity tools. These costs are completely eliminated when partnering with a fixed-fee Managed Service Provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to explore Managed Services?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a transparent, no-obligation pricing estimate for supporting your entire organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              View Pricing
            </Link>
            <Link
              to="/request-audit"
              className="btn-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Request Free IT Audit
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
