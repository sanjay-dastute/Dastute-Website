import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FaqSection } from "@/components/FaqSection";
import { FAQS } from "@/lib/faqs";
import { buildBlogPostingJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd, buildPersonJsonLd, buildStandardPageHead } from "@/lib/seo";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/resources/zero-trust-architecture")({
  head: () => ({
    ...buildStandardPageHead({
      title: "What Is Zero Trust Architecture? A Real Scenario | Dastute",
      description: "What is Zero Trust architecture? A real-world scenario showing how continuous verification stops data breaches that perimeter security misses.",
      path: "/resources/zero-trust-architecture",

    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "What Is Zero Trust Architecture? A Real Scenario",
            description: "What is Zero Trust architecture? A real-world scenario showing how continuous verification stops data breaches that perimeter security misses.",
            datePublished: "2026-06-11T16:22:14+01:00",
            dateModified: "2026-10-28T00:00:00+00:00",
            authorName: "Sanjay Dastute",
            path: "/resources/zero-trust-architecture",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPersonJsonLd({
            name: "Sanjay Dastute",
            jobTitle: "Chief Technology Officer",
            path: "/team",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/resources/zero-trust-architecture", FAQS["zero-trust"])),
      },
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
              <Icon name="fa-arrow-left" className="mr-2" /> Back to IT Glossary
            </Link>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / REAL-WORLD SCENARIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Why Perimeter Defense is Dead: The Reality of Zero Trust
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The old way of securing a network was like a castle with a moat - hard to get in, but once inside, you had free rein. Zero Trust changes the paradigm to "never trust, always verify."
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>What Is Zero Trust Architecture?</h2>
          <p>
            <strong>Zero Trust architecture is a security model that never grants access based on network location.</strong> Every request to an application or piece of data is verified against the user's identity, the health of their device and the context of the request, every time, and users receive only the minimum access their role requires.
          </p>
          <p>
            The approach is formally defined in NIST Special Publication 800-207, and the UK's National Cyber Security Centre (NCSC) publishes zero trust architecture design principles for organisations moving away from VPN-centric networks.
          </p>

          <hr className="my-12 border-slate-200" />

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
              The attacker attempts to use Sarah's credentials. However, the Zero Trust broker analyzes multiple data points in real-time. It notices that the login request is coming from an unrecognized IP address, and the device lacks the company's mandatory security certificates. <strong>The request is instantly denied.</strong> Even if the attacker bypassed that step, Zero Trust uses micro-segmentation, meaning Sarah's account only has access to specific finance apps - the attacker cannot move laterally to the central file server.
            </p>
          </div>

          <h2>The 3 Pillars of Zero Trust</h2>
          <ul>
            <li><strong>Continuous Authentication:</strong> Identity isn't verified just once at login; it's verified continuously based on context (location, device health, user behavior).</li>
            <li><strong>Least Privilege Access:</strong> Users are only granted the bare minimum permissions required to perform their specific job function.</li>
            <li><strong>Micro-Segmentation:</strong> The network is divided into tiny, isolated secure zones to completely prevent lateral movement by malicious actors.</li>
          </ul>

          <h2>Zero Trust vs Traditional Perimeter Security</h2>
          <table>
            <thead>
              <tr><th></th><th>Perimeter (castle and moat)</th><th>Zero Trust</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Trust model</strong></td><td>Trusted once inside the network</td><td>Never trusted by default; verified on every request</td></tr>
              <tr><td><strong>Remote access</strong></td><td>VPN into the whole network</td><td>Per-application access through an identity-aware broker</td></tr>
              <tr><td><strong>Stolen password</strong></td><td>Attacker inherits broad access</td><td>Blocked by MFA, device checks and least privilege</td></tr>
              <tr><td><strong>Lateral movement</strong></td><td>Easy on a flat network</td><td>Contained by micro-segmentation</td></tr>
              <tr><td><strong>Visibility</strong></td><td>Focused on the network edge</td><td>Every access decision is logged and auditable</td></tr>
            </tbody>
          </table>

          <h2>How to Implement Zero Trust: A Phased Roadmap</h2>
          <p>
            Zero Trust is a journey, not a product you buy. Most UK SMEs reach a strong position in stages without replacing their existing infrastructure:
          </p>
          <ol>
            <li><strong>Identify what matters.</strong> Map your critical data, applications and the people who genuinely need them. This becomes your "protect surface".</li>
            <li><strong>Strengthen identity.</strong> Enforce multi-factor authentication for every user, consolidate on a single identity provider such as Microsoft Entra ID, and remove shared accounts.</li>
            <li><strong>Check device health.</strong> Only allow managed, patched and encrypted devices to reach business applications, using tools such as Microsoft Intune with conditional access.</li>
            <li><strong>Apply least privilege.</strong> Review permissions, remove standing admin rights and grant elevated access just-in-time when it is needed.</li>
            <li><strong>Segment the network.</strong> Separate servers, users and operational systems so a compromise in one zone cannot spread to another.</li>
            <li><strong>Replace the VPN.</strong> Move remote access to Zero Trust Network Access (ZTNA), which connects users to individual applications rather than the whole network.</li>
            <li><strong>Monitor continuously.</strong> Feed access logs into a SIEM and a 24/7 <Link to="/resources/soc-explained">Security Operations Centre</Link> so unusual behaviour is investigated in real time.</li>
          </ol>

          <h2>Common Zero Trust Mistakes</h2>
          <ul>
            <li><strong>Treating it as a product purchase.</strong> No single vendor delivers Zero Trust; it is an architecture built from identity, device, network and monitoring controls.</li>
            <li><strong>Leaving legacy exceptions in place.</strong> One old server that still accepts passwords without MFA becomes the attacker's way in.</li>
            <li><strong>Ignoring the user experience.</strong> Well-designed conditional access usually means fewer password prompts for staff on trusted devices, not more.</li>
            <li><strong>Forgetting third parties.</strong> Suppliers and contractors need the same verification and least-privilege rules as employees.</li>
          </ul>

          <h2>Zero Trust and UK Compliance</h2>
          <p>
            Zero Trust controls map directly onto the requirements of <Link to="/resources/cyber-essentials-guide">Cyber Essentials</Link> (secure configuration, user access control and malware protection) and support the access-control objectives in <Link to="/resources/iso-27001-checklist">ISO 27001</Link>. They also help demonstrate the "appropriate technical measures" that UK GDPR expects when you process personal data.
          </p>

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
      <FaqSection items={FAQS["zero-trust"]} />
    </SiteLayout>
  );
}
