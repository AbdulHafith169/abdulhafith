/* =========================
   Abdul Hafeez Portfolio JS
   - Theme toggle (dark/light)
   - Mobile nav toggle
   - Scroll reveal animations (IntersectionObserver)
   - Mailto contact form
   ========================= */

(function () {
  const root = document.documentElement;

  // ---------- Theme ----------
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update icon
    if (themeIcon) {
      themeIcon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
      themeToggle?.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
  } else {
    // Default: dark, but if user prefers light, use it.
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // ---------- Mobile Nav ----------
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  function closeNav() {
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("is-open");
    navToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav on link click (mobile)
  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeNav());
  });

  // Close nav when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!target) return;
    const clickedInside = navLinks?.contains(target) || navToggle?.contains(target);
    if (!clickedInside) closeNav();
  });

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));

  // ---------- Footer year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- Contact form -> mailto ----------
  const form = document.getElementById("contactForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const subject = document.getElementById("subject")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    // Replace with your real email
    const to = "abdulhavizeag@gmail.com";

    const fullSubject = subject ? subject : "Portfolio Contact";
    const bodyLines = [
      `Name: ${name}`,
      "",
      message
    ];

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailto;
  });
})();
