import { I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-16", children: "Start a consultation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-16 border-t border-border pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "UK Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-sm leading-relaxed", children: [
              "Dastute Technologies Limited",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "London, United Kingdom",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Co. No. 17019407"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+447423021644", className: "text-sm hover:text-primary block mt-2", children: "+44 7423 021644" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@dastute.co.uk", className: "text-sm hover:text-primary block", children: "hello@dastute.co.uk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "India HQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-sm leading-relaxed", children: [
              "Dastute Switcher Technologies LLP",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Coimbatore, Tamil Nadu",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Chennai · Bangalore"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919940941959", className: "text-sm hover:text-primary block mt-2", children: "+91 9940 941959" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:office@dastute.com", className: "text-sm hover:text-primary block", children: "office@dastute.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Singapore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("address", { className: "not-italic text-sm leading-relaxed", children: "Ubi, Singapore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+6587722877", className: "text-sm hover:text-primary block mt-2", children: "+65 8772 2877" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3", children: "Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Mon — Fri · 09:00 — 18:00 (local time)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: (e) => {
          e.preventDefault();
          alert("Thanks — we'll be in touch within one business day.");
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Service Interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", name: "service", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "managed-it", children: "Managed IT Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cyber-security", children: "Cyber Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cloud", children: "Cloud Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "web-dev", children: "Web & App Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mobile-dev", children: "Mobile Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "blockchain", children: "Blockchain & Web3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "erp", children: "ERP Solutions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "network", children: "Network Connectivity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "consulting", children: "IT Consulting & Advisory" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "marketing", children: "Digital Marketing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "staffing", children: "IT Staffing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "brief", className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Project brief" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "brief", name: "brief", rows: 6, required: true, placeholder: "Tell us about your IT challenges, goals and timeline...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors", children: "Submit Brief →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border px-6 py-24 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "How We Start" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-12", children: [{
        n: "01",
        t: "Schedule a Call",
        d: "We schedule a call at your convenience to understand your needs and discuss potential solutions."
      }, {
        n: "02",
        t: "Discovery Meeting",
        d: "We conduct a discovery and consulting meeting to deep-dive into your IT challenges and business goals."
      }, {
        n: "03",
        t: "Tailored Proposal",
        d: "We prepare a detailed proposal with scope, timeline and investment — no obligation, no jargon."
      }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mt-4 mb-3", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.d })
      ] }, p.n)) })
    ] })
  ] });
}
export {
  ContactPage as component
};
