// ====== Mobile menu ======
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  const isOpen = !mobileMenu.hasAttribute("hidden");
  if (isOpen) {
    mobileMenu.setAttribute("hidden", "");
    menuBtn.setAttribute("aria-expanded", "false");
  } else {
    mobileMenu.removeAttribute("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobileMenu a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.setAttribute("hidden", "");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ====== Year in footer ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== Reveal animations ======
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ====== Hero device feed (signals) ======
const FEEDS = {
  packed: [
    { title: "Packed", sub: "High St • 6 min", tag: "LIVE", hot: true },
    { title: "Line moving", sub: "Campus • 9 min", tag: "LIVE", hot: true },
    { title: "Big group energy", sub: "Short North • 11 min", tag: "LIVE", hot: true },
  ],
  good: [
    { title: "Good vibe", sub: "Short North • 7 min", tag: "LIVE", hot: false },
    { title: "Working", sub: "High St • 10 min", tag: "LIVE", hot: false },
    { title: "Solid room", sub: "Downtown • 14 min", tag: "LIVE", hot: false },
  ],
  quiet: [
    { title: "Quiet", sub: "Downtown • 8 min", tag: "LIVE", hot: false, low: true },
    { title: "Calm", sub: "High St • 12 min", tag: "LIVE", hot: false, low: true },
    { title: "Not much", sub: "Short North • 15 min", tag: "LIVE", hot: false, low: true },
  ]
};

const feedEl = document.getElementById("feed");
function renderFeed(key){
  if (!feedEl) return;
  feedEl.innerHTML = "";
  FEEDS[key].forEach((item) => {
    const card = document.createElement("div");
    card.className = "feedCard";

    const thumb = document.createElement("div");
    thumb.className = "thumb";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<div class="metaTop">${item.title}</div><div class="metaBot">${item.sub}</div>`;

    const tag = document.createElement("div");
    tag.className = "tag" + (item.hot ? " hot" : "") + (item.low ? " low" : "");
    tag.textContent = item.tag;

    card.appendChild(thumb);
    card.appendChild(meta);
    card.appendChild(tag);
    feedEl.appendChild(card);
  });
}

renderFeed("packed");

document.querySelectorAll(".sigBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sigBtn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderFeed(btn.dataset.signal);
  });
});

// ====== Preview moments grid ======
const MOMENTS = {
  nearby: [
    { title: "Packed", sub: "8 min • nearby", tag: "LIVE" },
    { title: "Good", sub: "11 min • nearby", tag: "LIVE" },
    { title: "Quiet", sub: "14 min • nearby", tag: "LIVE" },
    { title: "Moment", sub: "5 min • nearby", tag: "LIVE" },
  ],
  campus: [
    { title: "Campus", sub: "4 min • live", tag: "LIVE" },
    { title: "High St", sub: "7 min • live", tag: "LIVE" },
    { title: "Short North", sub: "12 min • live", tag: "LIVE" },
    { title: "Downtown", sub: "15 min • live", tag: "LIVE" },
  ],
  late: [
    { title: "Late", sub: "1:12am • live", tag: "LIVE" },
    { title: "Still going", sub: "1:28am • live", tag: "LIVE" },
    { title: "After", sub: "1:45am • live", tag: "LIVE" },
    { title: "Moment", sub: "2:03am • live", tag: "LIVE" },
  ]
};

const grid = document.getElementById("momentGrid");
function renderMoments(mode){
  if (!grid) return;
  grid.innerHTML = "";
  MOMENTS[mode].forEach((m) => {
    const el = document.createElement("div");
    el.className = "moment";
    el.innerHTML = `
      <div class="momentMeta">
        <div class="mmLeft">
          <div class="mmTitle">${m.title}</div>
          <div class="mmSub">${m.sub}</div>
        </div>
        <div class="mmTag">${m.tag}</div>
      </div>
    `;
    grid.appendChild(el);
  });
}

renderMoments("nearby");

document.querySelectorAll(".segBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".segBtn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMoments(btn.dataset.mode);
  });
});
