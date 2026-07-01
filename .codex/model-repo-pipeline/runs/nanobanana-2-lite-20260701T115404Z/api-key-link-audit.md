# API Key Link Audit

Date: 2026-07-02

## Issue

The `Getting an API Key` section explained account creation and dashboard API-key creation as plain text. The top navigation had a `Get API Key` link, but the actual numbered steps did not make `Create an API key` clickable.

## Fix

- Added explicit markdown links for account creation and dashboard API-key creation in all 11 README files.
- Preserved GitHub UTM parameters:
  - `https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill`
  - `https://evolink.ai/dashboard?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill`
- Bumped npm package and `_meta.json` to `1.0.3`.
- Updated `model_repo_orchestrator.py` audit to fail when the API-key creation section has no explicit EvoLink signup/dashboard markdown link.

## Verification

```bash
python3 -m py_compile scripts/model_repo_orchestrator.py
python3 scripts/validate_framework.py
python3 scripts/model_repo_orchestrator.py review --repo /Users/cheercheung/agent/nanobanana-2-lite-image-generate-api-skill --pipeline skill-api --intake /Users/cheercheung/agent/model-repo-pipeline-agent-transfer/intakes/nanobanana-2-lite-image-generate.md
curl -I -L 'https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill'
curl -I -L 'https://evolink.ai/dashboard?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill'
npm pack --dry-run
npx -y . --version
```

Observed:

- Strict audit P0/P1/P2: none.
- Signup link: `200`.
- Dashboard link: `200`.
- Local npx version: `1.0.3`.
