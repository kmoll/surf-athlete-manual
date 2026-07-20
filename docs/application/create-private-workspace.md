---
title: "Create a Local Private Workspace"
---

## When to Use This Path

Use a local private folder when you want direct control of files on your computer
or want to use a file-aware assistant such as Codex, Claude Code, or a similar
tool.

The recommended layout is:

```text
Documents/
├── Surf Athlete Manual/
└── Surf Athlete Personal/
```

The folders are separate. The manual contains the public system. The personal
folder contains goals, dates, measurements, logs, health context, and plans.

## Setup

1. Create a folder called `Surf Athlete Personal`.
2. Download or copy the public `starter-kit/` directory.
3. Put the Starter Kit files directly into `Surf Athlete Personal/`.
4. Open the folder with a Markdown editor or file-aware AI assistant.
5. Fill in the templates. Start with `GOALS.md`, `BASELINE.md`, and `RECOVERY.md`.

After copying, the local workspace should look like this:

```text
Surf Athlete Personal/
├── README.md
├── AGENTS.md
├── PROJECT_INSTRUCTIONS.md
├── GOALS.md
├── BASELINE.md
├── CURRENT_BLOCK.md
├── TRAINING_LOG.md
├── NUTRITION.md
├── RECOVERY.md
├── TRIPS.md
├── EQUIPMENT.md
├── NOTES.md
├── HISTORY.md
└── blocks/
    └── README.md
```

Use `AGENTS.md` with file-aware coding agents. `PROJECT_INSTRUCTIONS.md` can be
used as the assistant's persistent instructions when the local tool supports
that feature.

## Developer Option

Technical users may keep a private workspace in Git or as a separate sibling
repository. Prefer a private repository with carefully reviewed access settings.

Avoid storing private data inside the public manual repository. An ignored
in-repository folder is appropriate only when the user understands Git history,
ignore rules, staging, remotes, generated artifacts, and how exclusions can fail.

## Related Documents

- [Create an AI Project](create-ai-project.md)
- [Starter Kit](starter-kit.md)
- [Privacy](privacy.md)
- [Use an AI Assistant](use-an-ai-assistant.md)
