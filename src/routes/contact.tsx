import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dastute Technologies — UK, India & Singapore" },
      { name: "description", content: "Get in touch with Dastute Technologies. Offices in Coimbatore (HQ), Chennai, Bangalore, Singapore and London. Call +44 7423 021644 (UK) or email hello@dastute.co.uk." },
      { property: "og:title", content: "Contact Dastute Technologies — UK, India & Singapore" },
      { property: "og:description", content: "Start a consultation with our global team. We schedule a call at your convenience, do a discovery meeting, and prepare a proposal." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Dastute Technologies Limited",
          url: "https://dastute.co.uk/contact",
          telephone: "+447423021644",
          email: "hello@dastute.co.uk",
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "London",
              addressCountry: "GB",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Singapore",
              addressCountry: "SG",
            },
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}

function ContactPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">/ Contact</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-16">
          Start a consultation.
        </h1>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 border-t border-border pt-12">
          {/* Office Contacts */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">UK Office</p>
              <address className="not-italic text-sm leading-relaxed">
                Dastute Technologies Limited<br />
                London, United Kingdom<br />
                Co. No. 17019407
              </address>
              <a href="tel:+447423021644" className="text-sm hover:text-primary block mt-2">+44 7423 021644</a>
              <a href="mailto:hello@dastute.co.uk" className="text-sm hover:text-primary block">hello@dastute.co.uk</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">India HQ</p>
              <address className="not-italic text-sm leading-relaxed">
                Dastute Switcher Technologies LLP<br />
                Coimbatore, Tamil Nadu<br />
                Chennai · Bangalore
              </address>
              <a href="tel:+919940941959" className="text-sm hover:text-primary block mt-2">+91 9940 941959</a>
              <a href="mailto:office@dastute.com" className="text-sm hover:text-primary block">office@dastute.com</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Singapore</p>
              <address className="not-italic text-sm leading-relaxed">
                Ubi, Singapore
              </address>
              <a href="tel:+6587722877" className="text-sm hover:text-primary block mt-2">+65 8772 2877</a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Hours</p>
              <p className="text-sm">Mon — Fri · 09:00 — 18:00 (local time)</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch within one business day.");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label htmlFor="service" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
              >
                <option value="">Select a service...</option>
                <option value="managed-it">Managed IT Services</option>
                <option value="cyber-security">Cyber Security</option>
                <option value="cloud">Cloud Services</option>
                <option value="web-dev">Web & App Development</option>
                <option value="mobile-dev">Mobile Development</option>
                <option value="blockchain">Blockchain & Web3</option>
                <option value="erp">ERP Solutions</option>
                <option value="network">Network Connectivity</option>
                <option value="consulting">IT Consulting & Advisory</option>
                <option value="marketing">Digital Marketing</option>
                <option value="staffing">IT Staffing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="brief" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                Project brief
              </label>
              <textarea
                id="brief"
                name="brief"
                rows={6}
                required
                placeholder="Tell us about your IT challenges, goals and timeline..."
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Submit Brief →
            </button>
          </form>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="border-t border-border px-6 py-24 max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">How We Start</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Schedule a Call", d: "We schedule a call at your convenience to understand your needs and discuss potential solutions." },
            { n: "02", t: "Discovery Meeting", d: "We conduct a discovery and consulting meeting to deep-dive into your IT challenges and business goals." },
            { n: "03", t: "Tailored Proposal", d: "We prepare a detailed proposal with scope, timeline and investment — no obligation, no jargon." },
          ].map((p) => (
            <div key={p.n}>
              <span className="font-mono text-xs text-primary">{p.n}</span>
              <h4 className="font-bold text-lg mt-4 mb-3">{p.t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
