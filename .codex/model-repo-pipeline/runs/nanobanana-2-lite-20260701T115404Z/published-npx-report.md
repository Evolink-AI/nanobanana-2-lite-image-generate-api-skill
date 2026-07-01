# Published Npx

## Child Result

- Date: 2026-07-01T14:01:15Z
- Repository: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill`
- Pipeline: `skill-api`
- Shape: `api+skill`
- Child skill: `published-npx`
- Artifact: `published-npx`
- Status: `passed`
- Summary: Published npm package was installed and executed with npx @latest. The command created task task-unified-1782914404-w4fcqq0x, polled to completed, and printed a final RESULT image URL.
- Source report: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/published-npx-output.txt`

## Commands

```bash
npx -y evolink-nanobanana-2-lite@latest <prompt>
```

## Issues

- None recorded

## Evidence Quality

- `passed` requires a real source report or command evidence.
- `blocked`, `failed`, and `skipped` must explain the reason in Issues or Next Action.

## Next Action

- Feed this report into `completion-gate` if status is `passed`; otherwise fix blockers and record a new result.
