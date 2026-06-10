import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildBlogPostingJsonLd, buildStandardPageHead } from "@/lib/seo";
import { useState } from "react";
import { useFormSubmit } from "@/lib/useFormSubmit";

export const Route = createFileRoute("/insights")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Insights & Blog — Dastute Technologies",
      description: "Expert insights on cybersecurity, cloud computing, ERP, AI integration and IT strategy from Dastute Technologies. Case studies, industry analysis and thought leadership.",
      path: "/insights",
      ogDescription: "Cybersecurity analysis, cloud strategy, ERP insights, AI integration guides and IT industry thought leadership.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd("/insights#faq", FAQ_ITEMS)),
      },
      ...ARTICLES.map((article) => ({
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: article.title,
            description: article.excerpt,
            datePublished: new Date(article.date).toISOString(),
            authorName: "Dastute Technologies",
            path: `/insights/${article.slug}`,
          }),
        ),
      })),
    ],
  }),
  component: InsightsPage,
});

type Category =
  | "All"
  | "Cybersecurity"
  | "IT Strategy"
  | "Development"
  | "Case Study";

interface Article {
  slug: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    slug: "enterprise-grade-ai-integration",
    category: "IT Strategy",
    date: "31 May 2025",
    readTime: "12 min read",
    title: "Enterprise-Grade AI Integration: From Concept to Deployment",
    excerpt:
      "A comprehensive guide to integrating AI solutions into enterprise workflows. From identifying use cases and selecting the right models to deployment architecture and measuring ROI across your organisation.",
    tags: ["AI", "Enterprise", "Integration"],
    featured: true,
  },
  {
    slug: "cybersecurity-takeaways-china-breach",
    category: "Cybersecurity",
    date: "10 Apr 2023",
    readTime: "8 min read",
    title: "4 Cybersecurity Takeaways from China's Largest Data Breach",
    excerpt:
      "Analysing the lessons learned from one of the largest data breaches in history and what it means for your organisation's security posture, incident response planning and data governance frameworks.",
    tags: ["Data Breach", "Security", "Governance"],
    featured: true,
  },
  {
    slug: "top-5-email-security-tips",
    category: "Cybersecurity",
    date: "10 Apr 2023",
    readTime: "6 min read",
    title: "Top 5 Tips for Solving the Email Security Problem",
    excerpt:
      "Email remains the primary attack vector for cyber threats. We break down the five most impactful measures your organisation can implement today to dramatically reduce email-borne risk.",
    tags: ["Email Security", "Phishing", "Best Practices"],
  },
  {
    slug: "cybersecurity-mistakes-2023",
    category: "Cybersecurity",
    date: "10 Apr 2023",
    readTime: "7 min read",
    title: "What You Shouldn't Be Doing with Your Cybersecurity in 2023",
    excerpt:
      "Common cybersecurity anti-patterns that leave organisations exposed. From over-reliance on perimeter defences to neglecting employee training — the mistakes costing businesses millions.",
    tags: ["Security", "Best Practices", "Risk"],
  },
  {
    slug: "startups-cutting-cloud-costs",
    category: "IT Strategy",
    date: "10 Apr 2023",
    readTime: "9 min read",
    title: "How Startups Are Cutting Cloud Costs, Renegotiating Deals",
    excerpt:
      "With VC funding tightening, startups are getting creative with cloud spend. Strategies for FinOps optimisation, reserved instance planning and negotiating better deals with AWS, Azure and GCP.",
    tags: ["Cloud", "FinOps", "Startups"],
  },
  {
    slug: "it-business-alignment-elements",
    category: "IT Strategy",
    date: "10 Apr 2023",
    readTime: "7 min read",
    title: "5 Impactful Elements That Promote IT and Business Alignment",
    excerpt:
      "Bridging the gap between IT operations and business strategy. Five proven frameworks for aligning technology investments with commercial outcomes and securing executive buy-in.",
    tags: ["IT Strategy", "Business", "Alignment"],
  },
  {
    slug: "sage-100-erp-vs-cloud",
    category: "IT Strategy",
    date: "7 Apr 2023",
    readTime: "10 min read",
    title: "Financials Face-off: Sage 100 ERP vs. Cloud",
    excerpt:
      "A detailed comparison of on-premise Sage 100 ERP against cloud-native alternatives. TCO analysis, migration considerations, and which path makes sense for different business scales.",
    tags: ["ERP", "Cloud", "Sage"],
  },
  {
    slug: "chatgpt-revolutionizing-information",
    category: "IT Strategy",
    date: "18 Mar 2023",
    readTime: "6 min read",
    title: "How Chat GPT is Revolutionizing the Way We Find Information",
    excerpt:
      "Exploring the transformative impact of large language models on information retrieval, business operations and the future of knowledge work across enterprise organisations.",
    tags: ["AI", "ChatGPT", "Innovation"],
  },
  {
    slug: "heavy-equipment-manufacturer-solutions",
    category: "Case Study",
    date: "10 Apr 2023",
    readTime: "5 min read",
    title: "Heavy Equipment Manufacturer Finds Concrete Solutions",
    excerpt:
      "How a leading manufacturing firm modernised their IT infrastructure and ERP systems, achieving significant efficiency gains and cost savings through strategic technology deployment.",
    tags: ["Manufacturing", "ERP", "Case Study"],
  },
  {
    slug: "supply-chain-management-uniwell",
    category: "Case Study",
    date: "10 Apr 2023",
    readTime: "5 min read",
    title: "Healthy Supply Chain Management Positions UniWell for Growth",
    excerpt:
      "UniWell's journey to optimising their supply chain through intelligent automation, real-time analytics and integrated ERP systems that positioned them for sustained growth.",
    tags: ["Supply Chain", "Healthcare", "Growth"],
  },
  {
    slug: "ai-public-safety-travel-app-london",
    category: "Case Study",
    date: "20 Mar 2023",
    readTime: "6 min read",
    title: "Strategic Move to AI-supported Public Safety Travel App in London",
    excerpt:
      "Building an AI-powered travel safety application for London, leveraging machine learning for real-time threat assessment and route optimisation in public transportation.",
    tags: ["AI", "Public Safety", "London"],
  },
  {
    slug: "insurance-provider-big-data-migration",
    category: "Case Study",
    date: "20 Mar 2023",
    readTime: "7 min read",
    title: "Major Insurance Provider Saves $750k/month with Big Data Migration",
    excerpt:
      "A comprehensive case study on migrating a major insurance provider's legacy data infrastructure to the cloud, achieving $750,000 in monthly cost savings while improving performance.",
    tags: ["Big Data", "Insurance", "Cloud Migration"],
  },
  {
    slug: "next-gen-erp-dental-insurer",
    category: "Development",
    date: "10 Apr 2023",
    readTime: "5 min read",
    title:
      "Next Generation ERP Brings Transformational Change to Dental Insurer",
    excerpt:
      "Implementing a next-generation ERP platform for a dental insurance provider, transforming operations from claims processing to member engagement with measurable ROI.",
    tags: ["ERP", "Insurance", "Transformation"],
  },
  {
    slug: "paysafe-intelligent-automation",
    category: "Case Study",
    date: "20 Mar 2023",
    readTime: "6 min read",
    title:
      "Delivering Enterprise-wide Efficiencies at Paysafe via Intelligent Automation",
    excerpt:
      "How intelligent automation transformed Paysafe's enterprise operations, reducing manual processes, improving accuracy and enabling the team to focus on strategic initiatives.",
    tags: ["Automation", "Fintech", "Enterprise"],
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Cybersecurity",
  "IT Strategy",
  "Development",
  "Case Study",
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

function InsightsPage() {
  const { status, handleSubmit } = useFormSubmit();
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const featuredArticle = ARTICLES.find((a) => a.featured);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section-hero-dark">
        <div className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6">
          / Insights
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12">
          Industry insights.
          <br />
          Expert perspectives.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Deep-dives into cybersecurity, cloud strategy, ERP implementation,
            AI integration and IT operations. Practical insights shaped by the
            projects we deliver for clients every week.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From case studies demonstrating $750k/month savings to actionable
            cybersecurity guidance — every article is written by practitioners,
            not a marketing team.
          </p>
        </div>
      
        </div>
</section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="section-gradient border-y border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:divide-x divide-border">
            <div className="p-12 group hover:bg-foreground hover:text-background transition-colors duration-500">
              <div className="flex justify-between items-start mb-16">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60">
                  Featured
                </span>
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">
                  {featuredArticle.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground group-hover:text-background/70 mb-8 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">
                  {featuredArticle.readTime}
                </span>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-between border-t md:border-t-0 border-border">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-8">
                  Latest by Category
                </span>
                <div className="space-y-6">
                  {["Cybersecurity", "IT Strategy", "Case Study"].map((cat) => {
                    const latest = ARTICLES.find((a) => a.category === cat);
                    return latest ? (
                      <div
                        key={cat}
                        className="border-b border-border pb-6 last:border-0 last:pb-0"
                      >
                        <span className="font-mono text-[10px] text-primary uppercase">
                          {cat}
                        </span>
                        <h4 className="font-bold mt-2 mb-1">{latest.title}</h4>
                        <span className="text-sm text-muted-foreground">
                          {latest.date} · {latest.readTime}
                        </span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">
                  Stay Updated
                </span>
                <p className="text-sm text-muted-foreground mb-4">
                  IT strategy and cybersecurity insights, delivered to your
                  inbox. No spam.
                </p>
                <form
                  className="flex flex-col gap-2"
                  onSubmit={handleSubmit}
                >
                  <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="flex-1 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-foreground text-background px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? '...' : 'Subscribe'}
                  </button>
                  </div>
                  {status === 'success' && (
                    <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 rounded-md text-xs mt-2">
                      Thanks — you're on the list.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-md text-xs mt-2">
                      Failed to subscribe. Try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter + Article Listing */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            All Articles
          </h3>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-border">
          {filtered.map((article) => (
            <article
              key={article.slug}
              className="bg-background p-8 md:p-10 group hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <div className="grid md:grid-cols-[160px_1fr_200px] gap-6 md:gap-12 items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60 block mb-2">
                    {article.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">
                    {article.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col md:items-end justify-between md:justify-start gap-4">
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-background/50">
                    {article.readTime}
                  </span>
                  <div className="size-10 rounded-full border border-current grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-gradient py-16 sm:py-20">
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
                className="glass-card-strong rounded-3xl p-6"
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

      {/* CTA */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Have an IT challenge you'd like us to cover?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              We write about the problems our clients face. If there's a
              cybersecurity, cloud or IT strategy challenge on your mind, let us
              know.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <Link
              to="/contact"
              className="btn-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Get in touch <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
