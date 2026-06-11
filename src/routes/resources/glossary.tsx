import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/glossary")({
  head: () => ({
    ...buildStandardPageHead({
      title: "IT Glossary | A-Z Guide to Technology Terms | Dastute",
      description: "Confused by IT jargon? Use our comprehensive A-Z glossary of technology, cybersecurity, and software development terms explained in plain English.",
      path: "/resources/glossary",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "IT Glossary", path: "/resources/glossary" },
          ]),
        ),
      },
      // Using FAQ schema for Glossary terms is a highly effective AEO tactic to win "What is X" featured snippets.
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/glossary", glossaryTerms.map(t => ({
            question: `What is ${t.term}?`,
            answer: t.definition
          })))
        ),
      }
    ],
  }),
  component: Page,
});

const glossaryTerms = [
  {
    term: "API (Application Programming Interface)",
    definition: "A set of rules that allows two different software applications to talk to each other. For example, when you use PayPal to buy something on an e-commerce website, an API is what allows the store to securely communicate with PayPal. In modern enterprise architecture, APIs are the foundational building blocks that allow disparate systems (like an ERP and a bespoke mobile app) to share real-time data seamlessly.",
    link: "/services/custom-software",
  },
  {
    term: "BCDR (Business Continuity and Disaster Recovery)",
    definition: "A set of policies and procedures designed to ensure that an organization's critical business functions continue to operate during and after a disaster (such as a ransomware attack or hardware failure). True BCDR doesn't just back up data; it dictates exactly how quickly systems can be restored (Recovery Time Objective) and how much data loss is acceptable (Recovery Point Objective).",
    link: "/resources/bcdr-guide",
  },
  {
    term: "Blockchain",
    definition: "A digital ledger distributed across a network of computers. It records transactions immutably (meaning they cannot be altered or deleted), providing absolute transparency and security without the need for a central authority. It is widely used beyond cryptocurrency for smart contracts, supply chain provenance, and secure data sharing.",
    link: "/services/blockchain",
  },
  {
    term: "CI/CD (Continuous Integration / Continuous Deployment)",
    definition: "A software engineering practice where developers frequently merge code changes into a central repository (Continuous Integration), after which automated builds and tests are run. Continuous Deployment then automatically releases these validated changes to production environments, drastically speeding up the software release cycle and reducing bugs.",
    link: "/services/cloud",
  },
  {
    term: "Cloud Computing",
    definition: "The delivery of computing services (servers, storage, databases, networking, software) over the internet ('the cloud') rather than hosting them on local, physical servers in your office. The three leading public cloud providers are AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    link: "/services/cloud",
  },
  {
    term: "Containerization (Docker & Kubernetes)",
    definition: "A modern software deployment method where an application and all its necessary dependencies (libraries, frameworks) are packaged together into a 'container'. Unlike traditional virtual machines, containers are incredibly lightweight. Kubernetes is the orchestration tool used to automatically manage, scale, and deploy thousands of these containers in production environments.",
    link: "/services/cloud",
  },
  {
    term: "Cyber Essentials",
    definition: "A UK Government-backed certification scheme that helps organizations protect themselves against common cyber attacks. Achieving Cyber Essentials (and the more rigorous Cyber Essentials Plus) is often mandatory for bidding on UK government contracts and demonstrates baseline cybersecurity hygiene.",
    link: "/resources/cyber-essentials-guide",
  },
  {
    term: "DDoS Attack (Distributed Denial of Service)",
    definition: "A malicious attempt to disrupt normal traffic to a web server or network by overwhelming it with a massive flood of internet traffic, causing the site to crash or become unresponsive to legitimate users. These attacks are typically executed using networks of compromised computers (botnets).",
    link: "/services/cyber-security",
  },
  {
    term: "EDR (Endpoint Detection and Response)",
    definition: "Advanced cybersecurity software installed on individual devices (endpoints like laptops, servers, and mobile devices). Unlike legacy antivirus that only stops known threats, EDR uses behavioral analysis to constantly monitor for and automatically respond to advanced, previously unknown cyber threats like zero-day ransomware.",
    link: "/services/cyber-security",
  },
  {
    term: "ERP (Enterprise Resource Planning)",
    definition: "A massive suite of integrated business software (like SAP, NetSuite, or Microsoft Dynamics) that centralizes a company's data across HR, accounting, sales, manufacturing, and supply chain into a single, unified database, eliminating information silos.",
    link: "/services/erp",
  },
  {
    term: "Generative AI",
    definition: "A type of artificial intelligence capable of generating novel text, images, code, or other media in response to prompts. Examples include ChatGPT, Claude, and Midjourney. In enterprise environments, GenAI is typically integrated via APIs to automate customer service, generate reports, or assist in complex data analysis.",
    link: "/resources/generative-ai-enterprise",
  },
  {
    term: "IaaS (Infrastructure as a Service)",
    definition: "A cloud computing model where you rent raw computing infrastructure (like virtual servers, storage, and networking) from a provider like AWS or Azure, rather than buying physical hardware. You are responsible for managing the operating systems and applications running on this infrastructure.",
    link: "/services/cloud",
  },
  {
    term: "ISO 27001",
    definition: "The international gold standard for Information Security Management Systems (ISMS). It provides a rigorous framework for keeping information assets secure through strict organizational policies, risk assessments, and technical controls. Achieving certification is a powerful trust signal for enterprise B2B sales.",
    link: "/resources/iso-27001-checklist",
  },
  {
    term: "Managed IT Services (MSP)",
    definition: "Outsourcing your company's day-to-day IT management and technical support to a specialized third-party provider to improve operations and cut expenses. A modern MSP doesn't just fix broken computers; they proactively monitor networks, manage cybersecurity, and provide strategic vCIO advisory services.",
    link: "/services/managed-it",
  },
  {
    term: "Multi-Cloud Strategy",
    definition: "An enterprise cloud architecture that utilizes two or more public cloud providers (e.g., using AWS for machine learning and Azure for Windows workloads) to avoid vendor lock-in, optimize costs, and increase redundancy and disaster resilience.",
    link: "/services/cloud",
  },
  {
    term: "Penetration Testing (Pen Test)",
    definition: "An authorized, highly skilled simulated cyberattack on a computer system, performed by ethical hackers to evaluate the security of the system and proactively identify complex logic flaws and vulnerabilities before malicious hackers can exploit them.",
    link: "/resources/penetration-testing-explained",
  },
  {
    term: "Phishing",
    definition: "A type of social engineering attack where criminals send fraudulent emails designed to trick people into revealing sensitive information, such as passwords or bank details. Spear-phishing is a highly targeted version aimed at specific executives or departments.",
    link: "/services/cyber-security",
  },
  {
    term: "Ransomware",
    definition: "Malicious software that infiltrates a network and violently encrypts a victim's files, rendering them unreadable. The attacker then demands a ransom (usually in cryptocurrency) to provide the decryption key. Modern ransomware gangs also steal the data and threaten to leak it publicly if the ransom is not paid (double extortion).",
    link: "/resources/ransomware-recovery",
  },
  {
    term: "SaaS (Software as a Service)",
    definition: "A software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted in the cloud. Users access the software via a web browser. Examples include Microsoft 365, Salesforce, and Google Workspace.",
    link: "/services/cloud",
  },
  {
    term: "SLA (Service Level Agreement)",
    definition: "A formal, legally binding contract between a service provider and a client that dictates the specific standards of service expected. In IT, an SLA typically guarantees specific uptime percentages (e.g., 99.99%) and maximum response times for technical support tickets.",
    link: "/services/managed-it",
  },
  {
    term: "Smart Contract",
    definition: "A self-executing programmatic contract stored on a blockchain that automatically runs when predetermined conditions are met, eliminating the need for an intermediary or third-party arbitrator. They are the backbone of decentralized finance (DeFi).",
    link: "/services/blockchain",
  },
  {
    term: "SOC (Security Operations Center)",
    definition: "A centralized function within an organization employing people, processes, and technology to continuously monitor and improve an organization's security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents 24/7.",
    link: "/resources/soc-explained",
  },
  {
    term: "vCIO (Virtual Chief Information Officer)",
    definition: "An outsourced, highly experienced executive who provides strategic IT consultation to a business on a fractional basis. They align technology investments with overarching business goals, oversee large migrations, and sit in on board meetings, providing enterprise-level leadership without the massive salary of a full-time CIO.",
    link: "/resources/what-is-vcio",
  },
  {
    term: "VPN (Virtual Private Network)",
    definition: "A secure, encrypted connection established over the public internet. VPNs allow remote workers to safely access sensitive corporate networks and data as if their computers were physically plugged into the office network.",
    link: "/services/network",
  },
  {
    term: "Zero Trust Architecture",
    definition: "A modern cybersecurity model based on the principle of 'never trust, always verify.' It requires all users and devices to be rigorously authenticated and authorized before being granted access to applications and data, regardless of whether they are physically inside the corporate office or working remotely.",
    link: "/resources/zero-trust-architecture",
  }
];

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / A-Z Resource
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            IT & Technology Glossary
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto max-w-2xl">
            Technology is full of confusing acronyms. Use our comprehensive A-Z dictionary to translate complex IT jargon, cybersecurity concepts, and cloud computing principles into plain English.
          </p>
        </div>
      </section>

      {/* Dictionary Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="grid gap-12">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="pb-8 border-b border-slate-200 last:border-0" id={item.term.split(' ')[0].toLowerCase()}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.term}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {item.definition}
                </p>
                <Link
                  to={item.link}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Learn more about our related services <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Still confused by the jargon?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our technology consultants speak plain English, not "geek speak." Contact us to discuss your infrastructure, security, or software requirements clearly and confidently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Speak to a Consultant
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
