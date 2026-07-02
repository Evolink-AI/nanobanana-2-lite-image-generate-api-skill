# Nanobanana 2 Lite Image Generation Agent Skill ve API Rehberi

<p align="center">
  <strong>Önce EvoLink agent skill kurulumunu yapın, ardından API üzerinden Nanobanana 2 Lite Image Generation çalıştırın.</strong>
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

> **AI agent misiniz?** Buradan başlayın: skill’i `npx` ile kurun, ardından agent’a özel kurulum için [**llms-install.md**](llms-install.md) dosyasını okuyun.

---

<a id="menu"></a>

## 📑 Menu

- [Önce agent skill](#agent-skill-first)
- [Kurulum](#installation)
- [Agent otomatik kurulum](#agent-auto-install)
- [API anahtarı alma](#getting-an-api-key)
- [API hızlı başlangıç](#api-quick-start)
- [İlk çalıştırma akışı](#full-first-run-flow)
- [API referansı](#api-reference)
- [Showcase](#showcase)
- [Sorun giderme](#troubleshooting)
- [Uyumluluk](#compatibility)
- [Topluluk](#community)
- [Lisans](#license)

---

<a id="agent-skill-first"></a>

## Önce agent skill

Bu depo, tek satırlık kurulum isteyen agent’lar ve geliştiriciler için tasarlanmıştır. Ana akış: skill’i `npx` ile kur, agent’ın `SKILL.md` dosyasını okumasını sağla ve ardından EvoLink API çağrısını yap.

| Skill slug | NPM package | Model ID | Primary env var |
|---|---|---|---|
| nanobanana-2-lite-image | evolink-nanobanana-2-lite | `gemini-3.1-flash-lite-image` | `EVOLINK_API_KEY` |

---

<a id="installation"></a>

## Kurulum

Agent skills dizininize kurun. Claude Code, Codex, OpenClaw ve Hermes için npm kullanın; OpenClaw kullanıcıları GitHub üzerinden doğrudan da kurabilir.

### OpenClaw

```bash
openclaw skills add https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill
```

### npm ile kurulum (önerilen)

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

### Manuel kurulum

```bash
git clone https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

### Agent otomatik kurulum

Bir agent skill’i kendi başına kuracaksa sonraki bölümdeki kopyalanabilir prompt’ları kullanın.

---

<a id="agent-auto-install"></a>

## Agent otomatik kurulum

### Claude Code

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills

After installation, set EVOLINK_API_KEY, read ~/.claude/skills/nanobanana-2-lite-image/SKILL.md, then run one dry run before calling the real API.
```

### Codex

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills

After installation, set EVOLINK_API_KEY, read ~/.codex/skills/nanobanana-2-lite-image/SKILL.md, then run one dry run before calling the real API.
```

### OpenClaw

```text
Install the Nanobanana 2 Lite Image Generation skill by running:

npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills

After installation, set EVOLINK_API_KEY, read ~/.openclaw/skills/nanobanana-2-lite-image/SKILL.md, then run one dry run before calling the real API.
```

### One-Liner

```bash
EVOLINK_API_KEY=your_key_here npx evolink-nanobanana-2-lite@latest "Create a blue ceramic cup on a white table"
```

---

<a id="getting-an-api-key"></a>

## API anahtarı alma

1. [EvoLink hesabınızı oluşturun veya açın](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image).
2. [EvoLink dashboard içinde bir API anahtarı oluşturun](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image).
3. Anahtarı `EVOLINK_API_KEY` olarak export edin.
4. Gerçek üretimde kredi harcamadan önce dry run çalıştırın.

---

<a id="api-quick-start"></a>

## API hızlı başlangıç

Aynı API anahtarını görüntü üretim endpoint’iyle kullanın.

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

Örnek yanıt:

```json
{
  "id": "task_example",
  "status": "pending"
}
```

---

<a id="full-first-run-flow"></a>

## İlk çalıştırma akışı

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

---

<a id="api-reference"></a>

## API referansı

### Nanobanana 2 Lite Image Generation nedir?

Nanobanana 2 Lite Image Generation, `gemini-3.1-flash-lite-image` modeli üzerinden metinden görüntüye, görüntüden görüntüye ve görüntü düzenleme iş akışları sunan bir EvoLink görüntü üretim endpoint’idir.

### Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

### İstek parametreleri

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Prompt describing the image to generate or how to edit input images. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; supported values include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, and more. |
| `quality` | string | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | string array | no | Reference images for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for task completion, failure, or cancellation. |

### Fiyatlandırma ve faturalandırma

EvoLink, görev oluşturma yanıtında kullanım ayrıntılarını döndürür. Resmi örnek `billing_rule: "per_call"` ve `credits_reserved: 8.7` kullanır; yüksek hacimli kullanımdan önce dönen `usage` nesnesini ve EvoLink dashboard’unu kontrol edin.

### Dokümantasyon

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

## Sorun giderme

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun the `npx` command. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| Polling times out | Keep the task ID, inspect the dashboard, and avoid blind resubmission. |

---

<a id="compatibility"></a>

## Uyumluluk

| Agent | Install command |
|---|---|
| Claude Code | `npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills` |
| Codex | `npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills` |
| OpenClaw | `npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills` |
| Hermes | `npx evolink-nanobanana-2-lite@latest -y --path ~/.hermes/skills` |

---

<a id="community"></a>

## Topluluk

- [Read the official EvoLink Nanobanana 2 Lite API docs](https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate)
- [View this repository on GitHub](https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill)
- [Open the EvoLink signup page](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)

---

<a id="license"></a>

## Lisans

MIT

<p align="center">Powered by EvoLink</p>
