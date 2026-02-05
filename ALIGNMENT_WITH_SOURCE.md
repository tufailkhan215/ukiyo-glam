# Aligning Ukiyo-Glam with Source (Glamora) Look & Feel

The source theme uses different **section/snippet code, schema, CSS, JS, and animations**. This doc explains what’s been aligned and how to get closer when you have the source files.

---

## Practical next steps (summary)

1. **Fonts (source look)**  
   - See **[FONTS_SETUP.md](FONTS_SETUP.md)** for step-by-step: get `italiana.woff2` and `poppins.woff2`, add them to **Assets**, then enable **Theme settings → Typography → “Use theme asset fonts”**.

2. **Sections / CSS / JS (when you have the source theme)**  
   - Put the source theme folder next to this theme (or in-repo).  
   - Use **Section/snippet diff pairs** in **[SOURCE_DIFF_PAIRS.md](SOURCE_DIFF_PAIRS.md)** to diff source file vs our file (schema, Liquid, then CSS/JS).  
   - Run **`scripts/diff-with-source.ps1 -SourcePath "C:\path\to\glamora"`** to list pairs; add `-OpenInEditor` to open each in VS Code diff.  
   - For each section/snippet: align **schema**, **markup**, and **styles** using our `ug-*` classes and scripts (see **§3 How to align** below).

---

## 1. What’s already aligned (no source files needed)

### Fonts (source: Italiana + Poppins)
- **Theme settings:** Heading font and body font are configurable. Default body is Poppins.
- **Source look:** Enable **Theme settings → Typography → “Use theme asset fonts”**, then add to **Assets**: `italiana.woff2`, `poppins.woff2` (and optionally `.woff`). The layout will use Italiana for headings and Poppins for body.
- **Font picker:** If your store has Italiana in the font picker, you can select it as “Heading font” and leave asset fonts off.

### Colors (source palette)
- Defaults in **Theme settings → Colors** match the source: `#f6f5f0` (background 1), `#53483f` (text, button bg, accent 2), `#cd865c` (accent 1), `#8b7355` (accent 3), `#eeeeeb` (background 3).
- CSS variables `--ug-color-*` and source-compatible `--color-base-*` / `--gradient-base-*` are set in `layout/theme.liquid`.

### Transitions and animations (source-like behavior)
- **CSS variables** in `theme.liquid`: `--ug-duration-short` (0.3s), `--ug-duration-medium` (0.5s), `--ug-ease-smooth` (cubic-bezier for buttons/hover).
- **Buttons:** Hover uses the smooth easing and a slight lift; transitions use the new variables.
- **Header nav:** Link hover uses an underline slide-in (source-like effect).
- **Animations** (`ug-animations.css`): `ug-fadeIn`, `ug-fadeInUp`, `ug-fadeInLeft`, `ug-fadeInRight`, `ug-zoomIn`; section entrance via `.ug-section-animate` + `.ug-section-animate--visible` (Intersection Observer in `ug-theme.js`).
- **Marquee:** Keyframes + pause-on-hover behavior; use classes `.ug-marquee-wrap` and `.ug-marquee-track` on the marquee section.

### Typography in base CSS
- `ug-base.css` applies heading font to `h1–h6` and `.ug-heading`, and body scale to `body`, so the source typography hierarchy is reflected.

---

## 2. Why sections/snippets still look different

The source theme has:
- Different **HTML structure** and **class names** (e.g. `dt-*`, section-specific classes).
- Different **section schema** (setting/block IDs and structure).
- **Different CSS** (component/section-specific files and selectors).
- **Different JS** (e.g. jQuery, Swiper, AOS) and behavior.

Our theme uses:
- **Our own** section types (`ug-*`), snippets (`ug-*`), and class names (`ug-*`).
- **Vanilla JS** (no jQuery/Swiper/AOS); behavior is replicated with our scripts.
- **Consolidated** CSS in `ug-base.css` and `ug-animations.css`.

So **section/snippet code, schema, CSS, and JS are intentionally different** to avoid copying. To make **layout and visuals** match the source more closely, you need to compare with the real source files and adjust our markup and styles (see below).

---

## 3. How to align sections, snippets, schema, CSS, and JS with the source

When you have the **source theme folder** (e.g. `glamora` or the full theme package):

### Step 1: Put the source next to this theme
Example:
- `e:\tfwork\shopifytheme\glam-theme\` (this theme)
- `e:\tfwork\shopifytheme\glamora\` (source theme)

Or add the source as a subfolder inside this project.

### Step 2: Section-by-section comparison
For each important section (e.g. `header`, `footer`, `slider-with-promo-image`, `grid-banner`, `main-product`, `main-collection-product-grid`):

1. **Schema:** Compare `sections/<source-name>.liquid` schema with our `sections/ug-<equivalent>.liquid`. Add or rename settings/blocks so behavior and options match (keep our `ug-*` section type and our setting IDs if you prefer).
2. **Markup:** Compare the Liquid/HTML structure. Adjust our section so we have the same **structure** (containers, rows, blocks) and **semantic** roles, using **our** class names (e.g. `ug-header__nav`, `ug-grid-banner__item`).
3. **CSS:** In the source, open the CSS files that style that section (e.g. `base.css`, `component-*.css`, `section-*.css`). Map their layout (grid/flex), spacing, typography, and colors to our `ug-base.css` (or a section-specific block) using **our** selectors so the **visual result** matches.
4. **JS:** If the source uses jQuery/Swiper/AOS (or other libs), replicate the same **behavior** (slider, filters, modals, etc.) in our `ug-*.js` files with vanilla JS and our class names.

### Step 3: Snippets
For each snippet that affects look or behavior (product card, cart drawer, header nav, footer blocks, icons):

1. Compare **markup** and **schema** (if the snippet is included with parameters).
2. Align **structure** and **content** in our `snippets/ug-*.liquid`.
3. Add or adjust **CSS** in `ug-base.css` (or assets) so our classes produce the same look as the source.

### Step 4: Animations
- Source often uses **AOS** (`data-aos="fade-up"`, etc.). We use:
  - **CSS** keyframes and utilities in `ug-animations.css`.
  - **JS** Intersection Observer for `.ug-section-animate` in `ug-theme.js`.
- For each source “scroll animation”, either:
  - Add the same section/element in our Liquid and give it class `ug-section-animate`, or
  - Add a new utility class and, if needed, a small JS observer for it.

### Step 5: Fonts (if not using asset fonts)
- If the source loads **Italiana** (or another font) via a custom or Google font, replicate that in our theme:
  - Either use **“Use theme asset fonts”** and our `ug-fonts.css.liquid` (Italiana + Poppins), or
  - Load the same font in `theme.liquid` (e.g. link tag or @font-face) and set the heading/body variables to that family.

---

## 4. Summary

| Area | Status | Action |
|------|--------|--------|
| **Fonts** | Aligned (option) | Use asset fonts + italiana.woff2, poppins.woff2 for source look. |
| **Colors** | Aligned | Defaults and CSS variables match source. |
| **Transitions / animations** | Aligned (concepts) | Variables, button/nav effects, section entrance, marquee in place. |
| **Section/snippet code & schema** | Different by design | Compare with source files and adjust our Liquid/schema to match structure and behavior. |
| **CSS** | Different by design | Compare source CSS with `ug-base.css` (and animations) and add/refine our selectors for visual parity. |
| **JS** | Different (vanilla) | Replicate source behavior in our JS; no need to use the same libraries. |

Once the source theme is available in your workspace, you can do a **file-by-file or section-by-section diff** (see **SOURCE_DIFF_PAIRS.md** and **scripts/diff-with-source.ps1**) (Liquid, schema, CSS, JS) and apply the changes above so that “sections, snippets, schema, CSS, JS and animation” in our theme mirror the source while keeping our naming and code base.
