import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/ransomware-recovery")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Ransomware Recovery Strategy | Real-World Attack Scenario",
      description: "Discover exactly how ransomware operators execute double-extortion attacks, and how robust BCDR and immutable backups ensure rapid recovery without paying the ransom.",
      path: "/resources/ransomware-recovery",
      keywords: "Ransomware recovery UK, how to stop ransomware attacks, immutable backups, BCDR disaster recovery",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "Ransomware Recovery", path: "/resources/ransomware-recovery" },
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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-400 block mb-6">
            / INCIDENT RESPONSE SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Surviving Ransomware: The Anatomy of a Cyber Attack
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            It only takes one click. Explore how modern ransomware gangs orchestrate devastating double-extortion attacks—and how to ensure your business survives without paying a dime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>The Modern Ransomware Threat</h2>
          <p>
            Ransomware has evolved from simple automated viruses into highly targeted, human-operated campaigns. Today’s threat actors don't just encrypt your files; they steal them first. This is known as <strong>double-extortion</strong>. If you refuse to pay the ransom to decrypt your files, they threaten to leak your sensitive customer data to the public internet, inviting massive GDPR fines and reputational ruin.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>Real-World Scenario: The Friday Night Encryption</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl my-8">
            <h3 className="mt-0 text-slate-900">Phase 1: Infiltration (Wednesday, 10:00 AM)</h3>
            <p className="text-slate-700">
              An employee receives a highly convincing email purporting to be from the company's payroll provider. They click the link to "Verify Tax Details" and inadvertently download a trojan. The attacker silently establishes a foothold on the network.
            </p>

            <h3 className="text-slate-900">Phase 2: Lateral Movement (Thursday, 3:00 PM)</h3>
            <p className="text-slate-700">
              The attacker quietly maps the corporate network, locates the central file servers, and identifies the connected backup drives. They begin slowly exfiltrating gigabytes of sensitive client data to an off-shore server.
            </p>

            <h3 className="text-slate-900">Phase 3: Detonation (Friday, 11:30 PM)</h3>
            <p className="text-slate-700">
              Waiting until the IT team has logged off for the weekend, the attacker deploys the encryption payload. Within minutes, every operational server, database, and connected backup drive is locked. A digital ransom note appears on every screen demanding £500,000 in Bitcoin.
            </p>
          </div>

          <h2>The Recovery: Why "Immutable" Backups Matter</h2>
          <p>
            In the scenario above, standard backups fail because the attacker encrypts them alongside the production data. A true Business Continuity and Disaster Recovery (BCDR) strategy relies on <strong>Immutable Backups</strong>.
          </p>
          <p>
            An immutable backup cannot be altered, deleted, or encrypted by anyone—not even an administrator with full network privileges—for a set period of time. 
          </p>
          <p>
            If the victim in our scenario had an immutable BCDR appliance managed by Dastute, the recovery would look entirely different:
          </p>
          <ul>
            <li><strong>Immediate Isolation:</strong> Endpoint Detection and Response (EDR) software instantly detects the rapid file encryption and physically isolates the infected machines from the network to stop the spread.</li>
            <li><strong>Instant Failover:</strong> Rather than spending days reinstalling operating systems and downloading data from the cloud, the BCDR appliance instantly boots up a virtualized copy of the server from the last clean snapshot (e.g., Friday at 11:00 PM).</li>
            <li><strong>Zero Ransom Paid:</strong> The business is operational again within 15 minutes, with zero data loss, entirely circumventing the attacker's leverage.</li>
          </ul>

          <div className="mt-16 p-8 bg-slate-900 rounded-2xl border border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 mt-0">Could your business survive an attack today?</h3>
            <p className="text-slate-300 mb-8">
              Don't wait for the ransom note to find out. Our experts can audit your existing backup strategy and deploy military-grade BCDR solutions to guarantee your operational resilience.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-colors">
              Evaluate My Backups
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
