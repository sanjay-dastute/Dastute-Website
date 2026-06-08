import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BhxIqGy1.js";
const STACK = [{
  code: "T.01",
  title: "Managed IT Services",
  body: "24/7 endpoint, server and cloud administration, patch management, proactive monitoring and ticket resolution."
}, {
  code: "T.02",
  title: "IT Consulting",
  body: "vCIO, technology roadmaps, vendor audits, compliance consulting and IT governance frameworks."
}, {
  code: "T.03",
  title: "Cyber Security",
  body: "SIEM/SOC, vulnerability scanning, threat assessments, Cyber Essentials and ISO 27001 readiness."
}, {
  code: "T.04",
  title: "Cloud Systems",
  body: "Architecting, deploying and monitoring AWS, Azure and GCP clouds with integrated FinOps cost controls."
}, {
  code: "T.05",
  title: "Software & Mobile",
  body: "Full-stack web apps in React/Next.js/Node, native iOS & Android apps, and custom API integrations."
}, {
  code: "T.06",
  title: "Blockchain & DeFi",
  body: "Solidity/Rust smart contracts, dApps, Web3 integration, tokenomics models and audit readiness."
}, {
  code: "M.01",
  title: "Digital Marketing",
  body: "Campaign management, SEO organic rank acquisition, PPC Google/Meta ads, and automated email funnels."
}, {
  code: "M.02",
  title: "Brand & Film",
  body: "Brand positioning strategy, visual identity design guides, 3D product rendering and showcase films."
}];
function CapabilitiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl", children: [
        "Specialist disciplines.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Integrated delivery."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-muted-foreground text-lg", children: "High-performance technology capabilities and result-driven marketing tools designed to operate in unified alignment." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid md:grid-cols-2 md:divide-x divide-border", children: STACK.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 md:p-12 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: s.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border ml-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight mb-4", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-md", children: s.body })
    ] }, s.code)) }) })
  ] });
}
export {
  CapabilitiesPage as component
};
