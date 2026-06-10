import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/web-development")({
  head: () => ({
    meta: [
      { title: "Web Development Services | Dastute Technologies Limited" },
      {
        name: "description",
        content:
          "Custom web applications with React, Next.js, Node.js, and API development from Dastute Technologies. Enterprise-grade web solutions delivered on time.",
      },
      {
        name: "keywords",
        content:
          "web development, React, Next.js, Node.js, full-stack development, API development, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "Web Development Services | Dastute Technologies Limited",
      },
      {
        property: "og:description",
        content:
          "Custom web applications with React, Next.js, Node.js, and API development from Dastute Technologies. Enterprise-grade web solutions delivered on time.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/web-development",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-web-development.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Web Development Services | Dastute Technologies Limited",
      },
      {
        name: "twitter:description",
        content:
          "Custom web applications with React, Next.js, Node.js, and API development from Dastute Technologies. Enterprise-grade web solutions delivered on time.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-web-development.jpg",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dastute.co.uk/services/web-development",
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
            name: "Web Development Services",
            description:
              "Custom web applications, React, Next.js, Node.js and API development from Dastute Technologies. Enterprise-grade, performant, and beautifully designed web solutions delivered on time.",
            path: "/services/web-development",
            areaServed: ["India", "Singapore", "United Kingdom"],
          }),
        ),
      },
      {
        type: "application/ld+json",
        children:
          '[\r\n    {\r\n      "@context": "https://schema.org",\r\n      "@type": "BreadcrumbList",\r\n      "itemListElement": [\r\n        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dastute.co.uk/"},\r\n        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dastute.co.uk/#services"},\r\n        {"@type": "ListItem", "position": 3, "name": "Web Development", "item": "https://dastute.co.uk/services/web-development"}\r\n      ]\r\n    },\r\n    {\r\n      "@context": "https://schema.org",\r\n      "@type": "FAQPage",\r\n      "mainEntity": [\r\n        {\r\n          "@type": "Question",\r\n          "name": "How long does it take to build a website?",\r\n          "acceptedAnswer": {"@type": "Answer", "text": "A professional corporate or marketing website typically takes 6â€“10 weeks from brief to launch. A custom web application or SaaS platform takes 3â€“9 months depending on complexity. We use an agile process with working increments delivered every 2 weeks, so you see real progress and can provide feedback continuously."}\r\n        },\r\n        {\r\n          "@type": "Question",\r\n          "name": "Do you build websites that perform well on Google?",\r\n          "acceptedAnswer": {"@type": "Answer", "text": "Yes. Technical SEO and Core Web Vitals performance are built into our development process. We target LCP under 2.5 seconds, CLS under 0.1, and INP under 200ms using server-side rendering, image optimisation (WebP/AVIF), code splitting, CDN distribution, and efficient caching. We implement proper semantic HTML, structured data (Schema.org), canonical URLs, sitemap.xml, and robots.txt on every project."}\r\n        },\r\n        {\r\n          "@type": "Question",\r\n          "name": "What technologies do you use for web development?",\r\n          "acceptedAnswer": {"@type": "Answer", "text": "We work across the modern web stack: React, Next.js, Vue, Nuxt, Angular, and Node.js for frontend and backend. For e-commerce we build on Shopify, WooCommerce, Magento, and headless commerce architectures. For CMS we use Contentful, Sanity, Strapi, and WordPress. All projects use TypeScript for type safety and are built with comprehensive automated testing."}\r\n        },\r\n        {\r\n          "@type": "Question",\r\n          "name": "Do you provide website maintenance after launch?",\r\n          "acceptedAnswer": {"@type": "Answer", "text": "Yes. We offer monthly maintenance retainers covering security updates, content changes, performance monitoring, uptime monitoring, and feature enhancements. We also provide emergency support SLAs for business-critical web applications."}\r\n        },\r\n        {\r\n          "@type": "Question",\r\n          "name": "Can you redesign or rebuild our existing website?",\r\n          "acceptedAnswer": {"@type": "Answer", "text": "Yes. We handle complete redesigns and platform migrations - including migrating from legacy CMS platforms, preserving SEO equity during migrations (301 redirect mapping, canonical management), and improving conversion rate through UX redesign. We audit your existing site before proposing any rebuild to ensure we understand what is working and what is not."}\r\n        }\r\n      ]\r\n    }\r\n  ]',
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
            / Web Development
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Web Applications Built for Performance, Scale and Conversion
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            From corporate websites to enterprise web platforms - we build with React, Next.js, Node.js, and Python, delivering 10-100x performance gains over legacy alternatives with full CI/CD and automated testing.
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
            { value: "10-100x", label: "Delivery Speed" },
            { value: "React/Next.js", label: "Tech" },
            { value: "Automated", label: "Testing" },
            { value: "50+", label: "Projects" },
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
              Full-Stack Web Engineering That Ships and Scales
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Great web applications require more than good design - they need solid architecture, clean code, and engineering discipline. At Dastute, we build full-stack web applications from the ground up using modern frameworks and best practices. Every project includes automated testing, CI/CD pipelines, code reviews, and documentation - ensuring what we deliver keeps working long after launch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "UI/UX Design",
                desc: "User research, wireframing, and Figma prototypes that create interfaces driving engagement and conversion.",
                color: "accent-top-blue"
              },
              {
                title: "Full-Stack Development",
                desc: "React/Next.js frontends, Node.js/Python backends, GraphQL and REST APIs, optimised for performance.",
                color: "accent-top-emerald"
              },
              {
                title: "E-Commerce & CMS",
                desc: "Shopify, WooCommerce, Strapi, and custom headless CMS solutions with seamless payment integrations.",
                color: "accent-top-violet"
              },
              {
                title: "API Development & Integration",
                desc: "RESTful and GraphQL APIs, third-party integrations (Stripe, Salesforce, HubSpot, payment gateways).",
                color: "accent-top-amber"
              },
              {
                title: "SEO & Performance",
                desc: "Core Web Vitals optimisation, server-side rendering, lazy loading, and CDN configuration for maximum page speed.",
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
              Our Web Development Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Full-Stack Web Development — From Corporate Websites to Enterprise Platforms
              <br />
              We build web products that perform, convert, and scale — from pixel-perfect marketing sites to complex transactional platforms handling millions of users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Corporate & Marketing */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Popular</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Corporate & Marketing Websites</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                High-performance, SEO-optimised corporate websites and landing pages built with Next.js, Nuxt.js, Gatsby, or custom HTML/CSS — delivering sub-2-second load times, Core Web Vitals compliance, and conversion-focused UX. Full CMS integration for editorial teams to manage content independently.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Core Web Vitals optimised</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> CMS integration</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> WCAG 2.1 AA accessibility</li>
              </ul>
            </div>

            {/* Custom Web Applications */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Core</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Web Applications (SaaS & Portals)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Complex, feature-rich web applications built with React, Vue.js, Angular, and TypeScript frontends backed by Node.js, Python/Django, Go, or .NET Core APIs. From SaaS platforms and customer portals to booking systems, workflow management tools, and data dashboards.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> React / Vue / Angular</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Node.js / Django / .NET Core</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> SaaS & multi-tenant architecture</li>
              </ul>
            </div>

            {/* E-Commerce Development */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">E-Commerce Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Full-featured e-commerce platforms built on Shopify, WooCommerce, Magento, and custom headless e-commerce architectures with React/Next.js frontends and composable commerce APIs. We handle payment gateway integration, inventory management, multi-currency support, and conversion rate optimisation.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Shopify / WooCommerce / Magento</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Headless commerce architecture</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Payment & checkout optimisation</li>
              </ul>
            </div>

            {/* API Development & Microservices */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-amber">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">API Development & Microservices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Design and build RESTful and GraphQL APIs, microservices architectures, and event-driven systems. We implement API gateway patterns, OpenAPI specifications, OAuth 2.0 authentication, rate limiting, and monitoring — creating APIs that are performant, secure, and easy to integrate.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> REST / GraphQL / gRPC</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> OpenAPI documentation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-amber-500"></i> OAuth 2.0 & API security</li>
              </ul>
            </div>
            
            {/* CMS & Headless Content */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-rose">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">CMS & Headless Content Platforms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Build content-driven platforms with headless CMS architectures that decouple content management from frontend delivery — enabling editorial teams to publish across web, mobile, and third-party channels from a single source of truth. We also implement WordPress at enterprise scale.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Contentful / Sanity / Strapi</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> WordPress enterprise builds</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-rose-500"></i> Omnichannel content delivery</li>
              </ul>
            </div>
            
            {/* Performance & SEO */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance, SEO & CRO</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Systematic performance and conversion improvement for existing web platforms. We conduct Core Web Vitals audits, Google Lighthouse analysis, technical SEO audits, and A/B testing programmes — identifying and fixing the specific bottlenecks costing you ranking and revenue.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Core Web Vitals optimisation</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Technical SEO audit & fix</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> A/B testing & CRO</li>
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
            <p className="text-muted-foreground">Production-ready outputs with full documentation and performance baselines.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-code text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Production Application</h3>
              <p className="text-sm text-muted-foreground">
                Fully tested, documented web application deployed to your chosen hosting environment with CI/CD pipeline active.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-file-code text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Architecture diagrams, API documentation, deployment runbooks, and developer onboarding guides.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm text-center">
              <i className="fas fa-chart-line text-3xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Report</h3>
              <p className="text-sm text-muted-foreground">
                Lighthouse scores, Core Web Vitals baseline, load test results, and SEO technical audit.
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
              Why Businesses Build Their Web Platforms with Dastute
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a web product is a long-term investment. Here is why our clients choose Dastute and keep coming back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Performance is Non-Negotiable", desc: "Every web product we build targets sub-2-second load times, Core Web Vitals green scores, and Lighthouse 90+ performance ratings." },
              { title: "Security Embedded in Every Build", desc: "OWASP Top 10 vulnerabilities are checked and remediated before every release with standard security stacks and CSP headers." },
              { title: "Built for Scale from Day One", desc: "We architect web applications to handle traffic spikes using horizontal auto-scaling, CDN distribution, and stateless design." },
              { title: "Clean, Maintainable Code", desc: "TypeScript for type safety, ESLint/Prettier, comprehensive testing, and inline documentation for seamless handovers." },
              { title: "UX & Design In-House", desc: "Our UI/UX designers work directly with engineers from day one, preventing mismatches between what was designed and built." },
              { title: "Agile Delivery & Weekly Demos", desc: "We deliver in 2-week sprints with live demos. Transparent backlogs and burndown charts mean you are always in control." },
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
              Modern full-stack frameworks and tooling for every project.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "Vue.js", "TypeScript", "Node.js", 
              "Python", "Django", "GraphQL", "REST", "PostgreSQL", 
              "MongoDB", "Tailwind CSS", "Figma", "Storybook", "Vercel", "AWS"
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
              Our Development Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              From discovery to deployment - a structured process that delivers on time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Discovery & Design", desc: "User research, technical requirements, wireframes, and Figma prototypes signed off before development starts." },
              { num: "02", title: "Architecture & Setup", desc: "Tech stack selection, CI/CD pipeline setup, repository structure, and sprint planning with your team." },
              { num: "03", title: "Agile Build & Test", desc: "Two-week sprints with demos, automated testing on every commit, and transparent progress reporting." },
              { num: "04", title: "Launch & Support", desc: "Performance-tested deployment, SEO audit, handover documentation, and optional ongoing maintenance." },
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
            <span>Timeline: 8-24 weeks</span>
          </div>

          {/* Industries Tag Cloud inside Dark Section */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
             <h3 className="text-2xl font-bold text-white mb-8">Web Development Across Every Sector</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Fintech & Financial Services", "Healthcare & MedTech", "Retail & E-Commerce", 
                 "Education & EdTech", "Logistics & Supply Chain", "Manufacturing & B2B", 
                 "SaaS & Tech Startups", "Professional Services", 
                 "Travel & Hospitality", "Non-Profit & Charities"
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
            Ready to Start Your Web Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and technical scoping session for your web application today.
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


