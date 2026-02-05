# Font setup: Italiana + Poppins (source look)

To make the theme look like the source (Glamora), use **Italiana** for headings and **Poppins** for body. Follow these steps.

---

## 1. Get the font files (woff2)

### Option A: Google Fonts (download family)

1. **Italiana**  
   - Go to [Google Fonts – Italiana](https://fonts.google.com/specimen/Italiana).  
   - Click **Download family**.  
   - Unzip; look for `Italiana-Regular.ttf` (or any included file).  
   - If the zip has no `.woff2`, use Option B or an online converter (e.g. [CloudConvert](https://cloudconvert.com/ttf-to-woff2)) to create `italiana.woff2` from the TTF.

2. **Poppins**  
   - Go to [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins).  
   - Click **Download family**.  
   - Unzip; use the `.woff2` file for the weight you want (e.g. **Regular 400**), or convert from TTF to get `poppins.woff2`.

### Option B: Direct woff2 (if available)

- **Poppins** (Latin, 400 normal):  
  `https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-400-normal.woff2`  
  Download and rename to `poppins.woff2` if you like.

- **Italiana**: Google Fonts may not expose a direct woff2 URL; use Option A (download family, then convert to woff2 if needed).

---

## 2. Add fonts to the theme (Shopify)

1. In **Shopify admin**: **Online Store → Themes**.  
2. On your **Ukiyo-Glam** theme, click **Actions → Edit code**.  
3. Open **Assets**.  
4. Click **Add a new asset**.  
5. Upload:
   - `italiana.woff2` (and optionally `italiana.woff` for older browsers).  
   - `poppins.woff2` (and optionally `poppins.woff`).  
6. Keep the exact names so the theme can find them: `italiana.woff2`, `poppins.woff2`.

---

## 3. Enable theme asset fonts

1. In the theme editor: **Theme settings** (left sidebar).  
2. Open **Typography**.  
3. Turn **on** “Use theme asset fonts (add italiana.woff2, poppins.woff2 to Assets for source look)”.  
4. Save.

The layout will then use **Italiana** for headings and **Poppins** for body (see `layout/theme.liquid` and `assets/ug-fonts.css.liquid`).

---

## 4. If you don’t use asset fonts

- Leave “Use theme asset fonts” **off**.  
- In **Typography**, set **Heading font** to **Italiana** (if your store’s font picker has it) and **Body font** to **Poppins**.  
- Fonts will load from Shopify’s font CDN instead of your Assets.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Get `italiana.woff2` and `poppins.woff2` (Google Fonts download or CDN + convert). |
| 2 | Upload them in **Themes → Edit code → Assets**. |
| 3 | Enable **Theme settings → Typography → Use theme asset fonts**. |
| 4 | Save; headings and body will match the source look. |
