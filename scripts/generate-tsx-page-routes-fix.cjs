const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pagesDir = path.join(root, "pages");
const routesDir = path.join(root, "src", "routes");

function normalizeHref(href) {
  if (!href) return href;
  if (/^\.{1,2}\//.test(href)) {
    return "/" + href.replace(/^\.{1,2}\//, "");
  }
  return href;
}

function parseAttributes(attrString) {
  const attrs = {};
  const regex = /([a-zA-Z0-9:-]+)=(['"])(.*?)\2/g;
  let match;
  while ((match = regex.exec(attrString))) {
    attrs[match[1]] = match[3];
  }
  return attrs;
}

function extractHtmlFragments(html) {
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const head = headMatch ? headMatch[1] : "";
  const body = bodyMatch ? bodyMatch[1] : html.replace(/<[^>]+>/g, "");

  const titleMatch = head.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  const metaMatches = Array.from(head.matchAll(/<meta\s+([^>]*?)\s*\/?>/gi));
  const meta = metaMatches
    .map((m) => parseAttributes(m[1]))
    .filter((attrs) => attrs.name || attrs.property)
    .filter(
      (attrs) =>
        attrs.charset === undefined &&
        attrs.httpEquiv === undefined &&
        attrs.name !== "viewport",
    )
    .map((attrs) => {
      const metaObj = {};
      if (attrs.name) metaObj.name = attrs.name;
      if (attrs.property) metaObj.property = attrs.property;
      if (attrs.content) metaObj.content = attrs.content;
      return metaObj;
    });

  const linkMatches = Array.from(head.matchAll(/<link\s+([^>]*?)\s*\/?>/gi));
  const links = linkMatches
    .map((m) => parseAttributes(m[1]))
    .filter((attrs) => attrs.rel && attrs.href)
    .map((attrs) => {
      const linkObj = { rel: attrs.rel, href: normalizeHref(attrs.href) };
      if (attrs.crossorigin) linkObj.crossOrigin = attrs.crossorigin;
      if (attrs.type) linkObj.type = attrs.type;
      return linkObj;
    });

  const ldJsonScripts = Array.from(
    head.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ).map((m) => ({ type: "application/ld+json", children: m[1].trim() }));

  const inlineStyles = Array.from(
    head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi),
  ).map((m) => m[1].trim());

  let renderedBody = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  renderedBody = renderedBody.replace(/<script[^>]*>\s*<\/script>/gi, "");
  if (inlineStyles.length) {
    renderedBody =
      inlineStyles.map((css) => `<style>${css}</style>`).join("\n") +
      "\n" +
      renderedBody;
  }

  return { title, meta, links, ldJsonScripts, body: renderedBody };
}

function createRouteFile({ routePath, htmlFile, outputFile }) {
  const htmlPath = path.join(pagesDir, htmlFile);
  if (!fs.existsSync(htmlPath)) {
    console.warn(`Skipping ${htmlFile}: file not found`);
    return;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const { title, meta, links, ldJsonScripts, body } =
    extractHtmlFragments(html);
  const routeUrl = `https://dastute.co.uk${routePath}`;

  const normalizedMeta = meta.map((attrs) => {
    if (
      attrs.property === "og:url" ||
      attrs.name === "og:url" ||
      attrs.name === "twitter:url" ||
      attrs.property === "twitter:url"
    ) {
      return { ...attrs, content: routeUrl };
    }
    return attrs;
  });

  const canonicalLink = {
    rel: "canonical",
    href: routeUrl,
  };

  const serializedMeta = [];
  if (title) serializedMeta.push(`{ title: ${JSON.stringify(title)} }`);
  serializedMeta.push(...normalizedMeta.map((attrs) => JSON.stringify(attrs)));

  const serializedLinks = [];
  let hasCanonical = false;
  for (const link of links) {
    if (link.rel === "canonical") {
      hasCanonical = true;
      continue;
    }
    serializedLinks.push(JSON.stringify(link));
  }
  serializedLinks.unshift(JSON.stringify(canonicalLink));

  const serializedScripts = ldJsonScripts.map((script) => {
    const normalizedChild = script.children.replace(
      /https:\/\/dastute\.co\.uk\/pages\/[\w\-\.\/#?=&]+/g,
      routeUrl,
    );
    return `{
      type: ${JSON.stringify(script.type)},
      children: ${JSON.stringify(normalizedChild)},
    }`;
  });

  const fileContent = `import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const pageHtml = ${JSON.stringify(body)};

export const Route = createFileRoute("${routePath}")({
  head: () => ({
    meta: [
      ${serializedMeta.join(",\n      ")}
    ],
    links: [
      ${serializedLinks.join(",\n      ")}
    ],
    scripts: [
      ${serializedScripts.join(",\n      ")}
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
    </SiteLayout>
  );
}
`;

  fs.writeFileSync(path.join(routesDir, outputFile), fileContent, "utf8");
  console.log(`Generated ${outputFile} from ${htmlFile}`);
}

const pageRouteFiles = [
  "products.tsx",
  "process.tsx",
  "service-android.tsx",
  "service-blockchain.tsx",
  "service-cloud.tsx",
  "service-consulting.tsx",
  "service-custom-software.tsx",
  "service-cyber-security.tsx",
  "service-erp.tsx",
  "service-ios.tsx",
  "service-managed-it.tsx",
  "service-marketing.tsx",
  "service-marketing-legacy.tsx",
  "service-mobile.tsx",
  "service-network.tsx",
  "service-red-blue-team.tsx",
  "service-staffing.tsx",
  "service-web-development.tsx",
  "service-web-development-legacy.tsx",
];

const htmlFileMapping = {
  "service-red-blue-team.tsx": "_red-blue-team-INSERT-INTO-cyber-security.html",
  "service-marketing-legacy.tsx": "service-marketing.html",
  "service-web-development-legacy.tsx": "service-web-development.html",
};

for (const file of pageRouteFiles) {
  const routePathMatch = fs
    .readFileSync(path.join(routesDir, file), "utf8")
    .match(/createFileRoute\("([^\"]+)"\)/);
  if (!routePathMatch) {
    console.warn(`Skipping ${file}: route path not found`);
    continue;
  }
  const routePath = routePathMatch[1];
  const htmlFile =
    htmlFileMapping[file] || `${path.basename(file, ".tsx")}.html`;
  createRouteFile({ routePath, htmlFile, outputFile: file });
}

console.log("Generation complete.");
