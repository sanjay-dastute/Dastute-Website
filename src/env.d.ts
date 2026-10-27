declare module "*.html?raw" {
  const content: string;
  export default content;
}

interface Window {
  dataLayer?: Record<string, unknown>[];
}
