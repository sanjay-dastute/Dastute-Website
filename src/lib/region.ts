import { useSyncExternalStore } from "react";

/**
 * Visitor region for prices: "in" shows rupees, "intl" (UK and everywhere else) shows pounds.
 * Pages are prerendered in pounds; India visitors switch to rupees once /api/geo answers.
 */
export type Region = "in" | "intl";

/** A string that is the same everywhere, or one per region. */
export type Localised = string | { in: string; intl: string };

const STORAGE_KEY = "dastute-currency";
const GEO_KEY = "dastute-geo";

let region: Region = "intl";
let started = false;
const listeners = new Set<() => void>();

function apply(next: Region) {
  if (next === region) return;
  region = next;
  listeners.forEach((fn) => fn());
}

function detect() {
  if (started) return;
  started = true;
  try {
    const chosen = localStorage.getItem(STORAGE_KEY);
    if (chosen === "in" || chosen === "intl") return apply(chosen);
    const cached = sessionStorage.getItem(GEO_KEY);
    if (cached === "in" || cached === "intl") return apply(cached);
  } catch {
    // storage blocked: fall through to the lookup
  }
  fetch("/api/geo")
    .then((r) => r.json() as Promise<{ country?: string }>)
    .then(({ country }) => {
      const found: Region = country === "IN" ? "in" : "intl";
      try {
        sessionStorage.setItem(GEO_KEY, found);
      } catch {
        // ignore
      }
      apply(found);
    })
    .catch(() => {});
}

/** Manual currency choice from the toggle; remembered for this browser. */
export function setRegion(next: Region) {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  apply(next);
}

export function useRegion(): Region {
  return useSyncExternalStore(
    (fn) => {
      listeners.add(fn);
      detect();
      return () => listeners.delete(fn);
    },
    () => region,
    () => "intl",
  );
}

/** Returns a picker that resolves a Localised value for the current visitor. */
export function useLocalise() {
  const r = useRegion();
  return (v: Localised) => (typeof v === "string" ? v : v[r]);
}
