import { Q as reactExports, I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { L as Link } from "./router-9JoUErhZ.js";
import { S as SiteLayout } from "./SiteLayout-BcGJIgIg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ARTICLES = [{
  slug: "enterprise-grade-ai-integration",
  category: "IT Strategy",
  date: "31 May 2025",
  readTime: "12 min read",
  title: "Enterprise-Grade AI Integration: From Concept to Deployment",
  excerpt: "A comprehensive guide to integrating AI solutions into enterprise workflows. From identifying use cases and selecting the right models to deployment architecture and measuring ROI across your organisation.",
  tags: ["AI", "Enterprise", "Integration"],
  featured: true
}, {
  slug: "cybersecurity-takeaways-china-breach",
  category: "Cybersecurity",
  date: "10 Apr 2023",
  readTime: "8 min read",
  title: "4 Cybersecurity Takeaways from China's Largest Data Breach",
  excerpt: "Analysing the lessons learned from one of the largest data breaches in history and what it means for your organisation's security posture, incident response planning and data governance frameworks.",
  tags: ["Data Breach", "Security", "Governance"],
  featured: true
}, {
  slug: "top-5-email-security-tips",
  category: "Cybersecurity",
  date: "10 Apr 2023",
  readTime: "6 min read",
  title: "Top 5 Tips for Solving the Email Security Problem",
  excerpt: "Email remains the primary attack vector for cyber threats. We break down the five most impactful measures your organisation can implement today to dramatically reduce email-borne risk.",
  tags: ["Email Security", "Phishing", "Best Practices"]
}, {
  slug: "cybersecurity-mistakes-2023",
  category: "Cybersecurity",
  date: "10 Apr 2023",
  readTime: "7 min read",
  title: "What You Shouldn't Be Doing with Your Cybersecurity in 2023",
  excerpt: "Common cybersecurity anti-patterns that leave organisations exposed. From over-reliance on perimeter defences to neglecting employee training — the mistakes costing businesses millions.",
  tags: ["Security", "Best Practices", "Risk"]
}, {
  slug: "startups-cutting-cloud-costs",
  category: "IT Strategy",
  date: "10 Apr 2023",
  readTime: "9 min read",
  title: "How Startups Are Cutting Cloud Costs, Renegotiating Deals",
  excerpt: "With VC funding tightening, startups are getting creative with cloud spend. Strategies for FinOps optimisation, reserved instance planning and negotiating better deals with AWS, Azure and GCP.",
  tags: ["Cloud", "FinOps", "Startups"]
}, {
  slug: "it-business-alignment-elements",
  category: "IT Strategy",
  date: "10 Apr 2023",
  readTime: "7 min read",
  title: "5 Impactful Elements That Promote IT and Business Alignment",
  excerpt: "Bridging the gap between IT operations and business strategy. Five proven frameworks for aligning technology investments with commercial outcomes and securing executive buy-in.",
  tags: ["IT Strategy", "Business", "Alignment"]
}, {
  slug: "sage-100-erp-vs-cloud",
  category: "IT Strategy",
  date: "7 Apr 2023",
  readTime: "10 min read",
  title: "Financials Face-off: Sage 100 ERP vs. Cloud",
  excerpt: "A detailed comparison of on-premise Sage 100 ERP against cloud-native alternatives. TCO analysis, migration considerations, and which path makes sense for different business scales.",
  tags: ["ERP", "Cloud", "Sage"]
}, {
  slug: "chatgpt-revolutionizing-information",
  category: "IT Strategy",
  date: "18 Mar 2023",
  readTime: "6 min read",
  title: "How Chat GPT is Revolutionizing the Way We Find Information",
  excerpt: "Exploring the transformative impact of large language models on information retrieval, business operations and the future of knowledge work across enterprise organisations.",
  tags: ["AI", "ChatGPT", "Innovation"]
}, {
  slug: "heavy-equipment-manufacturer-solutions",
  category: "Case Study",
  date: "10 Apr 2023",
  readTime: "5 min read",
  title: "Heavy Equipment Manufacturer Finds Concrete Solutions",
  excerpt: "How a leading manufacturing firm modernised their IT infrastructure and ERP systems, achieving significant efficiency gains and cost savings through strategic technology deployment.",
  tags: ["Manufacturing", "ERP", "Case Study"]
}, {
  slug: "supply-chain-management-uniwell",
  category: "Case Study",
  date: "10 Apr 2023",
  readTime: "5 min read",
  title: "Healthy Supply Chain Management Positions UniWell for Growth",
  excerpt: "UniWell's journey to optimising their supply chain through intelligent automation, real-time analytics and integrated ERP systems that positioned them for sustained growth.",
  tags: ["Supply Chain", "Healthcare", "Growth"]
}, {
  slug: "ai-public-safety-travel-app-london",
  category: "Case Study",
  date: "20 Mar 2023",
  readTime: "6 min read",
  title: "Strategic Move to AI-supported Public Safety Travel App in London",
  excerpt: "Building an AI-powered travel safety application for London, leveraging machine learning for real-time threat assessment and route optimisation in public transportation.",
  tags: ["AI", "Public Safety", "London"]
}, {
  slug: "insurance-provider-big-data-migration",
  category: "Case Study",
  date: "20 Mar 2023",
  readTime: "7 min read",
  title: "Major Insurance Provider Saves $750k/month with Big Data Migration",
  excerpt: "A comprehensive case study on migrating a major insurance provider's legacy data infrastructure to the cloud, achieving $750,000 in monthly cost savings while improving performance.",
  tags: ["Big Data", "Insurance", "Cloud Migration"]
}, {
  slug: "next-gen-erp-dental-insurer",
  category: "Development",
  date: "10 Apr 2023",
  readTime: "5 min read",
  title: "Next Generation ERP Brings Transformational Change to Dental Insurer",
  excerpt: "Implementing a next-generation ERP platform for a dental insurance provider, transforming operations from claims processing to member engagement with measurable ROI.",
  tags: ["ERP", "Insurance", "Transformation"]
}, {
  slug: "paysafe-intelligent-automation",
  category: "Case Study",
  date: "20 Mar 2023",
  readTime: "6 min read",
  title: "Delivering Enterprise-wide Efficiencies at Paysafe via Intelligent Automation",
  excerpt: "How intelligent automation transformed Paysafe's enterprise operations, reducing manual processes, improving accuracy and enabling the team to focus on strategic initiatives.",
  tags: ["Automation", "Fintech", "Enterprise"]
}];
const CATEGORIES = ["All", "Cybersecurity", "IT Strategy", "Development", "Case Study"];
function InsightsPage() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
  const featuredArticle = ARTICLES.find((a) => a.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12", children: [
        "Industry insights.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Expert perspectives."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "Deep-dives into cybersecurity, cloud strategy, ERP implementation, AI integration and IT operations. Practical insights shaped by the projects we deliver for clients every week." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "From case studies demonstrating $750k/month savings to actionable cybersecurity guidance — every article is written by practitioners, not a marketing team." })
      ] })
    ] }),
    featuredArticle && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-2 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 group hover:bg-foreground hover:text-background transition-colors duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-background/50", children: featuredArticle.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-6", children: featuredArticle.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground group-hover:text-background/70 mb-8 leading-relaxed", children: featuredArticle.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: featuredArticle.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-background/50", children: featuredArticle.readTime })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 flex flex-col justify-between border-t md:border-t-0 border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-8", children: "Latest by Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: ["Cybersecurity", "IT Strategy", "Case Study"].map((cat) => {
            const latest = ARTICLES.find((a) => a.category === cat);
            return latest ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-6 last:border-0 last:pb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary uppercase", children: cat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mt-2 mb-1", children: latest.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                latest.date,
                " · ",
                latest.readTime
              ] })
            ] }, cat) : null;
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-4", children: "Stay Updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "IT strategy and cybersecurity insights, delivered to your inbox. No spam." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex gap-2", onSubmit: (e) => {
            e.preventDefault();
            alert("Thanks — you're on the list.");
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@company.com", required: true, className: "flex-1 bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors", children: "Subscribe" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "All Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(cat), className: `px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-colors ${active === cat ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`, children: cat }, cat)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-border", children: filtered.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "bg-background p-8 md:p-10 group hover:bg-foreground hover:text-background transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[160px_1fr_200px] gap-6 md:gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-primary group-hover:text-background/60 block mb-2", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-background/50", children: article.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold tracking-tight mb-3", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed mb-4", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: article.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase", children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:flex-col md:items-end justify-between md:justify-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-background/50", children: article.readTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full border border-current grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity", children: "↗" })
        ] })
      ] }) }, article.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-24 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Have an IT challenge you'd like us to cover?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "We write about the problems our clients face. If there's a cybersecurity, cloud or IT strategy challenge on your mind, let us know." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:justify-end gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors", children: [
        "Get in touch ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↗" })
      ] }) })
    ] }) })
  ] });
}
export {
  InsightsPage as component
};
