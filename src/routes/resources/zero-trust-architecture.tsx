import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/zero-trust-architecture")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What is Zero Trust Architecture? | Real-World Cybersecurity Scenario",
      description: "Understand why perimeter defense is dead. Explore a real-world scenario of how Zero Trust Architecture prevents devastating data breaches by enforcing continuous authentication.",
      path: "/resources/zero-trust-architecture",
      keywords: "Zero Trust Architecture UK, what is zero trust security, zero trust vs VPN, continuous authentication",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "IT Glossary", path: "/resources/glossary" },
            { name: "Zero Trust Architecture", path: "/resources/zero-trust-architecture" },
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
            / REAL-WORLD SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Why Perimeter Defense is Dead: The Reality of Zero Trust
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The old way of securing a network was like a castle with a moat—hard to get in, but once inside, you had free rein. Zero Trust changes the paradigm to "never trust, always verify."
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>The Legacy Approach: The VPN Illusion</h2>
          <p>
            For two decades, businesses relied on Virtual Private Networks (VPNs). If an employee needed to access the corporate network from a coffee shop, they connected to the VPN. Once authenticated, the network assumed they were trustworthy. They were "inside the moat."
          </p>
          <p>
            <strong>The fundamental flaw:</strong> If a hacker steals that employee's VPN credentials, they too are inside the moat. Worse, because legacy networks are often "flat," the hacker can move laterally from the employee's email server directly into the company's financial databases.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>Real-World Scenario: The 2:00 PM Attack</h2>
          <div className="bg-slate-50 border-l-4 border-blue-500 p-8 rounded-r-xl my-8">
            <h3 className="mt-0 text-slate-900">The Setup</h3>
            <p className="text-slate-700">
              Sarah, a finance director, is working remotely. Her laptop is compromised by malware hidden in a seemingly harmless PDF attachment. The attacker silently harvests her active session tokens.
            </p>
            
            <h3 className="text-slate-900">Without Zero Trust</h3>
            <p className="text-slate-700">
              The attacker uses Sarah's credentials to log into the corporate VPN. The perimeter firewall waves them through. Because the network trusts any user on the VPN, the attacker immediately pivots to the company's central file server and begins exfiltrating sensitive client data. By the time the breach is detected 45 days later, the damage is catastrophic.
            </p>

            <h3 className="text-slate-900">With Zero Trust Architecture</h3>
            <p className="text-slate-700 mb-0">
              The attacker attempts to use Sarah's credentials. However, the Zero Trust broker analyzes multiple data points in real-time. It notices that the login request is coming from an unrecognized IP address, and the device lacks the company's mandatory security certificates. <strong>The request is instantly denied.</strong> Even if the attacker bypassed that step, Zero Trust uses micro-segmentation, meaning Sarah's account only has access to specific finance apps—the attacker cannot move laterally to the central file server.
            </p>
          </div>

          <h2>The 3 Pillars of Zero Trust</h2>
          <ul>
            <li><strong>Continuous Authentication:</strong> Identity isn't verified just once at login; it's verified continuously based on context (location, device health, user behavior).</li>
            <li><strong>Least Privilege Access:</strong> Users are only granted the bare minimum permissions required to perform their specific job function.</li>
            <li><strong>Micro-Segmentation:</strong> The network is divided into tiny, isolated secure zones to completely prevent lateral movement by malicious actors.</li>
          </ul>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Ready to secure your hybrid workforce?</h3>
            <p className="text-slate-600 mb-8">
              Transitioning to a Zero Trust architecture doesn't require ripping out all your existing infrastructure. Our cybersecurity experts can design a phased implementation plan.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors">
              Request a Security Audit
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
