---
name: nanobanana-2-lite-image
description: Use Nanobanana 2 Lite Image Generation through EvoLink with runnable examples, API key guidance, and task polling.
homepage: https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill
metadata: {"openclaw":{"homepage":"https://github.com/Evolink-AI/nanobanana-2-lite-image-generate-api-skill","requires":{"bins":["jq","curl"],"env":["EVOLINK_API_KEY"]},"primaryEnv":"EVOLINK_API_KEY"}}
---

# Nanobanana 2 Lite Image Generation

Nanobanana 2 Lite Image Generation is exposed here as an EvoLink API endpoint with a matching installable agent skill.

## When to Activate This Skill

Activate this skill when the user asks to:
- Use Nanobanana 2 Lite Image Generation
- Run Nanobanana 2 Lite Image Generation via EvoLink
- Generate a model output
- Test the API flow

Keywords: nanobanana-2-lite-image-generation, evolink, api, agent, skill

## Script Location

**IMPORTANT**: All script paths in this file are relative to the directory containing this SKILL.md file. Before running any script, resolve the absolute path:

```
SKILL_DIR = directory containing this SKILL.md file
Script = {SKILL_DIR}/scripts/nanobanana-2-lite-image.sh
```

For example, if this SKILL.md is at `~/.claude/skills/nanobanana-2-lite-image/SKILL.md`, then the script is at `~/.claude/skills/nanobanana-2-lite-image/scripts/nanobanana-2-lite-image.sh`.

## After Installation

When this skill is first loaded, proactively greet the user and start the setup:

1. Check if `EVOLINK_API_KEY` is set (run: `echo $EVOLINK_API_KEY`)
   - **If not set:** "To run the model, you'll need an EvoLink API key. Open https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image, create a key, then paste it here and I will set it for this session."
   - **If already set:** "You're all set! What would you like to do with Nanobanana 2 Lite Image Generation?"

2. That's it. One question. The user is now in the flow.

Do NOT list features, show a menu, or dump instructions. Just ask one question to move forward.

## Core Principles

1. **Guide, don't decide** — Present options and let the user decide. Don't make assumptions about their preferences.
2. **Let the user drive** — If they have an idea, use their words. If they need inspiration, offer suggestions and let them choose or refine.
3. **Smart context awareness** — Recognize what the user has already provided and only ask about missing pieces.
4. **Intent first** — If the user's intent is unclear, confirm what they want before proceeding.

## Flow

### Step 1: Check for API Key

If the user hasn't provided an API key or set `EVOLINK_API_KEY`:

- Tell them they need an EvoLink API Key
- Guide them to open https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image and get a key from the dashboard
- Once they provide a key, proceed to Step 2

If the key is already set or provided, skip directly to Step 2.

### Step 2: Understand Intent

Assess what the user wants based on their message:

- **Intent is clear** (e.g., "Run Nanobanana 2 Lite Image Generation with a short prompt") -> Go to Step 3
- **Intent is ambiguous** (e.g., "I want to try it") -> Ask what they'd like to do.

### Step 3: Gather Missing Information

Check what the user has already provided and **only ask about what's missing**:

| Parameter | What to tell the user | Required? |
|-----------|----------------------|-----------|
| **TBD** | TBD | Yes |
| **TBD** | TBD | Yes |
| **TBD** | TBD | Optional |
| **TBD** | TBD | Optional |

**Smart gathering rules — STRICT:**
- **Ask ALL missing parameters in ONE single message.** Never split into multiple rounds of questions.
- **Never ask the same question twice.** If the user already answered a parameter, it is final — do not re-ask it.
- **Offer defaults upfront** so users can say "default is fine": `model=gemini-3.1-flash-lite-image, prompt='Create a short demo'`. If the user says "default" or "just go", use these values immediately.
- User gives everything at once -> Confirm and run the model immediately, no further questions.
- User gives partial info -> Ask only the remaining missing required fields, all in one message.
- Optional params all have sensible defaults — if the user skips them, use defaults and proceed.

### Step 4: Execute

Once all required information is confirmed:

1. **Before running the script**, immediately tell the user: "Got it! I will run Nanobanana 2 Lite Image Generation through EvoLink."
2. Run the script **once**. **NEVER run it a second time** unless the user explicitly asks to retry.
3. When complete, share the result and elapsed time.

#### Execution Pattern by Agent

**Claude Code** — use the Bash tool with `run_in_background: true`, then read the output file to check progress:

```
# Step 1: Run in background (resolves SKILL_DIR first)
Bash(command: "{SKILL_DIR}/scripts/nanobanana-2-lite-image.sh \"input\" --dry-run true", run_in_background: true, timeout: 300000)

# Step 2: Wait ~30 seconds, then read the background task output file to check for RESULT_URL= or STATUS_UPDATE lines

# Step 3: When you see RESULT_URL=<value>, relay it to the user
```

**OpenClaw / OpenCode / Cursor** — run the script as a blocking shell command (the script handles its own polling internally, typically completes in 2-10 minutes):

```bash
EVOLINK_API_KEY=$EVOLINK_API_KEY {SKILL_DIR}/scripts/nanobanana-2-lite-image.sh "input" --dry-run true
```

**All agents — critical rules:**
- Once you see `TASK_SUBMITTED:` in the output, the task is **already queued on the server**. Do NOT run the script again — retrying wastes the user's API credits.
- The script blocks until the task is ready (up to 5 minutes). Do NOT kill it prematurely.
- If the script times out with `POLL_TIMEOUT`, the task may still be processing — tell the user to check https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image.

## Script Usage

**Remember**: Replace `{SKILL_DIR}` with the actual directory containing this SKILL.md file.

```bash
# Set API key
export EVOLINK_API_KEY=your_key_here

# Basic
{SKILL_DIR}/scripts/nanobanana-2-lite-image.sh "Create a short Nanobanana 2 Lite Image Generation demo"

# With options
{SKILL_DIR}/scripts/nanobanana-2-lite-image.sh "Test prompt" --dry-run true --timeout TBD

# Advanced
{SKILL_DIR}/scripts/nanobanana-2-lite-image.sh "Dry run" --help TBD

# Dry run (preview payload without calling API)
{SKILL_DIR}/scripts/nanobanana-2-lite-image.sh "Test" --dry-run
```

## Script Output Protocol

The script writes structured lines to stdout that you must parse and act on:

| Line format | When | Your action |
|-------------|------|-------------|
| `TASK_SUBMITTED: task_id=<id> estimated=<Ns>` | Right after submission | **Confirm to the user that the task has started.** This means the API call succeeded — do NOT retry. |
| `STATUS_UPDATE: <message>` | Every ~15s during execution | **Relay to the user** — e.g., *"Still working, about 30 seconds remaining..."* |
| `RESULT_URL=<value>` | On success | Extract and present to the user |
| `ELAPSED=<Ns>` | On success | Optionally mention how long it took |
| `POLL_TIMEOUT: task_id=<id> dashboard=<url>` | Polling exceeded 5 min | Tell user: "Your task may already be done — check <dashboard_url> (task: `<id>`)" |
| `ERROR: ...` (stderr) | On failure | Surface the error message to the user |

**Critical**: Once you see `TASK_SUBMITTED:`, the task is queued on the server. **Do NOT run the script again.** Retrying wastes the user's API credits. If the script times out locally, the task may still complete — tell the user to check their dashboard at https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image.

## Error Handling

Provide friendly, actionable messages:

| Error | What to tell the user |
|-------|----------------------|
| Invalid/missing key (401) | "Your API key doesn't seem to work. You can check it at https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image" |
| Insufficient balance (402) | "Your account balance is low. You can add credits at https://evolink.ai/dashboard/keys?utm_source=skill&utm_medium=install&utm_campaign=nanobanana-2-lite-image" |
| Rate limited (429) | "Too many requests — let's wait a moment and try again" |
| Content blocked (400) | "This input was flagged by content moderation. Try adjusting it" |
| Service unavailable (503) | "The service is temporarily busy. Let's try again in a minute" |

## Model Capabilities Summary

Use this when the user asks what the model can do:

- **API quickstart**: Create a task, poll for completion, and inspect the final response.
- **Agent skill**: Use SKILL.md plus scripts to guide agent execution.
- **Troubleshooting**: Use docs/errors.md and complete examples to debug common failures.
- **Release prep**: Keep package metadata consistent before public release.

## References

- `references/api-params.md`: Complete API parameter reference
- `scripts/nanobanana-2-lite-image.sh`: Run a Nanobanana 2 Lite Image Generation task through EvoLink.
