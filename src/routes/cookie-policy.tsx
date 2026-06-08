import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Dastute Technologies" },
      {
        name: "description",
        content:
          "Cookie Policy for Dastute Technologies Limited. Information about the cookies we use and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy — Dastute Technologies" },
      { property: "og:url", content: "/cookie-policy" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Cookie Policy", path: "/cookie-policy" },
          ]),
        ),
      },
    ],
  }),
  component: CookiePolicyPage,
});

const COOKIE_TABLE = [
  {
    category: "Strictly Necessary",
    cookies: [
      {
        name: "__session",
        purpose: "Maintains user session state across page requests.",
        duration: "Session",
        type: "First-party",
      },
      {
        name: "cookie_consent",
        purpose: "Records your cookie consent preferences.",
        duration: "12 months",
        type: "First-party",
      },
    ],
  },
  {
    category: "Analytics",
    cookies: [
      {
        name: "_ga",
        purpose:
          "Google Analytics — distinguishes unique users to compile site usage reports.",
        duration: "24 months",
        type: "Third-party (Google)",
      },
      {
        name: "_ga_*",
        purpose: "Google Analytics 4 — used to persist session state.",
        duration: "24 months",
        type: "Third-party (Google)",
      },
    ],
  },
  {
    category: "Functional",
    cookies: [
      {
        name: "theme_pref",
        purpose: "Stores your display theme preference (light/dark).",
        duration: "12 months",
        type: "First-party",
      },
      {
        name: "lang_pref",
        purpose: "Stores your language preference.",
        duration: "12 months",
        type: "First-party",
      },
    ],
  },
  {
    category: "Marketing",
    cookies: [
      {
        name: "_gcl_au",
        purpose: "Google Ads — stores conversion data on ad clicks.",
        duration: "90 days",
        type: "Third-party (Google)",
      },
      {
        name: "_fbp",
        purpose:
          "Facebook Pixel — delivers advertisements and tracks conversions.",
        duration: "90 days",
        type: "Third-party (Meta)",
      },
      {
        name: "li_sugr",
        purpose: "LinkedIn Insight Tag — identifies visitors for ad targeting.",
        duration: "90 days",
        type: "Third-party (LinkedIn)",
      },
    ],
  },
];

function CookiePolicyPage() {
  return (
    <SiteLayout>
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary block mb-6">
          / Legal
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-balance max-w-4xl mb-8">
          Cookie Policy
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-16">
          Last updated: 1 January 2026
        </p>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          {/* Intro */}
          <article>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">01</span>
              <h2 className="text-2xl font-bold tracking-tight">
                What Are Cookies
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently, to provide a better user experience, and to
                supply information to the website operator.
              </p>
              <p>
                This policy explains what cookies Dastute Technologies Limited
                ("we", "us") uses on our website, why we use them, and how you
                can manage your preferences.
              </p>
            </div>
          </article>

          {/* Types */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">02</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Types of Cookies We Use
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>We categorise cookies into four types:</p>
              <ul className="space-y-2">
                {[
                  "Strictly Necessary: essential for the website to function. These cannot be disabled.",
                  "Analytics: help us understand how visitors interact with the website so we can improve it.",
                  "Functional: enable enhanced features such as theme and language preferences.",
                  "Marketing: used to deliver relevant advertisements and measure campaign effectiveness.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Cookie Table */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">03</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Cookie Details
              </h2>
            </div>
            <div className="pl-10 space-y-12">
              {COOKIE_TABLE.map((group) => (
                <div key={group.category}>
                  <h3 className="font-bold mb-4">{group.category}</h3>
                  <div className="border border-border overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted">
                          <th className="text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                            Cookie
                          </th>
                          <th className="text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                            Purpose
                          </th>
                          <th className="text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                            Duration
                          </th>
                          <th className="text-left p-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                            Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.cookies.map((cookie) => (
                          <tr
                            key={cookie.name}
                            className="border-b border-border last:border-0"
                          >
                            <td className="p-3 font-mono text-xs">
                              {cookie.name}
                            </td>
                            <td className="p-3 text-muted-foreground">
                              {cookie.purpose}
                            </td>
                            <td className="p-3 text-muted-foreground whitespace-nowrap">
                              {cookie.duration}
                            </td>
                            <td className="p-3 text-muted-foreground whitespace-nowrap">
                              {cookie.type}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Managing Cookies */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">04</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Managing Your Cookies
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                You can manage or delete cookies through your browser settings.
                Most browsers allow you to:
              </p>
              <ul className="space-y-2">
                {[
                  "View and delete existing cookies.",
                  "Block third-party cookies.",
                  "Block cookies from specific websites.",
                  "Block all cookies.",
                  "Delete all cookies when you close your browser.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Please note that blocking or deleting cookies may impact your
                experience on our website. Strictly necessary cookies cannot be
                disabled as the website cannot function without them.
              </p>
              <p className="mt-6">
                For more information on managing cookies in common browsers:
              </p>
              <ul className="space-y-2 mt-2">
                {[
                  {
                    name: "Google Chrome",
                    url: "https://support.google.com/chrome/answer/95647",
                  },
                  {
                    name: "Mozilla Firefox",
                    url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
                  },
                  {
                    name: "Safari",
                    url: "https://support.apple.com/en-gb/guide/safari/sfri11471",
                  },
                  {
                    name: "Microsoft Edge",
                    url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
                  },
                ].map((browser) => (
                  <li key={browser.name} className="flex items-start gap-3">
                    <span className="font-mono text-[10px] text-primary mt-1.5">
                      →
                    </span>
                    <a
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Updates */}
          <article className="border-t border-border pt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-primary">05</span>
              <h2 className="text-2xl font-bold tracking-tight">
                Changes to This Policy
              </h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed pl-10">
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>
          </article>

          {/* Related Policies */}
          <div className="border-t border-border pt-16">
            <div className="p-8 bg-muted">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Related Policies
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Privacy Policy <span aria-hidden>↗</span>
                </Link>
                <Link
                  to="/terms"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Terms of Service <span aria-hidden>↗</span>
                </Link>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm mb-1">Dastute Technologies Limited</p>
                <p className="text-sm mb-1">128 City Road, London, EC1V 2NX</p>
                <a
                  href="mailto:privacy@dastute.co.uk"
                  className="text-sm text-primary hover:underline"
                >
                  privacy@dastute.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
