/* ============================================================
   SmallPaws Motion — Main JS
   ============================================================ */

const CAT_LABELS_TH = {
  explainer:  "Explainer Video",
  typography: "Typography",
  uxui:       "UX/UI Presentation",
  character:  "Character Animation",
};
const CAT_LABELS_EN = CAT_LABELS_TH; // same in both langs

const CAT_COLORS = {
  explainer:  "#FDF2F8",
  typography: "#EDE9FE",
  uxui:       "#F0FDF4",
  character:  "#FFF7ED",
};

const SLIDE_PLACEHOLDERS = [
  { emoji: "🎬", color: "#1a0a2e" },
  { emoji: "✦",  color: "#0d1a2e" },
  { emoji: "🎨", color: "#1a0d0d" },
  { emoji: "✨", color: "#0d1a0d" },
];

/* ── Language ───────────────────────────────────────────────── */
let currentLang = 'en';

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    applyLang();
    if (worksMode === 'graphic') {
      renderGraphicComingSoon();
    } else {
      renderFilters();
      renderWorks();
    }
  });
}

function applyLang() {
  const lang = currentLang;

  // Toggle active indicator
  document.querySelector('.lang-th')?.classList.toggle('active', lang === 'th');
  document.querySelector('.lang-en')?.classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;

  // Swap all data-th / data-en text nodes
  document.querySelectorAll('[data-th][data-en]').forEach(el => {
    const txt = el.getAttribute(`data-${lang}`);
    if (txt !== null) el.textContent = txt;
  });
}

/* ── Nav scroll state ───────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* Hero bg — ไม่ต้องทำอะไร เป็น static media วนลูปเอง */

/* ── Works Mode Toggle ──────────────────────────────────────── */
let worksMode = 'motion';

function setWorksMode(mode) {
  worksMode = mode;
  document.getElementById('mode-motion')?.classList.toggle('active', mode === 'motion');
  document.getElementById('mode-graphic')?.classList.toggle('active', mode === 'graphic');
  activeFilter = 'all';

  if (mode === 'graphic') {
    document.getElementById('filter-bar').innerHTML = '';
    renderGraphicComingSoon();
  } else {
    renderFilters();
    renderWorks();
  }
}

function renderGraphicWorks() {
  const grid = document.getElementById('works-grid');
  const works = typeof GRAPHIC_WORKS !== 'undefined' ? GRAPHIC_WORKS : [];

  if (works.length === 0) {
    const isTh = currentLang === 'th';
    grid.innerHTML = `
      <div class="coming-soon-wrap">
        <div class="coming-soon-emoji">✏️</div>
        <div class="coming-soon-title">${isTh ? 'กำลังวาด Wireframe อยู่นะ...' : 'Currently wireframing this section...'}</div>
        <p class="coming-soon-sub">
          ${isTh
            ? 'ส่วนนี้ยังอยู่ใน <em>Draft Mode</em> เหมือน Low-fi ที่ยังไม่ได้ Handoff<br>เร็ว ๆ นี้จะ Ship งาน Graphic Design มาให้ดูแน่นอน 🐾'
            : 'This section is still in <em>Draft Mode</em> — like a lo-fi prototype waiting to be handed off.<br>Graphic design work dropping here soon. 🐾'}
        </p>
      </div>`;
    return;
  }

  grid.innerHTML = works.map(w => `
    <div class="work-card graphic-card fade-up" onclick="openGraphicModal('${w.id}')">
      <div style="position:relative">
        <img class="work-thumb" src="${w.thumbnail}" alt="${w.title}" loading="lazy">
      </div>
      <div class="work-info">
        <div class="work-tags">${(w.category||[]).map(c=>`<span class="work-tag">${c}</span>`).join('')}</div>
        <div class="work-title">${w.title}</div>
        ${w.what ? `<div class="work-desc">${w.what}</div>` : ''}
      </div>
    </div>`).join('');

  observeFadeUp();
}

function renderGraphicComingSoon() {
  renderGraphicWorks();
}

/* ── Graphic Modal ──────────────────────────────────────────── */
let graphicModalIdx = 0;
let graphicModalWork = null;

function openGraphicModal(id) {
  graphicModalWork = (GRAPHIC_WORKS||[]).find(w => w.id === id);
  if (!graphicModalWork) return;
  graphicModalIdx = 0;
  renderGraphicModalContent();
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderGraphicModalContent() {
  const w = graphicModalWork;
  const images = w.images || [w.thumbnail];
  const total = images.length;
  const isTh = currentLang === 'th';

  document.getElementById('modal-title').textContent = w.title;
  document.getElementById('modal-video').innerHTML = `
    <div class="graphic-modal-inner">
      <div class="graphic-img-wrap">
        ${total > 1 ? `<button class="graphic-arrow left" onclick="graphicNav(-1)">&#8249;</button>` : ''}
        <img src="${images[graphicModalIdx]}" alt="${w.title}" class="graphic-modal-img">
        ${total > 1 ? `<button class="graphic-arrow right" onclick="graphicNav(1)">&#8250;</button>` : ''}
        ${total > 1 ? `<div class="graphic-dots">${images.map((_,i)=>`<span class="graphic-dot${i===graphicModalIdx?' active':''}" onclick="graphicGoTo(${i})"></span>`).join('')}</div>` : ''}
      </div>
      <div class="graphic-modal-info">
        ${w.what    ? `<div class="gm-row"><span class="gm-label">${isTh?'งาน':'What'}</span><span>${w.what}</span></div>` : ''}
        ${w.concept ? `<div class="gm-row"><span class="gm-label">Concept</span><span>${w.concept}</span></div>` : ''}
        ${w.client  ? `<div class="gm-row"><span class="gm-label">${isTh?'ลูกค้า':'Client'}</span><span>${w.client}</span></div>` : ''}
        ${w.year    ? `<div class="gm-row"><span class="gm-label">${isTh?'ปี':'Year'}</span><span>${w.year}</span></div>` : ''}
      </div>
    </div>`;
}

function graphicNav(dir) {
  const images = graphicModalWork.images || [graphicModalWork.thumbnail];
  graphicModalIdx = (graphicModalIdx + dir + images.length) % images.length;
  renderGraphicModalContent();
}

function graphicGoTo(i) {
  graphicModalIdx = i;
  renderGraphicModalContent();
}

/* ── Works Grid ─────────────────────────────────────────────── */
let activeFilter = 'all';

function getCatLabels() {
  return currentLang === 'th' ? CAT_LABELS_TH : CAT_LABELS_EN;
}

function renderFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const labels = getCatLabels();
  const allLabel = currentLang === 'th' ? 'ทั้งหมด' : 'All';
  const cats = ['all', ...Object.keys(labels)];

  bar.innerHTML = cats.map(c => `
    <button class="filter-btn${c === activeFilter ? ' active' : ''}" data-cat="${c}">
      ${c === 'all' ? allLabel : labels[c]}
    </button>
  `).join('');
}

function initFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeFilter = btn.dataset.cat;
    renderFilters();
    renderWorks();
  });
}

function renderWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid || typeof WORKS === 'undefined') return;
  const labels = getCatLabels();

  const filtered = activeFilter === 'all'
    ? WORKS
    : WORKS.filter(w => w.category.includes(activeFilter));

  if (filtered.length === 0) {
    const msg = currentLang === 'th' ? 'ยังไม่มีงานในหมวดนี้' : 'No works in this category yet';
    grid.innerHTML = `<p style="color:var(--gray-400);font-weight:700;padding:32px 0;">${msg}</p>`;
    return;
  }

  grid.innerHTML = filtered.map(w => {
    const tags = w.category.map(c =>
      `<span class="work-tag">${labels[c] || c}</span>`
    ).join('');
    const thumb = w.thumbnail
      ? `<img class="work-thumb" src="${w.thumbnail}" alt="${w.title}" loading="lazy">`
      : `<div class="work-thumb-placeholder" style="background:${CAT_COLORS[w.category[0]] || '#EDE9FE'}">🎬</div>`;

    return `
      <div class="work-card fade-up" onclick="openModal(${w.id})">
        <div style="position:relative">
          ${thumb}
          <div class="work-play-overlay">
            <div class="play-btn">
              <svg width="18" height="18" viewBox="0 0 18 18"><polygon points="4,2 16,9 4,16"/></svg>
            </div>
          </div>
        </div>
        <div class="work-info">
          <div class="work-tags">${tags}</div>
          <div class="work-title">${w.title}</div>
          ${w.description ? `<div class="work-desc">${w.description}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  observeFadeUp();
}

/* ── Modal ──────────────────────────────────────────────────── */
function openModal(id) {
  const work = WORKS.find(w => w.id === id);
  if (!work) return;

  document.getElementById('modal-title').textContent = work.title;

  const url = work.videoUrl || '';
  let embedHtml = '';

  if (url.includes('youtube.com/embed') || url.includes('youtu.be')) {
    const embedUrl = url.includes('embed') ? url : url.replace('youtu.be/', 'youtube.com/embed/');
    embedHtml = `<iframe src="${embedUrl}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (url.includes('vimeo.com')) {
    const vid = url.split('/').pop();
    embedHtml = `<iframe src="https://player.vimeo.com/video/${vid}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  } else if (url.match(/\.(mp4|webm)$/i)) {
    embedHtml = `<video src="${url}" controls autoplay style="width:100%;height:100%;"></video>`;
  } else {
    const msg = currentLang === 'th' ? 'ยังไม่มี Video URL' : 'No video URL yet';
    embedHtml = `<div style="display:flex;align-items:center;justify-content:center;height:100%;background:#f3f4f6;font-size:18px;color:#9ca3af;font-weight:700;">${msg}</div>`;
  }

  document.getElementById('modal-video').innerHTML = embedHtml;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-video').innerHTML = '';
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Testimonials Marquee ───────────────────────────────────── */
function initTestimonials() {
  const track = document.getElementById('marquee-track');
  if (!track || typeof TESTIMONIALS === 'undefined') return;
  const all = [...TESTIMONIALS, ...TESTIMONIALS];
  track.innerHTML = all.map(t => `
    <div class="bubble-card">
      <div class="bubble-avatar">${t.avatar}</div>
      <p class="bubble-text">${t.text}</p>
      <div class="bubble-author">
        <div class="bubble-name">${t.name}</div>
        <div class="bubble-role">${t.role}</div>
      </div>
    </div>
  `).join('');
}

/* ── Contact Links ──────────────────────────────────────────── */
function initContact() {
  const wrap = document.getElementById('contact-links');
  if (!wrap || typeof CONTACT === 'undefined') return;

  const links = [
    { key: 'instagram', icon: 'assets/svg/IG_icon.svg',     label: 'Instagram', href: `https://instagram.com/${(CONTACT.instagram||'').replace('@','')}` },
    { key: 'facebook',  icon: 'assets/svg/FB_icon.svg',     label: 'Facebook',  href: `https://facebook.com/${CONTACT.facebook}` },
    { key: 'tiktok',    icon: 'assets/svg/Tiktok_icon.svg', label: 'TikTok',    href: `https://tiktok.com/${CONTACT.tiktok}` },
  ].filter(l => CONTACT[l.key]);

  wrap.innerHTML = links.map(l => `
    <a href="${l.href}" class="contact-link" target="_blank" rel="noopener" aria-label="${l.label}">
      <img src="${l.icon}" alt="${l.label}" class="contact-sns-icon">
    </a>
  `).join('');
}

/* ── Copy email ─────────────────────────────────────────────── */
function copyEmail(btn) {
  navigator.clipboard.writeText('smallpaws.motion@gmail.com').then(() => {
    const copied = document.getElementById('about-email-copied');
    copied.classList.add('show');
    setTimeout(() => copied.classList.remove('show'), 2000);
  });
}

/* ── Fade-up observer ───────────────────────────────────────── */
function observeFadeUp() {
  const els = document.querySelectorAll('.fade-up:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangToggle();
  renderFilters();
  initFilters();
  renderWorks();
  initTestimonials();
  initContact();
  observeFadeUp();

  document.getElementById('modal-overlay')
    ?.addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
