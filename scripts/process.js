// ===========================
// HEADER SCROLL
// ===========================
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  if (backToTop) backToTop.classList.toggle("show", window.scrollY > 400);
});

// ===========================
// MOBILE NAV
// ===========================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target)) {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
    }
  });
}

// ===========================
// BACK TO TOP
// ===========================
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = (header ? header.offsetHeight : 0) + 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  });
});

// ===========================
// ACTIVE PHASE STRIP
// ===========================
const phaseIds = ["phase1", "phase2", "phase3", "phase4"];
const stripItems = document.querySelectorAll(".ps-item");

if (stripItems.length) {
  const phaseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const idx = phaseIds.indexOf(id);
          if (idx !== -1) {
            stripItems.forEach((s) => s.classList.remove("active"));
            stripItems[idx].classList.add("active");
          }
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  phaseIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) phaseObserver.observe(el);
  });
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        revealObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

[
  ".quality-card",
  ".ct-item",
  ".pb-block",
  ".resp-card",
  ".section-header",
].forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => {
    el.classList.add("reveal");
    revealObs.observe(el);
  });
});

// ===========================
// HERO PARTICLE CANVAS
// ===========================
(function () {
  const container = document.getElementById("phParticles");
  if (!container) return;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  container.appendChild(canvas);

  const resize = () => {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const dots = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.4,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    a: Math.random() * 0.45 + 0.1,
  }));

  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((d) => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${d.a})`;
      ctx.fill();
    });
    dots.forEach((a, i) => {
      dots.slice(i + 1).forEach((b) => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  })();
})();
