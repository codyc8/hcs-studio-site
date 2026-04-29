// shared partials inserted via JS so we don't repeat HTML across pages
(function(){
  function nav(active){
    const items = [
      ['index.html','Home','home'],
      ['work.html','Work','work'],
      ['about.html','About','about'],
      ['contact.html','Contact','contact'],
    ];
    return `
    <header class="nav">
      <a class="brand" href="index.html" aria-label="HCS home">HCS</a>
      <nav class="nav-links" aria-label="Primary">
        ${items.map(([href,label,key]) => `<a href="${href}" ${key===active?'class="active"':''}>${label}</a>`).join('')}
        <a href="contact.html#mockup" class="nav-cta mag" style="padding: 6px 5px 6px 10px;">Free mockup →</a>
      </nav>
    </header>`;
  }

  function footer(){
    return `
    <footer class="foot">
      <div class="row">
        <div class="col">
          <h4>HCS Studio</h4>
          <p class="lede" style="font-size:15px; max-width:36ch;">A web &amp; systems studio founded by UC Davis students and engineered locally. We build the right thing for your business — and we keep it running so you never have to think about it again.</p>
        </div>
        <div class="col">
          <h4>Studio</h4>
          <ul>
            <li><a href="work.html">Selected Work</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Engage</h4>
          <ul>
            <li><a href="contact.html#mockup">Request a Mockup</a></li>
            <li><a href="contact.html#book">Book a Call</a></li>
          </ul>
        </div>
      </div>
      <div class="word"><span>Make it</span> <span class="it">obvious.</span></div>
      <div class="meta">
        <div data-clock>—:—:— PT — DAVIS, CA</div>
        <div>© HCS Studio 2026 — A studio out of Davis, CA. Founded by UC Davis students.</div>
      </div>
    </footer>`;
  }

  window.HCS = { nav, footer };
})();
