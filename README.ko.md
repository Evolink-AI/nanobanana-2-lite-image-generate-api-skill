# Nanobanana 2 Lite Image Generation 에이전트 스킬 및 API 가이드

<p align="center">
  <strong>먼저 EvoLink 에이전트 스킬을 설치한 뒤 API로 Nanobanana 2 Lite Image Generation을 실행하세요.</strong>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image">
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
  <a href="https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image">Get API Key</a>
</p>

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-Read-111111" alt="English"></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-Ver-ffb703" alt="Español"></a>
  <a href="README.pt.md"><img src="https://img.shields.io/badge/🇵🇹_Português-Ver-2a9d8f" alt="Português"></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-表示-52b788" alt="日本語"></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-보기-4ea8de" alt="한국어"></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-Ansehen-f4a261" alt="Deutsch"></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-Voir-e76f51" alt="Français"></a>
  <a href="README.tr.md"><img src="https://img.shields.io/badge/🇹🇷_Türkçe-Görüntüle-d62828" alt="Türkçe"></a>
  <a href="README.zh-TW.md"><img src="https://img.shields.io/badge/🇹🇼_繁體中文-查看-8338ec" alt="繁體中文"></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_简体中文-查看-ef476f" alt="简体中文"></a>
  <a href="README.ru.md"><img src="https://img.shields.io/badge/🇷🇺_Русский-Смотреть-577590" alt="Русский"></a>
</p>

---

> **AI 에이전트인가요?** 여기서 시작하세요. `npx`로 스킬을 설치한 다음 에이전트별 설정을 위해 [**llms-install.md**](llms-install.md)를 읽으세요.

---

<a id="menu"></a>

## 📑 Menu

- [에이전트 스킬 먼저](#agent-skill-first)
- [설치](#installation)
- [에이전트 자동 설치](#agent-auto-install)
- [API 키 받기](#getting-an-api-key)
- [API 빠른 시작](#api-quick-start)
- [첫 실행 전체 흐름](#full-first-run-flow)
- [API 레퍼런스](#api-reference)
- [Showcase](#showcase)
- [문제 해결](#troubleshooting)
- [호환성](#compatibility)
- [커뮤니티](#community)
- [라이선스](#license)

---

<a id="agent-skill-first"></a>

## 에이전트 스킬 먼저

이 저장소는 한 줄 설치 경로가 필요한 에이전트와 개발자를 위해 설계되었습니다. 기본 흐름은 `npx`로 스킬을 설치하고, 에이전트가 `SKILL.md`를 읽은 다음 EvoLink API를 호출하는 것입니다.

| Skill slug | NPM package | Model ID | Primary env var |
|---|---|---|---|
| nanobanana-2-lite-image | evolink-nanobanana-2-lite | `gemini-3.1-flash-lite-image` | `EVOLINK_API_KEY` |

---

<a id="installation"></a>

## 설치

에이전트 skills 디렉터리에 설치합니다. Claude Code, Codex, OpenClaw, Hermes에는 npm을 사용합니다. OpenClaw 사용자는 GitHub에서 직접 설치할 수도 있습니다.

### OpenClaw

```bash
openclaw skills add https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill
```

### npm으로 설치(권장)

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

### 수동 설치

```bash
git clone https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

### 에이전트 자동 설치

에이전트가 직접 skill을 설치해야 할 때는 다음 섹션의 복사 가능한 prompt를 사용하세요.

---

<a id="agent-auto-install"></a>

## 에이전트 자동 설치

### Claude Code

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read ~/.claude/skills/nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
```

### Codex

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read ~/.codex/skills/nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
```

### OpenClaw

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills

After installation, open this tracked key URL for the user: https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image
Ask the user to sign in, create an API key, return to this agent chat, and paste the key.
Set it as EVOLINK_API_KEY for this session, verify it with `curl --fail https://api.evolink.ai/v1/credits -H "Authorization: Bearer $EVOLINK_API_KEY"`, then read ~/.openclaw/skills/nanobanana-2-lite-image/SKILL.md.
After verification succeeds, tell the user: "The skill is ready. You can ask: Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
```

### One-Liner

```bash
EVOLINK_API_KEY=your_key_here npx evolink-nanobanana-2-lite@latest "Create a blue ceramic cup on a white table"
```

---

<a id="getting-an-api-key"></a>

## API 키 받기

1. [EvoLink API Keys](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)를 엽니다.
2. 페이지에서 요청하면 EvoLink에 로그인하거나 계정을 만듭니다.
3. 새 API 키를 만듭니다.
4. 키를 `EVOLINK_API_KEY`로 내보냅니다.
5. 실제 생성에 크레딧을 쓰기 전에 dry run을 실행합니다.

---

<a id="api-quick-start"></a>

## API 빠른 시작

동일한 API 키를 이미지 생성 endpoint에 사용합니다.

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

예시 응답:

```json
{
  "id": "task_example",
  "status": "pending"
}
```

---

<a id="full-first-run-flow"></a>

## 첫 실행 전체 흐름

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

---

<a id="api-reference"></a>

## API 레퍼런스

### Nanobanana 2 Lite Image Generation이란?

Nanobanana 2 Lite Image Generation은 `gemini-3.1-flash-lite-image` 모델을 통해 텍스트-이미지, 이미지-이미지, 이미지 편집 워크플로를 제공하는 EvoLink 이미지 생성 endpoint입니다.

### Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

### 요청 파라미터

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Prompt describing the image to generate or how to edit input images. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; supported values include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, and more. |
| `quality` | string | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | string array | no | Reference images for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for task completion, failure, or cancellation. |

### 가격 및 과금

EvoLink는 작업 생성 응답에 사용량 정보를 반환합니다. 공식 예시는 `billing_rule: "per_call"` 및 `credits_reserved: 8.7`을 사용합니다. 대량 사용 전 반환된 `usage` 객체와 EvoLink 대시보드에서 현재 계정별 요금을 확인하세요.

### 문서

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

## 문제 해결

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun the `npx` command. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| Polling times out | Keep the task ID, inspect the dashboard, and avoid blind resubmission. |

---

<a id="compatibility"></a>

## 호환성

| Agent | Install command |
|---|---|
| Claude Code | `npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills` |
| Codex | `npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills` |
| OpenClaw | `npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills` |
| Hermes | `npx evolink-nanobanana-2-lite@latest -y --path ~/.hermes/skills` |

---

<a id="community"></a>

## 커뮤니티

- [Read the official EvoLink Nanobanana 2 Lite API docs](https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate)
- [View this repository on GitHub](https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill)
- [EvoLink API 키 페이지 열기](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)

---

<a id="license"></a>

## 라이선스

MIT

<p align="center">Powered by EvoLink</p>
