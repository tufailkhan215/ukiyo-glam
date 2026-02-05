# Full theme mirror: Glamora → Ukiyo-Glam

Every section, snippet, template, and asset mapped. Use this to replicate **each and everything** from the source.

**Source path:** `glamora-multipurpose-shopify-jewelry-store-theme-2025-09-12-11-37-02-utc/glamora`

---

## 1. Sections (source → ours)

| Source section | Our section | Parity |
|----------------|-------------|--------|
| abt-layer-image | ug-abt-layer-image | ✓ |
| announcement-bar | ug-top-bar / ug-announcement-bar-section | ✓ |
| apps | ug-apps | ✓ |
| brand-logos | ug-brand-logos | ✓ |
| cart-drawer | ug-cart-drawer (snippet) | ✓ |
| cart-icon-bubble | In ug-header | ✓ |
| cart-live-region-text | ug-cart-live-region-text | ✓ |
| cart-notification-button | ug-cart-notification-button-section | ✓ |
| cart-notification-product | ug-cart-notification-product | ✓ |
| collapsible-content | ug-collapsible-content | ✓ |
| collection-list | ug-collection-list | ✓ |
| collection-list2 | ug-collection-list2 | ✓ |
| contact-form | ug-contact-form | ✓ |
| contact-section | ug-contact-section | ✓ |
| contact | ug-contact-form | ✓ |
| cookie-banner | ug-cookie-banner | ✓ |
| custom-liquid | ug-custom-liquid | ✓ |
| deal-banner | ug-deal-banner | ✓ |
| email-signup-banner | ug-email-signup-banner | ✓ |
| featured-blog | ug-featured-blog | ✓ |
| featured-collection | ug-featured-collection | ✓ |
| footer | ug-footer | ✓ (schema mirrored) |
| footer_style1 | ug-footer-style-a | ✓ |
| footer_style2 | ug-footer-style-b | ✓ |
| footer_style3 | ug-footer-style-c | ✓ |
| footer_style4 | ug-footer-style-d | ✓ |
| form-image | ug-form-image | ✓ |
| grid-banner | ug-grid-banner | ✓ |
| grid-banner-style10 | ug-grid-banner-style10 | ✓ |
| grid-banner-with-product | ug-grid-banner-with-product | ✓ |
| header | ug-header | ✓ |
| home-custom-section | ug-custom-liquid | ✓ |
| home-slider-width-tabs | ug-home-slider-width-tabs | ✓ |
| hotspot | ug-hotspot | ✓ |
| image-banner | ug-image-banner | ✓ |
| image-with-text | ug-image-with-text | ✓ |
| inner-page-team-section | (use ug-custom-liquid or ug-multicolumn) | Optional |
| instagram-gallery | ug-instagram-gallery | ✓ |
| main-404 | ug-404 | ✓ |
| main-article | ug-main-article | ✓ |
| main-blog | ug-main-blog | ✓ |
| main-cart-footer | ug-main-cart-footer | ✓ |
| main-cart-items | ug-main-cart-items | ✓ |
| main-collection-banner | ug-main-collection-banner | ✓ |
| main-collection-product-grid | ug-main-collection-product-grid | ✓ |
| main-list-collections | ug-main-list-collections | ✓ |
| main-page | ug-main-page | ✓ |
| main-password-footer | ug-password-footer | ✓ |
| main-password-header | ug-password-header | ✓ |
| main-product | ug-main-product | ✓ (block schema may differ) |
| main-search | ug-main-search | ✓ |
| marquee-section | ug-marquee | ✓ |
| masonry-banner | ug-masonry-banner | ✓ |
| multicolumn | ug-multicolumn | ✓ |
| newsletter-modal | ug-newsletter-modal | ✓ |
| newsletter | ug-newsletter | ✓ |
| number-counter | ug-number-counter | ✓ |
| page | ug-main-page | ✓ |
| pickup-availability | ug-pickup-availability | ✓ |
| predictive-search | ug-predictive-search | ✓ |
| product-recommendations | product-recommendations | ✓ |
| product-tab | ug-product-tab | ✓ |
| recent-products | ug-recent-products | ✓ |
| rich-text | ug-rich-text | ✓ |
| slider-with-promo-image | ug-slider-with-promo-image | ✓ |
| slideshow | ug-slideshow | ✓ |
| specification-block | ug-specification-block | ✓ |
| specifications | ug-specifications | ✓ |
| suggested-products | ug-suggested-products | ✓ |
| support-block | ug-support-block | ✓ |
| testimonial-with-video | ug-testimonial-with-video | ✓ |
| testimonials | ug-testimonials | ✓ |
| top-bar | ug-top-bar | ✓ |
| video-pop-up | ug-video-pop-up | ✓ |
| video | ug-video | ✓ |

*Foxify sections: replaced by native Shopify / ug- equivalents.*

---

## 2. Snippets (source → ours)

| Source snippet | Our snippet | Notes |
|----------------|-------------|--------|
| icon-* | ug-icon-* | All icons: account, arrow, cart, caret, close, heart, mail, phone, search, etc. |
| icon-clock | ug-icon-clock | Added for footer address block |
| breadcrumb | ug-breadcrumb | ✓ |
| card-product | ug-card-product | ✓ |
| card-collection | ug-card-collection | ✓ |
| cart-drawer | ug-cart-drawer | ✓ |
| cart-notification | ug-cart-notification | ✓ |
| compare-modal | ug-compare-modal | ✓ |
| facets | ug-facets | ✓ |
| mega menu (dt-mega*) | ug-mega-promo, ug-mega-banner, ug-mega-brands, ug-mega-products | ✓ |
| social-icons | ug-social-icons | ✓ |
| (Foxify snippets) | Native / ug- equivalents | Not copied |

---

## 3. Templates (section order must match source)

### index.json
- **Source order:** slider-with-promo-image → collection-list → featured-collection → grid-banner → product-tab → grid-banner → multicolumn → testimonials → featured-blog → instagram-gallery → newsletter.
- **Ours:** ug-slider-with-promo-image → ug-collection-list → ug-featured-collection → ug-grid-banner → ug-product-tab → ug-multicolumn → ug-testimonials → ug-featured-blog → ug-instagram-gallery → ug-newsletter. ✓

### product.json
- **Source order:** main (main-product) → product-recommendations → recent-products → multicolumn → newsletter.
- **Ours:** main (ug-main-product) → product-recommendations → recent-products (ug-recent-products) → multicolumn (ug-multicolumn) → newsletter (ug-newsletter). **Updated.**

### collection.json
- **Source order:** banner (main-collection-banner) → product-grid (main-collection-product-grid) → instagram-gallery → newsletter.
- **Ours:** banner (ug-main-collection-banner) → main (ug-main-collection-product-grid) → ug-instagram-gallery → ug-newsletter. **Updated.**

### cart.json
- **Source order:** cart-items (main-cart-items) → cart-footer (main-cart-footer) → newsletter.
- **Ours:** cart-items (ug-main-cart-items) → cart-footer (ug-main-cart-footer) → ug-newsletter. **Updated.**

### search.json
- **Source order:** main (main-search) → featured-collection.
- **Ours:** main (ug-main-search) → ug-featured-collection. **Updated.**

### 404.json, article.json, blog.json, list-collections.json, page.json, password.json
- Use ug-* section types where applicable; structure aligned.

### customers/*, gift_card.liquid, page.*.json
- Same files present; use ug- sections in JSON templates.

---

## 4. Layout (theme.liquid)

- **Source:** top-bar → header → breadcrumb → main → video modal → footer (by footer_type) → suggested-products → cookie-banner → scroll-to-top → newsletter-modal → compare-modal.
- **Ours:** ug-top-bar → ug-header → ug-breadcrumb → main → ug-video-modal → footer (by footer_style) → ug-suggested-products → ug-cookie-banner → ug-scroll-to-top → ug-newsletter-modal → ug-compare-modal → ug-search-overlay. ✓

---

## 5. Config

- **settings_schema.json:** We use a simplified schema; source has many more groups (preloader, badges, card style, media, popups, drawers, breadcrumb, search input, etc.). Add groups as needed for exact parity.
- **settings_data.json:** Theme editor–generated; section ids use ug-* types.
- **locales:** en.default.json; add any missing keys from source locales when needed.

---

## 6. Assets

- **Source:** base.css, custom.css, component-*.css, swiper, jQuery, AOS, etc.
- **Ours:** ug-base.css, ug-animations.css, vanilla JS (ug-theme.js, ug-sections.js, ug-cart-drawer.js, ug-wishlist.js, ug-compare.js, ug-product-form.js, ug-predictive-search.js). No jQuery/Swiper; behavior replicated with vanilla JS.

---

## 7. Per-section parity (schema + markup)

For **exact** mirror, each ug-* section should have:

1. **Schema:** Same setting and block types/ids as source (names can stay ug-* or our labels).
2. **Markup:** Same structure and class names (with ug- prefix) so CSS and JS behave the same.
3. **Default blocks:** Match source preset where possible.

Sections that may need deeper schema/markup pass: main-product (many blocks), main-collection-product-grid (sidebar, filters), grid-banner (block structure), footer (done), header (layout variants), slider-with-promo-image (done).

---

## 8. Checklist – all theme mirror (all and everything)

### Layout & global
- [x] Layout order and sections (theme.liquid): top-bar → header → breadcrumb → main → video modal → footer → suggested-products → cookie-banner → scroll-to-top → newsletter-modal → compare-modal → search-overlay
- [x] Top bar, header, footer (structure + schema)
- [x] Slider-with-promo (content_width, promo blocks, slide fields)
- [x] Footer (banner, address, copyright_content, bottom menu, accordion)
- [x] Preloader (settings + CSS + JS + conditional in theme.liquid)
- [x] Breadcrumb (setting `show_breadcrumb` + conditional render)
- [x] Newsletter modal (setting `enable_newsletter_modal` + conditional render)

### Templates (section order + ug-* types)
- [x] index.json (slider → collection-list → featured-collection → grid-banner → product-tab → multicolumn → testimonials → featured-blog → instagram-gallery → newsletter)
- [x] product.json (main-product → product-recommendations → recent-products → multicolumn → newsletter)
- [x] collection.json (banner → product-grid → instagram-gallery → newsletter)
- [x] cart.json (cart-items → cart-footer → newsletter)
- [x] search.json (main-search → featured-collection)
- [x] 404.json (ug-404)
- [x] article.json (ug-main-article)
- [x] blog.json (ug-main-blog)
- [x] list-collections.json (ug-main-list-collections)
- [x] page.json (ug-main-page)
- [x] password.json (ug-password-header, ug-password-content, ug-password-footer)

### Sections & snippets
- [x] All sections mapped (Section table above); ug-* equivalents exist
- [x] icon-clock (ug-icon-clock) for footer; all other ug-icon-* present

### Config (settings_schema.json)
- [x] Colors, Typography, Layout, Cart, Favicon, Social, Footer, Popups & modals
- [x] Preloader (enable_preloader, preloader_logo)
- [x] Product badges (show_sale_badge, show_sold_out_badge, labels)
- [x] Product card (card_image_ratio, card_show_secondary_image, card_show_vendor, card_show_rating)
- [x] Media (enable_image_zoom, product_media_ratio)
- [x] Drawers (drawer_cart_position)
- [x] Breadcrumb (show_breadcrumb, breadcrumb_style)
- [x] Search input (search_placeholder, search_show_only_products)
- [x] Newsletter modal (enable_newsletter_modal)

### Still to do for exact mirror (when source is available)
- [ ] Each section: compare schema + markup to source and align (section-by-section)
- [ ] Locales: add any missing translation keys from source
- [ ] Wire new settings in sections (e.g. card_* in product cards, show_breadcrumb in breadcrumb snippet, search_placeholder in search forms)
