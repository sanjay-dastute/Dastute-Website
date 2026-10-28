import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FaqSection } from "@/components/FaqSection";
import { FAQS } from "@/lib/faqs";
import { buildBlogPostingJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, buildStandardPageHead } from "@/lib/seo";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/resources/soc-explained")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is a SOC? Security Operations Center Explained",
      description: "Learn how a 24/7 Security Operations Center (SOC) detects, analyzes, and responds to active cyber threats while you sleep. A real-world triage scenario.",
      path: "/resources/soc-explained",

    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What Is a SOC? Security Operations Centre Explained",
            description: "Learn how a 24/7 Security Operations Center (SOC) detects, analyzes, and responds to active cyber threats while you sleep. A real-world triage scenario.",
            datePublished: "2026-06-11T16:22:14+01:00",
            dateModified: "2026-10-28T00:00:00+00:00",
            authorName: "Sanjay Dastute",
            path: "/resources/soc-explained",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/resources/soc-explained", FAQS["soc"])),
      },
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
              <Icon name="fa-arrow-left" className="mr-2" /> Back to IT Glossary
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

          <h2>What Does a SOC Actually Do?</h2>
          <ul>
            <li><strong>Continuous monitoring:</strong> watching logs and alerts from endpoints, servers, cloud platforms, email and firewalls around the clock.</li>
            <li><strong>Threat detection:</strong> using SIEM correlation rules, threat intelligence and behavioural analytics to separate real attacks from noise.</li>
            <li><strong>Triage and investigation:</strong> analysts confirm whether an alert is malicious, establish its scope and identify the affected systems.</li>
            <li><strong>Incident response:</strong> containing threats by isolating devices, disabling accounts and blocking malicious addresses.</li>
            <li><strong>Threat hunting:</strong> proactively searching for attackers who have evaded automated detection.</li>
            <li><strong>Reporting and improvement:</strong> incident reports, trend analysis and recommendations that strengthen your defences over time.</li>
          </ul>

          <h2>Inside the SOC: Tier 1, 2 and 3 Analysts</h2>
          <table>
            <thead>
              <tr><th>Tier</th><th>Role</th><th>Typical responsibilities</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Tier 1</strong></td><td>Triage analyst</td><td>Reviews incoming alerts, filters false positives and escalates genuine threats</td></tr>
              <tr><td><strong>Tier 2</strong></td><td>Incident responder</td><td>Investigates confirmed incidents, determines scope and leads containment</td></tr>
              <tr><td><strong>Tier 3</strong></td><td>Threat hunter / specialist</td><td>Hunts for advanced threats, performs malware analysis and tunes detections</td></tr>
            </tbody>
          </table>

          <h2>The Technology Behind a SOC</h2>
          <ul>
            <li><strong>SIEM (Security Information and Event Management):</strong> collects and correlates logs from across your environment, for example Microsoft Sentinel or Splunk.</li>
            <li><strong>EDR / XDR:</strong> agents on endpoints that detect malicious behaviour and allow remote isolation, such as Microsoft Defender for Endpoint, CrowdStrike Falcon or SentinelOne.</li>
            <li><strong>SOAR:</strong> automation that runs response playbooks in seconds, such as disabling a compromised account.</li>
            <li><strong>Threat intelligence feeds:</strong> up-to-date information on attacker infrastructure, malware and techniques, often mapped to the MITRE ATT&amp;CK framework.</li>
          </ul>

          <h2>In-House SOC vs Managed SOC</h2>
          <table>
            <thead>
              <tr><th></th><th>In-house SOC</th><th>Managed SOC (SOC-as-a-Service)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>24/7 coverage</strong></td><td>Needs a large team working shifts</td><td>Included as standard</td></tr>
              <tr><td><strong>Set-up time</strong></td><td>Many months to hire and build</td><td>Weeks to onboard</td></tr>
              <tr><td><strong>Cost</strong></td><td>Salaries, tools and training</td><td>Predictable subscription</td></tr>
              <tr><td><strong>Expertise</strong></td><td>Limited to the people you hire</td><td>Shared specialists and threat intelligence across many clients</td></tr>
              <tr><td><strong>Best for</strong></td><td>Large enterprises with dedicated security budgets</td><td>SMEs and mid-market businesses</td></tr>
            </tbody>
          </table>

          <h2>How to Choose a Managed SOC Provider</h2>
          <ul>
            <li>Confirm that monitoring is genuinely staffed 24/7, including weekends and bank holidays.</li>
            <li>Ask whether the SOC can <strong>respond</strong>, for example by isolating devices, or only alerts you.</li>
            <li>Check which of your systems will be covered: endpoints, Microsoft 365, cloud, firewalls and servers.</li>
            <li>Ask for sample incident reports and agreed response times.</li>
            <li>Make sure the service supports your compliance needs, such as <Link to="/resources/iso-27001-checklist">ISO 27001</Link> and UK GDPR.</li>
          </ul>
          <p>
            A SOC works best alongside preventative controls such as <Link to="/resources/zero-trust-architecture">Zero Trust</Link> and a tested <Link to="/resources/ransomware-recovery">ransomware recovery plan</Link>.
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
      <FaqSection items={FAQS["soc"]} />
    </SiteLayout>
  );
}
