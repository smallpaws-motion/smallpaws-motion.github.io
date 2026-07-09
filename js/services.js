/* ============================================================
   SmallPaws Motion — Services Page JS
   ============================================================ */

let currentLang = 'th';

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    applyLang();
  });
}

function applyLang() {
  const lang = currentLang;
  document.querySelector('.lang-th')?.classList.toggle('active', lang === 'th');
  document.querySelector('.lang-en')?.classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-th][data-en]').forEach(el => {
    const txt = el.getAttribute(`data-${lang}`);
    if (txt !== null) el.textContent = txt;
  });
}

function observeFadeUp() {
  const els = document.querySelectorAll('.fade-up:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

function initServiceAccordion() {
  const cards = document.querySelectorAll('.svc-card[data-svc]');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isActive = card.classList.contains('active');
      // collapse all
      cards.forEach(c => {
        c.classList.remove('active');
        const exp = c.querySelector('.svc-card-expand');
        if (exp) exp.style.maxHeight = '0px';
      });
      // expand if wasn't already active
      if (!isActive) {
        card.classList.add('active');
        const exp = card.querySelector('.svc-card-expand');
        if (exp) exp.style.maxHeight = exp.scrollHeight + 'px';
      }
    });
  });
}

function initHeroMouseMove() {
  const wrap = document.getElementById('hero-visual-wrap');
  const img  = document.getElementById('svc-hero-img');
  if (!wrap || !img) return;

  wrap.addEventListener('mousemove', e => {
    const rect = wrap.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    img.style.transform = `translate(${dx * 14}px, ${dy * 10}px)`;
  });

  wrap.addEventListener('mouseleave', () => {
    img.style.transform = 'translate(0, 0)';
  });
}

function initProcessMouseMove() {
  const wrap = document.getElementById('process-visual-wrap');
  const img  = document.getElementById('process-img');
  if (!wrap || !img) return;

  wrap.addEventListener('mousemove', e => {
    const rect = wrap.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    img.style.transform = `translate(${dx * 14}px, ${dy * 10}px)`;
  });

  wrap.addEventListener('mouseleave', () => {
    img.style.transform = 'translate(0, 0)';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initServiceAccordion();
  initHeroMouseMove();
  initProcessMouseMove();
  observeFadeUp();
});
