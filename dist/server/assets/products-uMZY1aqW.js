import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BhxIqGy1.js";
const MODULES = [{
  name: "ERP Module",
  text: "Secure financials, procurement, inventory, and supply-chain workflows for regulated operations."
}, {
  name: "HRMS Module",
  text: "Global workforce management with privacy controls, payroll integrity, and auditable access workflows."
}, {
  name: "CRM Module",
  text: "Customer lifecycle management with PII protection, consent controls, and retention automation."
}, {
  name: "WMS Module",
  text: "Warehouse execution with immutable movement trails, multi-location inventory, and fulfillment orchestration."
}, {
  name: "AI Agents Module",
  text: "Private AI orchestration for enterprise workflows with controlled data boundaries and prompt governance."
}, {
  name: "Hospitality Module",
  text: "PMS, POS, guest profile management, and secure revenue operations for hospitality organizations."
}];
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl", children: [
        "Enterprise software products.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Security-first by design."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed", children: "Our product suite is engineered around uncompromising security: field-level encryption, immutable auditability, and zero-trust access across every module." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto p-6 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8", children: "Security Foundation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 text-sm text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AES-256-GCM data protection and encrypted communications." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Zero-trust access with least-privilege policy enforcement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Auditability and compliance-ready operational controls." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8", children: "Core Modules" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: MODULES.map((module) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold tracking-tight mb-2", children: module.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: module.text })
      ] }, module.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8", children: "Industry Solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Manufacturing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Secure production operations, supplier integrity, and traceable execution records." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Healthcare" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Privacy-sensitive workflows, controlled access to clinical data, and compliance-oriented auditability." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2", children: "Financial Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Strong transaction governance, operational resilience, and policy-driven security controls." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ProductsPage as component
};
