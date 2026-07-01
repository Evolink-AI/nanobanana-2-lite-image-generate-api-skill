# Nanobanana 2 Lite Image Generation: API, Pricing, Examples, and Integration Guide

<!-- TODO: translate prose to de. Keep commands, JSON, endpoint paths, model IDs, and UTM URLs unchanged. -->

<p align="center">
  <a href="README.md">English</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.pt.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.zh-TW.md">繁體中文</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill">
    <img src="./assets/banner.jpg" alt="Nanobanana 2 Lite Image Generation API and skill guide" width="100%" />
  </a>
</p>

<p align="center">
  Run Nanobanana 2 Lite Image Generation through EvoLink, then install the matching agent skill.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill">View Nanobanana 2 Lite Image Generation pricing</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill">Get your API key</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate">Read Nanobanana 2 Lite Image Generation API docs</a>
</p>

## Quick Start

```bash
export EVOLINK_API_KEY="your_key_here"

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{
  "model": "gemini-3.1-flash-lite-image",
  "prompt": "Create a short demo with Nanobanana 2 Lite Image Generation"
}'
```

Example response:

```json
{
  "id": "task_example",
  "status": "pending"
}
```

## Full First-Run Flow

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

See the complete examples:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

## What Is Nanobanana 2 Lite Image Generation?

Nanobanana 2 Lite Image Generation is represented here as an EvoLink model repository scaffold. Verify model availability, pricing, and final API behavior before public release.

## Supported Models / Workflows

| Model | ID |
|---|---|
| Nanobanana 2 Lite Image Generation | `gemini-3.1-flash-lite-image` |

## Choose the Right Model or Workflow

| Workflow | Use when |
|---|---|
| API | You need direct developer integration. |
| Skill | You want an agent to install and run the workflow. |

## Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

## Request Parameters

| Parameter | Type | Required | Notes |
|---|---:|---:|---|
| `model` | string | yes | Verified model id. |
| `prompt` | string | yes | User request or generation prompt. |

## Response Schema

Read [Response Schema](./docs/response-schema.md).

## Error Handling

Read [Errors](./docs/errors.md).

## Callback / Webhook

Read [Callbacks](./docs/callbacks.md).

## Pricing

Pricing must be verified from the official EvoLink pricing or model page before publication.

Read [Pricing](./docs/pricing.md).

## Examples by Language

- [cURL](./examples/curl)
- [Python](./examples/python)
- [JavaScript](./examples/javascript)

## Production Notes

- All requests require Bearer token authentication.
- Generation APIs are asynchronous.
- Store task IDs and final asset URLs.
- Save generated assets promptly because media URLs may expire.
- Prefer callbacks for production systems that should avoid long polling.

## Use Cases

- First-run API validation
- Agent skill installation
- Local scaffold review before public release

## FAQ

- **Is this release-ready?** This scaffold is local-first until smoke tests and owner approvals are recorded.

## Documentation

- [API Reference](./docs/api-reference.md)
- [Task Lifecycle](./docs/task-lifecycle.md)
- [Response Schema](./docs/response-schema.md)
- [Errors](./docs/errors.md)
- [Callbacks](./docs/callbacks.md)
- [Pricing](./docs/pricing.md)

## Related Repositories

- Guide / Prompt surface: nanobanana-2-lite-image-generate-api-skill
- API / Skill surface: nanobanana-2-lite-image-generate-api-skill

## License

MIT


## Agent Skill

This repository also contains an installable agent skill for `nanobanana-2-lite-image`.

- [Skill definition](./SKILL.md)
- [Agent install guide](./llms-install.md)
- [Local CLI installer](./bin/cli.js)

Run the local installer after review:

```bash
npx evolink-nanobanana-2-lite -y --path ~/.claude/skills
```

---

> **AI Agent?** Skip the README, go straight to [**llms-install.md**](llms-install.md) for step-by-step installation instructions designed for agents.

---

## Installation

### Quick Install

```bash
npx evolink-nanobanana-2-lite -y --path ~/.claude/skills
```

### Run Directly

```bash
npx evolink-nanobanana-2-lite "Create a short Nanobanana 2 Lite Image Generation demo"
```

### Agent Auto-Install

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills

Then read ~/.claude/skills/nanobanana-2-lite-image/SKILL.md and run a dry run before calling the real API.
```

### Manual Install

```bash
git clone https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

## 🖼️ Showcase

| Example | Result |
|---|---|
| First successful API call | Polls until completed and prints the final URL / text / file. |
| Agent skill install | Installs `SKILL.md`, `_meta.json`, `scripts/`, and `references/`. |
| Dry run | Prints the request payload without spending API credits. |

## Troubleshooting

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun `npx evolink-nanobanana-2-lite -y --path <skills-dir>`. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| API returns `429` or `5xx` | Retry within the approved test budget and record the failure output. |
| Polling times out | Keep the task id, inspect the dashboard, and do not resubmit blindly. |

## Compatibility

| Agent | Install command |
|---|---|
| Claude Code | `npx evolink-nanobanana-2-lite -y --path ~/.claude/skills` |
| Codex | `npx evolink-nanobanana-2-lite -y --path ~/.codex/skills` |
| OpenClaw | `npx evolink-nanobanana-2-lite -y --path ~/.openclaw/skills` |
| Hermes | `npx evolink-nanobanana-2-lite -y --path ~/.hermes/skills` |

<p align="center">Powered by EvoLink</p>
