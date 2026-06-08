// =====================================================
//  SHARED INNER PAGES SCRIPT
// =====================================================

// Header scroll
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  if (backToTop) backToTop.classList.toggle("show", window.scrollY > 400);
});

// Mobile nav
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

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open")
      ? "hidden"
      : "";
  });
  document.addEventListener("click", (e) => {
    if (header && !header.contains(e.target)) {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// Mobile sub-menu
if (nav) {
  nav.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const menu = link.parentElement.querySelector(".mega-menu,.dropdown");
        if (menu) {
          menu.classList.toggle("open");
          const ic = link.querySelector("i");
          if (ic)
            ic.style.transform = menu.classList.contains("open")
              ? "rotate(180deg)"
              : "";
        }
      }
    });
  });
  nav.querySelectorAll("a:not(.has-dropdown > .nav-link)").forEach((l) => {
    l.addEventListener("click", () => {
      hamburger && hamburger.classList.remove("open");
      nav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

// Back to top
if (backToTop)
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          ((header ? header.offsetHeight : 0) + 16),
        behavior: "smooth",
      });
    }
  });
});

// Job position dropdown toggle
document.querySelectorAll(".pos-card").forEach((card) => {
  const header = card.querySelector(".pos-header");
  if (header) {
    header.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  }
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  if (btn)
    btn.addEventListener("click", () => {
      const open = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
});

// Ajax forms (contact + careers)
document.querySelectorAll('form[data-ajax-submit="true"]').forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const action = form.getAttribute("action");
    const successTarget = document.querySelector(
      form.dataset.successTarget || "",
    );
    const errorTarget = document.querySelector(form.dataset.errorTarget || "");
    const submitBtn = form.querySelector('button[type="submit"]');
    const initialBtnHtml = submitBtn ? submitBtn.innerHTML : "";

    if (!action || !submitBtn) return;

    if (successTarget) successTarget.classList.remove("show");
    if (errorTarget) errorTarget.classList.remove("show");

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
      const hasFiles = form.querySelector('input[type="file"]');
      const fetchOptions = {
        method: "POST",
        body: new FormData(form),
      };
      if (!hasFiles) {
        fetchOptions.headers = { Accept: "application/json" };
      }
      const response = await fetch(action, fetchOptions);

      if (!response.ok) throw new Error("Form submit failed");

      form.reset();
      if (successTarget) {
        successTarget.classList.add("show");
        setTimeout(() => successTarget.classList.remove("show"), 7000);
      }
    } catch (err) {
      if (errorTarget) {
        errorTarget.classList.add("show");
        setTimeout(() => errorTarget.classList.remove("show"), 7000);
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = initialBtnHtml;
    }
  });
});

// Scroll reveal
const revObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 70);
        revObs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

[
  ".feat-item",
  ".deliv-card",
  ".tech-pill",
  ".sp-step",
  ".mt-card",
  ".faq-item",
  ".val-card",
  ".diff-card",
  ".mv-card",
  ".tl-item",
  ".cert-pill",
  ".ben-card",
  ".pos-card",
  ".cult-card",
  ".go-card",
  ".ns-item",
  ".section-header",
  ".os-item",
  ".quality-card",
  ".ct-item",
].forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => {
    el.classList.add("reveal");
    revObs.observe(el);
  });
});

// Canvas particles for page hero
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
  const dots = Array.from({ length: 48 }, () => ({
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
    dots.forEach((a, i) =>
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
      }),
    );
    requestAnimationFrame(draw);
  })();
})();

// Position filter tabs (careers page)
document.querySelectorAll(".pos-filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".pos-filter")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
