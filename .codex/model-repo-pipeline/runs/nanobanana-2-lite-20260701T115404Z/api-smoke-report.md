# Api Smoke

## Smoke Result

- Date: 2026-07-01T13:58:27Z
- Repository: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill`
- Pipeline: `skill-api`
- Shape: `api+skill`
- Child skill: `api-smoke`
- Artifact: `api-smoke`
- Status: `passed`
- Summary: Real API smoke passed: created task task-unified-1782914249-lo515i3w, polled to completed, and recorded final image RESULT URL.
- Source report: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/api-smoke-output.txt`

## Commands

```bash
./scripts/nanobanana-2-lite-image.sh <smoke prompt>
```

## Issues

- None recorded

## Evidence Quality

- `passed` requires a real source report or command evidence.
- `blocked`, `failed`, and `skipped` must explain the reason in Issues or Next Action.

## Next Action

- Feed this report into `completion-gate` if status is `passed`; otherwise fix blockers and record a new result.
