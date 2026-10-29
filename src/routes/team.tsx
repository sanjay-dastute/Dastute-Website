import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildPersonJsonLd, buildStandardPageHead } from "@/lib/seo";
import type { CSSProperties } from "react";
import { TeamFan, memberId } from "@/components/TeamSections";
import { Magnetic, SplitWords } from "@/components/motion";

const TEAM_MEMBERS = [
  {
    name: "SANJAY KR",
    role: "Founder & CEO",
    practice: "Leadership",
    bio: "President of Dastute overseeing all business operations. Entrepreneur, Founder of Kira-Tech Labs, Founder of Dastute Switcher Technologies LLP. Member at Google Developer Groups, ASME and active Software Developer.",
  },
  {
    name: "ANANDA KUMAR N",
    role: "Investor & Strategic Advisor",
    practice: "Advisory",
    bio: "Ananda Kumar N brings over 24 years of distinguished professional experience to Dastute's advisory board - including more than 15 years at C-suite level across Fintech, Strategy, Corporate Finance, Business Development, and Operations, spanning global markets across Asia, the Middle East, and beyond.",
  },
  {
    name: "DR. MANJARI ANANDAN, DBA",
    role: "Chief Technology Officer",
    practice: "Technology",
    bio: "Dr. Manjari leads Dastute's global engineering organisation, setting the standards for software architecture, cloud infrastructure, cybersecurity practices, data engineering, and research and innovation. Her approach is defined by a belief that technology must solve real business problems - not showcase engineering complexity - and that security, scalability, and maintainability must be designed in from the start, never bolted on afterwards.",
  },
  {
    name: "SMITHA SRIHARSHA",
    role: "Chief Security Advisor",
    practice: "Technology / Security",
    bio: "As Chief Security Advisor, Smitha brings over 22 years of experience in cybersecurity, defining Dastute's security philosophy, overseeing the quality and rigour of all cybersecurity service delivery, and ensuring that our security practices - from penetration testing by CREST- and CEH-certified testers and SOC operations to compliance advisory and Red Team engagements - reflect the highest professional standards in the industry.",
  },
  {
    name: "PRASANNA KUMAR M (SALES ELEPHANT)",
    role: "Chief Marketing Officer",
    practice: "Growth & Marketing",
    bio: "A seasoned B2B technology marketing leader, Prasanna brings a results-first philosophy to everything Dastute communicates externally - from brand identity and content strategy to demand generation, ABM campaigns, digital marketing, and partner marketing. His approach is rooted in the belief that great marketing does not just build awareness - it builds trust, and trust drives the long-term client relationships that define exceptional technology companies.",
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Leadership Team - Dastute Technologies",
      description: "Meet the leadership team behind Dastute Technologies: senior practitioners in software engineering, blockchain, product management and technology advisory.",
      path: "/team",
      ogDescription: "Experienced leadership spanning software engineering, blockchain, product management and enterprise advisory.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
        ),
      },
      ...TEAM_MEMBERS.map((member) => ({
        type: "application/ld+json",
        children: JSON.stringify(
          buildPersonJsonLd({
            name: member.name,
            jobTitle: member.role,
            description: member.bio,
            path: `/team#${memberId(member.name)}`,
          }),
        ),
      })),
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 pt-24 pb-20 md:pt-28 md:pb-24 max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
                / Team
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">
                <SplitWords text="Experienced practitioners." />{" "}
                <SplitWords className="text-gradient-primary" text="Real partnerships." delay={0.3} />
              </h1>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-slate-300">
                Every project at Dastute is staffed by experienced professionals who
                understand your business. Our team brings together expertise from
                Google Developer Groups, NCS Singapore, and leading institutions
                across Asia and Europe.
              </p>
              <p className="leading-relaxed text-slate-400">
                When you work with Dastute, you're working with a team who
                understands your pain points and your goals. We forge real
                partnerships - not just vendor relationships - to deliver outcomes
                that matter.
              </p>
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <h2 className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-blue-300">
              Leadership & Specialists <span className="h-px flex-1 bg-white/10" />
            </h2>
            <TeamFan members={TEAM_MEMBERS} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-gradient border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border">
          {[
            { k: "Founded", v: <>2023</> },
            { k: "Global Presence", v: <>UK · India · SG</> },
            { k: "Core Expertise", v: <>Engineering + Advisory</> },
          ].map((s) => (
            <div key={s.k} className="p-6 md:p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{s.k}</p>
              <p className="text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Partnerships */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ Ecosystem</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Platform Partnerships</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { p: "AWS", hue: "#f59e0b" },
            { p: "Google Cloud", hue: "#3b82f6" },
            { p: "Microsoft", hue: "#06b6d4" },
            { p: "Salesforce", hue: "#0ea5e9" },
          ].map(({ p, hue }) => (
            <div key={p} className="tm-partner" style={{ "--hue": hue } as CSSProperties}>
              <span className="font-bold text-lg">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="future-section px-6 py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Work with us</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
              Meet the team <span className="text-gradient-primary">on a call.</span>
            </h2>
          </div>
          <div className="flex flex-wrap md:justify-end gap-4">
            <Magnetic>
              <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Talk to Us <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/careers" className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Join the Team <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
