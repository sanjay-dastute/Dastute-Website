import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef } from "react";
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
      <section className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none transition-opacity duration-1000 ease-out"></div>
        {/* Floating grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6 font-semibold">
            / BLOG
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-8 max-w-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
            Insights that drive<br />smarter decisions.
          </h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl text-slate-300 text-lg md:text-xl leading-relaxed">
            <p className="transition-all duration-700 delay-150">
              Actionable guides, industry analysis, and expert perspectives on
              cybersecurity, cloud, AI, ERP, and digital transformation - written
              by the engineers and consultants who deliver these solutions every day.
            </p>
            <p className="transition-all duration-700 delay-300">
              New articles published regularly to keep you ahead of the curve.
              From technical deep-dives to strategic overviews - everything
              you need to make informed technology decisions.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8 md:gap-16">
            {[
              { label: "Topics Covered", value: "12+" },
              { label: "Expert Authors", value: "8+" },
              { label: "Published Weekly", value: "New" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Tags Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold mr-4">
              TOPICS
            </span>
            {[
              "Cybersecurity",
              "Cloud Strategy",
              "AI & ML",
              "ERP Solutions",
              "Managed IT",
              "Digital Transformation",
              "Blockchain",
              "Web Development",
              "IT Consulting",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-mono font-semibold text-slate-600 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trysoro Blog Embed Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-200 pb-8 mb-12">
            <div>
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-500 font-bold">
                LATEST ARTICLES
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Expert perspectives from our technology practice leads.
              </p>
            </div>
          </div>

          {/* Trysoro Embed Widget */}
          <div className="min-h-[600px] rounded-2xl border border-slate-100 bg-slate-50/50 p-4 md:p-8 transition-all duration-500">
            <SoroBlogEmbed />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400 block mb-6 font-semibold">
                / STAY CONNECTED
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                Want deeper insights?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Our team publishes in-depth technical articles, case studies,
                and strategic guides regularly. Get in touch to discuss how we
                can help transform your technology landscape.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Talk to Us
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
              >
                View Insights & FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
