/**
 * contact.js — Form validation and submission for the Contact page
 */

(function () {
  'use strict';

  var form       = document.getElementById('contact-form');
  var successMsg = document.getElementById('success-msg');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var isValid = true;

    // ── Validate name ───────────────────────────────────────
    var name = document.getElementById('name').value.trim();
    if (!name) {
      showError('field-name', 'error-name');
      isValid = false;
    } else {
      clearError('field-name', 'error-name');
    }

    // ── Validate email ──────────────────────────────────────
    var email = document.getElementById('email').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      showError('field-email', 'error-email');
      isValid = false;
    } else {
      clearError('field-email', 'error-email');
    }

    // ── Validate subject ────────────────────────────────────
    var subject = document.getElementById('subject').value.trim();
    if (!subject) {
      showError('field-subject', 'error-subject');
      isValid = false;
    } else {
      clearError('field-subject', 'error-subject');
    }

    // ── Validate message ────────────────────────────────────
    var message = document.getElementById('message').value.trim();
    if (message.length < 20) {
      showError('field-message', 'error-message');
      isValid = false;
    } else {
      clearError('field-message', 'error-message');
    }

    // ── Submit if valid ─────────────────────────────────────
    if (isValid) {
      showSuccess();
      form.reset();
    }
  });

  // ── Helper: show field error ──────────────────────────────
  function showError(fieldId, errorId) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(errorId);
    if (field) field.classList.add('has-error');
    if (error) error.classList.add('show');
  }

  // ── Helper: clear field error ─────────────────────────────
  function clearError(fieldId, errorId) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(errorId);
    if (field) field.classList.remove('has-error');
    if (error) error.classList.remove('show');
  }

  // ── Helper: show success message ──────────────────────────
  function showSuccess() {
    if (!successMsg) return;
    successMsg.classList.add('show');
    setTimeout(function () {
      successMsg.classList.remove('show');
    }, 5000);
  }

  // ── Clear errors on input ─────────────────────────────────
  document.getElementById('name').addEventListener('input', function () {
    clearError('field-name', 'error-name');
  });
  document.getElementById('email').addEventListener('input', function () {
    clearError('field-email', 'error-email');
  });
  document.getElementById('subject').addEventListener('input', function () {
    clearError('field-subject', 'error-subject');
  });
  document.getElementById('message').addEventListener('input', function () {
    clearError('field-message', 'error-message');
  });

}());