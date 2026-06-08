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
function CareerApplicationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 sm:px-6 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-primary block mb-4 sm:mb-6", children: "/ Careers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-12 sm:mb-16", children: "Apply for a role." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base sm:text-lg text-muted-foreground mb-8", children: "We're building a global team of experienced practitioners across software engineering, cloud architecture, cybersecurity, product management, and advisory. Submit your application below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border px-4 sm:px-6 py-16 sm:py-24 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4 sm:space-y-6", action: "https://formspree.io/f/mleqdrdo", method: "POST", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border", children: "Personal Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", name: "firstName", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", name: "lastName", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Current Location", name: "location", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "LinkedIn Profile (URL)", name: "linkedin", type: "url" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border", children: "Application Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "position", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Position Interest *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "position", name: "position", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a position..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "senior-engineer", children: "Senior Software Engineer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cloud-architect", children: "Cloud Architect (AWS/Azure/GCP)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "security-specialist", children: "Cybersecurity Specialist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "devops-engineer", children: "DevOps Engineer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "blockchain-developer", children: "Blockchain Developer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "product-manager", children: "Product Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "it-consultant", children: "IT Consultant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "project-manager", children: "Project Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other (please specify in cover letter)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "experience", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Years of Experience *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "experience", name: "experience", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select experience level..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0-2", children: "0-2 years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2-5", children: "2-5 years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5-10", children: "5-10 years" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10+", children: "10+ years" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "skills", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Key Skills (comma-separated) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "skills", name: "skills", type: "text", required: true, placeholder: "e.g., React, Node.js, AWS, Kubernetes, Python...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "workType", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Preferred Work Type *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "workType", name: "workType", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select work type..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "full-time", children: "Full-Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contract", children: "Contract" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "both", children: "Both (Full-Time & Contract)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "location-pref", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Preferred Work Location *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "location-pref", name: "locationPreference", required: true, className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select location..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "london", children: "London, UK" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "coimbatore", children: "Coimbatore, India" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bangalore", children: "Bangalore, India" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "singapore", children: "Singapore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "remote", children: "Remote" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "flexible", children: "Flexible/Multiple Locations" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold mb-6 pb-4 border-b border-border", children: "Additional Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "coverLetter", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Cover Letter / Why You're Interested *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "coverLetter", name: "coverLetter", rows: 6, required: true, placeholder: "Tell us about yourself, your experience, and why you'd like to join Dastute Technologies...", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "portfolio", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Portfolio / GitHub / Website (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "portfolio", name: "portfolio", type: "url", placeholder: "https://github.com/yourprofile", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm transition-colors" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "questions", className: "font-mono text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Any Questions for Us? (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "questions", name: "questions", rows: 4, placeholder: "Any questions about the role, company, or process?", className: "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none transition-colors" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors min-h-[44px] w-full sm:w-auto", children: "Submit Application →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] sm:text-xs text-muted-foreground mt-4", children: "We review all applications and will contact promising candidates within 2 weeks. Thank you for your interest in Dastute Technologies!" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border px-4 sm:px-6 py-16 sm:py-24 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-bold mb-8 pb-4 border-b border-border", children: "Why Join Dastute?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [{
        title: "Global Team",
        desc: "Work with experienced professionals across UK, India, and Singapore"
      }, {
        title: "Growth Opportunities",
        desc: "Clear career progression and continuous learning in cutting-edge technologies"
      }, {
        title: "Competitive Package",
        desc: "Competitive salary, benefits, and flexible work arrangements"
      }, {
        title: "Diverse Projects",
        desc: "Work on enterprise projects across multiple industries and technologies"
      }, {
        title: "Real Partnerships",
        desc: "Build long-term relationships with clients and team members"
      }, {
        title: "Work-Life Balance",
        desc: "We believe in sustainable work practices and respect your time"
      }].map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-2", children: benefit.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: benefit.desc })
      ] }, i)) })
    ] })
  ] });
}
export {
  CareerApplicationPage as component
};
