export interface InsightArticle {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

const DEFAULT_CATEGORY = "IT Strategy";
const DEFAULT_READ_TIME = "5 min read";

const FALLBACK_ARTICLES: InsightArticle[] = [
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

function formatPublishedDate(raw: unknown): string {
  if (typeof raw !== "string") {
    return "";
  }

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getRecordSource(record: unknown): Record<string, unknown> {
  if (!record || typeof record !== "object") {
    return {};
  }

  const maybeRecord = record as { attributes?: unknown };
  if (maybeRecord.attributes && typeof maybeRecord.attributes === "object") {
    return maybeRecord.attributes as Record<string, unknown>;
  }

  return record as Record<string, unknown>;
}

function toTagList(rawTags: unknown): string[] {
  if (!rawTags) {
    return [];
  }

  if (Array.isArray(rawTags)) {
    return rawTags.filter((tag): tag is string => typeof tag === "string");
  }

  if (typeof rawTags !== "object") {
    return [];
  }

  const relation = rawTags as { data?: unknown };
  if (!Array.isArray(relation.data)) {
    return [];
  }

  return relation.data
    .map((item) => {
      const source = getRecordSource(item);
      return typeof source.name === "string" ? source.name : "";
    })
    .filter(Boolean);
}

function normalizeArticle(record: unknown): InsightArticle | null {
  const source = getRecordSource(record);

  const title = typeof source.title === "string" ? source.title : "";
  const slug = typeof source.slug === "string" ? source.slug : "";
  if (!title || !slug) {
    return null;
  }

  const published =
    formatPublishedDate(source.publishedAt) ||
    formatPublishedDate(source.published_at) ||
    formatPublishedDate(source.date) ||
    "Coming Soon";

  return {
    slug,
    title,
    excerpt: typeof source.excerpt === "string" ? source.excerpt : "",
    category:
      typeof source.category === "string" && source.category
        ? source.category
        : DEFAULT_CATEGORY,
    date: published,
    readTime:
      typeof source.readTime === "string" && source.readTime
        ? source.readTime
        : DEFAULT_READ_TIME,
    tags: toTagList(source.tags),
    featured: source.featured === true,
  };
}

export async function loadInsightsContent(): Promise<InsightArticle[]> {
  const baseUrl = import.meta.env.VITE_STRAPI_URL?.trim();
  if (!baseUrl) {
    return FALLBACK_ARTICLES;
  }

  const endpoint = new URL("/api/insights", baseUrl);
  endpoint.searchParams.set("sort[0]", "publishedAt:desc");
  endpoint.searchParams.set("populate[0]", "tags");

  const token = import.meta.env.VITE_STRAPI_TOKEN?.trim();
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(endpoint.toString(), {
      headers,
    });

    if (!response.ok) {
      return FALLBACK_ARTICLES;
    }

    const payload = (await response.json()) as { data?: unknown };
    const items = Array.isArray(payload.data) ? payload.data : [];
    const articles = items
      .map(normalizeArticle)
      .filter((article): article is InsightArticle => Boolean(article));

    return articles.length > 0 ? articles : FALLBACK_ARTICLES;
  } catch {
    return FALLBACK_ARTICLES;
  }
}
