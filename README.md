# Skybound Solutions — Public Website

The public-facing website for [Skybound Solutions](https://skyboundmi.com).

## Tech Stack

- **Framework:** Next.js 16 (React 19, TypeScript)
- **Styling:** Vanilla CSS with custom design system (brand-aligned)
- **Hosting:** Firebase Hosting
- **Contact Form:** Next.js API route → Discord webhook

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, services, metrics, portfolio preview, CTA |
| `/services` | Service tiers (Consulting, Custom Dev, Full Product) |
| `/portfolio` | Case studies and capabilities |
| `/about` | Company story, founder background, philosophy |
| `/contact` | Contact form + info |
| `/blog` | Blog (placeholder — linked to LinkedIn) |
| `/api/contact` | Contact form API → Discord webhook |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

| Variable | Description |
|---|---|
| `DISCORD_WEBHOOK_URL` | Discord webhook for contact form submissions |

## Brand Assets

Logo variants and favicons are in `public/brand/`, sourced from the [Skybound Core brand kit](https://wiki.skyboundmi.com/company/brand/).
