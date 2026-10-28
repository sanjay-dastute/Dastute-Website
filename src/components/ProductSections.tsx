import { useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Factory, HeartPulse, Landmark, X } from "lucide-react";
import { Magnetic } from "@/components/motion";

const INDUSTRY_ICONS = [Factory, HeartPulse, Landmark];
const INDUSTRY_HUES = ["#f59e0b", "#10b981", "#3b82f6"];

/** Expanding panels: one industry is open, the others collapse to vertical titles. */
export function IndustryPanels({ items }: { items: { title: string; description: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div data-reveal className="industry-panels">
      {items.map((item, i) => {
        const Icon = INDUSTRY_ICONS[i % INDUSTRY_ICONS.length];
        const active = i === open;
        return (
          <article
            key={item.title}
            style={{ "--hue": INDUSTRY_HUES[i % INDUSTRY_HUES.length] } as CSSProperties}
            className={`industry-panel ${active ? "is-open" : ""}`}
            onPointerEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            onClick={() => setOpen(i)}
            tabIndex={0}
          >
            <span aria-hidden="true" className="industry-pattern" />
            <span aria-hidden="true" className="industry-num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="industry-vertical">
              {item.title}
            </span>
            <div className="industry-body">
              <span className="industry-icon">
                <Icon aria-hidden="true" className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300">{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

// Drawn from the section copy: the pains buyers face with incumbent platforms
const LEGACY_PAINS = [
  "High total cost of ownership",
  "Slow implementation cycles",
  "Vendor lock-in",
  "Heavy customisation dependency",
  "Poor module interoperability",
  "Complex user experiences",
];

export function CompeteSplit({ points }: { points: string[] }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <div data-reveal="left" className="compete-col compete-legacy">
        <p className="compete-label">Traditional enterprise platforms</p>
        <ul className="mt-6 space-y-3">
          {LEGACY_PAINS.map((pain, i) => (
            <li key={pain} className="compete-pain" style={{ "--d": `${0.3 + i * 0.15}s` } as CSSProperties}>
              <span className="compete-x">
                <X aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              <span className="compete-strike">{pain}</span>
            </li>
          ))}
        </ul>
      </div>
      <div data-reveal="right" className="compete-col compete-dastute">
        <p className="compete-label text-blue-300">The Dastute Enterprise Platform</p>
        <ul className="mt-6 space-y-4">
          {points.map((point, i) => (
            <li key={point} className="compete-win" style={{ "--d": `${0.5 + i * 0.18}s` } as CSSProperties}>
              <span className="compete-arrow">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ROADMAP = ["Today", "Expansion", "AI adoption", "Compliance changes", "New business models", "Deeper automation"];

export function FutureRoadmap() {
  return (
    <>
      <div data-reveal className="roadmap" aria-hidden="true">
        <span className="roadmap-line" />
        {ROADMAP.map((step, i) => (
          <span key={step} className="roadmap-step" style={{ "--d": `${0.2 + i * 0.18}s` } as CSSProperties}>
            <span className="roadmap-dot" />
            {step}
          </span>
        ))}
      </div>
      <div data-reveal className="mt-12 flex flex-wrap justify-center gap-3">
        <Magnetic>
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            Request a Demo <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Magnetic>
        <a href="#modules" className="btn-glass inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold">
          Revisit the Modules
        </a>
      </div>
    </>
  );
}

export function ProductFaq({
  items,
  title = "Frequently Asked Questions",
  intro = "Still deciding? Our team can walk you through the platform against your own workflows.",
}: {
  items: { question: string; answer: string }[];
  title?: string;
  intro?: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <div className="lg:sticky lg:top-32">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600">/ FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            {intro}
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all">
            Talk to a specialist <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((faq, i) => (
          <details key={faq.question} className="faq-item group" data-reveal style={{ "--i": i % 4 } as CSSProperties}>
            <summary>
              <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 text-base font-semibold text-slate-900 md:text-lg">{faq.question}</span>
              <span aria-hidden="true" className="faq-plus" />
            </summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
