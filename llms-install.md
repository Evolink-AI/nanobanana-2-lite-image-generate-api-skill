# Nanobanana 2 Lite Image Generation — Agent Installation Guide

You are an AI agent. Follow these steps to install the Nanobanana 2 Lite Image Generation skill.

## Step 1: Install

Run this command (silent mode, no user interaction needed):

```bash
npx evolink-nanobanana-2-lite@latest -y --path {SKILLS_DIR}
```

Replace `{SKILLS_DIR}` with your skills directory:

| Agent | SKILLS_DIR |
|-------|-----------|
| Claude Code | `~/.claude/skills` |
| OpenCode | `~/.opencode/skills` |
| OpenClaw | omit `--path` (auto-detected) |
| Cursor | project `.cursor/skills` or `~/.cursor/skills` |
| Other | ask the user where to install |

## Step 2: Set API Key

Check if `EVOLINK_API_KEY` is already set:

```bash
echo $EVOLINK_API_KEY
```

If empty, ask the user for their EvoLink API key. They can get one at https://evolink.ai/signup

Once they provide it, set it for the current session:

```bash
export EVOLINK_API_KEY=their_key_here
```

## Step 3: Load the Skill Definition

Run this command to get the complete skill definition (interaction flow, script usage, output protocol):

```bash
npx evolink-nanobanana-2-lite@latest --skill
```

Read the output carefully — it tells you exactly how to handle user requests.

Alternatively, read the installed file directly:

```
{SKILLS_DIR}/nanobanana-2-lite-image/SKILL.md
```

## Quick Verify

Test that the script works:

```bash
EVOLINK_API_KEY=$EVOLINK_API_KEY {SKILLS_DIR}/nanobanana-2-lite-image/scripts/nanobanana-2-lite-image.sh "Create a short Nanobanana 2 Lite Image Generation demo" --dry-run
```

If you see a JSON payload with `"model": "gemini-3.1-flash-lite-image"`, the installation is correct.

## One-Liner (If User Provides API Key Upfront)

```bash
EVOLINK_API_KEY=their_key npx evolink-nanobanana-2-lite@latest -y --path {SKILLS_DIR}
```

This installs the skill AND verifies the API key in one step.

## Available Commands

| Command | Purpose |
|---------|---------|
| `npx evolink-nanobanana-2-lite --llms` | Print this installation guide |
| `npx evolink-nanobanana-2-lite --skill` | Print the SKILL.md (skill definition) |
| `npx evolink-nanobanana-2-lite -y --path <dir>` | Silent install to a directory |
| `npx evolink-nanobanana-2-lite --help` | Show all options |
| `npx evolink-nanobanana-2-lite --version` | Show version |
