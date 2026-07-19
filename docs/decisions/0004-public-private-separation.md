# Decision 0004: Separate Public Systems from Private Application

## Status

Accepted

## Context

The manual is intended to be public and reusable, but athlete-specific plans may
contain dates, destinations, measurements, medical details, benchmarks, logs,
and constraints. Mixing the two makes the public system less reusable and can
expose private information.

## Decision

The public repository contains timeless principles, systems, and generic
programming frameworks. Personal application belongs in a separate private
project or an ignored local `private/` directory.

## Consequences

- Public examples use generic athletes and relative timing.
- Personal details are removed from public governance and content.
- `.gitignore` excludes the local `private/` directory.

## Related Documents

- [Repository Specification](../../REPOSITORY.md)
- [Repository Design](../../DESIGN.md)
