# Source theme (Glamora) vs Ukiyo-Glam

Reference: `glamora-multipurpose-shopify-jewelry-store-theme-2025-09-12-11-37-02-utc/glamora`

## Whole-theme mirror (layout & config)

- **Layout (theme.liquid):** Top bar → header → breadcrumb → main → video modal → footer (by footer_style) → suggested-products → cookie-banner → scroll-to-top → newsletter modal → compare modal → search overlay. Favicon in head. No Foxify/app groups.
- **CSS variables:** Our `--ug-*` plus source-compatible `--color-base-text`, `--color-base-background-1/2/3`, `--color-base-accent-1/2/3`, `--gradient-base-*`, `--page-width`, `--spacing-sections-desktop`, `--grid-desktop-*` in theme.liquid.
- **Footer mapping:** footer_style default = source style1 (footer), style_a = style2 (footer_style1), style_b = style3, style_c = style4, style_d = style5.
- **Settings:** Favicon, cart type (drawer / page / notification), colors, typography, layout, social, footer style, search/modals, scroll-to-top. We use simplified schema; source has many more (preloader, badges, card style, media, popups, drawers, breadcrumb, etc.).
- **Index template:** First section is `ug-slider-with-promo-image` (mirroring source slider-with-promo-image), then collection-list, featured-collection, grid-banner, product-tab, multicolumn, testimonials, featured-blog, instagram, newsletter.
- **Suggested products:** Section included in layout; hidden when "Hide when no collection set" is on and no collection is set (so layout doesn’t show an empty grid).

## Top bar (top-bar.liquid → ug-top-bar.liquid)

| Source | Ukiyo-Glam | Status |
|--------|------------|--------|
| header_mail, header_phone (with icon-mail, icon-phone) | header_mail, header_phone + ug-icon-mail, ug-icon-phone | Done |
| text (center announcement) | message + link + link_text | Done |
| address_text (with location icon) | address_text | Done |
| show_social (social-icons) | show_social + ug-social-icons | Done |
| enable_country_selector, enable_language_selector | show_currency_selector, show_locale_selector | Done |
| top_bar_alignment (center/left) | top_bar_alignment | Done |
| disable_topbar, disable_topbar_mobile | disable_top_bar, disable_top_bar_mobile | Done |

Layout: source uses one row with flex-between (currency/language, contact, text, address, social). We use three_column grid: left = contact + text_left, center = message, right = address + social + locale.

---

## Slider with promo (slider-with-promo-image.liquid → ug-slider-with-promo-image.liquid)

| Source | Ukiyo-Glam | Status |
|--------|------------|--------|
| content_width "70/30" (main/promo split) | Section setting + CSS | In progress |
| lap_content_width, tab_content_width | Section settings | In progress |
| grouped_column_gap | Section setting | In progress |
| enable_promo_block, reverse_column | Section settings | In progress |
| promo_block_style (grid/overlay) | Section setting | In progress |
| promo_height_desktop/lap/tab/mobile | Section settings | In progress |
| Promo blocks: section settings (enable_additional_block_1/2/3, image_1/2/3, title, sub_title, text, button, link, box_align, text_alignment) | Currently block-based promos only | Section-level promo 1 & 2 added |
| Slide blocks: heading, subheading, heading_1, subheading_1, text, button, link, box_align, text_alignment, mobile_image, image_overlay_opacity, show_text_box, heading_size | Slide has heading, button, link only | Expand slide block schema |
| Swiper (loop, effect, auto_play, swiper_navigation, swiper_pagination) | Vanilla JS slider in ug-sections.js | Behavior matches; optional Swiper later |
| slide_height (adapt_image / full), show_text_below | Not yet | Optional |

---

## Header (header.liquid → ug-header.liquid)

- Logo position, menu, mega menu (mega_promo, mega_banner, mega_brands, mega_products), search, account, cart, currency: mirrored in ug-header.
- Source may use different mega markup; behavior (hover dropdown, blocks) aligned.

---

## Footer (footer.liquid → ug-footer.liquid)

| Source | Ukiyo-Glam | Status |
|--------|------------|--------|
| Banner image (top) | image setting + .ug-footer__banner | Done |
| Blocks: link_list (heading, menu, alignment, list_style) | link_list + alignment, list_style | Done |
| Blocks: text (image, logo_width, heading, subtext, alignment) | text block with image, logo_width, heading, subtext/text, alignment | Done |
| Blocks: newsletter (heading, newsletter_subtext, alignment, button_style) | newsletter + newsletter_subtext, alignment, button_style | Done |
| Blocks: address (image, address_heading, footer_address, phone, email, office_hours, alignment) | address block with ug-icon-location, ug-icon-mail, ug-icon-phone | Done |
| show_social | show_social + ug-social-icons | Done |
| copyright_content (richtext) | copyright_content; else default theme + shop name | Done |
| Bottom menu + list_style | menu, bottom_menu_style | Done |
| payment_enable | payment_enable | Done |
| footer_default, border_right, margin_top | footer_default, border_right, margin_top | Done |
| enable_accordian (mobile) | enable_accordion + data-ug-footer-toggle + JS toggle | Done |
| padding_top, padding_bottom, page_full_width | Section settings | Done |

- theme.liquid uses footer_style (default, style_a … style_d) → ug-footer, ug-footer-style-a … ug-footer-style-d. Mapping done.

---

## Layout order

- Source: announcement (optional) → top-bar → header → main → footer.
- Ours: ug-top-bar → ug-header → breadcrumb → main → footer. No separate announcement bar section; top bar message covers it.

---

## Assets

- Source: component-image-banner.css, component-slider.css, component-slider-with-promo-image.css, Swiper, jQuery, etc.
- Ours: ug-base.css, ug-animations.css, vanilla JS. Slider in ug-sections.js; no jQuery/Swiper dependency.

---

## Config (settings_schema / settings_data)

- Colors, typography, cart_type, footer_style, section spacing: mirrored. Any missing keys added as we find them.

---

## Replication checklist (mirror source exactly)

- [x] Layout order, favicon, CSS variables, suggested-products in layout
- [x] Top bar: contact (mail, phone), address, social, locale
- [x] Slider-with-promo: content_width, section-level promo 1 & 2, slide fields (subheading, box_align, etc.)
- [x] Footer: banner image, link_list (alignment, list_style), text (logo, subtext), newsletter (subtext, button_style), address block, show_social, copyright_content, bottom menu, payment_enable, margin_top, border_right, enable_accordion
- [ ] Header: optional layout variants (top-center, middle with secondary menu) if needed
- [ ] Remaining sections: compare each ug-* section schema and markup to source for full parity
