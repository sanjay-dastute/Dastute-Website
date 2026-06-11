import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildStandardPageHead, buildFaqJsonLd , buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources/blockchain-supply-chain")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Blockchain in Supply Chain Management | Dastute Guide",
      description: "Learn how blockchain technology and smart contracts are revolutionizing supply chain management through immutable tracking, counterfeit prevention, and automated settlements.",
      path: "/resources/blockchain-supply-chain",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: "Blockchain in Supply Chain Management | Dastute Guide",
            description: "Learn how blockchain technology and smart contracts are revolutionizing supply chain management through immutable tracking, counterfeit prevention, and automated settlements.",
            datePublished: "2026-01-23T17:27:16.363Z",
            authorName: "Sanjay Dastute",
            path: "/resources/blockchain-supply-chain",
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
            { name: "Blockchain in Supply Chain", path: "/resources/blockchain-supply-chain" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/resources/blockchain-supply-chain", [
            {
              question: "How is blockchain used in supply chain management?",
              answer: "Blockchain is used in supply chain management to create an immutable, shared ledger of transactions. Every time a product changes hands—from the manufacturer to the shipping port, to the final retailer—the event is permanently recorded on the blockchain. This provides 100% transparent track-and-trace capabilities that all parties can trust.",
            },
            {
              question: "What are supply chain smart contracts?",
              answer: "Supply chain smart contracts are self-executing programs stored on a blockchain. They automatically trigger actions when predefined conditions are met. For example, if an IoT sensor confirms a shipping container has arrived at a port, the smart contract can instantly release payment to the logistics company without requiring manual invoicing.",
            },
            {
              question: "Which blockchain is best for enterprise supply chains?",
              answer: "For enterprise supply chains, private permissioned blockchains like Hyperledger Fabric or Corda are usually best. Unlike public blockchains like Ethereum (where all data is visible to the world), permissioned blockchains allow competing businesses to share a logistics ledger while keeping their sensitive pricing and supplier data strictly confidential.",
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
            / Emerging Technology Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance text-white">
            Blockchain in Supply Chain Management
          </h1>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed mx-auto">
            Beyond cryptocurrency. Discover how distributed ledgers, smart contracts, and IoT integration are solving the supply chain's oldest problems: fraud, delays, and lack of visibility.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-10">
              Modern global supply chains are incredibly complex networks involving manufacturers, freight forwarders, customs officials, and retailers. Traditionally, each of these parties maintained their own isolated database. When a dispute arose—such as a missing shipment or damaged goods—reconciling these conflicting databases took weeks.
            </p>
            <p>
              Blockchain technology solves this problem by introducing a single, immutable, shared ledger that every participant can see, but no single participant can alter.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The 3 Core Benefits of Blockchain Logistics</h2>
            
            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">1. Unbreakable Track-and-Trace</h3>
            <p>
              When a luxury handbag is manufactured, it is assigned a unique digital identity on the blockchain. As it moves from the factory to the shipping vessel, to the distribution center, and finally to the boutique, each physical scan is recorded on the distributed ledger. Because blockchain data is immutable (cannot be edited or deleted), it provides absolute cryptographic proof of the product's journey.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">2. Counterfeit Prevention</h3>
            <p>
              Counterfeit goods cost the global economy billions annually, heavily impacting the pharmaceutical, electronics, and luxury fashion industries. By allowing end-consumers to scan a QR code and instantly verify a product's blockchain-backed history all the way back to the raw materials, businesses can absolutely guarantee authenticity and protect their brand reputation.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">3. Smart Contracts & Automated Settlements</h3>
            <p>
              A <strong>Smart Contract</strong> is a piece of code that automatically executes when specific conditions are met. 
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
              <p className="text-sm text-blue-900 mb-0">
                <strong>Example:</strong> A shipping company transports pharmaceuticals that must be kept below 5°C. IoT temperature sensors inside the truck constantly log data to the blockchain. When the truck arrives, a smart contract reviews the blockchain. If the temperature never exceeded 5°C, the contract automatically releases the payment. If the temperature spiked to 10°C, the contract automatically triggers an insurance claim and withholds payment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Enterprise Blockchains: Public vs. Private</h2>
            <p>
              When people hear "blockchain," they think of Bitcoin or Ethereum. These are <strong>Public Blockchains</strong>, meaning anyone in the world can view every transaction. For an enterprise supply chain, this is a massive security risk; you do not want your competitors seeing your supplier volumes and negotiated pricing.
            </p>
            <p>
              Instead, enterprises use <strong>Private, Permissioned Blockchains</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Hyperledger Fabric</h3>
                <p className="text-sm text-slate-600">
                  Backed by IBM and the Linux Foundation, Hyperledger Fabric is the industry standard for enterprise supply chains. It allows you to create "channels"—private sub-ledgers where two companies can transact securely without the rest of the network seeing the data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Corda (R3)</h3>
                <p className="text-sm text-slate-600">
                  Originally built for the financial sector, Corda is increasingly used in supply chain finance. Unlike traditional blockchains that broadcast data to all nodes, Corda only shares data on a strict "need-to-know" basis between the parties involved in the transaction.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Implementation Challenges</h2>
            <p>
              While the technology is revolutionary, implementing blockchain in a supply chain is not purely a technical challenge; it is a business challenge. 
            </p>
            <ul>
              <li><strong>The "Garbage In, Garbage Out" Problem:</strong> Blockchain guarantees that data hasn't been altered <em>after</em> it was recorded. But if a malicious warehouse worker deliberately scans the wrong barcode into the system, the blockchain simply records a lie immutably. Combining blockchain with automated IoT sensors minimizes human error.</li>
              <li><strong>Network Adoption:</strong> A supply chain blockchain is only useful if your suppliers, freight forwarders, and distributors actually agree to use it. Convincing older, non-technical partners to adopt a new digital ledger requires significant change management.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Supply Chain Blockchain FAQs</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How is blockchain used in supply chain management?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Blockchain is used in supply chain management to create an immutable, shared ledger of transactions. Every time a product changes hands—from the manufacturer to the shipping port, to the final retailer—the event is permanently recorded on the blockchain. This provides 100% transparent track-and-trace capabilities that all parties can trust.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What are supply chain smart contracts?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Supply chain smart contracts are self-executing programs stored on a blockchain. They automatically trigger actions when predefined conditions are met. For example, if an IoT sensor confirms a shipping container has arrived at a port, the smart contract can instantly release payment to the logistics company without requiring manual invoicing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Which blockchain is best for enterprise supply chains?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                For enterprise supply chains, private permissioned blockchains like Hyperledger Fabric or Corda are usually best. Unlike public blockchains like Ethereum (where all data is visible to the world), permissioned blockchains allow competing businesses to share a logistics ledger while keeping their sensitive pricing and supplier data strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to modernize your logistics?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Dastute's blockchain engineering team can architect private, permissioned ledgers using Hyperledger Fabric to secure your supply chain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Consult a Blockchain Architect
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
