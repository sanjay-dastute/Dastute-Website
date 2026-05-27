import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hqImage from "@/assets/hq.jpg";
import labImage from "@/assets/lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dastute Technologies — Simplifying IT for a Complex World" },
      { name: "description", content: "Dastute Technologies is a global IT consultancy delivering Managed IT Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP, Network Connectivity and IT Consulting across the UK, India and Singapore." },
      { property: "og:title", content: "Dastute Technologies — Simplifying IT for a Complex World" },
      { property: "og:description", content: "We bring together the personal service of local IT providers with the power of a national network. Managed IT, Cyber Security, Cloud, Dev, Blockchain & more." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_400px] gap-12 items-end">
          <div className="animate-reveal">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-balance mb-8">
              Simplifying IT<br />for a Complex World.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground font-medium">
              Dastute Technologies brings together the personal service of local IT providers with the power of a national network — from Managed Services to Blockchain, deployed globally.
            </p>
          </div>
          <div className="animate-reveal [animation-delay:200ms]">
            <div className="border-l-2 border-primary pl-6 py-2">
              <span className="font-mono text-[10px] uppercase block mb-2 text-primary">Global Consultancy</span>
              <p className="text-sm leading-relaxed">
                Our offices across the UK, India and Singapore offer high-touch IT services from highly experienced local team members — delivering everything from cybersecurity audits to enterprise ERP implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="border-y border-border">
        <div className="grid md:grid-cols-2 md:divide-x divide-border">
          <Link to="/technology" className="p-12 group hover:bg-black hover:text-white transition-colors duration-500 block">
            <div className="flex justify-between items-start mb-24">
              <span className="font-mono text-xs">01 / TECHNOLOGY</span>
              <div className="size-10 rounded-full border border-current grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Software & Cloud Systems</h2>
            <p className="text-muted-foreground group-hover:text-white/90 max-w-sm mb-8">
              Managed IT Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP Solutions and Network Connectivity — engineered for enterprise resilience.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Managed IT", "Cyber Security", "Cloud", "Blockchain", "ERP"].map((t) => (
                <span key={t} className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase">{t}</span>
              ))}
            </div>
          </Link>

          <Link to="/marketing" className="p-12 group hover:bg-primary hover:text-white transition-colors duration-500 block border-t md:border-t-0 border-border">
            <div className="flex justify-between items-start mb-24">
              <span className="font-mono text-xs">02 / CREATIVE</span>
              <div className="size-10 rounded-full border border-current grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Brand & Digital Marketing</h2>
            <p className="text-muted-foreground group-hover:text-white/90 max-w-sm mb-8">
              Result-driven digital marketing — SEO, PPC, social media, content marketing, email automation and full-funnel analytics. Brand strategy and identity systems that perform.
            </p>
            <div className="flex flex-wrap gap-2">
              {["SEO", "PPC", "Social Media", "Brand Identity", "Analytics"].map((t) => (
                <span key={t} className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase">{t}</span>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* Full Service Matrix */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Full Service Matrix</h3>
          <div className="h-px flex-1 bg-border hidden md:block animate-line" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {[
            { h: "Managed Services", items: ["24/7 Helpdesk", "Proactive Monitoring", "Patch Management", "Asset Lifecycle Tracking"] },
            { h: "Security & Cloud", items: ["Cyber Essentials", "Penetration Testing", "AWS / Azure / GCP", "FinOps Optimisation"] },
            { h: "Development", items: ["Web & Mobile Apps", "Custom Software", "Blockchain & DeFi", "ERP Implementation"] },
            { h: "Advisory", items: ["IT Consulting", "Digital Transformation", "IT Staffing & Hiring", "Digital Marketing & SEO"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="font-bold mb-4 border-b border-border pb-2">{c.h}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                {c.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Focus */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:divide-x divide-border">
          {[
            { k: "Global Offices", v: "UK · India · Singapore" },
            { k: "Founded", v: "2023" },
            { k: "Industries", v: "8+ Verticals" },
            { k: "Delivery Model", v: "4-Phase Process" },
          ].map((s) => (
            <div key={s.k} className="p-8 md:p-12 border-b md:border-b-0 border-border">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{s.k}</p>
              <p className="text-2xl font-bold tracking-tight">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src={hqImage}
              alt="Dastute Technologies global consultancy headquarters"
              width={1280}
              height={640}
              loading="lazy"
              className="w-full aspect-[2/1] object-cover outline-1 -outline-offset-1 outline-black/5 rounded-sm"
            />
          </div>
          <div className="space-y-4">
            <img
              src={labImage}
              alt="Dastute blockchain and cloud infrastructure lab"
              width={640}
              height={640}
              loading="lazy"
              className="w-full aspect-square object-cover outline-1 -outline-offset-1 outline-black/5 rounded-sm"
            />
            <div className="p-8 bg-foreground text-background">
              <p className="text-sm italic leading-relaxed">
                "We're focused on adding balance to the chaos. We forge real partnerships with our clients — understanding your pain points and goals to find order in the midst of complexity."
              </p>
              <p className="mt-4 font-mono text-[10px] text-white/80">EST. 2023 · UK · INDIA · SINGAPORE</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to simplify your IT?</h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              We schedule a call at your convenience, conduct a discovery meeting, and prepare a tailored proposal. No obligation, no jargon.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link to="/request-audit" className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
              Request an Audit <span aria-hidden>↗</span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              Start a Consultation <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
