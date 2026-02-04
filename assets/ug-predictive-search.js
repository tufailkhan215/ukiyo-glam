(function () {
  'use strict';
  var searchUrl = window.ugTheme && window.ugTheme.routes && window.ugTheme.routes.predictiveSearch;
  if (!searchUrl) return;
  var input = document.getElementById('ug-search-input');
  var resultsEl = document.querySelector('[data-predictive-search-results]');
  var container = document.getElementById('ug-predictive-search');
  var openSearchBtns = document.querySelectorAll('[data-open-search]');
  var closeSearchBtns = document.querySelectorAll('[data-close-search]');
  var timeout;

  function openSearch() {
    if (container) {
      container.removeAttribute('hidden');
      container.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (input) setTimeout(function () { input.focus(); }, 50);
    }
  }
  function closeSearch() {
    if (container) {
      if (document.activeElement && container.contains(document.activeElement)) {
        document.body.setAttribute('tabindex', '-1');
        document.body.focus({ focusVisible: false });
      }
      container.setAttribute('aria-hidden', 'true');
      container.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  }

  openSearchBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  });
  closeSearchBtns.forEach(function (btn) {
    btn.addEventListener('click', closeSearch);
  });
  if (container) {
    var overlay = container.querySelector('.ug-predictive-search__overlay');
    if (overlay) overlay.addEventListener('click', closeSearch);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && container && container.getAttribute('aria-hidden') === 'false') closeSearch();
  });

  if (!input || !resultsEl) return;

  input.addEventListener('input', function () {
    var q = (input.value || '').trim();
    clearTimeout(timeout);
    if (q.length < 2) {
      resultsEl.innerHTML = '';
      return;
    }
    timeout = setTimeout(function () {
      fetch('/search/suggest.json?q=' + encodeURIComponent(q) + '&resources[type]=product&resources[limit]=6')
        .then(function (r) { return r.json(); })
        .then(function (data) {
          var html = '';
          if (data.resources && data.resources.results && data.resources.results.products && data.resources.results.products.length) {
            html += '<div class="ug-predictive-search__products"><h3>Products</h3><ul>';
            data.resources.results.products.forEach(function (p) {
              var url = p.url || ('/products/' + (p.handle || ''));
              var img = (p.featured_image && p.featured_image.url) || '';
              var title = (p.title || '').replace(/</g, '&lt;');
              var price = p.price ? (typeof p.price === 'number' ? (p.price / 100).toFixed(2) : p.price) : '';
              html += '<li><a href="' + url + '"><img src="' + img + '" alt="" width="60" height="60"><span>' + title + '</span><span>' + price + '</span></a></li>';
            });
            html += '</ul></div>';
          }
          if (!html) html = '<p class="ug-predictive-search__none">Type to search (min 2 characters)</p>';
          resultsEl.innerHTML = html;
        })
        .catch(function () {
          resultsEl.innerHTML = '<p class="ug-predictive-search__none">Search unavailable</p>';
        });
    }, 300);
  });
})();
