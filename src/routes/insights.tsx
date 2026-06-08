import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/insights")({
  head: () => ({
    ...buildStandardPageHead({
      title:
        "Technology Insights & Expert Articles | Dastute Technologies Blog",
      description:
        "Expert perspectives on cloud (AWS/Azure/GCP), cybersecurity, AI, digital transformation, ERP, blockchain, and IT strategy from Dastute Technologies' practice leads.",
      path: "/insights",
      keywords:
        "IT insights blog UK, technology articles London, cybersecurity blog UK, cloud computing articles, AI insights UK, digital transformation blog",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildCollectionPageJsonLd({
            path: "/insights",
            name: "Technology Insights & Expert Articles",
            description:
              "Expert perspectives from Dastute practice leads on cloud, cybersecurity, AI, ERP, and IT strategy.",
          }),
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

const RECENT_ARTICLES = [
  "Azure vs AWS vs Google Cloud: Which Platform is Right for Your Business in 2026?",
  "4 Cybersecurity Lessons from the Largest Data Breaches of 2024-25",
  "What is DORA and What Does It Mean for UK Financial Services IT Teams?",
  "The True Cost of Legacy IT Systems: What Outdated Technology Is Really Costing Your Business",
  "Kubernetes in Production: Common Mistakes and How to Avoid Them",
  "IR35 in 2025: What Technology Leaders Need to Know About Contractor Compliance",
  "From Data to Decisions: Building a Business Intelligence Strategy That Delivers ROI",
  "Managed IT Services vs In-House IT: An Honest Cost Comparison",
];

function InsightsPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Insights
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl">
          Insights, perspectives, and ideas
          <br />
          from Dastute practice leads.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Practical guidance and expert analysis from engineers, architects, and
          consultants who build and secure enterprise technology every day.
        </p>
      </section>

      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto p-6 md:p-12 grid md:grid-cols-2 gap-8">
          <article className="border border-border rounded-lg p-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Featured Article
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Enterprise-Grade AI Integration: From Concept to Deployment
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              AI is generating strong returns for businesses with strong data
              and governance foundations. This article explains what AI-ready
              means, which use cases are producing measurable outcomes, and how
              to avoid expensive experimentation.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              May 2025 • AI & Automation
            </p>
          </article>

          <article className="border border-border rounded-lg p-6">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Browse by Category
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cloud & Infrastructure · Cybersecurity · AI & Data · Software
              Development · ERP & Enterprise · IT Strategy · Managed IT ·
              Digital Marketing · IT Staffing · Industry News · Case Studies
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Recent Articles
        </h2>
        <div className="grid gap-3">
          {RECENT_ARTICLES.map((title) => (
            <article
              key={title}
              className="border border-border rounded-md p-4"
            >
              <h3 className="text-sm font-medium leading-relaxed">{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl">
          Stay ahead of the technology curve.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Get expert IT insights, industry analysis, and Dastute updates every
          two weeks. Your email is used only for newsletter delivery and can be
          unsubscribed at any time.
        </p>
        <button className="mt-8 bg-foreground text-background px-6 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-primary transition-colors">
          Subscribe to DST Insights
        </button>
      </section>
    </SiteLayout>
  );
}
