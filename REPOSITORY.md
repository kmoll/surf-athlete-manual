# Repository Specification

## Purpose

This is the master specification for the Surf Athlete Manual repository. It
defines where content belongs, how documents relate, and which artifacts are
canonical. The architecture rationale is in [DESIGN.md](DESIGN.md).

## Repository Boundary

The repository is public and reusable. It contains principles, systems,
protocols, exercises, assessments, programming frameworks, research notes,
references, and decision records.

It does not contain athlete-specific dates, destinations, age, body weight,
medical information, equipment constraints, benchmarks, logs, or photos. Those
belong in a private application workspace named `Surf Athlete Personal`.

The supported paths, in order, are:

1. A private AI Project, recommended for most users
2. A separate local folder for users who want files on their computer
3. A private Git or developer workflow for technical users

```text
Documents/
├── Surf Athlete Manual/
└── Surf Athlete Personal/
```

The local layout is optional; AI Project users can read the public manual online
and add only the Starter Kit. An ignored `private/` directory inside a clone is
an advanced option only for users who understand version control.

## Top-Level Entries

- `README.md`: project introduction and entry points
- `SUMMARY.md`: executive summary, reading order, and current status
- `DESIGN.md`: architecture rationale
- `REPOSITORY.md`: this enforceable repository specification
- `AGENTS.md`: instructions for AI contributors
- `CONTRIBUTING.md`: contribution and review standards
- `CHANGELOG.md`: meaningful released or release-ready changes
- `ROADMAP.md`: milestones and future work
- `TODO.md`: near-term working checklist
- `package.json`: JavaScript dependencies and build commands
- `astro.config.mjs`: Starlight site configuration and navigation
- `wrangler.jsonc`: Cloudflare Workers static-assets configuration
- `starter-kit/`: public-safe templates copied into a private personal workspace
- `LICENSE`: reuse permissions, once selected intentionally

## Documentation Directories

- `docs/foundations/`: canonical philosophy, identity, language, and writing rules
- `docs/application/`: private-workspace setup, Starter Kit, privacy, and AI use
- `docs/assessment/`: reusable assessment methods
- `docs/movement/`: movement-quality principles and methods
- `docs/mobility/`: position and range-of-motion methods
- `docs/strength/`: reusable strength system
- `docs/conditioning/`: aerobic, interval, and paddle-conditioning methods
- `docs/surf-athleticism/`: power, coordination, balance, and surf transfer
- `docs/recovery/`: readiness, fatigue management, sleep, and recovery methods
- `docs/nutrition/`: reusable nutrition principles
- `docs/programming/`: frameworks and nonpersonal program templates
- `docs/exercise-library/`: canonical exercise pages
- `docs/research/`: research notes and evidence reviews
- `docs/references/`: bibliography and source conventions
- `docs/decisions/`: architecture and programming decision records
- `docs/appendices/`: supporting material that does not own a core concept

## Asset Directories

- `assets/diagrams/`: source diagrams
- `assets/images/`: source images
- `assets/templates/`: reusable nonprogram templates
- `assets/releases/`: generated release artifacts

Generated artifacts do not replace Markdown sources.

## Canonical Documents

- `docs/foundations/project-north-star.md` is canonical for philosophy.
- `docs/foundations/surf-athlete.md` is canonical for the athlete identity.
- `docs/foundations/terminology.md` owns preferred project language.
- `docs/foundations/glossary.md` defines domain terms.
- `docs/foundations/writing-standards.md` owns document templates.
- A reusable protocol or exercise has one canonical page in its owning system or
  the exercise library.

Summaries may orient readers, but they must link to rather than redefine these
documents.

## Naming and Linking

- Use lowercase, hyphen-separated Markdown filenames.
- Use relative links for repository content.
- Name index pages `index.md`.
- Use four-digit, sequential prefixes for decision records.
- Update incoming links and the Starlight sidebar in `astro.config.mjs` when
  moving a page.

## Systems Before Programs

Systems are defined before programs are written. Systems explain reusable
methods; programs explain when systems are applied.
Programs must link to system and exercise pages rather than copy their protocols.
Public programs use relative timing and generic athlete roles, not personal
calendars.

## Application Layer

The Application Layer explains how readers apply public systems without placing
personal information in the manual. The public `starter-kit/` contains blank,
reusable templates. Most users add them to a private AI Project and paste
`PROJECT_INSTRUCTIONS.md` into the project's instructions. Local users copy them
into a separate `Surf Athlete Personal/` folder. Developers may use a separate
private repository.

The public templates must never contain real athlete data. Private plans should
reference canonical public protocols instead of duplicating them.

## Evidence Standard

Expert attribution is limited to Pavel Tsatsouline, Dan John, Kelly Starrett,
Gray Cook, Stuart McGill, Mark Rippetoe, and Ben Patrick. Other established
material must be labeled general exercise physiology. Unsupported attribution is
not permitted, and uncertainty must be explicit.

## Decision Records

Significant architecture and programming decisions live in `docs/decisions/`
and include status, context, decision, consequences, and related documents. A
later decision supersedes an earlier record rather than silently rewriting its
history.

## Change and Release Process

1. Update the canonical Markdown source.
2. Update related links and Starlight navigation.
3. Add or revise a decision record when the governing rule changes.
4. Update `TODO.md`, `ROADMAP.md`, and `CHANGELOG.md` as appropriate.
5. Run `npm run build` to validate content and build the documentation site.
6. Commit to Git and generate release artifacts from the reviewed version.

## Generated and Private Files

The `.gitignore` excludes local environments, caches, built sites, and an
advanced local `private/` directory. AI Projects and sibling local folders remain
outside the public repository. A public release artifact may be committed
intentionally to `assets/releases/`; private source material may not.
