import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services/it-staffing")({
  head: () => ({
    meta: [
      { title: "IT Staffing Solutions UK & Tech Recruitment Agency London" },
      {
        name: "description",
        content:
          "Pre-vetted IT staffing solutions in the UK. We provide elite tech talent for contract, permanent, and contract-to-hire roles across software, cloud, and security.",
      },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "GB" },
      { name: "geo.placename", content: "United Kingdom" },
      { name: "theme-color", content: "#1a56db" },
      {
        property: "og:title",
        content: "IT Staffing Solutions UK & Tech Recruitment Agency London",
      },
      {
        property: "og:description",
        content:
          "Pre-vetted IT staffing solutions in the UK. We provide elite tech talent for contract, permanent, and contract-to-hire roles across software, cloud, and security.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dastute.co.uk/services/it-staffing",
      },
      { property: "og:site_name", content: "Dastute Technologies Limited" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-it-staffing.jpg",
      },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "IT Staffing Solutions UK & Tech Recruitment Agency London",
      },
      {
        name: "twitter:description",
        content:
          "Pre-vetted IT staffing solutions in the UK. We provide elite tech talent for contract, permanent, and contract-to-hire roles across software, cloud, and security.",
      },
      { name: "twitter:site", content: "@DastuteTech" },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-it-staffing.jpg",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dastute.co.uk/services/it-staffing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildServiceJsonLd({
            name: "IT Staffing & Resource Augmentation",
            description: "Pre-vetted IT staffing solutions in the UK. We provide elite tech talent for contract, permanent, and contract-to-hire roles across software, cloud, and security.",
            path: "/services/it-staffing",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "IT Staffing", path: "/services/it-staffing" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/services/it-staffing", [
            {
              question: "What IT roles do you staff?",
              answer: "We source a wide variety of highly specialized technical roles including Cloud Architects, Full-Stack Software Engineers, Cybersecurity Analysts, DevOps Engineers, Data Scientists, and IT Project Managers. Our extensive talent pipeline covers both legacy enterprise systems and cutting-edge technologies.",
            },
            {
              question: "Do you offer contract-to-hire staffing models?",
              answer: "Yes, we fully support flexible contract-to-hire staffing models. This allows your organization to evaluate an IT professional's technical skills and cultural fit over a 3 to 6-month period before committing to a permanent full-time employment offer.",
            },
            {
              question: "How do you vet your technical candidates?",
              answer: "We vet our technical candidates through a rigorous multi-stage screening process that goes beyond standard resume reviews. Our own senior engineers conduct in-depth technical interviews, live coding assessments, and architectural design tests to ensure every candidate genuinely possesses the skills they claim.",
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
            / Staff Augmentation
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-5xl text-white">
            IT Staffing Solutions UK: Elite Tech Talent
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-slate-300 leading-relaxed md:mr-auto md:ml-0 mx-auto">
            Scale your engineering and IT teams rapidly. We supply pre-vetted, highly skilled technical professionals for contract, permanent, and contract-to-hire positions.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Hire Tech Talent
            </Link>
            <a
              href="#roles"
              className="btn-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              See Roles We Fill
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border text-center md:text-left">
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">Contract</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Short-Term Experts</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">Permanent</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Long-Term Hires</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">C-to-H</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Contract-to-Hire</p>
            </div>
            <div className="md:pl-6">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">Global</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">UK, India, SG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="roles" className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto p-6 py-16 md:py-24">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Roles We Successfully Fill
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because we are a technology consultancy first, we understand exactly what separates an average developer from a great one. We actively maintain a pipeline of top-tier talent across all major disciplines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Software Engineering",
                desc: "Full-stack, frontend, and backend developers specializing in React, Node.js, Python, Java, and modern microservices architecture.",
                color: "accent-top-blue",
              },
              {
                title: "Cloud & DevOps",
                desc: "AWS, Azure, and Google Cloud architects, alongside DevOps engineers skilled in Kubernetes, Terraform, and CI/CD automation.",
                color: "accent-top-emerald",
              },
              {
                title: "Cybersecurity & Risk",
                desc: "Penetration testers, SOC analysts, compliance officers (ISO 27001/SOC 2), and security architects to harden your infrastructure.",
                color: "accent-top-violet",
              },
              {
                title: "Data & AI",
                desc: "Data engineers, ML specialists, and database administrators capable of turning raw data into predictive business intelligence.",
                color: "accent-top-rose",
              },
              {
                title: "IT Support & Infrastructure",
                desc: "1st/2nd/3rd line support engineers, network administrators (Cisco/Meraki), and active directory specialists.",
                color: "accent-top-amber",
              },
              {
                title: "Product & Project Management",
                desc: "Agile Scrum Masters, Technical Product Managers, and IT Project Directors to ensure complex deployments land on time.",
                color: "accent-top-cyan",
              }
            ].map((role, i) => (
              <article
                key={i}
                className={`glass-card-strong rounded-3xl p-8 ${role.color} flex flex-col`}
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.desc}
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
                / Vetting Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Engineers interviewing engineers.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most IT staffing agencies rely on keyword matching to find candidates. We don't. Every candidate we submit has been technically vetted by our own senior engineering and infrastructure teams.
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3"><i className="fas fa-check-circle text-blue-500 mt-1"></i> <div><strong>Technical Screening:</strong> Live coding sessions and architectural whiteboarding, not just multiple-choice tests.</div></li>
                <li className="flex gap-3"><i className="fas fa-check-circle text-blue-500 mt-1"></i> <div><strong>Cultural Fit:</strong> Assessing communication skills, remote-work capability, and team collaboration styles.</div></li>
                <li className="flex gap-3"><i className="fas fa-check-circle text-blue-500 mt-1"></i> <div><strong>Reference Checking:</strong> Verifying past project delivery, code quality, and reliability with previous employers.</div></li>
              </ul>
            </div>
            <div className="glass-card-strong rounded-3xl p-8 accent-top-violet relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-violet-500/10">
                <i className="fas fa-users text-9xl"></i>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 relative z-10">
                Flexible Staffing Models
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                Whether you need a senior architect to lead a 6-month migration or a team of 10 developers to build a new product, we have a commercial model to suit.
              </p>
              <div className="grid gap-3 relative z-10">
                <div className="bg-white p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">C</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Contract / Freelance</p>
                    <p className="text-xs text-slate-500">For immediate project needs.</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">P</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Permanent Placement</p>
                    <p className="text-xs text-slate-500">Direct-hire talent acquisition.</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-xs">CH</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Contract-to-Hire</p>
                    <p className="text-xs text-slate-500">Try before you commit.</p>
                  </div>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">IT Staffing FAQs</h2>
            <p className="text-muted-foreground">Common questions about our recruitment and staff augmentation process.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What IT roles do you staff?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We source a wide variety of highly specialized technical roles including Cloud Architects, Full-Stack Software Engineers, Cybersecurity Analysts, DevOps Engineers, Data Scientists, and IT Project Managers. Our extensive talent pipeline covers both legacy enterprise systems and cutting-edge technologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer contract-to-hire staffing models?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yes, we fully support flexible contract-to-hire staffing models. This allows your organization to evaluate an IT professional's technical skills and cultural fit over a 3 to 6-month period before committing to a permanent full-time employment offer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How do you vet your technical candidates?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We vet our technical candidates through a rigorous multi-stage screening process that goes beyond standard resume reviews. Our own senior engineers conduct in-depth technical interviews, live coding assessments, and architectural design tests to ensure every candidate genuinely possesses the skills they claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto p-6 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Need Top Engineering Talent?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Stop wasting time screening underqualified candidates. Let our engineering team find your next star hire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Submit a Vacancy
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
