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

  // Remove { name: "keywords", content: "..." }, blocks.
  // We can use a regex to match { name: "keywords", content: [any string] },
  newContent = newContent.replace(/\{\s*name:\s*"keywords"[^}]+\},?\s*/g, '');
  newContent = newContent.replace(/keywords:\s*"[^"]+",?\s*/g, '');

  if (content !== newContent) {
    writeFileSync(filePath, newContent, 'utf8');
    console.log('Removed keywords from:', filePath);
  }
});
