import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";
import { ArrowRight, Calculator, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { OfficeCards } from "@/components/AboutSections";
import { ContactForm, ResponseFlow } from "@/components/ContactSections";
import { SplitWords } from "@/components/motion";
import { ProductFaq } from "@/components/ProductSections";

// NOTE: Form submissions are sent to info@dastute.co.uk via FormSubmit (src/lib/useFormSubmit.ts)
// Update the formspree form ID in the action attribute if needed

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Contact Dastute Technologies | London · India · Singapore",
      description:
        "Contact Dastute Technologies. London office: 128 City Road, EC1V 2NX. Call +44 7423 021644 or email contact@dastute.co.uk. We reply within 1 business day.",
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

const CONTACT_FAQS = [
  {
    question: "How quickly do you respond to enquiries?",
    answer:
      'We strive to review and respond to all inbound requests within one business day. For urgent security incidents or immediate IT infrastructure failures, please state "URGENT" in your message body, and our rapid response team will prioritize your ticket.',
  },
  {
    question: "Do you provide ongoing support after a project?",
    answer:
      "Absolutely. Transitioning a completed project into a fully managed service is a core part of our offering. We offer dedicated Service Level Agreements (SLAs), 24/7 proactive system monitoring, routine security patching, and ongoing cloud cost optimization to ensure your new technology remains robust long after the initial launch.",
  },
  {
    question: "Where are your teams located?",
    answer:
      'Dastute Technologies operates with a global footprint. Our corporate headquarters and primary client engagement teams are based in London, United Kingdom. We also maintain extensive delivery and engineering hubs across India (Coimbatore, Chennai, Bangalore) and Singapore, allowing us to provide continuous "follow-the-sun" support for global enterprise clients.',
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "While our technology expertise is highly transferable, we have deep, specialized experience working within highly regulated sectors. This includes Healthcare (navigating HIPAA and strict data privacy laws), FinTech (building secure financial platforms and smart contracts), and Manufacturing (deploying reliable ERP integrations and secure supply-chain networks).",
  },
];

function ContactPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-20 md:py-28 max-w-7xl mx-auto grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">/ Contact</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white mb-8">
              <SplitWords text="Let's talk about your" />{" "}
              <SplitWords className="text-gradient-primary" text="technology challenges." delay={0.3} />
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 leading-relaxed mb-10">
              Whether you need a consultation, project estimate, or a technology audit, our team is ready to help.
              We respond to every enquiry within one business day.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:contact@dastute.co.uk" className="ct-pill">
                <Mail className="h-4 w-4" aria-hidden="true" /> contact@dastute.co.uk
              </a>
              <a href="tel:+447423021644" className="ct-pill">
                <Phone className="h-4 w-4" aria-hidden="true" /> +44 7423 021644
              </a>
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-md">
            <ResponseFlow />
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="section-gradient px-6 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="space-y-4 lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ Direct lines</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Prefer to talk directly?</h2>
            <a href="mailto:contact@dastute.co.uk" className="ct-line">
              <span className="ct-line-icon"><Mail className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className="ct-line-k">Email</span>
                <span className="ct-line-v">contact@dastute.co.uk</span>
              </span>
            </a>
            <a href="tel:+447423021644" className="ct-line">
              <span className="ct-line-icon"><Phone className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className="ct-line-k">UK Office</span>
                <span className="ct-line-v">+44 7423 021644</span>
              </span>
            </a>
            <div className="ct-line">
              <span className="ct-line-icon"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
              <address className="not-italic">
                <span className="ct-line-k">London HQ</span>
                <span className="ct-line-v">Dastute Technologies Limited<br />128 City Road, London EC1V 2NX, United Kingdom</span>
              </address>
            </div>
            <div className="ct-line">
              <span className="ct-line-icon"><Clock className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className="ct-line-k">Hours</span>
                <span className="ct-line-v">Mon - Fri · 09:00 - 18:00 (Local Office Time)</span>
              </span>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>

      {/* Offices */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ Offices</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Three regions, one team</h2>
        </div>
        <OfficeCards
          offices={[
            { region: "United Kingdom", offices: ["128 City Road, London"], phone: "+44 7423 021644", tz: "Europe/London", hue: "#3b82f6" },
            { region: "India (HQ)", offices: ["Coimbatore", "Chennai", "Bangalore"], phone: "+91 9940941959", tz: "Asia/Kolkata", hue: "#8b5cf6" },
            { region: "Singapore", offices: ["Ubi, Singapore"], phone: "+65 8772 2877", tz: "Asia/Singapore", hue: "#10b981" },
          ]}
        />
      </section>

      {/* Fast Track Options */}
      <section className="future-section px-6 py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">/ Fast-track options</p>
          <h2 className="mt-3 mb-12 text-4xl md:text-5xl font-bold tracking-tight text-white">Not ready to talk yet?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Free Technology Audit",
                text: "Request a no-obligation audit and receive a prioritized report on infrastructure, security, software, and data risks.",
                href: "/request-audit",
                cta: "Request Free Audit",
              },
              {
                icon: Calculator,
                title: "Project Estimator",
                text: "Get a ballpark budget and timeline in minutes. Useful for early planning before full discovery.",
                href: "/project-estimator",
                cta: "Use Project Estimator",
              },
            ].map(({ icon: TrackIcon, title, text, href, cta }) => (
              <a key={title} href={href} className="ct-track">
                <span className="ct-track-icon"><TrackIcon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">{text}</p>
                <span className="ct-track-cta">
                  {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="px-6 py-20 sm:py-24 max-w-7xl mx-auto">
        <ProductFaq
          items={CONTACT_FAQS}
          title="Frequently Asked Questions"
          intro="Quick answers before you get in touch."
        />
      </section>

      {/* Global Operations Overview - SEO Text Expansion */}
      <section className="bg-slate-50 py-20 md:py-24 px-6 dark:bg-slate-900/50 border-t border-border">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ How we work</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Global Operations & Support Infrastructure
              </h2>
            </div>
          </div>
          <div className="space-y-10 text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise Technology Solutions Driven by Global Expertise</h3>
              <p className="mb-4">
                At Dastute Technologies, we understand that modern enterprises require far more than just a localized IT support desk. They require a globally integrated technology partner capable of architecting, deploying, and maintaining mission-critical infrastructure across multiple time zones. From our corporate headquarters in London to our extensive engineering hubs in India and Singapore, we provide true 24/7 "follow-the-sun" support. This means that whether you are experiencing a critical server outage at 2 AM in London or require urgent smart contract debugging before a major protocol launch in Singapore, a senior engineer is always online, alert, and ready to act.
              </p>
              <p>
                Our unique operating model bridges the gap between high-level strategic consulting and granular technical execution. When you contact our team, you are not simply placed into a queue to speak with a tier-1 triage agent. Instead, your enquiry is immediately routed to a domain specialist. If you are reaching out regarding a complex cloud migration, your initial consultation will involve an AWS or Azure certified architect. If you are enquiring about our cybersecurity audit services, you will speak directly with a seasoned penetration tester. We believe in stripping away administrative friction so that we can immediately begin solving your core technical challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Coverage Across the Technology Stack</h3>
              <p className="mb-4">
                We provide a holistic suite of services designed to serve as an end-to-end technology partner for growing enterprises. Our Managed IT Services division handles the daily operational burden of endpoint management, server patching, proactive network monitoring, and helpdesk support, freeing your internal teams to focus on strategic growth. Concurrently, our Cloud Architecture team designs highly resilient, auto-scaling environments across AWS, Google Cloud Platform (GCP), and Microsoft Azure, ensuring that your applications remain highly available even during massive traffic spikes.
              </p>
              <p className="mb-4">
                Security is woven into the fabric of every project we undertake. Our dedicated Cybersecurity division offers comprehensive threat modeling, rigorous penetration testing, and continuous Security Information and Event Management (SIEM) via our Security Operations Center (SOC). We regularly assist organizations in achieving stringent compliance frameworks, including ISO 27001, SOC 2, and Cyber Essentials Plus. By integrating security at the foundational level rather than treating it as an afterthought, we dramatically reduce the attack surface of our clients' networks and applications.
              </p>
              <p>
                Furthermore, our Software Engineering and Blockchain practices build custom, high-performance applications tailored to your exact specifications. From complex Enterprise Resource Planning (ERP) integrations to decentralized finance (DeFi) protocols and smart contracts, our developers utilize modern frameworks like React, Node.js, Rust, and Solidity to deliver robust, scalable code. We pair these engineering capabilities with our Brand and Digital Marketing division, ensuring that once your product is launched, it is positioned correctly in the market, supported by compelling visual identity, 3D product rendering, and aggressive SEO and performance marketing campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Commitment to Excellence and Rapid Response</h3>
              <p>
                Our commitment to our clients is defined by rapid responsiveness, unwavering technical rigor, and absolute transparency. When you fill out the contact form above, you trigger an automated workflow that alerts our senior leadership team. We analyze your provided information, assess the necessary resources, and formulate an initial response strategy before we even send our first reply. We respect your time, which is why we guarantee a response within one business day, complete with actionable next steps. Whether you represent an early-stage startup looking to build a Minimum Viable Product (MVP) or an established multinational corporation seeking to overhaul its legacy infrastructure, Dastute Technologies has the experience, the talent, and the global reach to drive your digital transformation forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
