/**
 * Ukiyo-Glam theme – global behavior
 */
(function () {
  'use strict';

  var body = document.body;
  var mobileOverlay = document.querySelector('.ug-mobile-overlay');
  var menuDrawer = document.getElementById('ug-mobile-menu');
  var scrollTopBtn = document.querySelector('.ug-scroll-top');
  var openMenuBtns = document.querySelectorAll('[data-open-menu]');
  var closeMenuBtns = document.querySelectorAll('[data-close-menu]');

  function openMenu() {
    if (menuDrawer) {
      menuDrawer.setAttribute('aria-hidden', 'false');
      if (mobileOverlay) mobileOverlay.style.display = 'block';
      body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (menuDrawer) {
      menuDrawer.setAttribute('aria-hidden', 'true');
      if (mobileOverlay) mobileOverlay.style.display = 'none';
      body.style.overflow = '';
    }
  }

  openMenuBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openMenu();
    });
  });

  closeMenuBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });
  });

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menuDrawer && menuDrawer.getAttribute('aria-hidden') === 'false') {
      closeMenu();
      return;
    }
    var compareModal = document.getElementById('ug-compare-modal');
    if (compareModal && compareModal.getAttribute('aria-hidden') === 'false') {
      compareModal.setAttribute('aria-hidden', 'true');
      compareModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
      return;
    }
    var searchOverlay = document.getElementById('ug-search-overlay');
    if (searchOverlay && searchOverlay.getAttribute('aria-hidden') === 'false') {
      searchOverlay.setAttribute('aria-hidden', 'true');
      searchOverlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
      return;
    }
    var newsletterModal = document.getElementById('ug-newsletter-modal');
    if (newsletterModal && newsletterModal.getAttribute('aria-hidden') === 'false') {
      newsletterModal.setAttribute('aria-hidden', 'true');
      newsletterModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });

  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.hidden = window.pageYOffset < 400;
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Compare modal: close on overlay/close button
  var compareModal = document.getElementById('ug-compare-modal');
  if (compareModal) {
    document.querySelectorAll('[data-ug-compare-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        compareModal.setAttribute('aria-hidden', 'true');
        compareModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      });
    });
    document.body.addEventListener('click', function (e) {
      if (e.target.closest('[data-ug-compare-open]')) {
        compareModal.removeAttribute('hidden');
        compareModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Search overlay: close on close button
  var searchOverlay = document.getElementById('ug-search-overlay');
  if (searchOverlay) {
    document.querySelectorAll('[data-ug-search-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        searchOverlay.setAttribute('aria-hidden', 'true');
        searchOverlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
      });
    });
  }

  // Newsletter modal: close on overlay/close; show after delay if enabled
  var newsletterModal = document.getElementById('ug-newsletter-modal');
  if (newsletterModal) {
    var closeNewsletter = function () {
      newsletterModal.setAttribute('aria-hidden', 'true');
      newsletterModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('[data-close-newsletter]').forEach(function (el) {
      el.addEventListener('click', closeNewsletter);
    });
    var enabled = newsletterModal.getAttribute('data-newsletter-enabled') === 'true';
    var delay = parseInt(newsletterModal.getAttribute('data-newsletter-delay') || '5', 10) * 1000;
    var showOnce = newsletterModal.getAttribute('data-newsletter-show-once') === 'true';
    if (enabled && (!showOnce || !sessionStorage.getItem('ug_newsletter_shown'))) {
      setTimeout(function () {
        if (showOnce) sessionStorage.setItem('ug_newsletter_shown', '1');
        newsletterModal.removeAttribute('hidden');
        newsletterModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }, delay);
    }
  }

  // Cart count refresh (e.g. after add to cart)
  if (window.ugTheme && window.ugTheme.cartType === 'drawer') {
    document.addEventListener('cart:refresh', function () {
      fetch(window.ugTheme.routes.cart + '.js')
        .then(function (r) { return r.json(); })
        .then(function (cart) {
          var el = document.querySelector('[data-cart-count]');
          if (el) el.textContent = cart.item_count;
        })
        .catch(function () {});
    });
  }
})();
