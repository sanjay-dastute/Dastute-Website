import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildFaqJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

const FAQ_ITEMS = [
  {
    question: "What is included in managed IT services?",
    answer: "Managed IT services typically include proactive network monitoring, remote helpdesk support, cybersecurity management, data backup, and strategic IT consulting. By bundling these core disciplines, managed service providers (MSPs) ensure your entire technology infrastructure remains secure, operational, and aligned with your long-term business goals.",
  },
  {
    question: "How much does managed IT support cost in the UK?",
    answer: "We offer the best pricing in the market compared to other IT companies. Because every business is unique, we calculate our pricing entirely according to your specific project requirements, timeline, and complexity, ensuring you receive enterprise-grade service without paying for features you don't need.",
  },
  {
    question: "What is the difference between IT support and managed services?",
    answer: "The difference is that IT support is reactive, fixing broken systems on a break-fix basis, whereas managed services are proactive. A managed service provider continuously monitors your network, applies security patches, and upgrades systems before problems cause operational downtime or financial loss.",
  },
  {
    question: "Do small businesses need managed IT services?",
    answer: "Yes, small businesses need managed IT services because they face the exact same cybersecurity threats as large enterprises but lack the budget for internal security teams. An MSP provides enterprise-grade protection, reliable backups, and expert IT guidance at a fraction of the cost of hiring full-time staff.",
  },
  {
    question: "What are the benefits of using a managed service provider (MSP)?",
    answer: "The primary benefits of using an MSP include predictable monthly IT costs, reduced operational downtime, enhanced cybersecurity posture, and access to a broad pool of technical specialists. This allows your internal team to focus entirely on core business growth rather than troubleshooting daily technology issues.",
  },
  {
    question: "How do I choose a managed IT service provider in the UK?",
    answer: "Choose a managed IT service provider by evaluating their average response times, industry-specific expertise, and cybersecurity certifications like Cyber Essentials Plus. You should also request transparent pricing models, ask for existing client references, and ensure their Service Level Agreement (SLA) guarantees rapid issue resolution.",
  },
  {
    question: "What is co-managed IT support?",
    answer: "Co-managed IT support is a partnership model where an external MSP collaborates alongside your existing internal IT department. The MSP typically handles time-consuming tasks like 24/7 network monitoring, patch management, and advanced cybersecurity, allowing your internal team to focus on strategic, revenue-generating technology projects.",
  },
  {
    question: "Does managed IT include cybersecurity?",
    answer: "Yes, modern managed IT services inherently include baseline cybersecurity such as antivirus, firewall management, and email filtering. However, businesses facing high-risk threats should request advanced security packages that feature Endpoint Detection and Response (EDR), 24/7 Security Operations Center (SOC) monitoring, and compliance auditing.",
  },
  {
    question: "How quickly should a managed IT provider respond to issues?",
    answer: "A premium managed IT provider should respond to critical technical issues within 15 to 30 minutes. Most industry-standard Service Level Agreements (SLAs) guarantee triage within an hour for medium priority tickets, ensuring your business operations suffer minimal disruption during unexpected outages or security incidents.",
  },
  {
    question: "Can managed IT services help with cloud migration?",
    answer: "Yes, managed IT services expertly handle cloud migration by assessing your current infrastructure, selecting the appropriate cloud environment (AWS, Azure, or Google Cloud), and safely transferring your data. Following the migration, the MSP provides continuous cloud optimization to manage costs and enforce strict access controls.",
  }
];

export const Route = createFileRoute("/insights")({
  head: () => ({
    ...buildStandardPageHead({
      title: "Technology Insights & Expert Articles | Dastute Technologies Blog",
      description: "Expert perspectives on cloud (AWS/Azure/GCP), cybersecurity, AI, digital transformation, ERP, blockchain, and IT strategy from Dastute Technologies' practice leads.",
      path: "/insights",
      keywords: "IT insights blog UK, technology articles London, cybersecurity blog UK, cloud computing articles, AI insights UK, digital transformation blog",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildCollectionPageJsonLd({
            path: "/insights",
            name: "Technology Insights & Expert Articles",
            description: "Expert perspectives from Dastute practice leads on cloud, cybersecurity, AI, ERP, and IT strategy.",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildFaqJsonLd("/insights#faq", FAQ_ITEMS)
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
        ),
      },
    ],
  }),
  component: InsightsPage,
});

const ALL_ARTICLES = [
  {
    title: "Azure vs AWS vs Google Cloud: Which Platform is Right for Your Business in 2026?",
    date: "15 Jan 2026",
    category: "CLOUD",
    summary: "A comprehensive breakdown of the big three cloud providers. Which one offers the best cost optimization for your specific enterprise workloads?",
    tags: ["AWS", "AZURE", "GCP"],
    readTime: "10 min read",
    link: "/contact"
  },
  {
    title: "Enterprise-Grade AI Integration: From Concept to Deployment",
    date: "31 May 2025",
    category: "IT STRATEGY",
    summary: "A comprehensive guide to integrating AI solutions into enterprise workflows. From identifying use cases and selecting the right models to deployment architecture and measuring ROI across your organisation.",
    tags: ["AI", "ENTERPRISE", "INTEGRATION"],
    readTime: "12 min read"
  },
  {
    title: "4 Cybersecurity Takeaways from China's Largest Data Breach",
    date: "10 Apr 2023",
    category: "CYBERSECURITY",
    summary: "Analysing the lessons learned from one of the largest data breaches in history and what it means for your organisation's security posture, incident response planning and data governance frameworks.",
    tags: ["DATA BREACH", "SECURITY", "GOVERNANCE"],
    readTime: "8 min read"
  },
  {
    title: "Top 5 Tips for Solving the Email Security Problem",
    date: "10 Apr 2023",
    category: "CYBERSECURITY",
    summary: "Email remains the primary attack vector for cyber threats. We break down the five most impactful measures your organisation can implement today to dramatically reduce email-borne risk.",
    tags: ["EMAIL SECURITY", "PHISHING", "BEST PRACTICES"],
    readTime: "6 min read"
  },
  {
    title: "What You Shouldn't Be Doing with Your Cybersecurity in 2023",
    date: "10 Apr 2023",
    category: "CYBERSECURITY",
    summary: "Common cybersecurity anti-patterns that leave organisations exposed. From over-reliance on perimeter defences to neglecting employee training — the mistakes costing businesses millions.",
    tags: [],
    readTime: "7 min read"
  },
  {
    title: "Heavy Equipment Manufacturer Finds Concrete Solutions",
    date: "10 Apr 2023",
    category: "CASE STUDY",
    summary: "How Dastute engineered an end-to-end ERP and network transformation for a multinational heavy equipment manufacturer, generating $750k/month in operational savings.",
    tags: ["ERP", "MANUFACTURING", "CASE STUDY"],
    readTime: "5 min read"
  }
];

const CATEGORIES = ["ALL", "CYBERSECURITY", "IT STRATEGY", "CLOUD", "CASE STUDY"];

function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  const filteredArticles = ALL_ARTICLES.filter(
    (article) => activeFilter === "ALL" || article.category === activeFilter
  );

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none transition-opacity duration-1000 ease-out"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6 font-semibold">
            / INSIGHTS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-12 max-w-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
            Industry insights.<br/>Expert perspectives.
          </h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl text-slate-300 text-lg md:text-xl leading-relaxed">
            <p className="transition-all duration-700 delay-150">
              Deep-dives into cybersecurity, cloud strategy, ERP implementation, AI integration and IT operations. Practical insights shaped by the projects we deliver for clients every week.
            </p>
            <p className="transition-all duration-700 delay-300">
              From case studies demonstrating $750k/month savings to actionable cybersecurity guidance — every article is written by practitioners, not a marketing team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured / Split Layout */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Left: Featured */}
          <div className="p-6 md:p-12 lg:p-16 group cursor-pointer transition-colors duration-500 hover:bg-white relative overflow-hidden">
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold group-hover:scale-105 transition-transform origin-left">
                  FEATURED
                </span>
                <span className="font-mono text-xs text-slate-500">
                  31 May 2025
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                Enterprise-Grade AI Integration:<br/>From Concept to Deployment
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl group-hover:text-slate-900 transition-colors duration-300">
                A comprehensive guide to integrating AI solutions into enterprise workflows. From identifying use cases and selecting the right models to deployment architecture and measuring ROI across your organisation.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  {["AI", "ENTERPRISE", "INTEGRATION"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-mono font-semibold text-slate-700 bg-white group-hover:border-blue-200 group-hover:shadow-sm transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-slate-500">
                  12 min read
                </span>
              </div>
            </div>
          </div>

          {/* Right: Latest & Newsletter */}
          <div className="p-6 md:p-12 lg:p-16 bg-slate-50/50">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-8">
              LATEST BY CATEGORY
            </h3>
            
            <div className="flex flex-col gap-6 divide-y divide-slate-200 mb-12">
              {[
                { cat: "CYBERSECURITY", title: "4 Cybersecurity Takeaways from China's Largest Data Breach", date: "10 Apr 2023 · 8 min read" },
                { cat: "IT STRATEGY", title: "Enterprise-Grade AI Integration: From Concept to Deployment", date: "31 May 2025 · 12 min read" },
                { cat: "CASE STUDY", title: "Heavy Equipment Manufacturer Finds Concrete Solutions", date: "10 Apr 2023 · 5 min read" }
              ].map((item, idx) => (
                <div key={idx} className={`pt-${idx === 0 ? '2' : '6'} group cursor-pointer`}>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 block mb-2 font-bold group-hover:translate-x-1 transition-transform">{item.cat}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-mono">{item.date}</p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4">
                STAY UPDATED
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                IT strategy and cybersecurity insights, delivered to your inbox. No spam.
              </p>
              <form className="flex border border-slate-300 rounded overflow-hidden shadow-sm focus-within:ring-2 ring-blue-500/20 focus-within:border-blue-500 transition-all" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="flex-1 px-4 py-3 outline-none text-sm"
                  required
                />
                <button type="submit" className="bg-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* All Articles */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-200 pb-8 mb-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500 font-bold">
              ALL ARTICLES
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-0 font-mono text-[10px] md:text-xs font-bold tracking-widest text-slate-500">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 border transition-all duration-300 ${
                    activeFilter === cat 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-0.5" 
                      : "border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col divide-y divide-slate-100 min-h-[500px]">
            {filteredArticles.length === 0 ? (
              <div className="py-20 text-center text-slate-500 animate-in fade-in duration-500">
                No articles found for this category.
              </div>
            ) : (
              filteredArticles.map((article, i) => (
                <div 
                  key={`${article.title}-${i}`} 
                  className="py-12 group animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {article.link ? (
                    <Link to={article.link} className="block group-hover:opacity-80 transition-opacity">
                      <ArticleRow article={article} />
                    </Link>
                  ) : (
                    <div className="cursor-pointer">
                      <ArticleRow article={article} />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* Knowledge Hub FAQs */}
      <section id="faq" className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto p-6 py-20 md:py-32">
          <div className="mb-16 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600 block mb-4 font-bold">
              / KNOWLEDGE HUB
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Managed IT Services FAQs
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Everything you need to know before partnering with a Managed Service Provider in the UK.
            </p>
          </div>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </SiteLayout>
  );
}

function ArticleRow({ article }: { article: any }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start relative">
      {/* Category / Date */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 font-bold group-hover:translate-x-1 transition-transform duration-300">
          {article.category}
        </span>
        <span className="font-mono text-[10px] text-slate-500">
          {article.date}
        </span>
      </div>

      {/* Content */}
      <div className="md:col-span-8 flex flex-col items-start">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-base mb-6 group-hover:text-slate-800 transition-colors">
          {article.summary}
        </p>
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {article.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-slate-200 text-[10px] font-mono font-semibold text-slate-600 bg-white group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Read Time */}
      <div className="md:col-span-2 md:text-right">
        <span className="font-mono text-[10px] text-slate-500 flex items-center justify-end gap-2">
          {article.readTime}
          {/* Subtle arrow that appears on hover */}
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600">
            →
          </span>
        </span>
      </div>
    </div>
  );
}
