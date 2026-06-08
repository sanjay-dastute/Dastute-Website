import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BhxIqGy1.js";
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 sm:px-6 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-primary block mb-4 sm:mb-6", children: "/ Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-6", children: "Let's talk about your technology challenges." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-sm sm:text-lg text-muted-foreground leading-relaxed mb-12 sm:mb-16", children: "Whether you need a consultation, project estimate, or a technology audit, our team is ready to help. We respond to every enquiry within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-8 sm:gap-16 border-t border-border pt-8 sm:pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 sm:space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3", children: "UK Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-xs sm:text-sm leading-relaxed", children: [
              "Dastute Technologies Limited",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "128 City Road, London EC1V 2NX, United Kingdom"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+447423021644", className: "text-xs sm:text-sm hover:text-primary block mt-2 break-all", children: "+44 7423 021644" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@dastute.co.uk", className: "text-xs sm:text-sm hover:text-primary block break-all", children: "contact@dastute.co.uk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3", children: "India HQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("address", { className: "not-italic text-xs sm:text-sm leading-relaxed", children: "Coimbatore · Chennai · Bangalore, India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919940941959", className: "text-xs sm:text-sm hover:text-primary block mt-2 break-all", children: "+91 9940 941959" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@dastute.co.uk", className: "text-xs sm:text-sm hover:text-primary block break-all", children: "contact@dastute.co.uk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3", children: "Singapore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("address", { className: "not-italic text-xs sm:text-sm leading-relaxed", children: "Ubi, Singapore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+6587722877", className: "text-xs sm:text-sm hover:text-primary block mt-2 break-all", children: "+65 8772 2877" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3", children: "Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm", children: "Mon — Fri · 09:00 — 18:00 (Local Office Time)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4 sm:space-y-6", action: "https://formspree.io/f/mleqdrdo", method: "POST", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "firstName", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "lastName", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Business Email", name: "businessEmail", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company Name", name: "companyName", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", name: "phone", type: "tel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", name: "country", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Service of Interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", name: "service", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "managed-it", children: "Managed IT Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cyber-security", children: "Cyber Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cloud", children: "Cloud Services (AWS/Azure/GCP)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "web-dev", children: "Web Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mobile-dev", children: "Mobile App Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "blockchain", children: "Blockchain & Web3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "erp", children: "ERP Solutions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "network", children: "Network Connectivity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "consulting", children: "IT Consulting & Advisory" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "marketing", children: "Digital Marketing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "staffing", children: "IT Staff Resource Supply" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "red-blue", children: "Red Team / Blue Team Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "audit", children: "Free Technology Audit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "estimate", children: "Project Estimate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "source", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "How Did You Hear About Us?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "source", name: "source", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Google Search" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LinkedIn" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Referral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Social Media" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Blog/Article" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 6, required: true, placeholder: "Tell us about your goals, challenges, and timeline...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Your information is handled under our Privacy Policy and UK GDPR. We only use your details to respond to your enquiry." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors min-h-[44px]", children: "Send Message — We'll Reply Within 1 Business Day" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border px-6 py-24 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground", children: "Fast-Track Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3", children: "Free Technology Audit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: "Request a no-obligation audit and receive a prioritized report on infrastructure, security, software, and data risks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/request-audit", className: "text-sm text-primary hover:underline", children: "Request Free Audit →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3", children: "Project Estimator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: "Get a ballpark budget and timeline in minutes. Useful for early planning before full discovery." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/project-estimator", className: "text-sm text-primary hover:underline", children: "Use Project Estimator →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
