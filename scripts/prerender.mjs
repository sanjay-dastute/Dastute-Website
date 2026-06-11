import { mkdir, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  "/",
  "/about",
  "/capabilities",
  "/careers",
  "/careers-apply",
  "/contact",
  "/cookie-policy",
  "/marketing",
  "/privacy-policy",
  "/process",
  "/products",
  "/project-estimator",
  "/request-audit",
  "/insights",
  "/team",
  "/technology",
  "/terms",
  "/services/blockchain",
  "/services/cloud",
  "/services/consulting",
  "/services/custom-software",
  "/services/cyber-security",
  "/services/erp",
  "/services/managed-it",
  "/services/marketing",
  "/services/mobile",
  "/services/network",
  "/services/web-development",
  "/services/it-staffing",
  "/pricing",
  "/industries/healthcare",
  "/industries/fintech",
  "/industries/manufacturing",
  "/case-studies",
  "/resources/in-house-it-vs-managed-services",
  "/resources/cyber-essentials-guide",
  "/resources/what-is-vcio",
  "/resources/erp-vs-sap",
  "/resources/cloud-migration-cost-guide",
  "/resources/iso-27001-checklist",
  "/resources/ai-agents-enterprise-guide",
  "/resources/penetration-testing-explained",
  "/resources/blockchain-supply-chain",
  "/resources/it-staffing-vs-in-house",
  "/resources/glossary",
  "/resources/zero-trust-architecture",
  "/resources/ransomware-recovery",
  "/resources/soc-explained",
  "/resources/bcdr-guide",
  "/resources/generative-ai-enterprise",
];

const ORIGIN = "https://dastute.co.uk";
const OUT_DIR = join(__dirname, "..", "dist", "client");

async function prerender() {
  console.log("⏳ Loading SSR server...");
  const serverPath = join(__dirname, "..", "dist", "server", "index.js");
  const serverUrl = pathToFileURL(serverPath).href;
  const server = await import(serverUrl);
  const handler = server.default;

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const url = `${ORIGIN}${route}`;
    const request = new Request(url, { method: "GET" });

    try {
      const response = await handler.fetch(request, {}, {});
      const html = await response.text();

      if (response.status >= 400) {
        console.error(`  ✗ ${route} — HTTP ${response.status}`);
        failed++;
        continue;
      }

      const outPath =
        route === "/"
          ? join(OUT_DIR, "index.html")
          : join(OUT_DIR, ...route.slice(1).split("/")) + ".html";

      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`  ✓ ${route}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
      failed++;
    }
  }

  // Generate sitemap.xml separately
  try {
    const sitemapReq = new Request(`${ORIGIN}/sitemap.xml`, { method: "GET" });
    const sitemapRes = await handler.fetch(sitemapReq, {}, {});
    const xml = await sitemapRes.text();
    await writeFile(join(OUT_DIR, "sitemap.xml"), xml, "utf-8");
    console.log(`  ✓ /sitemap.xml`);
    success++;
  } catch (err) {
    console.error(`  ✗ /sitemap.xml: ${err.message}`);
  }

  console.log(`\n✅ Prerendered ${success} pages (${failed} failed)`);
}

prerender().catch((err) => {
  console.error("Fatal prerender error:", err);
  process.exit(1);
});
