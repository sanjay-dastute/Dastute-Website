import { Q as reactExports, I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { S as SiteLayout } from "./SiteLayout-BcGJIgIg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-9JoUErhZ.js";
const STEPS = [{
  id: 1,
  label: "Practice"
}, {
  id: 2,
  label: "Scope"
}, {
  id: 3,
  label: "Timeline"
}, {
  id: 4,
  label: "Details"
}];
const SERVICE_OPTIONS = {
  technology: ["Web Development", "Mobile App", "Custom Software", "Blockchain / dApp", "DeFi Protocol", "MVP Build", "SaaS Platform", "Cybersecurity Audit", "Cloud Migration"],
  creative: ["Brand Strategy", "Brand Identity", "UI / UX Design", "Packaging Design", "Media Planning", "TV / Radio / Print Campaign", "Digital Marketing & SEO", "3D Visualization", "Product Film"],
  both: ["Full-Stack Product Build", "Brand + Website Launch", "Rebrand + Platform Migration", "End-to-End Go-to-Market"]
};
const BUDGETS = ["Under £10k", "£10k – £25k", "£25k – £50k", "£50k – £100k", "£100k+", "Not sure yet"];
const TIMELINES = ["ASAP — Under 4 weeks", "1 – 3 months", "3 – 6 months", "6+ months", "Flexible / Ongoing"];
function ProjectEstimatorPage() {
  const [step, setStep] = reactExports.useState(1);
  const [practice, setPractice] = reactExports.useState(null);
  const [selectedServices, setSelectedServices] = reactExports.useState([]);
  const [budget, setBudget] = reactExports.useState(null);
  const [timeline, setTimeline] = reactExports.useState(null);
  const toggleService = (s) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };
  const canProceed = () => {
    if (step === 1) return practice !== null;
    if (step === 2) return selectedServices.length > 0;
    if (step === 3) return budget !== null && timeline !== null;
    return true;
  };
  const goNext = () => {
    if (canProceed() && step < 4) setStep(step + 1);
  };
  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Project Estimator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12", children: [
        "Scope your next",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "engagement."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-muted-foreground", children: "Answer a few questions about your project and we'll prepare a tailored proposal within two business days. No commitment required." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-4 md:divide-x divide-border", children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 md:p-8 text-center transition-colors duration-300 ${step === s.id ? "bg-foreground text-background" : step > s.id ? "bg-muted" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono text-[10px] uppercase tracking-widest block mb-2 ${step === s.id ? "text-background/60" : "text-muted-foreground"}`, children: [
        "Step ",
        s.id
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm md:text-base", children: s.label })
    ] }, s.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 max-w-7xl mx-auto", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "What do you need help with?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-border", children: [{
          key: "technology",
          title: "Technology",
          desc: "Software engineering, blockchain, cloud and cybersecurity."
        }, {
          key: "creative",
          title: "Creative & Brand",
          desc: "Brand strategy, identity design, UI/UX and marketing."
        }, {
          key: "both",
          title: "Both",
          desc: "Integrated engagements spanning engineering and brand."
        }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setPractice(p.key);
          setSelectedServices([]);
        }, className: `bg-background p-8 md:p-10 text-left group transition-colors duration-300 ${practice === p.key ? "bg-foreground text-background" : "hover:bg-foreground hover:text-background"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase tracking-widest block mb-8 ${practice === p.key ? "text-background/60" : "text-primary group-hover:text-background/60"}`, children: p.key === "technology" ? "01" : p.key === "creative" ? "02" : "01 + 02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold tracking-tight mb-3", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm leading-relaxed ${practice === p.key ? "text-background/70" : "text-muted-foreground group-hover:text-background/70"}`, children: p.desc })
        ] }, p.key)) })
      ] }),
      step === 2 && practice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Select the services you need" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: SERVICE_OPTIONS[practice].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleService(s), className: `p-6 text-left border transition-colors duration-200 ${selectedServices.includes(s) ? "border-primary bg-primary/5 text-foreground" : "border-border hover:border-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: s }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-5 rounded-full border flex items-center justify-center text-[10px] transition-colors ${selectedServices.includes(s) ? "border-primary bg-primary text-white" : "border-border"}`, children: selectedServices.includes(s) && "✓" })
        ] }) }, s)) }),
        selectedServices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-muted-foreground font-mono", children: [
          selectedServices.length,
          " service",
          selectedServices.length > 1 ? "s" : "",
          " selected"
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Estimated Budget" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setBudget(b), className: `w-full p-5 text-left border transition-colors duration-200 flex justify-between items-center ${budget === b ? "border-primary bg-primary/5" : "border-border hover:border-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: b }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-4 rounded-full border transition-colors ${budget === b ? "border-primary bg-primary" : "border-border"}` })
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: TIMELINES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTimeline(t), className: `w-full p-5 text-left border transition-colors duration-200 flex justify-between items-center ${timeline === t ? "border-primary bg-primary/5" : "border-border hover:border-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-4 rounded-full border transition-colors ${timeline === t ? "border-primary bg-primary" : "border-border"}` })
          ] }, t)) })
        ] })
      ] }) }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Your Selection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Practice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: practice === "technology" ? "Technology" : practice === "creative" ? "Creative & Brand" : "Both" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm", children: selectedServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1", children: "→" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
            ] }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Budget" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: budget })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: timeline })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: (e) => {
          e.preventDefault();
          alert("Thanks — we'll prepare your proposal and respond within two business days.");
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Your Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-name", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "est-name", name: "est-name", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-company", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Company *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "est-company", name: "est-company", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-email", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Email *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "est-email", name: "est-email", type: "email", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-phone", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "est-phone", name: "est-phone", type: "tel", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-role", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Your Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "est-role", name: "est-role", placeholder: "e.g. CTO, Head of Marketing, Founder", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "est-brief", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Project Brief" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "est-brief", name: "est-brief", rows: 5, placeholder: "Tell us about the problem you're solving, your target audience, and any constraints we should know about...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors", children: "Get My Proposal →" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-16 pt-8 border-t border-border", children: [
        step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: goBack, className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "← Back" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        step < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: goNext, disabled: !canProceed(), className: `inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${canProceed() ? "bg-foreground text-background hover:bg-primary" : "bg-muted text-muted-foreground cursor-not-allowed"}`, children: "Continue →" })
      ] })
    ] })
  ] });
}
export {
  ProjectEstimatorPage as component
};
