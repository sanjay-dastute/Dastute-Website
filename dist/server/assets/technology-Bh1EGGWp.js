import { I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { L as Link } from "./router-9JoUErhZ.js";
import { S as SiteLayout } from "./SiteLayout-BcGJIgIg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SERVICES = [{
  code: "T.01",
  title: "Managed IT Services",
  summary: "End-to-end management of your IT estate under a predictable monthly fee.",
  detail: "Proactive monitoring, patch management, asset lifecycle tracking and 24/7 UK-based helpdesk. We manage servers, endpoints, cloud, networks and users to keep your business running smoothly.",
  deliverables: ["24/7 UK-based helpdesk", "Proactive monitoring & response", "Patch & asset management", "SLA & KPI reporting"]
}, {
  code: "T.02",
  title: "IT Consulting & Advisory",
  summary: "Strategic technology planning to align investments with growth.",
  detail: "Digital transformation roadmap, vendor assessment & selection, cybersecurity advisory and virtual CIO (vCIO) support. We provide independent strategy focused on business outcomes.",
  deliverables: ["vCIO strategic reviews", "Technology roadmap & planning", "Vendor assessment & selection", "IT governance & compliance guidance"]
}, {
  code: "T.03",
  title: "Cyber Security",
  summary: "Identify vulnerabilities and safeguard your business against modern threats.",
  detail: "Security information & event management (SIEM), SOC, penetration testing, phishing simulations, incident response planning and Cyber Essentials / ISO 27001 readiness audits.",
  deliverables: ["Penetration testing & reports", "SOC & SIEM setup", "Cyber Essentials preparation", "Employee phishing simulation"]
}, {
  code: "T.04",
  title: "Cloud Services",
  summary: "Migrate, secure and optimise your cloud infrastructure.",
  detail: "AWS, Google Cloud and Azure migration, hybrid-cloud architecture, and 24/7 managed cloud operations. Enforcing cost discipline (FinOps) to eliminate waste.",
  deliverables: ["Cloud migration planning", "Infrastructure-as-Code (IaC)", "FinOps cost optimisation", "24/7 cloud support & monitoring"]
}, {
  code: "T.05",
  title: "Web & App Development",
  summary: "Impactful online products engineered for performance, security and speed.",
  detail: "Full-stack web apps, e-commerce portals, responsive user experiences and progressive web apps (PWA). Developed using React, Next.js, Node.js and .NET.",
  deliverables: ["UX/UI & high-fidelity prototypes", "Front-end & back-end engineering", "E-commerce & portal builds", "SEO-ready code architecture"]
}, {
  code: "T.06",
  title: "Mobile Development",
  summary: "Custom mobile applications for native iOS, Android and hybrid platforms.",
  detail: "From concept to app store release. Building clean, offline-first mobile apps leveraging React Native, Swift and Kotlin, featuring secure biometrics and notifications.",
  deliverables: ["Native iOS & Android builds", "Hybrid React Native apps", "App Store & Play Store publishing", "Secure API integrations"]
}, {
  code: "T.07",
  title: "Blockchain & Web3",
  summary: "Smart contract development and on-chain protocol architecture.",
  detail: "Solidity and Rust development. Implementing DeFi protocols, tokenisation models, NFT smart contracts and private-chain ledger systems with institutional-grade test coverage.",
  deliverables: ["Smart contract architecture", "DeFi protocol engineering", "Audit preparation & scoping", "dApp front-end development"]
}, {
  code: "T.08",
  title: "ERP Solutions",
  summary: "Streamlining core business operations with enterprise ERP systems.",
  detail: "SAP, Microsoft Dynamics and Oracle ERP assessment, customization, implementation and data migration. Streamlining finance, HR, manufacturing and supply chain operations.",
  deliverables: ["ERP platform evaluation", "Custom workflows & plugins", "Legacy data migration", "Employee training & support"]
}, {
  code: "T.09",
  title: "Network Connectivity",
  summary: "Reliable, high-bandwidth corporate connectivity and networking.",
  detail: "Enterprise SD-WAN, MPLS networking, LAN/WAN architectures, corporate wireless networks and 24/7 proactive network monitoring and SLA reporting.",
  deliverables: ["Network design & implementation", "SD-WAN deployment", "Wireless site surveys", "24/7 network monitoring"]
}, {
  code: "T.10",
  title: "Custom Software Development",
  summary: "Tailor-made software solutions designed for your specific operating model.",
  detail: "From custom CRMs and Customer Portals to Transportation Management Systems. We build secure, modular software that bridges gaps in your existing application stack.",
  deliverables: ["Bespoke application design", "API & data integrations", "User testing & documentation", "Full source code handover"]
}];
function TechnologyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Technology Practice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl", children: [
        "Infrastructure, security",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "and software — simplified."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-muted-foreground text-lg", children: "Ten core disciplines covering the entire technology lifecycle, from local office helpdesk to audited on-chain smart contracts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap gap-x-6 gap-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10 Disciplines" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AWS · GCP · Azure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SIEM / SOC" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Need digital marketing too?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Our marketing practice handles brand strategy, visual identity, paid search, SEO and advertising to align your launch." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:justify-end gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketing", className: "inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors", children: [
          "Marketing Practice ",
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
  TechnologyPage as component
};
