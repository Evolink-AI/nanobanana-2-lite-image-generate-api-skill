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

## Step 2: Get, Paste, And Verify API Key

After installation, you must complete the key handoff before telling the user the skill is ready.

Check if `EVOLINK_API_KEY` is already set:

```bash
echo $EVOLINK_API_KEY
```

If empty or invalid:

1. Open this tracked EvoLink key page for the user if your agent environment can open URLs. If not, show it as a clickable link:

```text
https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image
```

2. Tell the user to sign in, create an API key, return to the agent chat, and paste the key.
3. Set the pasted key for the current session:

```bash
export EVOLINK_API_KEY=their_key_here
```

4. Verify the key with the credits endpoint. This does not create an image task and does not spend generation credits:

Machine-readable handoff marker:

```text
ENV_VAR_EXPORT=export EVOLINK_API_KEY=their_key_here
```

Use the credits endpoint as a non-generating endpoint. It does not create a generation task.

```bash
curl --silent --show-error --fail \
  https://api.evolink.ai/v1/credits \
  -H "Authorization: Bearer $EVOLINK_API_KEY" >/dev/null
```

If verification fails, ask the user to check the key page and paste a fresh key. Do not proceed to first use until verification succeeds or the user explicitly chooses to skip.

5. After verification succeeds, tell the user:

```text
The skill is ready. Your EvoLink API key is verified. You can now ask: "Use Nanobanana 2 Lite Image Generation to create a blue ceramic cup on a white table."
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

This installs the skill and verifies the API key in one step. It does not create an image task.

## Available Commands

| Command | Purpose |
|---------|---------|
| `npx evolink-nanobanana-2-lite --llms` | Print this installation guide |
| `npx evolink-nanobanana-2-lite --skill` | Print the SKILL.md (skill definition) |
| `npx evolink-nanobanana-2-lite -y --path <dir>` | Silent install to a directory |
| `npx evolink-nanobanana-2-lite --help` | Show all options |
| `npx evolink-nanobanana-2-lite --version` | Show version |
