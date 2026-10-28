import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FaqSection } from "@/components/FaqSection";
import { FAQS } from "@/lib/faqs";
import { buildBlogPostingJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/bcdr-guide")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Business Continuity & Disaster Recovery (BCDR) Guide",
      description: "Learn the difference between simple backups and a true BCDR strategy. Explore a real-world server failure scenario and instantaneous failover.",
      path: "/resources/bcdr-guide",

    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "Business Continuity & Disaster Recovery (BCDR) Guide",
            description: "Learn the difference between simple backups and a true BCDR strategy. Explore a real-world server failure scenario and instantaneous failover.",
            datePublished: "2026-06-11T16:22:14+01:00",
            dateModified: "2026-10-28T00:00:00+00:00",
            authorName: "Sanjay Dastute",
            path: "/resources/bcdr-guide",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/resources/bcdr-guide", FAQS["bcdr"])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "BCDR Guide", path: "/resources/bcdr-guide" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-32 pb-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Link to="/resources/glossary" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <i className="fas fa-arrow-left mr-2"></i> Back to IT Glossary
            </Link>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / INFRASTRUCTURE SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Why Standard Backups Aren't Enough Anymore
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            If your primary server dies right now, how many days will your business be offline? Explore the critical difference between generic data backups and true Business Continuity and Disaster Recovery (BCDR).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>What Is BCDR?</h2>
          <p>
            <strong>BCDR (business continuity and disaster recovery) is the combined plan that keeps a business operating during a disruption and restores its IT systems and data afterwards.</strong> Business continuity covers people, processes and communication; disaster recovery covers the technical restoration of systems, applications and data.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>The RTO and RPO Equation</h2>
          <p>
            Many businesses believe they are protected because they back up their data to the cloud every night. But having the data and actually being able to use it are two completely different things.
          </p>
          <p>
            A true BCDR strategy is defined by two critical metrics:
          </p>
          <ul>
            <li><strong>Recovery Point Objective (RPO):</strong> How much data are you willing to lose? If you only back up at midnight, a server crash at 4:00 PM means you lose 16 hours of work.</li>
            <li><strong>Recovery Time Objective (RTO):</strong> How long can your business afford to be offline? If you have to order a new server, install an OS, and download 5 terabytes of data from a cloud backup, your RTO is measured in <em>days or weeks</em>.</li>
          </ul>

          <hr className="my-12 border-slate-200" />

          <h2>Real-World Scenario: The Hardware Catastrophe</h2>
          
          <div className="bg-slate-50 border-l-4 border-blue-500 p-8 rounded-r-xl my-8">
            <h3 className="mt-0 text-slate-900">The Failure</h3>
            <p className="text-slate-700">
              It is 10:30 AM on a Tuesday, the busiest day of the quarter for a mid-sized logistics firm. Suddenly, the motherboard on their primary database server catastrophically shorts out. The entire warehouse management system crashes. Trucks are queued outside, unable to be loaded or dispatched.
            </p>

            <h3 className="text-slate-900">With "Standard Backups"</h3>
            <p className="text-slate-700">
              The IT provider confirms the data is safe in the cloud. However, they must order emergency replacement hardware (arriving tomorrow), configure it, and then begin downloading 8 TB of SQL databases over a 1 Gbps connection. The warehouse remains completely paralyzed for 72 hours, resulting in devastating financial losses and furious clients.
            </p>

            <h3 className="text-slate-900">With True BCDR</h3>
            <p className="text-slate-700 mb-0">
              The logistics firm utilizes an on-premise BCDR appliance that takes snapshot backups every 15 minutes (ensuring a 15-minute RPO). When the primary server dies, the IT team logs into the BCDR appliance and clicks "Spin up." Within 2 minutes, a virtualized copy of the exact server is running directly on the BCDR hardware. The warehouse operations resume seamlessly. The firm orders a replacement server at their leisure and migrates the virtual server back when ready, experiencing near-zero downtime.
            </p>
          </div>

          <h2>Instantaneous Cloud Failover</h2>
          <p>
            What happens if the entire office building floods or burns down, destroying both the primary server <em>and</em> the local BCDR appliance? 
          </p>
          <p>
            Modern BCDR solutions replicate every local snapshot to a secure, geographically distant data center. In the event of a total site disaster, your IT provider can spin up your entire server infrastructure within the cloud, allowing your team to access their critical applications securely from home via VPN while a new physical office is secured.
          </p>

          <h2>RTO and RPO Explained</h2>
          <p>
            Two numbers drive every BCDR plan:
          </p>
          <ul>
            <li><strong>Recovery Time Objective (RTO):</strong> the maximum time a system can be unavailable before the impact becomes unacceptable. An RTO of 4 hours means the system must be running again within 4 hours.</li>
            <li><strong>Recovery Point Objective (RPO):</strong> the maximum amount of data you can afford to lose, measured in time. An RPO of 1 hour means backups or replication must run at least hourly.</li>
          </ul>
          <p>
            Lower RTOs and RPOs cost more to achieve, so set them per system based on business impact rather than applying one target to everything.
          </p>
          <table>
            <thead>
              <tr><th>System tier</th><th>Example</th><th>Typical approach</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Critical</strong></td><td>Payment processing, core ERP</td><td>Continuous replication to a standby environment; recovery in minutes</td></tr>
              <tr><td><strong>Important</strong></td><td>Email, CRM, file storage</td><td>Frequent backups with rapid cloud restore; recovery in hours</td></tr>
              <tr><td><strong>Standard</strong></td><td>Archives, internal tools</td><td>Daily backups; recovery within a day or two</td></tr>
            </tbody>
          </table>

          <h2>How to Build a BCDR Plan in 6 Steps</h2>
          <ol>
            <li><strong>Business impact analysis.</strong> List your critical business functions, the systems they depend on and the cost of each hour of downtime.</li>
            <li><strong>Risk assessment.</strong> Identify likely threats: ransomware, hardware failure, cloud outages, power loss, flooding or loss of key staff.</li>
            <li><strong>Set RTOs and RPOs</strong> for each system based on the impact analysis.</li>
            <li><strong>Design the recovery strategy.</strong> Choose backup, replication and failover technology that meets those targets, including at least one immutable copy.</li>
            <li><strong>Document the plan.</strong> Record roles, contact details, step-by-step recovery runbooks and communication templates for staff, customers and regulators.</li>
            <li><strong>Test and update.</strong> Run tabletop exercises and real restore tests at least annually, and update the plan whenever systems or people change.</li>
          </ol>

          <h2>Cloud Disaster Recovery (DRaaS)</h2>
          <p>
            Disaster Recovery as a Service replicates your servers to a cloud platform such as Azure or AWS, so they can be started there if your primary environment fails. It removes the need for a second physical data centre and lets SMEs achieve recovery times that once required enterprise budgets. See our <Link to="/resources/cloud-migration-cost-guide">cloud migration cost guide</Link> for typical cloud pricing considerations.
          </p>

          <h2>BCDR Testing: The Step Most Businesses Skip</h2>
          <p>
            An untested plan usually fails at the worst moment: passwords are missing, runbooks are out of date or backups turn out to be incomplete. Schedule:
          </p>
          <ul>
            <li><strong>Quarterly</strong> restore tests of individual files and systems.</li>
            <li><strong>Annual</strong> full failover or tabletop exercises with leadership.</li>
            <li><strong>After every major change</strong>, such as a new system, a migration or key staff leaving.</li>
          </ul>

          <h2>BCDR and Compliance</h2>
          <p>
            Business continuity is a requirement in <Link to="/resources/iso-27001-checklist">ISO 27001</Link> (information security aspects of business continuity) and is expected by regulators, insurers and enterprise customers during supplier due diligence. A documented, tested BCDR plan is also your strongest defence against <Link to="/resources/ransomware-recovery">ransomware</Link>.
          </p>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Calculate Your True Cost of Downtime</h3>
            <p className="text-slate-600 mb-8">
              Are your current backups providing a false sense of security? Contact us today to build a BCDR strategy that guarantees near-instantaneous recovery.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors">
              Speak to a BCDR Architect
            </Link>
          </div>
        </div>
      </section>
      <FaqSection items={FAQS["bcdr"]} />
    </SiteLayout>
  );
}
