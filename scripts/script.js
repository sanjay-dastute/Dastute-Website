// ===========================
// HEADER SCROLL
// ===========================
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  backToTop.classList.toggle("show", y > 400);
});

// ===========================
// MOBILE NAV
// ===========================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

function setCurrentPageNavState() {
  const fileName = (
    window.location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();
  const homeLink = document.querySelector(
    '.nav-list > li > .nav-link[href="#home"], .nav-list > li > .nav-link[href="index.html#home"]',
  );
  const solutionsLink = document.querySelector(
    '.nav-list > li.has-dropdown > .nav-link[href="#services"], .nav-list > li.has-dropdown > .nav-link[href="index.html#services"]',
  );
  const processLink = document.querySelector(
    '.nav-list > li > .nav-link[href="process.html"]',
  );
  const companyLink = document.querySelector(
    '.nav-list > li > .nav-link[href="about.html"], .nav-list > li.has-dropdown > .nav-link[href="#about"], .nav-list > li.has-dropdown > .nav-link[href="index.html#about"]',
  );
  const careersLink = document.querySelector(
    '.nav-list > li > .nav-link[href="careers.html"]',
  );

  let target = null;
  if (fileName === "process.html") target = processLink;
  else if (fileName === "index.html" || fileName === "") target = homeLink;
  else if (fileName.startsWith("service-")) target = solutionsLink;
  else if (fileName === "careers.html") target = careersLink || companyLink;
  else if (fileName === "about.html" || fileName === "team.html")
    target = companyLink;

  if (target) target.classList.add("active-page");
}

setCurrentPageNavState();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
});

document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// Mobile sub-menu toggles
nav.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const menu = link.parentElement.querySelector(".mega-menu, .dropdown");
      if (menu) {
        menu.classList.toggle("open");
        const icon = link.querySelector("i");
        if (icon)
          icon.style.transform = menu.classList.contains("open")
            ? "rotate(180deg)"
            : "";
      }
    }
  });
});

nav.querySelectorAll("a:not(.has-dropdown > .nav-link)").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = header.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ===========================
// BACK TO TOP
// ===========================
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===========================
// COUNTER ANIMATION
// ===========================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(ease(progress) * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".stat-num[data-target]");
let countersRan = false;
const heroStats = document.querySelector(".hero-stats");

if (heroStats) {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countersRan) {
        countersRan = true;
        counters.forEach(animateCounter);
      }
    },
    { threshold: 0.5 },
  ).observe(heroStats);
}

// ===========================
// SCROLL REVEAL
// ===========================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 70);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

[
  ".service-card",
  ".pillar-card",
  ".why-card",
  ".proc-step",
  ".testi-card",
  ".ind-card",
  ".blog-card",
  ".team-card",
  ".p3-item",
  ".section-header",
  ".office-card",
  ".faq-item",
].forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
});

// ===========================
// ACTIVE NAV ON SCROLL
// ===========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(
  '.nav-list > li > .nav-link[href^="#"]',
);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" },
);
sections.forEach((s) => navObserver.observe(s));

// ===========================
// FAQ ACCORDION
// ===========================
document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-q").addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.disabled = false;
      formSuccess.classList.add("show");
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove("show"), 6000);
    }, 1400);
  });
}

// ===========================
// PARTNER LOGOS - pause on hover
// ===========================
const partnersInner = document.getElementById("partnersInner");
if (partnersInner) {
  partnersInner.addEventListener("mouseenter", () => {
    partnersInner.style.animationPlayState = "paused";
  });
  partnersInner.addEventListener("mouseleave", () => {
    partnersInner.style.animationPlayState = "running";
  });
}

// ===========================
// HERO PARTICLE DOTS (canvas)
// ===========================
(function () {
  const container = document.getElementById("heroParticles");
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

  const dots = Array.from({ length: 55 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    a: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
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
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
