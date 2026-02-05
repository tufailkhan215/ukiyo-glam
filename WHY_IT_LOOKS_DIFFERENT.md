# Why the theme still doesn’t look the same as the source

We’ve aligned **fonts** (Italiana + Poppins), **colors**, **transitions**, **animations**, and applied a **visual pass** (header, footer, cards, section spacing, typography) so the theme feels like the source.  
**But we don’t have the actual source theme files in this project.** So we can’t copy its exact HTML, CSS, or JS.

---

## What’s different

| Source theme (Glamora) | This theme (Ukiyo-Glam) |
|------------------------|-------------------------|
| Its own **section/snippet Liquid** and **schema** | Our **ug-*** sections and snippets (different structure and class names) |
| Its own **CSS** (e.g. `base.css`, `component-*.css`, `section-*.css`) with its class names | Our **ug-base.css** / **ug-animations.css** with **ug-*** class names |
| Its own **JS** (e.g. jQuery, Swiper, AOS) | Our **vanilla JS** (ug-theme.js, ug-sections.js, etc.) |
| Exact **layout**, **spacing**, **breakpoints**, **component sizes** from its CSS | We **approximate** from the written spec and common jewelry-theme patterns |

So **“nothing looks the same”** is expected until we **mirror the source files themselves**.

---

## How to make it look the same

### You need the source theme folder

1. **Get the Glamora theme** (e.g. the zip or folder from your purchase or backup).
2. **Put it next to this theme** (e.g. `e:\tfwork\shopifytheme\glamora\` next to `glam-theme\`).
3. **Use the diff workflow:**
   - Run: `.\scripts\diff-with-source.ps1 -SourcePath "C:\path\to\glamora"`
   - Open **SOURCE_DIFF_PAIRS.md** and **ALIGNMENT_WITH_SOURCE.md**.
   - For each section/snippet: **diff** source Liquid + CSS with ours, then **adjust our markup and ug-base.css** so layout and visuals match (keeping our **ug-*** names).

### Without the source files

We can only:
- Use the **same colors and fonts** (done).
- Use **similar spacing and typography** (section padding, heading styles, card style – done in the last pass).
- **Guess** layout and proportions from the written spec.

We **cannot** reproduce pixel‑perfect layout, exact component sizes, or every animation without the real CSS and HTML.

---

## What we changed in the last “visual pass”

To get **closer** to the source look without the files, we:

- **Header:** Taller (min-height 72px), more padding, logo 56px, nav with uppercase + letter-spacing, light border.
- **Top bar:** Subtle border, background from theme colors.
- **Product cards:** White/card background, soft shadow, hover lift, accent color for price, image zoom on hover.
- **Footer:** More padding, white background, uppercase footer headings with letter-spacing.
- **Section padding:** Default 48px top/bottom for sections.
- **Section headings:** Serif title, optional uppercase subheading, letter-spacing.
- **Featured collection:** Larger heading, grid gap from theme spacing.
- **Slider:** Min-height 320px (mobile) / 420px (desktop).
- **Grid banner:** Heading size and letter-spacing aligned with rest of theme.

**Fonts:** Enable **“Use theme asset fonts”** and add **italiana.woff2** and **poppins.woff2** (see **FONTS_SETUP.md**).

---

## Summary

- **To get “everything to look the same”:** You must **provide the source theme** and we (or you) do a **section‑by‑section and snippet‑by‑snippet** diff of Liquid, schema, CSS, and JS, then update our theme to match structure and styles.
- **Without the source:** The theme is aligned on **colors, fonts, and a source-like visual pass**; it will not be a pixel‑perfect copy until the source files are used for comparison.

If you have the Glamora theme folder, share its path and we can align specific sections (e.g. header, footer, slider, product card) step by step.
