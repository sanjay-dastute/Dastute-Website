import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildJobPostingListJsonLd } from "@/lib/seo";
import { ProductFaq } from "@/components/ProductSections";
import { CareerPath, PerkBento, RoleBoard, ValueCards } from "@/components/CareerSections";
import { CountUp, Magnetic, SplitWords } from "@/components/motion";
import { FAQS } from "@/lib/faqs";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Dastute Technologies" },
      {
        name: "description",
        content:
          "Careers at Dastute Technologies, a growing global IT consultancy. Competitive benefits, performance bonuses, and paid training and certifications.",
      },
      { property: "og:title", content: "Careers - Dastute Technologies" },
      {
        property: "og:description",
        content:
          "Growth, competitive insurance, training reimbursement, performance bonuses and happy hours.",
      },
      { property: "og:url", content: "https://dastute.co.uk/careers" },
    ],
    links: [{ rel: "canonical", href: "https://dastute.co.uk/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/careers", FAQS["careers"])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ),
      },
      ...buildJobPostingListJsonLd("/careers", [
        {
          title: "Senior Full-Stack Engineer",
          description:
            "Design and implement production-grade web platforms and custom integrations using modern engineering practices.",
          location: "Coimbatore / Chennai / Remote",
          country: "IN",
          datePosted: "2026-05-27",
        },
        {
          title: "Senior Cybersecurity Specialist",
          description:
            "Lead threat modeling, penetration testing, SIEM/SOC operations and security readiness programs.",
          location: "London / Remote (UK)",
          country: "GB",
          datePosted: "2026-05-27",
        },
        {
          title: "Cloud & DevOps Architect",
          description:
            "Design secure cloud architecture across AWS and GCP with infrastructure-as-code and FinOps controls.",
          location: "London / Singapore / Remote",
          country: "GB",
          datePosted: "2026-05-27",
        },
        {
          title: "Digital Marketing Specialist",
          description:
            "Execute full-funnel campaigns including SEO, PPC, social media and marketing automation.",
          location: "London / Remote",
          country: "GB",
          datePosted: "2026-05-27",
        },
      ]).map((jobSchema) => ({
        type: "application/ld+json",
        children: JSON.stringify(jobSchema),
      })),
    ],
  }),
  component: CareersPage,
});

const VALUES = [
  {
    title: "People First",
    desc: "We believe when we place a high value on our team's happiness, work/life balance and professional development, everybody wins - clients included.",
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
  {
    title: "Paid Vacation",
    desc: "Four weeks paid vacation, plus an additional week at years 5 and 10.",
  },
  {
    title: "Company Holidays",
    desc: "Two weeks of company-wide holidays per year, plus your birthday off.",
  },
  {
    title: "Comprehensive Insurance",
    desc: "Competitive health, vision, dental, disability and life insurance plans.",
  },
  {
    title: "401k & Matching",
    desc: "Retirement plan with competitive company matching from day one.",
  },
  {
    title: "Training & Education",
    desc: "Full certification reimbursement, internships and leadership development tracks.",
  },
  {
    title: "Performance Bonuses",
    desc: "Company-wide performance-based bonuses and a sales referral program (up to a free company Tesla).",
  },
];

const OPEN_ROLES = [
  {
    id: "tech-01",
    practice: "Technology",
    title: "Senior Full-Stack Engineer",
    location: "Coimbatore / Chennai / Remote",
    type: "Full-time",
    description:
      "Design and implement production-grade web platforms and custom integrations. Experience with Next.js, Node.js, React and cloud databases.",
  },
  {
    id: "tech-02",
    practice: "Technology",
    title: "Senior Cybersecurity Specialist",
    location: "London / Remote (UK)",
    type: "Full-time",
    description:
      "Lead threat modeling, penetration testing, SIEM/SOC operations and Cyber Essentials / ISO 27001 readiness for global clients.",
  },
  {
    id: "tech-03",
    practice: "Technology",
    title: "Cloud & DevOps Architect",
    location: "London / Singapore / Remote",
    type: "Full-time",
    description:
      "Design secure, scalable hybrid-cloud architectures on AWS and GCP. Implement infrastructure-as-code and FinOps cost optimisations.",
  },
  {
    id: "mkt-01",
    practice: "Marketing",
    title: "Digital Marketing Specialist",
    location: "London / Remote",
    type: "Full-time",
    description:
      "Execute full-funnel digital campaigns including SEO, PPC, social media advertising and marketing automation for enterprise accounts.",
  },
];

function CareersPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-28 max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
              / Careers
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance text-white">
              <SplitWords text="We put our" />{" "}
              <SplitWords className="text-gradient-primary" text="people first." delay={0.25} />
            </h1>
            <p className="mt-8 max-w-xl text-slate-300 text-lg leading-relaxed">
              It's something a lot of companies say, but not a lot of companies
              do. Here at Dastute, it's our most important core value. We believe
              that professional growth and personal happiness shouldn't be
              trade-offs.
            </p>
            <p className="mt-4 max-w-xl text-slate-400 leading-relaxed">
              Dastute is rapidly growing globally, both organically and by
              bringing in like-minded managed IT service providers. We're building
              a network that provides exceptional levels of service to clients by
              taking exceptional care of our team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <a href="#open-roles" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  See Open Roles <span aria-hidden>↓</span>
                </a>
              </Magnetic>
              <Magnetic>
                <Link to="/careers-apply" className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  Apply Now <span aria-hidden>↗</span>
                </Link>
              </Magnetic>
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-lg">
            <CareerPath />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 md:divide-x divide-border">
          {[
            { k: "Growth", v: <>Rapid Global Scale</> },
            { k: "Vacation", v: <><CountUp to={4} />+ Weeks Paid</> },
            { k: "Learning", v: <>Full Cert Reimbursement</> },
            { k: "Open Roles", v: <CountUp to={OPEN_ROLES.length} /> },
          ].map((s) => (
            <div key={s.k} className="p-6 md:p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{s.k}</p>
              <p className="text-xl md:text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ How we work</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Our Culture Values</h2>
        </div>
        <ValueCards values={VALUES} />
      </section>

      {/* Perks */}
      <section className="future-section px-6 py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Life at Dastute</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">Perks & Benefits</h2>
          </div>
          <PerkBento perks={PERKS} />
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="scroll-mt-24 px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ Join the team</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Open Roles</h2>
          </div>
          <p className="max-w-xs text-sm text-slate-500">Pick a role to email your application straight to our team.</p>
        </div>
        <RoleBoard roles={OPEN_ROLES} />
      </section>

      {/* CTA */}
      <section className="future-section px-6 py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Your next chapter</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              Ready to <span className="text-gradient-primary">join us?</span>
            </h2>
            <p className="mt-4 text-slate-300 max-w-md">
              Apply directly through our career application portal and tell us
              about yourself. We review applications and contact promising
              candidates within 2 weeks.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            <Magnetic>
              <Link to="/careers-apply" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Apply Now <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="mailto:contact@dastute.co.uk" className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Email Us <span aria-hidden>↗</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 max-w-7xl mx-auto">
        <ProductFaq
          items={FAQS["careers"]}
          title="Careers FAQs"
          intro="What to expect from applying, interviewing and growing with Dastute."
        />
      </section>
    </SiteLayout>
  );
}
