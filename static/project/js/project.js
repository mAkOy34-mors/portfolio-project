/**
 * projects.js — JavaScript for project_list and project_detail pages
 * Grid background is handled in projects.css
 */
(function () {
  'use strict';

  /* Stagger delay for project cards */
  document.querySelectorAll('.project-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

  /* Stagger delay for related cards */
  document.querySelectorAll('.related-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 100) + 'ms';
  });

  /* Sidebar stagger delay on detail page */
  var sidebarCol = document.querySelector('.detail-sidebar-col');
  if (sidebarCol) sidebarCol.style.transitionDelay = '100ms';

}());