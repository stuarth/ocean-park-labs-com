# oceanparklabs.com

Single-page site for Ocean Park Labs, served as static files (GitHub Pages,
domain via `CNAME`).

## Editing

Content lives in the JSX sources (`sections.jsx`, `site-app.jsx`,
`tweaks-panel.jsx`); styling in `site.css`. The browser loads the compiled
bundle at `dist/site.js`, not the JSX, so after editing sources run:

```bash
npm install
npm run build
```

and commit `dist/site.js` along with the source change.

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 4173
```
