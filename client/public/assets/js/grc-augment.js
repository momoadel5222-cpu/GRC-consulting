// grc-augment.js - non-intrusive progressive enhancement for hero and cards
(function(){
  try {
    // Respect reduced motion
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // HERO: find hero headline
    function animateHero() {
      var hero = document.querySelector('#hero, .hero, header.hero, section.hero');
      var h = null;
      if (hero) {
        h = hero.querySelector('#hero-headline') || hero.querySelector('h1');
      } else {
        // fallback: first h1 on page
        h = document.querySelector('h1');
      }
      if (!h) return;
      var text = h.textContent.trim();
      if (!text) return;
      // avoid double-splitting
      if (h.dataset.splitApplied) return;
      h.dataset.splitApplied = "1";
      var words = text.split(/\s+/);
      h.innerHTML = '';
      words.forEach(function(w, i){
        var span = document.createElement('span');
        span.textContent = w + (i<words.length-1 ? ' ' : '');
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(18px)';
        span.style.transition = 'opacity .45s ease, transform .45s cubic-bezier(.2,.9,.3,1)';
        h.appendChild(span);
        if (reduced) {
          span.style.opacity = '1';
          span.style.transform = 'none';
        } else {
          setTimeout(function(){ span.style.opacity='1'; span.style.transform='translateY(0)'; }, 90*i);
        }
      });
    }

    // CARD overlay enhancement: for elements with class 'group' that contain an img or background-image
    function enhanceCards() {
      var groups = document.querySelectorAll('.group');
      groups.forEach(function(g){
        // skip if already processed
        if (g.dataset.grcGroup) return;
        g.dataset.grcGroup = "1";
        // ensure focusable
        if (!g.hasAttribute('tabindex')) g.setAttribute('tabindex','0');
        // create overlay if not exists
        var overlay = g.querySelector('.grc-overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.className = 'grc-overlay';
          overlay.setAttribute('aria-hidden','true');
          overlay.style.position = 'absolute';
          overlay.style.inset = '0';
          overlay.style.background = 'linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,0))';
          overlay.style.opacity = '0';
          overlay.style.transition = 'opacity .28s ease';
          overlay.style.pointerEvents = 'none';
          g.style.position = g.style.position || 'relative';
          g.appendChild(overlay);
        }
        // hover / focus handlers to show overlay
        g.addEventListener('mouseenter', function(){ overlay.style.opacity='1'; });
        g.addEventListener('mouseleave', function(){ overlay.style.opacity='0'; });
        g.addEventListener('focus', function(){ overlay.style.opacity='1'; });
        g.addEventListener('blur', function(){ overlay.style.opacity='0'; });
        // click -> if has data-article, dispatch custom event to open
        g.addEventListener('keydown', function(e){ if((e.key==='Enter'||e.key===' ') && g.dataset.article){ e.preventDefault(); window.dispatchEvent(new CustomEvent('grc-card-click',{detail:{id:g.dataset.article}})); } });
        g.addEventListener('click', function(e){
          if (g.dataset.article) {
            window.dispatchEvent(new CustomEvent('grc-card-click',{detail:{id:g.dataset.article}}));
          }
        });
      });
    }

    // Slide panel controller (simple)
    function setupPanel() {
      // create panel only if not exist
      if (document.getElementById('grc-slide-panel')) return;
      var panel = document.createElement('div');
      panel.id = 'grc-slide-panel';
      panel.setAttribute('role','dialog');
      panel.setAttribute('aria-modal','true');
      panel.style.position='fixed';
      panel.style.top='0';
      panel.style.right='0';
      panel.style.width='100%';
      panel.style.maxWidth='480px';
      panel.style.height='100%';
      panel.style.background = '#fff';
      panel.style.boxShadow = 'rgba(0,0,0,.4) 0 8px 40px';
      panel.style.transform = 'translateX(100%)';
      panel.style.transition = 'transform .35s ease';
      panel.style.zIndex = '9999';
      panel.style.overflow = 'auto';
      panel.innerHTML = '<div id="grc-panel-inner" style="padding:20px;"><button id="grc-panel-close" aria-label="Close panel" style="position:absolute;right:12px;top:12px;">✕</button><div id="grc-panel-content"></div></div>';
      document.body.appendChild(panel);
      var close = panel.querySelector('#grc-panel-close');
      close.addEventListener('click', closePanel);
      window.addEventListener('keydown', function(e){ if(e.key==='Escape') closePanel(); });
      window.addEventListener('grc-card-click', function(ev){
        var id = ev.detail && ev.detail.id;
        openPanelWithId(id);
      });
      function openPanelWithId(id){
        if(!id) return;
        // simple mapping; if page has element with id "article-{id}" clone it
        var candidate = document.getElementById('article-'+id) || document.querySelector('[data-article-content="'+id+'"]');
        var content = '';
        if (candidate) {
          content = candidate.innerHTML;
        } else {
          content = '<h2>'+ (id || 'Details') +'</h2><p>Content not found on page.</p>';
        }
        var inner = document.getElementById('grc-panel-content');
        inner.innerHTML = content;
        panel.style.transform = 'translateX(0)';
        panel.setAttribute('aria-hidden','false');
        document.documentElement.style.overflow='hidden';
        document.body.style.overflow='hidden';
      }
      function closePanel(){
        panel.style.transform = 'translateX(100%)';
        panel.setAttribute('aria-hidden','true');
        setTimeout(function(){ document.documentElement.style.overflow=''; document.body.style.overflow=''; }, 350);
      }
    }

    // initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function(){
      animateHero();
      enhanceCards();
      setupPanel();
      // also run again if SPA changes content
      if (window.MutationObserver) {
        var mo = new MutationObserver(function(){ enhanceCards(); });
        mo.observe(document.body, { childList:true, subtree:true });
      }
    });

  } catch (err) {
    console.error('grc-augment error', err);
  }
})();
