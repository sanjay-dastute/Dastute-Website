import { useRef, useState, type CSSProperties } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { BarChart3, Bot, Handshake, Hotel, PackageOpen, Users } from "lucide-react";

interface Module {
  name: string;
  eyebrow: string;
  text: string;
  benefits: string[];
}

const ICONS = [BarChart3, Users, Handshake, PackageOpen, Bot, Hotel];
const HUES = ["#3b82f6", "#10b981", "#8b5cf6", "#06b6d4", "#f59e0b", "#f43f5e"];

/**
 * Scroll-driven stack: each module panel is sticky and slides over the one
 * before it, which scales back and dims. All copy is in the HTML; on small
 * screens (no sticky) it reads as a normal list.
 */
export function ModuleShowcase({ modules }: { modules: Module[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState(1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 30%", "end end"] });

  // Active module = the last panel whose top has reached the middle of the screen
  useMotionValueEvent(scrollYProgress, "change", () => {
    const panels = ref.current?.querySelectorAll<HTMLElement>("[data-stack-panel]") ?? [];
    let i = 0;
    panels.forEach((panel, idx) => {
      if (panel.getBoundingClientRect().top < window.innerHeight * 0.55) i = idx;
    });
    setActive(i);
    setSeen((s) => Math.max(s, i + 1));
  });

  const jump = (i: number) => {
    document.getElementById(`module-panel-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div data-no-reveal className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <nav aria-label="Platform modules" className="hidden lg:block">
        <div className="sticky top-32">
          <div className="relative pl-6">
            <span className="absolute left-0 top-0 h-full w-px bg-slate-200" />
            <motion.span
              className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-blue-500 via-violet-500 to-rose-500"
              style={{ height: "100%", scaleY: scrollYProgress }}
            />
            <ul className="space-y-1">
              {modules.map((module, i) => {
                const Icon = ICONS[i];
                return (
                  <li key={module.name}>
                    <button
                      type="button"
                      onClick={() => jump(i)}
                      style={{ "--hue": HUES[i] } as CSSProperties}
                      className={`stack-nav ${i === active ? "is-active" : ""}`}
                    >
                      <span className="ms-tab-icon">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      {module.name.replace("Dastute ", "")}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 font-mono text-xs text-slate-400">
              {String(active + 1).padStart(2, "0")} / {String(modules.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </nav>

      <div ref={ref} className="stack-track">
        {modules.map((module, i) => (
          <StackPanel
            key={module.name}
            module={module}
            index={i}
            total={modules.length}
            progress={scrollYProgress}
            revealed={reduce || i < seen}
          />
        ))}
      </div>
    </div>
  );
}

function StackPanel({
  module,
  index,
  total,
  progress,
  revealed,
}: {
  module: Module;
  index: number;
  total: number;
  progress: MotionValue<number>;
  revealed: boolean | null;
}) {
  const reduce = useReducedMotion();
  const Icon = ICONS[index];
  const start = index / total;
  // Shrink and dim each panel as later panels stack on top of it
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - (total - index - 1) * 0.035]);
  // The last panel is never covered, so it never dims (its range would also be empty)
  const isLast = index === total - 1;
  const dim = useTransform(progress, [start + 1 / total, 1], [0, reduce || isLast ? 0 : 0.55]);

  return (
    <div className="stack-slot" style={{ "--slot": index } as CSSProperties}>
      <motion.article
        id={`module-panel-${index}`}
        data-stack-panel
        style={{ "--hue": HUES[index], scale } as unknown as CSSProperties}
        className={`ms-panel stack-panel ${revealed ? "is-active" : ""}`}
      >
        <span aria-hidden="true" className="ms-watermark">
          {module.name.replace("Dastute ", "")}
        </span>
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="ms-kicker">
              {String(index + 1).padStart(2, "0")} - {module.name}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{module.eyebrow}</h3>
            <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">{module.text}</p>
            <ul className="mt-7 grid gap-3">
              {module.benefits.map((benefit, b) => (
                <li key={benefit} className="ms-benefit" style={{ transitionDelay: `${0.25 + b * 0.12}s` }}>
                  <span className="ms-check">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden="true" className="ms-orb hidden md:flex">
            <span className="ms-orb-ring" />
            <span className="ms-orb-ring ms-orb-ring-2" />
            <Icon className="relative h-14 w-14 text-white" />
          </div>
        </div>
        <motion.span aria-hidden="true" className="stack-dim" style={{ opacity: dim }} />
      </motion.article>
    </div>
  );
}
