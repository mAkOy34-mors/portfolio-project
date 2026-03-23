/**
 * skills.js — JavaScript for the Skills page
 * Grid background is handled in skills.css
 */
(function () {
  'use strict';

  /* Skill category card stagger delay */
  document.querySelectorAll('.skill-category-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

  /* Philosophy card stagger delay */
  document.querySelectorAll('.philosophy-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

  /* Animate skill bars when scrolled into view */
  var skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(function (bar) {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-category-card').forEach(function (card) {
    skillObserver.observe(card);
  });

  /* Also trigger for items already visible on load */
  setTimeout(function () {
    document.querySelectorAll('.skill-fill').forEach(function (bar) {
      var rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        bar.style.width = bar.dataset.width + '%';
      }
    });
  }, 500);

}());