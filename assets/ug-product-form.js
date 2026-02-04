/**
 * Ukiyo-Glam – product form (variant change, add to cart on product page)
 */
(function () {
  function findForm() {
    return document.querySelector('.ug-product-form form[action*="/cart/add"]');
  }
  function getVariantId(form) {
    var input = form && form.querySelector('input[name="id"]');
    return input ? input.value : null;
  }
  function updateUrl(variantId) {
    if (!variantId || !window.history || !window.history.replaceState) return;
    var url = new URL(window.location.href);
    url.searchParams.set('variant', variantId);
    window.history.replaceState({}, '', url.toString());
  }
  function onVariantChange(form, callback) {
    if (!form) return;
    var inputs = form.querySelectorAll('input[name="id"], select[name="id"], [data-ug-variant-select]');
    inputs.forEach(function (el) {
      el.addEventListener('change', function () {
        var id = getVariantId(form);
        if (callback) callback(id);
        updateUrl(id);
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    var form = findForm();
    if (!form) return;
    onVariantChange(form, function (variantId) {
      window.dispatchEvent(new CustomEvent('ug-variant-change', { detail: { variantId: variantId } }));
    });
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('data-ug-ajax-add') === 'true') {
        e.preventDefault();
        var formData = new FormData(form);
        var addUrl = (window.ugTheme && window.ugTheme.routes && window.ugTheme.routes.cartAdd) || '/cart/add.js';
        fetch(addUrl, { method: 'POST', body: formData })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (data.status && data.status === 422) {
              if (window.ugCartDrawer && typeof window.ugCartDrawer.showError === 'function') {
                window.ugCartDrawer.showError(data.description || 'Error adding to cart');
              } else {
                alert(data.description || 'Error adding to cart');
              }
              return;
            }
            if (window.ugCartDrawer && typeof window.ugCartDrawer.open === 'function') window.ugCartDrawer.open();
            if (window.ugCartDrawer && typeof window.ugCartDrawer.refresh === 'function') window.ugCartDrawer.refresh();
          })
          .catch(function () {
            form.submit();
          });
      }
    });
  });
})();
