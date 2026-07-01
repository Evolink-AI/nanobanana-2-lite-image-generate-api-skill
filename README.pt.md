# Skill de agente e guia de API do Nanobanana 2 Lite Image Generation

<p align="center">
  <strong>Instale primeiro o skill de agente da EvoLink e depois execute o Nanobanana 2 Lite Image Generation pela API.</strong>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill">
    <img src="assets/banner.jpg" alt="Nanobanana 2 Lite Image Generation API and agent skill banner" width="100%" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/evolink-nanobanana-2-lite"><img src="https://img.shields.io/npm/v/evolink-nanobanana-2-lite?color=cb3837&label=npm" alt="NPM version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill/stargazers"><img src="https://img.shields.io/github/stars/cheercheung/nanobanana-2-lite-image-generate-api-skill?style=flat" alt="GitHub stars"></a>
  <a href="https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill/commits/main/"><img src="https://img.shields.io/github/last-commit/cheercheung/nanobanana-2-lite-image-generate-api-skill" alt="Last commit"></a>
</p>

<p align="center">
  <a href="#menu">Menu</a> •
  <a href="#installation">Install</a> •
  <a href="#agent-auto-install">Agent Auto-Install</a> •
  <a href="#api-quick-start">API Quick Start</a> •
  <a href="#showcase">Showcase</a> •
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill">Get API Key</a>
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

> **Agente de IA?** Comece aqui: instale o skill com `npx` e depois leia [**llms-install.md**](llms-install.md) para a configuração específica do agente.

---

<a id="menu"></a>

## 📑 Menu

- [Skill de agente primeiro](#agent-skill-first)
- [Instalação](#installation)
- [Instalação automática para agentes](#agent-auto-install)
- [Como obter uma chave API](#getting-an-api-key)
- [Início rápido da API](#api-quick-start)
- [Fluxo completo da primeira execução](#full-first-run-flow)
- [Referência da API](#api-reference)
- [Showcase](#showcase)
- [Solução de problemas](#troubleshooting)
- [Compatibilidade](#compatibility)
- [Comunidade](#community)
- [Licença](#license)

---

<a id="agent-skill-first"></a>

## Skill de agente primeiro

Este repositório foi feito para agentes e desenvolvedores que querem uma instalação em uma linha. O fluxo principal é instalar o skill com `npx`, deixar o agente ler `SKILL.md` e só então chamar a API da EvoLink.

| Skill slug | NPM package | Model ID | Primary env var |
|---|---|---|---|
| nanobanana-2-lite-image | evolink-nanobanana-2-lite | `gemini-3.1-flash-lite-image` | `EVOLINK_API_KEY` |

---

<a id="installation"></a>

## Instalação

Instale no diretório de skills do seu agente. Use npm para Claude Code, Codex, OpenClaw e Hermes; usuários do OpenClaw também podem instalar diretamente pelo GitHub.

### OpenClaw

```bash
openclaw skills add https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill
```

### Instalar via npm (recomendado)

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

### Instalação manual

```bash
git clone https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

### Instalação automática para agentes

Use os prompts copiáveis da próxima seção quando um agente precisar instalar o skill sozinho.

---

<a id="agent-auto-install"></a>

## Instalação automática para agentes

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

## Como obter uma chave API

1. [Crie ou abra sua conta EvoLink](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill).
2. [Crie uma chave API no painel da EvoLink](https://evolink.ai/dashboard?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill).
3. Exporte a chave como `EVOLINK_API_KEY`.
4. Faça um dry run antes de gastar créditos em uma geração real.

---

<a id="api-quick-start"></a>

## Início rápido da API

Use a mesma chave API com o endpoint de geração de imagens.

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

Resposta de exemplo:

```json
{
  "id": "task_example",
  "status": "pending"
}
```

---

<a id="full-first-run-flow"></a>

## Fluxo completo da primeira execução

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

---

<a id="api-reference"></a>

## Referência da API

### O que é Nanobanana 2 Lite Image Generation?

Nanobanana 2 Lite Image Generation é um endpoint de geração de imagens da EvoLink para texto-para-imagem, imagem-para-imagem e edição de imagens usando o modelo `gemini-3.1-flash-lite-image`.

### Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

### Parâmetros da solicitação

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Prompt describing the image to generate or how to edit input images. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; supported values include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, and more. |
| `quality` | string | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | string array | no | Reference images for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for task completion, failure, or cancellation. |

### Preços e faturamento

A EvoLink retorna detalhes de uso na resposta de criação da tarefa. O exemplo oficial usa `billing_rule: "per_call"` e `credits_reserved: 8.7`; verifique o objeto `usage` retornado e o painel da EvoLink para saber a cobrança atual da conta antes de uso em volume.

### Documentação

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

## Solução de problemas

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun the `npx` command. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| Polling times out | Keep the task ID, inspect the dashboard, and avoid blind resubmission. |

---

<a id="compatibility"></a>

## Compatibilidade

| Agent | Install command |
|---|---|
| Claude Code | `npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills` |
| Codex | `npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills` |
| OpenClaw | `npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills` |
| Hermes | `npx evolink-nanobanana-2-lite@latest -y --path ~/.hermes/skills` |

---

<a id="community"></a>

## Comunidade

- [Read the official EvoLink Nanobanana 2 Lite API docs](https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate)
- [View this repository on GitHub](https://github.com/cheercheung/nanobanana-2-lite-image-generate-api-skill)
- [Open the EvoLink signup page](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image-generate-api-skill)

---

<a id="license"></a>

## Licença

MIT

<p align="center">Powered by EvoLink</p>
