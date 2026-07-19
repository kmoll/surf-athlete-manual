# Decision 0008: Remove the Separate Philosophy Section

## Status

Accepted

## Context

The former `docs/philosophy/` pages duplicated the North Star or held principles
that belong in specific training systems. This blurred ownership and encouraged
drift.

## Decision

Remove `docs/philosophy/`. Enduring project principles live in
`docs/foundations/project-north-star.md`; practical principles live in the system
they govern.

## Consequences

- Foundations become the entry point for mission and identity.
- System pages own the practical application of training principles.
- Navigation and incoming links no longer reference `docs/philosophy/`.

## Related Documents

- [Foundations](../foundations/index.md)
- [Project North Star](../foundations/project-north-star.md)
- [Repository Design](../../DESIGN.md)
