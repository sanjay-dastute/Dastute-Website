import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Member {
  name: string;
  role: string;
  practice: string;
  bio: string;
  /** Optional headshot path, e.g. /images/team/sanjay-kr.webp. Falls back to initials. */
  photo?: string;
}

const HUES = ["#3b82f6"];

export const memberId = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const initials = (name: string) =>
  name
    .replace(/^DR\.\s*/i, "")
    .replace(/\(.*?\)|,.*$/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/** Display name without honorific suffixes or nicknames, split for the card. */
const cardName = (name: string) => name.replace(/\(.*?\)|,.*$/g, "").trim();

/**
 * Leaders as a fanned hand of cards. Selecting a card straightens it and shows
 * the full profile below. Every profile is rendered (stacked in one grid cell)
 * so all bios stay in the HTML.
 */
export function TeamFan({ members }: { members: Member[] }) {
  const [active, setActive] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const total = members.length;
  const mid = (total - 1) / 2;

  const select = (i: number, scroll = false) => {
    setActive(i);
    if (scroll && window.innerWidth < 1024) {
      profileRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tilt = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div data-no-reveal>
      <div role="tablist" aria-label="Leadership team" className="tf-hand">
        {members.map((m, i) => {
          const on = i === active;
          const off = i - mid;
          return (
            <button
              key={m.name}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={memberId(m.name)}
              onClick={() => select(i, true)}
              onPointerMove={tilt}
              className={`tf-card ${on ? "is-active" : ""}`}
              style={
                {
                  "--hue": HUES[i % HUES.length],
                  "--rot": `${off * 2.5}deg`,
                  "--lift": `${Math.abs(off) * 8}px`,
                  "--n": i,
                  zIndex: on ? 10 : total - Math.abs(Math.round(off)),
                } as CSSProperties
              }
            >
              <span className="tf-card-inner">
                <span className="tf-card-top">
                  <span className="tf-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="tf-card-practice">{m.practice}</span>
                </span>
                {m.photo ? (
                  <img className="tf-card-photo" src={m.photo} alt="" loading="lazy" />
                ) : (
                  <span className="tf-card-mono" aria-hidden="true">{initials(m.name)}</span>
                )}
                <span className="tf-card-name">{cardName(m.name)}</span>
                <span className="tf-card-role">{m.role}</span>
                <span className="tf-card-shine" aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      <div ref={profileRef} className="tf-stage grid scroll-mt-24">
        {members.map((m, i) => {
          const on = i === active;
          return (
            <article
              key={m.name}
              id={memberId(m.name)}
              role="tabpanel"
              aria-hidden={!on}
              className={`tf-profile scroll-mt-28 ${on ? "is-active" : ""}`}
              style={{ "--hue": HUES[i % HUES.length] } as CSSProperties}
            >
              <div className="tf-profile-side">
                {m.photo ? (
                  <img className="tf-profile-photo" src={m.photo} alt={cardName(m.name)} loading="lazy" />
                ) : (
                  <span className="tf-profile-mono" aria-hidden="true">{initials(m.name)}</span>
                )}
                <span className="tf-chip">{m.practice}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{m.name}</h3>
                <p className="tf-profile-role mt-2">{m.role}</p>
                <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">{m.bio}</p>
                <div className="tf-pager">
                  <button type="button" tabIndex={on ? 0 : -1} aria-label="Previous leader" onClick={() => select((i - 1 + total) % total)}>
                    <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-400">
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  <button type="button" tabIndex={on ? 0 : -1} className="tf-next" onClick={() => select((i + 1) % total)}>
                    Next: {cardName(members[(i + 1) % total].name)}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
