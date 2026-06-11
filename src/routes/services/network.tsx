import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/network")({
  head: () => ({
    meta: [
      { title: "Network Connectivity Services | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "Enterprise SD-WAN, MPLS, LAN/WAN, wireless, and 24/7 network monitoring from Dastute Technologies. Reliable, secure connectivity across UK.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Network Connectivity Services | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "Enterprise SD-WAN, MPLS, LAN/WAN, wireless, and 24/7 network monitoring from Dastute Technologies. Reliable, secure connectivity across UK.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dastute.co.uk/services/network" },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-network.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Network Connectivity Services | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "Enterprise SD-WAN, MPLS, LAN/WAN, wireless, and 24/7 network monitoring from Dastute Technologies. Reliable, secure connectivity across UK.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-network.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/network" },
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
            name: "Network Connectivity Services",
            description:
              "Enterprise network design, SD-WAN, MPLS, LAN/WAN, wireless infrastructure, and 24/7 network monitoring from Dastute Technologies.",
            path: "/services/network",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "Network Connectivity Services", path: "/services/network" },
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
            / Network Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Secure, High-Performance Network Infrastructure That Keeps You Connected
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Enterprise-grade LAN/WAN design, SD-WAN, MPLS, wireless infrastructure, and 24/7 network monitoring - built and managed by Cisco and Meraki certified engineers. We design networks that scale with your business and never let you down.
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
            { value: "99.99%", label: "Uptime SLA" },
            { value: "24/7", label: "NOC Monitoring" },
            { value: "Cisco / Meraki", label: "Certified" },
            { value: "Multi-Site", label: "Coverage" },
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
              Networks Designed for Performance, Security and Resilience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your network is the backbone of your business. A poorly designed or unmonitored network causes downtime, slow applications, and security vulnerabilities that attackers exploit. Dastute designs, deploys, and manages enterprise network infrastructure built for the modern workplace - supporting remote teams, cloud workloads, VoIP, and video conferencing without compromise. Our Cisco and Meraki certified engineers deliver networks that perform under load and recover automatically when issues arise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Network Design & Architecture",
                desc: "LAN/WAN architecture design, IP address planning, VLAN segmentation, redundancy design, and detailed network diagrams.",
                color: "accent-top-blue"
              },
              {
                title: "SD-WAN & MPLS",
                desc: "Software-defined WAN deployment for multi-site connectivity, intelligent traffic routing, failover, and centralised management.",
                color: "accent-top-emerald"
              },
              {
                title: "Wireless Infrastructure",
                desc: "Enterprise Wi-Fi 6 deployments with site surveys, access point placement, SSID segmentation, and guest network isolation.",
                color: "accent-top-violet"
              },
              {
                title: "24/7 NOC Monitoring",
                desc: "Round-the-clock monitoring of all network devices, automated fault detection, and rapid escalation to certified engineers.",
                color: "accent-top-amber"
              },
              {
                title: "Network Security & Firewall",
                desc: "Next-generation firewall configuration (Fortinet, Cisco), IDS/IPS tuning, NAC policies, and zero-trust network access.",
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
              Our Network Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Enterprise Network Services — Designed for Performance, Security & Resilience
              <br />
              From head office to branch, data centre to cloud, remote worker to IoT device — we design and manage networks that never let your business down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Design */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Network Design & Architecture</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Custom network architecture design for enterprise, multi-site, and hybrid environments — covering LAN, WAN, WLAN, and data centre interconnects. We produce detailed network diagrams, IP schemas, VLAN design, routing protocols, and QoS policies.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> LAN / WAN / WLAN design</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Redundancy & HA planning</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Detailed network documentation</li>
              </ul>
            </div>

            {/* Wi-Fi */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Wi-Fi & Wireless LAN</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                High-density enterprise wireless deployments for offices, warehouses, hospitals, and campuses using Cisco, Aruba, and Meraki access points with Ekahau heat-map survey methodology. We design for 100% coverage and seamless roaming.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Ekahau RF survey</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> WPA3 Enterprise / 802.1X</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Post-install validation</li>
              </ul>
            </div>

            {/* SD-WAN */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SD-WAN & WAN Optimisation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Replace expensive MPLS circuits with software-defined WAN solutions from Cisco Meraki, VMware VeloCloud, Fortinet, and Palo Alto — reducing WAN costs while improving performance, visibility, and application-aware routing.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Cisco Meraki / VeloCloud</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Up to 60% WAN cost reduction</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Application-aware routing</li>
              </ul>
            </div>

            {/* Security */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Network Security & Zero Trust</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Implement next-generation firewall (NGFW) solutions from Fortinet, Palo Alto, Cisco, and Check Point with deep packet inspection. Design zero-trust network access (ZTNA) frameworks that replace implicit trust with continuous verification.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Fortinet / Palo Alto NGFW</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Zero-trust network access</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> IPS & threat prevention</li>
              </ul>
            </div>
            
            {/* VPN */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote Access & VPN Solutions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Secure remote access solutions for hybrid workforces using SSL VPN, IPSec VPN, and modern ZTNA platforms. We design full-tunnel configurations, implement MFA-enforced policies, and integrate with Azure AD and Okta for SSO.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> SSL / IPSec / ZTNA</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> MFA enforcement</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Azure AD / Okta integration</li>
              </ul>
            </div>
            
            {/* NOC */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Network Monitoring & Managed NOC</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                24/7 network operations centre (NOC) monitoring with real-time visibility of every device, link, and application using SolarWinds, PRTG, and Zabbix. Proactive alerting, baseline monitoring, and incident management.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> 24/7 NOC monitoring</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> SolarWinds / PRTG / Zabbix</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Capacity planning reports</li>
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
            <p className="text-muted-foreground">Documented, tested, and production-ready network infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-project-diagram text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Network Architecture Diagrams</h3>
              <p className="text-sm text-muted-foreground">
                Full logical and physical network diagrams, IP addressing schemas, VLAN plans, and firewall rule documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-tachometer-alt text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Baseline Report</h3>
              <p className="text-sm text-muted-foreground">
                Post-deployment performance benchmarks covering latency, throughput, packet loss, and Wi-Fi coverage validation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-chart-line text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly NOC Reports</h3>
              <p className="text-sm text-muted-foreground">
                Monthly network health summaries with uptime statistics, incident logs, bandwidth trends, and optimisation recommendations.
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
              Why Organisations Trust Dastute with Their Network Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Networks are the foundation of everything. Here is why organisations with high uptime requirements choose us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certified Network Engineers", desc: "Our team holds active Cisco CCNP/CCIE, Juniper JNCIP, Fortinet NSE, and Aruba ACCP certifications. Every design is peer-reviewed." },
              { title: "Design Before Deploy", desc: "We never deploy before designing. Every project starts with a detailed architecture document reviewed and signed off by you." },
              { title: "Security-Integrated by Default", desc: "Network security is not a separate project. We implement NGFW, VLANs, 802.1X, and zero-trust access controls as standard." },
              { title: "Full Documentation Handover", desc: "Every network is fully documented: logical diagrams, IPAM, and runbooks. Your internal team will always have what they need." },
              { title: "Proactive 24/7 Monitoring", desc: "Our NOC watches every device 24/7. Issues are detected, triaged, and resolved before they cause business disruption." },
              { title: "Vendor-Neutral Cost Optimisation", desc: "We are not aligned to a single vendor. We recommend solutions based on fit, saving thousands in unnecessary licence costs." },
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
              Certified across leading enterprise networking vendors.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Cisco", "Meraki", "Fortinet", "Palo Alto", "Juniper", 
              "Aruba", "SD-WAN", "MPLS", "Wi-Fi 6", "VLAN", 
              "BGP / OSPF", "SolarWinds", "PRTG", "Zabbix"
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
              Our Network Engagement Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              From site survey to managed operations - structured and transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Site Survey & Assessment", desc: "Physical and logical audit of existing infrastructure, bandwidth requirements analysis, and connectivity gap identification." },
              { num: "02", title: "Design & Procurement", desc: "Network architecture design, hardware specification, vendor selection, and procurement management." },
              { num: "03", title: "Deployment & Testing", desc: "Structured installation, configuration, cabling management, and comprehensive performance testing before go-live." },
              { num: "04", title: "Monitor & Optimise", desc: "24/7 NOC monitoring activated, documentation handed over, and ongoing managed network service commenced." },
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
            <span>Timeline: 4-12 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Network Solutions for Demanding Environments</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Healthcare & NHS", "Banking & Financial Services", "Manufacturing & OT/IT Convergence", 
                 "Education & Higher Education", "Corporate Office & Multi-Site", "Retail & Hospitality", 
                 "Warehousing & Logistics", "Hotels & Venues", "Construction & Property", "Government & Defence Contractors"
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
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and technical scoping session for your network infrastructure today.
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



