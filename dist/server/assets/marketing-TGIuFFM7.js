import { I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { L as Link } from "./router-9JoUErhZ.js";
import { S as SiteLayout } from "./SiteLayout-BcGJIgIg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SERVICES = [{
  code: "M.01",
  title: "Digital Marketing",
  summary: "Result-driven campaign planning and full-funnel execution across digital channels.",
  detail: "Search Engine Optimisation (SEO), Pay-Per-Click (PPC) search ads, social media marketing, content creation, email automation campaigns and web conversion optimisation (CRO). Fully tracked with custom analytics dashboards.",
  deliverables: ["Comprehensive SEO audits & maps", "Google Ads / Meta Ads setup & management", "Email marketing & automation flows", "Monthly performance & ROI reports"]
}, {
  code: "M.02",
  title: "Brand Strategy",
  summary: "Define your positioning, audience mapping and brand narrative.",
  detail: "Discovery workshops, competitor analysis, target persona profiling, brand architecture planning, positioning maps and corporate messaging guidelines to establish a clear market direction.",
  deliverables: ["Brand positioning guidelines", "Competitor & audience profiles", "Core messaging framework", "Brand architecture map"]
}, {
  code: "M.03",
  title: "Brand Identity Design",
  summary: "Logo, typography and color systems that perform across all mediums.",
  detail: "Logo design, typographic systems, custom color palettes, brand graphics, corporate stationary, presentation decks and comprehensive brand style guides to enforce consistency.",
  deliverables: ["Logo files & brand assets", "Typography & color schemes", "Full brand guidelines document", "Stationary & deck templates"]
}, {
  code: "M.04",
  title: "Media Planning & Advertising",
  summary: "Optimise your ad budget across high-performing programmatic channels.",
  detail: "Campaign design, budget allocation, programmatic display advertising, retargeting setup, conversion tracking configuration, and ongoing performance optimization.",
  deliverables: ["Multi-channel media budget plan", "Display & video ad placements", "Retargeting & conversion setup", "Performance optimisation logs"]
}, {
  code: "M.05",
  title: "Product Film & Visualisation",
  summary: "Showcase your technology or physical products with high-end visuals.",
  detail: "3D product rendering, explainer animations, product overview videos, and digital showcase materials. Helping you explain complex technology or hardware visually.",
  deliverables: ["High-fidelity 3D renderings", "Explainer animation files", "Product showcase videos", "Digital launch asset packages"]
}];
function MarketingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Creative Practice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl", children: [
        "Positioning, campaigns",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "and full-funnel growth."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-muted-foreground text-lg", children: "Five creative and marketing disciplines designed to help you stand out, drive search traffic, and capture leads globally." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-x-6 gap-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5 Disciplines" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SEO · PPC · Paid Search" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3D Product Visualisation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid md:grid-cols-[160px_1fr_1fr] gap-8 md:gap-12 p-8 md:p-12 ${i !== 0 ? "border-t border-border" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: s.code }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold tracking-tight mb-4", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: s.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.detail })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-4", children: "Deliverables" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: s.deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1.5", children: "→" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d })
        ] }, d)) })
      ] })
    ] }, s.code)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Need technical infrastructure too?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Our technology practice handles cloud architecture, cybersecurity, managed IT and custom software engineering." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:justify-end gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/technology", className: "inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors", children: [
          "Technology Practice ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↗" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity", children: [
          "Start a Brief ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↗" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  MarketingPage as component
};
