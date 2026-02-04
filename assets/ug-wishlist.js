/**
 * Ukiyo-Glam – wishlist (localStorage)
 */
(function () {
  var STORAGE_KEY = 'ug_wishlist';
  function get() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (_) {
      return [];
    }
  }
  function set(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }
  function add(id) {
    var ids = get();
    if (ids.indexOf(id) === -1) ids.push(id);
    set(ids);
    dispatch();
  }
  function remove(id) {
    set(get().filter(function (x) { return x !== id; }));
    dispatch();
  }
  function has(id) {
    return get().indexOf(id) !== -1;
  }
  function dispatch() {
    window.dispatchEvent(new CustomEvent('ug-wishlist-update', { detail: { ids: get() } }));
  }
  window.ugWishlist = { get: get, set: set, add: add, remove: remove, has: has };
  document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-ug-wishlist-toggle]');
      if (!btn) return;
      e.preventDefault();
      var id = (btn.getAttribute('data-ug-wishlist-toggle') || '').trim();
      if (!id) return;
      if (has(id)) remove(id); else add(id);
      btn.classList.toggle('ug-wishlist--active', has(id));
      if (btn.getAttribute('aria-pressed') !== undefined) btn.setAttribute('aria-pressed', has(id));
    });
  });
})();
