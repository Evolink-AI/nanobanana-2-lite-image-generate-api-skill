# Nanobanana 2 Lite Image Generation エージェントスキルと API ガイド

<p align="center">
  <strong>最初に EvoLink のエージェントスキルをインストールし、その後 API で Nanobanana 2 Lite Image Generation を実行します。</strong>
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

> **AI エージェントですか？** まず `npx` でスキルをインストールし、エージェント向け設定として [**llms-install.md**](llms-install.md) を読んでください。

---

<a id="menu"></a>

## 📑 Menu

- [エージェントスキルを最初に](#agent-skill-first)
- [インストール](#installation)
- [エージェント自動インストール](#agent-auto-install)
- [API キーの取得](#getting-an-api-key)
- [API クイックスタート](#api-quick-start)
- [初回実行の完全な流れ](#full-first-run-flow)
- [API リファレンス](#api-reference)
- [Showcase](#showcase)
- [トラブルシューティング](#troubleshooting)
- [互換性](#compatibility)
- [コミュニティ](#community)
- [ライセンス](#license)

---

<a id="agent-skill-first"></a>

## エージェントスキルを最初に

このリポジトリは、1 行でインストールしたいエージェントと開発者向けです。基本フローは `npx` でスキルをインストールし、エージェントに `SKILL.md` を読ませてから EvoLink API を呼び出すことです。

| Skill slug | NPM package | Model ID | Primary env var |
|---|---|---|---|
| nanobanana-2-lite-image | evolink-nanobanana-2-lite | `gemini-3.1-flash-lite-image` | `EVOLINK_API_KEY` |

---

<a id="installation"></a>

## インストール

エージェントの skills ディレクトリにインストールします。Claude Code、Codex、OpenClaw、Hermes では npm を使います。OpenClaw ユーザーは GitHub から直接インストールすることもできます。

### OpenClaw

```bash
openclaw skills add https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill
```

### npm でインストール（推奨）

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

### 手動インストール

```bash
git clone https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill.git
cd nanobanana-2-lite-image-generate-api-skill
npm install
node bin/cli.js -y --path ~/.claude/skills
```

### エージェント自動インストール

エージェント自身に skill をインストールさせる場合は、次のセクションのコピー用 prompt を使ってください。

---

<a id="agent-auto-install"></a>

## エージェント自動インストール

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

## API キーの取得

1. [EvoLink アカウントを作成または開きます](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)。
2. [EvoLink ダッシュボードで API キーを作成します](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)。
3. キーを `EVOLINK_API_KEY` として export します。
4. 実際にクレジットを使う前に dry run を実行します。

---

<a id="api-quick-start"></a>

## API クイックスタート

同じ API キーを画像生成 endpoint で使います。

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

レスポンス例:

```json
{
  "id": "task_example",
  "status": "pending"
}
```

---

<a id="full-first-run-flow"></a>

## 初回実行の完全な流れ

1. Create a task with `POST /v1/images/generations`.
2. Store the returned task ID.
3. Poll `GET /v1/tasks/{task_id}` until the task is `completed`, or pass `callback_url`.
4. Save the final media URL from `results` or `result_data` before it expires.

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)

---

<a id="api-reference"></a>

## API リファレンス

### Nanobanana 2 Lite Image Generation とは？

Nanobanana 2 Lite Image Generation は、`gemini-3.1-flash-lite-image` モデルを通じてテキストから画像、画像から画像、画像編集を行う EvoLink の画像生成 endpoint です。

### Endpoints

| Purpose | Method | Path |
|---|---|---|
| Create task | `POST` | `/v1/images/generations` |
| Query task | `GET` | `/v1/tasks/{task_id}` |

### リクエストパラメータ

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `model` | string | yes | Use `gemini-3.1-flash-lite-image`. |
| `prompt` | string | yes | Prompt describing the image to generate or how to edit input images. Maximum 2000 tokens. |
| `size` | string | no | Aspect ratio. Defaults to `auto`; supported values include `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `21:9`, and more. |
| `quality` | string | no | Image quality. Default and supported value: `1K`. |
| `image_urls` | string array | no | Reference images for image-to-image or editing. Up to 14 images, each under 20MB, using `.jpeg`, `.jpg`, `.png`, or `.webp`. |
| `model_params` | object | no | Model extension parameters. |
| `callback_url` | string | no | HTTPS callback URL for task completion, failure, or cancellation. |

### 料金と課金

EvoLink はタスク作成レスポンスで使用量の詳細を返します。公式例では `billing_rule: "per_call"` と `credits_reserved: 8.7` が使われています。大量利用の前に、返された `usage` オブジェクトと EvoLink ダッシュボードで現在のアカウント課金を確認してください。

### ドキュメント

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

## トラブルシューティング

| Issue | Fix |
|---|---|
| `EVOLINK_API_KEY` is missing | Export `EVOLINK_API_KEY` before running the script. |
| Skill installed but agent cannot see it | Re-run with the correct `--path` for Claude Code, Codex, OpenClaw, or Hermes. |
| `jq` or `curl` is missing | Install the missing binary, then rerun the `npx` command. |
| API returns `401` or `403` | Verify the EvoLink key and account access. |
| Polling times out | Keep the task ID, inspect the dashboard, and avoid blind resubmission. |

---

<a id="compatibility"></a>

## 互換性

| Agent | Install command |
|---|---|
| Claude Code | `npx evolink-nanobanana-2-lite@latest -y --path ~/.claude/skills` |
| Codex | `npx evolink-nanobanana-2-lite@latest -y --path ~/.codex/skills` |
| OpenClaw | `npx evolink-nanobanana-2-lite@latest -y --path ~/.openclaw/skills` |
| Hermes | `npx evolink-nanobanana-2-lite@latest -y --path ~/.hermes/skills` |

---

<a id="community"></a>

## コミュニティ

- [Read the official EvoLink Nanobanana 2 Lite API docs](https://docs.evolink.ai/en/api-manual/image-series/nanobanana/nanobanana-2-lite-image-generate)
- [View this repository on GitHub](https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill)
- [Open the EvoLink signup page](https://evolink.ai/dashboard/keys?utm_source=github&utm_medium=readme&utm_campaign=nanobanana-2-lite-image)

---

<a id="license"></a>

## ライセンス

MIT

<p align="center">Powered by EvoLink</p>
