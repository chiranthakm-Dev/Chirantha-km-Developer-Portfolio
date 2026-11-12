# Portfolio redesign

Rebuilt the portfolio as one statically generated, recruiter-readable page using the three supplied resumes. The reference image informs the cream-and-forest visual language; its sample names and roles are not used.

- Typed source of truth: `data/content.ts`, shared by the page, metadata, structured data, and generated resume. Existing source components outside the rebuilt route remain available, but are not imported by the portfolio.
- Nine standard sections, exact job titles, semantic headings/articles/lists/dates, real email/phone links, and research clearly distinguished from production engineering.
- Anton display, Inter body, JetBrains Mono tags; self-hosted by `next/font` with swap/preload. Background `#FAF3EE`, primary `#1F4D3F`, dark `#143428`, sage `#8FA79A`, ink `#14241D`, secondary `#526058`.
- Sticky navigation, active sections, keyboard-accessible mobile disclosure, skip link, 44px controls, visible focus rings, resume/contact actions, and responsive layouts.
- Framer Motion and Lenis load only as progressive enhancements. Fully visible HTML is the default; reduced motion disables smooth scrolling, magnetic movement, parallax, and decorative drift. Removed the blocking preloader, particles, custom cursor, realtime overlays, and 3D runtime from the rendered page. No new runtime dependencies.
- CSS illustrations are decorative. A tiny grain PNG replaces expensive SVG turbulence. No portfolio content is drawn into images or canvas.
- Canonical metadata, Open Graph/Twitter preview, Person JSON-LD, sitemap, robots, lightweight 404, and legacy profile routes redirected to section anchors.
- Three-page A4, single-column Helvetica resume at `/resume.pdf`, downloaded as `Chirantha_K_M_Resume.pdf`. Rebuild from the same content with `node scripts/export-content.cjs | python3 scripts/generate-resume.py`.
- Refreshed caniuse-lite in the pnpm lockfile to remove the outdated browser database warning. Original repository lint-skipping setting is unchanged.

## Verification — 12 Nov 2026

- `npm run build`: passed without warnings. Home, metadata routes, and preview image are prerendered. First-load home JS: 88.1 kB.
- Lighthouse 13.6.0, default mobile simulation against the local production build: **Performance 100, Accessibility 100, Best Practices 100, SEO 100**. FCP/LCP 1.1s, TBT 0ms, CLS 0. Full report: `docs/verification/lighthouse.html`. These are local lab measurements, not hosted field scores. The report still lists advisory opportunities for unused framework JS/CSS.
- Chrome at 360px, 768px, 1440px: no horizontal overflow; one h1, nine labelled sections; fonts loaded; zero console/page errors.
- JavaScript disabled: all nine sections visible. Raw HTTP HTML contains the resume-backed content and JSON-LD.
- Reduced motion: all sections visible, scroll behavior `auto`, decorative animation `none`.
- Mobile navigation opens, follows section anchors, and closes; Escape restores focus to its toggle. Resume download filename verified in Chrome. Missing route returns HTTP 404 with a working return link.
- `pdftotext -layout public/resume.pdf`: all headings in order, exact job titles, three pages, no non-ASCII or garbled symbols. Extraction saved under `docs/verification/resume-extracted.txt`.
- `git diff --check`: passed. Browser results saved in `docs/verification/browser-results.json`.

## TODOs / missing information

- Supply verified project repository/live URLs. No embedded link annotations were found in the provided PDFs; slugs are not treated as verified URLs.
- Supply publication/DOI and certificate URLs. Ovia is labelled conference accepted; publication is not assumed.
- Confirm Hindi proficiency if a proficiency label is wanted; currently lists languages only.
- Education/certification dates only provide years. Months are intentionally not invented; employment uses MMM YYYY.
- No backend contact form is enabled. The existing unused `/api/send` remains in the repository; the new page uses mailto.
- Review the branch preview before any production merge. No production release is authorized or performed.

Unrelated pre-existing working-tree changes and asset deletions are excluded from the redesign commit.
