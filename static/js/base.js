/**
 * base.js — Global JavaScript for the entire portfolio
 * Handles: page loader, dark mode, navbar, mobile menu,
 *          back-to-top, scroll reveal, flash auto-dismiss
 */

(function () {
  'use strict';

  // ── Page Loader ────────────────────────────────────────────────────────────
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('page-loader');
      if (loader) loader.classList.add('loaded');
    }, 600);
  });

  // ── Dark / Light Mode ──────────────────────────────────────────────────────
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
    updateThemeIcons();
  }

  function updateThemeIcons() {
    var isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-moon').forEach(function (el) {
      el.style.display = isDark ? 'none' : 'block';
    });
    document.querySelectorAll('.theme-icon-sun').forEach(function (el) {
      el.style.display = isDark ? 'block' : 'none';
    });
  }

  // ── Navbar Scroll Shadow ───────────────────────────────────────────────────
  window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    var btt = document.getElementById('back-to-top');
    if (btt) {
      btt.classList.toggle('visible', window.scrollY > 500);
    }
  }, { passive: true });

  // ── Init — runs immediately regardless of DOM state ───────────────────────
  function init() {

    // Theme icons + buttons
    updateThemeIcons();
    document.querySelectorAll('.theme-toggle-btn, .theme-toggle-float, #darkModeToggle, #themeToggleDesktop').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });

    // ── Hamburger Menu ───────────────────────────────────────────────────────
    var navbar     = document.getElementById('navbar');
    var hamburger  = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {

      function openMenu() {
        mobileMenu.style.display       = 'flex';
        mobileMenu.style.flexDirection = 'column';
        mobileMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        var lines = hamburger.querySelectorAll('.hamburger-line');
        if (lines[0]) lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (lines[1]) lines[1].style.opacity   = '0';
        if (lines[2]) lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      }

      function closeMenu() {
        mobileMenu.style.display = 'none';
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.querySelectorAll('.hamburger-line').forEach(function (l) {
          l.style.transform = '';
          l.style.opacity   = '';
        });
      }

      mobileMenu.style.display = 'none';

      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('click', function (e) {
        if (navbar && !navbar.contains(e.target)) {
          closeMenu();
        }
      });
    }

    // ── Scroll Reveal ────────────────────────────────────────────────────────
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        revealObserver.observe(el);
      });
    }

    // ── Auto-dismiss Flash Messages ──────────────────────────────────────────
    document.querySelectorAll('.flash-msg').forEach(function (msg) {
      setTimeout(function () {
        msg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        msg.style.opacity    = '0';
        msg.style.transform  = 'translateX(100%)';
        setTimeout(function () { msg.remove(); }, 400);
      }, 5000);
    });

    // ── Smooth scroll for anchor links ───────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Run init immediately if DOM is ready, otherwise wait for it
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());