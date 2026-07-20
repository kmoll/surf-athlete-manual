---
title: "Decision 0011: Use Astro Starlight and Cloudflare Workers"
---

## Status

Accepted

## Context

The manual needs a modern, simple public reading experience that remains easy
to maintain in Markdown and can be hosted with JavaScript tooling on Cloudflare.
Most readers need clear navigation, search, and responsive pages rather than a
developer-oriented repository view.

## Decision

Use Astro Starlight to build the public documentation site directly from the
canonical Markdown files in `docs/`. Use Cloudflare Workers Static Assets for
hosting. Keep the Starter Kit at the repository root and generate its public
copy and downloadable archive during the site build.

MkDocs is retired from the active toolchain. The repository Markdown remains
portable and authoritative; Astro owns presentation, navigation, search, and
the site-wide safety footer.

## Consequences

- Contributors use Node.js, `npm run dev`, and `npm run build` for site work.
- Navigation is maintained in `astro.config.mjs`.
- Cloudflare can serve the generated `dist/` directory without a custom Worker.
- The Starter Kit archive is generated from one canonical set of templates.
- A production site URL must be configured before the first public deployment.

## Related Documents

- [Repository specification](../../REPOSITORY.md)
- [Repository design](../../DESIGN.md)
- [Application Layer](../application/overview.md)
- [Decision 0006](0006-markdown-is-source-of-truth.md)
