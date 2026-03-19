/**
 * Portfolio Main JS — Enhanced
 * Dark mode · Mobile menu · Scroll reveal · Loader · Back-to-top · Flash dismiss
 */
(function () {
  'use strict';

  // ── Page Loader ────────────────────────────────────────────────────────────
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('page-loader');
      if (loader) loader.classList.add('loaded');
    }, 800);
  });

  // ── Dark Mode ──────────────────────────────────────────────────────────────
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Wire up ALL theme toggle buttons (floating + desktop inline)
  ['darkModeToggle', 'themeToggleDesktop'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  // ── Navbar scroll shadow ───────────────────────────────────────────────────
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Back-to-top visibility
    var btt = document.getElementById('back-to-top');
    if (btt) {
      if (window.scrollY > 500) {
        btt.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        btt.classList.add('visible');
      } else {
        btt.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
        btt.classList.remove('visible');
      }
    }
  }, { passive: true });

  // ── Mobile Hamburger ───────────────────────────────────────────────────────
  var hamburger   = document.getElementById('hamburger');
  var mobileMenu  = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('hidden');
      hamburger.setAttribute('aria-expanded', !open);
    });

    // Close when a mobile link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ── Scroll Reveal (Intersection Observer) ─────────────────────────────────
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Don't unobserve — keep show class
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Auto-dismiss Flash Messages ────────────────────────────────────────────
  document.querySelectorAll('.flash-msg').forEach(function (msg) {
    setTimeout(function () {
      msg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      msg.style.opacity    = '0';
      msg.style.transform  = 'translateX(100%)';
      setTimeout(function () { msg.remove(); }, 400);
    }, 5000);
  });

  // ── Smooth scroll for in-page anchors ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();