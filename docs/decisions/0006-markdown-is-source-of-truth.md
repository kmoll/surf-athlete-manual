---
title: "Decision 0006: Markdown Is the Source of Truth"
---

## Status

Accepted

## Context

The manual may be published as a documentation site or PDF. Editing generated
outputs directly would fragment the content and obscure review history.

## Decision

Markdown files in the repository are canonical. Git history is authoritative for
versions. Sites, PDFs, and other published formats are generated artifacts.

## Consequences

- Content changes begin in Markdown.
- Generated artifacts never replace their source documents.
- Release processes must identify the source version used.

## Related Documents

- [Repository Specification](../../REPOSITORY.md)
- [Repository Design](../../DESIGN.md)
