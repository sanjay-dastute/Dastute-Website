import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Dastute Technologies" },
      { name: "description", content: "Meet the leadership team behind Dastute Technologies. Founded by Sanjay with a team of senior practitioners in software engineering, blockchain, product management and advisory." },
      { property: "og:title", content: "Leadership Team — Dastute Technologies" },
      { property: "og:description", content: "Experienced leadership spanning software engineering, blockchain, product management and enterprise advisory." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const team = [
    {
      name: "Sanjay",
      role: "Founder & CEO",
      practice: "Leadership",
      bio: "President of Dastute overseeing all business operations. Entrepreneur, Founder of Kira-Tech Labs, Founder of Dastute Switcher Technologies LLP. Member at Google Developer Groups, ASME and active Software Developer.",
    },
    {
      name: "Company Advisor",
      role: "Strategic Advisor",
      practice: "Advisory",
      bio: "Vice Chairman of SSACCI — Singapore South Asia Chamber of Commerce and Industry. Building Singapore's reliable delivery platform. Co-Founder & CEO at Deliver.sg. Multipreneur and RegTech specialist.",
    },
    {
      name: "Blockchain Lead",
      role: "Blockchain & ML Lead",
      practice: "Technology",
      bio: "Software Developer specialising in Machine Learning and Blockchain. Co-Founder of the Blockchain Club at Mahindra University. Focused on decentralised applications and technological innovation.",
    },
    {
      name: "Product Manager",
      role: "Product Manager",
      practice: "Operations",
      bio: "Software solutions designer with expertise in data analysis and interpretation, strategic management, advertising, business and brand management, HR and customer engagement.",
    },
    {
      name: "Joint Technical Officer",
      role: "Joint Technical Officer",
      practice: "Technology",
      bio: "Product Manager with prior experience in the Singapore Military. Former NCS Singapore team member bringing rigorous technical leadership and operational discipline.",
    },
    {
      name: "Joint Member",
      role: "Joint Member",
      practice: "Operations",
      bio: "Business and brand management specialist with deep support expertise. Former NCS Singapore team member focused on customer success and service delivery excellence.",
    },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ Team</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          Experienced practitioners.<br />Real partnerships.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every project at Dastute is staffed by experienced professionals who understand your business. Our team brings together expertise from Google Developer Groups, NCS Singapore, and leading institutions across Asia and Europe.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When you work with Dastute, you're working with a team who understands your pain points and your goals. We forge real partnerships — not just vendor relationships — to deliver outcomes that matter.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 md:divide-x divide-border">
          {[
            { k: "Founded", v: "2023" },
            { k: "Global Presence", v: "UK · India · SG" },
            { k: "Core Expertise", v: "Engineering + Advisory" },
          ].map((s) => (
            <div key={s.k} className="p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{s.k}</p>
              <p className="text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Leadership & Specialists</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {team.map((member) => (
            <div key={member.name} className="bg-background p-8 md:p-10 group hover:bg-foreground hover:text-background transition-colors duration-300">
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60">{member.practice}</span>
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">{member.role}</span>
              </div>
              <h4 className="text-xl font-bold tracking-tight mb-4">{member.name}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Partnerships */}
      <section className="border-t border-border px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Platform Partnerships</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["AWS", "Google Cloud", "Microsoft", "Salesforce"].map((partner) => (
            <div key={partner} className="p-8 border border-border text-center hover:border-primary transition-colors">
              <span className="font-bold text-lg">{partner}</span>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
