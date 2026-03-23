/**
 * education.js — JavaScript for the Education page
 * Grid background is handled in education.css
 */
(function () {
  'use strict';

  /* Stagger delay for timeline items using edu-item-N class */
  document.querySelectorAll('[class*="edu-item-"]').forEach(function (el) {
    var cls = Array.from(el.classList).find(function (c) {
      return c.startsWith('edu-item-');
    });
    if (cls) {
      var index = parseInt(cls.replace('edu-item-', ''), 10);
      el.style.transitionDelay = (index * 100) + 'ms';
    }
  });

}());