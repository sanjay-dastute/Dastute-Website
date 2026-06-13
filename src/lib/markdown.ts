export function convertHtmlToMarkdown(html: string): string {
  // Extract Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "Dastute Technologies";

  // Remove scripts, styles, SVG, and noscript tags completely
  let cleanHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "")
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, "");
    
  // Extract main body if possible
  const bodyMatch = cleanHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    cleanHtml = bodyMatch[1];
  }
  
  // Convert common tags to markdown
  cleanHtml = cleanHtml
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n\n# $1\n\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n\n## $1\n\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n\n### $1\n\n")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*");

  // Strip all remaining HTML tags
  let textContent = cleanHtml.replace(/<[^>]+>/g, " ");

  // Clean up whitespace and HTML entities
  textContent = textContent
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    // Collapse horizontal spaces
    .replace(/[ \t]+/g, " ")
    // Collapse multiple vertical newlines
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return `# ${title}\n\n${textContent}`;
}
