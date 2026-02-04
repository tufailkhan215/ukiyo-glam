# Ukiyo-Glam Theme Analysis & Recreation Prompt

This document summarizes the reference multipurpose Shopify jewelry theme and provides a prompt to recreate it as **Ukiyo-Glam** (theme name: **ukiyo-glam**) from scratch with deliberate changes to avoid copyright issues.

---

## 1. Theme Overview (Reference Only)

| Item | Original |
|------|----------|
| **Theme name** | Ukiyo-Glam (ukiyo-glam) |
| **Author** | Wedesigntech |
| **Version** | 1.0 |
| **Target** | Jewelry / multipurpose store |
| **Layout** | theme.liquid, theme.foxify.liquid, password.liquid |
| **Dependencies** | jQuery, Axios, Swiper, AOS, Foxify app integration |

---

## 2. Folder Structure to Recreate

```
layout/          → theme.liquid, password.liquid (3 layouts total; no foxify variant unless you build your own)
config/          → settings_schema.json, settings_data.json, markets.json
sections/        → 80 section .liquid files (see Section 2.1)
snippets/        → 146 snippet .liquid files (see Section 2.2)
templates/       → 22 template files including customers (see Section 2.3)
assets/          → CSS, JS, SVG, images (all original)
locales/         → en.default + schema JSON + multiple languages
```

### 2.1 Complete list of 80 sections (implement equivalent for each with your names)

| # | Section filename | # | Section filename |
|---|------------------|---|-------------------|
| 1 | abt-layer-image | 41 | main-list-collections |
| 2 | announcement-bar | 42 | main-page |
| 3 | apps | 43 | main-password-footer |
| 4 | brand-logos | 44 | main-password-header |
| 5 | cart-drawer | 45 | main-product |
| 6 | cart-icon-bubble | 46 | main-search |
| 7 | cart-live-region-text | 47 | marquee-section |
| 8 | cart-notification-button | 48 | masonry-banner |
| 9 | cart-notification-product | 49 | multicolumn |
| 10 | collapsible-content | 50 | newsletter-modal |
| 11 | collection-list | 51 | newsletter |
| 12 | collection-list2 | 52 | number-counter |
| 13 | contact-form | 53 | page |
| 14 | contact-section | 54 | pickup-availability |
| 15 | contact | 55 | predictive-search |
| 16 | cookie-banner | 56 | product-recommendations |
| 17 | custom-liquid | 57 | product-tab |
| 18 | deal-banner | 58 | recent-products |
| 19 | email-signup-banner | 59 | rich-text |
| 20 | featured-blog | 60 | slider-with-promo-image |
| 21 | featured-collection | 61 | slideshow |
| 22 | footer | 62 | specification-block |
| 23 | footer_style1 | 63 | specifications |
| 24 | footer_style2 | 64 | suggested-products |
| 25 | footer_style3 | 65 | support-block |
| 26 | footer_style4 | 66 | testimonial-with-video |
| 27 | form-image | 67 | testimonials |
| 28 | foxify-product-card-section | 68 | top-bar |
| 29 | foxify-product-quickview-gen2 | 69 | video-pop-up |
| 30 | foxify-product-quickview | 70 | video |
| 31 | foxify-quickview-gen2 | | |
| 32 | foxify-storefront-data | | |
| 33 | grid-banner | | |
| 34 | grid-banner-style10 | | |
| 35 | grid-banner-with-product | | |
| 36 | header | | |
| 37 | home-custom-section | | |
| 38 | home-slider-width-tabs | | |
| 39 | hotspot | | |
| 40 | image-banner | | |

*Note: Theme has exactly 80 section files. This table lists 70; implement an equivalent for every section file present in the theme (80 total). Replace Foxify sections (28–32) with native product card/quick view/facets. Use your own section type names for all.*

### 2.2 Complete list of 146 snippets (implement equivalent for each with your names)

**Header/Nav/Megamenu (12):** announcement-bar, category-navigation, header-icon-cart, header-search, header-top, mobile-navigation, navigation, dt-megaBanner-1, dt-megaBanner-2, dt-megaBrands, dt-megaProduct, dt-megaPromo, dt-megaTabs.

**Cart (4):** cart-drawer, cart-drawer-collection, cart-notification, card-product-for-drawer.

**Product cards & grid (10):** card-product, card-product-2, card-product-3, card-product-4, card-product-5, card-collection, card-collection2, adv-product-grid-item, product-card-placeholder, product-tile.

**Product detail (6):** price, product-media, product-thumbnail, quantity-selector, main-product-sidebar, item-swatch, item-swatch-color, item-swatch-size.

**Blog/Article (4):** article-card, featured-article-card, blog-star, comment-icon.

**Facets & collection (3):** facets, main-collection-sidebar, search-tags-collections.

**Forms & modals (8):** gift-card-recipient-form, gift-wrapping, enquiry-form, notify-form, compare-modal, search-overlay-model, email-signup-banner-background, email-signup-banner-background-mobile.

**Deals & promo (4):** deal-snippet, dt-discount-code, dT_product_bundle, dT_bundle-product-list.

**Misc content (6):** section-heading, breadcrumb, pagination, pagination-icon-arrow, meta-tags, share-button, shipping-calculator, social-icons, social-links__text, scroll-to-top, sticky-cart-bar, social-proof-sales, fake-visitors, frequently-bought-together, fire-icon, icon_text, send-icon, user-icon, wishlist-button, collapsible-icon-caret, dt-sc-rating-widget.

**Foxify (replace with native) (10):** foxify-article-card, foxify-collection-card, foxify-facets, foxify-footer, foxify-head, foxify-localization-form, foxify-navigation, foxify-price, foxify-product-card-hook, foxify-product-card, foxify-variant-picker.

**Icons (75):** icon-3d-model, icon-accordion, icon-account, icon-arrow, icon-bars, icon-calender, icon-caret, icon-cart, icon-cart-empty, icon-checkmark, icon-clipboard, icon-close, icon-close-small, icon-compare, icon-coupon, icon-discount, icon-error, icon-eye, icon-facebook, icon-filter, icon-fire, icon-free-shipping, icon-gift, icon-gift-cart, icon-gift-wrap, icon-hamburger, icon-heart, icon-instagram, icon-large, icon-left-arrow, icon-link, icon-location, icon-mail, icon-minus, icon-nav-star, icon-note, icon-padlock, icon-pause, icon-phone, icon-pinterest, icon-play, icon-plus, icon-remove, icon-right-arrow, icon-right, icon-search, icon-share, icon-snapchat, icon-star, icon-success, icon-tick, icon-tiktok, icon-tumblr, icon-twitter, icon-unavailable, icon-vimeo, icon-wishlist, icon-youtube, icon-zoom.

*Theme has exactly 146 snippets. Ensure every snippet file has an equivalent (your name, your code). Do not use dt-*, dT_*, or foxify-* names. Replace Foxify snippets with native/local implementations.*

### 2.3 Complete list of templates and layouts

**Layouts (3):** theme.liquid, theme.foxify.liquid, password.liquid. Recreate: theme.liquid (main), password.liquid. Omit or replace theme.foxify.liquid.

**Templates (22 total):**  
- **JSON:** 404.json, article.json, blog.json, cart.json, collection.json, index.json, list-collections.json, page.json, page.about.json, page.contact.json, page.faq.json, page.size-chart.json, password.json, product.json, search.json.  
- **Liquid:** product.json.liquid, page.compare.liquid, page.wishlist.liquid, gift_card.liquid.  
- **Customers (7):** account.liquid, activate_account.liquid, addresses.liquid, login.liquid, order.liquid, register.liquid, reset_password.liquid.

Ensure the prompt and checklist require all of the above.

---

## 3. Global Theme Settings (Recreate Concept, Change IDs/Labels)

Recreate the **concepts** with your own naming and defaults:

- **Colors**: Button labels, accent 1–3, text, backgrounds 1–3, overlay, gradients for buttons/accents/backgrounds.
- **Preloader**: Enable/disable + image picker.
- **Typography**: Header font, body font, additional font; heading/body scale; custom font script/family 1–3.
- **General**: Color variant display, item size, timer, wishlist, compare, quick add, scroll-to-top, offer price, blog hover image.
- **Layout**: Page width (1000–1700px), full-width spacing, section spacing, grid spacing, sidebar width.
- **Buttons / Variant pills / Inputs**: Border, radius, shadow (thickness, opacity, offsets, blur).
- **Cards**: Image padding, corner radius, text alignment, border, shadow.
- **Content containers**: Popup and drawer border/radius/shadow.
- **Media**: Padding, border, radius, shadow.
- **Badges**: Corner radius.
- **Social, search, favicon, currency, cart, footer**: Standard options.

Use different setting **ids** (e.g. `primary_accent` instead of `colors_accent_1`) and **translation keys** (e.g. `t:settings_schema.primary_colors.accent`).

---

## 4. Sections to Implement (Same Functionality, New Names/Markup)

Implement **equivalent** sections with **new section type names** and **original CSS/JS**:

| Original section | Recreate as (example) | Purpose |
|------------------|----------------------|---------|
| slider-with-promo-image | hero-slider-with-side-promo | Home hero + side promo blocks |
| collection-list | collection-carousel | Collection grid/carousel |
| featured-collection | featured-products | Product grid with optional slider |
| grid-banner | promo-grid | Multi-block grid banners |
| product-tab | collection-tabs | Tabbed collection products |
| multicolumn | image-cards-row | Multi-column image/card row |
| testimonials | customer-reviews | Quote slider |
| featured-blog | blog-grid | Blog posts grid/slider |
| instagram-gallery | social-gallery | Instagram-style image grid |
| newsletter | newsletter-signup | Email signup block |
| announcement-bar | announcement-bar | Keep name (generic) |
| header | header | Keep (generic) |
| footer, footer_style1–4 | footer, footer-variant-1–4 | Multiple footer styles |
| main-product | main-product | Keep (generic) |
| main-collection-* | main-collection-* | Keep (generic) |
| cart-drawer, cart-* | cart-drawer, cart-* | Keep (generic) |
| cookie-banner | cookie-consent | Cookie banner |
| deal-banner | countdown-banner | Deal/countdown strip |
| And all other sections | Your own filenames/IDs | Same UX, new implementation |

- **Do not** copy Liquid/HTML/CSS/JS verbatim. Reimplement logic and markup with your own class names (e.g. `.hero-slider`, `.promo-grid`) and structure.
- Replace **Foxify**-specific sections (e.g. foxify-product-card, foxify-quickview) with either vanilla Shopify implementation or your own app-agnostic snippets.

---

## 5. Templates to Support

- **index.json** – Homepage (sections: hero, collection list, featured collection, grid banners, product tabs, multicolumn, testimonials, blog, gallery, newsletter).
- **collection.json** – Collection page with banner + product grid.
- **product.json** – Product page with blocks (rating, title, price, fake sales, deal, variant picker, badges, delivery/shipping HTML, description, collapsible, buy buttons, etc.).
- **blog.json**, **article.json** – Blog listing and article.
- **cart.json** – Cart.
- **search.json** – Search.
- **list-collections.json** – Collection list.
- **404.json** – 404 page.
- **page.json**, **page.about.json**, **page.contact.json**, **page.faq.json**, **page.size-chart.json** – Static pages.
- **page.compare.liquid**, **page.wishlist.liquid** – Compare/wishlist (recreate without copying code).
- **password.json** – Storefront password.
- **customers/** – account, login, register, addresses, order, reset_password, activate_account.
- **gift_card.liquid** – Gift card.

Use your own section type names and block IDs in each JSON.

---

## 6. Snippets to Recreate (New Names, No Copy-Paste)

- Product cards: multiple variants (e.g. card-product-2 to 5) → implement as your own product card variants (e.g. product-card-compact, product-card-featured).
- Cart: cart-drawer, cart-notification, cart item rows.
- Header: header-top, header-search, mega menu, mobile nav, icons (cart, account, etc.).
- Navigation: main nav, category nav, breadcrumb.
- Facets, price, variant picker, quantity selector.
- Icons: all icon snippets – replace with your own icon set or SVG sprite (different paths/shapes).
- Meta tags, pagination, social links, share buttons.
- Wishlist, compare (logic and UI from scratch).
- Form snippets: newsletter, contact, enquiry, gift recipient, etc.

Avoid reusing original snippet names like `dt-megaBanner-1`, `dT_bundle-product-list`; use neutral names (e.g. `mega-banner`, `bundle-product-list`).

---

## 7. Layout (theme.liquid) – Recreate Behavior Only

- **Do not** copy the exact Liquid/CSS. Recreate:
  - CSS variables for colors, typography, spacing, buttons, cards, media, popups, drawers (with your variable names where possible).
  - Font loading (header, body, optional third font) and custom font script/family fields.
  - Preloader markup and behavior (optional).
  - Skip-to-content link.
  - Header/footer inclusion (via sections or render).
  - Asset loading: use your own base CSS, component CSS, and JS (no jQuery if you prefer vanilla; or different stack). Replace Swiper with your choice (e.g. native or another library). Replace AOS with your own animation approach or different library.
- Remove or replace **Foxify**-specific head/header (e.g. `foxify-head`, `sections 'foxify-header-group'`) with your own header group or standard header section.

---

## 8. Assets – All New

- **CSS**: Implement from scratch (BEM or your convention). Don’t copy original class names or selectors (e.g. no `.slideshow-with-promo-images`, `.custom-grid-banner-2`). Use names like `.hero-slider`, `.promo-grid`, `.review-slider`.
- **JS**: Write your own (cart, quick add, product form, slider, filters, etc.). Prefer vanilla JS or a different stack than jQuery + Axios if you want clear differentiation.
- **Images/SVG**: Do not use theme’s images or icons. Use your own or royalty-free assets; redraw icons so they’re not identical.

---

## 9. Copy & Content – Must Change

- **Default headings/copy**: No “Ukiyo-Glam”, “Glorious Jewellery”, “Gorgeous Collections”, “Astonishing Jewels Collection”, “Sparkling Jewels Collection”, “Glamour's & Charming Gold Jewels”, “Positive Client Feedback”, “Jewelry Articles”, “Join Our Newsletter to Keep Up To Date With Us”, etc. Create new default text and placeholder content.
- **Testimonials**: Replace author names and quotes (e.g. “Kuttan Dev”, “John Marin”, “Peter Joseph”) with original or generic placeholders.
- **Locale files**: Retranslate or rewrite; do not copy en.default or schema strings verbatim. Keep the same **structure** (keys) if helpful for compatibility, but change wording.

---

## 10. Branding & Identifiers – Must Change

| Item | Original | Change to |
|------|----------|-----------|
| Theme name | — | **ukiyo-glam** (e.g. “Luxe”, “Spark”, “Aura”) |
| Theme author | Wedesigntech | Your name/studio |
| Theme version | 1.0 | Your versioning |
| Preloader asset | — | ukiyo-glam.gif or your own preloader image |
| CSS/JS class prefixes | dt-, custom-grid-banner-2, etc. | Your own (e.g. th-, luxe-hero, spark-grid) |
| Section type names | slider-with-promo-image, etc. | Your names (see Section 4) |
| Snippet names | dt-megaBanner-1, etc. | Your names (see Section 6) |

---

## 11. Technical Stack Differences (Recommended)

- **Sliders**: Keep Swiper or use a different library (e.g. Glide, Embla, or native scroll).
- **Animations**: Replace AOS with CSS-only or another library (e.g. GSAP, or your own).
- **Fonts**: Different default fonts (e.g. not Italiana + Poppins); different Google/custom font combos.
- **Colors**: Different default palette (e.g. not #f6f5f0, #53483f, #cd865c); keep the same *number* of options (accents, backgrounds) for flexibility.
- **Header layout**: Support similar options (top-left, top-center, middle with secondary menu) but with your own markup and class names.
- **Foxify**: Remove dependency; implement product cards, quick view, wishlist, compare, facets with native Shopify + your own JS, or document a different app integration.

---

## 12. Header – Full Specification (Replicate Behavior, Original Code)

### 12.1 Layout variants (CSS grid)

- **Top-left**: Grid areas `"heading left-icon icons"` / `"navigation navigation navigation"`; with category menu: `"heading left-icon icons"` / `"category-menu navigation navigation"`. Logo left, then optional category trigger, then nav, then icons.
- **Top-center**: Grid areas `"left-icon heading icons"` / `"navigation navigation navigation"` (or category-menu row). Logo centered; search can be in different positions per breakpoint.
- **Middle-left**: Grid areas `"heading navigation icons"`; single row, logo | nav | icons.
- **Middle**: Grid areas `"navigation heading icons"`; nav | logo | icons.
- **Middle with secondary menu**: Grid areas `"left-icon navigation heading secondary-menu icons"`; five columns: left icon, primary nav, logo, secondary nav, icons.

Use **your own class names** (e.g. `site-header--logo-left`, `site-header--logo-center`, `site-header--split-nav`) and **your own grid area names** (e.g. `brand`, `nav`, `utils`). Replicate the same responsive behavior: below a configurable breakpoint (e.g. 1280px) show drawer; optionally between 750px and breakpoint use a different grid (e.g. stacked).

### 12.2 Header settings to replicate (new IDs/labels)

- Page full width, page full width spacing.
- Color scheme: accent-1, accent-2, background-1, background-2, inverse.
- Logo (image picker), logo width (range 50–250), logo position: middle-left | middle | top-left | top-center.
- Menu alignment: left | center | right.
- Primary menu (link_list), secondary menu (link_list, optional), category menu (link_list, optional); show/hide secondary and category.
- Mobile screen width (text, default "1280", no "px" in label).
- Sticky header (checkbox), show line separator (optional).
- Country selector, language selector.
- Search style: search_icon | none.
- Show wishlist, compare, account, cart (each checkbox).
- Margin bottom (range).
- Sale tag: enable, label, textarea to map menu items (comma-separated).
- New tag: enable, label, textarea to map menu items.
- Hot tag: enable, label, textarea to map menu items.
- Dropdown style: default (based on header width) | fullwidth | container width | custom width (with optional custom width % per block).
- Optional: enable transparent header on homepage (index).

### 12.3 Header blocks (megamenu – use new block type names)

- **Promo image block**: "Map item" (text) links block to menu item; column style: 3 | 4 | 5 | 6 column or 1:1:2; Image 1–4 each: image_picker (e.g. 400×700), heading, button label, link.
- **Promo banner block**: Same map + column style; Banner 1–2: image, heading, button, link.
- **Brands block**: Map item, column style; up to 10 brands: image (e.g. 250×200), title, link each.
- **Product block**: Map item, column style; product 1–4 (product picker).
- **Tab menu block**: Map item; tab style horizontal | vertical; Tab 1–5: tab heading, link_list, column style, optional banner image.

Implement with **your own block type ids** (e.g. `mega_promo`, `mega_banner`, `mega_brands`, `mega_products`, `mega_tabs`) and **your own setting ids** (e.g. `menu_link_handle`, `mega_columns`).

### 12.4 Header structure (Liquid/HTML – replicate with your markup)

- Optional sticky wrapper (e.g. `<sticky-header>` or `<div>`).
- Outer: `page-width` or `page-full-width` + optional `page-full-width_spacing`.
- Row with grid: logo link (or H1 on index), desktop nav (primary; optional secondary nav; optional category nav), icons (search, wishlist, compare, account, cart). Cart: count bubble, optional drawer trigger.
- Mobile: `header-drawer` (details/summary), menu drawer with same menu + secondary if enabled, utility links (account, social list), country/language forms.
- Search: overlay/modal (icon toggles visibility); predictive search if enabled in theme settings.
- Megamenu: each nav item can have a dropdown; dropdown content is rendered from blocks that match the menu item (by "map item" handle). Columns: submenu links + optional promo images/banners/brands/products/tabs. Support dropdown width: default, full viewport width, container width, or custom %).
- Breadcrumb snippet rendered below header (in layout).

Use **your own snippet names** (e.g. `nav-main`, `nav-mobile`, `nav-mega-content`, `header-search`, `header-icons`). Do not use `dt-nav`, `dt-sc-list-inline`, `AccessibleNav`, `sub-menu-block`, `block-{{ block.id }}-type`; replace with your own classes/IDs.

### 12.5 Header CSS (concepts only – rewrite)

- Media query: above mobile breakpoint hide `header-drawer`, show inline menu; below show drawer, hide desktop nav. Search visibility toggles by layout (e.g. top-center: search in different position).
- Grid layout for each logo position; column-gap, row-gap.
- Nav link hover: sliding underline or text replacement effect (e.g. span with `data-hover`, transform translateY) – replicate effect with **your** classes and keyframes.
- Megamenu: position absolute/fixed, full width or custom width, shadow, background from color scheme; submenu lists (e.g. 3–6 columns or 1:1:2); tabs if tab block.
- Mobile drawer: slide-in panel, overlay, close button, nested lists (accordion if needed).
- SVG icons: size ~1.5rem; cart icon with bubble for count.

---

## 13. Footer – Full Specification (Replicate Behavior, Original Code)

### 13.1 Default footer section

**Blocks (use your type ids, e.g. `footer_links`, `footer_newsletter`, `footer_text`, `footer_address`):**

- **link_list**: heading (text), menu (link_list), alignment (left | center | right), list_style (horizontal | vertical).
- **newsletter**: heading, richtext subtext, alignment, enable_input_field, button_style (button | icon).
- **text**: image (logo), logo_width range, heading, richtext subtext, alignment.
- **address**: image (logo), logo_width, address_heading, footer_address (textarea), footer_contact_no, footer_contact_id (email), office_hours, alignment. Content: optional logo, heading, then contact list (address with location icon, mailto link with mail icon, phone with phone icon, hours with clock icon). Use **your own** icon snippets or inline SVG.

**Section settings:**

- page_full_width, page_full_width_spacing, color_scheme.
- Optional background image (full width).
- show_social (checkbox), copyright_content (richtext; default text must be your own, not "Designthemes").
- Bottom menu (link_list), payment_enable, footer_default (checkbox for default style class), border_right (between columns), margin_top, enable_accordion (mobile: headings toggle content), padding_top, padding_bottom.

**Structure:**

- Optional banner image (responsive srcset).
- Content top: grid of blocks (e.g. grid--1-col grid--2-col grid--4-col-tablet; add class for 3-col when 9 blocks, 4-col when >6). Each block: heading (if present), then block content. If accordion: on mobile heading is clickable, toggles `.expanded` on list.
- Content bottom: one row with copyright (or powered_by_link + year/shop name), payment icons list, bottom menu (inline or stacked). Use **your own** class names (e.g. `footer__bottom`, `footer__credits`, `footer__payments`, `footer__legal-links`).

**Optional:** Mask image (CSS mask-image on footer::before), or block-level "before" background image; replicate effect with your classes.

### 13.2 Footer style 2 (footer_style1), 3 (footer_style2), 4 (footer_style3), 5 (footer_style4)

- Same block types and section settings concept; different wrapper class (e.g. `footer--style-a`, `footer--style-b`) so different CSS can apply.
- Style 1: Per-block column width (e.g. range column_width per block); responsive: 50% at mid breakpoints, then stacked; accordion on mobile with different heading style (e.g. line after, plus/caret).
- Replicate responsive and accordion behavior with **your** section class names and **your** CSS (no `footer-style1`, `theme__default-footer_style`, `grid__item1` etc.).

### 13.3 Footer snippets / assets

- Reuse or recreate: component-newsletter (form, button), component-list-menu, component-list-payment, component-list-social, component-rte, disclosure (for any dropdowns). Implement with **your** component CSS file names and class names (e.g. `form-newsletter`, `list-payments`, `list-social`).

---

## 14. Top bar and announcement bar

- **Top bar section**: Renders announcement-bar snippet first. Settings: disable_topbar, disable_topbar_mobile, top_bar_alignment (center | default), top_bar_color_scheme, page_full_width, page_full_width_spacing, enable_country_selector, enable_language_selector. Markup: section wrapper, page-width row, flex container (currency/language on one side or centered). Use **your** class names (e.g. `top-bar`, `top-bar__row`).
- **Announcement bar**: Often a marquee or single line; settings from section (message, link, color scheme, etc.). Marquee: multiple lines possible with different animation durations (e.g. 10s, 12s, 18s, 30s); pause on hover. Implement `@keyframes marquee` (translateX loop) with **your** class names (e.g. `announcement-marquee`, `announcement-marquee__line`).

---

## 15. Pages and layout body order (Exact replica structure)

Replicate this **order** in `layout/theme.liquid` with your own section/snippet names and no Foxify:

1. `<body>` with id from page_title, class gradient + optional preloader class.
2. Optional: `sections 'header-group'` (if you use a group) or leave empty.
3. Skip-to-content link.
4. Preloader (if enabled): div#preloader with optional spinner or image.
5. Mobile menu placeholder + overlay div (for drawer overlay).
6. Cart drawer (if cart type drawer): render cart-drawer snippet.
7. **Top bar** section.
8. **Header** section.
9. **Breadcrumb** snippet.
10. `<main id="MainContent">` with `content_for_layout`.
11. Video modal container (overlay + inner + close button).
12. **Footer** section (choose one of 5 footer types from theme setting `footer_type`: default, style1, style2, style3, style4).
13. Hidden a11y refresh message list.
14. Script: `window.shopUrl`, `window.routes` (cart_add_url, cart_change_url, cart_update_url, cart_url, predictive_search_url), `window.cartStrings`, `window.variantStrings`, `window.accessibilityStrings`, and a theme object (e.g. wishlist/compare/unavailable strings, moneyFormat) – use **your** variable names (e.g. `THEME_CONFIG`).
15. Conditional: predictive-search script if enabled.
16. Product template: optional bundle/wishlist scripts (your filenames).
17. Wishlist JS, compare JS, main theme JS.
18. **Suggested products** section.
19. **Cookie banner** section.
20. **Scroll to top** snippet.
21. **Newsletter modal** section.
22. **Compare modal** snippet.
23. Optional footer group or app blocks (no Foxify).

Use **your** section names (e.g. `top-bar` → `announcement-and-bar`, `footer_style1` → `footer-variant-a`) and **your** JS global names.

---

## 16. CSS architecture (Replicate structure, original names)

### 16.1 Base and color schemes

- **base.css** (or equivalent): :root and color-scheme classes defining:
  - `--color-foreground`, `--color-background`, `--gradient-background` for each scheme (background-1, background-2, inverse, accent-1, accent-2).
  - `--color-link`, `--alpha-link` for links.
  - Button variables: `--color-button`, `--color-button-text`, `--color-hover-button`, `--color-button-hover-text`, `--alpha-button-background`, `--alpha-button-border`; overrides for `.button--secondary`, `.button--tertiary` per scheme.
- Use **your** variable names where possible (e.g. `--btn-bg`, `--btn-text`) and same **logic** (solid vs outline vs tertiary per scheme).

### 16.2 Component CSS files (one per component)

- List menu, search, menu-drawer, cart-drawer, cart, totals, price, discounts, loading-overlay, mega-menu (or your name), card, newsletter, list-payment, list-social, rte, disclosure, accordion, badge, etc.
- Each section can load its own section-*.css (e.g. section-footer, section-hero-slider, section-collection-list). Use **your** filenames (e.g. `cmp-list-nav.css`, `sec-footer.css`).

### 16.3 Layout and globals

- Page width container (e.g. `.page-width`, `.page-full-width`, `.page-full-width_spacing`) from theme settings.
- Section padding/margin from section settings (padding_top, padding_bottom, margin_top, etc.) via inline style or CSS variables scoped to section id.
- Grid: spacing variables (horizontal/vertical), card grid, product grid. Use **your** spacing variable names (e.g. `--grid-gap-x`, `--grid-gap-y`).

### 16.4 Animations and transitions (see Section 17)

- Preloader: optional spinner or image; hide on load.
- Marquee keyframes; link hover transitions; button/overlay transitions; accordion max-height/opacity; loading spinner (rotate); section entrance (fade/slide). All with **your** class names and keyframe names.

---

## 17. Animations and effects (Same behavior, original implementation)

- **Marquee**: Horizontal scroll (translateX) loop; multiple speeds; pause on hover. Use your keyframe name (e.g. `scroll-left`).
- **Nav link hover**: Text slide/reveal (e.g. span duplicate with translateY(100%) / translateY(-100%) and cubic-bezier). Use your classes (e.g. `nav-link__text`, `nav-link__text--hover`).
- **Scroll animations**: Reference theme uses AOS (data-aos="fade-up", "flip-left", etc.). Replace with **your** approach: another library (e.g. GSAP, Intersection Observer) or CSS scroll-driven animations; same triggers (e.g. on scroll into view). Do not use AOS or same data attribute names.
- **Transitions**: 0.3s linear, or 0.5s ease for accordions; cubic-bezier(.165,.84,.44,1) for premium feel on buttons/hover. Use your duration variables (e.g. `--duration-short`, `--duration-default`).
- **Loading states**: Product card quick-add spinner (rotating circle SVG or CSS circle); same UX, your markup and class names.
- **Section entrance**: Optional fadeIn / fadeInLeft (e.g. 3s ease-in-out) for hero or featured sections; implement with CSS or JS, not same class names (e.g. no `wow`, reuse concept only).
- **Modal/drawer**: Opacity and visibility transition; slide or scale for panel. Your component class names.

---

## 18. Snippets checklist (Behavior parity, original names)

- **Header/nav**: Main navigation (desktop), category navigation, mobile navigation, header search (icon + overlay/modal), header icons (cart with count, wishlist, compare, account). Megamenu content: render promo images, banners, brands, products, tabs by block type.
- **Footer**: Newsletter form, contact/address block (icons: location, mail, phone, clock), link lists, payment icons, social list. Use your icon snippets (e.g. `icon-pin`, `icon-email`, `icon-phone`, `icon-clock`).
- **Cart**: Cart drawer wrapper, cart item row, cart footer (totals, buttons), cart notification. Product card for drawer (compact).
- **Product**: Card variants (multiple layouts: image on top, overlay buttons, quick-add modal). Price, variant picker, quantity selector, badges (sale, new, etc.). Quick-add modal with loading spinner.
- **Facets**: Filter list, active filters, sort. Price, availability.
- **Shared**: Breadcrumb, pagination, meta tags, social share, gift recipient form, compare modal, scroll-to-top. Icons: all SVG snippets with **your** paths and filenames (do not copy original SVGs).
- **Forms**: Newsletter (footer + modal), contact, enquiry (modal). Disclosure for country/language.

Rename all: no `dt-*`, `dT_*`, `foxify-*`; use neutral or your prefix (e.g. `luxe-nav`, `luxe-mega-content`, `luxe-icon-cart`).

---

## 19. Templates and JSON structure

- **index.json**: Section order and blocks as per reference (hero slider with promo, collection list, featured collection, grid banners, product tabs, multicolumn, testimonials, blog, instagram gallery, newsletter). Use **your** section type names and block ids; **your** default copy and image references (no shopify:// shop_images from reference).
- **product.json**: Main product section with blocks: rating, title, price, fake sales (e.g. "X sold in last Y hours"), deal/countdown, caption, variant_picker, inventory (optional), badge, size popup (optional), custom HTML (delivery, shipping), description, collapsible (e.g. returns/shipping), buy_buttons. Optional: product recommendations, recently viewed, multicolumn promo, newsletter. Same **structure**, your block ids and default text.
- **collection.json**: main-collection-banner, main-collection-product-grid (with facets if applicable). Your section ids.
- **Other**: blog, article, cart, search, list-collections, 404, page, page.about, page.contact, page.faq, page.size-chart, password; customers/*; gift_card.liquid; page.compare, page.wishlist (Liquid). Each uses your sections and default content.

---

## 20. Prompt to Recreate the Theme (Exact Replica, No Copyright)

Use the following as the main recreation prompt. The goal is a **marketplace-ready competitor**: same look, feel, and feature set as the reference jewelry theme, with **zero** copied code, names, or copy so it can be sold without copyright issues.

---

**PROMPT START**

Build a new Shopify theme from scratch that is a **functional and visual replica** of a premium jewelry/multipurpose store theme. The theme will be **sold as a marketplace competitor**, so every aspect must be **reimplemented originally**: no copied Liquid/HTML/CSS/JS, no original theme name or author, no original copy or asset filenames, and no third-party theme app dependency (e.g. Foxify). Follow the specifications below so the result behaves and looks the same while being legally original.

---

### A. Identity and naming

- Theme name: **ukiyo-glam** (display: Ukiyo-Glam). “Luxe”, “Spark”, “Aura”). Never use “Ukiyo-Glam”.
- Author: **[YOUR_AUTHOR_NAME]**. Never use “Wedesigntech”.
- Use a **unique prefix** for CSS classes, section types, and snippet names (e.g. `luxe-`, `spark-`). Do **not** use: `dt-`, `dT_`, `dt-sc-`, `custom-grid-banner-2`, `slideshow-with-promo-images`, `AccessibleNav`, `sub-menu-block`, `block-{{ block.id }}-type`, `footer-style1`, `theme__default-footer_style`, or any original class/ID from the reference.

---

### B. Layout and page structure (exact order)

In `layout/theme.liquid`, implement in this order:

1. `<body>` with id from `page_title | handle`, classes: `gradient` + optional preloader class.
2. Skip-to-content link to `#MainContent`.
3. If preloader enabled: `#preloader` with spinner or image (e.g. ukiyo-glam.gif or your asset).
4. Mobile menu placeholder + overlay div.
5. If cart type is drawer: render cart-drawer snippet.
6. **Top bar** section (announcement + optional currency/language).
7. **Header** section.
8. **Breadcrumb** snippet.
9. `<main id="MainContent">` with `{{ content_for_layout }}`.
10. Video modal container (overlay, inner, close).
11. **Footer** section: choose one of 5 variants from theme setting (e.g. `footer_type`: default, style1–4).
12. Hidden a11y list (refresh message).
13. Inline script: `shopUrl`, `routes` (cart_add_url, cart_change_url, cart_update_url, cart_url, predictive_search_url), `cartStrings`, `variantStrings`, `accessibilityStrings`, and a **theme config object** (wishlist/compare/unavailable strings, moneyFormat) with **your** variable names.
14. Conditional: predictive search script if enabled.
15. Product template: your bundle/wishlist scripts (your filenames).
16. Wishlist JS, compare JS, main theme JS (your filenames).
17. **Suggested products** section, **cookie banner** section, **scroll-to-top** snippet, **newsletter modal** section, **compare modal** snippet.

Do **not** include `foxify-head`, `foxify-footer`, `sections 'foxify-header-group'`, or `sections 'foxify-footer-group'`. Replace with your own sections/snippets only.

---

### C. Header (exact behavior, original code)

- **Layouts**: Support 4 logo positions — middle-left, middle, top-left, top-center. With optional **secondary menu** and **category menu**. Use CSS Grid with **your** grid area names; replicate: top-left (logo | category? | nav | icons), top-center (icon? | logo | icons, then nav row), middle-left (logo | nav | icons), middle (nav | logo | icons), middle + secondary (left-icon | nav | logo | secondary-nav | icons).
- **Settings**: Logo, logo width (50–250), logo position, menu alignment (left/center/right), primary/secondary/category menus, mobile breakpoint (e.g. 1280), sticky header, line separator, country/language selector, search (icon or none), show wishlist/compare/account/cart, margin bottom, Sale/New/Hot tags (enable + label + comma-separated menu mapping), **dropdown style** (default / fullwidth / container width / custom width).
- **Optional**: Transparent header on homepage.
- **Blocks (megamenu)**: (1) Promo image: map to menu item, column style (3–6 or 1:1:2), 4 images with heading/button/link each. (2) Promo banner: map, columns, 2 banners. (3) Brands: map, columns, up to 10 brand image+title+link. (4) Product: map, columns, 4 product pickers. (5) Tab menu: map, horizontal/vertical, 5 tabs (heading, link_list, columns, optional image). Use **your** block type ids (e.g. `mega_promo`, `mega_banner`, `mega_brands`, `mega_products`, `mega_tabs`).
- **Markup**: Sticky wrapper (optional), page-width row, logo (H1 on index), desktop nav (primary; optional secondary; optional category), icons (search, wishlist, compare, account, cart with count). Mobile: drawer (details/summary) with same menus + account + social + country/language. Search overlay/modal; megamenu dropdowns keyed by “map item” to menu handle. **Your** snippets: e.g. `nav-main`, `nav-mobile`, `header-search`, `header-icons`, `mega-content` (no `navigation`, `category-navigation`, `mobile-navigation` if those are original names — use new names).
- **CSS**: Media query for breakpoint (show/hide drawer vs inline nav, search position). Grid for each layout. Nav link hover: sliding text effect (your classes). Megamenu: position, width variants, shadow, columns. Drawer: slide-in, overlay. **No** `.dt-nav`, `.dt-sc-list-inline`, `#AccessibleNav`, `.has-mega-menu`, `.sub-menu-block`.

---

### D. Footer (exact behavior, original code)

- **Default footer**: Blocks — link_list (heading, menu, alignment, list_style horizontal/vertical), newsletter (heading, subtext, alignment, enable_input, button_style button/icon), text (image, logo_width, heading, subtext, alignment), address (image, logo_width, address_heading, address, phone, email, office_hours, alignment). Settings: full width options, color_scheme, optional bg image, show_social, copyright (your default text), bottom menu, payment_enable, footer_default, border_right, margin_top, enable_accordion (mobile), padding. Structure: optional banner image, grid of blocks (responsive columns), bottom row (copyright, payment icons, menu). Use **your** block ids and classes (e.g. `footer_links`, `footer_newsletter`, `footer_contact`).
- **Footer variants 2–5**: Same block types, different wrapper class (e.g. `footer--variant-a` … `footer--variant-d`) and CSS (e.g. per-block column width, different accordion style on mobile). No `footer_style1` … `footer_style4` or `theme__default-footer_style`.
- **Icons**: Location, mail, phone, clock for address — your SVG snippets (different paths). Newsletter form, list-payment, list-social with your component classes.

---

### E. Top bar and announcement

- **Top bar**: Renders announcement first; then optional bar with currency/language (same disclosure pattern as header). Settings: disable, hide on mobile, alignment (center/default), color_scheme, full width. **Your** section name and classes.
- **Announcement**: Support marquee (multiple lines, different speeds, pause on hover). Implement `@keyframes` with **your** name (e.g. `scroll-left`). No `marquee` keyframe name if it matches reference.

---

### F. Global settings (config/settings_schema.json)

Replicate **concepts** with **your** setting IDs and translation keys: colors (button labels, accents 1–3, text, backgrounds 1–3, overlay, gradients), preloader (enable + image), typography (header/body/additional font, scale, custom font script/family 1–3), general (color variant, item size, timer, wishlist, compare, quick add, scroll-to-top, offer price, blog hover image), layout (page width 1000–1700, full-width spacing, section spacing, grid spacing, sidebar width), buttons/variant pills/inputs (border, radius, shadow), cards, content containers (popup, drawer), media, badges, social, search, favicon, currency, **cart** (type: drawer/page), **footer** (footer_type: 5 options). **Different** default colors and fonts (e.g. not #f6f5f0, #53483f, #cd865c, Italiana, Poppins).

---

### G. Sections (all 80, your names and code)

Implement **equivalent** sections for **all 80 section files** in the theme. Use the **complete list in Section 2.1** as the checklist. Examples (with your type names):

- Hero slider with side promo (slider-with-promo-image → e.g. `hero-slider-with-promo`), collection list, collection list 2, featured collection, product tab, grid banner, grid-banner-style10, grid-banner-with-product, masonry banner, multicolumn, image banner, image with text, rich text, testimonials, testimonial with video, featured blog, instagram gallery, newsletter, announcement bar, deal banner, email signup banner, number counter, marquee, brand logos, video, video pop-up, hotspot, form-image, contact, contact-section, contact-form, collapsible content, specification block, specifications, support block, main-product, main-collection-banner, main-collection-product-grid, main-cart-footer, main-cart-items, main-search, main-blog, main-article, main-page, main-404, main-list-collections, main-password-footer, main-password-header, product-recommendations, recent-products, suggested-products, cart-drawer, cart-notification-button, cart-notification-product, cart-icon-bubble, cart-live-region-text, predictive-search, pickup-availability, cookie-banner, newsletter-modal, apps, custom-liquid, abt-layer-image, home-slider-width-tabs, home-custom-section, inner-page-team-section, page, slideshow.

Replace **Foxify** sections (foxify-product-card-section, foxify-product-quickview, foxify-product-quickview-gen2, foxify-quickview-gen2, foxify-storefront-data) with **native** Shopify product card/quick view/facets and **your** JS. Each section: **your** schema (blocks + settings), **your** class names, **your** section-*.css. **Total: 80 sections.**

---

### H. Snippets (all 146, your names)

Implement **equivalent** snippets for **all 146 snippet files** in the theme. Use the **complete list in Section 2.2** as the checklist. Categories (all with your names):

- **Header/nav**: Main nav, category nav, mobile nav, header-search, header-top, header icons (cart with bubble, wishlist, compare, account). Megamenu content by block type (promo images, banners, brands, products, tabs). **Your** snippet names (e.g. `luxe-nav-main`, `luxe-header-search`, `luxe-mega-promo`).
- **Footer**: Newsletter form, address block (location, mail, phone, clock icons), link lists, payment list, social list. **Your** icon snippets.
- **Cart**: Drawer, cart-drawer-collection, cart notification, card-product-for-drawer. **Your** component classes.
- **Product**: All 5 card layouts, adv-product-grid-item, product-card-placeholder, product-tile, price, product-media, product-thumbnail, quantity-selector, main-product-sidebar, item-swatch(s), badges, quick-add modal with **your** loading spinner.
- **Blog/article**: article-card, featured-article-card, blog-star, comment-icon. **Facets & collection**: facets, main-collection-sidebar, search-tags-collections.
- **Forms & modals**: gift-card-recipient-form, gift-wrapping, enquiry-form, notify-form, compare-modal, search-overlay-model, email-signup-banner-background(s).
- **Deals/promo**: deal-snippet, discount-code, product-bundle, bundle-product-list. **Shared**: section-heading, breadcrumb, pagination, meta-tags, share-button, shipping-calculator, social-icons, scroll-to-top, sticky-cart-bar, social-proof-sales, fake-visitors, frequently-bought-together, wishlist-button, collapsible-icon-caret, rating-widget.
- **Icons**: All ~75 icon snippets (account, arrow, cart, close, heart, search, star, etc.). **Your** SVG paths and filenames (no copy of reference icons).
- Replace **Foxify** snippets with native/your implementations. **Total: 146 snippets.** Do **not** use: `dt-*`, `dT_*`, `foxify-*`.

---

### I. CSS architecture

- **Base**: :root and color-scheme classes (e.g. background-1, background-2, inverse, accent-1, accent-2) defining foreground, background, gradient, link alpha, button vars, secondary/tertiary overrides. **Your** variable names where possible (e.g. `--btn-bg`, `--btn-text`).
- **Components**: One CSS file per component (list menu, search, menu-drawer, cart-drawer, cart, totals, price, mega-menu, card, newsletter, list-payment, list-social, rte, disclosure, etc.). **Your** filenames (e.g. `cmp-nav.css`, `cmp-cart-drawer.css`).
- **Sections**: Each section loads its own `section-*.css`. **Your** names (e.g. `sec-hero.css`, `sec-footer.css`).
- **Layout**: Page width, full width, spacing from settings; section padding/margin via section id. **Your** spacing vars.

---

### J. Animations and effects

- **Marquee**: Horizontal loop, multiple speeds, pause on hover. **Your** keyframe name.
- **Nav hover**: Sliding text (translateY + cubic-bezier). **Your** classes.
- **Scroll animations**: Reference uses AOS (data-aos). Use **different** library (e.g. GSAP, Intersection Observer) or CSS scroll-driven; **no** AOS or same data attributes.
- **Transitions**: 0.3s linear, 0.5s ease for accordions; cubic-bezier for buttons. **Your** duration variables.
- **Loading**: Quick-add spinner (rotate) — your SVG or CSS. Section entrance (fade/slide) — your classes.
- **Modal/drawer**: Opacity + visibility; panel slide/scale. **Your** component names.

---

### K. Templates and layouts (all 22 templates + 3 layouts)

Use the **complete list in Section 2.3**. Implement:

- **Layouts (3):** theme.liquid (main; no Foxify), password.liquid. Omit theme.foxify.liquid or replace with your own.
- **JSON templates (15):** 404.json, article.json, blog.json, cart.json, collection.json, index.json, list-collections.json, page.json, page.about.json, page.contact.json, page.faq.json, page.size-chart.json, password.json, product.json, search.json.
- **Liquid templates (4):** product.json.liquid (if used), page.compare.liquid, page.wishlist.liquid, gift_card.liquid.
- **Customers (7):** account.liquid, activate_account.liquid, addresses.liquid, login.liquid, order.liquid, register.liquid, reset_password.liquid.

**index.json**: Same section order (hero, collection list, featured collection, grid banners, product tabs, multicolumn, testimonials, blog, instagram, newsletter). **Your** section types and block ids; **your** default copy and images. **product.json**: Main product with blocks (rating, title, price, fake sales, deal, caption, variant_picker, badge, delivery/shipping HTML, description, collapsible, buy_buttons); below: recommendations, recently viewed, optional multicolumn, newsletter. All templates use **your** sections and **your** placeholder content.

---

### L. Copy and content

- **No** reference copy: “Ukiyo-Glam”, “Gorgeous Collections”, “Astonishing Jewels Collection”, “Sparkling Jewels Collection”, “Positive Client Feedback”, “Jewelry Articles”, “Join Our Newsletter to Keep Up To Date With Us”, “Glorious Jewellery”, “Kuttan Dev”, “John Marin”, “Peter Joseph”, “Designthemes”, etc. Use **original** or generic placeholder text everywhere.
- **Locales**: `en.default.json` and schema JSON with **your** keys and wording. Structure can mirror Shopify; text must be original.

---

### M. Assets and JS

- **CSS**: All **original** (your class names, selectors, file names). No `.dt-*`, `.custom-grid-banner-*`, `.slideshow-with-promo-images`, etc.
- **JS**: **Original** cart, quick-add, product form, sliders, filters, wishlist, compare, theme main script. **Your** filenames (e.g. not `dt-theme.js`, `dt_wishlist.js`, `dt_compare.js`, `dT_bundle_base.js`). No jQuery/Axios if you prefer vanilla; otherwise use with your code only.
- **Images/icons**: **Your** preloader and icons (e.g. ukiyo-glam.gif; no reference SVGs). Slider library (e.g. Swiper) allowed; integrate with your markup and classes.

---

### N. Legal

- Deliverable must be **independent work**: no verbatim Liquid, HTML, CSS, JS, or copy from the reference theme or its author. Only the **functional and structural** specification (jewelry multipurpose theme with header/footer/sections/snippets/pages/CSS/animations as specified) is used; **implementation and expression** must be your own so the theme can be sold as a marketplace competitor without copyright risk.

**PROMPT END**

---

## 21. Checklist Before Publishing

- [ ] Theme name and author are not “Ukiyo-Glam” or “Wedesigntech”.
- [ ] No original theme code (Liquid, HTML, CSS, JS) copied; no `dt-`, `dT_`, `dt-sc-`, `AccessibleNav`, `sub-menu-block`, `footer-style1`, `theme__default-footer_style`, or reference class/ID names used.
- [ ] No Foxify (or any theme app) dependency; header/footer and product features use your sections and JS.
- [ ] **Sections**: All **80** section files have an equivalent (your section type names); see Section 2.1. Foxify sections replaced with native.
- [ ] **Snippets**: All **146** snippet files have an equivalent (your snippet names); see Section 2.2. No dt-*, dT_*, foxify-*.
- [ ] **Templates & layouts**: All **22** templates and **3** layouts implemented; see Section 2.3.
- [ ] **Header**: All 4 logo positions and secondary/category menu options work; megamenu blocks (promo image, promo banner, brands, product, tab) use your type ids and map to menu correctly; dropdown width options work; your nav/drawer/search/icon snippets and CSS.
- [ ] **Footer**: Default + 4 variants with your wrapper classes; blocks (link_list, newsletter, text, address) and settings (accordion, payment, copyright) match spec; your icon snippets.
- [ ] **Layout body order**: Top bar → header → breadcrumb → main → video modal → footer (by footer_type) → scripts → suggested-products → cookie-banner → scroll-to-top → newsletter modal → compare modal; no foxify-head/foxify-footer/foxify groups.
- [ ] **CSS**: Color schemes, component files, section files, and layout/spacing use your variable and file names; animations (marquee, nav hover, scroll, transitions, loading) use your keyframes and classes; no AOS or reference keyframe names.
- [ ] **Snippets**: All header/nav, footer, cart, product card variants, facets, icons, forms, modals use your snippet names and your SVG/code.
- [ ] **Templates**: index, product, collection, blog, article, cart, search, list-collections, 404, page variants, password, customers, gift_card, compare, wishlist use your section types and default content (no reference copy).
- [ ] Default copy, testimonials, and placeholder content are new (no “Gorgeous Collections”, “Kuttan Dev”, “Designthemes”, etc.).
- [ ] Default colors and fonts are different from reference (#f6f5f0, #53483f, Italiana, Poppins).
- [ ] Assets (images, icons, preloader) are your own or licensed (e.g. ukiyo-glam.gif); no reference imagery.
- [ ] Locale strings are original or properly licensed.

Use this document and the prompt in **Section 20** to build an exact replica in behavior and structure that is legally and technically original and ready to sell as a marketplace competitor.
