import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/soc-explained")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is a SOC? Security Operations Center Explained",
      description: "Learn how a 24/7 Security Operations Center (SOC) detects, analyzes, and responds to active cyber threats while you sleep. A real-world triage scenario.",
      path: "/resources/soc-explained",
      keywords: "what is a SOC, security operations center UK, outsourced SOC services, 24/7 cyber monitoring",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "SOC Explained", path: "/resources/soc-explained" },
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
            / THREAT RESPONSE SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Inside the SOC: How We Hunt Threats at 3:00 AM
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Cybercriminals don't work 9-to-5, which means your security can't either. Discover exactly what happens inside a Security Operations Center when an alarm triggers in the middle of the night.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>What is a Security Operations Center (SOC)?</h2>
          <p>
            A Security Operations Center (SOC) is a centralized command hub where a dedicated team of cybersecurity analysts uses specialized technology to continuously monitor an organization's IT infrastructure. Their singular goal is to detect, analyze, and respond to cybersecurity incidents before they cause business disruption.
          </p>
          <p>
            Most small to medium enterprises cannot afford to build a dedicated 24/7 SOC internally—it requires millions in software and a large team of highly paid analysts to provide round-the-clock coverage. Instead, they leverage an outsourced or "Managed SOC" provided by an MSP.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>Real-World Scenario: The Sunday Morning Breach Attempt</h2>
          
          <div className="bg-slate-50 border-l-4 border-slate-800 p-8 rounded-r-xl my-8">
            <h3 className="mt-0 text-slate-900">03:14 AM – The Alert Fires</h3>
            <p className="text-slate-700">
              The SIEM (Security Information and Event Management) system detects anomalous behavior on a client's London-based server. A legitimate administrative account is attempting to execute a PowerShell script that disables Windows Defender. An automated, high-priority ticket is instantly routed to the SOC dashboard.
            </p>

            <h3 className="text-slate-900">03:16 AM – Triage & Analysis</h3>
            <p className="text-slate-700">
              A Tier 1 SOC Analyst grabs the ticket. They review the telemetry logs and see that the administrative login originated from an IP address in Eastern Europe, despite the client's entire workforce being based in the UK. The analyst correlates this with threat intelligence feeds confirming the IP is associated with an active Initial Access Broker (IAB).
            </p>

            <h3 className="text-slate-900">03:19 AM – Containment</h3>
            <p className="text-slate-700">
              Recognizing an active intrusion attempt, the analyst escalates to Tier 2. The SOC immediately issues a command via the Endpoint Detection and Response (EDR) agent to physically quarantine the compromised server, severing its connection to the internet and the rest of the corporate network. The threat actor is locked out.
            </p>

            <h3 className="text-slate-900">03:35 AM – Eradication & Reporting</h3>
            <p className="text-slate-700 mb-0">
              The SOC team resets the compromised administrative credentials globally, purges the malicious script from the server, and restores the machine to a clean state. An incident report is generated and placed in the client's inbox for when they wake up on Monday morning.
            </p>
          </div>

          <h2>The Alternative: The Unmanaged Business</h2>
          <p>
            If the business in that scenario did not have a 24/7 SOC, the attack would have progressed unhindered. By Monday morning, the attacker would have spent 30 hours inside the network, deploying ransomware across all servers and stealing customer data. The cost of recovery would be astronomical.
          </p>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Who is watching your network tonight?</h3>
            <p className="text-slate-600 mb-8">
              Protect your organization with enterprise-grade 24/7 monitoring at a fraction of the cost of an internal team. Speak to our security architects today.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors">
              Discuss Managed SOC Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
