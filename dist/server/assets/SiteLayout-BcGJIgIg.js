import { Q as reactExports, I as jsxRuntimeExports } from "./server-DdBnU0O_.js";
import { L as Link } from "./router-9JoUErhZ.js";
function SiteNav() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-bold tracking-tighter text-xl uppercase", children: "Dastute" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex gap-6 text-[11px] font-medium uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/technology", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Technology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketing", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Marketing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", activeProps: { className: "text-primary" }, children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground hidden sm:block", children: "COIMBATORE • 11.0168° N, 76.9558° E" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setMobileOpen(!mobileOpen),
            className: "lg:hidden flex flex-col gap-1.5 p-2",
            "aria-label": "Toggle menu",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}` })
            ]
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 flex flex-col gap-4 text-[11px] font-medium uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/technology", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Technology" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketing", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Marketing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Careers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "py-2 hover:text-primary transition-colors", activeProps: { className: "text-primary" }, onClick: () => setMobileOpen(false), children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 mt-2 flex flex-col gap-3 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request-audit", className: "py-1 hover:text-primary transition-colors", onClick: () => setMobileOpen(false), children: "Request an Audit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/project-estimator", className: "py-1 hover:text-primary transition-colors", onClick: () => setMobileOpen(false), children: "Project Estimator" })
      ] })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold tracking-tighter mb-8", children: [
          "DASTUTE",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "TECHNOLOGIES"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-sm text-white/90 space-y-1 font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dastute Technologies Limited" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "128 City Road, London, EC1V 2NX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "United Kingdom • Co. No. 17019407" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-end items-start md:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "mailto:hello@dastute.co.uk",
          className: "text-2xl md:text-4xl font-light hover:text-primary transition-colors underline decoration-1 underline-offset-8",
          children: "hello@dastute.co.uk"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4", children: "Practice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-white transition-colors", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/technology", className: "hover:text-white transition-colors", children: "Technology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketing", className: "hover:text-white transition-colors", children: "Marketing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/capabilities", className: "hover:text-white transition-colors", children: "Capabilities" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-white transition-colors", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/team", className: "hover:text-white transition-colors", children: "Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "hover:text-white transition-colors", children: "Careers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "hover:text-white transition-colors", children: "Insights" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4", children: "Engage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/request-audit", className: "hover:text-white transition-colors", children: "Request an Audit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/project-estimator", className: "hover:text-white transition-colors", children: "Project Estimator" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-white/50 mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms of Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookie-policy", className: "hover:text-white transition-colors", children: "Cookie Policy" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dastute Technologies Limited"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-white", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white", children: "LinkedIn" })
      ] })
    ] })
  ] }) });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground selection:bg-primary selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SiteLayout as S
};
