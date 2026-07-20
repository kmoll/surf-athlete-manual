# Contributing

The Surf Athlete Manual is a public, reusable knowledge system. Contributions
should improve the manual without introducing personal athlete data or duplicate
sources of truth.

## Before Making a Change

Read:

1. [Project North Star](docs/foundations/project-north-star.md)
2. [Repository specification](REPOSITORY.md)
3. [Writing standards](docs/foundations/writing-standards.md)
4. [Terminology](docs/foundations/terminology.md)

## Content Standards

Every recommendation should:

- Serve surf performance, durability, or long-term development.
- Explain why it matters for surfing.
- Respect recovery as the governing programming constraint.
- Attribute only approved expert sources.
- Label other established material as general exercise physiology.
- State uncertainty when the approved sources do not provide a definitive answer.
- Include progressions, regressions, common mistakes, and modification criteria
  where applicable.

## Repository Standards

- Use Markdown and descriptive lowercase filenames with hyphens.
- Use relative links.
- Define each concept or protocol once.
- Put reusable protocols in system or exercise-library pages.
- Put applications and schedules in programming pages.
- Keep personal dates, locations, measurements, medical details, and logs out of
  the public repository.
- Update the Starlight sidebar in `astro.config.mjs` when adding or moving a
  navigable page.
- Run `npm run build` before requesting review.
- Update `CHANGELOG.md` for meaningful changes and `TODO.md` as work progresses.
- Create a decision record for significant programming or architecture changes.

## Pull Request Expectations

A pull request should describe the purpose of the change, identify affected
canonical documents, cite its evidence where needed, and confirm that links and
the documentation build pass. It should avoid unrelated reformatting.

## Review Checklist

- [ ] Does the change support the North Star?
- [ ] Is expert attribution accurate and limited to approved sources?
- [ ] Is general exercise physiology labeled clearly?
- [ ] Is surf relevance explained?
- [ ] Are recovery and longevity constraints respected?
- [ ] Is the content reusable and free of private athlete data?
- [ ] Does it avoid duplicating a canonical protocol?
- [ ] Are internal links and navigation valid?
- [ ] Are changelog, TODO, roadmap, or decision records updated as appropriate?
