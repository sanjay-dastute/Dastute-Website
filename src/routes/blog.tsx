import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ArticleStack, FeaturedGuides, TopicMarquee } from "@/components/BlogSections";
import { CountUp, Magnetic, SplitWords } from "@/components/motion";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildStandardPageHead,
} from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () => ({
    ...buildStandardPageHead({
      title: "IT Blog: Guides & Industry Updates | Dastute Technologies",
      description:
        "Expert articles on managed IT, cybersecurity, cloud strategy, ERP, AI and digital transformation from the team at Dastute Technologies.",
      path: "/blog",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildCollectionPageJsonLd({
            path: "/blog",
            name: "Dastute Technologies Blog",
            description:
              "Expert blog posts on managed IT services, cybersecurity, cloud strategy, ERP, AI, and digital transformation.",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ),
      },
    ],
  }),
  component: BlogPage,
});

function SoroBlogEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || typeof window === "undefined") return;

    // Check if the script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://app.trysoro.com/api/embed/49021993-0c98-4669-8906-b7c75c346115"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://app.trysoro.com/api/embed/49021993-0c98-4669-8906-b7c75c346115";
      script.defer = true;
      script.async = true;
      containerRef.current?.appendChild(script);
    }

    scriptLoadedRef.current = true;

    return () => {
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div id="soro-blog"></div>
    </div>
  );
}

function BlogPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="section-hero-dark">
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6 font-semibold">
              / BLOG
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-8 text-white">
              <SplitWords text="Insights that drive" />{" "}
              <SplitWords className="text-gradient-primary" text="smarter decisions." delay={0.3} />
            </h1>
            <div className="space-y-4 max-w-2xl text-slate-300 text-lg leading-relaxed">
              <p>
                Actionable guides, industry analysis, and expert perspectives on
                cybersecurity, cloud, AI, ERP, and digital transformation - written
                by the engineers and consultants who deliver these solutions every day.
              </p>
              <p className="text-slate-400 text-base">
                New articles published regularly to keep you ahead of the curve.
                From technical deep-dives to strategic overviews - everything
                you need to make informed technology decisions.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { label: "Topics Covered", value: <><CountUp to={12} />+</> },
                { label: "Expert Authors", value: <><CountUp to={8} />+</> },
                { label: "Published Weekly", value: <>New</> },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual mx-auto w-full max-w-md">
            <ArticleStack />
          </div>
        </div>
      </section>

      {/* Topic Tags Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-10" aria-label="Topics">
        <p className="max-w-7xl mx-auto px-6 mb-5 font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          TOPICS
        </p>
        <TopicMarquee />
      </section>

      {/* Featured guides */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ Start here</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Featured Guides</h2>
            </div>
            <Link to="/resources" className="bl-all">
              All guides & resources <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <FeaturedGuides />
        </div>
      </section>

      {/* Trysoro Blog Embed Section */}
      <section className="section-gradient border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 flex items-center gap-2">
                <span className="bl-live" aria-hidden="true" /> Live feed
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Latest Articles
              </h2>
              <p className="text-slate-600 mt-3">
                Expert perspectives from our technology practice leads.
              </p>
            </div>
          </div>

          {/* Trysoro Embed Widget */}
          <div data-no-reveal className="bl-embed">
            <div className="bl-embed-bar" aria-hidden="true">
              <span /><span /><span />
              <p>dastute.co.uk/blog</p>
            </div>
            <div className="min-h-[600px] p-4 md:p-8">
              <SoroBlogEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="future-section px-6 py-24 sm:py-28">
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300 block mb-6 font-semibold">
              / STAY CONNECTED
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-white">
              Want deeper <span className="text-gradient-primary">insights?</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Our team publishes in-depth technical articles, case studies,
              and strategic guides regularly. Get in touch to discuss how we
              can help transform your technology landscape.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Magnetic>
              <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Talk to Us <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/insights" className="btn-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                View Insights & FAQs <span aria-hidden>↗</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
