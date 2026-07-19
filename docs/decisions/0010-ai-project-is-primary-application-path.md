# Decision 0010: AI Project Is the Primary Application Path

## Status

Accepted

## Context

Decision 0009 established a separate sibling folder as the default personal
workspace. That approach is safe but assumes users want local files. Many readers
are non-technical and already use project-style AI interfaces that can hold
instructions, reference files, and ongoing conversations.

## Decision

Recommend a private AI Project named `Surf Athlete Personal` as the first and
easiest application path. Users can read the public manual online and add only
the Starter Kit to the private project.

Present a separate local folder as the second path and a private Git or developer
workflow as the third path. Storing private data inside the public manual clone
remains an advanced option only.

The public manual teaches the system. The private workspace applies the system.

## Consequences

- Non-technical users do not need to clone the manual or manage Markdown files.
- `PROJECT_INSTRUCTIONS.md` becomes the primary persistent instruction template.
- `AGENTS.md` remains available for file-aware coding agents.
- Privacy guidance must cover project sharing, uploaded files, account settings,
  exports, local folders, and Git.
- The Starter Kit must work as uploaded files, separate notes, or local files.

## Related Documents

- [Application Layer](../application/overview.md)
- [Create an AI Project](../application/create-ai-project.md)
- [Starter Kit](../application/starter-kit.md)
- [Privacy](../application/privacy.md)
- [Decision 0009](0009-application-layer-and-starter-kit.md)
