import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/bcdr-guide")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Business Continuity & Disaster Recovery (BCDR) Guide",
      description: "Learn the difference between simple backups and a true BCDR strategy. Explore a real-world server failure scenario and instantaneous failover.",
      path: "/resources/bcdr-guide",
      keywords: "business continuity disaster recovery, BCDR vs backups, instantaneous failover, RTO and RPO explained",
    }),
    scripts: [
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
    </SiteLayout>
  );
}
