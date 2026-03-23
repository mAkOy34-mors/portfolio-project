/**
 * home.js — JavaScript for the Home page
 * Grid and dot patterns are now handled in home.css
 */
(function () {
  'use strict';

  /* Avatar column stagger delay */
  var avatarCol = document.querySelector('.hero-avatar-col');
  if (avatarCol) avatarCol.style.transitionDelay = '150ms';

  /* Blob animation delays */
  var blob2 = document.querySelector('.blob-2');
  if (blob2) blob2.style.animationDelay = '2s';

  var blob3 = document.querySelector('.blob-3');
  if (blob3) blob3.style.animationDelay = '4s';

  /* Featured project card stagger */
  document.querySelectorAll('.featured-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

}());