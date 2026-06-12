import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://dastute.co.uk";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },

          { path: "/technology", priority: "0.9" },
          { path: "/marketing", priority: "0.9" },
          { path: "/process", priority: "0.8" },
          { path: "/products", priority: "0.8" },
          { path: "/services/managed-it", priority: "0.8" },
          { path: "/services/consulting", priority: "0.8" },
          { path: "/services/cyber-security", priority: "0.8" },
          { path: "/services/cloud", priority: "0.8" },
          { path: "/services/web-development", priority: "0.8" },
          { path: "/services/mobile", priority: "0.8" },
          { path: "/services/blockchain", priority: "0.7" },
          { path: "/services/erp", priority: "0.7" },
          { path: "/services/network", priority: "0.7" },
          { path: "/services/custom-software", priority: "0.7" },
          { path: "/services/marketing", priority: "0.7" },
          { path: "/services/it-staffing", priority: "0.8" },
          { path: "/pricing", priority: "0.8" },
          { path: "/industries/healthcare", priority: "0.8" },
          { path: "/industries/fintech", priority: "0.8" },
          { path: "/capabilities", priority: "0.8" },
          { path: "/about", priority: "0.7" },
          { path: "/team", priority: "0.7" },
          { path: "/contact", priority: "0.7" },

          { path: "/request-audit", priority: "0.7" },
          { path: "/project-estimator", priority: "0.7" },
          { path: "/insights", priority: "0.8" },
          { path: "/careers", priority: "0.7" },
          { path: "/careers-apply", priority: "0.6" },
          { path: "/industries/manufacturing", priority: "0.8" },
          { path: "/case-studies", priority: "0.8" },
          { path: "/resources/in-house-it-vs-managed-services", priority: "0.7" },
          { path: "/resources/cyber-essentials-guide", priority: "0.7" },
          { path: "/resources/what-is-vcio", priority: "0.7" },
          { path: "/resources/erp-vs-sap", priority: "0.7" },
          { path: "/resources/cloud-migration-cost-guide", priority: "0.7" },
          { path: "/resources/iso-27001-checklist", priority: "0.7" },
          { path: "/resources/ai-agents-enterprise-guide", priority: "0.7" },
          { path: "/resources/penetration-testing-explained", priority: "0.7" },
          { path: "/resources/blockchain-supply-chain", priority: "0.7" },
          { path: "/resources/it-staffing-vs-in-house", priority: "0.7" },
          { path: "/resources/glossary", priority: "0.7" },
          { path: "/privacy-policy", priority: "0.3" },
          { path: "/terms", priority: "0.3" },
          { path: "/cookie-policy", priority: "0.3" },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
