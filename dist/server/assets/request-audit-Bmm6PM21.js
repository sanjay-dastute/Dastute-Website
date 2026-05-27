import { Q as reactExports, I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { S as SiteLayout } from "./SiteLayout-BcGJIgIg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-9JoUErhZ.js";
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
  ] });
}
function RequestAuditPage() {
  const [auditType, setAuditType] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Request an Audit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12", children: [
        "Rigour applied.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Vulnerabilities exposed."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-muted-foreground", children: "Whether it's a Solidity codebase or your market positioning, our senior practitioners deliver audit-grade analysis with actionable recommendations." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 md:divide-x divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAuditType("smart-contract"), className: `p-12 text-left group transition-colors duration-500 block border-b md:border-b-0 border-border ${auditType === "smart-contract" ? "bg-foreground text-background" : "hover:bg-foreground hover:text-background"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase tracking-widest ${auditType === "smart-contract" ? "text-background/60" : "text-primary group-hover:text-background/60"}`, children: "Technical" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-full border border-current grid place-items-center transition-opacity ${auditType === "smart-contract" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, children: auditType === "smart-contract" ? "✓" : "↗" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "Smart Contract Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `max-w-sm mb-6 ${auditType === "smart-contract" ? "text-background/70" : "text-muted-foreground group-hover:text-background/70"}`, children: "Line-by-line review, formal verification, gas analysis and a prioritised vulnerability report for your on-chain protocol." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Solidity", "EVM", "DeFi", "Security"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAuditType("brand"), className: `p-12 text-left group transition-colors duration-500 block ${auditType === "brand" ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase tracking-widest ${auditType === "brand" ? "text-white/60" : "text-primary group-hover:text-white/60"}`, children: "Strategic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-full border border-current grid place-items-center transition-opacity ${auditType === "brand" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, children: auditType === "brand" ? "✓" : "↗" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "Brand Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `max-w-sm mb-6 ${auditType === "brand" ? "text-white/70" : "text-muted-foreground group-hover:text-white/70"}`, children: "Competitive positioning analysis, identity assessment, messaging framework review and a strategic recommendations deck." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Identity", "Positioning", "Messaging", "Design"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 border border-current/20 rounded-full text-[10px] uppercase", children: t }, t)) })
      ] })
    ] }) }),
    auditType && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 max-w-7xl mx-auto animate-reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: auditType === "smart-contract" ? "Smart Contract Audit Request" : "Brand Audit Request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid md:grid-cols-[1fr_2fr] gap-16", onSubmit: (e) => {
        e.preventDefault();
        alert("Thanks — our team will review your request and respond within one business day.");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "What You'll Receive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: (auditType === "smart-contract" ? ["Full codebase review", "Vulnerability severity matrix", "Gas optimisation report", "Remediation roadmap", "Final audit certificate"] : ["Competitive landscape mapping", "Brand perception analysis", "Messaging framework review", "Visual identity assessment", "Strategic recommendations deck"]).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1.5", children: "→" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: auditType === "smart-contract" ? "Typical engagement: 2–4 weeks depending on codebase complexity. Preliminary findings within 5 business days." : "Typical engagement: 3–6 weeks including stakeholder interviews. Initial audit deck within 10 business days." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Investment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: auditType === "smart-contract" ? "From £8,000 for protocols under 1,000 LoC. Custom scoping for larger codebases." : "From £12,000 for single-product companies. Multi-brand architectures quoted separately." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "audit-name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "audit-company", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "audit-email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "audit-phone", type: "tel" })
          ] }),
          auditType === "smart-contract" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-chain", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Target Chain(s) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-chain", name: "audit-chain", required: true, placeholder: "e.g. Ethereum, Arbitrum, Base", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-loc", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Approx. Lines of Code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-loc", name: "audit-loc", placeholder: "e.g. 2,500", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-repo", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Repository URL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-repo", name: "audit-repo", placeholder: "github.com/...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-url", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Company Website *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-url", name: "audit-url", required: true, placeholder: "https://yourcompany.com", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-industry", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Industry / Sector" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-industry", name: "audit-industry", placeholder: "e.g. Fintech, SaaS, DeFi", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-competitors", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Key Competitors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "audit-competitors", name: "audit-competitors", placeholder: "e.g. Acme, Globex", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audit-brief", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Additional Context" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "audit-brief", name: "audit-brief", rows: 5, placeholder: auditType === "smart-contract" ? "Describe the protocol, key invariants, and any known concerns..." : "Describe your current brand challenges, target audience, and goals...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors", children: "Submit Audit Request →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 max-w-7xl mx-auto border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Our Audit Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-12", children: [{
        n: "01",
        t: "Scope",
        d: "We review your submission and define the exact scope, timeline and deliverables within 48 hours."
      }, {
        n: "02",
        t: "Analyse",
        d: "Senior practitioners conduct line-by-line review (technical) or stakeholder interviews and competitive mapping (brand)."
      }, {
        n: "03",
        t: "Report",
        d: "A prioritised findings document with severity ratings, supporting evidence and clear remediation steps."
      }, {
        n: "04",
        t: "Remediate",
        d: "Optional follow-up engagement to address findings, re-test and issue a final audit certificate."
      }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mt-4 mb-3", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.d })
      ] }, p.n)) })
    ] })
  ] });
}
export {
  RequestAuditPage as component
};
