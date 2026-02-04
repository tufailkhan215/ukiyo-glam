/**
 * Ukiyo-Glam – cart drawer open/close and behavior
 */
(function () {
  'use strict';

  var drawer = document.getElementById('ug-cart-drawer');
  if (!drawer) return;

  var overlay = drawer.querySelector('.ug-cart-drawer__overlay');
  var openBtns = document.querySelectorAll('[data-open-cart-drawer]');
  var closeBtns = drawer.querySelectorAll('[data-close-drawer]');

  function openDrawer() {
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var focusable = drawer.querySelector('button, [href], input');
    if (focusable) focusable.focus();
  }

  function closeDrawer() {
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openDrawer();
    });
  });

  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeDrawer();
    });
  });

  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') {
      closeDrawer();
    }
  });

  if (sessionStorage.getItem('ug-open-cart')) {
    sessionStorage.removeItem('ug-open-cart');
    setTimeout(openDrawer, 100);
  }

  // Optional: intercept add-to-cart form and open drawer after add
  var productForm = document.getElementById('ug-product-form');
  if (productForm && window.ugTheme && window.ugTheme.cartType === 'drawer') {
    productForm.addEventListener('submit', function (e) {
      var form = e.target;
      if (form.getAttribute('data-ajax-add') === 'true') return;
      var submitBtn = form.querySelector('[name="add"]');
      if (submitBtn && submitBtn.disabled) return;
      e.preventDefault();
      var formData = new FormData(form);
      var addUrl = (window.ugTheme.routes.cartAdd || '/cart/add').replace(/\/$/, '');
      if (addUrl.indexOf('.js') < 0) addUrl += '.js';
      fetch(addUrl, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.status && data.status === 422) {
            if (window.ugStrings && window.ugStrings.cartError) {
              alert(window.ugStrings.cartError);
            }
            return;
          }
          document.dispatchEvent(new CustomEvent('cart:refresh'));
          sessionStorage.setItem('ug-open-cart', '1');
          window.location.reload();
        })
        .catch(function () {
          form.submit();
        });
      return false;
    });
  }
})();
