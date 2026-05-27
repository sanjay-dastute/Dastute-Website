import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IT Services & Solutions — Dastute Technologies" },
      { name: "description", content: "Explore Dastute Technologies' full IT service portfolio: Managed IT, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP, Network, IT Consulting, Digital Marketing and IT Staffing." },
      { property: "og:title", content: "IT Services & Solutions — Dastute Technologies" },
      { property: "og:description", content: "13 specialist services across technology, cloud, security, development and digital marketing. Delivered globally from UK, India & Singapore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Dastute Technologies Services",
        numberOfItems: 13,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Managed IT Services" },
          { "@type": "ListItem", position: 2, name: "IT Consulting & Advisory" },
          { "@type": "ListItem", position: 3, name: "Cyber Security" },
          { "@type": "ListItem", position: 4, name: "Cloud Services" },
          { "@type": "ListItem", position: 5, name: "Web & App Development" },
          { "@type": "ListItem", position: 6, name: "Mobile Development" },
          { "@type": "ListItem", position: 7, name: "Blockchain & Web3" },
          { "@type": "ListItem", position: 8, name: "ERP Solutions" },
          { "@type": "ListItem", position: 9, name: "Network Connectivity" },
          { "@type": "ListItem", position: 10, name: "Software Development" },
          { "@type": "ListItem", position: 11, name: "Digital Marketing" },
          { "@type": "ListItem", position: 12, name: "IT Staffing" },
          { "@type": "ListItem", position: 13, name: "NFT Development" },
        ],
      }),
    }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    code: "01",
    title: "Managed IT Services",
    summary: "Free up your internal resources to focus on the business by letting us handle day-to-day support, management and monitoring of your IT.",
    detail: "End-to-end management of your IT estate — servers, endpoints, cloud, networks and users — under a single, predictable monthly fee. Proactive monitoring, patch management, asset lifecycle tracking and 24/7 UK-based helpdesk.",
    tags: ["24/7 Helpdesk", "Proactive Monitoring", "Patch Management", "Asset Tracking"],
  },
  {
    code: "02",
    title: "IT Consulting & Advisory",
    summary: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.",
    detail: "Strategic IT consulting, digital transformation advisory, and vendor selection. We provide independent IT strategy to help you align technology investments with business outcomes.",
    tags: ["Strategy", "Digital Transformation", "Vendor Selection", "IT Roadmaps"],
  },
  {
    code: "03",
    title: "Cyber Security",
    summary: "Our experts can identify vulnerabilities, assess risks and implement robust security measures to safeguard your systems and data.",
    detail: "SIEM, SOC, penetration testing, Cyber Essentials, ISO 27001, GDPR compliance, phishing simulation and incident response. Comprehensive protection for your digital assets.",
    tags: ["Penetration Testing", "SIEM/SOC", "ISO 27001", "Incident Response"],
  },
  {
    code: "04",
    title: "Cloud Services",
    summary: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
    detail: "AWS, Azure, GCP migration, hybrid-cloud architecture, FinOps cost optimisation, and 24/7 managed cloud services. Infrastructure designed to scale with your business.",
    tags: ["AWS", "Azure", "GCP", "FinOps"],
  },
  {
    code: "05",
    title: "Web & App Development",
    summary: "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
    detail: "Full-stack web apps, e-commerce platforms, responsive UI/UX, headless CMS and PWA development. React, Next.js, Node, Python and .NET — built for performance and scale.",
    tags: ["React", "Next.js", "E-commerce", "PWA"],
  },
  {
    code: "06",
    title: "Mobile Development",
    summary: "We can help you create a customised mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
    detail: "Native iOS, Android and hybrid mobile app development. From concept to App Store / Play Store release, with offline-first architecture and biometric security built in.",
    tags: ["iOS", "Android", "Hybrid", "React Native"],
  },
  {
    code: "07",
    title: "Blockchain & Web3",
    summary: "Smart contracts, DeFi protocols, NFT marketplaces, tokenisation and private-chain solutions for the decentralised future.",
    detail: "Solidity, Rust and Hyperledger development. From smart contract architecture and audit preparation to full dApp deployment and governance interfaces.",
    tags: ["Solidity", "DeFi", "NFT", "Hyperledger"],
  },
  {
    code: "08",
    title: "ERP Solutions",
    summary: "SAP, Microsoft Dynamics and Oracle ERP implementation to streamline your core business operations.",
    detail: "End-to-end ERP implementation covering finance, HR, supply chain and manufacturing. We help you select, deploy and customise the right ERP platform for your scale.",
    tags: ["SAP", "Dynamics", "Oracle", "Supply Chain"],
  },
  {
    code: "09",
    title: "Network Connectivity",
    summary: "Enterprise SD-WAN, MPLS, LAN/WAN, wireless and 24/7 network monitoring for reliable, secure connectivity.",
    detail: "From office networking to multi-site enterprise infrastructure, we design, deploy and monitor networks that keep your business connected and secure.",
    tags: ["SD-WAN", "MPLS", "LAN/WAN", "Wireless"],
  },
  {
    code: "10",
    title: "Custom Software Development",
    summary: "From a custom CRM to Transportation Management System, we've built it all — bespoke solutions for your unique needs.",
    detail: "Bespoke internal systems, workflow tools, data pipelines and integrations tailored to your operating model. Typed end-to-end and documented for handover.",
    tags: ["CRM", "TMS", "Integrations", "Bespoke"],
  },
  {
    code: "11",
    title: "Digital Marketing",
    summary: "Result-driven digital marketing — SEO, PPC, social media, content marketing, email automation and full-funnel analytics.",
    detail: "UK-based team with global delivery. Comprehensive digital strategy covering organic search, paid acquisition, social media management, content creation and conversion optimisation.",
    tags: ["SEO", "PPC", "Social Media", "Analytics"],
  },
  {
    code: "12",
    title: "IT Staffing",
    summary: "Pre-vetted IT contract and permanent staff. Software engineers, cloud architects, DevOps and cybersecurity specialists.",
    detail: "Shortlist in 5 days. IR35-compliant staffing solutions for technology teams. We source, vet and place senior IT professionals across the UK and globally.",
    tags: ["Contract", "Permanent", "IR35", "5-Day Shortlist"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ Services</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl">
          One company, with one goal:<br />simplify your IT.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground text-lg">
          12 specialist services spanning managed infrastructure, cybersecurity, development, cloud and advisory — delivered by experienced teams across the UK, India and Singapore.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/technology" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors">
            Technology Practice <span aria-hidden>↗</span>
          </Link>
          <Link to="/marketing" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors">
            Digital Marketing <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s, i) => (
            <article
              key={s.code}
              className={`grid md:grid-cols-[100px_1fr_1fr] gap-8 md:gap-12 p-8 md:p-12 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <div>
                <span className="font-mono text-xs text-primary">{s.code}</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">{s.summary}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">Capabilities</span>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-3 py-1 border border-border rounded-full text-[10px] uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Industry Focus</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            "Manufacturing",
            "Transportation & Logistics",
            "Healthcare",
            "Banks & Insurance",
            "Consulting Providers",
            "Non Profit",
            "Fintech",
            "Dating Apps",
          ].map((industry) => (
            <div key={industry} className="bg-background p-6 hover:bg-foreground hover:text-background transition-colors duration-300 group">
              <span className="text-sm font-bold">{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Need a tailored solution?</h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              We schedule a call at your convenience, do a discovery and consulting meeting, and prepare a proposal tailored to your specific needs.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link to="/project-estimator" className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              Project Estimator <span aria-hidden>↗</span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              Start a Consultation <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
