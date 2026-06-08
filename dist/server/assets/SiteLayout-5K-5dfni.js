import { a3 as useRouter, Q as reactExports, I as jsxRuntimeExports } from "./server-DroHzk8b.js";
import { L as Link, b as buildFaqJsonLd } from "./router-BhxIqGy1.js";
function useRouterState(opts) {
  const contextRouter = useRouter({ warn: opts?.router === void 0 });
  const router = opts?.router || contextRouter;
  {
    const state = router.stores.__store.get();
    return opts?.select ? opts.select(state) : state;
  }
}
function SiteNav() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-bold tracking-tighter text-xl uppercase", children: "Dastute" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex gap-4 xl:gap-6 text-[10px] lg:text-[11px] font-medium uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Services"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/technology",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Technology"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/marketing",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Marketing"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/insights",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Insights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/careers",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Careers"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/about",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "About"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              children: "Contact"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8px] sm:text-[10px] text-muted-foreground hidden sm:block", children: "COIMBATORE • 11.0168° N, 76.9558° E" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setMobileOpen(!mobileOpen),
            className: "lg:hidden flex flex-col gap-1.5 p-2",
            "aria-label": "Toggle menu",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`
                }
              )
            ]
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-md max-h-[calc(100vh-64px)] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-medium uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/services",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/technology",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Technology"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/marketing",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Marketing"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/insights",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Insights"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/careers",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Careers"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/about",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "About"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/team",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Team"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          className: "py-2 hover:text-primary transition-colors",
          activeProps: { className: "text-primary" },
          onClick: () => setMobileOpen(false),
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 mt-2 flex flex-col gap-3 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/request-audit",
            className: "py-1 hover:text-primary transition-colors",
            onClick: () => setMobileOpen(false),
            children: "Request an Audit"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/project-estimator",
            className: "py-1 hover:text-primary transition-colors",
            onClick: () => setMobileOpen(false),
            children: "Project Estimator"
          }
        )
      ] })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background px-4 sm:px-6 py-4 sm:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg sm:text-xl font-bold tracking-tighter mb-2 sm:mb-3 leading-tight", children: [
          "DASTUTE",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "TECHNOLOGIES"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-xs text-white/90 space-y-0.5 font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Dastute Technologies Limited" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "128 City Road, London, EC1V 2NX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "United Kingdom • Co. No. 17019407" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-end items-start md:items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "mailto:contact@dastute.co.uk",
          className: "text-sm sm:text-base font-light hover:text-primary transition-colors underline decoration-1 underline-offset-2 break-all",
          children: "contact@dastute.co.uk"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 py-3 sm:py-4 border-t border-white/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1", children: "Practice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0 text-xs text-white/80 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              className: "hover:text-white transition-colors block",
              children: "Services"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/technology",
              className: "hover:text-white transition-colors block",
              children: "Technology"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/marketing",
              className: "hover:text-white transition-colors block",
              children: "Marketing"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/capabilities",
              className: "hover:text-white transition-colors block",
              children: "Capabilities"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0 text-xs text-white/80 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/about",
              className: "hover:text-white transition-colors block",
              children: "About"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/team",
              className: "hover:text-white transition-colors block",
              children: "Team"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/careers",
              className: "hover:text-white transition-colors block",
              children: "Careers"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/insights",
              className: "hover:text-white transition-colors block",
              children: "Insights"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1", children: "Engage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0 text-xs text-white/80 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "hover:text-white transition-colors block",
              children: "Contact"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/request-audit",
              className: "hover:text-white transition-colors block",
              children: "Request an Audit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/project-estimator",
              className: "hover:text-white transition-colors block",
              children: "Project Estimator"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[8px] uppercase tracking-widest text-white/50 mb-1", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0 text-xs text-white/80 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/privacy-policy",
              className: "hover:text-white transition-colors block",
              children: "Privacy Policy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/terms",
              className: "hover:text-white transition-colors block",
              children: "Terms of Service"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/cookie-policy",
              className: "hover:text-white transition-colors block",
              children: "Cookie Policy"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 sm:pt-3 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-[7px] sm:text-[9px] uppercase tracking-widest text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dastute Technologies Limited"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-white", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://linkedin.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-white",
            children: "LinkedIn"
          }
        )
      ] })
    ] })
  ] }) });
}
const SERVICE_FAQ_MAP = {
  "/service-managed-it": [
    {
      question: "What is included in your managed IT service?",
      answer: "Managed IT includes proactive monitoring, patching, helpdesk support, endpoint management, and strategic advisory with SLA-backed response times."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes. We provide 24/7 support options for business-critical systems, including escalation paths and incident response workflows."
    },
    {
      question: "Can you work with our existing tools?",
      answer: "Yes. We integrate with your current stack where practical and recommend targeted improvements only where they add measurable value."
    }
  ],
  "/service-consulting": [
    {
      question: "What outcomes does IT consulting deliver?",
      answer: "IT consulting aligns your technology roadmap with business goals, reduces delivery risk, and improves investment decisions across platforms and vendors."
    },
    {
      question: "Do you provide vCIO support?",
      answer: "Yes. Our vCIO engagements provide senior technology leadership for planning, governance, and executive decision support."
    },
    {
      question: "How long is a typical strategy engagement?",
      answer: "Most strategy engagements run 4 to 8 weeks, depending on business complexity, stakeholder availability, and depth of assessment."
    }
  ],
  "/service-cyber-security": [
    {
      question: "Do you offer red, blue, and purple team services?",
      answer: "Yes. We run offensive and defensive exercises, then use collaborative purple-team sessions to close critical control gaps."
    },
    {
      question: "Can you support ISO 27001 and Cyber Essentials?",
      answer: "Yes. We support readiness assessments, remediation planning, and evidence preparation for ISO 27001 and Cyber Essentials programs."
    },
    {
      question: "What deliverables do we receive after testing?",
      answer: "You receive executive summaries, technical findings, risk-prioritized remediation plans, and stakeholder debrief sessions."
    }
  ],
  "/service-cloud": [
    {
      question: "Which cloud providers do you support?",
      answer: "We support AWS, Azure, and Google Cloud, including hybrid and multi-cloud architecture and migration programs."
    },
    {
      question: "How do you reduce migration risk?",
      answer: "We use phased rollout, parallel validation, rollback planning, and production readiness checklists to minimize risk and downtime."
    },
    {
      question: "Do you optimize cloud costs?",
      answer: "Yes. We apply FinOps practices including rightsizing, reservation strategy, and waste elimination with monthly cost reporting."
    }
  ],
  "/service-web-development": [
    {
      question: "What web technologies do you use?",
      answer: "We build with modern stacks including React, Next.js, TypeScript, Node.js, and API-first architectures."
    },
    {
      question: "Can you build SEO-ready websites?",
      answer: "Yes. We implement technical SEO fundamentals including schema, performance optimization, semantic HTML, canonical tags, and crawl controls."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes. We provide stabilization, monitoring, and ongoing enhancement support after launch."
    }
  ],
  "/service-mobile": [
    {
      question: "Should we choose native or cross-platform?",
      answer: "We recommend based on product goals, device feature needs, and timeline. Cross-platform often accelerates delivery, while native can maximize platform performance."
    },
    {
      question: "Do you handle app store submissions?",
      answer: "Yes. We manage build signing, compliance checks, metadata preparation, and App Store and Google Play submission workflows."
    },
    {
      question: "How long does a mobile MVP take?",
      answer: "Most MVP mobile apps are delivered in approximately 8 to 16 weeks depending on features and integrations."
    }
  ],
  "/service-android": [
    {
      question: "Do you build native Android apps?",
      answer: "Yes. We deliver native Android applications with Kotlin and modern Android architecture patterns."
    },
    {
      question: "Can you integrate Android apps with enterprise systems?",
      answer: "Yes. We integrate with APIs, identity providers, analytics, and enterprise back-office platforms."
    },
    {
      question: "Do you support maintenance and updates?",
      answer: "Yes. We provide release management, compatibility updates, and feature enhancements."
    }
  ],
  "/service-ios": [
    {
      question: "Do you build native iOS apps with Swift?",
      answer: "Yes. We build native iOS apps using Swift and modern Apple frameworks for high performance and reliability."
    },
    {
      question: "Can you integrate Face ID and Apple ecosystem features?",
      answer: "Yes. We implement platform capabilities such as biometrics, notifications, and secure keychain workflows where relevant."
    },
    {
      question: "Do you handle App Store review requirements?",
      answer: "Yes. We prepare required metadata and compliance artifacts to support smooth App Store submission."
    }
  ],
  "/service-blockchain": [
    {
      question: "What blockchain services do you provide?",
      answer: "We provide smart contract development, architecture design, integration, and security-focused delivery support."
    },
    {
      question: "Do you support enterprise blockchain use cases?",
      answer: "Yes. We design blockchain solutions for enterprise workflows where immutability and trust verification create measurable value."
    },
    {
      question: "Can you assist with smart contract security?",
      answer: "Yes. We include secure coding practices, testing, and audit-aligned remediation guidance."
    }
  ],
  "/service-erp": [
    {
      question: "Which ERP platforms do you support?",
      answer: "We support major ERP platforms and tailored ERP implementations based on business process and integration requirements."
    },
    {
      question: "Can you migrate data from legacy systems?",
      answer: "Yes. We run structured data migration and validation plans to protect business continuity."
    },
    {
      question: "Do you provide ERP customization and support?",
      answer: "Yes. We provide implementation, customization, integration, and post-go-live support."
    }
  ],
  "/service-network": [
    {
      question: "Do you design and manage enterprise networks?",
      answer: "Yes. We design, deploy, and manage LAN/WAN, SD-WAN, wireless, and secure connectivity environments."
    },
    {
      question: "Can you improve network reliability across sites?",
      answer: "Yes. We optimize topology, routing, failover, and monitoring to improve uptime and performance."
    },
    {
      question: "Do you include network security controls?",
      answer: "Yes. Our network solutions include segmentation, access controls, and security policy enforcement."
    }
  ],
  "/service-custom-software": [
    {
      question: "When should we choose custom software?",
      answer: "Custom software is best when off-the-shelf tools cannot support your workflow, compliance, or integration requirements."
    },
    {
      question: "Can you modernize legacy systems?",
      answer: "Yes. We modernize legacy applications through phased migration strategies that reduce operational risk."
    },
    {
      question: "How do you ensure maintainability?",
      answer: "We use clear architecture, testing, documentation, and handover standards to ensure long-term maintainability."
    }
  ],
  "/service-staffing": [
    {
      question: "What roles can you provide?",
      answer: "We provide vetted engineers, architects, security specialists, and delivery talent for contract and permanent roles."
    },
    {
      question: "How quickly can you provide candidates?",
      answer: "Initial shortlists are typically delivered quickly after role calibration and requirement confirmation."
    },
    {
      question: "Do you support UK compliance requirements?",
      answer: "Yes. We support relevant UK hiring and contractor compliance workflows, including IR35-aligned processes where applicable."
    }
  ],
  "/service-marketing": [
    {
      question: "What marketing channels do you cover?",
      answer: "We cover SEO, paid media, social media, content, email automation, and analytics-led growth programs."
    },
    {
      question: "How do you measure performance?",
      answer: "We track channel KPIs, conversion metrics, and commercial outcomes with regular reporting."
    },
    {
      question: "Do you support B2B and B2C campaigns?",
      answer: "Yes. We support B2B and B2C programs with strategy tailored to audience, cycle length, and acquisition model."
    }
  ],
  "/service-red-blue-team": [
    {
      question: "What is the purpose of red and blue team testing?",
      answer: "It validates how effectively your organization can prevent, detect, respond to, and recover from realistic attack scenarios."
    },
    {
      question: "Do you provide actionable remediation guidance?",
      answer: "Yes. We provide prioritized remediation actions with technical detail and executive context."
    },
    {
      question: "Can we run recurring exercises?",
      answer: "Yes. Recurring exercises improve maturity over time and validate control improvements release by release."
    }
  ]
};
function SiteLayout({ children }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const serviceFaqItems = SERVICE_FAQ_MAP[pathname];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-ambient min-h-screen bg-background text-foreground selection:bg-primary selection:text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "ambient-orb ambient-orb-a" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "ambient-orb ambient-orb-b" }),
    serviceFaqItems ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(
            buildFaqJsonLd(`${pathname}#faq`, serviceFaqItems)
          )
        }
      }
    ) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "overflow-x-hidden", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SiteLayout as S
};
