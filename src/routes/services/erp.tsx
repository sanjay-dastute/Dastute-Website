import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/erp")({
  head: () => ({
    meta: [
      { title: "ERP Solutions | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "SAP, Microsoft Dynamics, and Oracle ERP implementation from Dastute Technologies. Streamline finance, HR, supply chain, and manufacturing.",
      },
      {
        name: "keywords",
        content:
          "ERP implementation UK, SAP partner UK, Microsoft Dynamics 365 UK, ERP consultants UK, Oracle ERP UK, ERP customisation, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "ERP Solutions | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "SAP, Microsoft Dynamics, and Oracle ERP implementation from Dastute Technologies. Streamline finance, HR, supply chain, and manufacturing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dastute.co.uk/services/erp" },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-erp.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "ERP Solutions | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "SAP, Microsoft Dynamics, and Oracle ERP implementation from Dastute Technologies. Streamline finance, HR, supply chain, and manufacturing.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-erp.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/erp" },
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
            name: "ERP Solutions",
            description:
              "Custom ERP implementation, integration and managed support - SAP, Microsoft Dynamics, Oracle, and bespoke ERP solutions from Dastute Technologies.",
            path: "/services/erp",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "ERP Solutions", path: "/services/erp" },
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
            / ERP Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            ERP Solutions That Unify Your Business Operations End-to-End
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            From SAP and Microsoft Dynamics to Oracle and custom-built ERP platforms - we implement, integrate, and manage enterprise resource planning systems that connect finance, HR, supply chain, and manufacturing into a single source of truth.
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
            { value: "30%+", label: "Efficiency Gain" },
            { value: "SAP / D365", label: "Platforms" },
            { value: "Full", label: "Integration" },
            { value: "60+", label: "Deployments" },
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
              Integrated Enterprise Systems That Eliminate Operational Silos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Disconnected systems cost businesses time, money, and competitive edge. At Dastute, we implement and integrate ERP platforms that give every department - finance, HR, procurement, warehouse, and manufacturing - a unified view of the business in real time. Whether you're implementing SAP S/4HANA, migrating to Microsoft Dynamics 365, deploying Oracle NetSuite, or building a custom ERP, our certified consultants deliver end-to-end projects that go live on time and drive measurable ROI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Implementation & Configuration",
                desc: "Full lifecycle ERP deployments on SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, and Odoo.",
                color: "accent-top-blue"
              },
              {
                title: "Integration & API Development",
                desc: "Seamless integration of ERP with CRM, e-commerce, payroll, banking, and third-party logistics providers via REST and middleware.",
                color: "accent-top-emerald"
              },
              {
                title: "Data Migration & Cleansing",
                desc: "Structured migration from legacy systems - data mapping, cleansing, validation, and parallel-run strategies to ensure zero data loss.",
                color: "accent-top-violet"
              },
              {
                title: "Training & Change Management",
                desc: "Role-based end-user training, admin documentation, super-user programmes, and change management support to drive adoption.",
                color: "accent-top-amber"
              },
              {
                title: "Managed ERP Support",
                desc: "Post-go-live managed support, system optimisation, release management, and a dedicated ERP helpdesk with guaranteed SLA.",
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
              Our ERP Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Complete ERP Services — From Selection to Optimisation
              <br />
              We handle every phase of your ERP journey — making sure the platform you invest in actually delivers the operational clarity and efficiency you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Selection */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Start Here</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ERP Selection & Consulting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Choosing the wrong ERP costs millions and years. We conduct vendor-neutral ERP selection — assessing your requirements, current landscape, budget, and growth plans — running a structured RFP/RFI process to identify the best fit.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Vendor-neutral evaluation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Requirements mapping</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> ROI business case</li>
              </ul>
            </div>

            {/* Implementation */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ERP Implementation & Configuration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                End-to-end ERP implementation covering configuration, workflow design, master data governance, user acceptance testing, training, and hypercare post-go-live using structured methodologies (ASAP, SureStep, agile sprints).
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> SAP / NetSuite / Dynamics 365</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Data migration & cleansing</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> User training & hypercare</li>
              </ul>
            </div>

            {/* Custom ERP */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom ERP Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                When off-the-shelf ERP cannot meet your unique operational requirements, we build custom ERP systems designed exactly to your processes using modern frameworks (Python/Django, Node.js, .NET), preventing vendor lock-in.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Tailored module development</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Modern tech stack</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> No vendor lock-in</li>
              </ul>
            </div>

            {/* Integration */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ERP Integration & API Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Connect your ERP to CRM (Salesforce, HubSpot), e-commerce (Shopify, Magento), WMS, payroll, and third-party APIs through robust, monitored integration middleware. We build real-time and batch integration flows.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> CRM & e-commerce integration</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Real-time API connectors</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> EDI & data exchange</li>
              </ul>
            </div>
            
            {/* Data Migration */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Migration & Master Data</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                ERP migrations fail most often because of dirty data. We run structured data migration programmes: profiling, cleansing, deduplication, mapping, and validation testing — ensuring your new ERP goes live with accurate data.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Data profiling & cleansing</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Migration validation testing</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Master data governance</li>
              </ul>
            </div>
            
            {/* Analytics */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ERP Analytics & Reporting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transform your ERP data into actionable business intelligence with embedded dashboards, Power BI/Tableau integrations, and custom reporting modules. We design KPI frameworks aligned to your operations.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Power BI / Tableau integration</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Custom KPI dashboards</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Automated financial reporting</li>
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
            <p className="text-muted-foreground">Structured outputs at every stage of your ERP engagement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-project-diagram text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Implementation Blueprint</h3>
              <p className="text-sm text-muted-foreground">
                Detailed project plan covering module configuration, data migration strategy, integration architecture, and go-live timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-book-open text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Training Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Role-based user guides, administrator manuals, and video walkthroughs covering all implemented modules.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-chart-bar text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROI & Optimisation Report</h3>
              <p className="text-sm text-muted-foreground">
                Post-go-live performance analysis comparing KPIs before and after ERP, with identified optimisation opportunities.
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
              Why Businesses Choose Dastute for ERP
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ERP projects are complex and high-stakes. Here is what makes Dastute different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Platform-Neutral Advisory", desc: "We evaluate SAP, Oracle NetSuite, Dynamics 365, Odoo, and custom options against your specific requirements, recommending the best fit, not the highest margin." },
              { title: "Change Management Included", desc: "Our methodology includes dedicated change management: stakeholder engagement, user training, and hypercare to drive genuine adoption." },
              { title: "Data-First Approach", desc: "We treat data migration as a strategic workstream. Our structured profiling and cleansing programme ensures your ERP starts life with trustworthy data." },
              { title: "On-Time, On-Budget Delivery", desc: "Our structured methodology combines proven phase gates, weekly checkpoints, and clear scope management to keep ERP projects on track." },
              { title: "Deep Integration Expertise", desc: "We build robust integrations with CRM, e-commerce, WMS, payroll, and banking feeds — making your ERP the operational hub it was designed to be." },
              { title: "Long-Term Support Partnership", desc: "Our retainer provides ongoing administration, user support, upgrades, and performance optimisation to keep pace with your business growth." },
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
              Platforms & Technologies
            </h2>
            <p className="text-muted-foreground">
              Certified consultants across all major ERP ecosystems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SAP S/4HANA", "Microsoft Dynamics 365", "Oracle NetSuite", "Odoo", "SAP Business One", 
              "Salesforce", "Power BI", "Azure Integration Services", "REST APIs", "SQL Server", 
              "Python", "ABAP", "Power Automate", "MuleSoft"
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
              Our ERP Implementation Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              A proven, structured approach from discovery to go-live and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Discovery & Blueprint", desc: "Business process mapping, requirements gathering, platform selection, and detailed project blueprint signed off before build begins." },
              { num: "02", title: "Configuration & Integration", desc: "ERP configuration per business requirements, integration development, data migration preparation, and system testing." },
              { num: "03", title: "UAT & Training", desc: "User acceptance testing with key stakeholders, issue resolution, end-user training, and change management activities." },
              { num: "04", title: "Go-Live & Support", desc: "Managed go-live cutover, hypercare support in the first 30 days, and transition to ongoing managed ERP support service." },
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
            <span>Timeline: 12-32 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">ERP Solutions Across Every Sector</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Manufacturing & Engineering", "Distribution & Logistics", "Retail & E-Commerce", 
                 "Healthcare & Life Sciences", "Construction & Real Estate", "Financial Services", 
                 "Food & Beverage", "Professional Services", 
                 "Agriculture & AgTech", "Education & Non-Profit"
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
            Ready to Unify Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and technical scoping session for your ERP implementation today.
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



