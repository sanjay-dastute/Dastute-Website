import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      { title: "Custom Software Development UK | Dastute Technologies" },
      {
        name: "description",
        content:
          "Bespoke enterprise software development - SaaS platforms, process automation, legacy modernisation, and microservices. Dastute Technologies, UK.",
      },
      {
        name: "keywords",
        content:
          "custom software development, bespoke software, SaaS development, legacy modernisation, process automation, enterprise software, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Custom Software Development UK | Dastute Technologies",
      },
      {
        property: "og:description",
        content:
          "Bespoke enterprise software development - SaaS platforms, process automation, legacy modernisation, and microservices. Dastute Technologies, UK.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/custom-software",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-custom-software.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Custom Software Development UK | Dastute Technologies",
      },
      {
        name: "twitter:description",
        content:
          "Bespoke enterprise software development - SaaS platforms, process automation, legacy modernisation, and microservices. Dastute Technologies, UK.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-custom-software.jpg",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dastute.co.uk/services/custom-software",
      },
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
            name: "Custom Software Development",
            description:
              "Bespoke enterprise software development including SaaS products, process automation, legacy modernisation, and microservices architecture from Dastute Technologies.",
            path: "/services/custom-software",
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
              name: "Custom Software Development",
              path: "/services/custom-software",
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
            / Custom Software
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Bespoke Custom Software Built Around the Way Your Business Works
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            We provide fully customised solutions, whether extending existing products your clients currently use, or building highly bespoke software from scratch. Delivered globally by well-skilled developers across every major tech stack.
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
            { value: "100%", label: "Customised Solutions" },
            { value: "Global", label: "Industry Reach" },
            { value: "Any", label: "Tech Stack Supported" },
            { value: "Top 1%", label: "Skilled Developers" },
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
              Global Scale. Any Tech Stack. Zero Compromise.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't force a one-size-fits-all approach. If you have an existing product, we can customise, integrate, and support it. If you need a completely new platform, our skilled developers build highly customised versions tailored to your exact industry requirements, anywhere in the world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Existing Product Customisation",
                desc: "We provide deep customisation, ongoing feature development, and integration for products your clients already use.",
                color: "accent-top-blue"
              },
              {
                title: "Bespoke Development",
                desc: "Highly customised software built from scratch to perfectly align with your unique operational workflows.",
                color: "accent-top-emerald"
              },
              {
                title: "Global Industry Expertise",
                desc: "We deliver tailored solutions across any sort of industry globally, understanding complex regulatory and market nuances.",
                color: "accent-top-violet"
              },
              {
                title: "All Tech Stacks Supported",
                desc: "Our well-skilled developers are proficient in every major modern tech stack, ensuring we use the right tool for the job.",
                color: "accent-top-amber"
              },
              {
                title: "Legacy Modernisation",
                desc: "A practical approach to upgrading legacy platforms and adding new custom capabilities without disrupting operations.",
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
              Our Custom Software Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              End-to-end engineering tailored entirely to your business and your technology landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Existing Products */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Integration</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Existing Product Customisation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We provide all customised work for existing products that your clients are already using. Instead of rip-and-replace, we build custom plugins, API layers, and ongoing functional extensions to make the current software work exactly as required.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Platform-specific customisations</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> API & Middleware development</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Ongoing technical support</li>
              </ul>
            </div>

            {/* Bespoke Solutions */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Greenfield</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Highly Customised New Builds</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                For complex, unique business models, off-the-shelf software falls short. We build very customised versions of enterprise software from the ground up, delivering SaaS platforms, internal portals, and automation tools engineered for your specific global industry.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Bespoke SaaS product development</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Internal enterprise portals</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Custom workflow automation</li>
              </ul>
            </div>

            {/* Global & Any Industry */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Reach & Any Industry</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Our custom software practice serves clients globally. Whether you are in healthcare, fintech, logistics, retail, or manufacturing, we adapt to the specific compliance, security, and operational standards of your sort of industry.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Cross-border compliance (GDPR, etc.)</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Multi-currency & localisation support</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Industry-specific data workflows</li>
              </ul>
            </div>
            
            {/* Skilled Devs & Tech Stacks */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Any Tech Stack. Well-Skilled Developers.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We are technology agnostic. We use all sorts of tech stacks depending on what the project demands. Our well-skilled developers are experts in JavaScript frameworks, Python, Java, .NET, Go, and modern cloud-native architectures.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Senior full-stack engineers</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Polyglot language capabilities</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> Cloud-agnostic infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Product Integrations */}
      <section className="bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
              / Platform Ecosystems
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Extending the Platforms You Already Rely On
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We specialise in providing all customised work for existing enterprise products. We don't just configure; our well-skilled developers write custom code, middleware, and bespoke plugins to make these systems do exactly what your global operations require.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CRM & Sales", products: "Salesforce, HubSpot, Microsoft Dynamics", icon: "fa-users" },
              { title: "ERP & Operations", products: "SAP, Oracle NetSuite, Odoo", icon: "fa-cogs" },
              { title: "E-Commerce", products: "Shopify Plus, Magento, WooCommerce", icon: "fa-shopping-cart" },
              { title: "CMS & Portals", products: "WordPress, Contentful, Strapi", icon: "fa-laptop-code" },
              { title: "Data & Analytics", products: "Snowflake, PowerBI, Tableau", icon: "fa-chart-bar" },
              { title: "Cloud Ecosystems", products: "AWS, Azure, Google Cloud Workspace", icon: "fa-cloud" }
            ].map((ecosystem, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <i className={`fas ${ecosystem.icon} text-2xl text-blue-500 mb-4`}></i>
                <h4 className="font-bold text-slate-900 mb-2">{ecosystem.title}</h4>
                <p className="text-sm text-muted-foreground">{ecosystem.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO: Custom vs Off the shelf */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 block mb-4">
                / Why Custom?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Custom Software vs. Off-The-Shelf Solutions
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                When should you build a very customised version instead of buying SaaS? The answer lies in your competitive advantage. If a process makes your business unique globally, off-the-shelf software will limit you.
              </p>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                  <span><strong>Zero Licensing Traps:</strong> You own the IP. No per-seat scaling costs as your team grows globally.</span>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                  <span><strong>Exact Process Fit:</strong> We build around your operations, so your staff don't have to change how they work to fit the software.</span>
                </li>
                <li className="flex gap-3">
                  <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                  <span><strong>Infinite Scalability:</strong> Using modern tech stacks, we build architecture that handles 10 users or 10 million.</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card-dark rounded-3xl p-8 border border-white/10 relative">
               <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                 The Dastute Advantage
               </div>
               <h3 className="text-2xl font-bold text-white mb-6">How We Deliver</h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="text-blue-400 font-bold mb-1">Well-Skilled Developers</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">Not just coders. We deploy senior engineers who understand business logic and complex data structures.</p>
                 </div>
                 <div>
                   <h4 className="text-blue-400 font-bold mb-1">All Sorts of Tech Stacks</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">From legacy PHP monoliths to modern React, Node, and Python microservices on Kubernetes.</p>
                 </div>
                 <div>
                   <h4 className="text-blue-400 font-bold mb-1">Any Industry Globally</h4>
                   <p className="text-sm text-slate-400 leading-relaxed">Operating across 3 regions, we understand global data compliance, financial regulations, and supply chain intricacies.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">What We Deliver</h2>
            <p className="text-muted-foreground">Maintainable foundations and clear technical handovers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-code text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Maintainable Codebase</h3>
              <p className="text-sm text-muted-foreground">
                Clean, documented, and fully tested code owned completely by you with no vendor lock-in.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-plug text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Integrations</h3>
              <p className="text-sm text-muted-foreground">
                Bespoke APIs and middleware connecting your new software securely to your existing products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-life-ring text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                Continuous iteration, feature development, and SLAs delivered globally by skilled developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              We Use All Sorts of Tech Stacks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our skilled developers adapt to your environment. We support modern, legacy, and emerging technologies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "Django",
              "Java", "Spring Boot", ".NET Core", "C#", "Go", "Ruby on Rails", 
              "PHP", "Laravel", "GraphQL", "REST API", "PostgreSQL", "MongoDB", 
              "AWS", "Azure", "GCP", "Docker", "Kubernetes"
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
              Our Custom Software Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Agile development that prioritises business outcomes and seamless integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Discovery & Analysis", desc: "We map your exact business process and evaluate any existing products that need customisation." },
              { num: "02", title: "Architecture Design", desc: "Selecting the optimal tech stack and designing secure, scalable foundations for your global audience." },
              { num: "03", title: "Agile Development", desc: "Iterative sprints delivered by well-skilled developers with continuous testing and feedback." },
              { num: "04", title: "Deployment & Support", desc: "Seamless rollout, user training, and ongoing feature development for your highly customised version." },
            ].map((step, i) => (
              <div key={i} className="glass-card-dark rounded-3xl p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-black text-white/5">{step.num}</span>
                <div className="font-mono text-sm text-blue-400 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Software For Any Sort of Industry Globally</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Healthcare & Life Sciences", "Fintech & Banking", "Logistics & Supply Chain", 
                 "E-Commerce & Retail", "Manufacturing & ERP", "EdTech & Education", 
                 "Real Estate & PropTech", "SaaS & Startups", "Energy & Utilities", "Government & Public Sector"
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
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Whether customising an existing product or building from scratch, our skilled developers are ready.
          </p>
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Discuss your brief
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}



