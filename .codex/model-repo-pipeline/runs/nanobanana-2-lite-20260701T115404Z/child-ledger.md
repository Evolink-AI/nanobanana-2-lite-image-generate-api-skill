# Child Skill Execution Ledger

## Summary

- Date: 2026-07-01T11:54:04Z
- Repository: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill`
- Pipeline: `skill-api`
- Shape: `api+skill`
- Model: Nanobanana 2 Lite Image Generation
- Evidence directory: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z`
- Ledger status: `execution-required`

## Required Child Skills

- `github-template`: available
  - Skill file: `/Users/cheercheung/agent/model-repo-pipeline-agent-transfer/bundled-skills/github-template/SKILL.md`
  - Role: Template scaffold, shape-specific audit, menu/language rules, API/Skill template compliance.
  - Execution note: Run the matching template audit before public release.
- `github-repo-review`: available
  - Skill file: `/Users/cheercheung/agent/model-repo-pipeline-agent-transfer/bundled-skills/github-repo-review/SKILL.md`
  - Role: General GitHub front door, SEO, About, community files, maintainability, and action list.
  - Execution note: Run the general GitHub review after API/skill checks and smoke evidence.

## Evidence Artifacts

| Artifact | Status | Path |
|---|---|---|
| `full_cycle` | `present` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/full-cycle-report.md` |
| `template_audit` | `missing` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/final-template-audit.md` |
| `github_review` | `missing` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/final-github-review.md` |
| `completion_gate` | `missing` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/completion-gate-report.md` |
| `api_smoke` | `missing` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/api-smoke-report.md` |
| `install_smoke` | `missing` | `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/install-smoke-report.md` |

## Execution Steps

1. Run local full-cycle and write the report:

```bash
python3 scripts/model_repo_orchestrator.py full-cycle --repo /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill --pipeline skill-api --shape api+skill --intake /Users/cheercheung/agent/model-repo-pipeline-agent-transfer/intakes/nanobanana-2-lite-image-generate.md --out /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/full-cycle-report.md
```

2. Execute `github-template` first, following its `SKILL.md` instructions. Write the final post-fix template audit report to the artifact path above.

3. Run or document the API smoke test and install smoke test.

   - API smoke report: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/api-smoke-report.md`
   - Install smoke report: `/Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/install-smoke-report.md`

4. Execute `github-repo-review` after template and smoke evidence exist. Write the final GitHub review report to the artifact path above.

5. Run completion-gate after all evidence files exist:

```bash
python3 scripts/model_repo_orchestrator.py completion-gate --repo /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill --pipeline skill-api --shape api+skill --intake /Users/cheercheung/agent/model-repo-pipeline-agent-transfer/intakes/nanobanana-2-lite-image-generate.md --full-cycle-report /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/full-cycle-report.md --template-audit-report /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/final-template-audit.md --github-review-report /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/final-github-review.md --api-smoke-report /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/api-smoke-report.md --install-smoke-report /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/install-smoke-report.md --owner-approved --out /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill/.codex/model-repo-pipeline/runs/nanobanana-2-lite-20260701T115404Z/completion-gate-report.md
```

## Completion Rule

Do not claim `release ready`, `published`, or final completion until `completion-gate` reports `release-ready-evidence-present` and all owner-controlled publication actions are approved.
