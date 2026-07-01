# Install Smoke

## Smoke Result

- Date: 2026-07-01T12:23:45Z
- Repository: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill`
- Pipeline: `skill-api`
- Shape: `api+skill`
- Child skill: `install-smoke`
- Artifact: `install-smoke`
- Status: `passed`
- Summary: Local non-interactive installer copied SKILL.md, _meta.json, scripts, references, examples, and preserved executable shell scripts. npm pack includes examples/curl, examples/python, and examples/javascript so installed/direct runtime dependencies are present.
- Source report: `not supplied`

## Commands

```bash
npm pack --dry-run; node bin/cli.js -y --path <tmpdir>; test -x <tmpdir>/nanobanana-2-lite-image/examples/curl/complete-flow.sh
```

## Issues

- None recorded

## Evidence Quality

- `passed` requires a real source report or command evidence.
- `blocked`, `failed`, and `skipped` must explain the reason in Issues or Next Action.

## Next Action

- Feed this report into `completion-gate` if status is `passed`; otherwise fix blockers and record a new result.
