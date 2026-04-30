function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

function initMagnetic() {
  document.querySelectorAll<HTMLElement>('.mag').forEach(el => {
    el.addEventListener('mousemove', (ev) => {
      const rect = el.getBoundingClientRect();
      const x = ev.clientX - rect.left - rect.width / 2;
      const y = ev.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
  });
}

function initCursor() {
  if (matchMedia('(pointer: coarse)').matches) return;
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll<HTMLElement>('a, button, .mag, [data-hot]').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('hot'));
    el.addEventListener('mouseleave', () => dot.classList.remove('hot'));
  });
}

function initClock() {
  const el = document.querySelector<HTMLElement>('[data-clock]');
  if (!el) return;
  function tick() {
    const opts: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    };
    el!.textContent = new Intl.DateTimeFormat('en-US', opts).format(new Date()) + ' PT — DAVIS, CA';
  }
  tick();
  setInterval(tick, 1000);
}

function init() {
  initReveal();
  initMagnetic();
  initCursor();
  initClock();
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
