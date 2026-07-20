---
title: "Decision 0009: Add an Application Layer and Private Starter Kit"
---

## Status

Superseded by [Decision 0010](0010-ai-project-is-primary-application-path.md)

## Context

The public manual defines reusable systems, but readers also need a clear way to
apply them without placing personal data in the public repository. Many readers
will not understand Git or repository exclusions.

## Decision

Add a public Application Layer that guides readers through creating a separate
sibling `Surf Athlete Personal/` workspace. Provide a public `starter-kit/` of
blank Markdown templates that users copy into the private workspace.

The public manual teaches the system. The private workspace applies the system.

This decision supersedes Decision 0004's treatment of a separate private project
and an ignored in-repository folder as equivalent defaults. The public/private
boundary remains unchanged; only the recommended setup is narrowed.

## Consequences

- Personal application has a documented, non-technical setup flow.
- Blank templates remain reusable and contain no real athlete data.
- AI assistants receive separate public-system and private-context instructions.
- The sibling-folder layout is the default; an ignored in-repository folder is
  advanced use only.
- Public protocols remain canonical and private plans reference them.

## Related Documents

- [Application Layer](../application/overview.md)
- [Create a Private Workspace](../application/create-private-workspace.md)
- [Starter Kit](../application/starter-kit.md)
- [Privacy](../application/privacy.md)
- [Decision 0004](0004-public-private-separation.md)
- [Decision 0010](0010-ai-project-is-primary-application-path.md)
