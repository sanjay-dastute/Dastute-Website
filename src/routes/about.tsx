import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dastute Technologies — Global IT Consulting & Solutions" },
      { name: "description", content: "Dastute Technologies was founded in 2023 to bring together the personal service of local IT providers with the power of a national network. Offices in UK, India and Singapore delivering enterprise IT solutions." },
      { property: "og:title", content: "About Dastute Technologies — Global IT Consulting & Solutions" },
      { property: "og:description", content: "Passionate. Respectful. Unified. Empowered. We're on a mission to simplify IT for a complex world." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ About</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          Simplifying IT for a complex world.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Dastute, we're on a mission to bring together the personal service of local IT providers with the power of a national network. We believe that's simpler than it sounds. Our offices offer high-touch IT services that clients love, from highly experienced local team members.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We understand that business can be chaotic. That's where we come in. We're focused on adding some much-needed balance to the mix. We forge real partnerships with our clients — when you work with us, you're working with a team who understands your pain points and your goals.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:divide-x divide-border">
          {[
            { k: "Founded", v: "2023" },
            { k: "Headquarters", v: "Coimbatore, India" },
            { k: "Global Offices", v: "UK · India · SG" },
            { k: "Entity", v: "Co. No. 17019407" },
          ].map((s) => (
            <div key={s.k} className="p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{s.k}</p>
              <p className="text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Beginning */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">The Beginning</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Dastute journey began in 2023 when a few friends got together and started planning for the future of IT Growth. What started as a shared vision quickly became a global consultancy spanning three continents.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today, we strategically deploy and support technology, ultimately becoming your virtual CIO. That stability and long-term view carry over to our services and solutions, which scale as your business grows. We combine technology and business expertise with exceptional care to build long-term, trusted relationships.
          </p>
        </div>
      </section>

      {/* Core Culture */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end gap-6 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Our Culture</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: "01", t: "Passionate", d: "We are intensely enthusiastic about providing a superior experience to every client we serve." },
              { n: "02", t: "Respectful", d: "We are polite and kind to one another, even when it gets tough. Mutual respect drives everything we do." },
              { n: "03", t: "Ownership", d: "We are empowered to do our jobs and work towards a common goal. Everyone takes responsibility for outcomes." },
              { n: "04", t: "Unified", d: "We work as a team and trust each other to create a seamless experience across every engagement." },
            ].map((v) => (
              <div key={v.n}>
                <span className="font-mono text-xs text-primary">{v.n}</span>
                <h4 className="font-bold text-lg mt-4 mb-3">{v.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Why Clients Choose Us</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { icon: "🎯", label: "Client-Oriented" },
            { icon: "🔒", label: "Independent" },
            { icon: "⚡", label: "Competent" },
            { icon: "📊", label: "Results-Driven" },
            { icon: "🛠️", label: "Problem-Solving" },
            { icon: "👁️", label: "Transparent" },
          ].map((b) => (
            <div key={b.label} className="text-center p-6 border border-border hover:border-primary transition-colors">
              <span className="text-2xl block mb-3">{b.icon}</span>
              <span className="text-sm font-bold">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Phase Delivery Process */}
      <section className="border-t border-border px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Our 4-Phase Delivery Process</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { n: "01", t: "Discovery", d: "Stakeholder interviews, infrastructure audit, risk assessment, and requirements gathering to define the real problem." },
            { n: "02", t: "Architecture", d: "Solution design, technology selection, roadmap creation, and resource planning to build the right blueprint." },
            { n: "03", t: "Development", d: "Agile sprints, continuous integration, quality assurance, and progress reporting with weekly visibility." },
            { n: "04", t: "Deployment", d: "Go-live execution, knowledge transfer, monitoring setup, and ongoing support for long-term success." },
          ].map((p) => (
            <div key={p.n}>
              <span className="font-mono text-xs text-primary">{p.n}</span>
              <h4 className="font-bold text-lg mt-4 mb-3">{p.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end gap-6 mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">We Are Global</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { region: "India (HQ)", offices: ["Coimbatore", "Chennai", "Bangalore"], phone: "+91 9940941959" },
              { region: "Singapore", offices: ["Ubi, Singapore"], phone: "+65 8772 2877" },
              { region: "United Kingdom", offices: ["London"], phone: "+44 7423 021644" },
              { region: "Partners", offices: ["AWS", "Google Cloud", "Microsoft", "Salesforce"], phone: null },
            ].map((loc) => (
              <div key={loc.region} className="bg-background p-8 hover:bg-foreground hover:text-background transition-colors duration-300 group">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60 block mb-6">{loc.region}</span>
                <ul className="space-y-2 text-sm mb-6">
                  {loc.offices.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="font-mono text-[10px] text-primary group-hover:text-background/60 mt-1">→</span>
                      <span className="text-muted-foreground group-hover:text-background/70">{o}</span>
                    </li>
                  ))}
                </ul>
                {loc.phone && (
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground group-hover:text-background/70 font-mono">{loc.phone}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
