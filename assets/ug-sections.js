/**
 * Ukiyo-Glam – section behaviors: slideshow, testimonials, product tabs, countdown, quantity, facets, scroll reveal
 */
(function () {
  'use strict';

  /* Slideshow */
  document.querySelectorAll('[data-slideshow]').forEach(function (track) {
    var section = track.closest('.ug-slideshow');
    if (!section) return;
    var slides = track.querySelectorAll('.ug-slideshow__slide');
    var total = slides.length;
    if (total <= 1) return;
    var current = 0;
    var autoplaySec = parseInt(section.getAttribute('data-autoplay-seconds') || '5', 10) || 5;
    var timer;

    function goTo(i) {
      current = (i + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      section.querySelectorAll('.ug-slideshow__dots button').forEach(function (btn, j) {
        btn.classList.toggle('ug-active', j === current);
      });
    }

    var prevBtn = section.querySelector('[data-slideshow-prev]');
    var nextBtn = section.querySelector('[data-slideshow-next]');
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); resetTimer(); });

    var dotsEl = section.querySelector('[data-slideshow-dots]');
    if (dotsEl) {
      for (var d = 0; d < total; d++) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Slide ' + (d + 1));
        if (d === 0) btn.classList.add('ug-active');
        (function (idx) { btn.addEventListener('click', function () { goTo(idx); resetTimer(); }); })(d);
        dotsEl.appendChild(btn);
      }
    }

    function resetTimer() {
      clearInterval(timer);
      if (autoplaySec > 0) timer = setInterval(function () { goTo(current + 1); }, autoplaySec * 1000);
    }
    if (autoplaySec > 0) timer = setInterval(function () { goTo(current + 1); }, autoplaySec * 1000);
  });

  /* Testimonials slider */
  document.querySelectorAll('[data-testimonials-slider]').forEach(function (slider) {
    var track = slider.querySelector('.ug-testimonials__track');
    var slides = slider.querySelectorAll('.ug-testimonials__slide');
    if (slides.length <= 1) return;
    var index = 0;
    function show() {
      track.style.transform = 'translateX(-' + index * 100 + '%)';
    }
    slider.querySelector('[data-testimonials-prev]').addEventListener('click', function () {
      index = Math.max(0, index - 1);
      show();
    });
    slider.querySelector('[data-testimonials-next]').addEventListener('click', function () {
      index = Math.min(slides.length - 1, index + 1);
      show();
    });
    track.style.width = (slides.length * 100) + '%';
    slides.forEach(function (s) { s.style.width = (100 / slides.length) + '%'; });
  });

  /* Product tabs */
  document.querySelectorAll('[data-product-tabs]').forEach(function (wrapper) {
    var tabs = wrapper.querySelectorAll('.ug-product-tab__tab');
    var panels = wrapper.querySelectorAll('.ug-product-tab__panel');
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('ug-product-tab__tab--active'); });
        panels.forEach(function (p) { p.classList.remove('ug-product-tab__panel--active'); });
        tab.classList.add('ug-product-tab__tab--active');
        if (panels[i]) panels[i].classList.add('ug-product-tab__panel--active');
      });
    });
  });

  /* Countdown */
  document.querySelectorAll('[data-countdown]').forEach(function (el) {
    var end = el.getAttribute('data-end-date');
    if (!end) return;
    var endDate = new Date(end).getTime();
    function tick() {
      var now = Date.now();
      var diff = Math.max(0, endDate - now);
      if (diff === 0) {
        el.querySelector('[data-days]').textContent = '0';
        el.querySelector('[data-hours]').textContent = '0';
        el.querySelector('[data-mins]').textContent = '0';
        el.querySelector('[data-secs]').textContent = '0';
        return;
      }
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      el.querySelector('[data-days]').textContent = d;
      el.querySelector('[data-hours]').textContent = h;
      el.querySelector('[data-mins]').textContent = m;
      el.querySelector('[data-secs]').textContent = s;
    }
    tick();
    setInterval(tick, 1000);
  });

  /* Quantity selector */
  document.querySelectorAll('[data-quantity]').forEach(function (wrap) {
    var input = wrap.querySelector('.ug-quantity__input');
    if (!input) return;
    wrap.querySelector('[data-minus]').addEventListener('click', function () {
      var v = parseInt(input.value, 10) || 0;
      input.value = Math.max(parseInt(input.min, 10) || 1, v - 1);
    });
    wrap.querySelector('[data-plus]').addEventListener('click', function () {
      var v = parseInt(input.value, 10) || 0;
      var max = parseInt(input.max, 10) || 99;
      input.value = Math.min(max, v + 1);
    });
  });

  /* Facets sort redirect */
  document.querySelectorAll('[data-sort-select]').forEach(function (select) {
    select.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('sort_by', select.value);
      window.location.href = url.toString();
    });
  });

  /* Scroll reveal (animation on scroll) */
  var revealEls = document.querySelectorAll('.ug-reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('ug-reveal--visible');
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* Quick view: open modal and show link to product (full quick-view would need Section API or product JSON) */
  var qvModal = document.getElementById('ug-quick-view');
  var qvContent = document.querySelector('[data-quick-view-content]');
  document.querySelectorAll('[data-quick-view]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var handle = btn.getAttribute('data-quick-view');
      if (!handle || !qvModal || !qvContent) return;
      qvModal.setAttribute('aria-hidden', 'false');
      qvContent.innerHTML = '<p>Loading...</p>';
      var url = '/products/' + handle;
      fetch(url)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');
          var mainProduct = doc.querySelector('.ug-main-product') || doc.querySelector('[class*="product"]');
          if (mainProduct) {
            qvContent.innerHTML = mainProduct.outerHTML + '<p><a href="' + url + '" class="ug-btn ug-btn--primary">View full details</a></p>';
          } else {
            qvContent.innerHTML = '<p><a href="' + url + '" class="ug-btn ug-btn--primary">View product</a></p>';
          }
        })
        .catch(function () {
          qvContent.innerHTML = '<p><a href="' + url + '" class="ug-btn ug-btn--primary">View product</a></p>';
        });
    });
  });
  document.querySelectorAll('[data-close-quick-view]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (qvModal) qvModal.setAttribute('aria-hidden', 'true');
    });
  });

  /* Video popup */
  var videoPopupModal = document.getElementById('ug-video-popup-modal');
  var videoPopupPlayer = document.querySelector('[data-video-popup-player]');
  document.querySelectorAll('[data-video-popup]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var type = el.getAttribute('data-video-type') || '';
      var id = el.getAttribute('data-video-id') || '';
      if (!id || !videoPopupModal || !videoPopupPlayer) return;
      var embed = '';
      if (type === 'youtube') embed = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" allowfullscreen></iframe>';
      else if (type === 'vimeo') embed = '<iframe src="https://player.vimeo.com/video/' + id + '?autoplay=1" allowfullscreen></iframe>';
      videoPopupPlayer.innerHTML = embed;
      videoPopupModal.setAttribute('aria-hidden', 'false');
    });
  });
  document.querySelectorAll('[data-close-video-popup]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (videoPopupModal) {
        videoPopupModal.setAttribute('aria-hidden', 'true');
        if (videoPopupPlayer) videoPopupPlayer.innerHTML = '';
      }
    });
  });

  /* Number counter: count up when in view */
  var countEls = document.querySelectorAll('[data-count-up]');
  if (countEls.length && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var end = parseInt(el.getAttribute('data-end'), 10) || 0;
        var numEl = el.querySelector('.ug-number-counter__number');
        if (!numEl || end <= 0) return;
        countObserver.unobserve(el);
        var start = 0;
        var duration = 1500;
        var startTime = null;
        function step(t) {
          if (!startTime) startTime = t;
          var progress = Math.min((t - startTime) / duration, 1);
          var val = Math.floor(start + (end - start) * progress);
          numEl.textContent = val;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.2 });
    countEls.forEach(function (el) { countObserver.observe(el); });
  }

  /* Gift recipient toggle */
  document.querySelectorAll('[data-gift-recipient-toggle]').forEach(function (cb) {
    var wrap = cb.closest('[data-gift-recipient]');
    var fields = wrap && wrap.querySelector('[data-gift-recipient-fields]');
    if (!fields) return;
    cb.addEventListener('change', function () {
      fields.hidden = !cb.checked;
    });
  });
})();
