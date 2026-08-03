# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project
Marketing website for the **MDC Student Managed Investment Fund (SMIF)** — a student
investment club at Miami Dade College. Multi-page static site, no build step, no framework.
Deploys to Vercel as-is.

## Tech stack
- Plain HTML, hand-written CSS, and vanilla JavaScript. **No framework, no bundler, no npm build.**
- Chart.js is loaded from a CDN (`cdn.jsdelivr.net`) only on `portfolio.html`.
- Google Fonts: Fraunces (serif display) + Inter (sans body).
- Everything is static — opening `index.html` in a browser runs the whole site.

## Run / preview
- Simplest: open `index.html` in a browser.
- Recommended: VS Code + the **Live Server** extension → right-click `index.html` → "Open with Live Server". (Recommended extensions are in `.vscode/extensions.json`.)
- Needs internet for the fonts, Chart.js, and the embedded Google map.

## Deploy
Vercel, zero config. Push the repo to GitHub → import at vercel.com → framework preset **Other**.
No install or build command is required (it's a static site).

## Structure
```
index.html        Home — hero, stat band, section teasers
about.html        About — story, mission, three pillars
portfolio.html    Portfolio — metrics, holdings table, sector doughnut, report download
team.html         Team — rendered from assets/js/team.js
contact.html      Contact / Join — steps, form (mailto), info, Google map
assets/
  css/style.css   ALL styles. Design tokens live in :root at the top.
  js/main.js      Shared: nav scroll state, mobile menu, scroll reveal, contact form (mailto)
  js/team.js      Team data array + renderer (only loaded on team.html)
  img/            logo-color.png (favicon/light bg), logo-dark.png (navy header),
                  bull.jpg (hero), trading-floor.jpg (about)
  team/           member-01.jpg .. member-15.jpg (headshots)
  reports/        SMIF-Q4-2025-Report.pdf (linked from portfolio.html)
```

## Conventions
- **Colors: never hardcode.** Use the CSS variables in `:root` (`--navy`, `--gold`, `--ivory`, `--ink`, `--muted`, `--line`). Change the brand by editing those variables only.
- Fonts: headings use `var(--serif)` (Fraunces), body uses `var(--sans)` (Inter). Two weights (400/500).
- Every page repeats the same `<header>` and `<footer>` markup by hand — if you change nav or footer, update all five HTML files. The active nav link gets `class="active"`.
- Interior pages set `data-solid="true"` on `<header>` (solid navy bar); the home page omits it (transparent over the hero, solidifies on scroll).
- Sentence case in UI copy. Restrained motion (`.reveal` fade-up via IntersectionObserver in main.js).

## Common tasks
- **Add / edit a team member:** edit the `TEAM` array in `assets/js/team.js`. Each person is `{name, role, photo, li}`. Photos are in `assets/team/`. Keep each group alphabetical by name.
- **Update quarterly portfolio data:** edit `portfolio.html` — the four `.metric` cards, the `.holdings` table rows, the `data` array inside the `<script>` (sector doughnut), and the `.mover` ticker tags. Drop the new report PDF in `assets/reports/` and update the download link. Also update the fund value in the home `.stats` band (`index.html`).
- **Swap the logo:** replace `assets/img/logo-dark.png` (used on the navy header/menu) and `assets/img/logo-color.png` (favicon). Header references are identical across all five pages.
- **Change brand colors:** edit the `:root` variables in `assets/css/style.css`.

## Notes
- Portfolio figures are real, from the fund's Q4 2025 report (as of 12/31/2025). Keep the educational-use disclaimer on `portfolio.html`.
- The contact form uses a `mailto:` link (no backend). To collect submissions server-side, wire the form in `contact.html` to a service like Formspree.
- `assets/reports/SMIF-Q3-2025-Report.docx` is an older report not linked anywhere; safe to delete.
