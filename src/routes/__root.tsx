import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dastute Technologies — Simplifying IT for a Complex World" },
      { name: "description", content: "Dastute Technologies is a global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore." },
      { name: "author", content: "Dastute Technologies Limited" },
      { name: "keywords", content: "IT consulting, managed services, cyber security, cloud services, web development, mobile development, blockchain, ERP solutions, IT staffing, digital marketing, Dastute Technologies" },
      { property: "og:site_name", content: "Dastute Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Dastute Technologies — Simplifying IT for a Complex World" },
      { name: "twitter:title", content: "Dastute Technologies — Simplifying IT for a Complex World" },
      { property: "og:description", content: "Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore." },
      { name: "twitter:description", content: "Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dastute Technologies",
          legalName: "Dastute Technologies Limited",
          url: "https://dastute.co.uk",
          email: "hello@dastute.co.uk",
          telephone: "+447423021644",
          description: "Simplifying IT for a complex world. Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting.",
          foundingDate: "2023",
          numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
          sameAs: [
            "https://dastute.com",
            "https://dastute.co.uk",
          ],
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "London",
              addressCountry: "GB",
              name: "UK Office",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
              name: "India HQ",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "Singapore",
              addressCountry: "SG",
              name: "Singapore Office",
            },
          ],
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+447423021644", contactType: "sales", areaServed: "GB" },
            { "@type": "ContactPoint", telephone: "+919940941959", contactType: "sales", areaServed: "IN" },
            { "@type": "ContactPoint", telephone: "+6587722877", contactType: "sales", areaServed: "SG" },
          ],
          knowsAbout: [
            "Managed IT Services", "Cyber Security", "Cloud Services", "Web Development",
            "Mobile Development", "Blockchain", "ERP Solutions", "IT Consulting",
            "Digital Marketing", "IT Staffing", "Network Connectivity",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Dastute Technologies",
          url: "https://dastute.co.uk",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
