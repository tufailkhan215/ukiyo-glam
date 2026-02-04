# Ukiyo-Glam theme – assets structure

## Source vs recreated theme

| | Source (Glamora) | Ukiyo-Glam (this theme) |
|---|------------------|-------------------------|
| **Total asset files** | 221 | 10 (see below) |
| **CSS** | Many files (base, component-*, section-*, vendor) | `ug-base.css` (layout + components + sections), `ug-animations.css` (keyframes + animation utilities) |
| **JS** | Many (theme, cart, wishlist, compare, product, slider, facets, vendor e.g. Swiper, AOS) | `ug-theme.js`, `ug-cart-drawer.js`, `ug-sections.js`, `ug-predictive-search.js`, `ug-wishlist.js`, `ug-compare.js`, `ug-product-form.js` |
| **Images/SVG** | Logos, placeholders, preloader, icons as assets | Icons in snippets (Liquid SVG); no copied images |
| **Fonts** | Possibly self-hosted or theme font files | Shopify font picker (no asset font files) |
| **Vendor** | Swiper, AOS, jQuery, Axios, etc. | Vanilla JS; no vendor libs in repo |

The **source 221 files** typically include: 40–80+ CSS files (one per component/section or concatenated), 20–40+ JS files (feature + vendor), many image/SVG assets, and sometimes font files or JSON config. **Functionality is mirrored** by implementing the same behaviour in fewer, consolidated files and with original class names (`ug-*`).

## This theme’s asset files

- **ug-base.css** – Reset, variables, layout, header, footer, cart, product card, all section styles, modals, facets, customer, animations (consolidated).
- **ug-animations.css** – Keyframes and animation utility classes (optional split).
- **ug-fonts.css.liquid** – Self-hosted @font-face (Cormorant, Poppins). Enable “Use theme asset fonts” in Theme settings > Typography and add **cormorant.woff2**, **cormorant.woff**, **poppins.woff2**, **poppins.woff** to the Assets folder.
- **ug-theme.js** – Global behaviour (skip link, mobile menu, cart opener, scroll-to-top, etc.).
- **ug-cart-drawer.js** – Cart drawer open/close and AJAX add-to-cart.
- **ug-sections.js** – Section-specific behaviour (slideshow, product tabs, countdown, video popup, etc.).
- **ug-predictive-search.js** – Predictive search.
- **ug-wishlist.js** – Wishlist (localStorage or your implementation).
- **ug-compare.js** – Compare products (localStorage or your implementation).
- **ug-product-form.js** – Product form (variant change, add to cart on product page).

To **mirror the source asset count** more closely you could: split `ug-base.css` into `ug-base.css`, `ug-component-header.css`, `ug-component-footer.css`, `ug-component-cart.css`, `ug-section-*.css` (one per section), add more JS modules, and add placeholder image/SVG assets. Behaviour can stay the same; this would be a structural/organisational change only.
