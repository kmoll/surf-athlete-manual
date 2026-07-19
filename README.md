# The Surf Athlete Manual

> A living system for building a body that lets you surf better every year.

The Surf Athlete Manual is a public, version-controlled knowledge system for
surf performance, durability, recovery, strength, conditioning, movement
quality, and long-term athletic development. It teaches reusable principles and
systems rather than documenting one athlete's plan.

## Start Here

1. Read the [Project North Star](docs/foundations/project-north-star.md) for the
   mission and governing principles.
2. Read the [project summary](SUMMARY.md) for the manual's sections and status.
3. Follow the [Application Layer](docs/application/overview.md) to create a
   private AI Project or another personal training workspace.
4. Use the [repository specification](REPOSITORY.md) when contributing or
   reorganizing content.

## Who It Is For

This manual is for surfers who want physical preparation to improve performance
in the water while preserving recovery, health, and the capacity to keep
improving over decades. It is not a bodybuilding program, a short-term fitness
challenge, or a personal training journal.

## Source of Truth

- Markdown files are the canonical content.
- GitHub is the authoritative version history.
- MkDocs sites and PDF editions are generated artifacts.
- Reusable systems are defined once and referenced by programs.
- Personal schedules, measurements, medical details, and trip plans belong in a
  private application workspace, never in the public manual.

> **The public manual teaches the system. The private workspace applies the system.**

For most users, the easiest path is a private AI Project named
`Surf Athlete Personal`. Read the manual online, paste the public
[`PROJECT_INSTRUCTIONS.md`](starter-kit/PROJECT_INSTRUCTIONS.md) into the
project's instructions, and add the public [Starter Kit](starter-kit/README.md)
templates. A separate local folder is the second option; Git workflows are for
technical users.

## Evidence Standard

Recommendations may be attributed only to Pavel Tsatsouline, Dan John, Kelly
Starrett, Gray Cook, Stuart McGill, Mark Rippetoe, and Ben Patrick. Material based
on general exercise physiology must be labeled accordingly. Uncertainty must be
stated rather than hidden.

## Repository Map

- `docs/foundations/`: mission, identity, terminology, and writing standards
- `docs/application/`: private-workspace setup, privacy, and AI-assistant guidance
- `docs/assessment/`: reusable assessment methods
- `docs/movement/` and `docs/mobility/`: movement quality and usable range
- `docs/strength/`, `docs/conditioning/`, and `docs/surf-athleticism/`: training systems
- `docs/recovery/` and `docs/nutrition/`: adaptation support systems
- `docs/programming/`: reusable program design and schedule templates
- `docs/exercise-library/`: canonical exercise instructions
- `docs/research/` and `docs/references/`: evidence notes and sources
- `docs/decisions/`: significant architecture and programming decisions
- `starter-kit/`: public-safe templates for a separate private workspace

See [REPOSITORY.md](REPOSITORY.md) for the full specification.

## Current Status

**Version:** 0.1.0

**Status:** Foundation and application architecture
