import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/consulting")({
  head: () => ({
    meta: [
      { title: "IT Consulting Firm London & Advisory | Dastute" },
      {
        name: "description",
        content:
          "Strategic IT consulting, digital transformation advisory, and vendor selection from Dastute Technologies. Independent IT strategy across the UK.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "IT Consulting Firm London & Advisory | Dastute",
      },
      {
        property: "og:description",
        content:
          "Strategic IT consulting, digital transformation advisory, and vendor selection from Dastute Technologies. Independent IT strategy across the UK.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/consulting",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-consulting.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Consulting Firm London & Advisory | Dastute",
      },
      {
        name: "twitter:description",
        content:
          "Strategic IT consulting, digital transformation advisory, and vendor selection from Dastute Technologies. Independent IT strategy across the UK.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-consulting.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/consulting" },
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
            name: "IT Consulting & Advisory",
            description:
              "Strategic IT consulting, technology roadmapping, digital transformation advisory, and vendor selection from Dastute Technologies.",
            path: "/services/consulting",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "IT Consulting & Advisory", path: "/services/consulting" },
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
            / IT Consulting & Advisory
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            IT Consulting Firm London: Independent IT Strategy
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Technology roadmapping, digital transformation advisory, vendor selection, and IT due diligence - delivered by senior consultants with deep industry experience. We give you independent, business-aligned advice - not vendor-biased recommendations.
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
            { value: "Vendor", label: "Independent" },
            { value: "10+", label: "Industries" },
            { value: "Senior", label: "Consultants" },
            { value: "3 Regions", label: "UK - India - SG" },
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
              Technology Strategy That Drives Business Outcomes, Not Just IT Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many IT projects fail not because of bad technology - but because of misaligned strategy, poor vendor selection, or underestimated change management. Dastute's IT consulting practice brings senior advisors who understand both business and technology. We start with your business objectives and work backwards to the technology decisions - ensuring every pound or rupee spent on IT delivers measurable return.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IT Strategy & Roadmapping",
                desc: "Multi-year IT roadmaps aligned to business strategy - covering infrastructure, applications, security, and digital transformation.",
                color: "accent-top-blue"
              },
              {
                title: "Digital Transformation",
                desc: "Assessment of digital maturity, transformation opportunities, business case development, and programme governance.",
                color: "accent-top-emerald"
              },
              {
                title: "Vendor Selection",
                desc: "Independent RFP management, vendor evaluation, contract negotiation support, and technology proof-of-concept.",
                color: "accent-top-violet"
              },
              {
                title: "IT Due Diligence",
                desc: "Technical due diligence for M&A transactions - assessing technology assets, technical debt, and cybersecurity posture.",
                color: "accent-top-amber"
              },
              {
                title: "Fractional CIO / CTO",
                desc: "An experienced technology leader embedded part-time in your business - driving IT strategy and leading your team.",
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
              Our Advisory Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Strategic IT Consulting — From Roadmap to Execution.
              <br />
              We translate complex technology decisions into clear business outcomes — giving leadership teams the confidence to invest wisely and move fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Strategy & Roadmap */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">IT Strategy & Digital Roadmap</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Develop a 12–36 month technology roadmap that aligns every IT investment with your business objectives — revenue growth, cost reduction, risk mitigation, or competitive differentiation. We benchmark your estate, identify gaps, and produce an actionable roadmap with budget.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Current-state assessment</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> 12–36 month roadmap</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> ROI-linked prioritisation</li>
              </ul>
            </div>

            {/* vCIO */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Virtual CIO (vCIO) Advisory</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A dedicated fractional CIO who sits with your leadership team, attends board meetings, leads digital transformation initiatives, manages your technology vendors, and ensures your IT investments generate measurable business value.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Board-level IT representation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Vendor & budget management</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Digital transformation leadership</li>
              </ul>
            </div>

            {/* Health Check */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">IT Audit & Health Check</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A comprehensive assessment of your technology estate covering infrastructure, security posture, software licensing, vendor contracts, support processes, and compliance status. Delivered as an executive report with a traffic-light risk rating and quick-win recommendations.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Infrastructure & security audit</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Licensing & contract review</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Executive risk report</li>
              </ul>
            </div>

            {/* AI */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI & Automation Strategy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Identify where artificial intelligence and intelligent automation (RPA, LLMs, computer vision) can generate measurable ROI in your business. We conduct an AI readiness assessment, model your data landscape, and design a practical AI adoption roadmap.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> AI readiness assessment</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Use case ROI modelling</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Governance & ethics framework</li>
              </ul>
            </div>
            
            {/* Vendor */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Vendor Selection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Navigate the overwhelming landscape of enterprise software with independent, vendor-neutral guidance. We manage full RFP/RFI processes, build evaluation matrices weighted to your specific requirements, and conduct technical due diligence.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Vendor-neutral evaluation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> RFP/RFI management</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Commercial negotiation support</li>
              </ul>
            </div>
            
            {/* Digital Transformation */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Transformation Advisory</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Guide end-to-end digital transformation programmes — from legacy modernisation and cloud-first strategies to customer experience re-platforming and data-driven operating models. We provide programme management and change management frameworks.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Legacy modernisation planning</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Change management</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Programme governance</li>
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
            <p className="text-muted-foreground">Actionable outputs that guide your technology decisions with confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-map text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IT Strategy Document</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive technology strategy aligned to business goals, with a prioritised multi-year roadmap and investment recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-clipboard-check text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vendor Evaluation Report</h3>
              <p className="text-sm text-muted-foreground">
                Weighted vendor scoring matrix, feature comparison, total cost of ownership analysis, and recommended shortlist with justification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-chart-line text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Case & ROI Model</h3>
              <p className="text-sm text-muted-foreground">
                Quantified business case for technology investments - benefits realisation plan, risk analysis, and projected ROI over 3-5 years.
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
              Why Leaders Choose Dastute for IT Consulting
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't sell implementations hidden behind advisory. We give you independent, honest guidance — then support you through execution if you need us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vendor-Neutral Independence", desc: "We are not tied to any technology vendor, reseller commission, or platform partnership. Our recommendations are based solely on what is best for your business." },
              { title: "Business Outcomes Focus", desc: "We measure our success by your business results. Every recommendation is linked to a specific metric: cost reduction, revenue uplift, or risk mitigation." },
              { title: "Advisory to Execution", desc: "Unlike pure-play consultancies, Dastute can execute everything we recommend. Our engineers stand ready to implement the roadmap we build together." },
              { title: "Multi-Geography Expertise", desc: "With operations in the UK, India, and Singapore, we advise on technology decisions with genuine international perspective and cross-border understanding." },
              { title: "Speed to Insight", desc: "We deliver actionable recommendations in weeks — not months. Our structured methodology lets us produce a strategic roadmap in 2–6 weeks." },
              { title: "Deep Technical Breadth", desc: "Our consultants are engineers and architects with hands-on experience. When they advise on a technology decision, they have built it before." },
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
              Frameworks & Methodologies
            </h2>
            <p className="text-muted-foreground">
              Industry-standard frameworks applied by certified consulting professionals.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "ITIL 4", "TOGAF", "COBIT", "ISO 27001", "PRINCE2", 
              "Agile", "DevOps", "FinOps", "Gartner Magic Quadrant", "Microsoft 365", 
              "AWS", "Azure", "Salesforce", "ServiceNow"
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
              Our Consulting Engagement Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              A structured discovery-to-delivery approach that produces clarity, not just reports.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Discovery", desc: "Workshops with leadership and IT teams to understand business objectives, pain points, and constraints." },
              { num: "02", title: "Assessment", desc: "Current state audit of technology, processes, team capability, vendor contracts, and risk landscape." },
              { num: "03", title: "Strategy", desc: "Prioritised recommendations, technology roadmap, and business case presented to leadership." },
              { num: "04", title: "Implementation", desc: "Optional programme governance, PMO support, and advisory oversight to ensure execution." },
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
            <span>Engagement: 4-12 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Consulting Expertise Across Key Sectors</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Banking & Financial Services", "Healthcare & Life Sciences", "Manufacturing & Engineering", 
                 "Logistics & Supply Chain", "Professional & Legal Services", "Fintech & Payments", 
                 "Retail & E-Commerce", "Education & EdTech", "Non-Profit & Charities", "Real Estate & Property"
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
            Ready to Align Technology With Business Goals?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get an independent perspective on your IT strategy.
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



