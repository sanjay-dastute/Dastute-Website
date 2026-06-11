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

      {/* Contact FAQ */}
      <section className="bg-slate-50 py-24 px-6 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              Frequently Asked Questions
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-base mb-2">How quickly do you respond to enquiries?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We strive to review and respond to all inbound requests within one business day. For urgent security incidents or immediate IT infrastructure failures, please state "URGENT" in your message body, and our rapid response team will prioritize your ticket.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2">Do you provide ongoing support after a project?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Absolutely. Transitioning a completed project into a fully managed service is a core part of our offering. We offer dedicated Service Level Agreements (SLAs), 24/7 proactive system monitoring, routine security patching, and ongoing cloud cost optimization to ensure your new technology remains robust long after the initial launch.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2">Where are your teams located?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dastute Technologies operates with a global footprint. Our corporate headquarters and primary client engagement teams are based in London, United Kingdom. We also maintain extensive delivery and engineering hubs across India (Coimbatore, Chennai, Bangalore) and Singapore, allowing us to provide continuous "follow-the-sun" support for global enterprise clients.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2">What industries do you specialize in?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                While our technology expertise is highly transferable, we have deep, specialized experience working within highly regulated sectors. This includes Healthcare (navigating HIPAA and strict data privacy laws), FinTech (building secure financial platforms and smart contracts), and Manufacturing (deploying reliable ERP integrations and secure supply-chain networks).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Overview - SEO Text Expansion */}
      <section className="bg-white py-24 px-6 dark:bg-slate-950 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
              Global Operations & Support Infrastructure
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enterprise Technology Solutions Driven by Global Expertise</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              At Dastute Technologies, we understand that modern enterprises require far more than just a localized IT support desk. They require a globally integrated technology partner capable of architecting, deploying, and maintaining mission-critical infrastructure across multiple time zones. From our corporate headquarters in London to our extensive engineering hubs in India and Singapore, we provide true 24/7 "follow-the-sun" support. This means that whether you are experiencing a critical server outage at 2 AM in London or require urgent smart contract debugging before a major protocol launch in Singapore, a senior engineer is always online, alert, and ready to act.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our unique operating model bridges the gap between high-level strategic consulting and granular technical execution. When you contact our team, you are not simply placed into a queue to speak with a tier-1 triage agent. Instead, your enquiry is immediately routed to a domain specialist. If you are reaching out regarding a complex cloud migration, your initial consultation will involve an AWS or Azure certified architect. If you are enquiring about our cybersecurity audit services, you will speak directly with a seasoned penetration tester. We believe in stripping away administrative friction so that we can immediately begin solving your core technical challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Comprehensive Coverage Across the Technology Stack</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We provide a holistic suite of services designed to serve as an end-to-end technology partner for growing enterprises. Our Managed IT Services division handles the daily operational burden of endpoint management, server patching, proactive network monitoring, and helpdesk support, freeing your internal teams to focus on strategic growth. Concurrently, our Cloud Architecture team designs highly resilient, auto-scaling environments across AWS, Google Cloud Platform (GCP), and Microsoft Azure, ensuring that your applications remain highly available even during massive traffic spikes.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Security is woven into the fabric of every project we undertake. Our dedicated Cybersecurity division offers comprehensive threat modeling, rigorous penetration testing, and continuous Security Information and Event Management (SIEM) via our Security Operations Center (SOC). We regularly assist organizations in achieving stringent compliance frameworks, including ISO 27001, SOC 2, and Cyber Essentials Plus. By integrating security at the foundational level rather than treating it as an afterthought, we dramatically reduce the attack surface of our clients' networks and applications.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Furthermore, our Software Engineering and Blockchain practices build custom, high-performance applications tailored to your exact specifications. From complex Enterprise Resource Planning (ERP) integrations to decentralized finance (DeFi) protocols and smart contracts, our developers utilize modern frameworks like React, Node.js, Rust, and Solidity to deliver robust, scalable code. We pair these engineering capabilities with our Brand and Digital Marketing division, ensuring that once your product is launched, it is positioned correctly in the market, supported by compelling visual identity, 3D product rendering, and aggressive SEO and performance marketing campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Commitment to Excellence and Rapid Response</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our commitment to our clients is defined by rapid responsiveness, unwavering technical rigor, and absolute transparency. When you fill out the contact form above, you trigger an automated workflow that alerts our senior leadership team. We analyze your provided information, assess the necessary resources, and formulate an initial response strategy before we even send our first reply. We respect your time, which is why we guarantee a response within one business day, complete with actionable next steps. Whether you represent an early-stage startup looking to build a Minimum Viable Product (MVP) or an established multinational corporation seeking to overhaul its legacy infrastructure, Dastute Technologies has the experience, the talent, and the global reach to drive your digital transformation forward.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

