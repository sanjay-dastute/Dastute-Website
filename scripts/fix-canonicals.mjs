import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

function walkDir(dir, callback) {
  readdirSync(dir).forEach(f => {
    let dirPath = join(dir, f);
    let isDirectory = statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(join(dir, f));
  });
}

walkDir('e:/Test/src/routes', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = readFileSync(filePath, 'utf8');
  let newContent = content;

  // Replace { rel: "canonical", href: "/about" } with { rel: "canonical", href: "https://dastute.co.uk/about" }
  // Replace { rel: "canonical", href: "/" } with { rel: "canonical", href: "https://dastute.co.uk/" }
  
  newContent = newContent.replace(/\{\s*rel:\s*"canonical",\s*href:\s*"(\/.*?)"\s*\}/g, (match, p1) => {
    // If it's already absolute, skip
    if (p1.startsWith('http')) return match;
    const url = `https://dastute.co.uk${p1 === '/' ? '' : p1}`;
    return `{ rel: "canonical", href: "${url}" }`;
  });

  if (content !== newContent) {
    writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed:', filePath);
  }
});
