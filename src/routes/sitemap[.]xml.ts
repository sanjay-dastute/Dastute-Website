import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://dastute.co.uk";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/services", priority: "0.9" },
          { path: "/technology", priority: "0.9" },
          { path: "/marketing", priority: "0.9" },
          { path: "/capabilities", priority: "0.8" },
          { path: "/about", priority: "0.7" },
          { path: "/team", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
          { path: "/insights", priority: "0.8" },
          { path: "/request-audit", priority: "0.7" },
          { path: "/project-estimator", priority: "0.7" },
          { path: "/careers", priority: "0.7" },
          { path: "/privacy-policy", priority: "0.3" },
          { path: "/terms", priority: "0.3" },
          { path: "/cookie-policy", priority: "0.3" },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
