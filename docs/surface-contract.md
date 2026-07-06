# Release Surface Contract

This repository has two rendered README surfaces and one installer runtime surface. Each surface uses a different attribution pair for API-key acquisition links.

## GitHub README Surface

File: `README.md`

Rendered at: GitHub repository page.

Allowed API-key URL patterns:

- GitHub README key acquisition: `https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image`
- Agent install handoff blocks in the GitHub README may show installer-runtime handoff URLs: `https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image`

Purpose:

- Explain the repository and model/API.
- Preserve multilingual README links.
- Route developers to docs, examples, and GitHub source.
- Let agents copy a primary `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` install prompt from GitHub.

## NPM Package README Surface

File: `README.npm.md`

Rendered at: npm package page after `scripts/publish-npm.sh` copies it to staging `README.md`.

Allowed API-key URL pattern:

- `https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image`

Disallowed on this surface:

- `utm_source=github&utm_medium=readme`
- `utm_source=skill&utm_medium=install`
- Links to localized `README.*.md` files, because localized README variants are excluded from the npm payload.

Purpose:

- Explain the npm package and one-line install path.
- Show `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` as the primary Agent install CTA.
- Keep `npx evolink-nanobanana-2-lite@latest -y --path <skills-dir>` as fallback/direct CLI, not the primary Agent CTA.
- Route package-page readers to API-key acquisition with npm/package attribution.
- Avoid GitHub-only or installer-runtime attribution on the npm package page.

## Installer Runtime Surface

Files: `bin/cli.js`, `llms-install.md`, `SKILL.md`

Rendered by: `npx evolink-nanobanana-2-lite@latest`, `--llms`, `--skill`, and installed skill files.

Allowed API-key URL pattern:

- `https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image`

Purpose:

- Prefer `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` for Agent install instructions.
- Keep direct `npx` installer commands available as fallback/manual install paths.
- Open or show the tracked key URL during setup.
- Print `EVOLINK_KEY_URL`, `AGENT_NEXT_ACTION`, and `ENV_VAR_EXPORT`.
- Tell the agent to collect the pasted key, save it as `EVOLINK_API_KEY`, validate it with the non-generating credits endpoint, and then show a ready-to-use prompt.

## Verification Command

Run:

```bash
npm run check:surfaces
```

Before npm release staging, also run:

```bash
npm run pack:staged
```
