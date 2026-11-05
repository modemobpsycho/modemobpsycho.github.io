/* Vadim Taratuta — CV site interactions */
(function () {
  'use strict';

  var doc = document;

  function t(key, fallback) {
    if (window.I18N && window.I18N.t(key)) return window.I18N.t(key);
    return fallback;
  }

  /* ---------- Top bar: mobile nav ---------- */
  var burger = doc.getElementById('burger');
  var nav = doc.getElementById('nav');

  function closeNav() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', t('a11y.menuOpen', 'Open menu'));
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', t(open ? 'a11y.menuClose' : 'a11y.menuOpen', open ? 'Close menu' : 'Open menu'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
  }

  /* ---------- Project filters ---------- */
  var filters = doc.querySelectorAll('.filter');
  var cards = doc.querySelectorAll('.card');
  var counter = doc.querySelector('.filter-count');
  var activeFilter = 'all';

  function applyFilter(tag) {
    activeFilter = tag;
    var visible = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
      var show = tag === 'all' || tags.indexOf(tag) !== -1;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (window.I18N) {
      window.I18N.setCount(visible);
    } else if (counter) {
      counter.textContent = visible + (visible === 1 ? ' project' : ' projects');
    }
  }

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  window.addEventListener('langchange', function () {
    applyFilter(activeFilter);
  });

  /* ---------- Case-study drawer ---------- */
  var drawer = doc.getElementById('drawer');
  var drawerBody = doc.getElementById('drawer-body');
  var panel = drawer ? drawer.querySelector('.drawer-panel') : null;
  var lastFocus = null;

  function openDrawer(id) {
    var tpl = doc.getElementById(id);
    if (!drawer || !tpl || !drawerBody) return;
    drawerBody.innerHTML = '';
    drawerBody.appendChild(tpl.content.cloneNode(true));
    if (window.I18N) window.I18N.apply(drawerBody);
    lastFocus = doc.activeElement;
    drawer.hidden = false;
    doc.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      drawer.classList.add('is-open');
      if (panel) panel.focus();
    });
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    doc.body.style.overflow = '';
    setTimeout(function () { drawer.hidden = true; }, 320);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  doc.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openDrawer(btn.getAttribute('data-open'));
    });
  });

  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) closeDrawer();
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !drawer.hidden) closeDrawer();
    });

    /* deep link: index.html#case-chhj opens the case study directly */
    (function () {
      var id = doc.location.hash.replace('#', '');
      if (id && doc.getElementById(id)) openDrawer(id);
      window.addEventListener('hashchange', function () {
        var next = doc.location.hash.replace('#', '');
        if (next && doc.getElementById(next)) openDrawer(next);
      });
    })();
  }

  /* ---------- Copy email ---------- */
  doc.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy');
      var done = function () {
        var original = btn.innerHTML;
        btn.classList.add('is-copied');
        btn.innerHTML = (window.I18N && window.I18N.lang === 'ru' ? 'Скопировано — ' : 'Copied — ') + value;
        setTimeout(function () {
          btn.classList.remove('is-copied');
          btn.innerHTML = original;
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, done);
      } else {
        done();
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealables = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Topbar: solid background once the hero is behind us ---------- */
  var topbar = doc.querySelector('.topbar');
  if (topbar) {
    var syncTopbar = function () {
      topbar.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    syncTopbar();
    window.addEventListener('scroll', syncTopbar, { passive: true });
  }

  /* ---------- Footer year ---------- */
  var year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
