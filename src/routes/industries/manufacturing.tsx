import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/industries/manufacturing")({
  head: () => ({
    meta: [
      { title: "IT Support for Manufacturing UK | Industrial IT Services | Dastute" },
      {
        name: "description",
        content:
          "Specialist IT support for the UK manufacturing sector. We secure factory floor IoT, integrate ERP systems, and ensure zero-downtime production environments.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "IT Support for Manufacturing UK | Industrial IT Services | Dastute",
      },
      {
        property: "og:description",
        content:
          "Specialist IT support for the UK manufacturing sector. We secure factory floor IoT, integrate ERP systems, and ensure zero-downtime production environments.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/industries/manufacturing",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-manufacturing.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Support for Manufacturing UK | Industrial IT Services | Dastute",
      },
      {
        name: "twitter:description",
        content:
          "Specialist IT support for the UK manufacturing sector. We secure factory floor IoT, integrate ERP systems, and ensure zero-downtime production environments.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-manufacturing.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/industries/manufacturing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Manufacturing IT Solutions & Support",
            description: "Specialist IT support for the UK manufacturing sector. We secure factory floor IoT, integrate ERP systems, and ensure zero-downtime production environments.",
            path: "/industries/manufacturing",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Manufacturing", path: "/industries/manufacturing" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/industries/manufacturing", [
            {
              question: "Do you provide IT support for 24/7 manufacturing operations?",
              answer: "Yes, we provide true 24/7/365 proactive IT support for manufacturing environments. Because production lines cannot afford unexpected downtime, our network operations center continuously monitors your servers, IoT devices, and ERP databases to identify and resolve technical issues before they disrupt operations.",
            },
            {
              question: "Can you integrate legacy machinery with modern cloud ERPs?",
              answer: "Yes, we specialize in bridging the gap between legacy industrial control systems (ICS) and modern cloud ERP platforms. We deploy secure edge computing gateways and industrial IoT sensors to extract production data from older machinery without compromising network security.",
            },
            {
              question: "How do you protect factory floor networks from cyberattacks?",
              answer: "We protect factory floor networks by implementing strict network segmentation, isolating operational technology (OT) from corporate IT networks. We also deploy advanced endpoint protection, conduct regular vulnerability scans on industrial hardware, and establish immutable backups to instantly recover from ransomware attacks.",
            }
          ])
        ),
      }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto text-center md:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
            / Manufacturing IT Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            IT Support for UK Manufacturing
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
            Zero-downtime infrastructure for the industrial sector. We secure factory floor networks, modernize legacy systems, and integrate complex ERP and supply chain operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Speak to an Architect
            </Link>
            <a
              href="#capabilities"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border text-center md:text-left">
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">24/7</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">OT & IT Support</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">IoT</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Sensor Integration</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">ERP</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Cloud Migrations</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">Zero</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Planned Downtime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Modernizing the Factory Floor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When production stops, revenue stops. We build resilient IT infrastructure capable of handling the harsh environments, legacy hardware constraints, and strict uptime requirements of modern manufacturing facilities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "ERP & Supply Chain IT",
                desc: "End-to-end management of complex ERP systems (SAP, Oracle, Dynamics). We ensure high-availability databases and seamless integrations with logistics partners.",
                color: "accent-top-blue",
              },
              {
                title: "Factory Floor Networking",
                desc: "We deploy ruggedized switching, high-density Wi-Fi 6, and secure 5G networks capable of operating in challenging industrial environments.",
                color: "accent-top-emerald",
              },
              {
                title: "OT & IT Segmentation",
                desc: "Strict network isolation. We airgap vulnerable legacy machinery and Operational Technology (OT) networks from public-facing corporate IT to prevent lateral ransomware spread.",
                color: "accent-top-violet",
              },
              {
                title: "Industrial IoT Integration",
                desc: "Connecting the unconnected. We implement edge computing gateways to pull predictive maintenance data from legacy PLC systems into cloud analytics dashboards.",
                color: "accent-top-rose",
              },
              {
                title: "Supply Chain Security",
                desc: "Securing vendor portals and B2B EDI connections. We implement Zero Trust architectures to ensure third-party contractors cannot compromise your internal network.",
                color: "accent-top-amber",
              },
              {
                title: "24/7 Production Support",
                desc: "Around-the-clock monitoring of critical manufacturing servers. Our engineers resolve underlying infrastructure issues before they cause assembly line stoppages.",
                color: "accent-top-cyan",
              }
            ].map((feature, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${feature.color} flex flex-col`}
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4">
                / Legacy Modernization
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Bridging the gap between legacy machines and cloud data.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Manufacturers cannot simply rip and replace multi-million pound machinery just because it runs on an outdated operating system. We provide secure pathways to digitize older equipment.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-microchip text-blue-500 mt-1"></i> <div><strong>Edge Computing:</strong> Process real-time sensor data locally on the factory floor to reduce latency and bandwidth costs before cloud syncing.</div></li>
                <li className="flex gap-3"><i className="fas fa-shield-alt text-blue-500 mt-1"></i> <div><strong>Virtual Patching:</strong> Deploying intrusion prevention systems (IPS) to shield unpatchable legacy systems (like Windows XP terminals) from modern exploits.</div></li>
                <li className="flex gap-3"><i className="fas fa-network-wired text-blue-500 mt-1"></i> <div><strong>Secure Remote Access:</strong> VPN and bastion host configurations allowing external machine vendors to perform remote maintenance securely.</div></li>
              </ul>
            </div>
            <div className="glass-card-strong rounded-3xl p-8 accent-top-amber relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-amber-500/10">
                <i className="fas fa-industry text-9xl"></i>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 relative z-10">
                Industry 4.0 Ready
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                From food and beverage processing plants to precision aerospace engineering, we build the digital foundation required for smart manufacturing and AI-driven automation.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-amber-600">Smart</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Inventory Management</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">Agile</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Production Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-4xl mx-auto p-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Manufacturing IT FAQs</h2>
            <p className="text-muted-foreground">Answers to common questions from Operations and Plant Managers.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you provide IT support for 24/7 manufacturing operations?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we provide true 24/7/365 proactive IT support for manufacturing environments. Because production lines cannot afford unexpected downtime, our network operations center continuously monitors your servers, IoT devices, and ERP databases to identify and resolve technical issues before they disrupt operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can you integrate legacy machinery with modern cloud ERPs?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we specialize in bridging the gap between legacy industrial control systems (ICS) and modern cloud ERP platforms. We deploy secure edge computing gateways and industrial IoT sensors to extract production data from older machinery without compromising network security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How do you protect factory floor networks from cyberattacks?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We protect factory floor networks by implementing strict network segmentation, isolating operational technology (OT) from corporate IT networks. We also deploy advanced endpoint protection, conduct regular vulnerability scans on industrial hardware, and establish immutable backups to instantly recover from ransomware attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Eliminate Production Downtime
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Upgrade your industrial IT infrastructure with proactive support and uncompromised cybersecurity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Get a Network Audit
            </Link>
            <Link
              to="/technology"
              className="btn-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              View Our Technology
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
