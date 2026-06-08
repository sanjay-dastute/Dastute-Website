const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ============ DATA ============ */

const PILLARS = [
  {
    id: "synthetic",
    idx: "01",
    name: "Synthetic Media",
    tag: "Deepfakes · Voice Clones · Generated Images",
    blurb:
      "Forensic-grade analysis across video, image, and audio — including live streams, not just uploaded files.",
    signals: [
      "Face-swap forensics",
      "Voice-clone forensics",
      "Generated image artifacts",
      "Live-stream deepfake analysis",
    ],
  },
  {
    id: "identity",
    idx: "02",
    name: "Synthetic Identity",
    tag: "Fake Accounts · Bots · Coordinated Networks",
    blurb:
      "Behavioral graphs and identity-coherence scoring expose bot farms and inauthentic persona networks at the account, network, and infrastructure level.",
    signals: [
      "Identity coherence score",
      "Behavioral fingerprints",
      "Cross-platform linking",
      "Infrastructure clustering",
    ],
  },
  {
    id: "language",
    idx: "03",
    name: "Language Forensics",
    tag: "AI-Written Text · Misinformation · Narratives",
    blurb:
      "Detects machine-generated text, traces narrative propagation, and maps coordinated messaging campaigns across 40+ languages.",
    signals: [
      "Machine-text classifier",
      "Narrative tracking",
      "Campaign clustering",
      "Semantic manipulation",
    ],
  },
  {
    id: "criminal",
    idx: "04",
    name: "Criminal Signals",
    tag: "Trafficking · Fraud · Radicalisation",
    blurb:
      "Signal-fusion layer that surfaces organised criminal activity hidden within ordinary platform traffic — ethically reviewed before any escalation.",
    signals: [
      "Trafficking lexicons",
      "Romance & investment fraud",
      "Radicalisation pathways",
      "Extortion patterns",
    ],
  },
  {
    id: "illegal",
    idx: "05",
    name: "Illegal Content",
    tag: "CSAM · NCII · Deepfake Pornography",
    blurb:
      "Hash-only, zero-knowledge evidence handling for the most sensitive content categories. Content is never stored or processed by the platform.",
    signals: [
      "Perceptual hash matching",
      "AI-generated CSAM detection",
      "Non-consensual imagery",
      "Trauma-informed workflow",
    ],
  },
  {
    id: "monitor",
    idx: "06",
    name: "Live Operations",
    tag: "Real-Time Dashboard · Case Management · Evidence",
    blurb:
      "The operational layer: a unified dashboard, case workflow, and evidence pipeline that turns detections into defensible action.",
    signals: [
      "Live threat feed",
      "Case management",
      "Alert routing",
      "Evidence packaging",
    ],
  },
];

const MOAT = [
  {
    k: "01",
    t: "Unified Threat Graph",
    d: "Every signal from every pillar writes to one continuously-updated graph. What appears as six separate alerts elsewhere is resolved into a single coordinated operation here.",
  },
  {
    k: "02",
    t: "Compound Threat Scoring",
    d: "Single-signal alerts mean noise. DeepShield escalates only when the graph shows convergence across multiple pillars — dramatically higher signal, dramatically fewer false positives.",
  },
  {
    k: "03",
    t: "Model Attribution",
    d: "We don't just say content is synthetic. We identify the family of the generator that produced it — linking separate incidents back to shared adversary infrastructure.",
  },
  {
    k: "04",
    t: "Forensic Evidence by Default",
    d: "Every decision is cryptographically anchored the moment it is made. Our output is admissible evidence — not a dashboard screenshot.",
  },
  {
    k: "05",
    t: "Native-Language at Core",
    d: "40+ languages modelled natively, not machine-translated. Non-English manipulation is not a footnote — it is where most of the action is.",
  },
  {
    k: "06",
    t: "Sovereign Deployment",
    d: "Full air-gapped operation inside a government or enterprise perimeter. No data egress. No third-party cloud dependency.",
  },
];

const JURISDICTIONS = [
  { code: "EU", law: "Digital Services Act" },
  { code: "IN", law: "IT Act 2000" },
  { code: "UK", law: "Online Safety Act" },
  { code: "US", law: "Federal Rules of Evidence" },
  { code: "SG", law: "POFMA" },
  { code: "AU", law: "Online Safety Act 2021" },
];

const METRICS = [
  { v: "6", u: "intelligence pillars", l: "correlated in one graph" },
  { v: "40+", u: "languages", l: "natively modelled" },
  { v: "<1s", u: "critical-signal latency", l: "hash & live-stream tier" },
  { v: "6", u: "regulatory regimes", l: "evidence-package ready" },
];

/* Scan subjects — each has a synthetic SVG face + ground truth */
const SUBJECTS = [
  {
    id: "SBJ-A41",
    verdict: "AUTHENTIC",
    conf: 0.97,
    model: null,
    hue: 35,
    face: "f1",
    signals: { geo: 0.04, tex: 0.06, rppg: 0.91, temp: 0.03, prov: 0.98 },
    attr: "Camera-captured · EXIF verified",
    loc: "Manchester, UK",
  },
  {
    id: "SBJ-B18",
    verdict: "DEEPFAKE",
    conf: 0.94,
    model: "Face-Swap · family A",
    hue: 200,
    face: "f2",
    signals: { geo: 0.83, tex: 0.77, rppg: 0.12, temp: 0.69, prov: 0.22 },
    attr: "Face-swap boundary artifacts · rPPG absent",
    loc: "São Paulo, BR",
  },
  {
    id: "SBJ-C07",
    verdict: "SYNTHETIC",
    conf: 0.89,
    model: "Diffusion · family C",
    hue: 280,
    face: "f3",
    signals: { geo: 0.71, tex: 0.88, rppg: 0.04, temp: 0.41, prov: 0.08 },
    attr: "Fully generated image · frequency signature detected",
    loc: "Dubai, AE",
  },
  {
    id: "SBJ-D29",
    verdict: "AUTHENTIC",
    conf: 0.93,
    model: null,
    hue: 150,
    face: "f4",
    signals: { geo: 0.09, tex: 0.08, rppg: 0.86, temp: 0.07, prov: 0.92 },
    attr: "Live capture · physiological signal present",
    loc: "Bengaluru, IN",
  },
  {
    id: "SBJ-E63",
    verdict: "DEEPFAKE",
    conf: 0.91,
    model: "Lip-sync · family B",
    hue: 20,
    face: "f5",
    signals: { geo: 0.38, tex: 0.32, rppg: 0.44, temp: 0.87, prov: 0.35 },
    attr: "Lip-audio desynchronisation · temporal breaks",
    loc: "Lagos, NG",
  },
  {
    id: "SBJ-F12",
    verdict: "AUTHENTIC",
    conf: 0.95,
    model: null,
    hue: 330,
    face: "f6",
    signals: { geo: 0.05, tex: 0.11, rppg: 0.88, temp: 0.06, prov: 0.94 },
    attr: "Broadcast source · chain-of-custody intact",
    loc: "Berlin, DE",
  },
];

/* ============ SVG FACE ILLUSTRATIONS ============ */
function SyntheticFace({ variant = "f1", hue = 200 }) {
  const skin = `oklch(0.68 0.09 ${hue})`;
  const shade = `oklch(0.45 0.08 ${hue})`;
  const hair = `oklch(0.22 0.03 ${(hue + 40) % 360})`;
  const lip = `oklch(0.55 0.14 ${(hue + 20) % 360})`;
  const eye = `oklch(0.35 0.06 ${(hue + 120) % 360})`;
  const common = (
    <>
      <defs>
        <radialGradient id={`sk-${variant}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={skin} />
          <stop offset="100%" stopColor={shade} />
        </radialGradient>
      </defs>
    </>
  );
  // 6 variants — different head/hair/jaw
  const V = {
    f1: (
      <>
        <path
          d="M60 150 Q50 90 100 60 Q150 50 180 80 Q200 110 190 160 Q180 210 140 220 Q90 225 70 200 Z"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M60 95 Q65 40 130 40 Q195 45 200 100 Q180 75 150 72 Q110 70 85 80 Q70 88 60 95"
          fill={hair}
        />
        <ellipse cx="100" cy="130" rx="7" ry="4" fill={eye} />
        <ellipse cx="150" cy="130" rx="7" ry="4" fill={eye} />
        <path
          d="M115 175 Q125 182 135 175"
          stroke={lip}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M122 150 Q125 158 128 150"
          stroke={shade}
          strokeWidth="1.5"
          fill="none"
        />
      </>
    ),
    f2: (
      <>
        <path
          d="M55 140 Q55 85 120 55 Q185 55 195 130 Q200 190 150 215 Q100 220 70 195 Z"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M58 100 Q50 50 130 35 Q205 35 200 110 Q185 90 160 80 Q100 75 78 95 Z"
          fill={hair}
        />
        <path d="M45 115 Q60 130 58 150" fill={hair} />
        <ellipse cx="105" cy="128" rx="6" ry="3.5" fill={eye} />
        <ellipse cx="155" cy="128" rx="6" ry="3.5" fill={eye} />
        <path
          d="M112 172 Q128 180 142 172"
          stroke={lip}
          strokeWidth="3.5"
          fill="none"
        />
      </>
    ),
    f3: (
      <>
        <ellipse
          cx="130"
          cy="135"
          rx="75"
          ry="90"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M60 100 Q60 35 130 35 Q205 40 200 100 Q180 65 140 65 Q85 68 60 100"
          fill={hair}
        />
        <ellipse cx="100" cy="130" rx="8" ry="5" fill={eye} />
        <ellipse cx="160" cy="130" rx="8" ry="5" fill={eye} />
        <path
          d="M120 175 Q130 180 140 175"
          stroke={lip}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M126 148 Q130 155 134 148"
          stroke={shade}
          strokeWidth="1.5"
          fill="none"
        />
      </>
    ),
    f4: (
      <>
        <path
          d="M65 145 Q60 90 120 60 Q175 58 195 110 Q200 180 150 215 Q95 220 75 200 Z"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M55 110 Q40 45 130 40 Q210 50 205 115 Q200 130 210 160 Q200 120 180 95 Q140 70 90 90 Q65 100 55 110"
          fill={hair}
        />
        <ellipse cx="103" cy="132" rx="6" ry="4" fill={eye} />
        <ellipse cx="153" cy="132" rx="6" ry="4" fill={eye} />
        <path
          d="M117 178 Q128 184 140 178"
          stroke={lip}
          strokeWidth="3"
          fill="none"
        />
      </>
    ),
    f5: (
      <>
        <path
          d="M60 150 Q55 85 115 60 Q175 55 190 120 Q195 185 145 215 Q90 220 70 195 Z"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M60 90 Q60 45 130 40 Q200 45 195 105 Q170 80 130 78 Q90 80 65 100 Z"
          fill={hair}
        />
        <ellipse cx="102" cy="130" rx="7" ry="4" fill={eye} />
        <ellipse cx="152" cy="130" rx="7" ry="4" fill={eye} />
        <path
          d="M115 175 Q128 180 140 175"
          stroke={lip}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M80 160 Q85 170 95 165"
          stroke={shade}
          strokeWidth="1"
          fill="none"
        />
      </>
    ),
    f6: (
      <>
        <path
          d="M62 145 Q55 85 120 58 Q185 56 195 125 Q200 195 150 215 Q95 222 72 195 Z"
          fill={`url(#sk-${variant})`}
        />
        <path
          d="M50 100 Q45 40 135 38 Q210 42 208 110 Q215 145 200 170 Q200 115 170 85 Q120 68 85 85 Q60 95 50 100"
          fill={hair}
        />
        <ellipse cx="104" cy="130" rx="7" ry="4" fill={eye} />
        <ellipse cx="154" cy="130" rx="7" ry="4" fill={eye} />
        <path
          d="M115 177 Q128 184 140 177"
          stroke={lip}
          strokeWidth="3"
          fill="none"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 260 260" style={{ width: "100%", height: "100%" }}>
      {common}
      {V[variant]}
    </svg>
  );
}

/* ============ LIVE FACE SCANNER ============ */

function FaceScanner() {
  const [subjectIdx, setSubjectIdx] = useState(0);
  const [phase, setPhase] = useState(0); // 0 idle / 1 landmarks / 2 frequency / 3 rppg / 4 temporal / 5 verdict
  const [scanY, setScanY] = useState(0);
  const [landmarks, setLandmarks] = useState([]);
  const [freqBars, setFreqBars] = useState(Array(24).fill(0));
  const [pulse, setPulse] = useState([]);
  const [log, setLog] = useState([]);

  const subject = SUBJECTS[subjectIdx];

  // Phase timing: cycle through phases
  useEffect(() => {
    const ranges = [800, 1600, 1800, 1800, 1600, 2400]; // ms per phase
    let p = 0;
    setPhase(p);
    setLog([]);
    const advance = () => {
      p += 1;
      if (p > 5) {
        // next subject
        setSubjectIdx((i) => (i + 1) % SUBJECTS.length);
        return;
      }
      setPhase(p);
      const msgs = [
        null,
        `>> FACE LOCK · 68 landmarks anchored · ${subject.id}`,
        `>> SPECTRAL SWEEP · DCT residuals · ${(subject.signals.tex * 100).toFixed(0)}% anomaly`,
        `>> rPPG · blood-flow micro-signal · ${subject.signals.rppg > 0.5 ? "present" : "absent"}`,
        `>> TEMPORAL · frame coherence · ${(subject.signals.temp * 100).toFixed(0)}% drift`,
        `>> VERDICT · ${subject.verdict} @ ${(subject.conf * 100).toFixed(0)}%${subject.model ? " · " + subject.model : ""}`,
      ];
      if (msgs[p])
        setLog((L) => [...L, { id: Math.random(), t: msgs[p], phase: p }]);
      timer = setTimeout(advance, ranges[p] || 2400);
    };
    let timer = setTimeout(advance, ranges[0]);
    return () => clearTimeout(timer);
  }, [subjectIdx]);

  // Animated overlays per phase
  useEffect(() => {
    let raf,
      t = 0;
    const tick = () => {
      t += 1;
      // scan line 0-100
      setScanY((prev) => (prev + 1.2) % 100);
      // landmarks (phase 1+)
      if (phase >= 1) {
        if (landmarks.length < 38) {
          setLandmarks((L) =>
            L.length < 38 ? [...L, randomLandmark(L.length)] : L,
          );
        }
      }
      // freq bars (phase 2+)
      if (phase >= 2) {
        setFreqBars((bars) =>
          bars.map((v, i) => {
            const target =
              (subject.signals.tex * 0.6 + 0.2) *
              (0.5 + 0.5 * Math.sin(t * 0.1 + i * 0.4));
            return (
              v + (Math.abs(target) - v) * 0.15 + (Math.random() - 0.5) * 0.03
            );
          }),
        );
      }
      // pulse (phase 3+)
      if (phase >= 3) {
        setPulse((p) => {
          const val =
            subject.signals.rppg > 0.5
              ? 0.5 + 0.35 * Math.sin(t * 0.22) + (Math.random() - 0.5) * 0.05
              : 0.5 + (Math.random() - 0.5) * 0.08; // flat-ish
          return [...p, val].slice(-80);
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, subjectIdx]);

  // Reset visuals on subject change
  useEffect(() => {
    setLandmarks([]);
    setFreqBars(Array(24).fill(0));
    setPulse([]);
  }, [subjectIdx]);

  const verdictColor =
    subject.verdict === "AUTHENTIC"
      ? "oklch(0.78 0.17 145)"
      : subject.verdict === "DEEPFAKE"
        ? "oklch(0.70 0.22 20)"
        : "oklch(0.74 0.19 50)";

  return (
    <div
      style={{
        border: "1px solid var(--line-2)",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(10,13,18,0.7)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span className="chip">
            <span className="dot" />
            LIVE · FACIAL FORENSICS
          </span>
          <span className="mono hud-tick">
            SUBJECT {subject.id} · {subject.loc}
          </span>
        </div>
        <div className="mono hud-tick">
          {
            ["IDLE", "LANDMARKS", "SPECTRAL", "rPPG", "TEMPORAL", "VERDICT"][
              phase
            ]
          }{" "}
          · {phase + 1}/6
        </div>
      </div>

      <div className="scanner-grid">
        {/* LEFT — face stage */}
        <div
          style={{
            position: "relative",
            borderRight: "1px solid var(--line)",
            overflow: "hidden",
          }}
        >
          {/* face */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              key={subject.id}
              style={{
                width: "62%",
                aspectRatio: "1/1",
                position: "relative",
                animation: "fadeZoom .6s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-6%",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, oklch(0.65 0.14 ${subject.hue} / 0.25), transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />
              <SyntheticFace variant={subject.face} hue={subject.hue} />
              {/* reticle brackets */}
              {["tl", "tr", "bl", "br"].map((k, i) => (
                <div
                  key={k}
                  style={{
                    position: "absolute",
                    width: 26,
                    height: 26,
                    [i < 2 ? "top" : "bottom"]: -8,
                    [i % 2 === 0 ? "left" : "right"]: -8,
                    borderTop: i < 2 ? "2px solid var(--accent)" : "none",
                    borderBottom: i >= 2 ? "2px solid var(--accent)" : "none",
                    borderLeft:
                      i % 2 === 0 ? "2px solid var(--accent)" : "none",
                    borderRight:
                      i % 2 === 1 ? "2px solid var(--accent)" : "none",
                  }}
                />
              ))}
              {/* scan line */}
              {phase > 0 && phase < 5 && (
                <div
                  style={{
                    position: "absolute",
                    left: -10,
                    right: -10,
                    top: `${scanY}%`,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, var(--accent), transparent)`,
                    boxShadow: "0 0 14px var(--accent)",
                    pointerEvents: "none",
                  }}
                />
              )}
              {/* landmarks */}
              {phase >= 1 && (
                <svg
                  viewBox="0 0 100 100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  }}
                >
                  {landmarks.map((l, i) => (
                    <g key={i}>
                      <circle
                        cx={l.x}
                        cy={l.y}
                        r="0.9"
                        fill="var(--accent)"
                        opacity="0.9"
                      />
                      {l.link && landmarks[l.link] && (
                        <line
                          x1={l.x}
                          y1={l.y}
                          x2={landmarks[l.link].x}
                          y2={landmarks[l.link].y}
                          stroke="var(--accent)"
                          strokeWidth="0.25"
                          opacity="0.5"
                        />
                      )}
                    </g>
                  ))}
                </svg>
              )}
              {/* verdict ring */}
              {phase === 5 && (
                <div
                  style={{
                    position: "absolute",
                    inset: "-8%",
                    borderRadius: "50%",
                    border: `2px solid ${verdictColor}`,
                    boxShadow: `0 0 60px ${verdictColor}, inset 0 0 30px ${verdictColor}44`,
                    animation: "pulseRing .8s ease",
                  }}
                />
              )}
            </div>
          </div>

          {/* overlay meta */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 14,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div className="mono hud-tick">▸ FACE ID: {subject.id}</div>
            <div className="mono hud-tick">
              ▸ PIPELINE: PILLAR 01 · FORENSIC STACK
            </div>
            <div className="mono hud-tick">
              ▸ FRAME:{" "}
              {(subjectIdx * 347 + phase * 53).toString().padStart(6, "0")}
            </div>
          </div>
          {phase === 5 && (
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                right: 14,
                padding: "14px 16px",
                borderRadius: 6,
                border: `1px solid ${verdictColor}`,
                background: `${verdictColor.replace(")", " / 0.10)")}`,
                animation: "slideUp .4s ease",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: ".18em",
                  color: verdictColor,
                  textTransform: "uppercase",
                }}
              >
                DEEPSHIELD VERDICT
              </div>
              <div
                className="display"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  marginTop: 4,
                  color: "#fff",
                }}
              >
                {subject.verdict} · {(subject.conf * 100).toFixed(0)}%
              </div>
              <div
                style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 4 }}
              >
                {subject.attr}
              </div>
            </div>
          )}

          {/* pagination dots */}
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              display: "flex",
              gap: 5,
            }}
          >
            {SUBJECTS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setSubjectIdx(i)}
                style={{
                  width: 22,
                  height: 4,
                  borderRadius: 2,
                  border: "none",
                  background:
                    i === subjectIdx
                      ? "var(--accent)"
                      : "rgba(140,180,220,0.22)",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — telemetry */}
        <div
          style={{
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 8 }}>
              GEOMETRIC · TEXTURE · PROVENANCE
            </div>
            <SigRow label="Geometric drift" v={subject.signals.geo} high />
            <SigRow label="Texture anomaly" v={subject.signals.tex} high />
            <SigRow
              label="rPPG blood signal"
              v={subject.signals.rppg}
              high={false}
              invert
            />
            <SigRow label="Temporal coherence" v={subject.signals.temp} high />
            <SigRow
              label="Provenance score"
              v={subject.signals.prov}
              high={false}
              invert
            />
          </div>

          <div>
            <div className="mono hud-tick" style={{ marginBottom: 6 }}>
              FREQUENCY SPECTRUM · DCT RESIDUALS
            </div>
            <div
              style={{
                display: "flex",
                gap: 3,
                height: 48,
                alignItems: "end",
                padding: "4px 6px",
                background: "rgba(130,200,240,0.04)",
                border: "1px solid var(--line)",
                borderRadius: 4,
              }}
            >
              {freqBars.map((v, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${Math.max(3, Math.abs(v) * 100)}%`,
                    background: `linear-gradient(180deg, var(--accent), ${subject.signals.tex > 0.5 ? "oklch(0.70 0.22 20)" : "var(--accent-2)"})`,
                    opacity: 0.85,
                    borderRadius: 1,
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mono hud-tick" style={{ marginBottom: 6 }}>
              rPPG · PHYSIOLOGICAL PULSE
            </div>
            <svg
              viewBox="0 0 200 50"
              style={{
                width: "100%",
                height: 50,
                background: "rgba(130,200,240,0.04)",
                border: "1px solid var(--line)",
                borderRadius: 4,
              }}
            >
              <polyline
                points={pulse
                  .map((v, i) => `${(i / 80) * 200},${50 - v * 48}`)
                  .join(" ")}
                fill="none"
                stroke={
                  subject.signals.rppg > 0.5
                    ? "oklch(0.78 0.18 145)"
                    : "oklch(0.70 0.22 20)"
                }
                strokeWidth="1.2"
              />
            </svg>
          </div>

          <div
            style={{
              flex: 1,
              minHeight: 80,
              borderTop: "1px solid var(--line)",
              paddingTop: 10,
            }}
          >
            <div className="mono hud-tick" style={{ marginBottom: 6 }}>
              PIPELINE LOG
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {log.map((l) => (
                <div
                  key={l.id}
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    color: l.phase === 5 ? verdictColor : "var(--ink-2)",
                    animation: "slideIn .3s ease",
                  }}
                >
                  {l.t}
                </div>
              ))}
              {log.length === 0 && (
                <div className="mono hud-tick">awaiting lock...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* footer strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
          borderTop: "1px solid var(--line)",
          background: "rgba(130,200,240,0.03)",
        }}
      >
        <div className="mono hud-tick">SIMULATED LIVE SCAN · REFRESH 10s</div>
        <div className="mono hud-tick">
          EVIDENCE-HASH:{" "}
          <span style={{ color: "var(--accent)" }}>
            0x
            {(subject.id + phase)
              .split("")
              .reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
              .toString(16)
              .padStart(8, "0")}
          </span>
          …
        </div>
      </div>
    </div>
  );
}

function randomLandmark(i) {
  // fake 68-landmark positions roughly spread on a face oval
  const ring = [
    { x: 30, y: 55 },
    { x: 28, y: 62 },
    { x: 27, y: 70 },
    { x: 29, y: 78 },
    { x: 33, y: 84 },
    { x: 40, y: 88 },
    { x: 50, y: 90 },
    { x: 60, y: 88 },
    { x: 67, y: 84 },
    { x: 71, y: 78 },
    { x: 73, y: 70 },
    { x: 72, y: 62 },
    { x: 70, y: 55 },
    { x: 38, y: 50 },
    { x: 45, y: 47 },
    { x: 55, y: 47 },
    { x: 62, y: 50 },
    { x: 42, y: 57 },
    { x: 48, y: 56 },
    { x: 52, y: 56 },
    { x: 58, y: 57 }, // eyes
    { x: 50, y: 63 },
    { x: 48, y: 68 },
    { x: 52, y: 68 }, // nose
    { x: 45, y: 75 },
    { x: 50, y: 77 },
    { x: 55, y: 75 }, // mouth
    { x: 40, y: 45 },
    { x: 60, y: 45 },
    { x: 35, y: 60 },
    { x: 65, y: 60 },
    { x: 46, y: 73 },
    { x: 54, y: 73 },
    { x: 44, y: 79 },
    { x: 56, y: 79 },
    { x: 38, y: 65 },
    { x: 62, y: 65 },
    { x: 50, y: 52 },
  ];
  const p = ring[i % ring.length];
  return {
    x: p.x + (Math.random() - 0.5) * 1.5,
    y: p.y + (Math.random() - 0.5) * 1.5,
    link: i > 0 ? i - 1 : null,
  };
}

function SigRow({ label, v, high, invert }) {
  // "high" threshold: red when v high (bad) unless invert
  const isBad = invert ? v < 0.4 : v > 0.5;
  const color = isBad ? "oklch(0.70 0.22 20)" : "oklch(0.78 0.17 145)";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 80px 34px",
        gap: 10,
        alignItems: "center",
        padding: "5px 0",
      }}
    >
      <div style={{ fontSize: 12, color: "var(--ink-2)" }}>{label}</div>
      <div
        style={{
          position: "relative",
          height: 6,
          borderRadius: 3,
          background: "rgba(140,180,220,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: `${Math.min(100, v * 100)}%`,
            background: color,
            transition: "width .6s ease",
          }}
        />
      </div>
      <div className="mono" style={{ fontSize: 10, color, textAlign: "right" }}>
        {(v * 100).toFixed(0)}%
      </div>
    </div>
  );
}

/* ============ 3D ORBIT HERO ============ */

function OrbitCore({ onSelect, selected }) {
  const wrapRef = useRef();
  const [tilt, setTilt] = useState({ x: -18, y: 22 });
  const [hovered, setHovered] = useState(null);
  const speed = window.__TWEAKS__?.rotateSpeed || 28;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2,
        cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width,
        dy = (e.clientY - cy) / r.height;
      setTilt({ x: -18 + dy * -14, y: 22 + dx * 30 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const nodes = PILLARS.map((p, i) => ({
    ...p,
    a: (i / PILLARS.length) * Math.PI * 2,
    i,
  }));

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        perspective: "1400px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "10%",
            border: "1px solid rgba(130,200,240,0.18)",
            borderRadius: "50%",
            transform: "rotateX(75deg)",
            boxShadow: "0 0 40px -10px rgba(130,200,240,0.25) inset",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "20%",
            border: "1px dashed rgba(130,200,240,0.14)",
            borderRadius: "50%",
            transform: "rotateX(75deg) rotateZ(30deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0%",
            border: "1px solid rgba(130,200,240,0.08)",
            borderRadius: "50%",
            transform: "rotateX(75deg) rotateZ(60deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "10%",
            transformStyle: "preserve-3d",
            transform: "rotateX(75deg)",
            animation: `spinRing ${speed}s linear infinite`,
          }}
        >
          {nodes.map((n) => {
            const cx = 50 + 50 * Math.cos(n.a);
            const cy = 50 + 50 * Math.sin(n.a);
            const active = selected === n.id || hovered === n.id;
            return (
              <button
                key={n.id}
                onClick={() => onSelect(n.id)}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                className="mono"
                style={{
                  position: "absolute",
                  left: `${cx}%`,
                  top: `${cy}%`,
                  transform: `translate(-50%,-50%) rotateX(-75deg)`,
                  width: active ? 56 : 40,
                  height: active ? 56 : 40,
                  borderRadius: "50%",
                  background: active ? "var(--accent)" : "rgba(10,14,20,0.9)",
                  color: active ? "#04131a" : "var(--ink)",
                  border: `1px solid ${active ? "var(--accent)" : "rgba(130,200,240,0.35)"}`,
                  boxShadow: active
                    ? "0 0 40px -5px var(--accent), inset 0 0 20px rgba(255,255,255,.35)"
                    : "0 0 20px -5px rgba(130,200,240,0.25)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .25s",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {n.idx}
              </button>
            );
          })}
        </div>

        <div
          style={{
            position: "absolute",
            inset: "32%",
            transformStyle: "preserve-3d",
            animation: `coreSpin ${speed * 1.4}s linear infinite`,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid rgba(130,200,240,0.35)",
                borderRadius: "50%",
                transform: `rotateY(${(360 / 8) * i}deg)`,
                background:
                  "linear-gradient(180deg, rgba(130,200,240,0.04), rgba(130,200,240,0.00))",
              }}
            />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={"h" + i}
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid rgba(130,200,240,0.18)",
                borderRadius: "50%",
                transform: `rotateX(90deg) rotateY(${(360 / 4) * i}deg)`,
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              inset: "20%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
              filter: "blur(18px)",
              opacity: 0.55,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "35%",
              borderRadius: "50%",
              background: "var(--accent)",
              filter: "blur(8px)",
            }}
          />
        </div>
      </div>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {["TL", "TR", "BL", "BR"].map((p, i) => (
          <div
            key={p}
            style={{
              position: "absolute",
              [i < 2 ? "top" : "bottom"]: 12,
              [i % 2 === 0 ? "left" : "right"]: 12,
              width: 22,
              height: 22,
              borderTop: i < 2 ? "1px solid var(--line-2)" : "none",
              borderBottom: i >= 2 ? "1px solid var(--line-2)" : "none",
              borderLeft: i % 2 === 0 ? "1px solid var(--line-2)" : "none",
              borderRight: i % 2 === 1 ? "1px solid var(--line-2)" : "none",
            }}
          />
        ))}
        <div
          className="mono hud-tick"
          style={{ position: "absolute", top: 14, left: 44 }}
        >
          SYS://DEEPSHIELD.CORE
        </div>
        <div
          className="mono hud-tick"
          style={{ position: "absolute", bottom: 14, right: 44 }}
        >
          TG:// ACTIVE · 6 PILLARS
        </div>
      </div>
    </div>
  );
}

/* ============ THREAT GRAPH ============ */

function ThreatGraph() {
  const canvasRef = useRef();
  const stateRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = c.getBoundingClientRect();
      c.width = r.width * dpr;
      c.height = r.height * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => c.width / dpr,
      H = () => c.height / dpr;
    const nodes = [];
    const pillarColors = [
      "#5fe3ff",
      "#9ab4ff",
      "#bde66c",
      "#ffb36b",
      "#ff7a8a",
      "#c8a2ff",
    ];
    PILLARS.forEach((p, i) => {
      nodes.push({
        id: "P" + i,
        type: "pillar",
        idx: p.idx,
        label: p.name,
        color: pillarColors[i],
        x: 0,
        y: 0,
        r: 14,
      });
    });
    for (let i = 0; i < 34; i++) {
      nodes.push({
        id: "N" + i,
        type: Math.random() < 0.3 ? "content" : "account",
        x: Math.random() * 600 - 300,
        y: Math.random() * 400 - 200,
        vx: 0,
        vy: 0,
        r: 3 + Math.random() * 2,
        flagged: Math.random() < 0.55 ? Math.floor(Math.random() * 6) : -1,
      });
    }
    const edges = [];
    nodes
      .filter((n) => n.type !== "pillar")
      .forEach((n) => {
        if (n.flagged >= 0)
          edges.push({
            a: "P" + n.flagged,
            b: n.id,
            strong: Math.random() < 0.4,
          });
        if (Math.random() < 0.4) {
          const other = nodes[6 + Math.floor(Math.random() * 34)];
          if (other && other.id !== n.id)
            edges.push({ a: other.id, b: n.id, strong: false });
        }
      });
    stateRef.current = { nodes, edges, t: 0 };
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    let raf;
    const tick = () => {
      const s = stateRef.current;
      s.t += 1;
      const w = W(),
        h = H(),
        cx = w / 2,
        cy = h / 2;
      nodes
        .filter((n) => n.type === "pillar")
        .forEach((n, i) => {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2 + s.t * 0.0015;
          const R = Math.min(w, h) * 0.36;
          n.x = cx + R * Math.cos(a);
          n.y = cy + R * Math.sin(a);
        });
      const others = nodes.filter((n) => n.type !== "pillar");
      for (const n of others) {
        n.vx += (cx - n.x) * 0.0006;
        n.vy += (cy - n.y) * 0.0006;
        if (n.flagged >= 0) {
          const p = byId["P" + n.flagged];
          const dx = p.x - n.x,
            dy = p.y - n.y;
          const d = Math.hypot(dx, dy) + 0.01;
          const f = 0.0008 * (d - 90);
          n.vx += (dx / d) * f * 100;
          n.vy += (dy / d) * f * 100;
        }
        for (const m of others) {
          if (m === n) continue;
          const dx = n.x - m.x,
            dy = n.y - m.y;
          const d2 = dx * dx + dy * dy + 40;
          const f = 60 / d2;
          n.vx += dx * f * 0.02;
          n.vy += dy * f * 0.02;
        }
        n.vx *= 0.86;
        n.vy *= 0.86;
        n.x += n.vx;
        n.y += n.vy;
      }
      const ctx = c.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(140,180,220,0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (const e of s.edges) {
        const A = byId[e.a],
          B = byId[e.b];
        if (!A || !B) continue;
        ctx.strokeStyle = e.strong
          ? "rgba(130,200,240,0.35)"
          : "rgba(130,200,240,0.10)";
        ctx.lineWidth = e.strong ? 1.2 : 0.6;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
      }
      const phase = (s.t % 120) / 120;
      for (const e of s.edges.filter((e) => e.strong)) {
        const A = byId[e.a],
          B = byId[e.b];
        if (!A || !B) continue;
        const px = A.x + (B.x - A.x) * phase,
          py = A.y + (B.y - A.y) * phase;
        ctx.fillStyle = A.color || "#5fe3ff";
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const n of others) {
        ctx.fillStyle =
          n.flagged >= 0 ? nodes[n.flagged].color : "rgba(200,210,225,0.5)";
        ctx.globalAlpha = n.flagged >= 0 ? 0.9 : 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (const n of nodes.filter((n) => n.type === "pillar")) {
        const g = ctx.createRadialGradient(n.x, n.y, 2, n.x, n.y, 36);
        g.addColorStop(0, n.color + "88");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 36, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#0a0e13";
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = n.color;
        ctx.font = "600 10px JetBrains Mono, monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.idx, n.x, n.y);
        ctx.fillStyle = "rgba(200,215,230,0.85)";
        ctx.font = "500 10px Inter, sans-serif";
        ctx.fillText(n.label.toUpperCase(), n.x, n.y + 26);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [events, setEvents] = useState([]);
  useEffect(() => {
    const lines = [
      ["P1+P2", "face-swap + synth identity cluster flagged"],
      ["P3+P2", "LLM narrative injected via bot ring"],
      ["P1+P5", "deepfake pornography — hash match"],
      ["P4+P2", "romance-fraud ring · 41 nodes"],
      ["P3", "novel narrative emerged · cross-lang"],
      ["P1", "live-stream deepfake · confidence 0.94"],
      ["P4+P3", "radicalisation pathway · stage 3"],
      ["P2", "coordinated engagement spike"],
    ];
    const id = setInterval(() => {
      const l = lines[Math.floor(Math.random() * lines.length)];
      const stamp = new Date().toISOString().substring(11, 19);
      setEvents((ev) =>
        [{ stamp, tag: l[0], msg: l[1], id: Math.random() }, ...ev].slice(0, 8),
      );
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid var(--line-2)",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(10,13,18,0.6)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span className="chip">
            <span className="dot" />
            LIVE · THREAT GRAPH
          </span>
          <span className="mono hud-tick">CPCE · compound scoring engaged</span>
        </div>
        <div className="mono hud-tick">
          {new Date().toISOString().substring(0, 10)}
        </div>
      </div>
      <div className="graph-grid">
        <div className="graph-canvas">
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
        <div
          style={{
            borderLeft: "1px solid var(--line)",
            padding: "14px 16px",
            maxHeight: 480,
            overflow: "hidden",
          }}
        >
          <div className="mono hud-tick" style={{ marginBottom: 10 }}>
            EVENT FEED // LAST 8
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {events.map((e) => (
              <div
                key={e.id}
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-2)",
                  borderLeft: "2px solid var(--accent)",
                  paddingLeft: 10,
                  animation: "slideIn .35s ease",
                }}
              >
                <div style={{ color: "var(--ink-3)" }}>
                  {e.stamp} ·{" "}
                  <span style={{ color: "var(--accent)" }}>{e.tag}</span>
                </div>
                <div style={{ color: "var(--ink)", marginTop: 2 }}>{e.msg}</div>
              </div>
            ))}
            {events.length === 0 && (
              <div className="mono hud-tick">awaiting signal...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ SECTIONS ============ */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(7,9,12,0.6)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="nav-inner">
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 6v6c0 5.3 3.8 10.2 9 11 5.2-.8 9-5.7 9-11V6l-9-4z"
              stroke="var(--accent)"
              strokeWidth="1.5"
              fill="rgba(95,227,255,0.08)"
            />
            <path
              d="M12 7v10M7 12h10"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
          </svg>
          <span
            className="display"
            style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em" }}
          >
            DeepShield
          </span>
        </a>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {["Platform", "Pillars", "Scan", "Graph", "Moat", "Deployment"].map(
            (x) => (
              <a
                key={x}
                href={"#" + x.toLowerCase()}
                className="mono"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 11,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "var(--ink-2)",
                }}
              >
                {x}
              </a>
            ),
          )}
          <button
            className="btn primary"
            style={{ padding: ".55rem .9rem", fontSize: 12 }}
          >
            Request a briefing →
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ selected, setSelected }) {
  const p = PILLARS.find((p) => p.id === selected) || PILLARS[0];
  return (
    <section
      id="top"
      className="grid-bg scan"
      style={{
        position: "relative",
        paddingTop: 120,
        paddingBottom: 60,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-grid"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}
      >
        <div>
          <div className="chip" style={{ marginBottom: 24 }}>
            <span className="dot" />
            DIGITAL TRUTH OPERATING SYSTEM · GLOBAL
          </div>
          <h1
            className="display"
            style={{
              fontSize: "clamp(42px, 5.6vw, 82px)",
              fontWeight: 600,
              lineHeight: 1.02,
              margin: "0 0 24px",
              letterSpacing: "-0.035em",
            }}
          >
            Truth at the speed
            <br />
            of{" "}
            <span
              style={{
                color: "var(--accent)",
                textShadow: "0 0 40px rgba(95,227,255,0.45)",
              }}
            >
              synthetic
            </span>
            .
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--ink-2)",
              maxWidth: 560,
              margin: "0 0 34px",
              textWrap: "pretty",
            }}
          >
            DeepShield unifies six intelligence pillars — deepfake forensics,
            synthetic identity, language, criminal signals, illegal content, and
            live operations — into a single continuously-updated threat graph.
            One platform. One data model. Evidence-grade output.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn primary">Request a briefing →</button>
            <button className="btn">Explore the platform</button>
          </div>
          <div className="metrics-grid">
            {METRICS.map((m) => (
              <div
                key={m.u}
                style={{ borderTop: "1px solid var(--line-2)", paddingTop: 12 }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: 30,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.v}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: "var(--ink-3)",
                    textTransform: "uppercase",
                    letterSpacing: ".12em",
                    marginTop: 4,
                  }}
                >
                  {m.u}
                </div>
                <div
                  style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 3 }}
                >
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <OrbitCore onSelect={setSelected} selected={selected} />
          <div
            style={{
              position: "absolute",
              bottom: -10,
              left: 0,
              right: 0,
              padding: "16px 18px",
              border: "1px solid var(--line-2)",
              borderRadius: 8,
              background: "rgba(10,13,18,0.7)",
              backdropFilter: "blur(6px)",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 22, color: "var(--accent)" }}
            >
              {p.idx}
            </div>
            <div>
              <div
                className="display"
                style={{ fontSize: 16, fontWeight: 600 }}
              >
                {p.name}
              </div>
              <div className="mono hud-tick" style={{ marginTop: 2 }}>
                {p.tag}
              </div>
            </div>
            <a
              href="#pillars"
              className="mono"
              style={{ fontSize: 11, color: "var(--accent)" }}
            >
              inspect →
            </a>
          </div>
        </div>
      </div>
      <div className="mono hud-tick side-label">
        DASTUTE TECHNOLOGIES LIMITED · DIGITAL TRUTH OS
      </div>
      <div
        className="mono hud-tick"
        style={{ position: "absolute", right: 20, top: 140 }}
      >
        LAT: 12.9716°N · LON: 77.5946°E
      </div>
    </section>
  );
}

function Pillars({ selected, setSelected }) {
  return (
    <section
      id="pillars"
      style={{
        position: "relative",
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="pillars-header">
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 10 }}>
              § 02 · ARCHITECTURE
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px,4vw,56px)",
                fontWeight: 500,
                margin: 0,
                letterSpacing: "-0.025em",
                maxWidth: 760,
              }}
            >
              Six pillars.{" "}
              <span style={{ color: "var(--ink-3)" }}>One graph.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "var(--ink-2)", fontSize: 15 }}>
            Every signal writes to a single threat graph — so a fake account,
            posting a deepfake, with AI-written copy, inside an illegal
            campaign, resolves as <em>one</em> operation.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p) => {
            const active = selected === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className="pillar-card"
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  padding: "26px 24px",
                  border: `1px solid ${active ? "var(--accent)" : "var(--line-2)"}`,
                  borderRadius: 10,
                  background: active
                    ? "linear-gradient(180deg, rgba(95,227,255,0.07), rgba(95,227,255,0.00))"
                    : "rgba(255,255,255,0.015)",
                  transition: "all .25s",
                  color: "inherit",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 28,
                      color: active ? "var(--accent)" : "var(--ink-3)",
                    }}
                  >
                    {p.idx}
                  </span>
                  <span className="mono hud-tick">PILLAR</span>
                </div>
                <div>
                  <div
                    className="display"
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.name}
                  </div>
                  <div className="mono hud-tick" style={{ marginTop: 6 }}>
                    {p.tag}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--ink-2)",
                    margin: 0,
                    flex: 1,
                    textWrap: "pretty",
                  }}
                >
                  {p.blurb}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.signals.map((s) => (
                    <span
                      key={s}
                      className="mono"
                      style={{
                        fontSize: 10,
                        padding: "3px 7px",
                        borderRadius: 3,
                        background: "rgba(130,200,240,0.07)",
                        color: "var(--ink-2)",
                        border: "1px solid var(--line)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: -20,
                    top: -20,
                    width: 80,
                    height: 80,
                    border: "1px solid var(--line)",
                    borderRadius: "50%",
                    opacity: active ? 1 : 0.3,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScanSection() {
  return (
    <section
      id="scan"
      style={{
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(95,227,255,0.03), transparent 60%)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="section-header-grid" style={{ alignItems: "end" }}>
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 10 }}>
              § 03 · LIVE FACIAL FORENSICS
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px,3.6vw,48px)",
                fontWeight: 500,
                margin: 0,
                letterSpacing: "-0.025em",
              }}
            >
              Watch it decide,
              <br />
              <span style={{ color: "var(--accent)" }}>frame by frame.</span>
            </h2>
          </div>
          <div
            style={{
              color: "var(--ink-2)",
              fontSize: 15,
              lineHeight: 1.6,
              maxWidth: 640,
            }}
          >
            A continuous scan of rotating subjects. The pipeline locks geometry,
            probes spectral residuals, measures the physiological pulse the
            generator forgot, checks temporal coherence, and issues a verdict.
            What you see below is the operator view — not a marketing loop.
          </div>
        </div>
        <FaceScanner />

        <div className="scan-features">
          {[
            {
              h: "68-point landmarks",
              d: "Geometric mesh reconstructed per frame to expose warping and swap boundaries.",
            },
            {
              h: "Spectral residuals",
              d: "Frequency-domain signatures reveal artefacts invisible to the human eye.",
            },
            {
              h: "rPPG pulse signal",
              d: "Natural micro blood-flow variations that synthetic pipelines cannot fake.",
            },
            {
              h: "Temporal coherence",
              d: "Frame-to-frame consistency scoring — blinks, micro-expressions, lip-audio sync.",
            },
          ].map((c) => (
            <div
              key={c.h}
              style={{
                padding: "18px 20px",
                border: "1px solid var(--line)",
                borderRadius: 8,
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <div
                className="display"
                style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}
              >
                {c.h}
              </div>
              <div
                style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}
              >
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GraphSection() {
  return (
    <section
      id="graph"
      style={{
        position: "relative",
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
        background:
          "linear-gradient(180deg, transparent, rgba(95,227,255,0.025), transparent)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="section-header-grid" style={{ alignItems: "start" }}>
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 10 }}>
              § 04 · THE DIFFERENTIATOR
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px,3.6vw,48px)",
                fontWeight: 500,
                margin: 0,
                letterSpacing: "-0.025em",
              }}
            >
              The Threat Graph,{" "}
              <span style={{ color: "var(--accent)" }}>live.</span>
            </h2>
          </div>
          <div
            style={{
              color: "var(--ink-2)",
              fontSize: 15,
              lineHeight: 1.6,
              maxWidth: 640,
            }}
          >
            Single-pillar alerts are noise. Convergence across multiple pillars
            is certainty. Below is a simulated view of what operators see —
            accounts, content, and infrastructure binding themselves to pillar
            signatures in real time.
          </div>
        </div>
        <ThreatGraph />
      </div>
    </section>
  );
}

function MoatSection() {
  return (
    <section
      id="moat"
      style={{
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="moat-header">
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 10 }}>
              § 05 · WHY WE WIN
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px,4vw,56px)",
                fontWeight: 500,
                margin: 0,
                letterSpacing: "-0.025em",
              }}
            >
              What no one else
              <br />
              can assemble.
            </h2>
          </div>
          <div
            style={{
              color: "var(--ink-2)",
              fontSize: 15,
              lineHeight: 1.65,
              alignSelf: "end",
              textWrap: "pretty",
            }}
          >
            Our moat isn't a single feature. It is the compounded value of these
            capabilities operating on one graph. To match it, a rival would have
            to simultaneously rebuild six domains of research and years of
            partnerships.
          </div>
        </div>
        <div
          className="moat-grid"
          style={{
            border: "1px solid var(--line-2)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {MOAT.map((m, i) => (
            <div
              key={m.k}
              style={{
                padding: "30px 28px",
                borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none",
                borderBottom: i < 3 ? "1px solid var(--line)" : "none",
                minHeight: 220,
                position: "relative",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--accent)",
                  marginBottom: 18,
                  letterSpacing: ".15em",
                }}
              >
                USP / {m.k}
              </div>
              <div
                className="display"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {m.t}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-2)",
                  lineHeight: 1.55,
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {m.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const audiences = [
    {
      t: "Governments & Regulators",
      d: "Sovereign, air-gapped deployment for national digital-safety authorities. Evidence output admissible under the local legal framework.",
      items: [
        "DSA reporting",
        "National CERT integration",
        "Law-enforcement liaison",
      ],
    },
    {
      t: "Platforms & Publishers",
      d: "Trust & safety teams get a unified threat intelligence layer instead of six siloed vendors. API-first, webhook-native.",
      items: ["Real-time webhooks", "Case workflow", "SLA-backed uptime"],
    },
    {
      t: "Newsrooms & Broadcasters",
      d: "Verify source material before publication. Every check produces a cryptographic receipt that stays with the story.",
      items: [
        "Provenance receipts",
        "Pre-publication scan",
        "Editorial dashboard",
      ],
    },
    {
      t: "Financial Institutions",
      d: "Stop romance fraud, investment scams, and deepfake KYC attempts before they convert into losses. Compliance-grade reports.",
      items: [
        "Synthetic-identity flags",
        "Liveness defence",
        "Fraud case packaging",
      ],
    },
  ];
  return (
    <section
      id="audience"
      style={{ padding: "120px 28px", borderTop: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="mono hud-tick" style={{ marginBottom: 10 }}>
          § 06 · WHO IT IS FOR
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 500,
            margin: "0 0 40px",
            letterSpacing: "-0.025em",
            maxWidth: 720,
          }}
        >
          Infrastructure, not a vendor.
        </h2>
        <div className="audience-grid">
          {audiences.map((a) => (
            <div
              key={a.t}
              style={{
                padding: "28px 28px",
                border: "1px solid var(--line-2)",
                borderRadius: 10,
                background: "rgba(255,255,255,0.015)",
              }}
            >
              <div
                className="display"
                style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}
              >
                {a.t}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-2)",
                  lineHeight: 1.55,
                  margin: "0 0 16px",
                  textWrap: "pretty",
                }}
              >
                {a.d}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {a.items.map((it) => (
                  <span
                    key={it}
                    className="mono"
                    style={{
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 3,
                      background: "rgba(130,200,240,0.08)",
                      color: "var(--ink-2)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Ingest",
      d: "Content arrives via platform APIs, crawlers, or submissions. Each item gets a universal ID.",
    },
    {
      n: "02",
      t: "Decompose",
      d: "The asset is broken into analysable signals — frames, tokens, voiceprints, network vectors.",
    },
    {
      n: "03",
      t: "Detect",
      d: "Six pillar engines run in parallel. Each produces a confidence-scored signal on the event bus.",
    },
    {
      n: "04",
      t: "Correlate",
      d: "The Threat Graph binds signals across pillars into compound-scored incidents in milliseconds.",
    },
    {
      n: "05",
      t: "Evidence",
      d: "Every decision is cryptographically anchored. Packages are ready for jurisdiction-specific submission.",
    },
    {
      n: "06",
      t: "Act",
      d: "Alerts route to operators, platforms, or law-enforcement partners via webhook, API, or dashboard.",
    },
  ];
  return (
    <section
      id="howitworks"
      style={{
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
        background:
          "linear-gradient(180deg, transparent, rgba(95,227,255,0.02))",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="mono hud-tick" style={{ marginBottom: 10 }}>
          § 07 · HOW IT WORKS
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 500,
            margin: "0 0 40px",
            letterSpacing: "-0.025em",
            maxWidth: 720,
          }}
        >
          From ingest to evidence in under a second.
        </h2>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 32,
              left: 28,
              right: 28,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
              opacity: 0.4,
            }}
          />
          <div className="steps-grid">
            {steps.map((s) => (
              <div
                key={s.n}
                style={{
                  padding: "20px 16px",
                  border: "1px solid var(--line)",
                  borderRadius: 8,
                  background: "rgba(10,13,18,0.75)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".15em",
                    marginBottom: 12,
                  }}
                >
                  STEP {s.n}
                </div>
                <div
                  className="display"
                  style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}
                >
                  {s.t}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--ink-2)",
                    lineHeight: 1.5,
                  }}
                >
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploymentSection() {
  const [mode, setMode] = useState("sovereign");
  return (
    <section
      id="deployment"
      style={{ padding: "120px 28px", borderTop: "1px solid var(--line)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="mono hud-tick" style={{ marginBottom: 10 }}>
          § 08 · DEPLOYMENT
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 500,
            margin: "0 0 40px",
            letterSpacing: "-0.025em",
            maxWidth: 720,
          }}
        >
          Cloud, on-prem, or inside your perimeter.
        </h2>
        <div className="deploy-modes">
          {[
            {
              id: "cloud",
              t: "Managed Cloud",
              d: "Multi-region, zero-ops. For platforms, publishers, and trust & safety teams that want detection-as-infrastructure.",
            },
            {
              id: "sovereign",
              t: "Sovereign Air-Gap",
              d: "Fully on-premises, no data egress, no third-party dependency. Designed for governments, regulators, and law-enforcement agencies with data-sovereignty mandates.",
            },
          ].map((m) => {
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                style={{
                  textAlign: "left",
                  padding: "26px 26px",
                  border: `1px solid ${active ? "var(--accent)" : "var(--line-2)"}`,
                  borderRadius: 10,
                  background: active ? "rgba(95,227,255,0.05)" : "transparent",
                  cursor: "pointer",
                  color: "inherit",
                  transition: "all .25s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span className="mono hud-tick">MODE</span>
                  {active && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: "var(--accent)",
                        boxShadow: "0 0 10px var(--accent)",
                      }}
                    />
                  )}
                </div>
                <div
                  className="display"
                  style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}
                >
                  {m.t}
                </div>
                <div
                  style={{
                    color: "var(--ink-2)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    textWrap: "pretty",
                  }}
                >
                  {m.d}
                </div>
              </button>
            );
          })}
        </div>
        <div className="deploy-bottom">
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 14 }}>
              EVIDENCE-GRADE · JURISDICTIONS
            </div>
            <div className="jurisdictions-grid">
              {JURISDICTIONS.map((j) => (
                <div
                  key={j.code}
                  style={{
                    padding: "16px 14px",
                    border: "1px solid var(--line-2)",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.015)",
                  }}
                >
                  <div
                    className="display"
                    style={{
                      fontSize: 22,
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    {j.code}
                  </div>
                  <div className="mono hud-tick" style={{ marginTop: 6 }}>
                    {j.law}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mono hud-tick" style={{ marginBottom: 14 }}>
              OPERATING PRINCIPLES · NON-NEGOTIABLE
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "Human review before any law-enforcement referral",
                "No surveillance-as-a-service — ever",
                "Quarterly bias audits across protected characteristics",
                "Minimum-necessary data retention with deletion proofs",
                "Illegal content never stored — only cryptographic evidence",
              ].map((x) => (
                <li
                  key={x}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 14,
                    color: "var(--ink-2)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      flex: "0 0 auto",
                      marginTop: 2,
                    }}
                  >
                    ▸
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 28px",
        borderTop: "1px solid var(--line)",
        background:
          "linear-gradient(180deg, transparent, rgba(95,227,255,0.04))",
      }}
    >
      <div
        className="contact-grid"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        <div>
          <div className="mono hud-tick" style={{ marginBottom: 10 }}>
            § 09 · TALK TO US
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(40px,5vw,72px)",
              fontWeight: 500,
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Stand up a{" "}
            <span style={{ color: "var(--accent)" }}>Digital Truth</span> layer
            for your organisation.
          </h2>
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 16,
              maxWidth: 520,
              textWrap: "pretty",
            }}
          >
            Briefings cover platform architecture, jurisdictional evidence
            formats, and deployment options tailored to your operating
            environment.
          </p>
        </div>
        <div
          style={{
            border: "1px solid var(--line-2)",
            borderRadius: 10,
            padding: 28,
            background: "rgba(10,13,18,0.7)",
          }}
        >
          <div className="mono hud-tick" style={{ marginBottom: 16 }}>
            CONTACT CHANNEL
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div
                style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 4 }}
              >
                General & partnerships
              </div>
              <a
                href="mailto:sanjay@dastute.co.uk"
                className="mono"
                style={{ fontSize: 16, color: "var(--accent)" }}
              >
                sanjay@dastute.co.uk
              </a>
            </div>
            <div>
              <div
                style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 4 }}
              >
                Operated by
              </div>
              <div style={{ fontSize: 15 }}>Dastute Technologies Limited</div>
            </div>
            <button
              className="btn primary"
              style={{ marginTop: 10, width: "100%", justifyContent: "center" }}
            >
              Request a briefing →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "60px 28px 40px",
        marginTop: 60,
      }}
    >
      <div className="footer-grid" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 6v6c0 5.3 3.8 10.2 9 11 5.2-.8 9-5.7 9-11V6l-9-4z"
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="rgba(95,227,255,0.08)"
              />
            </svg>
            <span className="display" style={{ fontWeight: 600, fontSize: 16 }}>
              DeepShield
            </span>
          </div>
          <p
            style={{
              color: "var(--ink-3)",
              fontSize: 12,
              maxWidth: 340,
              marginTop: 14,
              lineHeight: 1.5,
            }}
          >
            A product of Dastute Technologies Limited. For partner and
            enterprise enquiries, get in touch.
          </p>
        </div>
        {[
          {
            h: "Platform",
            l: ["Pillars", "Live Scan", "Threat Graph", "Deployment"],
          },
          { h: "Company", l: ["About", "Principles", "Partners", "Press"] },
          {
            h: "Contact",
            l: [
              "sanjay@dastute.co.uk",
              "Request a briefing",
              "Law-enforcement liaison",
            ],
          },
        ].map((c) => (
          <div key={c.h}>
            <div className="mono hud-tick" style={{ marginBottom: 14 }}>
              {c.h}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {c.l.map((x) => (
                <li key={x} style={{ fontSize: 13, color: "var(--ink-2)" }}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="mono hud-tick">
          © 2026 · DASTUTE TECHNOLOGIES LIMITED
        </div>
        <div className="mono hud-tick">ALL SYSTEMS NOMINAL</div>
      </div>
    </footer>
  );
}

function Tweaks({ setAccentHue, accentHue, setSpeed, speed }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  if (!open) return null;
  const set = (k, v) =>
    window.parent.postMessage(
      { type: "__edit_mode_set_keys", edits: { [k]: v } },
      "*",
    );
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 100,
        width: 280,
        padding: 18,
        borderRadius: 10,
        border: "1px solid var(--line-2)",
        background: "rgba(10,13,18,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 20px 60px rgba(0,0,0,.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <div className="display" style={{ fontSize: 14, fontWeight: 600 }}>
          Tweaks
        </div>
        <div className="mono hud-tick">LIVE</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div className="mono hud-tick" style={{ marginBottom: 6 }}>
            ACCENT HUE · {accentHue}°
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={accentHue}
            onChange={(e) => {
              const v = +e.target.value;
              setAccentHue(v);
              set("accentHue", v);
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <div className="mono hud-tick" style={{ marginBottom: 6 }}>
            ORBIT SPEED · {speed}s
          </div>
          <input
            type="range"
            min="8"
            max="80"
            value={speed}
            onChange={(e) => {
              const v = +e.target.value;
              setSpeed(v);
              set("rotateSpeed", v);
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState("synthetic");
  const [accentHue, setAccentHue] = useState(
    window.__TWEAKS__?.accentHue || 215,
  );
  const [speed, setSpeed] = useState(window.__TWEAKS__?.rotateSpeed || 28);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      `oklch(0.78 0.16 ${accentHue})`,
    );
  }, [accentHue]);
  useEffect(() => {
    window.__TWEAKS__.rotateSpeed = speed;
  }, [speed]);
  return (
    <>
      <Nav />
      <Hero selected={selected} setSelected={setSelected} />
      <Pillars selected={selected} setSelected={setSelected} />
      <ScanSection />
      <GraphSection />
      <MoatSection />
      <WhoItsFor />
      <HowItWorks />
      <DeploymentSection />
      <Contact />
      <Footer />
      <Tweaks
        setAccentHue={setAccentHue}
        accentHue={accentHue}
        setSpeed={setSpeed}
        speed={speed}
      />
    </>
  );
}

const style = document.createElement("style");
style.textContent = `
@keyframes spinRing { from{transform:rotateX(75deg) rotateZ(0deg)} to{transform:rotateX(75deg) rotateZ(360deg)} }
@keyframes coreSpin { from{transform:rotateY(0deg)} to{transform:rotateY(360deg)} }
@keyframes slideIn { from{opacity:0; transform:translateX(-6px)} to{opacity:1; transform:translateX(0)} }
@keyframes slideUp { from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:translateY(0)} }
@keyframes fadeZoom { from{opacity:0; transform:scale(.92)} to{opacity:1; transform:scale(1)} }
@keyframes pulseRing { 0%{box-shadow:0 0 0px currentColor} 50%{box-shadow:0 0 60px currentColor} 100%{box-shadow:0 0 30px currentColor} }
.pillar-card:hover{ border-color: var(--accent) !important; background: rgba(95,227,255,0.04) !important; }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
