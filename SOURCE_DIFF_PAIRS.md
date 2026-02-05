# Section / snippet diff pairs (source vs Ukiyo-Glam)

Use this when you have the **source theme folder** to diff schema, Liquid, then CSS/JS. Full mapping: **MIRROR_ALL.md**.

---

## Sections (source `sections/` → our `sections/`)

| Source file | Our file |
|-------------|----------|
| header.liquid | ug-header.liquid |
| top-bar.liquid | ug-top-bar.liquid |
| footer.liquid | ug-footer.liquid |
| slider-with-promo-image.liquid | ug-slider-with-promo-image.liquid |
| grid-banner.liquid | ug-grid-banner.liquid |
| main-product.liquid | ug-main-product.liquid |
| main-collection-banner.liquid | ug-main-collection-banner.liquid |
| main-collection-product-grid.liquid | ug-main-collection-product-grid.liquid |
| main-cart-items.liquid | ug-main-cart-items.liquid |
| main-cart-footer.liquid | ug-main-cart-footer.liquid |
| collection-list.liquid | ug-collection-list.liquid |
| featured-collection.liquid | ug-featured-collection.liquid |
| featured-blog.liquid | ug-featured-blog.liquid |
| multicolumn.liquid | ug-multicolumn.liquid |
| testimonials.liquid | ug-testimonials.liquid |
| newsletter.liquid | ug-newsletter.liquid |
| instagram-gallery.liquid | ug-instagram-gallery.liquid |
| product-tab.liquid | ug-product-tab.liquid |
| main-search.liquid | ug-main-search.liquid |

More sections: **MIRROR_ALL.md** §1.

---

## Snippets (source `snippets/` → our `snippets/`)

| Source file | Our file |
|-------------|----------|
| card-product.liquid | ug-card-product.liquid |
| cart-drawer.liquid | ug-cart-drawer.liquid |
| breadcrumb.liquid | ug-breadcrumb.liquid |
| facets.liquid | ug-facets.liquid |
| price.liquid | ug-price.liquid |
| product-media.liquid | ug-product-media.liquid |
| section-heading.liquid | ug-section-heading.liquid |
| social-icons.liquid | ug-social-icons.liquid |
| icon-* (any) | ug-icon-* (e.g. ug-icon-cart.liquid) |

More snippets: **MIRROR_ALL.md** §2.

---

## CSS / JS

| Source (assets/) | Ours (assets/) |
|------------------|----------------|
| base.css, component-*.css, section-*.css | ug-base.css, ug-animations.css |
| theme/cart/slider JS | ug-theme.js, ug-sections.js, ug-cart-drawer.js, etc. |

---

## Script: list or open diffs

From the **theme root** (PowerShell):

```powershell
# List diff pairs (source path = path to source theme root)
.\scripts\diff-with-source.ps1 -SourcePath "C:\path\to\glamora"

# Open each section pair in VS Code diff
.\scripts\diff-with-source.ps1 -SourcePath "C:\path\to\glamora" -OpenInEditor -SectionsOnly

# Snippets only
.\scripts\diff-with-source.ps1 -SourcePath "..\glamora" -SnippetsOnly
```

Manual diff example:

```powershell
code --diff "C:\path\to\glamora\sections\header.liquid" "sections\ug-header.liquid"
```
