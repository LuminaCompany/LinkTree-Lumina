# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Built and verified. Git repo on `master`. Configured for Vercel (see Deploy).

## Goal

Single-page "link in bio" (LinkTree-style) for **Lumina**. One route, no backend, static deploy. Content is a short list of links edited by hand, not a CMS.

## Stack

**No build step.** Plain HTML + CSS + two classic `<script>` tags. Chosen over the Vite/React default (the sibling landing page's stack) because the page is one section with no state — a bundler would only add a deploy step. Confirmed with the user before scaffolding.

```
index.html      skeleton only — an empty <main id="painel">
style.css       all design: tokens, elevation, animations, breakpoint
config.js       the ONLY file meant to be edited by hand
app.js          renders CONFIG into #painel
assets/         logo-lumina.png + cards/
docs/referencia/  design-system tokens, original-vs-clone table, QA screenshots
```

No `package.json`, no npm, no tests. Opening `index.html` by double-click works (`file://`-safe: classic scripts, no ES modules, no `fetch`).

Local server, when wanted: `npx --yes serve .`

## Deploy — Vercel

Static, zero env vars. `vercel.json` sets framework `null`, no build/install, output `.`, security headers + CSP, and caching (`assets/` 1 day; everything else `must-revalidate` because filenames aren't hashed). `.vercelignore` keeps `docs/`, `CLAUDE.md`, `README.md` and the 1.4 MB root `Lumina_logo_sem_fundo.png` out of the deploy.

Domain: `luminacompanybr.com` (apex). `vercel.json` 301s `www.` → apex. `index.html` hardcodes absolute `og:image` / `og:url` / canonical on that domain — link previews need absolute URLs, so change them if the domain changes.

CSP allows scripts only from `'self'` — never add inline `<script>` or a third-party script without updating `Content-Security-Policy` in `vercel.json`. `img-src` allows any `https:` because `config.js` accepts external image URLs.

## Editing rules

- **Content changes go in `config.js`, never in `app.js` or `index.html`.** `config.js` is written for a non-developer: heavy Portuguese comments, one copy-paste template per list. Preserve that tone when adding fields.
- `config.js` is a classic script declaring a top-level `const CONFIG`. Do not convert it to an ES module or `export` — that breaks `file://`.
- New card/social fields need three edits: the field in `config.js`, its comment block, and the read in `app.js`.
- Social icons live in the `ICONES` map in `app.js` (inline SVG paths, 24×24 viewBox, `fill: currentColor`). Add new networks there plus a default in `CORES_PADRAO`.

## Design system — Lumina UI Kit v2 · Light (julho/2026)

**This is the authoritative system.** Source: `Lumina Design System.pdf`, supplied by the user; tokens sampled pixel-exact from the rendered PDF and recorded in `docs/referencia/DESIGN-SYSTEM.md`.

Two earlier sources were wrong and must not be used again:

- `../LuminaHub/DESIGN.md` — a **different, dark** system (Void-and-Signal, Orbitron, `#00EAFF`, near-black). It belongs to LuminaHub, an internal ops dashboard. It is not this brand.
- `../Landing Page Lumina Company` — same dark palette, same problem.

The Claude Design MCP copy still cannot be read (`DesignSync` needs `/design-login` from an interactive session on this machine; `/design-consent` returns 403). The PDF supersedes it anyway.

### Tokens

Defined in `:root` at the top of `style.css`.

| Token | Value | Role |
|---|---|---|
| `--primary-100` | `#A6E2FB` | pale cyan — tints, shimmer, hover wash |
| `--primary-300` | `#33BEF4` | light cyan — gradient start, hover borders |
| `--primary` | `#0EA5E9` | **primary cyan** (stated in the PDF) |
| `--blue` | `#0A84FF` | gradient end |
| `--blue-deep` | `#00489B` | deepest ramp step |
| `--bg` | `#F8FCFF` | page base |
| `--bg-tint` | `#EFF8FE` | radial bloom, image placeholders |
| `--surface` | `#FFFFFF` | cards, panel |
| `--border` | `#E3EEF6` | hairlines |
| `--border-2` | `#CFE3EF` | card borders (needs more weight on a white panel) |
| `--text` | `#0B1F2E` | headings, card titles |
| `--text-2` | `#39566B` | body, subtitles, social labels |
| `--text-3` | `#9DB4C4` | micro-labels only (uppercase, letterspaced) |

`--grad` is the action gradient from the UI Kit's primary button: `linear-gradient(100deg, #33BEF4, #0EA5E9 48%, #0A84FF)`.

### Typography — two families, no more

**Space Grotesk** (500/600/700) for the brand title only. **Inter** (400–700) for everything else: card titles, body, subtitles, labels. Loaded via Google Fonts `@import` at the top of `style.css`.

Orbitron and JetBrains Mono are **not** part of this system — they came from the wrong dark kit. Do not reintroduce them.

### Elevation

Light and diffuse, tinted blue, never hard. Cards rest on `--sh-card` and lift to `--sh-card-hover` (which shifts the shadow toward cyan). The panel uses `--sh-panel`. Focus is `--ring` (`0 0 0 3px rgba(14,165,233,0.28)`) plus a 1px `--primary` outline, matching the input focus ring in the UI Kit.

### The `destaque` card

`destaque: true` on a card paints it with `--grad` and white text — the same treatment as the UI Kit's "Entrar na plataforma" button. It marks the page's single primary action. Keep it to at most one card; the whole point is that it outranks the others.

## Cloned from

`https://link.astrevo.com.br/` — structure, geometry and interactions only. `docs/referencia/ORIGINAL.md` holds the property-by-property comparison.

Structural values kept from the original: panel `max-width: 450px` / `padding: 2.5rem 2rem` / `gap: 1.5rem`; avatar `110px`; cover image `150px`; hover `translateY(-3px)`; cover `scale(1.05)`; shimmer `::after` at `skewX(-20deg)` sweeping `left: -100% → 150%` over `.5s`; entrance `fadeIn 1s ease-out`; easing `cubic-bezier(.25,.8,.25,1)`; breakpoint `480px`.

Everything else — palette, type, elevation, radii, the gradient card — is the Lumina UI Kit, not the original. Radii were pulled in to the kit's scale (panel `24px`, cards `16px`) from the original's `32px`/`20px`.

The original has zero JavaScript: one CSS entrance animation and hover transitions. There is no scroll behavior, no tabs, no carousel. Don't add any.

## Responsive

One breakpoint, `480px`. The panel is a fixed 450px max-width, so tablet and desktop render identically. Verified at 1440 / 768 / 390.
