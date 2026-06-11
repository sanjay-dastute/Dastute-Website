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
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { SiteLayout } from "@/components/SiteLayout";

const GTM_ID = "GTM-K8GD6FJB";
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center justify-center px-6 py-16 text-center md:px-8">
        <div className="max-w-xl rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur xl:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            This page isn’t available right now.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            The link may be out of date or the page has moved. Head back to the
            main site to continue exploring our services, products, and
            technology practice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <SiteLayout>
      <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center justify-center px-6 py-16 text-center md:px-8">
        <div className="max-w-xl rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur xl:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">
            Page error
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Something went wrong while loading this page.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            A temporary render issue interrupted the page. You can retry the
            request or return to the homepage and continue from there.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Try again
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Go home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          httpEquiv: "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
        { title: "Dastute Technologies — Simplifying IT for a Complex World" },
        {
          name: "description",
          content:
            "Dastute Technologies is a global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore.",
        },
        { name: "author", content: "Dastute Technologies Limited" },
        {
          name: "keywords",
          content:
            "IT consulting, managed services, cyber security, cloud services, web development, mobile development, blockchain, ERP solutions, IT staffing, digital marketing, Dastute Technologies",
        },
        { property: "og:site_name", content: "Dastute Technologies" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          property: "og:title",
          content: "Dastute Technologies — Simplifying IT for a Complex World",
        },
        {
          name: "twitter:title",
          content: "Dastute Technologies — Simplifying IT for a Complex World",
        },
        {
          property: "og:description",
          content:
            "Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore.",
        },
        {
          name: "twitter:description",
          content:
            "Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting across the UK, India and Singapore.",
        },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
        },
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
            logo: "https://dastute.co.uk/logo.png",
            email: "info@dastute.co.uk",
            telephone: "+447423021644",
            description:
              "Simplifying IT for a complex world. Global IT consultancy delivering Managed Services, Cyber Security, Cloud, Web & Mobile Development, Blockchain, ERP and IT Consulting.",
            foundingDate: "2023",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 10,
              maxValue: 50,
            },
            sameAs: ["https://dastute.co.uk"],
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
              {
                "@type": "ContactPoint",
                telephone: "+447423021644",
                contactType: "sales",
                areaServed: "GB",
              },
              {
                "@type": "ContactPoint",
                telephone: "+919940941959",
                contactType: "sales",
                areaServed: "IN",
              },
              {
                "@type": "ContactPoint",
                telephone: "+6587722877",
                contactType: "sales",
                areaServed: "SG",
              },
            ],
            knowsAbout: [
              "Managed IT Services",
              "Cyber Security",
              "Cloud Services",
              "Web Development",
              "Mobile Development",
              "Blockchain",
              "ERP Solutions",
              "IT Consulting",
              "Digital Marketing",
              "IT Staffing",
              "Network Connectivity",
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
            potentialAction: {
              "@type": "SearchAction",
              target: "https://dastute.co.uk/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        },
        {
          children: `(function(w,d,s,l,i){try{if(w.localStorage.getItem('dastute_cookie_consent')!=='accepted'){return;}w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode&&f.parentNode.insertBefore(j,f);}catch(e){}})(window,document,'script','dataLayer','${GTM_ID}');`,
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
          async: true,
        },
        {
          children: `try{if(window.localStorage.getItem('dastute_cookie_consent')==='accepted'){window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}');}}catch(e){}`,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

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
      <CookieConsentBanner />
    </QueryClientProvider>
  );
}
