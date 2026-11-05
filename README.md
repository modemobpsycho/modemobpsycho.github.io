# vadim.dev — CV site

Personal CV / portfolio for **Vadim Taratuta**, Full Stack Engineer (React · NestJS · TypeScript).
Static HTML, CSS and a small amount of vanilla JavaScript — no build step, no dependencies.

Live: <https://modemobpsycho.github.io>

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | The site: hero, experience, selected work, toolkit, education, contact, case-study drawer |
| `cv.html` | Print layout (A4, two pages) that produces the PDF version |
| `assets/css/styles.css` | Site styles, tokens, responsive rules |
| `assets/css/fonts.css` + `assets/fonts/` | Self-hosted Space Grotesk, Inter, JetBrains Mono (latin / latin-ext / cyrillic) |
| `assets/js/main.js` | Navigation, project filters, case-study drawer, copy-to-clipboard, scroll reveal |
| `assets/js/i18n.js` | EN / RU dictionary and language switch (persisted in `localStorage`) |
| `assets/img/` | Portrait, favicon |
| `assets/Vadim_Taratuta_CV.pdf` | Two-page A4 CV — what the "Download CV" button serves |
| `assets/Vadim_Taratuta_CV.docx` | Editable Word twin of the PDF |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
```

Deep link straight to the case study: `index.html#case-chhj`.

## Rebuilding the documents

The PDF is printed from `cv.html` with headless Chrome, so the two never drift apart:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=12000 \
  --print-to-pdf=assets/Vadim_Taratuta_CV.pdf cv.html
```

The Word file is generated with `python-docx` from the same copy. Edit `cv.html` and the DOCX generator
together when the content changes.

## Deploy

GitHub Pages serves this repository's `main` branch root directly — pushing to `main` is the deploy.

- Language: EN default, RU via the switch in the top bar (`?lang=ru` also works).
- Print styles: `@page A4`, used for the CV PDF only.
