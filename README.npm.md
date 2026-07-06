# Nanobanana 2 Lite Image Generation NPM Package

<p align="center">
  <strong>Install the EvoLink agent skill from npm, then run Nanobanana 2 Lite Image Generation through the API.</strong>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image">
    <img src="assets/banner.jpg" alt="Nanobanana 2 Lite Image Generation API and agent skill banner" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/evolink-nanobanana-2-lite"><img src="https://img.shields.io/npm/v/evolink-nanobanana-2-lite?color=cb3837&label=npm" alt="NPM version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill/stargazers"><img src="https://img.shields.io/github/stars/Evolink-AI/nanobanana-2-lite-image-generate-api-skill?style=flat" alt="GitHub stars"></a>
  <a href="https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill/commits/main/"><img src="https://img.shields.io/github/last-commit/Evolink-AI/nanobanana-2-lite-image-generate-api-skill" alt="Last commit"></a>
</p>

<p align="center">
  <a href="#menu">Menu</a> •
  <a href="#installation">Install</a> •
  <a href="#agent-auto-install">Agent Auto-Install</a> •
  <a href="#api-quick-start">API Quick Start</a> •
  <a href="#showcase">Showcase</a> •
  <a href="https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image">Get API Key</a>
</p>

> **NPM package surface:** this README is rendered on npm from `README.npm.md`. Every API-key link on this page uses npm/package attribution. Installer runtime output still prints its own installer attribution URL after the package runs.

> **AI Agent?** Start here: use `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` as the primary Agent install command. Use `npx` only as a fallback or direct CLI path.

---

<a id="menu"></a>

## 📑 Menu

- [Agent Skill First](#agent-skill-first)
- [Installation](#installation)
- [Agent Auto-Install](#agent-auto-install)
- [Getting an API Key](#getting-an-api-key)
- [API Quick Start](#api-quick-start)
- [Full First-Run Flow](#full-first-run-flow)
- [API Reference](#api-reference)
- [Showcase](#showcase)
- [Troubleshooting](#troubleshooting)
- [Compatibility](#compatibility)
- [Community](#community)
- [License](#license)

---

<a id="agent-skill-first"></a>

## Agent Skill First

This npm package is designed for agents and developers who want a one-line install path. The primary workflow is to install the skill with `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill`, let the agent read the installed `SKILL.md`, and only then call the EvoLink API.

| Skill slug | NPM package | Model ID | Primary env var |
|---|---|---|---|
| nanobanana-2-lite-image | evolink-nanobanana-2-lite | `gemini-3.1-flash-lite-image` | `EVOLINK_API_KEY` |

---

<a id="installation"></a>

## Installation

Install into your agent skills directory. Use `npx skills add` as the primary Agent install path for Claude Code, Codex, OpenClaw, Hermes, and other agent runtimes. Use `npx` only as a fallback or direct CLI path.

### Agent Install (Recommended)

```bash
npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill
```

### Install via npm (Fallback / Direct CLI)

```bash
npx evolink-nanobanana-2-lite@latest
```

```bash
npx evolink-nanobanana-2-lite@latest -y
```

```bash
npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills
```

```bash
npx evolink-nanobanana-2-lite@latest "Create a short Nanobanana 2 Lite Image Generation demo"
```

### Manual Install

```bash
git clone https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

### Agent Auto-Install

Use the copy-paste prompts in the next section when an agent needs to install the skill by itself.

The prompt blocks below use npm/package API-key attribution because the user is reading them on the npm package page. The installed CLI will print the installer-runtime key URL during setup.

---

<a id="agent-auto-install"></a>

## Agent Auto-Install

### Claude Code

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read the installed nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
If `npx skills` is unavailable, use this fallback: `npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills`.
```

### Codex

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read the installed nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
If `npx skills` is unavailable, use this fallback: `npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills`.
```

### OpenClaw

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read the installed nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
If `npx skills` is unavailable, use this fallback: `npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills`.
```

### One-Liner

```bash
EVOLINK_API_KEY=your_key_here npx evolink-nanobanana-2-lite@latest "Create a blue ceramic cup on a white table"
```

---

<a id="getting-an-api-key"></a>

## Getting an API Key

1. Open [EvoLink API Keys](https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image).
2. Sign in or create an EvoLink account if prompted on that page.
3. Create a new API key.
4. Export the key as `EVOLINK_API_KEY`.
5. Run a dry run before spending credits on a real generation.

---

<a id="api-quick-start"></a>

## API Quick Start

Use the same API key with the image generation endpoint.

```bash
export EVOLINK_API_KEY="your_key_here"

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header "Content-Type: application/json" \
  --header "X-EvoLink-Source: skill" \
  --header "X-EvoLink-Skill: nanobanana-2-lite-image" \
  --header "X-EvoLink-Package: evolink-nanobanana-2-lite" \
  --header "X-EvoLink-Campaign: nanobanana-2-lite-image" \
  --header "X-EvoLink-Touchpoint: first_run" \
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

---

<a id="full-first-run-flow"></a>

## Full First-Run Flow

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

---

<a id="api-reference"></a>

## API Reference

### What Is Nanobanana 2 Lite Image Generation?

Nanobanana 2 Lite Image Generation is an EvoLink image generation endpoint for text-to-image, image-to-image, and image editing workflows through the `gemini-3.1-flash-lite-image` model.

### Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

### Request Parameters

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Prompt describing the image to generate or how to edit input images. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; supported values include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, and more. |
| `quality` | string | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | string array | no | Reference images for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for task completion, failure, or cancellation. |

### Pricing and Billing

EvoLink returns usage details in the task creation response. The official example uses `billing_rule: "per_call"` and `credits_reserved: 8.7`; check the returned `usage` object and the EvoLink dashboard for the current account-specific charge before high-volume use.

### Documentation

- [Read the API reference](./docs/api-reference.md)
- [Read the task lifecycle guide](./docs/task-lifecycle.md)
- [Read the response schema](./docs/response-schema.md)
- [Read error handling guidance](./docs/errors.md)
- [Read callback and webhook guidance](./docs/callbacks.md)
- [Read pricing and billing notes](./docs/pricing.md)

---

<a id="showcase"></a>

## 🖼️ Showcase

| Example | Result |
|---|---|
| First successful API call | Polls until completed and prints the final URL / text / file. |
| Agent skill install | Installs `SKILL.md`, `_meta.json`, `scripts/`, and `references`. |
| Dry run | Prints the request payload without spending API credits. |

---

<a id="troubleshooting"></a>

## Troubleshooting

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun the `npx` command. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| Polling times out | Keep the task ID, inspect the dashboard, and avoid blind resubmission. |

---

<a id="compatibility"></a>

## Compatibility

| Agent | Install command |
|---|---|
| Claude Code | `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` |
| Codex | `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` |
| OpenClaw | `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` |
| Hermes | `npx skills add Evolink-AI/nanobanana-2-lite-image-generate-api-skill` |

---

<a id="community"></a>

## Community

- [Read the official EvoLink Nanobanana 2 Lite API docs](https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate)
- [View this repository on GitHub](https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill)
- [Open the EvoLink API key page](https://evolink.ai/dashboard/keys?utm_source=npm&utm_medium=package&utm_campaign=nanobanana-2-lite-image)

---

<a id="license"></a>

## License

MIT

<p align="center">Powered by EvoLink</p>
