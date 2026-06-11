import fs from 'node:fs';
import path from 'node:path';

const resourcesDir = path.resolve('src/routes/resources');
const files = fs.readdirSync(resourcesDir).filter(f => f.endsWith('.tsx'));

const generateDate = (index) => {
  const start = new Date('2026-01-10').getTime();
  const end = new Date('2026-06-10').getTime();
  const diff = end - start;
  const date = new Date(start + (diff / files.length) * index);
  return date.toISOString();
};

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  if (file === 'glossary.tsx') continue;
  
  const filePath = path.join(resourcesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('buildBlogPostingJsonLd')) {
    content = content.replace(
      'from "@/lib/seo";',
      ', buildBlogPostingJsonLd, buildPersonJsonLd } from "@/lib/seo";'
    );
  }

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  const pathMatch = content.match(/path:\s*"([^"]+)"/);

  if (titleMatch && descMatch && pathMatch) {
    const title = titleMatch[1];
    const desc = descMatch[1];
    const routePath = pathMatch[1];

    const datePublished = generateDate(i);

    const schemaToInject = `
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBlogPostingJsonLd({
            headline: ${JSON.stringify(title)},
            description: ${JSON.stringify(desc)},
            datePublished: "${datePublished}",
            authorName: "Sanjay Dastute",
            path: "${routePath}",
          })
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildPersonJsonLd({
            name: "Sanjay Dastute",
            jobTitle: "Chief Technology Officer",
            path: "/team",
          })
        ),
      },`;

    if (!content.includes('buildBlogPostingJsonLd({')) {
      content = content.replace(
        /scripts:\s*\[/,
        "scripts: [" + schemaToInject
      );
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log("Updated " + file);
    } else {
      console.log("Skipping " + file);
    }
  } else {
    console.log("Could not find metadata for " + file);
  }
}
