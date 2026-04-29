// HCS — shared interactions
(function(){
  // reveal on scroll
  function initReveal(){
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  // magnetic CTAs
  function initMagnetic(){
    const targets = document.querySelectorAll('.mag');
    targets.forEach(el => {
      const inner = el;
      el.addEventListener('mousemove', (ev)=>{
        const rect = el.getBoundingClientRect();
        const x = ev.clientX - rect.left - rect.width/2;
        const y = ev.clientY - rect.top - rect.height/2;
        inner.style.transform = `translate(${x*0.18}px, ${y*0.25}px)`;
      });
      el.addEventListener('mouseleave', ()=>{ inner.style.transform = 'translate(0,0)'; });
    });
  }

  // cursor dot
  function initCursor(){
    if (matchMedia('(pointer: coarse)').matches) return;
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    window.addEventListener('mousemove', (e)=>{
      dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .mag, [data-hot]').forEach(el => {
      el.addEventListener('mouseenter', ()=> dot.classList.add('hot'));
      el.addEventListener('mouseleave', ()=> dot.classList.remove('hot'));
    });
  }

  // running time clock for footer
  function initClock(){
    const el = document.querySelector('[data-clock]');
    if (!el) return;
    function tick(){
      const d = new Date();
      const opts = { timeZone:'America/Los_Angeles', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false };
      el.textContent = new Intl.DateTimeFormat('en-US', opts).format(d) + ' PT — DAVIS, CA';
    }
    tick(); setInterval(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initReveal();
    initMagnetic();
    initCursor();
    initClock();
  });
})();
