// ============================================================================
// Happy Birthday Bhna — page state machine + ambient effects
// ============================================================================
(function () {
  "use strict";

  const pages = Array.from(document.querySelectorAll(".page"));
  const pageById = id => document.getElementById(id);

  const state = {
    current: "page-1",
    opened: { 1: false, 2: false, 3: false },
  };

  /* ---------------- navigation ---------------- */
  function goTo(pageId, { reset = false } = {}) {
    if (!pageById(pageId)) return;

    pages.forEach(p => {
      if (p.id === pageId) return;
      p.classList.remove("active");
    });

    const target = pageById(pageId);

    // force a reflow so re-entering a page replays its CSS animations
    target.classList.remove("active");
    void target.offsetWidth;
    target.classList.add("active");

    state.current = pageId;

    if (pageId === "page-5") spawnPetals();
    if (reset) resetJourney();
  }

  function resetJourney() {
    state.opened = { 1: false, 2: false, 3: false };
    [1, 2, 3].forEach(n => {
      const slot = pageById(`gift${n}`);
      if (slot) slot.classList.remove("opened");
    });
    const seqBtn = pageById("btnSequence");
    if (seqBtn) {
      seqBtn.textContent = "open in sequence";
      seqBtn.disabled = true;
      seqBtn.classList.remove("ready");
    }
  }

  function markOpened(n) {
    state.opened[n] = true;
    const slot = pageById(`gift${n}`);
    if (slot) slot.classList.add("opened");

    const allOpen = state.opened[1] && state.opened[2] && state.opened[3];
    const seqBtn = pageById("btnSequence");
    if (allOpen && seqBtn) {
      seqBtn.textContent = "Next \u279C";
      seqBtn.disabled = false;
      seqBtn.classList.add("ready");
    }
  }

  /* ---------------- page 1 ---------------- */
  pageById("btnYes").addEventListener("click", () => goTo("page-3"));
  pageById("btnNo").addEventListener("click", () => goTo("page-2"));

  /* ---------------- page 2 ---------------- */
  pageById("btnGoBack1").addEventListener("click", () => goTo("page-1"));
  // a little "shake" flourish when the penguin page loads
  const observer2 = new MutationObserver(() => {
    if (pageById("page-2").classList.contains("active")) {
      const wrap = document.getElementById("penguinWrap");
      wrap.classList.remove("mad");
      void wrap.offsetWidth;
      setTimeout(() => wrap.classList.add("mad"), 650);
    }
  });
  observer2.observe(pageById("page-2"), { attributes: true, attributeFilter: ["class"] });

  /* ---------------- page 3 ---------------- */
  [1, 2, 3].forEach(n => {
    pageById(`gift${n}`).addEventListener("click", () => {
      markOpened(n);
      goTo(`page-${3 + n}`);
    });
  });
  pageById("btnSequence").addEventListener("click", () => {
    if (!pageById("btnSequence").disabled) goTo("page-7");
  });

  /* ---------------- page 4 / 5 / 6 back buttons ---------------- */
  pageById("btnBack4").addEventListener("click", () => goTo("page-3"));
  pageById("btnBack5").addEventListener("click", () => goTo("page-3"));
  pageById("btnBack6").addEventListener("click", () => goTo("page-3"));

  /* ---------------- page 7 ---------------- */
  pageById("btnHome").addEventListener("click", () => goTo("page-1", { reset: true }));

  /* ---------------- ambient sparkle field (all pages) ---------------- */
  function buildSparkles(count = 22) {
    const field = document.getElementById("sparkleField");
    const glyphs = ["\u2726", "\u2727", "\u2733", "\u2734"];
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.textContent = glyphs[i % glyphs.length];
      s.style.left = Math.random() * 100 + "vw";
      s.style.bottom = "-5vh";
      s.style.fontSize = 8 + Math.random() * 12 + "px";
      s.style.animationDuration = 6 + Math.random() * 10 + "s";
      s.style.animationDelay = Math.random() * 12 + "s";
      s.style.color = Math.random() > .5 ? "#ffffff" : "#f3c8cb";
      field.appendChild(s);
    }
  }
  buildSparkles();

  /* ---------------- falling petals for gift 2 page ---------------- */
  function spawnPetals() {
    const box = document.getElementById("petals");
    if (!box || box.dataset.filled) return;
    box.dataset.filled = "1";
    const glyphs = ["\uD83C\uDF38", "\u2726", "\u2727"]; // cherry blossom + sparkles
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      s.textContent = glyphs[i % glyphs.length];
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = 6 + Math.random() * 6 + "s";
      s.style.animationDelay = Math.random() * 6 + "s";
      s.style.fontSize = 10 + Math.random() * 10 + "px";
      box.appendChild(s);
    }
  }

  /* ---------------- keyboard escape hatch: Esc returns home ---------------- */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") goTo("page-1");
  });

  /* ---------------- init ---------------- */
  goTo("page-1");
})();
