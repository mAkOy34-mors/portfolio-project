/**
 * about.js — JavaScript for the About page
 * Grid background is now handled in about.css
 */
(function () {
  'use strict';

  /* Bio column stagger delay */
  var bioCol = document.querySelector('.about-bio-col');
  if (bioCol) bioCol.style.transitionDelay = '100ms';

  /* Achievement cards stagger delay */
  document.querySelectorAll('.achievement-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

  /* Timeline items stagger delay */
  document.querySelectorAll('.timeline-item').forEach(function (item, index) {
    item.style.transitionDelay = (index * 100) + 'ms';
  });

}());