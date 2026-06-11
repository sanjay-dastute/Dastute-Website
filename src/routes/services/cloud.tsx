import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/cloud")({
  head: () => ({
    meta: [
      { title: "Cloud Services | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "AWS, Azure, and Google Cloud migration, management, and optimisation. Kubernetes, CI/CD, and 99.99% uptime SLAs from Dastute Technologies.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Cloud Services | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "AWS, Azure, and Google Cloud migration, management, and optimisation. Kubernetes, CI/CD, and 99.99% uptime SLAs from Dastute Technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dastute.co.uk/services/cloud" },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-cloud.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Cloud Services | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "AWS, Azure, and Google Cloud migration, management, and optimisation. Kubernetes, CI/CD, and 99.99% uptime SLAs from Dastute Technologies.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-cloud.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/cloud" },
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
            name: "Cloud Services",
            description:
              "AWS, Azure & Google Cloud migration, management and optimisation. Kubernetes, CI/CD, disaster recovery and 99.99% uptime SLAs from Dastute Technologies Limited.",
            path: "/services/cloud",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
            { name: "Cloud Services", path: "/services/cloud" },
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
            / Cloud Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Cloud Infrastructure Engineered for Scale, Security and Savings
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Seamless cloud migration, Kubernetes orchestration, CI/CD pipelines, and multi-cloud management on AWS, Azure, and Google Cloud. We design systems handling 100K+ requests/sec with 99.99% uptime SLAs.
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
            { value: "25%+", label: "Cost Reduction" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "100K+", label: "Requests/sec" },
            { value: "3", label: "Cloud Providers" },
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
              From Migration to Multi-Cloud Mastery
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Moving to the cloud is more than lifting and shifting servers. At Dastute, we design cloud architectures that are secure by default, cost-optimised from day one, and engineered to scale with your business. Whether you're migrating a monolith, building cloud-native microservices, or optimising an existing AWS estate, our certified engineers deliver measurable outcomes - not just infrastructure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cloud Migration",
                desc: "Lift-and-shift, re-platform, and re-architect migrations with zero-downtime cutover strategies.",
                color: "accent-top-blue"
              },
              {
                title: "Kubernetes & Orchestration",
                desc: "EKS, GKE, AKS deployments with auto-scaling, service mesh, and GitOps workflows.",
                color: "accent-top-emerald"
              },
              {
                title: "CI/CD Pipelines",
                desc: "GitHub Actions, GitLab CI, and ArgoCD pipelines with automated testing, security scanning, and rollback.",
                color: "accent-top-violet"
              },
              {
                title: "Disaster Recovery",
                desc: "Multi-region failover, automated backups, RTO/RPO planning, and regular DR drills.",
                color: "accent-top-amber"
              },
              {
                title: "Cost Optimisation",
                desc: "FinOps practices, reserved instance planning, and rightsizing to reduce cloud spend by 25-40%.",
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
              Our Cloud Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              End-to-End Cloud Services — One Partner, Every Layer.
              <br />
              From initial migration to continuous managed operations, we cover every cloud discipline your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Migration */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Migration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Lift-and-shift, re-platform, and re-architect workloads to AWS, Azure, or GCP with zero-downtime cutover strategies, dependency mapping, and full rollback plans. We assess every application for cloud readiness before a single byte moves.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Application readiness assessment</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Data migration & validation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Zero-downtime cutover</li>
              </ul>
            </div>

            {/* Kubernetes */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Kubernetes & Container Orchestration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Design, deploy, and manage production Kubernetes clusters on EKS, AKS, and GKE. We implement service mesh (Istio), GitOps workflows (ArgoCD), horizontal pod autoscaling, and multi-region cluster federation for enterprise-grade container platforms.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> EKS / AKS / GKE clusters</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Istio service mesh</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> GitOps with ArgoCD</li>
              </ul>
            </div>

            {/* CI/CD */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">CI/CD & DevOps Automation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Implement fully automated build, test, security-scan, and deployment pipelines using GitHub Actions, GitLab CI, Jenkins, and ArgoCD. We embed SAST/DAST security scanning, container image signing, and release gating directly into your pipeline.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> GitHub Actions / GitLab CI</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> SAST/DAST in pipeline</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Automated rollback</li>
              </ul>
            </div>

            {/* Security */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Security & Compliance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Security is built into every cloud environment we design — not bolted on. We implement zero-trust networking, IAM least-privilege policies, CloudTrail/Security Hub alerting, and compliance controls for ISO 27001, PCI-DSS, HIPAA, and UK Cyber Essentials.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Zero-trust architecture</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> CIS Benchmark hardening</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Compliance automation</li>
              </ul>
            </div>
            
            {/* FinOps */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">FinOps & Cost Optimisation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Cloud spend without governance spirals out of control. Our FinOps practice combines rightsizing analysis, reserved instance planning, Spot/Savings Plan strategies, and tagging governance to reduce cloud bills by 25–40% — with monthly visibility dashboards.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Rightsizing & reserved instances</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Cost allocation tagging</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Monthly FinOps reports</li>
              </ul>
            </div>
            
            {/* DR */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Disaster Recovery & Business Continuity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Design and implement cloud-based DR solutions with defined RTO and RPO targets. We build multi-region failover architectures, automate backup schedules and integrity verification, and conduct regular DR drills — ensuring your business keeps running.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Multi-region failover</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Automated backup & restore</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Regular DR testing</li>
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
            <p className="text-muted-foreground">Concrete outputs that keep working long after go-live.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-book text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Migration Runbook</h3>
              <p className="text-sm text-muted-foreground">
                Step-by-step migration plan with rollback procedures, dependency mapping, and go-live checklist.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-code-branch text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IaC Codebase</h3>
              <p className="text-sm text-muted-foreground">
                Terraform and Helm charts for your entire infrastructure, fully version-controlled and documented.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-chart-pie text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cost & Performance Report</h3>
              <p className="text-sm text-muted-foreground">
                Monthly FinOps analysis with savings opportunities, utilisation metrics, and optimisation recommendations.
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
              Why Businesses Trust Dastute for Cloud
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Not all cloud partners are equal. Here is what sets our cloud practice apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Multi-Cloud Certified", desc: "Our cloud team holds active certifications across AWS, Azure, and Google Cloud. You get specialists — not generalists — working on your infrastructure." },
              { title: "Security-First Architecture", desc: "Every environment starts with a security baseline — zero-trust networking, IAM least privilege, encryption, and automated compliance checks." },
              { title: "Guaranteed Cost Reduction", desc: "Our FinOps practice has delivered an average 31% cloud cost reduction for clients in the first 12 months — making every pound visible and justified." },
              { title: "IaC by Default", desc: "Every environment is defined in version-controlled Terraform and Helm — not click-ops. This means reproducible deployments and auditability." },
              { title: "UK Data Sovereignty", desc: "We design architectures using UK-region cloud deployments with appropriate egress controls and cross-border safeguards under UK GDPR." },
              { title: "24/7 Managed Operations", desc: "Post-deployment, we provide round-the-clock monitoring, incident response, and patch management so your platform is always healthy." },
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
              Certified across all major cloud platforms and DevOps toolchains.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "AWS", "Azure", "GCP", "Kubernetes", "Docker", 
              "Terraform", "Helm", "GitHub Actions", "ArgoCD", "Istio", 
              "Prometheus", "Grafana", "Datadog", "Cloudflare"
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
              Our Cloud Engagement Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Structured delivery from discovery to managed operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Discovery", desc: "Audit existing infrastructure, define migration strategy, and set measurable cost and performance targets." },
              { num: "02", title: "Architecture", desc: "Design cloud-native architecture, IaC templates, networking topology, and security baseline." },
              { num: "03", title: "Migration", desc: "Execute phased migration with parallel run periods, automated testing, and zero-downtime cutovers." },
              { num: "04", title: "Optimise", desc: "Continuous monitoring, FinOps reviews, security patching, and performance optimisation." },
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
            <span>Timeline: 6-16 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Cloud Solutions Across Every Sector</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Healthcare & Life Sciences", "Banking & Financial Services", "Fintech & Payments", 
                 "Manufacturing & Engineering", "Logistics & Supply Chain", "E-Commerce & Retail", 
                 "Education & EdTech", "Non-Profit & Public Sector", "SaaS & Consumer Platforms", "Professional Services"
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
            Ready to Modernise Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and discover how our cloud services can accelerate your growth.
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



