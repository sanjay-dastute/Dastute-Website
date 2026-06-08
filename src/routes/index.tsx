import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildServiceListJsonLd,
} from "@/lib/seo";

const SERVICE_SUMMARY =
  "Dastute Technologies Limited delivers end-to-end IT consulting, managed services, cybersecurity (Red & Blue Team), cloud management, software development, digital marketing, and IT staffing solutions to ambitious businesses in the UK, India, and Singapore.";

const SERVICE_ITEMS = [
  {
    name: "Cyber Security",
    description:
      "Enterprise-grade threat monitoring, incident response, vulnerability assessments, and compliance management.",
  },
  {
    name: "Cloud Services",
    description:
      "Seamless migration, management, and optimisation on AWS, Azure, and Google Cloud.",
  },
  {
    name: "Managed IT Services",
    description:
      "Proactive infrastructure monitoring, helpdesk support, patch management, and vCIO advisory.",
  },
  {
    name: "Web Development",
    description:
      "Responsive web applications and corporate websites built for performance and accessibility.",
  },
  {
    name: "Mobile App Development",
    description:
      "Native Android, iOS and hybrid mobile apps designed for engagement and reliability.",
  },
  {
    name: "Blockchain & NFT",
    description:
      "Custom blockchain development, smart contracts, DeFi platforms, and tokenised experiences.",
  },
  {
    name: "ERP Solutions",
    description:
      "End-to-end ERP implementation, integration and optimisation for finance, HR and operations.",
  },
  {
    name: "IT Consulting & Advisory",
    description:
      "Strategic technology roadmaps, audits, and virtual CIO services aligned to business outcomes.",
  },
  {
    name: "Digital Marketing",
    description:
      "SEO, PPC, content, and analytics-driven campaigns for measurable business growth.",
  },
  {
    name: "IT Staffing",
    description:
      "Pre-vetted IT professionals for contract and permanent placements across the UK, India and Singapore.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is your average response time?",
    answer:
      "Our average response time is 3 minutes with 24/7 helpdesk coverage and dedicated engineers assigned to each client.",
  },
  {
    question: "Do you offer services outside India?",
    answer:
      "Yes. We operate in India, Singapore, and the United Kingdom, serving global clients with remote and on-site capabilities.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We specialise in manufacturing, logistics, healthcare, finance, fintech, non-profit, consulting, and consumer platforms.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We offer predictable flat-rate monthly pricing with no hidden fees, plus project pricing for software and transformation engagements.",
  },
  {
    question: "Can you handle both IT support and development?",
    answer:
      "Absolutely. We provide managed IT, cybersecurity, cloud services and custom development under one unified delivery model.",
  },
];

const PARTNER_LOGOS = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "IBM",
  "Zhagaram Consulting Insights Pvt Ltd",
  "Skillwave Technologies",
  "ParkQwik",
  "Mindverse Labs",
  "Creatoos",
  "Pencodit Technologies",
];

const WHY_POINTS = [
  {
    title: "Cost-Effective",
    description:
      "Flat-rate predictable pricing with no surprises. Save up to 40% compared to in-house teams.",
  },
  {
    title: "3-Minute Response",
    description:
      "Industry-leading response time with instant triage and rapid assignment.",
  },
  {
    title: "Certified Specialists",
    description:
      "Teams certified across Microsoft, AWS, Google Cloud, Cisco, and continuous training.",
  },
  {
    title: "Global Presence",
    description:
      "Local expertise from India, Singapore, and the UK with global delivery capabilities.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Services that scale with your business—from startup to enterprise.",
  },
  {
    title: "Dedicated vCIO",
    description:
      "Every client receives a virtual CIO aligned with your strategy and outcomes.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We audit your infrastructure, identify risks, and understand your business goals.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We design a customised IT strategy with a clear budget, timeline, and delivery plan.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Certified engineers deploy solutions with minimal disruption, on schedule and documented.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    description:
      "24/7 monitoring, reviews, security updates, and continuous optimisation.",
  },
];

const INDUSTRIES = [
  {
    title: "Manufacturing",
    description:
      "OT/IT convergence, ERP integration, and industrial IoT solutions.",
  },
  {
    title: "Transportation & Logistics",
    description:
      "Fleet management, real-time tracking, and supply chain visibility.",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-ready infrastructure, EHR integration, and telemedicine platforms.",
  },
  {
    title: "Banks & Insurance",
    description: "Secure banking platforms, compliance, and fraud detection.",
  },
  {
    title: "Consulting Providers",
    description:
      "Practice management tools, secure client portals, and collaboration systems.",
  },
  {
    title: "Non-Profit Organisations",
    description:
      "Affordable managed IT, donor management and compliant data handling.",
  },
  {
    title: "Social & Consumer Platforms",
    description: "Scalable backend architecture, messaging, and user security.",
  },
  {
    title: "Fintech",
    description:
      "Payment gateways, open banking APIs, and PCI-DSS aligned platforms.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Managed IT & Software Development UK | Dastute Technologies" },
      { name: "description", content: SERVICE_SUMMARY },
      {
        name: "keywords",
        content:
          "managed IT services, cybersecurity, cloud services, web development, mobile app development, blockchain, ERP, IT consulting, digital marketing, IT staffing",
      },
      {
        property: "og:title",
        content: "Managed IT & Software Development UK | Dastute Technologies",
      },
      { property: "og:description", content: SERVICE_SUMMARY },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content: "https://dastute.co.uk/images/og-home.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Managed IT & Software Development UK | Dastute Technologies",
      },
      { name: "twitter:description", content: SERVICE_SUMMARY },
      {
        name: "twitter:image",
        content: "https://dastute.co.uk/images/og-home.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/#faq", FAQ_ITEMS)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildServiceListJsonLd("/", SERVICE_ITEMS)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Dastute Technologies Limited",
          url: "https://dastute.co.uk",
          logo: "https://dastute.co.uk/images/logo.png",
          telephone: "+44-7423021644",
          email: "contact@dastute.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "128 City Road",
            addressLocality: "London",
            postalCode: "EC1V 2NX",
            addressRegion: "England",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.5245,
            longitude: -0.0873,
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+447423021644",
              contactType: "customer service",
              areaServed: "GB",
              availableLanguage: "English",
            },
            {
              "@type": "ContactPoint",
              telephone: "+919940941959",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: "English",
            },
            {
              "@type": "ContactPoint",
              telephone: "+6587722877",
              contactType: "customer service",
              areaServed: "SG",
              availableLanguage: "English",
            },
          ],
          sameAs: [
            "https://www.linkedin.com/company/dastute-technologies",
            "https://twitter.com/DastuteTech",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 flex-wrap text-[10px] uppercase tracking-[0.35em] text-sky-300/80">
                <span className="rounded-full border border-sky-300/30 px-3 py-1">
                  Innovate
                </span>
                <span className="h-1 w-1 rounded-full bg-sky-300/80" />
                <span className="rounded-full border border-sky-300/30 px-3 py-1">
                  Connect
                </span>
                <span className="h-1 w-1 rounded-full bg-sky-300/80" />
                <span className="rounded-full border border-sky-300/30 px-3 py-1">
                  Inspire
                </span>
              </div>
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Enterprise IT That Works
                  <br />
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    As Hard As You Do
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  {SERVICE_SUMMARY} We manage your technology. You grow your
                  business.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  <span>Schedule Free Consultation</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                >
                  Our Solutions
                </a>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-slate-900 p-6 ring-1 ring-white/10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                      <i className="fas fa-shield-check" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                        Security Active
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        99.9% Protected
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950 p-8">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
                  <div className="space-y-4">
                    <div className="h-28 rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900" />
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                        <i className="fas fa-chart-line" />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                          Uptime SLA
                        </p>
                        <p className="font-semibold text-white">
                          99.97% Guaranteed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-slate-500">
            Most Valuable Clients & Technology Partners
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo}
                className="rounded-3xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-600 shadow-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              What We Do
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive IT Solutions Built for Business Growth
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              From day-to-day managed support to full-scale digital
              transformation, we free your team to focus on what matters most
              while handling the technology.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Cost-Effectiveness",
                description:
                  "Predictable flat-rate pricing with zero hidden fees. Save up to 40% compared to in-house IT teams.",
              },
              {
                title: "Innovative Technology",
                description:
                  "AI, blockchain, and cloud-native architectures that give your business a competitive edge.",
              },
              {
                title: "Industry Expertise",
                description:
                  "Deep domain knowledge across healthcare, finance, manufacturing, logistics and fintech.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {SERVICE_ITEMS.slice(0, 6).map((service) => (
              <article
                key={service.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-500">
                  {service.name}
                </div>
                <p className="text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Full Services
            </Link>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Read FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-900/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                Founded 2023 • Global IT Operations
              </div>
              <div className="rounded-3xl bg-slate-100 p-6">
                Offices in India, Singapore, and the UK with local teams and
                global delivery.
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              About Dastute
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your Trusted IT Partner — Locally Rooted, Globally Capable
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The Dastute journey began in 2023 when a group of passionate
              friends came together with a shared vision for IT growth —
              bringing the personal service of local IT providers with the power
              of a national network.
            </p>
            <p className="mt-6 max-w-2xl text-slate-600">
              We deliver high-touch IT services with experienced teams across
              India, Singapore, and the UK. Our mission is to add balance to
              chaotic business environments through smart, reliable technology.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "People",
                  description:
                    "Highly skilled, customer-first professionals with rigorous training standards.",
                },
                {
                  title: "Purpose",
                  description:
                    "Security, simplicity, and cost savings drive every decision we make.",
                },
                {
                  title: "Process",
                  description:
                    "Time-tested delivery methods, premium tools, and consistent results.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Why Dastute
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Smart Choice for Modern IT Management
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              We don't just fix problems—we prevent them. Our proactive,
              people-first approach ensures your business stays online, secure,
              and efficient 24/7.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-4 text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Our Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, Transparent & Effective
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              From first contact to continuous management, we make IT effortless
              for your business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Industries
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Specialists in Your Sector
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Our teams bring deep domain knowledge and understand the
              compliance, security, and operational challenges unique to your
              industry.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold">{industry.title}</h3>
                <p className="mt-3 text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              Client Reviews
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Real feedback from businesses that have transformed their IT
              operations with Dastute Technologies.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Dastute completely transformed our IT infrastructure. Downtime dropped to virtually zero and our team is more productive than ever.",
                author: "Rajesh Mehta",
                role: "CEO, Apex Logistics India",
              },
              {
                quote:
                  "The cybersecurity overhaul saved us from a major data breach. Their incident response team is incredibly fast and professional.",
                author: "Dr. Priya Anand",
                role: "CTO, HealthBridge Medical Centre",
                featured: true,
              },
              {
                quote:
                  "Moving to the cloud with Dastute was seamless. Our infrastructure costs dropped by 35% in the first year.",
                author: "Kevin Tan",
                role: "COO, FinEdge Solutions Singapore",
              },
            ].map((item) => (
              <div
                key={item.author}
                className={`rounded-3xl border ${item.featured ? "border-primary bg-primary/5" : "border-slate-200 bg-white"} p-8 shadow-sm`}
              >
                <p className="text-slate-600">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <i className="fas fa-user" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              The DST Blog
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              News, Technology Advice & Business Culture
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Stay ahead with expert insights, cybersecurity updates, and
              technology trends.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title:
                  "Enterprise-Grade AI Integration: From Concept to Deployment",
                category: "AI & Technology",
                date: "31 May 2025",
                href: "https://dastute.com/index.php/2025/05/31/enterprise-grade-ai-integration-from-concept-to-deployment/",
              },
              {
                title:
                  "4 Cybersecurity Takeaways from China's Largest Data Breach",
                category: "Cybersecurity",
                date: "10 Apr 2023",
                href: "https://dastute.com/index.php/2023/04/10/4-cybersecurity-takeaways-from-chinas-largest-data-breach/",
              },
              {
                title:
                  "Azure vs AWS vs Google Cloud: Which Platform Fits Your Business?",
                category: "Cloud",
                date: "2026",
                href: "/contact",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-500">
                  {post.category}
                </div>
                <div className="text-sm text-slate-400">{post.date}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  target={post.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    post.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-600">
              Quick answers to the questions prospects ask most often.
            </p>
          </div>
          <div className="mt-12 grid gap-4">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
