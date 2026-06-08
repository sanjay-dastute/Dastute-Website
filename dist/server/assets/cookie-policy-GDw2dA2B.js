import { I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { L as Link } from "./router-BhxIqGy1.js";
import { S as SiteLayout } from "./SiteLayout-5K-5dfni.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const COOKIE_TABLE = [{
  category: "Strictly Necessary",
  cookies: [{
    name: "__session",
    purpose: "Maintains user session state across page requests.",
    duration: "Session",
    type: "First-party"
  }, {
    name: "cookie_consent",
    purpose: "Records your cookie consent preferences.",
    duration: "12 months",
    type: "First-party"
  }]
}, {
  category: "Analytics",
  cookies: [{
    name: "_ga",
    purpose: "Google Analytics — distinguishes unique users to compile site usage reports.",
    duration: "24 months",
    type: "Third-party (Google)"
  }, {
    name: "_ga_*",
    purpose: "Google Analytics 4 — used to persist session state.",
    duration: "24 months",
    type: "Third-party (Google)"
  }]
}, {
  category: "Functional",
  cookies: [{
    name: "theme_pref",
    purpose: "Stores your display theme preference (light/dark).",
    duration: "12 months",
    type: "First-party"
  }, {
    name: "lang_pref",
    purpose: "Stores your language preference.",
    duration: "12 months",
    type: "First-party"
  }]
}, {
  category: "Marketing",
  cookies: [{
    name: "_gcl_au",
    purpose: "Google Ads — stores conversion data on ad clicks.",
    duration: "90 days",
    type: "Third-party (Google)"
  }, {
    name: "_fbp",
    purpose: "Facebook Pixel — delivers advertisements and tracks conversions.",
    duration: "90 days",
    type: "Third-party (Meta)"
  }, {
    name: "li_sugr",
    purpose: "LinkedIn Insight Tag — identifies visitors for ad targeting.",
    duration: "90 days",
    type: "Third-party (LinkedIn)"
  }]
}];
function CookiePolicyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-6 py-24 md:py-32 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6", children: "/ Legal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-8", children: "Cookie Policy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-16", children: "Last updated: 1 January 2026" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "What Are Cookies" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm text-muted-foreground leading-relaxed pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, to provide a better user experience, and to supply information to the website operator." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'This policy explains what cookies Dastute Technologies Limited ("we", "us") uses on our website, why we use them, and how you can manage your preferences.' })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Types of Cookies We Use" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm text-muted-foreground leading-relaxed pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We categorise cookies into four types:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Strictly Necessary: essential for the website to function. These cannot be disabled.", "Analytics: help us understand how visitors interact with the website so we can improve it.", "Functional: enable enhanced features such as theme and language preferences.", "Marketing: used to deliver relevant advertisements and measure campaign effectiveness."].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1.5", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "03" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Cookie Details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-10 space-y-12", children: COOKIE_TABLE.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-4", children: group.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium", children: "Cookie" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium", children: "Purpose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium", children: "Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium", children: "Type" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: group.cookies.map((cookie) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-mono text-xs", children: cookie.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: cookie.purpose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground whitespace-nowrap", children: cookie.duration }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground whitespace-nowrap", children: cookie.type })
            ] }, cookie.name)) })
          ] }) })
        ] }, group.category)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "04" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Managing Your Cookies" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm text-muted-foreground leading-relaxed pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You can manage or delete cookies through your browser settings. Most browsers allow you to:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["View and delete existing cookies.", "Block third-party cookies.", "Block cookies from specific websites.", "Block all cookies.", "Delete all cookies when you close your browser."].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1.5", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Please note that blocking or deleting cookies may impact your experience on our website. Strictly necessary cookies cannot be disabled as the website cannot function without them." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6", children: "For more information on managing cookies in common browsers:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mt-2", children: [{
            name: "Google Chrome",
            url: "https://support.google.com/chrome/answer/95647"
          }, {
            name: "Mozilla Firefox",
            url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
          }, {
            name: "Safari",
            url: "https://support.apple.com/en-gb/guide/safari/sfri11471"
          }, {
            name: "Microsoft Edge",
            url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          }].map((browser) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-primary mt-1.5", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: browser.url, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: browser.name })
          ] }, browser.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border-t border-border pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "05" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Changes to This Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-sm text-muted-foreground leading-relaxed pl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4", children: "Related Policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/privacy-policy", className: "inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors", children: [
            "Privacy Policy ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↗" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/terms", className: "inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors", children: [
            "Terms of Service ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "↗" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-1", children: "Dastute Technologies Limited" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-1", children: "128 City Road, London, EC1V 2NX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:privacy@dastute.co.uk", className: "text-sm text-primary hover:underline", children: "privacy@dastute.co.uk" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  CookiePolicyPage as component
};
