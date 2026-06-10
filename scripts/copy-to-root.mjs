import { cp } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function copyToRoot() {
  const src = join(__dirname, "..", "dist", "client");
  const dest = join(__dirname, "..");
  
  console.log("⏳ Copying static files to project root...");
  await cp(src, dest, { recursive: true, force: true });
  console.log("✅ Copied dist/client to root successfully.");
}

copyToRoot().catch((err) => {
  console.error("Error copying files:", err);
  process.exit(1);
});
