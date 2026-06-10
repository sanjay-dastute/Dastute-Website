import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/blockchain")({
  head: () => ({
    meta: [
      {
        title:
          "Blockchain &amp; NFT Development | Dastute Technologies Limited",
      },
      {
        name: "description",
        content:
          "Smart contract development, DeFi, NFT marketplaces, and security audits from Dastute Technologies. Scalable Web3 solutions for enterprise.",
      },
      {
        name: "keywords",
        content:
          "enterprise blockchain UK, supply chain blockchain UK, smart contract audit, blockchain development company UK, RWA tokenisation UK, DeFi development, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content:
          "Blockchain &amp; NFT Development | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "Smart contract development, DeFi, NFT marketplaces, and security audits from Dastute Technologies. Scalable Web3 solutions for enterprise.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/blockchain",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-blockchain.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Blockchain &amp; NFT Development | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "Smart contract development, DeFi, NFT marketplaces, and security audits from Dastute Technologies. Scalable Web3 solutions for enterprise.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-blockchain.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/blockchain" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
      { rel: "preconnect", href: "https://cdnjs.cloudflare.com" },
      { rel: "dns-prefetch", href: "https://cdnjs.cloudflare.com" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Blockchain & NFT Development",
            description:
              "Smart contract development, DeFi protocols, NFT marketplaces, and CREST-aligned security audits from Dastute Technologies. Secure, scalable Web3 solutions for enterprise and startups.",
            path: "/services/blockchain",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            {
              name: "Blockchain & NFT Development",
              path: "/services/blockchain",
            },
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
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
          <Link to="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <i className="fas fa-arrow-left"></i> Back to Technology Services
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Blockchain
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Enterprise Blockchain & Web3 Engineering for Real-World Value
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Supply chain traceability, trade finance automation, tokenisation of real-world assets, smart contract development, and CREST-aligned security audits. We build enterprise blockchain solutions that solve operational problems — not speculative ones. Web3 with the governance of Web2.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get Free Quote
            </Link>
            <a
              href="#process"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "100%", label: "Audits" },
            { value: "73%", label: "Vuln Found" },
            { value: "CREST", label: "Security" },
            { value: "Solidity/Rust", label: "Tech" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 border-r border-border last:border-r-0 flex flex-col justify-center"
            >
              <div className="text-xl md:text-2xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro & Capabilities Grid */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Enterprise Blockchain — Built for Operational Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on blockchain use cases that deliver measurable business value — supply chain integrity, trade finance efficiency, asset tokenisation, and verifiable digital identity. Every solution is security-audited against the OWASP Smart Contract Top 10 and SWC registry, and built to meet enterprise governance requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Supply Chain Traceability",
                desc: "Immutable, real-time tracking of goods from origin to consumer. Used in pharmaceuticals, food provenance, luxury goods, and defence.",
                color: "accent-top-blue"
              },
              {
                title: "Trade Finance & Payments",
                desc: "Blockchain-based letters of credit, trade finance automation, and cross-border settlement using tokenised instruments.",
                color: "accent-top-emerald"
              },
              {
                title: "RWA Tokenisation",
                desc: "Fractional ownership and on-chain representation of real estate, infrastructure, commodities, and private equity.",
                color: "accent-top-violet"
              },
              {
                title: "Digital Identity",
                desc: "Self-sovereign identity (SSI) solutions using W3C DID/VC standards. Relevant for regulated industries requiring tamper-proof verification.",
                color: "accent-top-amber"
              },
              {
                title: "Smart Contract Audit",
                desc: "Solidity (Ethereum/Polygon/Base), Rust (Solana), and Vyper contracts with full test suites. All contracts security-audited.",
                color: "accent-top-rose"
              }
            ].map((card, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${card.color}`}
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Deep Dive
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Our Blockchain Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Full-Stack Blockchain & Web3 Development — From Protocol to Product
              <br />
              We build audited, scalable, production-grade blockchain systems across public chains, private networks, and hybrid architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Smart Contracts */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Contract Development & Audit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Custom Solidity, Rust, and Vyper smart contracts for Ethereum, Polygon, Solana, Avalanche, and BNB Chain. Every contract undergoes a formal security audit covering reentrancy, integer overflow, access control, and economic exploit vectors before deployment.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Solidity / Rust / Vyper</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Formal security audit</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Multi-chain deployment</li>
              </ul>
            </div>

            {/* DeFi */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">DeFi Protocol Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Build decentralised finance protocols including automated market makers (AMMs), lending and borrowing platforms, yield optimisers, cross-chain bridges, and liquidity pools. Our DeFi engineering team includes specialists in tokenomics design and MEV protection.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> AMM & DEX development</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Lending protocols</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Tokenomics design</li>
              </ul>
            </div>

            {/* NFT Marketplace */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">NFT Marketplace & Collection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                End-to-end NFT marketplace development with ERC-721, ERC-1155, and SBT (Soulbound Token) standards. Features include lazy minting, royalty enforcement (EIP-2981), auction mechanisms, multi-wallet support, IPFS/Arweave metadata storage, and gas optimisation.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> ERC-721 / ERC-1155 / SBT</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Lazy minting & gas optimisation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> IPFS / Arweave storage</li>
              </ul>
            </div>

            {/* Enterprise & Supply Chain */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Blockchain & Supply Chain</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Private and consortium blockchain networks using Hyperledger Fabric, Quorum, and Corda for enterprise use cases: supply chain provenance, trade finance, document verification, and cross-border payments. Full integration with existing ERP and WMS systems.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Hyperledger Fabric / Corda</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Supply chain provenance</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> ERP & WMS integration</li>
              </ul>
            </div>
            
            {/* RWA Tokenisation */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real World Asset (RWA) Tokenisation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Design and build compliant platforms for on-chain representation of real-world assets — property, private equity, infrastructure, commodities, and invoices. We build KYC/AML-integrated platforms with regulatory-compliant token structures and secondary market liquidity.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> KYC/AML integration</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Regulated token structures</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Secondary market support</li>
              </ul>
            </div>
            
            {/* Wallet & dApp */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Wallet, dApp & Web3 Frontend</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Build high-performance decentralised applications (dApps) and Web3 frontends integrated with MetaMask, WalletConnect, Coinbase Wallet, and hardware wallets. We design intuitive UX for non-crypto-native users — critical for enterprise and consumer adoption.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> MetaMask / WalletConnect</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Multi-chain dApp frontend</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Web3 UX for enterprise</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">What We Deliver</h2>
            <p className="text-muted-foreground">Security-verified code and comprehensive documentation for every engagement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-shield-alt text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Audit Report</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive security audit report with vulnerability classifications, CVSS scores, PoC exploits, and remediation recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-file-contract text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Smart Contracts</h3>
              <p className="text-sm text-muted-foreground">
                Production-ready contracts with NatSpec documentation, full test suite, and deployment scripts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-coins text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tokenomics Model</h3>
              <p className="text-sm text-muted-foreground">
                Economic design documentation covering supply mechanics, distribution schedule, utility analysis, and sustainability modelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dastute */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Why Enterprises Trust Dastute for Blockchain
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blockchain projects fail when the team doesn't understand the full stack — from cryptography and consensus to UX and compliance. We do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Security-Audited Code by Default", desc: "Every smart contract we write is subjected to a rigorous internal security audit covering reentrancy, access control, and economic exploits." },
              { title: "Full-Stack Blockchain Expertise", desc: "We cover the entire stack: smart contracts, protocol design, Web3 frontend, wallet integration, and backend node infrastructure." },
              { title: "Regulatory Awareness", desc: "We design solutions with regulatory awareness — FCA guidelines, MiCA (EU), AML/KYC requirements, and data minimisation principles." },
              { title: "Chain-Agnostic Approach", desc: "We evaluate Ethereum, Polygon, Solana, Avalanche, and Hyperledger based on your specific requirements — you get the right chain, not just the one we know." },
              { title: "Enterprise Integration Specialists", desc: "We connect blockchain to SAP, Oracle, Salesforce, and custom ERP systems via REST APIs, webhooks, and event-driven middleware." },
              { title: "Proven DeFi & NFT Track Record", desc: "With production DeFi protocols and NFT marketplaces live on mainnet, we bring real battle-tested experience to your project." },
            ].map((item, i) => (
              <div key={i} className="glass-card-strong p-6 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-muted-foreground">
              Full-stack Web3 engineering across all major blockchains.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Solidity", "Rust", "Hardhat", "Foundry", "OpenZeppelin", 
              "Truffle", "Web3.js", "ethers.js", "IPFS", "The Graph", 
              "Polygon", "Ethereum", "Solana", "MetaMask", "WalletConnect"
            ].map(tool => (
              <span key={tool} className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-slate-700 shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-dark">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4">
              / Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Our Blockchain Development Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Security-first Web3 engineering from design to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Architecture & Tokenomics", desc: "Protocol design, tokenomics modelling, threat modelling, and blockchain selection." },
              { num: "02", title: "Development & Testing", desc: "Smart contract development with unit tests, integration tests, and fuzz testing across all code paths." },
              { num: "03", title: "Security Audit", desc: "CREST-aligned audit against OWASP and SWC registry, economic attack vector analysis, and formal report." },
              { num: "04", title: "Deploy & Monitor", desc: "Staged deployment, mainnet launch, and ongoing monitoring for anomalous transaction patterns." },
            ].map((step, i) => (
              <div key={i} className="glass-card-dark rounded-3xl p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-black text-white/5">{step.num}</span>
                <div className="font-mono text-sm text-blue-400 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-slate-400 bg-white/5 py-4 rounded-xl border border-white/10">
            <span>Timeline: 10-20 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Blockchain Across Every Sector</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Banking & Capital Markets", "Fintech & DeFi", "Supply Chain & Logistics", 
                 "Pharma & Healthcare", "Real Estate & PropTech", "Media, Music & Entertainment", 
                 "Manufacturing", "Gaming & Metaverse", 
                 "Education & Credentials", "Government & Public Sector"
               ].map(ind => (
                 <span key={ind} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
                   {ind}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to Secure Your Blockchain Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and technical scoping session for your enterprise blockchain project today.
          </p>
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}



