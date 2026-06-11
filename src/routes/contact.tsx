import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";
import { useFormSubmit } from "@/lib/useFormSubmit";

// NOTE: Form submissions are sent to info@dastute.co.uk via Formspree
// Update the formspree form ID in the action attribute if needed
// Formspree endpoint format: https://formspree.io/f/{FORM_ID}

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Contact Dastute Technologies | London · India · Singapore",
      description:
        "Contact Dastute Technologies Limited. London HQ: 128 City Road, EC1V 2NX. UK: +44 7423021644. India: +91 9940941959. Singapore: +65-87722877. Email: contact@dastute.co.uk. 1-day response.",
      path: "/contact",
      ogDescription:
        "Contact our London HQ and global delivery teams in India and Singapore. We respond to all enquiries within one business day.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildLocalBusinessJsonLd({
            path: "/contact",
            name: "Dastute Technologies Limited",
            description: "Contact page for Dastute Technologies Limited",
            streetAddress: "128 City Road",
            city: "London",
            postalCode: "EC1V 2NX",
            countryCode: "GB",
            telephone: "+44-7423021644",
            email: "contact@dastute.co.uk",
            openingHours: "Mo-Fr 09:00-18:00",
            latitude: 51.5258,
            longitude: -0.0877,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
      >
        {label}
        {required && " *"}
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
  const { status, handleSubmit, errorMessage } = useFormSubmit();
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-4 sm:px-6 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-4 sm:mb-6">
          / Contact
        </span>
        <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-6 text-white">
          Let&apos;s talk about your <span className="text-gradient-primary">technology challenges.</span>
        </h1>
        <p className="max-w-3xl text-sm sm:text-lg text-slate-300 leading-relaxed mb-12 sm:mb-16">
          Whether you need a consultation, project estimate, or a technology
          audit, our team is ready to help. We respond to every enquiry within
          one business day.
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 sm:gap-16 border-t border-white/10 pt-8 sm:pt-12">
          {/* Office Contacts */}
          <div className="space-y-6 sm:space-y-10">
            <div>
              <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3">
                UK Office
              </p>
              <address className="not-italic text-xs sm:text-sm leading-relaxed">
                Dastute Technologies Limited
                <br />
                128 City Road, London EC1V 2NX, United Kingdom
              </address>
              <a
                href="tel:+447423021644"
                className="text-xs sm:text-sm hover:text-primary block mt-2 break-all"
              >
                +44 7423 021644
              </a>
              <a
                href="mailto:contact@dastute.co.uk"
                className="text-xs sm:text-sm hover:text-primary block break-all"
              >
                contact@dastute.co.uk
              </a>
            </div>
            <div>
              <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3">
                India HQ
              </p>
              <address className="not-italic text-xs sm:text-sm leading-relaxed">
                Coimbatore · Chennai · Bangalore, India
              </address>
              <a
                href="tel:+919940941959"
                className="text-xs sm:text-sm hover:text-primary block mt-2 break-all"
              >
                +91 9940 941959
              </a>
              <a
                href="mailto:contact@dastute.co.uk"
                className="text-xs sm:text-sm hover:text-primary block break-all"
              >
                contact@dastute.co.uk
              </a>
            </div>
            <div>
              <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3">
                Singapore
              </p>
              <address className="not-italic text-xs sm:text-sm leading-relaxed">
                Ubi, Singapore
              </address>
              <a
                href="tel:+6587722877"
                className="text-xs sm:text-sm hover:text-primary block mt-2 break-all"
              >
                +65 8772 2877
              </a>
            </div>
            <div>
              <p className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3">
                Hours
              </p>
              <p className="text-xs sm:text-sm">
                Mon — Fri · 09:00 — 18:00 (Local Office Time)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-4 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Field
                label="Business Email"
                name="businessEmail"
                type="email"
                required
              />
              <Field label="Company Name" name="companyName" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Field label="Phone Number" name="phone" type="tel" />
              <Field label="Country" name="country" required />
            </div>
            <div>
              <label
                htmlFor="service"
                className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
              >
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
              >
                <option value="">Select a service...</option>
                <option value="managed-it">Managed IT Services</option>
                <option value="cyber-security">Cyber Security</option>
                <option value="cloud">Cloud Services (AWS/Azure/GCP)</option>
                <option value="web-dev">Web Development</option>
                <option value="mobile-dev">Mobile App Development</option>
                <option value="blockchain">Blockchain & Web3</option>
                <option value="erp">ERP Solutions</option>
                <option value="network">Network Connectivity</option>
                <option value="consulting">IT Consulting & Advisory</option>
                <option value="marketing">Digital Marketing</option>
                <option value="staffing">IT Staff Resource Supply</option>
                <option value="red-blue">Red Team / Blue Team Security</option>
                <option value="audit">Free Technology Audit</option>
                <option value="estimate">Project Estimate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="source"
                className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
              >
                How Did You Hear About Us?
              </label>
              <select
                id="source"
                name="source"
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors"
              >
                <option value="">Select...</option>
                <option>Google Search</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Social Media</option>
                <option>Blog/Article</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us about your goals, challenges, and timeline..."
                className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors"
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your information is handled under our Privacy Policy and UK GDPR.
              We only use your details to respond to your enquiry.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-gradient rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest min-h-[44px] disabled:opacity-50"
            >
              {status === 'submitting' ? "Sending..." : "Send Message — We'll Reply Within 1 Business Day"}
            </button>
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-sm mt-4">
                Thank you. Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-sm mt-4">
                {errorMessage || "Something went wrong. Please try again or email us directly at info@dastute.co.uk."}
              </div>
            )}
          </form>
        </div>
        </div>
      </section>

      {/* Fast Track Options */}
      <section className="section-gradient px-6 py-24">
        <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
            Fast-Track Options
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="glass-card-strong rounded-3xl p-6 accent-top-blue">
            <h3 className="font-bold text-lg mb-3">Free Technology Audit</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Request a no-obligation audit and receive a prioritized report on
              infrastructure, security, software, and data risks.
            </p>
            <a
              href="/request-audit"
              className="btn-gradient inline-flex items-center rounded-full px-4 py-2 text-sm"
            >
              Request Free Audit →
            </a>
          </article>
          <article className="glass-card-strong rounded-3xl p-6 accent-top-violet">
            <h3 className="font-bold text-lg mb-3">Project Estimator</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Get a ballpark budget and timeline in minutes. Useful for early
              planning before full discovery.
            </p>
            <a
              href="/project-estimator"
              className="btn-gradient inline-flex items-center rounded-full px-4 py-2 text-sm"
            >
              Use Project Estimator →
            </a>
          </article>
        </div>
        </div>
      </section>
    </SiteLayout>
  );
}

