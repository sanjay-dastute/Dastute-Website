import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/mobile")({
  head: () => ({
    meta: [
      {
        title:
          "Mobile App Development UK | React Native &amp; Flutter | Dastute",
      },
      {
        name: "description",
        content:
          "Cross-platform mobile app development with React Native and Flutter. One codebase, iOS and Android. Save 70% vs dual native. Dastute UK.",
      },
      {
        name: "keywords",
        content:
          "hybrid app development UK, React Native developer UK, Flutter app development UK, cross-platform mobile app UK, React Native agency UK, Flutter development UK, Dastute Technologies",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content:
          "Hybrid App Development | React Native &amp; Flutter | Dastute Technologies",
      },
      {
        property: "og:description",
        content:
          "Cross-platform mobile app development with React Native and Flutter. One codebase, iOS and Android. Save 70% vs dual native. Dastute UK.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dastute.co.uk/services/mobile" },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-mobile.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Hybrid App Development | React Native &amp; Flutter | Dastute Technologies",
      },
      {
        name: "twitter:description",
        content:
          "Cross-platform mobile app development with React Native and Flutter. One codebase, iOS and Android. Save 70% vs dual native. Dastute UK.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-mobile.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/mobile" },
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
            name: "Hybrid & Cross-Platform App Development",
            description:
              "Hybrid and cross-platform mobile app development with React Native and Flutter from Dastute Technologies. Single codebase deploying to iOS and Android simultaneously.",
            path: "/services/mobile",
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
              name: "Hybrid & Cross-Platform App Development",
              path: "/services/mobile",
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
            / Mobile App Development
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            One Codebase. Two Stores. 70% Cost Saving.
            <br />
            <span className="text-gradient-primary">Ship Faster with React Native & Flutter.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed">
            Cross-platform mobile development that deploys to both iOS and Android from a single codebase — without sacrificing native-quality performance. React Native and Flutter expertise for MVPs, enterprise tools, and consumer apps that need both stores simultaneously.
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
            { value: "iOS + Android", label: "Both Platforms" },
            { value: "RN / Flutter", label: "Frameworks" },
            { value: "70%", label: "Cost Saving vs Dual" },
            { value: "4.8+", label: "Avg App Rating" },
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
              One Codebase. Native-Quality UX. Both Stores. React Native & Flutter Specialists.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most business apps don't need separate iOS and Android codebases. React Native and Flutter share 80–90% of code across both platforms — delivering near-native performance and a single team managing a single codebase. Dastute's cross-platform engineers build hybrid apps that users can't distinguish from native, at a fraction of the cost and time-to-market.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "iOS Development",
                desc: "Native Swift development for iPhone and iPad with full Apple design guidelines compliance and App Store submission.",
                color: "accent-top-blue"
              },
              {
                title: "Android Development",
                desc: "Native Kotlin development for Android with Material Design, deep hardware integration, and Google Play deployment.",
                color: "accent-top-emerald"
              },
              {
                title: "React Native & Flutter",
                desc: "Cross-platform apps sharing 80-90% of code, deployed to both stores simultaneously, with near-native performance.",
                color: "accent-top-violet"
              },
              {
                title: "Push & Offline Mode",
                desc: "Firebase push notifications, background sync, offline-first architecture, and deep linking.",
                color: "accent-top-amber"
              },
              {
                title: "Analytics & Optimisation",
                desc: "Firebase Analytics, Crashlytics, A/B testing, and App Store Optimisation (ASO) to drive downloads.",
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
              Our Mobile Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From consumer apps targeting millions of users to enterprise mobility tools for field teams — we engineer mobile products that perform, engage, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Native Android */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-emerald">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">Native</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Android Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                High-performance native Android applications built with Kotlin and Jetpack Compose. We leverage the full Android platform: Material Design 3, background processing, biometric authentication, NFC, camera APIs, and deep system integrations.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Kotlin & Jetpack Compose</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Full Android API access</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-emerald-500"></i> Material Design 3</li>
              </ul>
            </div>

            {/* Native iOS */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-blue">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2 block">Native</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">iOS Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Premium iOS applications built with Swift and SwiftUI — delivering the fluid, responsive, and delightful experience that Apple users expect. Full access to iOS capabilities: Face ID, HealthKit, ARKit, Core ML, and in-app purchases.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Swift & SwiftUI</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> Face ID / HealthKit</li>
                <li className="flex items-center gap-2"><i className="fas fa-check text-blue-500"></i> App Store submission</li>
              </ul>
            </div>

            {/* Cross-Platform */}
            <div className="glass-card-strong p-8 rounded-3xl accent-top-violet md:col-span-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2 block">Popular</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Cross-Platform: React Native & Flutter</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Deliver high-quality apps on both iOS and Android from a single codebase with React Native (JS/TS) or Flutter (Dart) — achieving 70–80% cost savings versus dual native development without sacrificing native-quality UX. Ideal for startups, MVPs, and enterprise tools where feature parity across platforms is critical.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> 70–80% cost vs dual native</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-violet-500"></i> Near-native performance</li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-border shadow-sm text-center">
                    <i className="fab fa-react text-4xl text-blue-400 mb-2"></i>
                    <h4 className="font-bold text-slate-900">React Native</h4>
                    <p className="text-xs text-muted-foreground">JavaScript / TypeScript</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border shadow-sm text-center">
                    <div className="text-4xl text-blue-500 mb-2 font-bold">F</div>
                    <h4 className="font-bold text-slate-900">Flutter</h4>
                    <p className="text-xs text-muted-foreground">Dart Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Enterprise Mobile Apps</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Field service management, mobile ERP/CRM, warehouse scanning, and corporate communication tools.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Offline-first architecture</li>
                <li>• MDM & SSO integration</li>
                <li>• ERP / CRM mobile access</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mobile Security & Compliance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Security engineered in: encrypted local storage, jailbreak detection, code obfuscation, and PKCE.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• OWASP Mobile Top 10 testing</li>
                <li>• Certificate pinning</li>
                <li>• Biometric authentication</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Maintenance & Growth</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Post-launch support, App Store updates, A/B testing, and user funnel analytics.
              </p>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Crash & performance monitoring</li>
                <li>• A/B testing & analytics</li>
                <li>• App Store Optimisation (ASO)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dastute */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Why Businesses Build Their Mobile Apps with Dastute
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Great mobile apps are not just about code. They require UX thinking, platform expertise, performance engineering, and post-launch commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "UX-First Development", desc: "User research, wireframing, and high-fidelity prototypes. We only hand off to engineering when the experience is validated." },
              { title: "Performance Engineered", desc: "Lazy loading, state management (Redux/Zustand), image optimisation, and offline-first data sync built-in." },
              { title: "Security by Default", tested: "OWASP Top 10 testing, certificate pinning, jailbreak detection, and encrypted storage from day one." },
              { title: "App Store Expertise", desc: "Deep knowledge of Apple and Google Play review guidelines ensuring apps pass first-submission review." },
              { title: "Post-Launch Partnership", desc: "Ongoing support for OS updates, crash monitoring, feature iteration, and real user analytics." },
              { title: "Full-Stack Capability", desc: "We build the backend APIs, cloud infrastructure, and admin dashboards your mobile product needs." },
            ].map((item, i) => (
              <div key={i} className="glass-card-strong p-6 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc || item.tested}</p>
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
              Cross-platform and native mobile development expertise.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Swift", "Kotlin", "React Native", "Flutter", "Dart", 
              "Firebase", "REST APIs", "GraphQL", "Xcode", "Android Studio", 
              "Figma", "App Store Connect", "Google Play Console"
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
              Our Mobile Development Process
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Structured delivery from concept to App Store in 10-20 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "UX Research & Prototyping", desc: "User research, information architecture, wireframes, and clickable Figma prototypes for both platforms." },
              { num: "02", title: "Architecture & Setup", desc: "Tech stack confirmation, project scaffolding, CI/CD pipeline, and backend API design." },
              { num: "03", title: "Agile Build & Test", desc: "Sprint-based development with weekly builds, automated testing, and regular client demos." },
              { num: "04", title: "Launch & Optimise", desc: "App Store submission, launch monitoring, crash analysis, and ASO to maximise downloads." },
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
             <h3 className="text-2xl font-bold text-white mb-8">Mobile Apps Across Every Sector</h3>
             <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
               {[
                 "Healthcare & Fitness", "Fintech & Banking", "Retail & E-Commerce", 
                 "Logistics & Field Service", "Education & EdTech", "Food & Hospitality", 
                 "Social & Consumer Platforms", "Gaming & Entertainment", 
                 "Manufacturing & Field Tech", "PropTech & Real Estate"
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
            Ready to Build Your App?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get a free quote and technical scoping session for your mobile project today.
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



