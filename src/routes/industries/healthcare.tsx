import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "IT Support for Healthcare UK | Medical IT Solutions | Dastute" },
      {
        name: "description",
        content:
          "Specialist managed IT support for healthcare in the UK. We secure clinical systems, manage DSPT/NHS compliance, and support EPR/EHR integrations.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "IT Support for Healthcare UK | Medical IT Solutions | Dastute",
      },
      {
        property: "og:description",
        content:
          "Specialist managed IT support for healthcare in the UK. We secure clinical systems, manage DSPT/NHS compliance, and support EPR/EHR integrations.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/industries/healthcare",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-healthcare.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Support for Healthcare UK | Medical IT Solutions | Dastute",
      },
      {
        name: "twitter:description",
        content:
          "Specialist managed IT support for healthcare in the UK. We secure clinical systems, manage DSPT/NHS compliance, and support EPR/EHR integrations.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-healthcare.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/industries/healthcare" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "Healthcare IT Solutions",
            description: "Specialist managed IT support for healthcare in the UK. We secure clinical systems, manage DSPT/NHS compliance, and support EPR/EHR integrations.",
            path: "/industries/healthcare",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Healthcare", path: "/industries/healthcare" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/industries/healthcare", [
            {
              question: "Do you help clinics achieve NHS DSPT compliance?",
              answer: "Yes, we comprehensively guide healthcare providers through the NHS Data Security and Protection Toolkit (DSPT) assessment. Our team audits your infrastructure, implements required technical controls, and generates the mandatory documentation to ensure seamless compliance and secure access to NHS data networks.",
            },
            {
              question: "Can you support our existing clinical software systems?",
              answer: "Yes, we fully support major Electronic Patient Record (EPR) and Electronic Health Record (EHR) systems used in the UK. We proactively liaise directly with your software vendors regarding updates, API integrations (HL7/FHIR), and database troubleshooting so your clinical staff never have to.",
            },
            {
              question: "How do you secure patient data against ransomware?",
              answer: "We secure patient data by deploying robust Endpoint Detection and Response (EDR) software, immutable offsite backups, and strict role-based access controls (RBAC). Furthermore, we enforce multi-factor authentication (MFA) and provide staff cybersecurity training to actively prevent ransomware infections and ensure GDPR compliance.",
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
            / Healthcare IT Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            Secure, Compliant IT Support for UK Healthcare
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
            From NHS DSPT compliance and patient data security to seamless EPR integrations. We provide specialist managed IT services that allow clinicians to focus entirely on patient care.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Book an IT Audit
            </Link>
            <a
              href="#capabilities"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              View Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border text-center md:text-left">
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">NHS DSPT</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ready Frameworks</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">HL7 / FHIR</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Integration Specialists</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">100%</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">GDPR Aligned</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">24/7</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Clinical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Specialist Healthcare IT Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that generic IT support doesn't work for clinical environments. We build secure, highly available networks designed around the strict compliance and rapid response requirements of modern medicine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "NHS Compliance (DSPT)",
                desc: "We manage your Data Security and Protection Toolkit submission, ensuring your practice meets NHS digital standards and maintains secure access to central health networks.",
                color: "accent-top-blue",
              },
              {
                title: "EPR/EHR Management",
                desc: "Direct liaison with your clinical software vendors. We handle updates, server maintenance, and troubleshooting for systems like EMIS, SystmOne, and specialized private software.",
                color: "accent-top-emerald",
              },
              {
                title: "Clinical Data Security",
                desc: "Zero-trust architecture, encrypted communications, and immutable backups to ensure patient records remain strictly confidential and completely safe from ransomware.",
                color: "accent-top-violet",
              },
              {
                title: "HL7 & FHIR Integrations",
                desc: "We build secure data pipelines and API integrations to allow seamless communication between your diagnostic hardware, patient portals, and core clinical databases.",
                color: "accent-top-rose",
              },
              {
                title: "24/7 Telemedicine Support",
                desc: "High-availability infrastructure for digital clinics. We guarantee network stability for video consultations, remote patient monitoring, and cloud-based communication.",
                color: "accent-top-amber",
              },
              {
                title: "Secure Device Management",
                desc: "Mobile Device Management (MDM) for clinical tablets and mobile workstations. Remote wipe capabilities, secure Wi-Fi access, and strict application control.",
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
                / Data Protection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Protecting patient trust with enterprise-grade security.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Healthcare providers are prime targets for cyberattacks because patient data is highly valuable. A breach not only triggers massive ICO fines but destroys patient trust.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-shield-alt text-emerald-500 mt-1"></i> <div><strong>Information Governance:</strong> We align your IT policies with strict GDPR and Caldicott Guardian principles.</div></li>
                <li className="flex gap-3"><i className="fas fa-lock text-emerald-500 mt-1"></i> <div><strong>Threat Isolation:</strong> We segment clinical networks from guest networks, preventing lateral movement of malware.</div></li>
                <li className="flex gap-3"><i className="fas fa-eye text-emerald-500 mt-1"></i> <div><strong>Audit Trails:</strong> Comprehensive logging of system access to prove compliance during regulatory inspections.</div></li>
              </ul>
            </div>
            <div className="glass-card-strong rounded-3xl p-8 accent-top-blue relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-blue-500/10">
                <i className="fas fa-hospital text-9xl"></i>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 relative z-10">
                Ready for Modern Medicine
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                Whether you operate a single private clinic in Harley Street, a multi-site NHS Trust, or an innovative healthtech startup, our engineers design infrastructure that scales securely.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">Private</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Clinics & Specialists</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-bold text-violet-600">NHS</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Trusts & GP Surgeries</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Healthcare IT FAQs</h2>
            <p className="text-muted-foreground">Answers to common questions from practice managers and clinical directors.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you help clinics achieve NHS DSPT compliance?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we comprehensively guide healthcare providers through the NHS Data Security and Protection Toolkit (DSPT) assessment. Our team audits your infrastructure, implements required technical controls, and generates the mandatory documentation to ensure seamless compliance and secure access to NHS data networks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can you support our existing clinical software systems?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we fully support major Electronic Patient Record (EPR) and Electronic Health Record (EHR) systems used in the UK. We proactively liaise directly with your software vendors regarding updates, API integrations (HL7/FHIR), and database troubleshooting so your clinical staff never have to.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How do you secure patient data against ransomware?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We secure patient data by deploying robust Endpoint Detection and Response (EDR) software, immutable offsite backups, and strict role-based access controls (RBAC). Furthermore, we enforce multi-factor authentication (MFA) and provide staff cybersecurity training to actively prevent ransomware infections and ensure GDPR compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Secure Your Clinical Infrastructure Today
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Stop worrying about data breaches and compliance audits. Partner with Dastute for specialist healthcare IT support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Book a Consultation
            </Link>
            <Link
              to="/technology"
              className="btn-glass inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
