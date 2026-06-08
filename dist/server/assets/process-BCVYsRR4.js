import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BhxIqGy1.js";
const PHASES = [{
  id: "01",
  title: "Discovery & Planning (Weeks 1-2)",
  body: "We begin by understanding your business objectives, constraints, compliance requirements, and success criteria before any design work starts.",
  deliverables: ["Requirements and scope definition", "Recommended technology stack", "Timeline, milestones, and dependencies", "Resource allocation and risk register", "Initial investment estimate"],
  yourRole: "Provide business context and stakeholder access",
  ourRole: "Lead structured discovery, document requirements, and produce recommendations"
}, {
  id: "02",
  title: "Architecture & Design (Weeks 1-2)",
  body: "With requirements confirmed, our architects design for security, scalability, and maintainability from the outset.",
  deliverables: ["System architecture and technical specifications", "Database schema and data model planning", "API design (OpenAPI / GraphQL)", "Security architecture and compliance mapping", "Infrastructure and CI/CD blueprint"],
  yourRole: "Review and approve architecture decisions",
  ourRole: "Design secure and scalable systems with implementation-ready specifications"
}, {
  id: "03",
  title: "Development & Iteration (Bi-Weekly Sprints)",
  body: "Delivery is sprint-based with working software demos every two weeks and continuous stakeholder feedback.",
  deliverables: ["Working tested increments", "Automated unit/integration/e2e coverage", "CI/CD with security scanning", "Code reviews on every pull request", "Sprint documentation and decision logs"],
  yourRole: "Review sprint outcomes and prioritize feedback",
  ourRole: "Deliver, test, secure, and iterate transparently"
}, {
  id: "04",
  title: "Deployment & Ongoing Support (Go-Live + 30 Days)",
  body: "Go-live is a milestone, not the finish line. We execute release safely and support post-launch stabilization.",
  deliverables: ["Zero-downtime release strategy", "Monitoring, alerting, and runbooks", "Performance and load validation", "30-day hypercare support", "Documentation and knowledge transfer"],
  yourRole: "Sign off release readiness and business checkpoints",
  ourRole: "Deploy safely and ensure stable operations after launch"
}];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl", children: [
        "A delivery process engineered",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "for predictable outcomes."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed", children: "Every Dastute engagement follows a transparent four-phase methodology to reduce ambiguity, lower delivery risk, and produce measurable business results." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto divide-y divide-border", children: PHASES.map((phase) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "p-6 md:p-12 grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: phase.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl font-bold tracking-tight", children: phase.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: phase.body })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3", children: "What We Deliver" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground leading-relaxed", children: phase.deliverables.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "- ",
          item
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Your Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: phase.yourRole })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Our Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: phase.ourRole })
        ] })
      ] })
    ] }, phase.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "Quality and Security Across Every Phase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Code reviews on every pull request by senior engineers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Automated testing and CI checks on every integration." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Security scanning integrated into delivery pipelines." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Performance monitoring and release-readiness validation." })
      ] })
    ] })
  ] });
}
export {
  ProcessPage as component
};
