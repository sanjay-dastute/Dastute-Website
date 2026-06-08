import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { L as Link } from "./router-BhxIqGy1.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function RedBlueTeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Cyber Security" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl", children: [
        "Red Team and Blue Team",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "exercises for real-world resilience."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-3xl text-muted-foreground text-lg leading-relaxed", children: "We simulate modern attack paths, validate defensive controls, and help your SOC and engineering teams close gaps quickly. Designed for regulated and security-sensitive organizations." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-border", children: [{
      title: "Red Team",
      text: "Adversary emulation across identity, endpoint, cloud, and application layers."
    }, {
      title: "Blue Team",
      text: "Detection engineering, incident-response readiness, and playbook validation."
    }, {
      title: "Purple Team",
      text: "Collaborative attack-and-defend sessions with measurable control improvements."
    }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-tight mb-3", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: item.text })
    ] }, item.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "px-6 py-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8", children: "Engagement Outcomes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid md:grid-cols-2 gap-4 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Threat-informed attack paths mapped to business impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Detection gaps tied to MITRE ATT&CK techniques" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Prioritized remediation roadmap with owner handoff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Executive reporting suitable for audit and board review" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request-audit", className: "inline-flex items-center border border-foreground px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors", children: "Request Security Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center border border-primary px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors", children: "Talk to Security Team" })
      ] })
    ] })
  ] });
}
export {
  RedBlueTeamPage as component
};
