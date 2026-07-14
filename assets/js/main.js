// Garcia Costa — comportamento do site (produção)
(function () {
  'use strict';

  // ---- Menu móvel do header ----
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 760) {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Propaga site-config.js para elementos marcados data-sc / data-sc-text ----
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;
  var c = cfg.contact || {};

  document.querySelectorAll('[data-sc-text]').forEach(function (el) {
    var key = el.getAttribute('data-sc-text');
    if (c[key] != null) el.textContent = c[key];
  });
  document.querySelectorAll('[data-sc="email-href"]').forEach(function (el) {
    el.setAttribute('href', 'mailto:' + (c.email || 'contato@garciacosta.adv.br'));
  });
  document.querySelectorAll('[data-sc="phone-href"]').forEach(function (el) {
    el.setAttribute('href', c.phoneHref || 'tel:+556199999999');
  });
  document.querySelectorAll('[data-sc="mailto-form"]').forEach(function (el) {
    el.setAttribute('action', 'mailto:' + (c.email || 'contato@garciacosta.adv.br'));
  });

  var linkedin = cfg.social && cfg.social.linkedin;
  var linkedinLink = document.querySelector('[data-sc="linkedin-link"]');
  var linkedinPlaceholder = document.querySelector('[data-sc="linkedin-placeholder"]');
  if (linkedin) {
    if (linkedinLink) { linkedinLink.href = linkedin; linkedinLink.hidden = false; }
    if (linkedinPlaceholder) linkedinPlaceholder.hidden = true;
  } else {
    if (linkedinLink) linkedinLink.hidden = true;
    if (linkedinPlaceholder) linkedinPlaceholder.hidden = false;
  }
})();
