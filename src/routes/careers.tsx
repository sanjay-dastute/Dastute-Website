import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Dastute Technologies" },
      { name: "description", content: "Join Dastute Technologies. We are a rapidly growing global IT consultancy putting our people first. Competitive benefits, performance bonuses, training and certification reimbursement." },
      { property: "og:title", content: "Careers — Dastute Technologies" },
      { property: "og:description", content: "Growth, competitive insurance, training reimbursement, performance bonuses and happy hours." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const VALUES = [
  {
    title: "People First",
    desc: "We believe when we place a high value on our team's happiness, work/life balance and professional development, everybody wins — clients included.",
  },
  {
    title: "Unified Team",
    desc: "We work as a team and trust each other to create a seamless experience. We are polite and kind to one another, even when it gets tough.",
  },
  {
    title: "Absolute Ownership",
    desc: "We are empowered to do our jobs and work towards a common goal. We strategically deploy and support technology with a long-term view.",
  },
  {
    title: "Client-Oriented Care",
    desc: "We combine technology and business expertise with exceptional care and communications to build long-term, trusted relationships.",
  },
];

const PERKS = [
  { icon: "🏖️", title: "Paid Vacation", desc: "Four weeks paid vacation, plus an additional week at years 5 and 10." },
  { icon: "⚡", title: "Company Holidays", desc: "Two weeks of company-wide holidays per year, plus your birthday off." },
  { icon: "🏥", title: "Comprehensive Insurance", desc: "Competitive health, vision, dental, disability and life insurance plans." },
  { icon: "📈", title: "401k & Matching", desc: "Retirement plan with competitive company matching from day one." },
  { icon: "🎓", title: "Training & Education", desc: "Full certification reimbursement, internships and leadership development tracks." },
  { icon: "🎁", title: "Performance Bonuses", desc: "Company-wide performance-based bonuses and a sales referral program (up to a free company Tesla)." },
];

const OPEN_ROLES = [
  {
    id: "tech-01",
    practice: "Technology",
    title: "Senior Full-Stack Engineer",
    location: "Coimbatore / Chennai / Remote",
    type: "Full-time",
    description: "Design and implement production-grade web platforms and custom integrations. Experience with Next.js, Node.js, React and cloud databases.",
  },
  {
    id: "tech-02",
    practice: "Technology",
    title: "Senior Cybersecurity Specialist",
    location: "London / Remote (UK)",
    type: "Full-time",
    description: "Lead threat modeling, penetration testing, SIEM/SOC operations and Cyber Essentials / ISO 27001 readiness for global clients.",
  },
  {
    id: "tech-03",
    practice: "Technology",
    title: "Cloud & DevOps Architect",
    location: "London / Singapore / Remote",
    type: "Full-time",
    description: "Design secure, scalable hybrid-cloud architectures on AWS and GCP. Implement infrastructure-as-code and FinOps cost optimisations.",
  },
  {
    id: "mkt-01",
    practice: "Marketing",
    title: "Digital Marketing Specialist",
    location: "London / Remote",
    type: "Full-time",
    description: "Execute full-funnel digital campaigns including SEO, PPC, social media advertising and marketing automation for enterprise accounts.",
  },
];

function CareersPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ Careers</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          We put our people first.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            It's something a lot of companies say, but not a lot of companies do. Here at Dastute, it's our most important core value. We believe that professional growth and personal happiness shouldn't be trade-offs.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dastute is rapidly growing globally, both organically and by bringing in like-minded managed IT service providers. We're building a network that provides exceptional levels of service to clients by taking exceptional care of our team.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:divide-x divide-border">
          {[
            { k: "Growth", v: "Rapid Global Scale" },
            { k: "Vacation", v: "4+ Weeks Paid" },
            { k: "Learning", v: "Full Cert Reimbursement" },
            { k: "Open Roles", v: String(OPEN_ROLES.length) },
          ].map((s) => (
            <div key={s.k} className="p-8 md:p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{s.k}</p>
              <p className="text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Our Culture Values</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((v, i) => (
            <div key={v.title}>
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="font-bold text-lg mt-4 mb-3">{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-12">Perks & Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:divide-x divide-border border-t border-border">
            {PERKS.map((p, i) => (
              <div key={p.title} className={`p-8 md:p-10 ${i >= 3 ? "border-t border-border" : ""}`}>
                <span className="text-2xl block mb-4">{p.icon}</span>
                <h4 className="font-bold mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Open Roles</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-px bg-border">
          {OPEN_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-background p-8 md:p-10 group hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <div className="grid md:grid-cols-[160px_1fr_200px] gap-6 md:gap-12 items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60 block mb-2">{role.practice}</span>
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">{role.type}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{role.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed mb-4">{role.description}</p>
                  <span className="text-sm text-muted-foreground group-hover:text-background/50">{role.location}</span>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href={`mailto:careers@dastute.tech?subject=Application: ${role.title}`}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-current text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  >
                    Apply <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Don't see your role?</h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              We are always looking for exceptional software developers, system engineers, and digital marketing managers. Send us your CV and we will keep you in mind for future openings.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <a
              href="mailto:careers@dastute.tech?subject=General Application"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              General Application <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
