import { useEffect, useState } from "react";

const CONSENT_KEY = "dastute_cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
    }
    setReady(true);
  }, []);

  if (!ready || consent) {
    return null;
  }

  const saveConsent = (value: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    window.dispatchEvent(
      new CustomEvent("dastute:cookie-consent", { detail: value }),
    );
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl border border-border bg-background/95 backdrop-blur-sm p-4 md:p-5 shadow-lg">
      <p className="text-sm leading-relaxed text-muted-foreground">
        We use essential cookies for site operation and optional analytics
        cookies to improve performance. You can accept or reject optional
        cookies. Read more in our Cookie Policy.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={() => saveConsent("rejected")}
          className="inline-flex items-center justify-center border border-foreground px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          Reject Optional
        </button>
        <button
          type="button"
          onClick={() => saveConsent("accepted")}
          className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
