import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/managed-it")({
  head: () => ({
    meta: [
      { title: "Managed IT Services | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "24/7 helpdesk, proactive monitoring, vCIO advisory, and guaranteed SLAs. Flat-rate managed IT from Dastute Technologies across UK, India, and Singapore.",
      },
      {
        name: "keywords",
        content:
          "managed IT services UK, IT managed service provider UK, helpdesk support UK, 24/7 IT support UK, vCIO services UK, patch management UK, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Managed IT Services | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "24/7 helpdesk, proactive monitoring, vCIO advisory, and guaranteed SLAs. Flat-rate managed IT from Dastute Technologies across UK, India, and Singapore.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/managed-it",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-managed-it.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Managed IT Services | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "24/7 helpdesk, proactive monitoring, vCIO advisory, and guaranteed SLAs. Flat-rate managed IT from Dastute Technologies across UK, India, and Singapore.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-managed-it.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/managed-it" },
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
            name: "Managed IT Services",
            description:
              "24/7 helpdesk, proactive monitoring, vCIO advisory and guaranteed SLAs from Dastute Technologies. Predictable flat-rate managed IT for businesses across India, Singapore and the UK.",
            path: "/services/managed-it",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "Managed IT Services", path: "/services/managed-it" },
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
            / Managed IT
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Proactive IT Management That Keeps Your Business Running 24/7
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            From helpdesk support to virtual CIO advisory - our managed IT services give you a fully staffed IT department at a predictable flat-rate cost, with an average 3-minute response time and guaranteed SLAs.
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
            { value: "3 min", label: "Response Time" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7/365", label: "Availability" },
            { value: "99.97%", label: "SLA Uptime" },
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
              Your Complete IT Department - Without the Overhead
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Managing technology in-house is expensive, unpredictable, and increasingly complex. Dastute's Managed IT Services give you access to a team of certified specialists across cybersecurity, cloud, networking, and software - all under one predictable monthly fee. We proactively monitor, maintain, and optimise your entire IT environment so issues are resolved before users notice them.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "24/7 Helpdesk Support",
                desc: "Multi-channel support (phone, email, chat) with 3-minute average response time and dedicated account engineers.",
                color: "accent-top-blue"
              },
              {
                title: "Proactive Monitoring",
                desc: "Real-time infrastructure monitoring with automated alerting, anomaly detection, and pre-emptive remediation.",
                color: "accent-top-emerald"
              },
              {
                title: "Virtual CIO (vCIO)",
                desc: "A dedicated senior technology strategist aligned with your business goals, attending board meetings and driving your IT roadmap.",
                color: "accent-top-violet"
              },
              {
                title: "Patch & Update Management",
                desc: "Automated and scheduled patching across servers, endpoints, and applications to keep systems secure and performant.",
                color: "accent-top-amber"
              },
              {
                title: "IT Budgeting & Planning",
                desc: "Annual IT roadmaps, technology refresh planning, and budget forecasting to eliminate surprise capital expenditure.",
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
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Everything Your Business Needs — Under One Managed Service
              <br />
              Our managed IT service is not a helpdesk bolt-on. It's a complete, co-managed IT department delivering proactive support, strategic leadership, and enterprise tooling at an SME price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Helpdesk */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Helpdesk & User Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Multi-tier helpdesk support available 24 hours a day, 365 days a year via phone, email, and live chat. Average 3-minute response time. Dedicated engineers assigned to your account who know your environment — no scripted call centres, no knowledge gap.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Avg 3-min response time</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Dedicated account engineers</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Multi-channel support</li>
              </ul>
            </div>

            {/* Monitoring */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proactive Infrastructure Monitoring</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Real-time monitoring of servers, networks, endpoints, and cloud resources using enterprise-grade RMM tools. Automated anomaly detection and pre-emptive remediation resolve 70% of issues before users are impacted — shifting your IT from reactive chaos to predictable reliability.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> 24/7 real-time monitoring</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Automated pre-emptive remediation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> SLA-backed uptime guarantees</li>
              </ul>
            </div>

            {/* vCIO */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Virtual CIO (vCIO) Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A dedicated senior technology strategist attends your leadership and board meetings, builds your annual IT roadmap, manages vendor relationships, and aligns your technology investments with business objectives. The strategic clarity of a full-time CIO at a fraction of the cost.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Quarterly business reviews</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Annual IT roadmap</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Budget & vendor management</li>
              </ul>
            </div>

            {/* Security */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Endpoint Security & Protection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Enterprise endpoint detection and response (EDR) across every laptop, desktop, server, and mobile device in your organisation — powered by CrowdStrike or SentinelOne. Real-time threat detection, automated quarantine, and full forensic investigation capabilities.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> CrowdStrike / SentinelOne EDR</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Automated threat response</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Device compliance enforcement</li>
              </ul>
            </div>
            
            {/* Patching */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Patch & Vulnerability Management</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Automated and scheduled patching across all operating systems, applications, firmware, and network devices — keeping your estate current without disrupting operations. Monthly vulnerability scan reports identify unpatched risks before attackers do.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Automated OS & app patching</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Monthly vulnerability reports</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Zero-day emergency patching</li>
              </ul>
            </div>
            
            {/* Backup */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Backup, DR & Business Continuity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Automated daily backups with encrypted off-site replication and point-in-time recovery for servers, Microsoft 365, and cloud workloads. Defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) with quarterly DR tests.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Daily encrypted backups</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> M365 data protection</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Quarterly DR tests</li>
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
            <p className="text-muted-foreground">Transparent reporting and strategic outputs every month.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-file-alt text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Service Reports</h3>
              <p className="text-sm text-muted-foreground">
                Monthly executive reports covering uptime metrics, incidents resolved, patch status, security alerts, and SLA performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-map-signs text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IT Roadmap</h3>
              <p className="text-sm text-muted-foreground">
                Annual strategic IT plan aligned with your business objectives, including technology refresh schedules and investment priorities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-shield-alt text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Security Baseline</h3>
              <p className="text-sm text-muted-foreground">
                Documented security posture assessment, endpoint protection status, and vulnerability management summary.
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
              Why Growing Businesses Choose Dastute Managed IT
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hundreds of businesses have made the switch. Here is exactly what they get that they couldn't find elsewhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "3-Minute Average Response", desc: "Industry average response time is 4+ hours. Ours is 3 minutes. We measure it on every ticket, report it every month, and are contractually committed to it." },
              { title: "40% Average Cost Saving", desc: "Our fully-staffed managed service typically delivers the same capability as an in-house team for 40-60% less, with broader expertise included." },
              { title: "Zero Reactive Surprises", desc: "Our proactive monitoring resolves 70% of issues automatically before any user is affected. The remaining 30% are triaged and escalated before they become outages." },
              { title: "Dedicated Account Team", desc: "You don't get a generic helpdesk number. You get a named account engineer who knows your systems, your team, your quirks, and your priorities." },
              { title: "Security Built In", desc: "Every managed IT engagement includes enterprise endpoint protection (EDR), patch management, Microsoft 365 hardening, and vulnerability reporting." },
              { title: "Contractually Bound SLAs", desc: "We don't just promise uptime and response times — we put them in the contract and report against them monthly. If we miss an SLA, we are accountable." },
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
              Enterprise-grade tooling for monitoring, security, and management.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Microsoft 365", "Azure AD", "ConnectWise", "Datto", "CrowdStrike", 
              "Sentinel One", "Meraki", "Cisco", "Veeam", "AWS", 
              "ServiceNow", "Datadog", "PagerDuty"
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
              Our Onboarding Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Seamless transition to fully managed IT in 2-4 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Environment Audit", desc: "Comprehensive discovery of all IT assets, systems, users, and existing contracts." },
              { num: "02", title: "Tooling Deployment", desc: "Install monitoring agents, endpoint protection, backup clients, and management tooling." },
              { num: "03", title: "Handover & Integration", desc: "Team introductions, escalation paths configured, documentation created, and SLAs agreed." },
              { num: "04", title: "Active Management", desc: "24/7 monitoring live, helpdesk active, monthly reporting commenced, and vCIO engaged." },
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
            <span>Onboarding: 2-4 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Managed IT for Demanding Sectors</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Healthcare & Life Sciences", "Banking & Insurance", "Fintech", 
                 "Manufacturing", "Logistics & Supply Chain", "Legal & Professional Services", 
                 "Education", "Non-Profit & Charities", "Retail & E-Commerce", "Construction & Real Estate"
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
            Ready for Better IT Support?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and discover how our managed IT services can eliminate downtime.
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



