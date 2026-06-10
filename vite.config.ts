import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: {
      prerender: {
        routes: ["/"],
        crawlLinks: true,
      },
    },
  },
});
