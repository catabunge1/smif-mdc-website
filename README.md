# SMIF · MDC — Website

Modern multi-page site for the Miami Dade College Student Managed Investment Fund.
Hand-built with custom CSS (no framework lock-in), Chart.js for the performance graph.
Deploys to Vercel with **zero configuration**.

## Pages
- `index.html` — Home (hero, stats, section teasers)
- `about.html` — About (story, mission, three pillars)
- `portfolio.html` — Portfolio (performance chart, sector allocation, quarterly report)
- `team.html` — Team (board, members, alumni, advisor)
- `contact.html` — Contact / Join (how to join, form, contact info, map)

## Preview locally
Double-click `index.html` — it opens in any browser and the nav links move between pages. (Needs internet for fonts, the chart library, and the map.)

## Deploy to Vercel
**Drag & drop:** vercel.com → Add New → Project → deploy without a Git repo → drag this whole `smif-mdc-website` folder in. You get a live URL.

**With GitHub (so you can update it):** push this folder to a repo → in Vercel, Import it → Framework preset = **Other** → Deploy. Add a custom domain under Settings → Domains.

## Team photos
Every headshot is matched to the correct person per your numbered roster. To change one later, edit `assets/js/team.js` — each person has a `photo:"member-XX.jpg"`. Photos live in `assets/team/`.

The logo, real Q4 2025 portfolio data, and the downloadable Q4 report are all wired in. Two optional tweaks remain:
1. **Brand colors** — edit the `:root` variables at the top of `assets/css/style.css` (`--navy`, `--gold`, `--ivory`) if you want exact hex codes.
2. **New quarters** — each quarter, replace the numbers in `portfolio.html` (metric cards, holdings table, the `data` array in the chart script) and drop the new report PDF into `assets/reports/`, updating the download link.

The logo is stored two ways: `assets/img/logo-color.png` (full color, transparent — used as the favicon and good on light backgrounds) and `assets/img/logo-dark.png` (recolored for the navy header/menu).

## Structure
```
smif-mdc-website/
  index.html  about.html  portfolio.html  team.html  contact.html
  assets/
    css/style.css
    js/main.js, team.js
    img/bull.jpg, trading-floor.jpg
    team/member-01..15.jpg
  README.md
```
