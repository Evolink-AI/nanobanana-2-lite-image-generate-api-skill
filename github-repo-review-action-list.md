# GitHub Repo Action List

Repo: `cheercheung/nanobanana-2-lite-image-generate-api-skill`
Review date: 2026-07-01
Review mode: `Review + Fix + Follow-up Check`

## P0

- None.

## P1

- None.

## P2

- [ ] Add a lightweight GitHub Actions workflow for package smoke tests.
  - Why: It would automatically protect future PRs and release edits.
  - Owner: maintainer
  - Expected result: PRs run `npm pack --dry-run` and `npx -y . --version`.

## Completed In This Review

- [x] Set GitHub About description.
  - Why: Empty description weakened first impression and GitHub search relevance.
  - Expected result: Repo purpose is visible before opening README.
- [x] Set GitHub homepage.
  - Why: Empty website link hid the official API docs.
  - Expected result: GitHub sidebar points to the canonical Evolink docs.
- [x] Add GitHub topics.
  - Why: Empty topics reduced repo discoverability.
  - Expected result: Repo search keywords cover model, API, skill, package, and agent surfaces.
- [x] Add `CODE_OF_CONDUCT.md`.
  - Why: Public repo community profile was incomplete.
  - Expected result: GitHub Community Profile reaches 100%.
- [x] Add classic issue template and issue template config.
  - Why: GitHub API did not recognize issue forms alone as `issue_template`.
  - Expected result: Community Profile recognizes issue template.
- [x] Improve README functional link copy.
  - Why: Resource links should be action-oriented and self-contained.
  - Expected result: Documentation and related links scan better.

## Notes

- Blockers: None.
- Out of scope: CI workflow is optional and not blocking public use.
- Follow-up check: Re-run `gh api repos/cheercheung/nanobanana-2-lite-image-generate-api-skill/community/profile` after any future community file changes.
- Link copy issues: Fixed in README Documentation and Related Repositories sections.
