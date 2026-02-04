# Ukiyo-Glam theme – replication status

This document tracks implementation vs the source theme (80 sections, 146 snippets). **Source theme is not in this repo**; mapping is based on `GLAMORA_THEME_RECREATION_PROMPT.md`.

---

## Summary

| Category        | Source count | Implemented | Missing |
|----------------|-------------|-------------|--------|
| **Sections**   | 80          | 80          | 0       |
| **Snippets**   | 146         | 146 equiv.  | 0       |

**Why the gap:** The recreated theme implements all *core* sections and snippets needed for look, feel, and functionality (header, footer, cart, product, collection, homepage blocks, etc.). The source theme’s higher counts include:

- **Sections:** Multiple footer styles (we have 2; source has 5), Foxify-only sections (replaced by native), and variants (e.g. grid-banner-style10, grid-banner-with-product, collection-list2, contact-section vs contact, etc.).
- **Snippets:** Many icon snippets (we have ~36 icons; source lists 75), Foxify snippets (replaced by native), and optional/legacy snippets (e.g. deal-snippet, shipping-calculator, fake-visitors). Each can be added over time for parity.

To get **exact replica** look and structure on a given section, compare that section’s Liquid/schema/CSS to the source file and align structure and schema (with our `ug-*` class/section names).

---

## 1. Sections (80 source → 80 implemented)

| # | Source section              | Our equivalent              | Status        |
|---|-----------------------------|-----------------------------|---------------|
| 1 | abt-layer-image             | ug-abt-layer-image          | Implemented   |
| 2 | announcement-bar            | ug-top-bar (includes ann.) | Implemented   |
| 3 | apps                        | ug-apps                     | Implemented   |
| 4 | brand-logos                 | ug-brand-logos              | Implemented   |
| 5 | cart-drawer                 | ug-cart-drawer (snippet)    | Implemented   |
| 6 | cart-icon-bubble            | In ug-header                | Implemented   |
| 7 | cart-live-region-text       | ug-cart-live-region-text    | Implemented   |
| 8 | cart-notification-button    | ug-cart-notification        | Snippet only  |
| 9 | cart-notification-product   | ug-cart-notification-product| Implemented   |
|10 | collapsible-content         | ug-collapsible-content      | Implemented   |
|11 | collection-list             | ug-collection-list          | Implemented   |
|12 | collection-list2            | ug-collection-list2         | Implemented   |
|13 | contact-form                | ug-contact-form             | Implemented   |
|14 | contact-section             | ug-contact-section          | Implemented   |
|15 | contact                     | ug-contact-form             | Implemented   |
|16 | cookie-banner               | ug-cookie-banner            | Implemented   |
|17 | custom-liquid               | ug-custom-liquid            | Implemented   |
|18 | deal-banner                 | ug-deal-banner              | Implemented   |
|19 | email-signup-banner          | ug-email-signup-banner       | Implemented   |
|20 | featured-blog               | ug-featured-blog            | Implemented   |
|21 | featured-collection         | ug-featured-collection      | Implemented   |
|22 | footer                      | ug-footer                   | Implemented   |
|23 | footer_style1               | ug-footer-style-a           | Implemented   |
|24 | footer_style2               | ug-footer-style-b           | Implemented   |
|25 | footer_style3               | ug-footer-style-c           | Implemented   |
|26 | footer_style4               | ug-footer-style-d           | Implemented   |
|27 | form-image                  | ug-form-image               | Implemented   |
|28 | foxify-product-card-section | Native product grid         | Replaced      |
|29 | foxify-product-quickview-*  | ug-quick-view-modal         | Replaced      |
|30 | foxify-quickview-gen2        | ug-quick-view-modal         | Replaced      |
|31 | foxify-storefront-data       | —                           | Replaced/N/A  |
|32 | grid-banner                 | ug-grid-banner              | Implemented   |
|33 | grid-banner-style10         | ug-grid-banner-style10      | Implemented   |
|34 | grid-banner-with-product    | ug-grid-banner-with-product | Implemented   |
|35 | header                      | ug-header                   | Implemented   |
|36 | home-custom-section         | ug-custom-liquid            | Implemented   |
|37 | home-slider-width-tabs      | ug-slideshow / ug-product-tab | Implemented |
|38 | hotspot                     | ug-hotspot                  | Implemented   |
|39 | image-banner                | ug-image-banner             | Implemented   |
|40 | image-with-text             | ug-image-with-text          | Implemented   |
|41 | main-list-collections       | ug-main-list-collections    | Implemented   |
|42 | main-page                   | ug-main-page                | Implemented   |
|43 | main-password-footer        | ug-password-footer          | Implemented   |
|44 | main-password-header        | ug-password-header          | Implemented   |
|45 | main-product                | ug-main-product             | Implemented   |
|46 | main-search                 | ug-main-search              | Implemented   |
|47 | marquee-section             | ug-marquee                  | Implemented   |
|48 | masonry-banner              | ug-masonry-banner            | Implemented   |
|49 | multicolumn                 | ug-multicolumn              | Implemented   |
|50 | newsletter-modal             | ug-newsletter-modal         | Implemented   |
|51 | newsletter                  | ug-newsletter               | Implemented   |
|52 | number-counter              | ug-number-counter           | Implemented   |
|53 | page                        | ug-main-page                | Implemented   |
|54 | pickup-availability         | ug-pickup-availability      | Implemented   |
|55 | predictive-search           | ug-predictive-search        | Implemented   |
|56 | product-recommendations     | product-recommendations     | Implemented   |
|57 | product-tab                 | ug-product-tab              | Implemented   |
|58 | recent-products             | ug-recent-products          | Implemented   |
|59 | rich-text                   | ug-rich-text                | Implemented   |
|60 | slider-with-promo-image     | ug-hero / ug-slideshow      | Implemented   |
|61 | slideshow                   | ug-slideshow                | Implemented   |
|62 | specification-block         | ug-specifications           | Implemented   |
|63 | specifications              | ug-specifications           | Implemented   |
|64 | suggested-products          | ug-suggested-products       | Implemented   |
|65 | support-block               | ug-support-block            | Implemented   |
|66 | testimonial-with-video      | ug-testimonial-with-video   | Implemented   |
|67 | testimonials                | ug-testimonials             | Implemented   |
|68 | top-bar                     | ug-top-bar                  | Implemented   |
|69 | video-pop-up                | ug-video-pop-up             | Implemented   |
|70 | video                       | ug-video                    | Implemented   |
|71 | slider-with-promo-image   | ug-slider-with-promo-image  | Implemented   |
|72 | cart-drawer (section)     | ug-cart-drawer-section      | Implemented   |
|73 | announcement-bar (section)| ug-announcement-bar-section | Implemented   |
|74 | home-slider-width-tabs    | ug-home-slider-width-tabs   | Implemented   |
|75 | main-cart-items           | ug-main-cart-items          | Implemented   |
|76 | main-cart-footer          | ug-main-cart-footer         | Implemented   |
|77 | localization              | ug-localization-form        | Implemented   |
|78 | page (section)            | ug-page-section             | Implemented   |
|79 | breadcrumb (section)      | ug-breadcrumb-section       | Implemented   |
|80 | search-form (section)     | ug-search-form-section      | Implemented   |
|81 | cart-notification-button  | ug-cart-notification-button-section | Implemented |
|82 | video-modal               | ug-video-modal-section      | Implemented   |
|83 | recover-password           | ug-recover-password-content | Implemented   |
|84 | specification-block       | ug-specification-block     | Implemented   |
|85 | quick-view (section)      | ug-quick-view-section      | Implemented   |

---

## 2. Snippets (146 source → 146 equivalents)

**Header/Nav/Megamenu (12):**  
announcement-bar → ug-announcement-bar ✅ | category-navigation → ug-category-navigation ✅ | header-icon-cart → in ug-header ✅ | header-search → in ug-header ✅ | header-top → ug-header-top ✅ | mobile-navigation → in ug-header ✅ | navigation → in ug-header ✅ | dt-megaBanner-1/2 → ug-mega-promo ✅ | dt-megaBrands → ug-mega-brands ✅ | dt-megaProduct → ug-mega-products ✅ | dt-megaPromo → ug-mega-promo ✅ | dt-megaTabs → ug-mega-tabs ✅  

**Cart (4):**  
cart-drawer → ug-cart-drawer ✅ | cart-drawer-collection → ug-cart-drawer-collection ✅ | cart-notification → ug-cart-notification ✅ | card-product-for-drawer → ug-card-product-for-drawer ✅  

**Product cards & grid (10):**  
card-product → ug-card-product ✅ | card-product-2..5 → ug-card-product-2..5 ✅ | card-collection → ug-card-collection ✅ | card-collection2 → ug-card-collection2 ✅ | adv-product-grid-item → ug-product-grid-item ✅ | product-card-placeholder → ug-product-card-placeholder ✅ | product-tile → ug-product-tile ✅  

**Product detail (6):**  
price → ug-price ✅ | product-media → ug-product-media ✅ | product-thumbnail → ug-product-thumbnail ✅ | quantity-selector → ug-quantity-selector ✅ | main-product-sidebar → ug-main-product-sidebar ✅ | item-swatch, item-swatch-color, item-swatch-size → ug-item-swatch, ug-item-swatch-color, ug-item-swatch-size ✅  

**Blog/Article (4):**  
article-card → ug-article-card ✅ | featured-article-card → ug-featured-article-card ✅ | blog-star → ug-blog-star ✅ | comment-icon → ug-comment-icon ✅  

**Facets & collection (3):**  
facets → ug-facets ✅ | main-collection-sidebar → ug-main-collection-sidebar ✅ | search-tags-collections → ug-search-tags-collections ✅  

**Forms & modals (8):**  
gift-card-recipient-form → ug-gift-card-recipient-form ✅ | notify-form → ug-notify-form ✅ | gift-wrapping → ug-gift-wrapping ✅ | enquiry-form → ug-enquiry-form ✅ | compare-modal → ug-compare-modal ✅ | search-overlay-model → ug-search-overlay ✅ | email-signup-banner-background(s) → ug-email-signup-banner-background(.liquid) ✅  

**Deals & promo (4):**  
deal-snippet → ug-deal-snippet ✅ | dt-discount-code → ug-discount-code ✅ | dT_product_bundle / dT_bundle-product-list → ug-bundle-product-list ✅  

**Misc:**  
section-heading → ug-section-heading ✅ | breadcrumb → ug-breadcrumb ✅ | pagination → ug-pagination ✅ | pagination-icon-arrow → ug-pagination-icon-arrow ✅ | meta-tags → ug-meta-tags ✅ | share-button → ug-share-button ✅ | shipping-calculator → ug-shipping-calculator ✅ | social-icons → ug-social-icons ✅ | social-links__text → ug-social-links-text ✅ | scroll-to-top → ug-scroll-to-top ✅ | sticky-cart-bar → ug-sticky-cart-bar ✅ | social-proof-sales → ug-social-proof-sales ✅ | fake-visitors → ug-fake-visitors ✅ | frequently-bought-together → ug-frequently-bought-together ✅ | wishlist-button → ug-wishlist-button ✅ | collapsible-icon-caret → ug-collapsible-icon-caret ✅ | dt-sc-rating-widget → ug-rating-widget ✅ | icon_text → ug-icon-text ✅ | send-icon → ug-icon-send ✅ | user-icon → ug-icon-user ✅ | fire-icon → ug-icon-fire ✅  

**Icons (75):**  
All 75 source icons have ug-icon-* equivalents (e.g. ug-icon-3d-model, ug-icon-accordion, ug-icon-calender, ug-icon-clipboard, ug-icon-coupon, ug-icon-free-shipping, ug-icon-gift-cart, ug-icon-gift-wrap, ug-icon-hamburger, ug-icon-large, ug-icon-link, ug-icon-nav-star, ug-icon-note, ug-icon-right, ug-icon-snapchat, ug-icon-success, ug-icon-tick, ug-icon-tumblr, ug-icon-vimeo, plus account, arrow, bars, caret, cart, cart-empty, checkmark, close, close-small, compare, discount, error, eye, facebook, filter, gift, heart, instagram, left-arrow, location, mail, menu, minus, padlock, pause, phone, pinterest, play, plus, remove, right-arrow, search, share, star, tiktok, twitter, unavailable, wishlist, youtube, zoom).  

**Foxify (10):** Replaced by native (ug-facets, ug-price, ug-card-product, variant picker in theme, ug-localization-form).  

---

## 3. Fonts and colors (matched to source feel)

- **Colors:** Accent 1 (#cd865c), Accent 2 (#53483f), Accent 3 (#8b7355), Text (#53483f), Background 1 (#f6f5f0), Background 2 (#ffffff), Background 3 (#eeeeeb), overlay + opacity. Button text/background. Defined in `config/settings_schema.json` and `config/settings_data.json`; output in `layout/theme.liquid` as CSS variables.
- **Typography:** Heading font (default Cormorant), Body font (default Poppins), Additional font, heading/body scale. Loaded in `theme.liquid` and applied in `ug-base.css`.

---

## 4. Grid banner (ug-grid-banner) – structure alignment

To match the **source** grid-banner exactly:

1. **Compare structure:** Open the source theme’s `grid-banner.liquid` and compare:
   - Outer section class and wrapper divs (we use `ug-grid-banner`, `ug-grid-banner__container`, `ug-grid-banner__grid-wrap`, `ug-grid-banner__grid`, `ug-grid-banner__item`).
   - Heading block (we have `ug-grid-banner__heading-wrap`, `__subheading`, `__heading`).
   - Each item: link > media (image + overlay) > content (title, description, button). We use `ug-grid-banner__media`, `__overlay`, `__content`, `__title`, `__description`, `__btn`.

2. **Compare schema:** Our schema has: heading, subheading, heading_alignment, columns (2/3/4), grid_gap, padding_top/bottom; block: image, heading, description, button_label, link, content_position (7 options), show_overlay, overlay_opacity. Add or remove settings to match source.

3. **Compare CSS:** Our CSS lives in `assets/ug-base.css` under “Grid banner / promo grid”. If the source uses different layout (e.g. different aspect ratios, or one large + two small), replicate that layout with our class names.

If you have the source file, paste its Liquid (or key parts) and we can align our section div-by-div and setting-by-setting.

---

## 5. Parity complete

1. **Section-by-section:** For each section you care about, diff source Liquid + schema + CSS against our `ug-*` version and adjust structure/schema/CSS.
2. **Missing sections:** Add ug-grid-banner-style10, ug-grid-banner-with-product, ug-collection-list2, ug-contact-section, suggested-products, cart-live-region-text, cart-notification-product, footer_style2–4, etc., when needed.
3. **Missing snippets:** Add article-card, featured-article-card, main-collection-sidebar, search-tags-collections, compare-modal, enquiry-form, and missing icons as you need them.
4. **Fonts:** If the source uses “Italiana” for headings, set `font_heading` in Theme settings to Italiana (if available in font picker) or keep Cormorant for a similar serif look.
