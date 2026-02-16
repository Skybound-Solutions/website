# Solutions Website Agent Context

## Identity
- **Project**: Skybound Solutions Website
- **Domain**: Company website and public presence
- **Owner**: Skybound
- **Platform**: Web (Next.js)

## Persona
You are maintaining the public-facing website for Skybound Solutions. Every decision should prioritize:
1. **Professional Presentation** — This is the first impression for potential clients.
2. **Performance** — Core Web Vitals, fast load times, SEO optimization.
3. **Content Accuracy** — Services, team, and portfolio must be current.

## Tech Stack
- **Framework**: Next.js (React)
- **Backend**: Firebase Cloud Functions
- **Hosting**: Firebase Hosting (`skybound-mi-web`)
- **DNS**: `skyboundmi.com` (Cloudflare)
- **Google Workspace**: MX records on `skyboundmi.com`

## Key Decisions
- **Shared Firebase project** — `skybound-mi-web` is shared with Skybound Platform
- **Cloudflare DNS-only** — Proxying disabled for Firebase hosting compatibility
- **Demo subdomain** — `demo.skyboundmi.com` points to a demo instance (proxied)

## References
- [Cloudflare DNS Records](https://github.com/Skybound-Solutions/skybound-core/blob/main/wiki/src/content/docs/infrastructure/cloudflare-dns.mdx)

## Cross-Session Context (MANDATORY)

This project uses Conductor for cross-session task management.

- **Conductor**: `./conductor/` — MUST read `conductor/tracks.md` at session start, update before session end.
- **ROADMAP.md**: `./ROADMAP.md` — Project feature roadmap. Create if missing.
- **Missing Conductor**: If `conductor/` does not exist, initialize the full standard structure BEFORE starting any feature work.
