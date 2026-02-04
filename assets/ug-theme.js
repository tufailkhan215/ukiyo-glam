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
    if (e.key === 'Escape' && menuDrawer && menuDrawer.getAttribute('aria-hidden') === 'false') {
      closeMenu();
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
