# Repository Design

## Status

Accepted

## Purpose

This document explains the reasoning behind the repository architecture. The
[repository specification](REPOSITORY.md) defines the enforceable structure and
documentation rules. The [Project North Star](docs/foundations/project-north-star.md)
defines the training philosophy.

## Modular Knowledge Architecture

The manual separates enduring concepts from their applications:

- Foundations define mission, identity, language, and editorial standards.
- Systems define reusable assessments, protocols, and methods.
- Programs combine systems for a block, season, or performance opportunity.
- Exercise pages define movements once for reuse across systems and programs.
- Decision records preserve the reasons for significant changes.

This makes a protocol independently maintainable and prevents a program from
becoming a second, conflicting source of truth.

## Public and Private Separation

The public manual teaches reusable knowledge. Athlete-specific dates,
destinations, measurements, medical details, equipment constraints, logs, and
benchmarks belong in a private application workspace named
`Surf Athlete Personal`.

Public programs therefore use roles and relative timing such as "peak week" or
"12-week preparation block," not a named athlete's calendar.

## Application Layer

The public manual teaches the system. The private workspace applies the system.

The Application Layer connects those two responsibilities without mixing their
data. Public setup guides and blank Starter Kit templates support three paths:

1. A private AI Project, recommended for most users
2. A separate local `Surf Athlete Personal/` folder
3. A private Git or developer workflow for technical users

Most users can read the manual online and add only the Starter Kit to their AI
Project. Cloning the public repository is not required. An ignored `private/`
directory inside the public clone remains an advanced option and is never the
default user flow.

## Source-of-Truth Rules

- Markdown files are canonical.
- Git history is authoritative for versions and changes.
- The North Star is canonical for project philosophy.
- A protocol has one canonical system or exercise page.
- Programs link to canonical protocols instead of copying them.
- Astro/Starlight sites, PDFs, and files under `assets/releases/` are generated
  artifacts.

## Linking Strategy

Repository Markdown uses relative links. Links should point directly to the
canonical page rather than through duplicate summaries. Adding or moving a
navigable page requires a corresponding Starlight sidebar update in
`astro.config.mjs`.

## Documentation Conventions

Files use descriptive lowercase names with hyphens. Substantial chapters and
exercise pages follow the templates in
[writing standards](docs/foundations/writing-standards.md). Terms follow the
[terminology guide](docs/foundations/terminology.md).

## Change Management

- `ROADMAP.md` holds milestones and long-range plans.
- `TODO.md` holds near-term work.
- `CHANGELOG.md` records released or release-ready meaningful changes.
- `docs/decisions/` records significant architectural or programming decisions.

## Generated Artifacts

Generated sites, local caches, and private data are ignored. Release artifacts
may be published under `assets/releases/`, but they never replace their Markdown
sources.
