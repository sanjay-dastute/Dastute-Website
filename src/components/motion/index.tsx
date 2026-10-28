import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Scroll reveals are CSS-driven: content is visible in the SSR HTML and is
 * only hidden once `html.motion-ready` is set by MotionRoot, so crawlers and
 * no-JS visitors always see the full text.
 */
export function MotionRoot() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("motion-ready");

    // React rewrites `className` on re-render, dropping `is-in`; remember what
    // was revealed so it can be restored before the next paint.
    const revealed = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealed.add(entry.target);
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    // Tag content on every page so motion works without per-page markup;
    // the first section is skipped so the hero/LCP paints immediately.
    const autoTag = () => {
      const sections = Array.from(document.querySelectorAll("main section")).slice(1);
      for (const section of sections) {
        section.querySelectorAll("h2, h3 + p, h2 + p, .grid > *, article, li, form, details, img, table").forEach((el) => {
          if (el.closest("[data-reveal]") || el.hasAttribute("data-reveal")) return;
          if (el.closest("[data-no-reveal]")) return;
          const parent = el.parentElement;
          const index = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
          if (el.tagName === "H2") el.setAttribute("data-reveal", "wipe");
          else if (parent?.classList.contains("grid")) {
            el.setAttribute("data-reveal", index % 2 ? "rise" : "zoom");
          } else el.setAttribute("data-reveal", "");
          (el as HTMLElement).style.setProperty("--i", String(index % 4));
        });
      }
    };
    const observe = () => {
      autoTag();
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    };
    observe();
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        observe();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    const classMo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        const el = m.target as Element;
        if (revealed.has(el) && !el.classList.contains("is-in")) el.classList.add("is-in");
      }
    });
    classMo.observe(document.body, { attributes: true, attributeFilter: ["class"], subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      classMo.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);
  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400"
    />
  );
}

/** Splits a heading into words that rise in sequence; text stays in the DOM for SEO */
export function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          <span className="split-word">
            {/* Gradient classes go on each word: background-clip breaks across inline-blocks */}
            <span className={className} style={{ animationDelay: `${delay + i * 0.06}s` }}>
              {word}
            </span>
          </span>{" "}
        </span>
      ))}
    </span>
  );
}

export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / (duration * 1000));
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/** 3D tilt that follows the pointer, with a moving glare highlight */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glare = useTransform(
    [x, y] as never,
    ([gx, gy]: number[]) =>
      `radial-gradient(420px circle at ${gx * 100}% ${gy * 100}%, rgba(147,197,253,0.18), transparent 45%)`,
  );

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={`relative [transform-style:preserve-3d] ${className ?? ""}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: glare }}
      />
    </motion.div>
  );
}

/** Pulls its child slightly towards the pointer */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 250, damping: 15 });
  const y = useSpring(0, { stiffness: 250, damping: 15 });
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      className="inline-flex"
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Moves its content vertically at a different speed to the page scroll */
export function Parallax({ children, offset = 80, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Pins the section and scrolls its cards horizontally as the user scrolls
 * down. On small screens or reduced motion it falls back to a normal grid.
 */
export function PinnedHorizontal({ children, header }: { children: ReactNode; header: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || window.innerWidth < 1024) return setDistance(0);
      setDistance(Math.max(0, track.scrollWidth - track.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const pinned = !reduce && distance > 0;

  return (
    <div ref={ref} style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}>
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : ""}>
        {header}
        <div ref={trackRef} className="mt-12 overflow-hidden lg:overflow-visible">
          <motion.div style={pinned ? { x } : undefined} className="flex flex-col gap-6 lg:flex-row">
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
